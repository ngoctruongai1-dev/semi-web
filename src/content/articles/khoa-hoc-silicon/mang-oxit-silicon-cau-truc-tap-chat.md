---
title: Màng Oxide Silicon – Cấu Trúc Và Tạp Chất (酸化シリコン膜)
sourceUrl: https://semi-journal.jp/basics/si-chem/oxide.html
category: khoa-hoc-silicon
order: 11
flagship: false
---

## Ứng Dụng Oxide Silicon (SiO₂)

**Màng oxide silicon** là một trong những **vật liệu quan trọng nhất** trong công nghiệp bán dẫn:

- **Gate oxide**: Lớp cách điện trong MOSFET
- **Lớp cách điện**: Giữa các lớp kim loại/polysilicon
- **Lớp chắn tạp chất**: Ngăn khuếch tán
- **Mask (mặt nạ)**: Phòng chống ion implantation
- **Passivation layer**: Bảo vệ bề mặt
- **Isolation**: Cách điện giữa các thiết bị (trench isolation, field oxide)

## Cấu Trúc Vô Định Hình (Amorphous SiO₂)

### Cấu Trúc Nguyên Tử

**SiO₂ vô định hình** không có cấu trúc tinh thể mà thay vào đó có **cấu trúc mạng ngẫu nhiên 3D (random 3D network)**.

**Đơn Vị Cơ Bản**: **Tứ diện (SiO₄)⁴⁻**
- Si⁴⁺ ở tâm
- 4 nguyên tử O²⁻ ở 4 đỉnh
- **Liên kết Si-O**: Cọng (covalent bonds)
- Khoảng cách Si-O: ~1.6 Ångström

### Cấu Trúc Mạng

- Các tứ diện **(SiO₄)⁴⁻** **liên kết với nhau** thông qua **cầu oxy (O bridge)**
- Mỗi nguyên tử O được **chia sẻ** bởi **2 nguyên tử Si**
- Công thức cơ bản: ≡**Si-O-Si**≡ (silanoxane bond)

**Ý Nghĩa**:
- Cấu trúc **vô định hình** → không có ranh giới tinh thể → **không có chuyển vị (dislocation)**
- Lớp SiO₂ rất **bền cơ học** + **bền hóa học** → lý tưởng làm cách điện

### Tính Chất Điện

- **Điện trường breakdown**: ~10⁶ V/cm (rất cao!)
- **Permittivity (κ)**: ~3.9 (cao hơn vacuum)
- **Band gap**: ~8-9 eV (rất lớn, cách điện tốt)
- **Leakage current**: Cực thấp ở điện áp thường

## Loại Tạp Chất Trong Oxide

### 1. Network Forming (NWF) – Tạp Chất Hình Thành Mạng

**Định Nghĩa**: Những cation có **sức mạnh trường (CFS – Cation Field Strength) cao** → có khả năng **tạo liên kết cương với Oxygen** → **hòa nhập vào mạng SiO₂**.

**Công Thức CFS**: 
$$\text{CFS} = \frac{2z}{a^2}$$

Trong đó:
- **z**: Valence (độ hóa trị) của cation
- **a**: Khoảng cách cation-oxygen (Å)

**Ví Dụ NWF trong SiO₂**:
- **P⁵⁺ (Phosphorus)**: Tạo liên kết mạnh, hòa nhập vào Si-O network
- **B³⁺ (Boron)**: Tương tự
- **As³⁺**: Ít hơn

**Ảnh Hưởng**:
- NWF ngồi yên ở SiO₂ → **không di chuyển** (immobile)
- Không tạo leakage → **tốt** cho cách điện
- Nhưng **thay đổi tính chất oxide** (refractive index, dielectric constant)

### 2. Network Modifying (NWM) – Tạp Chất Sửa Đổi Mạng

**Định Nghĩa**: Cation với **CFS thấp** → **không hòa nhập mạng** → chỉ ngồi ở vị trí **xen kẽ (interstitial)** giữa các Si-O bonds → **yếu hơn NWF**.

**Ví Dụ NWM**:
- **Na⁺ (Sodium)**: CFS rất thấp, di động cao
- **K⁺ (Potassium)**: Tương tự
- **Li⁺ (Lithium)**: Rất động

**Ảnh Hưởng**:
- NWM **di chuyển dễ dàng** trong SiO₂ (diffusion coefficient cao)
- Tạo **leakage current** → **xấu**
- Nguyên nhân chính gây **instability** trong MOSFET

## Hệ Số Khuếch Tán Trong SiO₂

### So Sánh Si vs SiO₂

**Khuếch tán trong SiO₂ THẤP HƠN Si 2-3 bậc độ lớn**:

