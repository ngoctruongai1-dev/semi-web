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
