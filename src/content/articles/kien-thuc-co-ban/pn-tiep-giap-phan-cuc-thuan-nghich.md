---
title: Thiên Áp Thuận và Nghịch của Tiếp Giáp p-n (順方向・逆方向バイアス)
sourceUrl: https://semi-journal.jp/basics/beginner/bias.html
category: kien-thuc-co-ban
order: 7
flagship: false
---

## Khái Niệm Thiên Áp (Bias)

**Thiên áp** (バイアス, bias) là việc **áp dụng điện áp bên ngoài** tới tiếp giáp p-n để kiểm soát dòng điện qua nó. Tùy theo cách nối cực (+/-), tiếp giáp p-n sẽ có hành vi hoàn toàn khác nhau.

## Thiên Áp Thuận (Forward Bias, 順方向バイアス)

### Định Nghĩa
**Thiên áp thuận** là khi nối **cực dương của nguồn điện với vùng p** và **cực âm với vùng n**.

### Ảnh Hưởng Tới Vùng Cạn Kiệt

- Vùng cạn kiệt **hẹp lại (shrink)**
- Lực điện trường nội bộ bị "ép" yếu đi
- Rào thế năng **giảm**

### Dòng Điện Qua Tiếp Giáp

Khi vùng cạn kiệt hẹp lại:
- **Electron từ n-type được "đẩy" sang p-type** – quá trình gọi là **tiêm electron (electron injection, 電子注入)**
- **Lỗ trống từ p-type được "đẩy" sang n-type** – **tiêm lỗ trống (hole injection, 正孔注入)**
- **Dòng điện chảy dễ dàng qua tiếp giáp** → **Tiếp giáp dẫn điện tốt**

### Công Thức Dòng Điện (Shockley Equation)

Dòng điện qua tiếp giáp ở thiên áp thuận:

$$I = I_0(e^{qV/kT} - 1)$$

Trong đó:
- **I**: Dòng điện qua tiếp giáp
- **I₀**: Dòng rò ngược lạnh (reverse saturation current)
- **q**: Điện tích electron (1.6×10⁻¹⁹ C)
- **V**: Điện áp áp dụng (Volts)
- **k**: Hằng số Boltzmann (1.38×10⁻²³ J/K)
- **T**: Nhiệt độ tuyệt đối (Kelvin)

Khi V > 0 (thiên áp thuận): I tăng theo cấp số nhân (exponential)
Khi V < 0 (thiên áp nghịch): I ≈ -I₀ (hằng số, nhỏ)

### Điều Kiện Hoạt Động

- Ở Silicon: **điện áp threshold ≈ 0.6-0.7 V**
- Khi điện áp >= threshold, dòng điện bắt đầu chảy rõ rệt
- Ở Germanium: threshold ≈ 0.3 V (nhỏ hơn)

## Thiên Áp Nghịch (Reverse Bias, 逆方向バイアス)

### Định Nghĩa
**Thiên áp nghịch** là khi nối **cực âm với vùng p** và **cực dương với vùng n** (ngược lại so với thiên áp thuận).

### Ảnh Hưởng Tới Vùng Cạn Kiệt

- Vùng cạn kiệt **mở rộng (expand)** – ngày càng rộng hơn
- Điện trường nội bộ bị **tăng cường**
- Rào thế năng **tăng**

### Dòng Điện Qua Tiếp Giáp

Khi vùng cạn kiệt mở rộng:
- Electron ở n-type bị **đẩy xa khỏi giao diện** (càng xa rào cản càng cao)
- Lỗ trống ở p-type bị **đẩy xa khỏi giao diện**
- **Dòng điện không thể chảy** – tiếp giáp bị "cắt" (cutoff)
- Dòng điện lạnh (dòng rò) **gần như bằng 0**

### Công Thức Dòng Điện

Ở thiên áp nghịch:
$$I \approx -I_0$$

- Dòng điện **âm** (chảy ngược chiều so với thiên áp thuận)
- Độ lớn **rất nhỏ**, thường ~nanoamperes (10⁻⁹ A)
- Gần như **không phụ thuộc** vào độ lớn điện áp nghịch (cho tới khi xảy ra breakdown)

## Tính Chất Chỉnh Lưu (Rectification)

### Định Nghĩa

**Chỉnh lưu** (整流, rectification) là khả năng **chỉ cho dòng điện chảy một chiều**. Tiếp giáp p-n có đặc tính này:

### Đặc Điểm I-V (Dòng-Điện Áp)

| Chiều | Điện Áp | Dòng Điện | Trạng Thái |
|---|---|---|---|
| **Thuận** | V > 0 (p nối +, n nối -) | Lớn, tăng exponential | Dẫn điện (ON) |
| **Nghịch** | V < 0 (p nối -, n nối +) | Rất nhỏ (≈ -I₀) | Cắt, không dẫn (OFF) |

Tỷ lệ dòng thuận/nghịch có thể là **10⁶ lần** trở lên – rất chọn lọc!

### Ứng Dụng Chỉnh Lưu

Đó chính là **Diode (diode – 二極管 = "hai cực trụ")**:
- Cho phép dòng chảy trong một chiều (hướng dẫn – forward direction)
- Chặn dòng trong chiều ngược (chiều cắt – reverse direction)
- Dùng để chuyển AC → DC (chỉnh lưu điện xoay chiều thành một chiều)

## Sơ Đồ Minh Họa

### Thiên Áp Thuận
```
p-type (+) ━━[Vf]━━ (-) n-type
            ╔═══════╗
            ║  Dòng ║ (chảy dễ)
            ╚═══════╝
```

### Thiên Áp Nghịch
```
p-type (-) ━━[Vr]━━ (+) n-type
            ╔═════╗
            ║ -I₀ ║ (rất nhỏ)
            ╚═════╝
```

## Các Loại Diode Công Thực Tế

- **Rectifier Diode**: chỉnh lưu công suất lớn
- **Schottky Diode**: điện áp thuận thấp, tốc độ chuyển mạch nhanh
- **Zener Diode**: ổn định điện áp, dùng làm điều chỉnh áp
- **Tunnel Diode**: dùng hiệu ứng đường hầm (tunneling)
- **Photodiode**: phát hiện ánh sáng (các photon tạo cặp electron-hole)

## Kết Luận

Tính chất chỉnh lưu của tiếp giáp p-n là **nền tảng của mọi linh kiện điện tử hiện đại**. Hiểu rõ thiên áp thuận/nghịch là cầu nối để nắm vững hoạt động của transistor, IC, và các mạch điện phức tạp.
