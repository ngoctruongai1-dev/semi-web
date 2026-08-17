---
title: Cấy Ion – Ion Implantation (Ion Implantation)
sourceUrl: https://semi-journal.jp/basics/equipment/implantation.html
category: quy-trinh-san-xuat
order: 4
flagship: false
---

## Giới Thiệu

Cấy ion (イオン注入, ion chuinyuu) là một công đoạn cốt lõi trong việc **tạo vùng p-type/n-type** (doped regions) của transistor. Thay vì sử dụng **diffusion (khuếch tán)** – phương pháp cũ yêu cầu nung nóng tới 1100°C trong vài giờ – cấy ion cho phép **tiêm các ion dopant (như phosphorus hoặc boron) trực tiếp vào silicon** với độ chính xác cao về **vị trí, độ sâu, và nồng độ**.

## Định Nghĩa và Nguyên Lý

**Cấy ion** là quá trình:
1. Tạo/ionize các nguyên tử dopant (mất electron) thành **ion dương** (P⁺, B⁺).
2. **Gia tốc** chúng bằng điện trường điện áp cao (10 kV ~ 1 MV).
3. **Bắn** vào wafer silicon, chúng xuyên qua bề mặt và khuếch tán dừng ở **độ sâu (range) được điều khiển bởi điện áp gia tốc**.

**Phương trình Geiser–Everhart** ước tính độ sâu nguyên tử:
- Range (R) ≈ 10⁻⁶ E^0.75 μm (E: năng lượng keV)
- Ví dụ: P⁺ 100 keV vào Si → độ sâu ~0.1 μm (100 nm).

## Cấu Trúc Thiết Bị Cấy Ion

Một hệ thống cấy ion gồm **6 phần chính**:

### 1. Ion Source (Nguồn Ion)

- **Chức năng**: Tạo ion dopant.
- **Phương pháp**: 
  - **Thermal ionization**: Nung nóng muối dopant (ví dụ: BF₃, PH₃) tới 1000-2000°C để tạo ion.
  - **Plasma source**: Dùng plasma tần số cao (RF plasma, microwave plasma) để ionize khí dopant.
- **Khí dopant phổ biến**:
  - **B⁺ (Boron)**: Từ BCl₃, BF₃.
  - **P⁺ (Phosphorus)**: Từ PH₃.
  - **As⁺ (Arsenic)**: Từ AsH₃ (độc tính cao, yêu cầu an toàn).
  - **Other**: In⁺, Ga⁺, Si⁺ cho heteroepitaxy hoặc kỹ thuật đặc biệt.

### 2. Extraction Electrode (Điện Cực Trích Xuất)

- **Chức năng**: Trích xuất ion từ source bằng điện trường.
- **Điện áp**: Thường ~10 kV, tạo dòng ion ~10-100 μA.
- **Kết quả**: Tạo một chùm ion ban đầu từ hình dạng phức tạp (angular spread).

### 3. Mass Analyzer (Bộ Phân Tích Khối)

- **Chức năng**: **Lọc ion theo khối lượng** bằng từ trường, giúp loại bỏ các ion không mong muốn (ví dụ loại bỏ B₂⁺ nếu chỉ cần B⁺).
- **Nguyên lý**: Lực Lorentz F = qvB làm ion cong theo quỹ đạo tròn; chỉ ion có tỷ lệ q/m cụ thể mới đi vào khe output.
- **Hiệu quả**: Đạt độ sạch ion >99%.

### 4. Acceleration Tube (Ống Gia Tốc)

- **Chức năng**: Gia tốc ion từ ~0 tới năng lượng mong muốn.
- **Điện áp**: Từ 10 kV (implant cạn/shallow) tới 1 MeV (implant sâu).
- **Ưu điểm**: Năng lượng chính xác → độ sâu implant chính xác.

### 5. Deflector & Scanning System (Bộ Quét)

- **Chức năng**: Quét chùm ion qua diện tích wafer để đạt doping đồng nhất.
- **Phương pháp**:
  - **Electrostatic scanning**: Dùng điện trường điều khiển.
  - **Magnetic scanning**: Dùng nam châm quét.
- **Tần số quét**: Từ kHz đến MHz tùy hệ thống.

### 6. Wafer Stage (Bàn Wafer)

- **Chức năng**: Giữ wafer ở vị trí đúng, thoát nhiệt.
- **Đặc điểm**:
  - Có thể làm lạnh (~-180°C) để giảm nguyên tử di động (atomic motion) → giảm diffusion trong lúc implant.
  - Có thể xoay để implant từ nhiều góc (angular implantation).
- **Nguồn tín hiệu**: Kết nối với **Faraday cup** để **đo dòng ion** và **điều chỉnh năng lượng** realtime.

## Quá Trình Cấy Ion Chi Tiết

### Bước 1: Tạo Beam
Khí dopant được ionize, trích xuất, lọc khối, gia tốc, và quét thành chùm ion song song.

### Bước 2: Tấn Công Wafer
Chùm ion tấn công bề mặt wafer. Mỗi ion:
- Xuyên qua silicon khoảng 100-1000 nm (tùy điện áp).
- **Dừng (straggle)**: Không phải tất cả ion dừng ở cùng độ sâu, có phân bố hình chuông (Gaussian distribution).

### Bước 3: Tích Tụ Electron-Hole Pairs
Trong quá trình xuyên, ion mất năng lượng qua:
- **Electronic stopping**: Va chạm với electron → tạo electron-hole pairs.
- **Nuclear stopping**: Va chạm với hạt nhân → dịch chuyển nguyên tử.

Kết quả: Vùng xung quanh track ion trở nên **vô định hình (amorphous)** – các nguyên tử lệch khỏi vị trí mạng lưới.

