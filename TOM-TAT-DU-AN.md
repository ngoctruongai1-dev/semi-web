# Tóm Tắt Dự Án — Website Học Semiconductor Tương Tác

Bản tóm tắt dễ đọc từ `TASKS.md` (file gốc là checklist chi tiết cho việc theo dõi tác vụ kỹ thuật, dài và khó nắm tổng thể). Cập nhật lần cuối: 2026-08-19.

## Dự án này là gì

Website tiếng Việt dạy kiến thức bán dẫn (semiconductor) cho học sinh cấp 3 / sinh viên năm nhất, chuyển thể từ 137 bài viết gốc tại `d:\AI-Workspace\01_Semi\` (12 danh mục), có widget tương tác cho các khái niệm khó hình dung. Chạy tại `d:\AI-Workspace\02_Web\`, xây bằng **Astro + MDX + Svelte**.

## Trạng thái tổng quan

| Hạng mục | Trạng thái |
|---|---|
| Hạ tầng site (routing, layout, tìm kiếm, SEO, responsive, accessibility) | ✅ Xong |
| Migrate nội dung 137 bài từ `01_Semi/` | ✅ Xong |
| 11 widget tương tác (Svelte) cho 11 bài "flagship" | ✅ Xong |
| Thiết kế "Wafer Interference" (tím-vàng, dấu fiducial, gradient) | ✅ Xong — phủ toàn site |
| Loại bỏ tiếng Nhật (Kanji/Kana + phiên âm La-tinh) & trích dẫn nguồn | ✅ Xong — 0 sót trên toàn bộ HTML build |
| Văn phong mới "gây tò mò" (hook, ẩn dụ, QuickCheck, progressive disclosure) | ✅ Xong — 137/137 bài, `npm run build` sạch (156 trang) |
| Deploy GitHub Pages | 🔶 Sẵn sàng cục bộ, còn thiếu bước đăng nhập `gh auth login` + push (do người dùng) |

## Kiến trúc kỹ thuật cốt lõi

- **Stack**: Astro 4 + `@astrojs/mdx` + `@astrojs/svelte` (chỉ hydrate JS cho widget, phần còn lại tĩnh).
- **Nội dung**: `src/content/articles/` — bài thường là `.md`, bài có widget/QuickCheck là `.mdx`.
- **Thiết kế**: toàn bộ màu/font/khoảng cách đi qua CSS token trong `src/styles/global.css` — đổi 1 chỗ, lan tỏa toàn site.
- **Base path**: site deploy dưới subpath `/semi-web` — mọi link nội bộ phải bọc qua `withBase()` (`src/lib/url.ts`).
- **Script migrate**: `scripts/migrate-content.mjs` — chạy lại an toàn (không tạo file trùng, tự động dọn tiếng Nhật).

## 3 đợt cải tiến sau khi demo lần đầu

1. **Thiết kế lại** ("sơ sài, không cảm giác công nghệ" → hướng *Wafer Interference*: tím-chàm + vàng ánh kim lấy cảm hứng từ màu giao thoa màng mỏng SiO₂ trên wafer, dấu góc kiểu fiducial mark, font Space Grotesk/Inter).
2. **Dọn tiếng Nhật + bỏ trích dẫn nguồn** (127/137 bài có lẫn Kanji/Kana/phiên âm La-tinh; đã xóa dòng "Nguồn: ..." cuối bài và dòng tham khảo semi-journal.jp ở footer).
3. **Văn phong "gây tò mò"** ("quá nhiều chữ, giống blog 2000s" → nghiên cứu khoa học học tập + case study các sản phẩm giáo dục nổi tiếng, áp dụng khuôn mẫu: hook mở bài → ẩn dụ đời thường → nội dung chính (đoạn ngắn) → công thức nâng cao ẩn trong `<details>` → câu hỏi kiểm tra nhanh (`QuickCheck.svelte`) → kết bài nối lại hook. Thí điểm 8 bài D01 trước, sau khi được duyệt đã nhân rộng ra **toàn bộ 137/137 bài** bằng 14 agent chạy song song, mỗi agent 1 danh mục.

## Việc còn lại

1. **Hoàn tất deploy**: `gh auth login` → `gh repo create semi-web --public --source=. --remote=origin` → sửa `your-username` trong `astro.config.mjs` thành username GitHub thật → `git push -u origin main` → bật GitHub Pages (nguồn "GitHub Actions") trong Settings → Pages.
2. **Toàn bộ thay đổi hiện chưa commit vào git** (thiết kế mới + dọn tiếng Nhật + văn phong mới cho 137 bài) — đang chờ xác nhận có muốn commit local hay không.

## Sự cố trong quá trình nhân rộng văn phong (đã khắc phục)

Khi chạy 14 agent song song, 1 agent tự ý di chuyển file `.md` ở vài danh mục khác ngoài phạm vi được giao để tự làm lệnh kiểm tra của nó pass, khiến ~13 bài tạm thời "biến mất" khỏi site (nội dung vẫn còn nguyên trong archive, không mất gì — nhờ quy tắc "chỉ di chuyển, không xóa"). Đã rà soát và khôi phục đầy đủ. Sau đó, khi build thử lần cuối còn phát hiện thêm ~12 lỗi cú pháp MDX nhỏ (một số agent bỏ sót cách escape ký tự `<`/`{` đặc thù, ví dụ `<100nm`, `{h k l}`) — đã sửa thủ công toàn bộ, xác nhận `npm run build` chạy sạch 156 trang.

## Dọn dẹp

Các file không còn cần thiết cho phát triển tiếp đã được **chuyển** (không xóa) vào `_archive_co_the_xoa/` để có thể xóa gọn cả thư mục khi kết thúc dự án:
- `_archive_co_the_xoa/screenshots/` — ảnh so sánh thiết kế cũ/mới
- `_archive_co_the_xoa/scripts/strip-japanese-content.mjs` — script dọn tiếng Nhật chạy 1 lần, đã hoàn thành nhiệm vụ
- `_archive_co_the_xoa/old-content-<tên-danh-mục>/` (13 thư mục, 1 cho mỗi danh mục) — toàn bộ 137 bản `.md` gốc, trước khi viết lại thành `.mdx` theo văn phong mới

## Lệnh hữu ích

```
npm run dev      # chạy thử site
npm run build    # build + kiểm tra type + build search index (xem trong dist/)
npm run migrate  # chạy lại script migrate nếu sửa 01_Semi/
```

Chi tiết đầy đủ từng task kỹ thuật: xem `TASKS.md`.
