---
title: Bán Dẫn Vùng Cấm Rộng (Wide Bandgap Semiconductor - SiC, GaN)
sourceUrl: https://semi-journal.jp/basics/device/power/wide-bandgap-semiconductor.html
category: thiet-bi-ban-dan
subcategory: power-semiconductor
order: 5
flagship: false
---

## Định Nghĩa

**Bán dẫn Vùng Cấm Rộng** (Wide BandGap, WBG, ワイドバンドギャップ半導体) là "bán dẫn có bandgap (vùng cấm năng lượng) lớn". Theo định nghĩa phổ biến, những vật liệu có **bandgap ≥ 2eV** được phân loại là WBG.

**Ý nghĩa**: Bandgap (Eg) là khoảng năng lượng giữa dải hóa trị (valence band) và dải dẫn (conduction band). Bandgap càng lớn → cần năng lượng cao hơn để kích hoạt electron → khả năng chịu điện áp cao hơn.

## So Sánh Các Vật Liệu Bán Dẫn

### Bảng Bandgap và Chỉ Số Baliga

| Vật Liệu | Bandgap (eV) | Baliga FOM (tương đối) | Loại |
|---------|------------|----------------------|------|
| **Silicon (Si)** | 1.12 | 1 (chuẩn) | Truyền thống |
| Germanium (Ge) | 0.66 | <1 | Truyền thống |
| **SiC (4H-SiC)** | **3.3** | **~340** | **WBG** |
| **GaN** | **3.4** | **~870** | **WBG** |
| **Ga₂O₃** | **4.8** | **~3400** | **WBG** |
| AlN | 6.3 | - | Ultra WBG |
| Diamond | 5.5 | - | Ultra WBG |

### Giải Thích Baliga FOM (Figure of Merit)

**Chỉ số Baliga** đo "khả năng làm bán dẫn công suất hiệu quả". Công thức:
```
FOM = (ε × μ × E_c³) / (3 × q)
```

- ε: Hằng số điện môi
- μ: Độ linh động carrier (mobility)
- E_c: Điện trường phá hủy (breakdown field strength)

**Ý nghĩa**: 
- FOM cao → chịu áp cao + chi phí thấp + hiệu suất cao
- GaN FOM (~870) gấp 870 lần Si → phù hợp công suất 870 lần cao hơn trong cùng diện tích, chi phí, tấy nhiệt

## Tại Sao Bandgap Lớn = Chịu Áp Cao

### Lý Thuyết

**Hiện tượng Avalanche Breakdown** (Tuyết lở điện tử):
- Khi điện áp ngược quá cao, điện trường mạnh kéo electron và lỗ trống
- Electron/lỗ được gia tốc, va chạm phá vỡ liên kết Si-Si (hoặc SiC, GaN)
- Mỗi va chạm giải phóng thêm electron → hiệu ứng dây chuyền theo cấp số nhân

**Ngưỡng Avalanche**:
```
Điện trường phá hủy (breakdown field, E_c) = 2 × Eg / (3 × q × d)
```

- Eg: Bandgap (eV)
- Bandgap lớn → E_c cao → cần điện áp cao hơn để gây avalanche

**Ví dụ**:
- Si: Eg = 1.12eV → E_c ≈ 300 kV/cm
- SiC: Eg = 3.3eV → E_c ≈ 2000 kV/cm (gấp 6-7 lần)
- GaN: Eg = 3.4eV → E_c ≈ 3300 kV/cm (gấp 11 lần)

### Hệ Quả Thực Tiễn

**Chịu áp cao**:
```
V_breakdown ∝ (E_c × d)²
```
- d: Độ dày lớp cạn kiệt (drift region thickness)
- Nếu chịu áp cao, d phải dày → khi xây dựng diode/transistor
- **Si**: Để chịu 600V, d = 20-30μm (dài → kháng cự (resistance) cao → tán nhiệt nhiều)
- **SiC**: Để chịu 600V, d = 3-5μm (ngắn → kháng cự thấp → tán nhiệt ít)

## Ưu Điểm Của Wide Bandgap (SiC, GaN)

### 1. Khả Năng Chịu Áp Cao (Voltage Rating)
- SiC/GaN thường chịu 600V-3300V với độ dày lớp drift mỏng
- Si: Chỉ chịu 100-600V với độ dày drift dày
- **Lợi ích**: Giảm kích thước, chi phí, tản nhiệt

### 2. Dòng Rò Thấp (Leakage Current)
- Bandgap lớn → nồng độ carrier nội tại (intrinsic carrier concentration) cực thấp
- Công thức: n_i = √(N_c × N_v) × exp(-Eg / 2kT)
- n_i giảm mũi → dòng rò giảm mũi (ví dụ: từ μA xuống fA)
- **Lợi ích**: Tiêu thụ điện yên tĩnh thấp

