# CLAUDE.md — Website Semiconductor (02_Web)

Xem `TOM-TAT-DU-AN.md` (tổng quan dễ đọc) và `TASKS.md` (checklist chi tiết) trước khi làm việc trong project này.

## Quy tắc bắt buộc khi viết/sửa file `.mdx`

Trình biên dịch MDX diễn giải `{` và `<` theo cú pháp JSX, khác hoàn toàn Markdown thường. Bỏ sót các quy tắc dưới đây là nguyên nhân gây lỗi build **im lặng cho tới tận lúc `astro build`** (không bị `astro check`/type-check bắt được) — đã xảy ra thật ở đợt viết lại 129 bài (2026-08-19), phải sửa thủ công ~12 vị trí sau khi build.

1. **`<` đứng ngay trước một ký tự chữ hoặc số** (không có khoảng trắng ở giữa) bị hiểu nhầm là mở thẻ JSX → phải escape thành `\<`.
   - Ví dụ cần escape: `<100nm` → `\<100nm`; `<V_DD` → `\<V_DD`; `<5%` → `\<5%`; `<1kHz` → `\<1kHz`.
   - `<` có khoảng trắng theo sau (vd `X < Y`) thì AN TOÀN, không cần escape.
   - Áp dụng ở MỌI nơi trong nội dung Markdown — kể cả trong bảng, kể cả trong `<details>`, không chỉ đoạn văn thường.
   - Ngoại lệ: bên trong chuỗi string của JS/JSX (vd trong `question="..."` hay `label: "..."` của `QuickCheck`), `<` không cần escape vì đó là chuỗi JS, không phải nội dung Markdown.

2. **`{` trong văn xuôi** (không phải mở đầu 1 JSX expression thật sự) bị hiểu nhầm là bắt đầu code JS → phải escape thành `\{` (và `}` tương ứng thành `\}`).
   - Ví dụ hay gặp trong bài về khoa học Silicon: ký hiệu Miller `{h k l}`, `{100}`, `{111}` (chỉ họ mặt tinh thể tương đương) → phải escape thành `\{h k l\}`, `\{100\}`, `\{111\}`.
   - Bên trong `$$...$$` (khối công thức LaTeX xử lý bởi `remark-math`) thì `{` AN TOÀN, không cần escape — remark-math xử lý trước khi MDX parse JSX.
   - Bên trong mảng `options={[{ label: "...", correct: true }, ...]}` của `QuickCheck` thì `{` AN TOÀN vì đó là cú pháp JS object literal hợp lệ.

3. **Thuộc tính JSX không được ngăn cách bằng dấu phẩy** — khác với object JS. Đúng: `<QuickCheck question="..." options={[...]} />`. Sai (gây lỗi build): `<QuickCheck question="...", options={[...]} />` (dấu `,` thừa sau `"..."`).

4. **Sau khi sửa hàng loạt file `.mdx`, luôn chạy `npm run build` (không chỉ `astro check`)** trước khi báo cáo hoàn thành — `astro check` không phát hiện được các lỗi cú pháp MDX kiểu trên, chỉ `astro build` (qua `@mdx-js/rollup`) mới bắt được. Đây là lý do 3 file lọt lưới `astro check` ở đợt viết lại trước.

## Quy ước đặt tên khi cần lưu trữ file cũ

Khi thay `.md` → `.mdx` hoặc cần archive nội dung cũ: **di chuyển** (không xóa) vào `_archive_co_the_xoa/old-content-<tên-danh-mục>/`, đúng tên danh mục, không tự tạo thư mục gộp chung kiểu `old-content-all/`.

## Khi nhiều agent làm việc song song trên project này

Mỗi agent chỉ được đụng vào file trong phạm vi được giao. Nếu `astro check`/`astro build` báo lỗi ở file ngoài phạm vi (rất có thể do agent khác đang xử lý dở), KHÔNG tự ý sửa/di chuyển file đó — chỉ báo cáo lại, để người điều phối xử lý tập trung sau khi tất cả agent hoàn tất.

## Cách thêm hoạt ảnh minh họa (animated diagram) vào bài viết

Đã áp dụng thành công cho toàn bộ danh mục `kien-thuc-co-ban` (2026-08-20), quy trình chuẩn để nhân rộng sang danh mục khác:

1. **Component**: dùng `src/components/StaticDiagram.astro`, truyền thêm `animated` (không cần `={true}`) để đổi nhãn "sơ đồ" → "hoạt ảnh" (đổi màu tag từ `--accent-2` sang `--accent`).
2. **Hoạt ảnh nằm ngay trong SVG**, không phải CSS global: 1 thẻ `<style>` bên trong `<svg>...</svg>` (hợp lệ trong MDX vì nằm trong SVG thô, không phải văn xuôi Markdown), khai báo `@keyframes` + animation bọc trong `@media (prefers-reduced-motion: no-preference) { ... }` — tôn trọng người dùng tắt hiệu ứng chuyển động, không cần JS/`matchMedia` như widget Svelte.
3. **Chỉ animate `transform` (translate/scale/rotate) và `opacity`** — mượt, nhẹ, không tải thêm JS. Khi scale/translate quanh tâm phần tử SVG, luôn thêm `transform-box: fill-box; transform-origin: center;` vào cùng class.
4. **Chỉ animate đúng phần ẩn dụ/cơ chế đang được kể bằng chữ** — không animate cho có. Viết brief cực kỳ chi tiết (từng file, từng anchor text, từng đoạn CSS/SVG cụ thể) khi giao cho agent `coder`, vì hiểu sai vật lý ở bước này khó phát hiện qua build/test thông thường.
5. **BẮT BUỘC thẩm định độc lập bằng agent `semiconductor-expert`** sau khi coder xong — không tự đánh giá tính đúng đắn vật lý của hoạt ảnh. Ở đợt D01, agent phát hiện 3/8 bài có lỗi hướng chuyển động thật sự (không phải lỗi hiển thị) mà build/test không bắt được: electron acceptor đứng yên thay vì di chuyển từ Ev lên Ea, hạt tải phía n-type di chuyển ngược chiều mũi tên minh họa, 2 hạt khuếch tán dừng cách nhau quá xa để gọi là "gặp nhau". Không gửi kèm giải trình của coder cho agent thẩm định, để tránh bị dẫn dắt.
6. Lỗi vật lý nhỏ, đã xác định rõ nguyên nhân + cách sửa (do agent thẩm định chỉ ra) thì orchestrator tự sửa trực tiếp bằng Edit — không cần giao lại cho coder.
7. Sau khi sửa: chạy lại `npm run build` (đủ 156 trang, không lỗi) rồi mới báo cáo hoàn thành.
