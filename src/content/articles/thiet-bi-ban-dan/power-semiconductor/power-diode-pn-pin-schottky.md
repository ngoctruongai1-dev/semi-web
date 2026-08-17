---
title: 'Power Diode: Ba Loại PN, PIN, Schottky'
sourceUrl: https://semi-journal.jp/basics/device/power/pn-pin-schottky.html
category: thiet-bi-ban-dan
subcategory: power-semiconductor
order: 3
flagship: false
---

## Tổng Quan

Power Diode (Diode Công Suất, パワーダイオード) là các thiết bị "thực hiện chức năng chỉnh lưu dòng điện, cho phép dòng điện chảy chỉ một chiều duy nhất". Có ba loại chính, mỗi loại được tối ưu cho ứng dụng khác nhau.

## Ba Loại Power Diode

### 1. PN Junction Diode (Diode PN Tiếp Hợp)

#### Cấu Trúc
- **Tiếp hợp P-N đơn giản**: Lớp p-type nối với lớp n-type
- P-side: Cực dương (Anode)
- N-side: Cực âm (Cathode)
- Giao diện: Vùng cạn kiệt hình thành

#### Nguyên Lý Hoạt Động

**Thiên áp thuận** (順方向バイアス):
- P-side nối cực dương, N-side nối cực âm
- Vùng cạn kiệt hẹp → dòng điện chảy dễ dàng
- Điện áp xuôi (forward voltage, VF): **0.7-1.5V** (tùy doping level)

**Thiên áp nghịch** (逆方向バイアス):
- P-side nối cực âm, N-side nối cực dương
- Vùng cạn kiệt rộng → dòng điện gần như bằng 0 (chỉ dòng rò rất nhỏ)
- Hoạt động như công tắc mở, chặn dòng ngược

#### Đặc Điểm
- **Cấu trúc đơn giản nhất** trong ba loại
- **Điện áp rơi cao**: 0.7-1.5V → tán nhiệt nhiều
- **Khả năng chịu áp thấp** (耐圧): Chỉ ~100-600V
- **Tốc độ chuyển mạch chậm**: Thời gian phục hồi ngược (reverse recovery time, trr) ~1-10μs
- **Chi phí rẻ nhất**

#### Ứng Dụng
- Sạc điện thoại, nguồn điện máy tính (tần số thấp <1kHz)
- Chỉnh lưu AC-DC công suất thấp-vừa
- Bảo vệ mạch (cấp dưới cho transistor)

#### Công Thức

**Dòng diode (Shockley equation)**:
```
I_D = I_S × [exp(V_D / V_T) - 1]
```
- I_D: Dòng diode
- I_S: Dòng bão hòa ngược (typically 10⁻¹⁴ A ở 25°C)
- V_D: Điện áp diode
- V_T: Điện áp nhiệt = kT/q ≈ 26mV ở 25°C

### 2. PIN Diode (Diode PIN Tiếp Hợp, PINダイオード)

#### Cấu Trúc
- **P-type (lớp p)** | **I-layer (lớp nội tại)** | **N-type (lớp n)**
- I-layer: Bán dẫn không pha tạp (intrinsic), độ dài ~1-10μm, chiếm vùng cạn kiệt chính

#### Nguyên Lý Hoạt Động

**Thiên áp thuận**:
- Electron từ N-layer khuếch tán qua I-layer vào P-layer
- Lỗ từ P-layer khuếch tán qua I-layer vào N-layer
- Dòng mang (stored charge) trong I-layer lớn
- Điện áp xuôi: **0.7-2.0V** (cao hơn PN do lớp I dài)

**Thiên áp nghịch** (Điểm mạnh của PIN):
- Vùng cạn kiệt = toàn bộ I-layer (rất rộng, dày hơn PN)
- **Điện trường phân tán đều** trên I-layer → ngăn "hot spot" (sự tập trung điện trường cục bộ)
- **Khả năng chịu áp cao hơn PN 10-100 lần**: 1000-5000V

**Tốc độ chuyển mạch**:
- Thời gian phục hồi ngược (trr): **1-5μs** (nhanh hơn PN)
- Phù hợp RF (Radio Frequency) và ứng dụng tần số cao

#### Ứng Dụng
- Mạch cao tần (RF): Công tắc cột lọc trong amplifier
- Nguồn điện chuyển mạch (switched-mode power supply): tần số 100kHz-1MHz
- Sạc nhanh (fast charging): DC-DC converter công suất trung