### 3. Tốc Độ Chuyển Mạch Nhanh (Switching Speed)
- GaN/SiC có tốc độ chuyển cao → tần số hoạt động cao (MHz~GHz)
- So với Si: Tần số PWM cao → gợn sóng nhỏ → tụ lọc nhỏ → kích thước nguồn nhỏ

### 4. Hiệu Suất Năng Lượng (Energy Efficiency)
- Điện áp rơi (V_f) thấp → tán nhiệt ít
- Chuyển mạch nhanh → dòng động (dynamic loss) thấp
- Tổng tán nhiệt: Giảm 20-40% so với Si
- **Lợi ích**: Giảm quạt tản nhiệt, chi phí làm lạnh

### 5. Hoạt Động Ở Nhiệt Độ Cao
- Eg lớn → điểm Curie cao (hoạt động tới 250°C thay vì 150°C với Si)
- **Lợi ích**: Giảm công nghiệp tản nhiệt, phù hợp ứng dụng khắc nghiệt (động cơ ô tô, lò nướng)

## Nhược Điểm Của Wide Bandgap

### 1. Chi Phí Cao
- SiC/GaN chip: 5-10 lần đắt hơn Si
- Công nghệ tương đối mới, lợi nhuận quy mô chưa cao
- Ngành SiC/GaN mới phát triển (20-30 năm so với Si 60 năm)

### 2. Độ Tinh Khiết Yêu Cầu Cao
- Độ nhiễu tạp chất trong SiC/GaN chip cao hơn Si
- Khuyết tật gây tăng dòng rò, giảm độ tin cậy
- Cần quy trình sản xuất tốt hơn

### 3. Công Nghệ Hỗ Trợ Chưa Trưởng Thành
- Tụ điện, cuộn cảm không tối ưu cho tần số cao
- Cần nghiên cứu thêm về gate driver, mạch điều khiển

### 4. Độc Tính Nhiệt (Thermal Sensitivity)
- Một số thiết bị SiC/GaN nhạy cảm với biến động nhiệt độ
- Cần quản lý nhiệt độ cẩn thận

## Ứng Dụng Chính Của SiC/GaN

### SiC (Silicon Carbide)
- **Công suất cao**: Inverter xe điện (100kW+), sạc nhanh (150kW)
- **Tần số vừa** (100kHz): Phù hợp công suất cao
- **Độ tin cậy cao**: Ngành ô tô yêu cầu kỹ lưỡng
- **Ứng dụng**: Xe EV (Tesla Model 3 dùng SiC), pin mặt trời công suất lớn

### GaN (Gallium Nitride)
- **Công suất vừa**: Sạc điện thoại (fast charger 65-140W), adapter laptop
- **Tần số cao** (MHz): Cho phép kích thước cực nhỏ
- **Chi phí đã giảm**: Đủ cạnh tranh với Si cho consumer
- **Ứng dụng**: Sạc nhanh 65W (USB-C PD), DC-DC 48V-12V datacenter

## So Sánh Si, SiC, GaN

| Đặc Điểm | Si | SiC | GaN |
|----------|----|----|-----|
| **Bandgap (eV)** | 1.12 | 3.3 | 3.4 |
| **Baliga FOM** | 1 | 340 | 870 |
| **Chịu áp (V)** | 600-1200 | 600-3300 | 200-900 |
| **E_c (kV/cm)** | 300 | 2000 | 3300 |
| **Tần số (kHz)** | 100-500 | 100-500 | 500-2000 |
| **Dòng rò** | μA | nA-pA | pA-fA |
| **T_max hoạt động** | 150°C | 250°C | 200°C |
| **Chi phí** | Rẻ (chuẩn) | 5-10× Si | 3-5× Si (giảm) |
| **Ứng dụng** | AC-DC bình thường, tàu điện | EV inverter, sạc nhanh | Sạc điện thoại, DC-DC server |

## Xu Hướng Phát Triển

### Hiện Tại (2024)
- **SiC**: Chiếm lĩnh công suất cao (xe EV, pin mặt trời)
- **GaN**: Tăng nhanh trong consumer (sạc nhanh, laptop)
- **Ga₂O₃**: Đang nghiên cứu, FOM ~3400 (siêu cao)

### Tương Lai
- Giá SiC/GaN tiếp tục giảm khi quy mô tăng
- GaN dự kiến thay thế Si trong hầu hết ứng dụng <600V vào 2030
- SiC sẽ chi phối công suất cao (>1kW)
- Ga₂O₃ có thể ra thị trường 2025-2030 cho ứng dụng siêu cao áp (>10kV)
