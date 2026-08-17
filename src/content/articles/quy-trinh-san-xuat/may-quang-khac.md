---
title: Máy Phơi Sáng – Thiết Bị Quang Khắc (Exposure Equipment)
sourceUrl: https://semi-journal.jp/basics/process/exposure.html
category: quy-trinh-san-xuat
order: 7
flagship: false
---

## Giới Thiệu

Máy phơi sáng (露光装置, roshou souchi) là một trong những **thiết bị tinh vi nhất** trong quy trình sản xuất bán dẫn. Nó có nhiệm vụ **chiếu tia UV qua mặt nạ (mask)** để tạo hình dạng mạch trên photoresist với độ chính xác tới **nguyên tử** (các node hiện tại là 3-5 nm). Máy phơi sáng hiện nay có giá tới **$100+ triệu USD**, là một trong những thiết bị đắt nhất trên thế giới.

## Cấu Trúc Cơ Bản – Ba Phần Chính

Mọi máy phơi sáng hiện đại đều gồm **ba phần chính**:

### 1. Nguồn Sáng (Light Source)

**Chức năng**: Phát tia UV có bước sóng cụ thể để kích hoạt photoresist.

**Loại Sáng Phổ Biến**:

#### Wavelength Hiện Tại

- **ArF (Argon Fluoride)**: 
  - Bước sóng: **193 nm** (tia cực tím xa).
  - Phổ biến nhất: Sử dụng rộng rãi từ 2002 tới nay cho tất cả node từ 90nm xuống tới 7nm.
  - Ưu điểm: Công nghệ khủy lạc, rẻ hơn.
  - Nhược điểm: Bước sóng còn tương đối dài → cần kỹ thuật hỗ trợ (immersion, multi-patterning).

#### Wavelength Tiên Tiến

- **EUV (Extreme Ultra-Violet)**:
  - Bước sóng: **13.5 nm** (tia tử ngoại siêu cực).
  - Mục đích: Giải quyết giới hạn diffraction của ArF.
  - Thực tế: Bắt đầu sử dụng từ 2020 (Samsung, TSMC) cho node 5nm+.
  - Ưu điểm: Bước sóng ngắn → độ phân giải tự nhiên cao hơn → không cần multi-patterning (giản lược quy trình).
  - Nhược điểm: Công nghệ phức tạp, chi phí cực cao, nguồn EUV yếu → throughput thấp.

- **KrF (Krypton Fluoride)**:
  - Bước sóng: 248 nm (cũ hơn ArF).
  - Dùng hiện nay: Ít, chủ yếu trong công nghệ cũ (>180nm).

**Công Suất Tia**:
- ArF: thường ~10-20 W (đủ).
- EUV: thường ~10-20 W (quá thấp → throughput chậm).

### 2. Hệ Thống Quang Học (Optical System)

**Chức năng**: Lấy hình ảnh từ mask, **thu nhỏ xuống 1/4 hoặc 1/5** (tỷ lệ thu nhỏ typical = 1/4 hoặc 1/5), rồi chiếu lên wafer.

**Nguyên lý**:
- **Thấu kính (lenses)**: Hệ thống thấu kính phức tạp (có thể 10+ thấu kính riêng lẻ) để tập trung/phân tán tia sáng, loại bỏ **aberration (sai biệt)**.
- **Aperture (khẩu độ)**: **Numerical Aperture (NA)** = n × sin(θ), trong đó:
  - n: chiết suất của môi trường (không khí n=1, nước n=1.44, nước silica n=1.47).
  - θ: góc tối đa của tia sáng được thu nhận.
  - NA cao → phân giải tốt, nhưng độ sâu tiêu điểm (DOF) hẹp.

**Đặc Điểm**:
- **Thu nhỏ hình ảnh**: Mask có hình dạng lớn hơn thực tế (ví dụ mask 4x chu vi → wafer 1x chu vi) → rẻ hơn, dễ chế tạo mask, nhưng thiết bị quang học phức tạp.
- **Loại bỏ sai biệt**: Các loại aberration (spherical, chromatic, distortion...) phải được kiểm soát để độ chính xác cao.
- **Phủ coating**: Thấu kính được phủ các lớp anti-reflection để tận dụng tối đa tia sáng.

