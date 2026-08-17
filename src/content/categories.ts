export interface SubcategoryMeta {
	slug: string;
	title: string;
	order: number;
}

export interface CategoryMeta {
	slug: string;
	title: string;
	order: number;
	/** Tên gốc thư mục trong 01_Semi, dùng cho script migrate. */
	sourceDir: string;
	subcategories?: SubcategoryMeta[];
}

export const categories: CategoryMeta[] = [
	{ slug: "kien-thuc-co-ban", title: "Kiến thức cơ bản", order: 1, sourceDir: "01_Kien_thuc_co_ban" },
	{ slug: "khoa-hoc-silicon", title: "Khoa học Silicon", order: 2, sourceDir: "02_Khoa_hoc_Silicon" },
	{
		slug: "thiet-bi-ban-dan",
		title: "Thiết bị bán dẫn",
		order: 3,
		sourceDir: "03_Thiet_bi_ban_dan",
		subcategories: [
			{ slug: "transistor", title: "Transistor", order: 1 },
			{ slug: "image-sensor", title: "Image Sensor", order: 2 },
			{ slug: "memory", title: "Memory", order: 3 },
			{ slug: "power-semiconductor", title: "Power Semiconductor", order: 4 },
		],
	},
	{ slug: "quy-trinh-san-xuat", title: "Quy trình sản xuất", order: 4, sourceDir: "04_Quy_trinh_san_xuat" },
	{ slug: "mach-logic-co-ban", title: "Mạch logic cơ bản", order: 5, sourceDir: "05_Mach_logic_co_ban" },
	{ slug: "phuong-phap-danh-gia", title: "Phương pháp đánh giá", order: 6, sourceDir: "06_Phuong_phap_danh_gia" },
	{
		slug: "ky-thuat-gia-cong",
		title: "Kỹ thuật gia công",
		order: 7,
		sourceDir: "07_Ky_thuat_gia_cong",
		subcategories: [{ slug: "gia-cong-co-ban", title: "Gia công cơ bản", order: 1 }],
	},
	{ slug: "pin-mat-troi", title: "Pin mặt trời", order: 8, sourceDir: "08_Pin_mat_troi" },
	{ slug: "nuoc-va-xu-ly-nuoc", title: "Nước và xử lý nước", order: 9, sourceDir: "09_Nuoc_va_xu_ly_nuoc" },
	{ slug: "test-va-do-tin-cay", title: "Test và độ tin cậy", order: 10, sourceDir: "10_Test_va_do_tin_cay" },
	{ slug: "kien-thuc-nganh", title: "Kiến thức ngành", order: 11, sourceDir: "11_Kien_thuc_nganh" },
	{ slug: "tai-lieu-tham-khao", title: "Tài liệu tham khảo", order: 12, sourceDir: "12_Tai_lieu_tham_khao" },
];

export function getCategory(slug: string): CategoryMeta | undefined {
	return categories.find((c) => c.slug === slug);
}

export function getSubcategory(categorySlug: string, subSlug: string): SubcategoryMeta | undefined {
	return getCategory(categorySlug)?.subcategories?.find((s) => s.slug === subSlug);
}
