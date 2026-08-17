// Migrate nội dung từ d:\AI-Workspace\01_Semi\ (Markdown thuần, không frontmatter)
// sang src/content/articles/<category>/[subcategory/]<slug>.md (có frontmatter).
// Chỉ ĐỌC từ 01_Semi, không sửa/xóa gì ở đó.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { dump } from "js-yaml";

const ROOT = join(process.cwd(), "..");
const SRC_DIR = join(ROOT, "01_Semi");
const OUT_DIR = join(process.cwd(), "src", "content", "articles");

// sourceDir (tên thư mục gốc trong 01_Semi) -> slug danh mục
const CATEGORY_MAP = {
	"01_Kien_thuc_co_ban": { slug: "kien-thuc-co-ban" },
	"02_Khoa_hoc_Silicon": { slug: "khoa-hoc-silicon" },
	"03_Thiet_bi_ban_dan": {
		slug: "thiet-bi-ban-dan",
		subcategories: {
			"01_Transistor": "transistor",
			"02_Image_Sensor": "image-sensor",
			"03_Memory": "memory",
			"04_Power_Semiconductor": "power-semiconductor",
		},
	},
	"04_Quy_trinh_san_xuat": { slug: "quy-trinh-san-xuat" },
	"05_Mach_logic_co_ban": { slug: "mach-logic-co-ban" },
	"06_Phuong_phap_danh_gia": { slug: "phuong-phap-danh-gia" },
	"07_Ky_thuat_gia_cong": {
		slug: "ky-thuat-gia-cong",
		subcategories: { "01_Gia_cong_co_ban": "gia-cong-co-ban" },
	},
	"08_Pin_mat_troi": { slug: "pin-mat-troi" },
	"09_Nuoc_va_xu_ly_nuoc": { slug: "nuoc-va-xu-ly-nuoc" },
	"10_Test_va_do_tin_cay": { slug: "test-va-do-tin-cay" },
	"11_Kien_thuc_nganh": { slug: "kien-thuc-nganh" },
	"12_Tai_lieu_tham_khao": { slug: "tai-lieu-tham-khao" },
};

// 11 bài flagship (đợt 1) — đường dẫn tương đối trong 01_Semi -> widget slug (task 12-22 sẽ dùng)
const FLAGSHIP = {
	"01_Kien_thuc_co_ban/01_Ban_dan_la_gi.md": "resistivity-comparator",
	"01_Kien_thuc_co_ban/06_Pn_tiep_giap_va_cau_truc_dai.md": "pn-junction-bands",
	"02_Khoa_hoc_Silicon/01_Cau_truc_tinh_the_silicon.md": "crystal-lattice",
	"03_Thiet_bi_ban_dan/01_Transistor/14_CMOS_dac_diem_nguyen_ly.md": "mosfet-cross-section",
	"03_Thiet_bi_ban_dan/02_Image_Sensor/01_Image_sensor_la_gi.md": "photodiode-steps",
	"03_Thiet_bi_ban_dan/03_Memory/04_DRAM_cau_truc_nguyen_ly.md": "dram-cell",
	"04_Quy_trinh_san_xuat/06_Photolithography.md": "photolithography-steps",
	"05_Mach_logic_co_ban/07_Cac_loai_cong_logic.md": "logic-gate-sim",
	"07_Ky_thuat_gia_cong/01_Gia_cong_co_ban/05_Gia_cong_danh_bong.md": "polishing-before-after",
	"08_Pin_mat_troi/01_Pin_mat_troi_la_gi.md": "solar-iv-curve",
	"10_Test_va_do_tin_cay/03_Duong_cong_bon_tam_bathtub_curve.md": "bathtub-curve",
};

function slugifyFilename(filename) {
	const m = filename.match(/^(\d+)_(.+)\.md$/);
	if (!m) return null;
	const order = parseInt(m[1], 10);
	const slug = m[2].replace(/_/g, "-").toLowerCase();
	return { order, slug };
}