### 3. Bàn Wafer và Hệ Thống Định Vị (Wafer Stage & Positioning System)

**Chức năng**:
- Giữ wafer ở vị trí chính xác.
- Căn chỉnh wafer với mask (alignment).
- Dịch chuyển wafer (movement) khi cần exposure từng vùng khác nhau.

**Yêu Cầu Độ Chính Xác**:
- **XY-positioning**: ±50 nm (node 7nm trở lại).
- **Z-positioning (tiêu điểm)**: ±10-20 nm (DOF rất hẹp).
- **Rotation**: ±0.01°.

**Công Nghệ**:
- **Vacuum chuck**: Hút chân không giữ wafer an toàn trên bàn.
- **Stepper motors + linear stages**: Chuyển động tuyến tính chính xác.
- **Laser interferometer**: Đo độ chính xác vị trí realtime để phản hồi điều chỉnh.
- **Autofocus system**: Cảm biến quang học theo dõi bề mặt wafer, tự động điều chỉnh Z-position để duy trì tiêu điểm.

## Hai Loại Máy Phơi Sáng – Stepper vs. Scanner

### 1. Stepper (Máy Nấc Thang)

**Khái Niệm**:
- "Step" = bước, tức **một lần phơi sáng duy nhất toàn bộ mặt nạ** trên một vùng wafer.
- Sau đó, bàn wafer dịch chuyển sang vị trí tiếp theo, phơi sáng lại (lặp lại).

**Quy Trình**:
1. Định vị wafer → phơi sáng → dịch chuyển → định vị → phơi sáng → ...

**Ưu Điểm**:
- **Chi phí thấp**: Thiết kế đơn giản, rẻ hơn scanner.
- **Phù hợp cũ**: Công nghệ đã lạc hậu, chỉ dùng cho node lớn (>90nm).

**Nhược Điểm**:
- **Diện tích exposure giới hạn**: Chỉ có thể phơi một vùng nhỏ (ví dụ 22mm × 22mm) mỗi lần → cần lặp lại nhiều lần.
- **Độ phân giải thấp**: Không thể tận dụng toàn bộ lens để phân giải cao (sử dụng cả lens, bao gồm cả phần ngoại vi có sai biệt).
- **Throughput chậm**: Mỗi "step" mất thời gian, tổng thời gian wafer dài → sản lượng thấp.

### 2. Scanner (Máy Quét)

**Khái Niệm**:
- "Scan" = quét, tức **chiếu tia quét mask qua wafer** – vừa phơi sáng vừa dịch chuyển mask + wafer đồng bộ.

**Quy Trình**:
1. Chiếu một **vị trí "slit"** (khe hẹp) trên mask/wafer.
2. Đồng thời dịch chuyển mask + wafer **ngược chiều** (để duy trì tỉ lệ thu nhỏ).
3. Tia quét "dọn sạch" từng dòng trên wafer.
4. Sau khi một vùng quét xong, dịch chuyển sang vùng tiếp theo, lặp lại.

**Ưu Điểm**:
- **Diện tích coverage lớn hơn**: Scan qua một diện tích lớn → lần phơi ít hơn → throughput cao hơn.
- **Độ phân giải cao**: Chỉ sử dụng **phần trung tâm của lens** (center portion có aberration thấp, chất lượng cao) → độ phân giải tốt hơn 10-20%.
- **Throughput cao**: Ít lần định vị, ít lần phơi → sản lượng wafer cao hơn.
- **Là chủ lực hiện nay**: Gần như 100% máy lithography hiện đại là scanner.

**Nhược Điểm**:
- **Chi phí cao**: Hệ thống quét phức tạp, yêu cầu kiểm soát chất lượng cao.
- **Công nghệ khó**: Đòi hỏi cân bằng quét tốt để tránh "scan distortion" (sai lệch quét).

## Công Thức Độ Phân Giải – Rayleigh Criterion

