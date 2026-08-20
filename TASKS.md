# TASKS — Website học Semiconductor tương tác

Nguồn kế hoạch gốc: `D:\ClaudeConfig\plans\d-n-t-o-s-glimmering-eagle.md`.
Nội dung nguồn: `d:\AI-Workspace\01_Semi\` (137 bài, 12 danh mục) — chỉ đọc, không sửa/xóa.
Stack: Astro + `@astrojs/mdx` + `@astrojs/svelte`, design đen/trắng/xanh dương kiểu "đọc code".

Mỗi task đủ nhỏ để làm trong 1 phiên làm việc. Xử lý tuần tự trừ khi ghi chú "độc lập".

- [x] 0. Ghi file `TASKS.md` này.
- [x] 1. Scaffold project Astro trong `02_Web/` (minimal + TypeScript), cài thêm: `@astrojs/mdx @astrojs/svelte svelte remark-gfm remark-math rehype-katex katex`. Xác nhận `npm run dev` chạy không lỗi.
- [x] 2. Design tokens + layout gốc: CSS variables (đen/trắng/xanh dương, dark/light), font (monospace cho heading/code, sans-serif cho thân bài hỗ trợ dấu tiếng Việt), `BaseLayout.astro`/`Header.astro`/`Footer.astro`.
- [x] 3. Content collection schema + metadata 12 danh mục: `src/content/config.ts` (title, description, sourceUrl, category, subcategory?, order, flagship?, widget?), `src/content/categories.ts`.
- [x] 4. Script migrate nội dung `scripts/migrate-content.mjs`: đọc từ `01_Semi/`, tách slug từ tên file có số thứ tự, lấy H1→title, dòng `Nguồn:`→sourceUrl, gán category/subcategory/order, ghi vào `src/content/articles/...`.
- [x] 5. Trang chủ: hero, lưới 12 danh mục, showcase flagship, ô tìm kiếm placeholder.
- [x] 6. Template trang danh mục/danh mục con: breadcrumb, danh sách bài.
- [x] 7. Template trang bài viết + pipeline Markdown: bảng, công thức, code block ASCII, TOC, footer nguồn, prev/next, `WidgetSlot.astro` rỗng.
- [x] 8. Chạy migration cho toàn bộ 137 bài + rà soát QA từng bài render đúng (đã build thử `astro build` — 155 trang, 0 lỗi type qua `astro check`).
- [x] 9. Tìm kiếm tĩnh (pagefind) + gắn vào header (`src/components/Search.astro`, chỉ hoạt động sau `npm run build`).
- [x] 10. Responsive pass: nav mobile (hamburger), TOC gập trên mobile, bảng cuộn ngang, lưới auto-fill.
- [x] 11. Bộ UI widget dùng chung: `Slider.svelte`, `ToggleTabs.svelte`, `StepControls.svelte`, `WidgetFrame.svelte` (đã smoke-test qua Astro build, render đúng).

### Task 12-22: Widget flagship (mỗi task = 1 widget, độc lập với nhau, cần Task 11 xong trước)

- [x] 12. Widget "So sánh độ dẫn điện" (01 Kiến thức cơ bản — `ban-dan-la-gi.mdx`) — kiểm chứng pipeline. Slider→SVG. (`ResistivityComparator.svelte`)
- [x] 13. Widget "Dải năng lượng PN junction" (01 Kiến thức cơ bản — `pn-tiep-giap-va-cau-truc-dai.mdx`). Slider→SVG. (`PnJunctionBands.svelte`)
- [x] 14. Widget "Mạng tinh thể kim cương xoay" (02 Khoa học Silicon — `cau-truc-tinh-the-silicon.mdx`). Slider góc xoay + Toggle. (`CrystalLattice.svelte`)
- [x] 15. Widget "Mặt cắt MOSFET on/off" (03 Transistor — `cmos-dac-diem-nguyen-ly.mdx`). Toggle. (`MosfetCrossSection.svelte`)
- [x] 16. Widget "Photodiode: ánh sáng → electron" (03 Image Sensor — `image-sensor-la-gi.mdx`). Step-through 4 bước. (`PhotodiodeSteps.svelte`)
- [x] 17. Widget "DRAM nạp/rò/refresh" (03 Memory — `dram-cau-truc-nguyen-ly.mdx`). Slider→SVG. (`DramCell.svelte`)
- [x] 18. Widget "Quy trình photolithography" (04 Quy trình sản xuất — `photolithography.mdx`) — trọng tâm site. Step-through 5 bước. (`PhotolithographySteps.svelte`)
- [x] 19. Widget "Giả lập cổng logic" (05 Mạch logic cơ bản — `cac-loai-cong-logic.mdx`). Toggle + bảng chân trị sống. (`LogicGateSim.svelte`)
- [x] 20. Widget "Bề mặt wafer trước/sau đánh bóng" (07 Kỹ thuật gia công — `gia-cong-danh-bong.mdx`; đổi từ "CMP" vì CMP thuộc danh mục 04 đã dùng cho widget photolithography). Toggle. (`PolishingBeforeAfter.svelte`)
- [x] 21. Widget "Đường cong I-V pin mặt trời" (08 Pin mặt trời — `pin-mat-troi-la-gi.mdx`). 2 Slider→SVG (Isc/Voc/Pmax). (`SolarIvCurve.svelte`)
- [x] 22. Widget "Bathtub curve + Arrhenius" (10 Test và độ tin cậy — `duong-cong-bon-tam-bathtub-curve.mdx`). 2 Slider→SVG+số (hệ số gia tốc AF). (`BathtubCurve.svelte`)

### Hoàn thiện

- [x] 23. Accessibility pass: skip-link, `:focus-visible` toàn site, `<main id="main-content">`, kiểm tra ARIA có sẵn trên widget (role/aria-label/aria-pressed/aria-selected), animation SMIL trong MOSFET widget tôn trọng `prefers-reduced-motion`.
- [x] 24. SEO/meta/sitemap/404: canonical link, OG/Twitter meta, `@astrojs/sitemap` (ghim bản `3.2.1` vì bản mới nhất 3.7.x cần Astro 5, dự án đang dùng Astro 4.16), `robots.txt`, trang `404.astro`.
- [x] 25. Performance pass: xác nhận cả 11 widget dùng `client:visible` (hydrate khi cuộn tới, không tải JS thừa), thêm `katex/dist/katex.min.css` (trước đó thiếu — công thức LaTeX render không có style đúng), không dùng web font ngoài (toàn font hệ thống).
- [~] 26. Deploy (đã làm phần local, còn thiếu phần remote — xem ghi chú bên dưới):
  - [x] `git init` trong `02_Web/` + `.gitignore` (node_modules, dist, .astro, .env).
  - [x] `.github/workflows/deploy.yml`: build + pagefind + `actions/deploy-pages` mỗi khi push nhánh `main`.
  - [x] Đã chốt với người dùng: tên repo `semi-web`, chế độ **public**.
  - [x] `astro.config.mjs`: đã set `site: 'https://your-username.github.io'` + `base: '/semi-web'` (placeholder `your-username` — PHẢI thay bằng username GitHub thật trước khi deploy).
  - [x] Sửa toàn bộ link nội bộ để tôn trọng `base` (xem ghi chú "lỗi base path" bên dưới) — đã build-test, canonical/nav/favicon/sitemap/robots.txt/search đều ra đúng `/semi-web/...`.
  - [x] Commit local đầu tiên đã tạo.
  - [ ] **CHƯA XONG**: `gh auth login` (người dùng chưa đăng nhập — gặp lỗi server GitHub tạm thời ở phiên trước), tạo repo thật trên GitHub (`gh repo create semi-web --public --source=. --remote=origin`), thay `your-username` trong `astro.config.mjs` bằng username thật, push, bật GitHub Pages nguồn "GitHub Actions" trong Settings → Pages.

## Ghi chú cho phiên làm việc tiếp theo

- Danh mục 06 (Phương pháp đánh giá), 09 (Nước và xử lý nước), 11 (Kiến thức ngành), 12 (Tài liệu tham khảo) chưa có widget ở đợt 1 — chỉ trình bày tĩnh. Có thể bổ sung widget sau khi 11 widget đợt 1 xong.
- Không sửa/xóa bất kỳ file nào trong `d:\AI-Workspace\01_Semi\`.
- Luôn cập nhật checkbox `[x]` trong file này sau khi hoàn thành mỗi task.
- Trạng thái hiện tại (đã xong Task 0-22): project Astro chạy được ở `d:\AI-Workspace\02_Web\` (`npm run dev`), 137 bài đã migrate vào `src/content/articles/` (126 `.md` tĩnh + 11 `.mdx` có widget), layout/trang chủ/trang danh mục/trang bài viết đã có, tìm kiếm pagefind hoạt động sau `npm run build`, bộ 4 widget UI dùng chung ở `src/widgets/ui/`, 11 widget flagship ở `src/widgets/flagship/`.
- `WidgetSlot.astro` (placeholder cũ) đã bị xóa — không còn dùng vì mỗi bài flagship giờ import thẳng widget Svelte thật qua MDX (`import X from "…/widgets/flagship/X.svelte"` + `<X client:visible />`).
- Cách nhúng widget vào 1 bài khác trong tương lai: đổi `.md` → `.mdx`, thêm dòng `import` ngay dưới frontmatter, chèn `<TênWidget client:visible />` vào vị trí phù hợp trong nội dung, xóa `.md` cũ. Lưu ý: MDX diễn giải `{` và `<chữ số` như JSX — phải escape thành `\{...\}` / `\<7nm` nếu xuất hiện ngoài code fence/math block.
- CSS global có 1 sửa quan trọng: rule bảng (`table{...}`) đã đổi phạm vi thành `.prose table{...}` để không phá layout bảng chân trị bên trong widget (`LogicGateSim.svelte`).
- Danh mục 06, 09, 11, 12 vẫn chưa có widget (chỉ tĩnh) — có thể bổ sung sau, không nằm trong đợt 1.
- **Lỗi base path đã sửa (quan trọng nếu sau này thêm link mới)**: vì `astro.config.mjs` có `base: '/semi-web'`, MỌI link nội bộ tuyệt đối (`href="/..."`) phải bọc qua `withBase()` (`src/lib/url.ts`), nếu không sẽ gãy khi deploy lên GitHub Pages (subpath). `articleHref()`/`categoryHref()` trong `src/lib/content.ts` đã tự động gọi `withBase()`. Nếu viết thêm 1 href tuyệt đối mới ở đâu đó, PHẢI bọc qua `withBase()`.
- `scripts/migrate-content.mjs` đã sửa để KHÔNG ghi đè file `.md` nếu đã tồn tại `.mdx` cùng slug (tránh tạo bản trùng khi chạy lại `npm run migrate`).
- Task tiếp theo duy nhất: hoàn tất phần remote của Task 26 — chạy `gh auth login`, `gh repo create semi-web --public --source=. --remote=origin`, sửa `your-username` trong `astro.config.mjs` thành username GitHub thật, `git push -u origin main`, rồi vào Settings → Pages chọn nguồn "GitHub Actions".
- Lệnh hữu ích: `npm run dev` (chạy thử), `npm run migrate` (chạy lại script migrate nếu sửa `01_Semi/`), `npm run build` (build + kiểm tra type + build search index, xem thử trong `dist/`).

## Phát sinh sau review: nâng cấp thiết kế + loại bỏ tiếng Nhật/nguồn tham khảo (đã hoàn thành)

Chi tiết đầy đủ ở `D:\ClaudeConfig\plans\d-n-t-o-s-glimmering-eagle.md` (phần đầu file). Tóm tắt:

- [x] **Thiết kế "Wafer Interference"**: đổi token màu (`--accent` tím-chàm `#7c86ff`, thêm `--accent-2` vàng ánh kim `#e8b34d`, nền `#0a0e14`), thêm font `@fontsource/space-grotesk` (h1/hero) + `@fontsource-variable/inter` (body), 2 class dùng chung `.wafer-field`/`.reticle-frame` trong `global.css`. Áp dụng ở hero trang chủ, card danh mục (mã `D01`-`D12`), card widget (viền vàng), `ArticleLayout.astro` (dải gradient đầu bài), `WidgetFrame.svelte` (dấu góc oscilloscope), `Header.astro` (viền gradient). Đối chiếu lại 4 widget có màu hardcode (`PhotodiodeSteps`, `PhotolithographySteps`, `DramCell`, `ResistivityComparator`) sang token mới.
- [x] **Loại bỏ tiếng Nhật**: `scripts/lib/strip-japanese.mjs` (helper dùng chung) + `scripts/strip-japanese-content.mjs` (chạy 1 lần, đã chạy — sửa 127/137 file). Đã tích hợp vào `scripts/migrate-content.mjs` nên các lần `npm run migrate` sau này tự động sạch. Đã xử lý thủ công 5 trường hợp từ phiên âm La-tinh (`*handoutai*`, `*handoutai memory*`) không tự động xóa được, và 2 title bị cụt còn sót `"(pn)"` sau khi xóa kanji.
- [x] **Bỏ trích dẫn nguồn**: xóa khối "Nguồn: <url>" trong `ArticleLayout.astro` (vẫn giữ field `sourceUrl` ẩn trong frontmatter, chỉ ngừng hiển thị) và dòng tham khảo semi-journal.jp trong `Footer.astro`.
- [x] Xác minh: `astro check` 0 lỗi, `astro build` 156 trang thành công, `grep` xác nhận 0 ký tự Kanji/Hiragana/Katakana và 0 chữ "semi-journal" trong toàn bộ HTML đã render trong `dist/`.
- Ảnh so sánh trước/sau ban đầu lưu ở `screenshots/` — nay đã chuyển vào `_archive_co_the_xoa/screenshots/` (xem mục "Dọn dẹp dự án" bên dưới).

## Phát sinh sau review lần 2: thí điểm văn phong "gây tò mò" + dọn dẹp dự án (đã hoàn thành)

Người dùng chê nội dung "quá nhiều chữ, không tạo tò mò, giống blog 2000s". Đã nghiên cứu (information gap theory, cognitive load/chunking, progressive disclosure, retrieval practice, case study Bret Victor/3Blue1Brown/Josh Comeau/Brilliant/Wait But Why) và thí điểm áp dụng trên 2 bài: `kien-thuc-co-ban/ban-dan-la-gi.mdx` và `kien-thuc-co-ban/pn-tiep-giap-va-cau-truc-dai.mdx`. Người dùng đã duyệt: hướng nội dung, văn phong/cách trình bày, và tình trạng sạch tiếng Nhật/Anh — **đều OK, dùng làm chuẩn để nhân rộng ra các bài còn lại**.

- [x] **Component mới `src/widgets/ui/QuickCheck.svelte`**: mini-quiz trắc nghiệm 1 câu, click chọn → phản hồi đúng/sai tức thì + giải thích (retrieval practice). Dùng token `--success`/`--success-bg` mới thêm vào `global.css` (dark + light).
- [x] **`global.css`**: thêm class `.prose .hook` (đoạn mở bài kiểu nhấn mạnh, viền trái vàng) và style cho `<details>/<summary>` (khối "▸ bấm để xem" — progressive disclosure cho công thức/chi tiết nâng cao).
- [x] **Khuôn mẫu bài viết mới** (áp dụng thủ công, không phải script tự động — vì cần hiểu nội dung để viết hook/ẩn dụ phù hợp): mở bài bằng hook gây tò mò → ẩn dụ đời thường trước thuật ngữ kỹ thuật → nội dung chính (đoạn ngắn hơn) → công thức nâng cao ẩn trong `<details>` → 1-2 `QuickCheck` xen giữa bài → kết bài nối lại với hook mở đầu.
- [x] **Danh mục `kien-thuc-co-ban/` (D01) — đã xong 8/8 bài**: 6 bài còn lại (`vat-lieu-ban-dan`, `tinh-chat-dien-p-type-n-type`, `ly-thuyet-dai-nang-luong-va-bandgap`, `cau-truc-dai-cua-p-type-n-type`, `pn-tiep-giap-phan-cuc-thuan-nghich`, `hien-tuong-danh-thung`) đã chuyển `.md` → `.mdx` và viết lại theo khuôn mẫu mới. Bản `.md` cũ đã chuyển vào `_archive_co_the_xoa/old-content-kien-thuc-co-ban/`. `astro check` 0 lỗi, `npm run build` thành công.
- [x] **TẤT CẢ 137/137 bài trên toàn site đã hoàn tất khuôn mẫu văn phong mới** (2026-08-19). 129 bài còn lại (11 danh mục: `khoa-hoc-silicon`, `kien-thuc-nganh`, `ky-thuat-gia-cong`, `mach-logic-co-ban`, `nuoc-va-xu-ly-nuoc`, `phuong-phap-danh-gia`, `pin-mat-troi`, `quy-trinh-san-xuat`, `tai-lieu-tham-khao`, `test-va-do-tin-cay`, `thiet-bi-ban-dan/*`) được xử lý song song bằng 14 agent `coder`, mỗi agent phụ trách 1 danh mục, bám khuôn mẫu đã duyệt ở D01 (hook mở bài, ẩn dụ đời thường, `QuickCheck`, `<details>` cho công thức nâng cao). Toàn bộ `.md` cũ đã chuyển vào `_archive_co_the_xoa/old-content-<danh-mục>/`.
  - **Sự cố đã xảy ra và đã khắc phục**: 1 agent (`power-semiconductor`) tự ý di chuyển file `.md` ở 3-4 danh mục khác ngoài phạm vi được giao (để tự làm `astro check` của nó pass), gây mất tạm thời ~13 bài khỏi site (đưa vào 1 thư mục archive sai quy ước `old-content-all/`). Đã rà soát và khôi phục đầy đủ toàn bộ, không mất nội dung nào (nhờ quy tắc "chỉ di chuyển, không xóa").
  - **Lỗi cú pháp MDX phát hiện khi build cuối cùng** (do vài agent bỏ sót escape): ký tự `<` đứng trước số/chữ không escape (vd `<100nm`, `<V_DD`) bị hiểu nhầm là mở thẻ JSX; ký hiệu tinh thể học `{h k l}` bị hiểu nhầm là JS expression; 1 dấu phẩy thừa sau thuộc tính JSX (`question="...",`). Đã sửa thủ công toàn bộ (~12 vị trí trên 10 file), xác nhận `npm run build` chạy sạch (156 trang, exit code 0).
  - **Xác minh cuối**: `astro check` 0 lỗi, `npm run build` 156 trang thành công, 137/137 file nội dung (không trùng lặp `.md`/`.mdx`), 136/137 trang có `QuickCheck` (1 ngoại lệ có chủ đích: `tai-lieu-tham-khao/sach-va-trang-web-hoc-ban-dan` là bài danh sách tài liệu, không có khái niệm cụ thể để kiểm tra), không còn ký tự tiếng Nhật nào bị đưa lại, demo server trả 200 OK cho các trang từng lỗi.

### Dọn dẹp dự án

Theo yêu cầu người dùng: gom các file không còn cần thiết cho việc phát triển tiếp vào 1 thư mục duy nhất `_archive_co_the_xoa/` ở gốc `02_Web/`, để có thể xoá gọn cả thư mục này khi kết thúc dự án. **Chỉ di chuyển, không xoá file nào** (đúng quy tắc toàn hệ thống).

Đã chuyển vào `_archive_co_the_xoa/`:
- `screenshots/redesign-home-dark.png`, `redesign-article-dark.png`, `redesign-home-light.png` — ảnh chụp so sánh thiết kế cũ/mới, chỉ để tham khảo lúc review, không được code nào tham chiếu tới.
- `scripts/strip-japanese-content.mjs` — script dọn tiếng Nhật chạy 1 lần, đã chạy xong (127/137 file). Không xoá vì có thể cần tham khảo lại logic, nhưng không còn cần chạy nữa vì `scripts/migrate-content.mjs` đã tích hợp sẵn `scripts/lib/strip-japanese.mjs` cho các lần migrate sau này.

Thư mục `screenshots/` gốc (đã rỗng sau khi chuyển hết file) đã được xoá — đây là thao tác xoá 1 thư mục rỗng, không phải xoá file, nằm ngoài phạm vi giới hạn "chỉ di chuyển".

Không đụng tới: `scripts/lib/strip-japanese.mjs`, `scripts/migrate-content.mjs` (vẫn dùng để chạy `npm run migrate` khi cần), `TASKS.md` (tài liệu sống, còn cần).