function parseArticle(raw) {
	const lines = raw.split(/\r?\n/);
	let title = null;
	let sourceUrl = null;
	const bodyLines = [];
	let titleTaken = false;

	for (const line of lines) {
		if (!titleTaken && /^#\s+/.test(line)) {
			title = line.replace(/^#\s+/, "").trim();
			titleTaken = true;
			continue;
		}
		const srcMatch = line.match(/^\*Nguồn:\s*(.+?)\*\s*$/);
		if (srcMatch) {
			sourceUrl = srcMatch[1].trim();
			continue;
		}
		bodyLines.push(line);
	}

	const body = bodyLines.join("\n").replace(/^\s+/, "").replace(/\s+$/, "") + "\n";
	return { title, sourceUrl, body };
}

function writeArticle({ category, subcategory, order, slug, title, sourceUrl, body, flagship, widget }) {
	const frontmatter = {
		title: title ?? slug,
		sourceUrl: sourceUrl ?? undefined,
		category,
		subcategory: subcategory ?? undefined,
		order,
		flagship: flagship ?? false,
		widget: widget ?? undefined,
	};
	// bỏ field undefined để YAML gọn
	for (const k of Object.keys(frontmatter)) {
		if (frontmatter[k] === undefined) delete frontmatter[k];
	}

	const yamlStr = dump(frontmatter, { lineWidth: -1 });
	const content = `---\n${yamlStr}---\n\n${body}`;

	const outDirPath = subcategory ? join(OUT_DIR, category, subcategory) : join(OUT_DIR, category);
	mkdirSync(outDirPath, { recursive: true });

	// nếu bài đã được chuyển tay sang .mdx (nhúng widget thật), không ghi đè/tạo lại .md trùng
	if (existsSync(join(outDirPath, `${slug}.mdx`))) return;

	writeFileSync(join(outDirPath, `${slug}.md`), content, "utf8");
}

function processDir(sourceDirName, catInfo) {
	const dirPath = join(SRC_DIR, sourceDirName);
	const entries = readdirSync(dirPath);
	let count = 0;

	for (const entry of entries) {
		const entryPath = join(dirPath, entry);
		const stat = statSync(entryPath);

		if (stat.isFile() && entry.endsWith(".md")) {
			const parsed = slugifyFilename(entry);
			if (!parsed) continue;
			const raw = readFileSync(entryPath, "utf8");
			const { title, sourceUrl, body } = parseArticle(raw);
			const relPath = relative(SRC_DIR, entryPath).split(sep).join("/");
			const flagshipWidget = FLAGSHIP[relPath];

			writeArticle({
				category: catInfo.slug,
				subcategory: undefined,
				order: parsed.order,
				slug: parsed.slug,
				title,
				sourceUrl,
				body,
				flagship: Boolean(flagshipWidget),
				widget: flagshipWidget,
			});
			count++;
		} else if (stat.isDirectory() && catInfo.subcategories?.[entry]) {
			const subSlug = catInfo.subcategories[entry];
			const subEntries = readdirSync(entryPath);
			for (const subEntry of subEntries) {
				if (!subEntry.endsWith(".md")) continue;
				const parsed = slugifyFilename(subEntry);
				if (!parsed) continue;
				const subEntryPath = join(entryPath, subEntry);
				const raw = readFileSync(subEntryPath, "utf8");
				const { title, sourceUrl, body } = parseArticle(raw);
				const relPath = relative(SRC_DIR, subEntryPath).split(sep).join("/");
				const flagshipWidget = FLAGSHIP[relPath];

				writeArticle({
					category: catInfo.slug,
					subcategory: subSlug,
					order: parsed.order,
					slug: parsed.slug,
					title,
					sourceUrl,
					body,
					flagship: Boolean(flagshipWidget),
					widget: flagshipWidget,
				});
				count++;
			}
		}
	}
	return count;
}

let total = 0;
for (const [sourceDirName, catInfo] of Object.entries(CATEGORY_MAP)) {
	const n = processDir(sourceDirName, catInfo);
	console.log(`${sourceDirName} -> ${catInfo.slug}: ${n} bài`);
	total += n;
}
console.log(`\nTổng cộng đã migrate: ${total} bài`);