### Bước 4: Tích Lũy Dopant
Sau khi tất cả ion đã cắm vào, nồng độ dopant ở vùng implant đạt mức mong muốn.

**Công thức nồng độ cài đặt (implant dose)**:
- Dose = (dòng ion × thời gian) / diện tích = số lượng ion/cm².
- Ví dụ: Dose = 10¹⁵ cm⁻² = 1×10¹⁵ ion/cm².

## Ưu Điểm của Cấy Ion

1. **Kiểm soát độ sâu (Range Control)**:
   - Thay đổi điện áp gia tốc → thay đổi độ sâu chính xác.
   - Không cần nung nóng toàn wafer (temperature ~200°C).

2. **Đo Lường Chính Xác (Metrology)**:
   - **Dòng ion (implant current)** có thể đo được chính xác bằng Faraday cup → số lượng ion = charge / electron charge (q/e).
   - Không cần dùng các phương pháp gián tiếp (ví dụ: đo resistivity).

3. **Positional Accuracy**:
   - Kết hợp scanning → implant ở các vị trí chính xác.

4. **Tinh Khiết Cao**:
   - Mass analyzer loại bỏ các ion không mong muốn.

## Nhược Điểm và Thách Thức

### 1. Làm Vô Định Hình (Amorphization)

- **Vấn đề**: Quá trình implant làm vùng xung quanh track ion mất cấu trúc tinh thể.
- **Hậu quả**: Silicon vô định hình không có tính chất dẫn điện tốt.
- **Giải pháp**: **Phải annealing (ủ nhiệt)** sau implant để phục hồi tinh thể và **kích hoạt dopant (activation)** – đưa dopant từ vị trí khoảng lưới (interstitial) về vị trí thay thế mạng (substitutional).

### 2. Kích Hoạt Dopant (Dopant Activation)

- **Là gì**: Sau implant, dopant chưa thật sự "hoạt động" (vẫn ở vị trí interstitial hoặc bị bẫy bởi khuyết tật).
- **Điều kiện**: Nung ở **800-1000°C trong vài giây/phút** để dopant ngẫu hành vào vị trí substitutional.
- **Hiệu suất kích hoạt**: Không phải 100% – có khuyết tật bẫy dopant → thường 70-90% được kích hoạt.

### 3. Nguyên Tử Khoảng Lưới (Defects)

- **Vấn đề**: Ngay cả sau annealing, vẫn có các nguyên tử silicon xung quanh implant bị vị trí (displaced) hoặc lộ cầu hóa (dangling bonds).
- **Hậu quả**: Tạo nơi bẫy carrier → giảm lifetime → cần **gettering (loại bỏ kim loại)** để loại bỏ chúng.

### 4. Lateral Straggle

- **Vấn đề**: Ion không xuyên thẳng → hình dạng vùng implant không hình chữ nhật mà hơi cong.
- **Tầm quan trọng**: Với node nhỏ (5-3nm), lateral straggle có thể gây vấn đề về chính xác hình học.

### 5. Chi Phí Thiết Bị Cao

- Máy implant là một trong những thiết bị **đắt nhất** trong fab (~$5-10 triệu USD).

## Các Loại Implant Tiên Tiến

### 1. Shallow Implant (Cấy Cạn)

- **Mục đích**: Tạo vùng source/drain của MOSFET.
- **Điện áp**: 10-50 keV.
- **Độ sâu**: 10-50 nm.

### 2. Deep Implant (Cấy Sâu)

- **Mục đích**: Tạo vùng substrate bias (hạt thấp), buried layers trong các thiết bị phức tạp.
- **Điện áp**: 100 keV ~ 1 MeV.
- **Độ sâu**: 100 nm ~ vài μm.

### 3. Angular Implant (Cấy Góc)

- **Mục đích**: Cấy từ các góc khác nhau để đạt profile dopant phức tạp hơn (ví dụ: HALO implant để giảm SCE – Short Channel Effect).
- **Phương pháp**: Xoay wafer đến góc cụ thể (4°, 7°, 22°...) rồi implant.

### 4. Flash Annealing / Laser Annealing

- **Mục đích**: Thay vì nung tọa độ cao trong vài phút (gây diffusion), dùng **laser pulse** hoặc **rapid flash** (~μs) để kích hoạt dopant ngay tại vị trí implant.
- **Lợi thế**: Giảm thermal budget → ngăn diffusion → tăng độ sắc nét profile.

## So Sánh: Implantation vs. Thermal Diffusion

| Tiêu Chí | Implantation | Thermal Diffusion |
|---------|-------------|------------------|
| Điều khiển độ sâu | Tuyệt đối (bằng điện áp) | Tương đối (bằng thời gian + nhiệt độ) |
| Đo lường dose | Chính xác (dòng ion) | Gián tiếp (resistivity) |
| Nhiệt độ quá trình | Thấp (~200°C implant) | Cao (1100°C diffusion) |
| Hậu quả diffusion | Ít (sau annealing nhanh) | Nhiều (profile bị mở rộng) |
| Chi phí thiết bị | Cao | Thấp |
| **Áp dụng hiện nay** | **Chủ lực** (hầu hết FEOL) | Cũ (dùng cho ít bước) |

## Tầm Quan Trọng trong Quy Trình

Cấy ion là **bước thay đổi tính chất điện** của wafer. Nó quyết định:
- **Đặc tính transistor**: Vth (threshold voltage), gm (transconductance), leakage current.
- **Tỷ lệ yield**: Vùng implant bị làm hỏng → cần kiểm soát chất lượng kỹ càng.
- **Chi phí sản xuất**: Thiết bị đắt + quá trình phức tạp.
