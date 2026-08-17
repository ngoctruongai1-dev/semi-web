---
title: Quy Trình Sản Xuất Wafer Silicon (Silicon Wafer Production)
sourceUrl: https://semi-journal.jp/basics/process/wafer.html
category: quy-trinh-san-xuat
order: 2
flagship: false
---

## Giới Thiệu

Wafer silicon là nền tảng cơ bản của toàn bộ ngành công nghiệp bán dẫn. Từ một thanh polysilicon thô đến một tấm wafer siêu phẳng, không khuyết tật, có thể chứa hàng triệu transistor – quy trình này yêu cầu nhiều bước xử lý khoa học, kỹ thuật và công nghệ cao. Bài viết này trình bày chi tiết các giai đoạn chính từ ingot tới wafer hoàn thiện.

## Giai Đoạn 1: Tạo Ingot Silicon Đơn Tinh Thể

### Phương Pháp CZ (Czochralski)

Gần 100% wafer dùng trong ngành công nghiệp IC được sản xuất từ ingot tạo bằng **phương pháp CZ (Czochralski – kéo tinh thể)**, phương pháp được phát triển từ những năm 1915.

**Quy trình:**
1. Đặt polysilicon (Si đa tinh thể) vào lò chứa bằng quartz nung ở ~1400°C.
2. Nhúng một **hạt giống (seed crystal)** Si đơn tinh thể mỏng vào nóng chảy.
3. **Kéo chậm** hạt giống lên với tốc độ ~1-10 cm/giờ, đồng thời quay để duy trì nhiệt độ không đổi.
4. Silicon nóng chảy theo hạt giống, nguội lạnh và rắn hóa từ dưới lên, tạo thành **ingot Si đơn tinh thể** hình trụ.

**Ưu điểm:**
- Tạo được kích thước lớn: đường kính hiện nay là **300mm, sắp tới 450mm**.
- Chiều dài ingot: hơn 1 mét, cho phép cắt thành 100-300 wafer.
- Hiệu suất cao và chi phí thấp.

**Nhược điểm:**
- Chứa nồng độ oxy cao (~10¹⁸ atom/cm³) từ lò quartz → cần kiểm soát oxy trong các bước tiếp theo (Gettering, khuếch tán ngoài).

## Giai Đoạn 2: Xử Lý Hình Dạng và Định Hướng Ingot

### Cắt Phẳng
Cắt các phẳng vào ingot bằng cưa kim cương để loại bỏ phần đầu (seed cone) và phần cuối (tail), giữ lại phần thân (body) có chất lượng tốt nhất.

### Khắc Notch/Oriflat
- **Notch (rãng)**: Cắt một rãng nông vào cạnh ingot để xác định hướng tinh thể (thường để xác định mặt {100} hoặc {111}).
- **Oriflat (mặt phẳng hướng dẫn)**: Phương pháp cũ hơn, hiện đã thay thế bằng Notch.
- Vai trò: Giúp các công đoạn tiếp theo (lithography, etching) định hướng chính xác các dạng tinh thể.

## Giai Đoạn 3: Cắt Lát (Slicing) Wafer

### Sử Dụng Wire Saw (Cưa Dây)

Phương pháp cơ bản:
1. Dây kim loại siêu mỏ (**đường kính 0.1-0.2mm**, thường là steel hoặc molybdenum) quay nhanh.
2. Dây được chà xát với abrasive particles (hạt mài) hoặc slurry (dung dịch mài).
3. Dây cắt dọc vào ingot, tạo ra các lát wafer dày ~1mm.
4. Kỹ thuật "free abrasive" (hạt tự do) hoặc "fixed abrasive" (hạt cố định) tùy hệ thống.

**Ưu điểm:**
- Độ phẳng và song song cao.
- Hao phí silicon ít so với cưa đĩa truyền thống.

**Nhược điểm:**
- Tạo lớp tổn thương bề mặt (subsurface damage) cần loại bỏ sau.

## Giai Đoạn 4: Mài Ngoài (OD Grind)

Wafer vừa cắt lát còn thô và không được chuẩn mực. Bước này:
- Mài cạnh ingot để định lại đường kính chính xác (300mm, 200mm, v.v.).
- Loại bỏ phần thừa không đạt tiêu chuẩn.
- Chuẩn bị cho bước lapping tiếp theo.

## Giai Đoạn 5: Lapping – Mài Thô

