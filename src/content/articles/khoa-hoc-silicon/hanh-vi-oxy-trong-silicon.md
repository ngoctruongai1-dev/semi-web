---
title: Hành Vi Của Oxy Trong Silicon (シリコン中の酸素)
sourceUrl: https://semi-journal.jp/basics/si-chem/oxygen.html
category: khoa-hoc-silicon
order: 16
flagship: false
---

## Oxy Xen Kẽ (Interstitial Oxygen, Oi)

### Vị Trí & Liên Kết

- **Oxy chiếm vị trí xen kẽ (interstitial)**: giữa các nguyên tử Si trong mạng
- **Liên kết**: Si-O-Si (ba nguyên tử)
- **Khuếch tán**: Oxy "nhảy" giữa các vị trí xen kẽ trong mạng

### Nồng Độ Tại Nhiệt Độ Phòng

Si CZ (Czochralski) luôn **bão hòa vượt mức (supersaturated)** oxy:
- **Nồng độ thực**: ~10¹⁷-10¹⁸ atom/cm³
- **Nồng độ bão hòa**: Thấp hơn, do đó Si luôn trong trạng thái **oversaturated**

**Kết Quả**: Bất kỳ lúc nào, oxy cũng có khuynh hướng **tập hợp/沈澱 (precipitate)** thành SiO₂ nếu có điều kiện.

## Phương Trình Khuếch Tán

**Hệ Số Khuếch Tán (Diffusion Coefficient)**:
$$D = 0.13 \exp\left(-\frac{2.53 \text{ eV}}{kT}\right)$$

**Độ Hòa Tan (Solubility)**:
$$[O]_s = 9×10^{22} \exp\left(-\frac{1.52 \text{ eV}}{kT}\right)$$

**Đơn Vị**: atom/cm³

### Tính Toán Ở Các Nhiệt Độ

| Nhiệt Độ | D (cm²/s) | [O]_s (atom/cm³) |
|---|---|---|
| **900°C** | ~10⁻¹³ | ~10¹⁷ |
| **1000°C** | ~10⁻¹² | ~5×10¹⁷ |
| **1200°C (CZ)** | ~10⁻¹¹ | ~10¹⁸ |

Ở 1200°C (nhiệt độ CZ), Si nóng chảy có nồng độ oxy ~10¹⁸/cm³.

## Đo Lường Oxy (IR Spectroscopy)

### Phương Pháp

Dùng **quang phổ hồng ngoại (Infrared Spectroscopy)**:
- **Đỉnh hấp thụ**: **1106 cm⁻¹** (dao động kéo dãn Si-O-Si không đối xứng, asymmetric stretch)
- **Cường độ hấp thụ ∝ nồng độ oxy**

### Công Thức

$$[O] = k × I_{1106}$$

- **[O]**: Nồng độ oxy (atom/cm³)
- **I₁₁₀₆**: Cường độ absorption peak tại 1106 cm⁻¹
- **k**: Hệ số hiệu chuẩn (tuỳ chuẩn ASTM hay JEIDA)

**Hai Chuẩn Chính**:
- **ASTM**: k = 3.0 × 10¹⁷ cm⁻²
- **JEIDA (Nhật)**: k = 1.0 × 10¹⁷ cm⁻² (khác!)

**Ứng dụng**: Kiểm tra nồng độ oxy trong wafer để **kiểm soát chất lượng**.

## Thermal Donor (TD) – Donor Hình Thành Từ Oxy

### Hình Thành

Khi oxy trong Si được **nung nóng ở 300-500°C**, nó **kết tụ thành clusters**:
- **Đỉnh tạo TD**: ~450°C
- **Công thức**: Nhiều cụm oxy tạo mức energy trong bandgap

### Tính Chất

- **TD acting as Donor**: Clusters oxy phát hành electron → **nâng nồng độ electron**
- **Thay đổi điện trở**: [ρ] giảm do carrier tăng
- **Ảnh hưởng**: **Resistivity shift (~2-3× tăng TD)** → wafer **không đồng nhất**

### Loại Bỏ TD

**Annealing ở 650-800°C**:
- TD **phân rã (dissociate)**
- Quay về trạng thái **Oi đơn lẻ**
- **Resistivity trở lại ổn định**

**Độ lệch**: TD có thể **làm thay đổi ρ tới 5-10%** → nguy hiểm cho wafer resistivity spec!

## Oxygen Precipitation (Kết Tụ Oxy)

### Cơ Chế

Oxy **bão hòa vượt mức** → khi bị **nung nóng ở ~700-800°C**:
- Oxy **tập hợp dần** (Oi → Oi···Oi clusters)
- Clusters phát triển thành **siO₂ crystals** (kết tụ)
- SiO₂ **tiêu thụ Si** trong quá trình tạo thành → tạo **interstitial Si mới**

### Ảnh Hưởng Lưỡng Tính

**Lợi (Gettering)**:
- Interstitial Si từ O precipitation → **bẫy kim loại nặng (Fe, Cu)**
- Gọi là **Intrinsic Gettering (IG)**
- Giúp **lau sạch kim loại** trong wafer

**Hại**:
- **Ứng suất tạo thành** → nứt Si
- **Defect tăng** → leakage IC tăng
- Quá **nhiều O precipitation** → **giảm cường độ cơ học**, **hỏng device**

## Kiểm Soát Oxy

### Trong CZ

- **Nung nóng**: Oxy từ crucible → **hòa tan vào Si**
- **Cool down**: Oxy **tồn tại, bão hòa vượt mức** ở room temp

### Trong FZ

- **Không dùng crucible** → **không có oxy từ quartz**
- Nồng độ oxy: **< 10¹⁶ atom/cm³** (~100× CZ)

### Annealing Profile

1. **Tránh 300-500°C**: Nếu phải đi qua vùng này → kiểm soát thời gian ngắn (tránh TD)
2. **Nếu cần kiểm soát O precipitate**: Nung từ từ ở 700-800°C để cho O tập hợp đều
3. **Donor Killer**: 450°C (form TD) → 750°C (dissociate TD)

## Ứng Dụng Thực Tế

| Ứng Dụng | Yêu Cầu Oxy |
|---|---|
| **IC Logic (CMOS)** | Vừa phải (~10¹⁷/cm³) – gettering tốt, hiệu suất cao |
| **DRAM** | Thấp (~10¹⁶/cm³) – ít khuyết tật, lifetime cao |
| **Power Device** | Cao (~10¹⁸/cm³) – độ bền cơ học tốt |
| **Pin Mặt Trời** | Thấp (FZ) – không precipitation |

## Kết Luận

**Oxy là "cạnh bén" của Si CZ**:
- **Lợi**: Gettering, độ bền cơ học
- **Hại**: Thermal Donor, Precipitation

Hiểu rõ **interstitial oxy, thermal donor, O precipitation** là chìa khóa để **tối ưu annealing profile** và **đạt wafer quality cao**.