Công thức cơ bản để ước tính độ phân giải tối thiểu có thể đạt được:

```
R (Resolution) = k₁ × λ / NA
```

**Trong đó**:
- **R**: Kích thước tối thiểu (critical dimension) có thể phân biệt được.
- **k₁**: Hệ số tiến trình (process factor), thường **0.3 ~ 0.5** cho công nghệ tốt nhất.
  - k₁ thấp (0.3) = độ phân giải tốt (cần optical proximity correction), giá đắt.
  - k₁ cao (0.5) = độ phân giải kém hơn, nhưng tolerant hơn, rẻ hơn.
- **λ**: Bước sóng ánh sáng.
  - ArF: 193 nm → R ≈ 0.3 × 193 / NA.
  - EUV: 13.5 nm → R ≈ 0.3 × 13.5 / NA = cực nhỏ.
- **NA**: Numerical Aperture.
  - Không khí: max NA ≈ 0.5 → R ≈ 30 nm (ArF).
  - Immersion (nước): max NA ≈ 1.3 → R ≈ 45 nm (ArF).
  - EUV: max NA ≈ 0.33 → R ≈ 13 nm (đạt được node 5-7nm).

## Ba Cách Cải Thiện Độ Phân Giải

### 1. Tăng NA (Numerical Aperture)

**Phương pháp**: **Immersion Lithography (quang khắc nhúng nước)**:
- Đặt nước cất giữa thấu kính cuối và wafer.
- Nước có chiết suất n ≈ 1.44 → NA = 1.44 × sin(θ) → tăng NA hiệu dụng.
- **Lợi ích**: Cải thiện độ phân giải ~1.4×, tăng DOF ~1.4× mà không đổi wavelength.
- **Được dùng rộng rãi**: Từ 45nm node tới 7nm node (trước EUV).

### 2. Giảm Wavelength (λ)

**Phương pháp**: Dùng wavelength ngắn hơn.
- ArF (193 nm) → EUV (13.5 nm): giảm 14×.
- **Lợi ích**: Độ phân giải cải thiện 14× mà không cần multi-patterning phức tạp.
- **Thách thức**: EUV rất yếu, optical components phức tạp (tất cả phải gương/mirror, không có lens trong EUV).

### 3. Giảm k₁ (Hệ Số Tiến Trình)

**Phương pháp**: Tối ưu hóa photoresist + quy trình.
- Dùng resist nhạy hơn, tight process control.
- **Lợi ích**: Độ phân giải tốt hơn với cùng λ, NA.
- **Nhược điểm**: Độ chính xác yêu cầu cao, tolerant hẹp, yield có thể giảm.

## Các Tiêu Chí Hiệu Năng

| Chỉ Số | Định Nghĩa | Giá Trị Typical |
|--------|-----------|----------------|
| **Wavelength** | Bước sóng sáng | ArF 193nm, EUV 13.5nm |
| **NA** | Numerical Aperture | ArF ~0.8-0.93, EUV ~0.33 |
| **Throughput** | Số wafer/giờ | 100-180 wafer/giờ (scanner ArF) |
| **Overlay** | Độ chính xác căn chỉnh lớp | <10nm (node 7nm) |
| **Depth-of-Focus (DOF)** | Vùng tiêu điểm | ~50-80nm (node 7nm) |
| **Line Edge Roughness (LER)** | Độ nhấp nhô cạnh mạch | <5nm (node 5nm) |

## Tầm Quan Trọng và Những Thách Thức

**Quan Trọng**:
- Quyết định độ chính xác hình dạng mạch (critical dimension).
- Chi phí thiết bị cực cao ($100+ triệu) → một trong những "bình cổ chai" của ngành.

**Thách Thức Hiện Đại**:
1. **Diffraction Limit**: ArF 193nm → khó tạo pattern <50nm → cần multi-patterning (phức tạp/chậm).
2. **EUV Adoption**: Chuyển từ ArF sang EUV là quyết định chiến lược → chi phí cao, throughput thấp.
3. **Cost per wafer**: Mỗi wafer được phơi sáng phải "trả" một phần chi phí thiết bị khổng lồ.
