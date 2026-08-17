---
title: 'Power Diode: Chỉnh Lưu AC-DC (Rectification)'
sourceUrl: https://semi-journal.jp/basics/device/power/power-diode-rectifier.html
category: thiet-bi-ban-dan
subcategory: power-semiconductor
order: 4
flagship: false
---

## Định Nghĩa

**Chỉnh lưu** (整流, rectification) là "quá trình chuyển đổi dòng xoay chiều (AC) thành dòng một chiều (DC)" bằng cách sử dụng tính chất chỉnh lưu của diode - cho phép dòng chảy một chiều nhưng chặn dòng ngược.

**Power Diode** (Diode Công Suất) là "thiết bị bán dẫn thực hiện chức năng chỉnh lưu, cho phép dòng điện chảy theo một chiều duy nhất". Khi áp dụng điện áp dương vào p-n junction, dòng điện chảy tự do; ngược lại sẽ bị chặn.

## Hai Loại Chỉnh Lưu Chính

### 1. Chỉnh Lưu Nửa Sóng (Half-Wave Rectification, 半波整流)

#### Cấu Trúc Mạch
- Một diode nối tiếp với tải (load)
- Nguồn AC đầu vào

#### Nguyên Lý Hoạt Động

**Nửa chu kỳ dương của AC** (positive half cycle):
- Điện áp AC dương → diode được thiên áp thuận → **diode dẫn (ON)**
- Dòng điện chảy qua diode → tải
- Điện áp tại tải ≈ V_input (có chút giảm VF do diode)

**Nửa chu kỳ âm của AC** (negative half cycle):
- Điện áp AC âm → diode được thiên áp nghịch → **diode không dẫn (OFF)**
- Không có dòng qua tải
- Điện áp tại tải ≈ 0

**Kết quả**:
- Đầu ra là "nửa sóng" - chỉ nửa chu kỳ dương được lấy ra
- Gọi là **"dòng xung động" (pulsating current, 脈流)** - không phải DC hoàn hảo
- Biến động điện áp lớn (ripple voltage lớn)

#### Công Thức Tính Toán

**Giá trị trung bình (average value)**:
```
V_avg = V_peak / π ≈ 0.318 × V_peak
```
- V_peak: Giá trị đỉnh của sóng AC
- Ví dụ: AC 10V peak → V_avg ≈ 3.18V DC

**Giá trị RMS (effective value)**:
```
V_rms = V_peak / 2 ≈ 0.707 × V_peak
```

**Gợn sóng (ripple voltage)**: Rất cao, khoảng 120% của V_avg

#### Ưu Điểm
- Cấu trúc đơn giản nhất (1 diode)
- Chi phí rẻ nhất
- Mạch điều khiển tối thiểu

#### Hạn Chế
- **Hiệu suất thấp**: Chỉ lấy 50% năng lượng AC
- **Gợn sóng cao**: Cần tụ lớn để làm trơn
- **Chỉ dùng cho công suất thấp**: <100W
- **Transformer phải chịu dòng DC offset** → nóng hơn

#### Ứng Dụng
- Sạc điện thoại cổ (chiếc cũ), adapter giá rẻ
- Nguồn điện công suất rất thấp (<5W)

### 2. Chỉnh Lưu Toàn Sóng (Full-Wave Rectification, 全波整流)

#### Cấu Trúc Mạch - Cầu Diode 4 Diode (Bridge Rectifier)

Có 4 diode xếp thành cầu Wheatstone:
```
      AC_1
       |
   +---+---+
   |   |   |
  D1   +   D2
   |   |   |
   +---+---+
   |   |   |
  D3   +   D4
   |   |   |
   +---+---+
       |
      AC_2
```

- **Diode D1 và D4**: Dẫn khi nửa sóng dương
- **Diode D2 và D3**: Dẫn khi nửa sóng âm
- Mỗi chu kỳ, một cặp diode dẫn, nhưng dòng qua tải **luôn cùng chiều**

#### Nguyên Lý Hoạt Động

**Nửa chu kỳ dương** (positive half cycle):
- AC_1 dương, AC_2 âm
- D1 và D4 được thiên áp thuận → **D1 và D4 dẫn**
- D2 và D3 được thiên áp nghịch → **D2 và D3 không dẫn**
- Dòng chảy: AC_1 → D1 → tải → D4 → AC_2
- Điện áp tại tải: Nửa sóng dương

**Nửa chu kỳ âm** (negative half cycle):
- AC_1 âm, AC_2 dương
- D2 và D3 được thiên áp thuận → **D2 và D3 dẫn**
- D1 và D4 được thiên áp nghịch → **D1 và D4 không dẫn**
- Dòng chảy: AC_2 → D2 → tải → D3 → AC_1
- Điện áp tại tải: Nửa sóng dương (đảo chiều)

**Kết quả**: 
- Cả nửa sóng dương lẫn âm đều được lấy ra
- Đầu ra là "toàn sóng" - gợn sóng nhỏ hơn nhiều
- Tần số gợn sóng: **2 lần tần số AC** (ví dụ: 50Hz AC → 100Hz ripple)

#### Công Thức Tính Toán