#### Ưu Điểm
- Chịu áp cao → dùng cho điều kiện khó khăn
- Tốc độ chuyển nhanh → hiệu suất cao
- Lớp I cấu trúc linh hoạt → có thể tối ưu cho ứng dụng cụ thể

### 3. Schottky Barrier Diode (SBD, Diode Rào Cản Schottky)

#### Cấu Trúc
- **Kim loại (thường là Platinum, Molybdenum)** tiếp xúc trực tiếp với **n-type Silicon**
- Không phải tiếp hợp p-n thông thường mà là **tiếp hợp kim loại-bán dẫn** (metal-semiconductor junction)
- Rào thế Schottky: Chiều cao ~0.5-0.7eV (thấp hơn bandgap Si 1.1eV)

#### Nguyên Lý Hoạt Động

**Thiên áp thuận** (Điểm mạnh của SBD):
- Kim loại: cực dương, n-type: cực âm
- Rào Schottky rất thấp → **electron dễ dàng vượt qua** nhờ emission thermionique (nhiệt phát xạ)
- **Điện áp xuôi cực thấp: 0.2-0.5V** (thấp nhất trong ba loại)
- **Dòng phục hồi ngược không** (reverse recovery) - chỉ có dòng rò tĩnh

**Thiên áp nghịch**:
- Chỉ có dòng rò (saturation current), rất nhỏ
- **Khả năng chịu áp thấp**: Chỉ ~50-200V (thấp nhất ba loại)
- Hiểm họa: Dễ bị avalanche breakdown nếu áp cao

#### Đặc Điểm Ghi Chú

**Tốc độ chuyển mạch**:
- Thời gian phục hồi ngược (trr): **0** (không có stored charge)
- **Chuyển mạch siêu nhanh** → tần số MHz-GHz

**Ứng dụng**:
- Nguồn chuyển mạch tần số cao (switched-mode power supply): 500kHz-2MHz
- DC-DC converter (boost, buck, bridge)
- Cấp dưới cho BJT/MOSFET (flywheel diode)
- Bộ khuếch đại RF tần số siêu cao

**Nhược điểm**:
- Chi phí cao (cần kỹ thuật chế tạo tinh vi hơn)
- Dòng rò cao hơn PN/PIN khi nhiệt độ tăng
- Chịu áp thấp → giới hạn ứng dụng

## So Sánh Ba Loại Power Diode

| Đặc Điểm | PN Junction | PIN | Schottky (SBD) |
|----------|------------|-----|----------------|
| **Cấu trúc** | P-N đơn giản | P-I-N | Kim loại-N |
| **Điện áp xuôi (VF)** | 0.7-1.5V | 0.7-2.0V | **0.2-0.5V** (thấp nhất) |
| **Chịu áp (耐圧)** | 100-600V | 1000-5000V (cao nhất) | 50-200V (thấp nhất) |
| **trr (phục hồi ngược)** | 1-10μs | 1-5μs | **0** (không có) |
| **Dòng rò ngược** | Thấp | Thấp | Cao (phụ thuộc T) |
| **Tần số hoạt động** | <1kHz | 100kHz-1MHz | MHz-GHz |
| **Chi phí** | **Rẻ nhất** | Trung bình | Đắt |
| **Tản nhiệt khi dẫn** | Nhiều (VF cao) | Vừa | **Ít nhất** (VF thấp) |
| **Ứng dụng** | AC-DC tần số thấp | Nguồn chuyển mạch | Nguồn tần số cao |

## Lựa Chọn Diode Phù Hợp

### Chọn PN Diode khi:
- Ứng dụng tần số thấp (<1kHz)
- Chịu áp không quá cao (<600V)
- Chi phí tối thiểu quan trọng
- Ví dụ: Sạc điện thoại, nguồn 50/60Hz

### Chọn PIN Diode khi:
- Cần chịu áp cao (1000-5000V)
- Tần số chuyển trung bình (100kHz-1MHz)
- Chịu được chi phí cao hơn
- Ví dụ: SMPS 500kHz, DC-DC converter công suất vừa

### Chọn SBD khi:
- Cần tốc độ chuyển siêu nhanh (MHz+)
- Tản nhiệt (VF thấp) quan trọng
- Chịu áp thấp đủ dùng (<200V)
- Chi phí cao được chấp nhận
- Ví dụ: Nguồn 1MHz, boost converter, RF circuits