| Tạp Chất | D trong Si (cm²/s) | D trong SiO₂ (cm²/s) | Tỷ Lệ |
|---|---|---|---|
| **Boron (B)** | 10⁻¹² ~ 10⁻¹¹ | 10⁻¹⁵ ~ 10⁻¹⁴ | 100-1000× chậm hơn |
| **Phosphorus (P)** | 10⁻¹³ ~ 10⁻¹² | 10⁻¹⁶ ~ 10⁻¹⁵ | 100-1000× chậm hơn |
| **Na⁺** | (không áp dụng) | ~10⁻¹² | Nhanh trong oxide! |

### Công Thức Arrhenius

Hệ số khuếch tán trong SiO₂:

$$D = D_0 \exp\left(-\frac{Q}{k_B T}\right)$$

Trong đó:
- **D₀**: Pre-exponential factor
- **Q**: Activation energy (eV)
- **kB**: Boltzmann constant (8.617×10⁻⁵ eV/K)
- **T**: Nhiệt độ tuyệt đối (K)

**Ví dụ Boron trong SiO₂ ở 1000°C**:
$$D \approx 10^{-13} - 10^{-14} \text{ cm}^2/\text{s}$$

### Công Thức Fick (Diffusion)

**Fick's First Law** (steady-state):
$$J = -D \frac{dC}{dx}$$

**Fick's Second Law** (time-dependent):
$$\frac{\partial C}{\partial t} = D \frac{\partial^2 C}{\partial x^2}$$

**Giải Pháp (Error Function Solution)**:
$$C(x,t) = C_0 \cdot \text{erfc}\left(\frac{x}{2\sqrt{Dt}}\right)$$

Trong đó:
- **C(x,t)**: Nồng độ tại vị trí x, thời gian t
- **erfc**: Complementary error function

**Ý Nghĩa Thực Tế**: Tạp chất **khuếch tán từ từ** qua lớp SiO₂ → SiO₂ **chắn tạp chất tốt**.

## Ứng Dụng Thực Tế

### Lớp Chắn Tạp Chất (Barrier to Diffusion)

Trong **Ion Implantation**:
- Dopant được cấy vào Si
- Sau đó nung nóng (annealing) để kích hoạt
- Lớp SiO₂ phủ **ngăn dopant từ đế khuếch tán qua**

### Isolation (Cách Điện Thiết Bị)

- **Trench isolation (STI)**: Điền SiO₂ vào rãnh → cách điện thiết bị
- SiO₂ không dẫn → **leakage = 0**

### Gate Oxide Thickness

- **Thick oxide** (>1 μm): Field oxide (tắt thiết bị ở vùng không dùng)
- **Thin oxide** (~2-10 nm): Gate oxide (kiểm soát kênh)

Độ dày → khuếch tán/ion implantation **xuyên qua được hay không**.

## Vấn Đề Thực Tế

### Na⁺ Contamination (Sodium)

- Na⁺ khuếch tán **nhanh** trong SiO₂ (vì CFS thấp)
- Dù vào được lớp SiO₂ mỏng → tích điện ở Si/SiO₂ interface
- Gây **threshold voltage shift (Vth thay đổi)** → **MOSFET instability**

**Giải Pháp**: Kiểm soát Na⁺ ≤ 10¹¹ atom/cm³ bằng RCA SC2

### Boron Penetration (Thâm Nhập Boron)

- Boron từ p-type substrate khuếch tán **chậm** qua gate oxide
- Nhưng ở nhiệt độ cao (>1000°C) + thời gian dài → **vẫn xuyên qua**
- Gây **undesired doping** trong channel n-type → leakage ↑

**Giải Pháp**: Lớp gate oxide **đủ dày** (>5 nm) để chặn.

## Cấu Trúc Si/SiO₂ Interface

Giao diện Si-SiO₂ rất **quan trọng**:
- Không hoàn toàn mịn → có **defect states (dangling bonds)**
- Những defect này tạo **trapping center** → ảnh hưởng tới MOSFET performance
- **Interface state density (Dit)**: Chuẩn hiện đại < 10¹⁰ cm⁻² eV⁻¹

## Kết Luận

**SiO₂ là "vàng" của bán dẫn**:
- Cách điện tốt (high breakdown field, low leakage)
- Cấu trúc mạng mạnh (high mechanical strength)
- Chắn tạp chất tốt (low diffusion)
- Giao diện Si/SiO₂ lý tưởng (high quality interface)

Hiểu rõ **network structure, NWF/NWM, diffusion coefficient** là chìa khóa để **tối ưu hóa device performance** và **kiểm soát Vth stability** trong MOSFET hiện đại.