Lapping là **mài/nghiền thô hai mặt** wafer bằng:
- Đá mài (grinding stone) hoặc abrasive slurry.
- Mục đích loại bỏ lớp tổn thương bề mặt sâu khoảng 10-50 micrometers.
- Kết quả: Bề mặt trở nên gần phẳng hơn, nhưng vẫn không phải gương.

Hai mặt được mài cùng lúc để đảm bảo song song và độ dày đồng nhất.

## Giai Đoạn 6: Etching (Khắc) – Loại Bỏ Lớp Tổn Thương Bên Trong

Bước này loại bỏ lớp silicon tổn thương/vô định hình sâu từ cutting và lapping.

**Phương pháp:**
- **Khắc acid (acidic etching)**: Dùng HNO₃ + HF hoặc hỗn hợp acid mạnh khác. Acid hòa tan Si:
  - Si + HNO₃ + HF → SiF₆²⁻ (chất có thể hòa tan).
- **Khắc kiềm (alkaline etching)**: Dùng KOH hoặc NaOH, nhưng gây khắc hướng (anisotropic etching) phức tạp hơn.

**Kết quả:** Bề mặt sạch, khớp tinh thể được phục hồi.

## Giai Đoạn 7: Annealing – Phục Hồi Khuyết Tật và Loại Oxy

Quy trình **Donor Killer Annealing**:
- Nung wafer ở **300-500°C** (thời gian: vài giờ) để tách oxygen interstitial (Oi) ra khỏi lưới.
- Tiếp tục ủ ở **600-800°C** để loại bỏ Thermal Donor (TD) hình thành tạm thời ở nhiệt độ thấp.
- Mục đích: Kiểm soát nồng độ oxy hòa tan để tối ưu hóa độ tin cậy thiết bị.

## Giai Đoạn 8: CMP – Đánh Bóng Hóa-Cơ

Bước cuối cùng để tạo bề mặt siêu phẳng:

**Nguyên lý:**
- Kết hợp tác dụng **hóa học** (dung dịch polishing làm mềm bề mặt Si) và **cơ học** (hạt mài/pad abrasive mài bề mặt).
- Đệm đánh bóng (polishing pad) quay chặt vào wafer quay, trong khi phun dung dịch slurry.

**Kết quả:**
- Bề mặt đạt độ phẳng **<1 nm** (flat at atomic scale).
- Các hạn chế: roughness (độ nhấp nhô) cực thấp, không còn hỗn hợp rất tốt từ các bước trước.
- **Thời gian CMP** là một trong những công đoạn dài nhất, chiếm ~10-15% thời gian tổng.

## Giai Đoạn 9: Rửa Cuối Cùng và Kiểm Tra

- **Rửa DI water (nước cất ion)**: Loại bỏ tạp chất từ CMP.
- **Sấy khô**: Thường dùng **IPA (isopropanol)** để tránh "water mark" (vết chứng).
- **Kiểm tra quang học**: Phát hiện hạt, khuyết tật bề mặt qua microscope.
- **Đo điện trở suất**: Kiểm tra nồng độ dopant bằng phương pháp 4-point probe.

## Giai Đoạn 10: Lưu Trữ Bảo Quản

Wafer hoàn thiện được đặt trong hộp đặc biệt (wafer carrier), bảo vệ khỏi:
- Bụi, hạt từ môi trường.
- Độ ẩm (dùng desiccant).
- Dao động nhiệt độ.

Wafer có thể được gửi trực tiếp tới các nhà máy sản xuất IC hoặc được lưu trữ ở kho (shelf life: vài tháng đến vài năm tùy loại wafer).

## Các Loại Wafer Đặc Biệt

| Loại Wafer | Mô Tả |
|-----------|-------|
| **PW (Polished Wafer)** | Wafer đánh bóng cơ bản, bề mặt gương. |
| **AW (Annealed Wafer)** | PW đã ủ nhiệt để loại oxy và khuyết tật bề mặt. |
| **EPW (Epitaxial Wafer)** | PW + lớp Si mọc thêm (epitaxial layer). |
| **SOI (Silicon-On-Insulator)** | Hai wafer dán lại với lớp oxide ở giữa. |

## Tầm Quan Trọng Chất Lượng Wafer

Chất lượng wafer quyết định:
- **Hiệu suất (yield)** của chip: wafer bẩn → lỗi mạch → chip báng.
- **Đặc tính điện**: nồng độ oxy/tạp chất ảnh hưởng lifetime (thời gian sống) của carrier.
- **Chi phí**: wafer chiếm ~30-50% chi phí COGS (Cost of Goods Sold) của IC.