**Giá trị trung bình (average value)**:
```
V_avg = 2 × V_peak / π ≈ 0.636 × V_peak
```
- Gấp đôi chỉnh lưu nửa sóng
- Ví dụ: AC 10V peak → V_avg ≈ 6.36V DC

**Giá trị RMS**: Giống nửa sóng ~0.707 × V_peak (nhưng chỉ lấy nửa sóng)

**Gợn sóng**: Giảm đi nhiều lần so với nửa sóng

**Số diode dẫn cùng lúc**: 2 diode (D1+D4 hoặc D2+D3)

**Điện áp rơi tổng**: 2 × V_F (2 diode nối tiếp)

#### Ưu Điểm
- **Hiệu suất cao**: Lấy được 100% năng lượng AC (cả nửa sóng dương lẫn âm)
- **Gợn sóng thấp**: Tần số 2f → tụ có thể nhỏ hơn
- **Dòng DC trung bình cao hơn**: Gấp đôi nửa sóng
- **Transformer không bị dòng DC offset**
- Dùng cho công suất cao (kW)

#### Hạn Chế
- **Cấu trúc phức tạp**: Cần 4 diode
- **Điện áp rơi cao**: 2 × V_F (thường ~1.4V tổng)
- **Chi phí cao hơn nửa sóng** (nhưng vẫn rẻ)
- **Tản nhiệt**: Hai diode dẫn đồng thời → tản nhiệt cao hơn

#### Ứng Dụng
- Sạc điện thoại hiện đại
- Adapter máy tính, nguồn điện hầu hết thiết bị
- Inverter pin mặt trời (quay ngược)

## Làm Trơn Bằng Tụ Điện (Smoothing)

### Vấn Đề
- Cả hai loại chỉnh lưu đều tạo ra dòng/điện áp xung động (ripple)
- Các thiết bị điện tử cần điện áp DC ổn định, không được biến thiên quá mạnh

### Giải Pháp: Tụ Lọc (Filter Capacitor)

#### Nguyên Lý

**Quá trình tích lũy**:
- Khi điện áp diode cao (dòng chảy), tụ sạc nhanh
- Điện áp tụ tăng theo điện áp AC (gần như theo kịp)

**Quá trình phóng điện**:
- Khi điện áp AC giảm (dòng không chảy), diode ngắt
- Tụ không thể xả trực tiếp qua diode (diode chặn)
- Tụ chỉ xả qua tải (RL load)
- Điện áp tụ giảm chậm (phụ thuộc thời hằng RC = R × C)

**Kết quả**:
- Điện áp tại tải giữ gần giá trị đỉnh trong suốt chu kỳ
- Gợn sóng (ripple) giảm mạnh

#### Công Thức

**Gợn sóng điện áp (ripple voltage)**:
```
V_ripple ≈ I_load / (2 × f × C)  [cho full-wave]
V_ripple ≈ I_load / (f × C)       [cho half-wave]
```

- I_load: Dòng tải
- f: Tần số AC
- C: Độ dung của tụ

**Ví dụ**:
- Chỉnh lưu toàn sóng 50Hz, tải 1A, tụ 1000μF
- V_ripple ≈ 1 / (2 × 50 × 1000×10⁻⁶) ≈ 10V

### Tối Ưu Hóa
- **Tụ lớn hơn** → gợn sóng nhỏ nhưng chi phí cao, kích thước lớn
- **Diode có dòng cao** → giảm thời gian sạc tụ → gợn sóng nhỏ
- **Transistor nhân diode** (active rectifier) → điều khiển thời gian sạc → gợn sóng rất nhỏ nhưng phức tạp

## So Sánh Chỉnh Lưu Nửa Sóng vs Toàn Sóng

| Đặc Điểm | Nửa Sóng | Toàn Sóng |
|----------|---------|----------|
| **Số diode** | 1 | 4 (cầu) hoặc 2 (transformer có tap giữa) |
| **V_avg** | 0.318 × V_peak | 0.636 × V_peak |
| **Gợn sóng (ripple)** | 120% V_avg | 31% V_avg |
| **Hiệu suất** | 50% năng lượng | 100% năng lượng |
| **Tần số gợn sóng** | f (AC) | 2f |
| **Dòng transformer** | DC offset lớn | Không DC offset |
| **Tụ cần thiết** | Lớn | Nhỏ hơn |
| **Chi phí** | Thấp | Cao hơn |
| **Ứng dụng** | Công suất rất thấp | Hầu hết ứng dụng hiện đại |

## Cách Vẽ Sóng Chỉnh Lưu

### Nửa Sóng
```
Đầu vào AC:    ╱╲      ╱╲      ╱╲
               ╱  ╲    ╱  ╲    ╱  ╲
             ╱      ╲╱      ╲╱      ╲

Đầu ra DC:   ╱╲         ╱╲
             ╱  ╲       ╱  ╲
           ╱      ╲...╱      ╲...
```

### Toàn Sóng (Có Tụ Lọc)
```
Đầu vào AC:    ╱╲      ╱╲      ╱╲
               ╱  ╲    ╱  ╲    ╱  ╲
             ╱      ╲╱      ╲╱      ╲

Đầu ra DC:   ___╱╲___╱╲___╱╲___
            /    ╲  /  ╲ /   ╲  ...
           /      ╲╱    ╲╱    ╲
```
