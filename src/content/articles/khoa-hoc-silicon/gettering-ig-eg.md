---
title: Gettering – Kỹ Thuật Bẫy Tạp Chất Kim Loại (ゲッタリング)
sourceUrl: https://semi-journal.jp/basics/si-chem/gettering.html
category: khoa-hoc-silicon
order: 17
flagship: false
---

## Định Nghĩa & Mục Đích

**Gettering (ゲッタリング)** là kỹ thuật **loại bỏ kim loại nặng (Fe, Cu, Ni...)** khỏi vùng hoạt động của thiết bị bán dẫn bằng cách:

1. **Tạo "điểm bẫy" (gettering sink)** tại vị trí **không sử dụng** (vùng đẳng sau)
2. **Khuếch tán kim loại** từ bề mặt + vùng hoạt động **tới điểm bẫy**
3. **Bắt giữ kim loại** tại sink → không ảnh hưởng thiết bị

**Mục Tiêu Cuối**: Kim loại **bị "giam" vào bẫy** → **cải thiện lifetime, giảm leakage** của IC.

## Ba Bước Của Quy Trình Gettering

### Bước 1: Giải Phóng Kim Loại (Liberation)

- Kim loại từ **bề mặt wafer, nhiễm bẩn từ thiết bị** → cần **kích hoạt**
- **Cơ chế**: Nung nóng ở 900-1000°C → kim loại **thoát khỏi chỗ bám** (desorption), trở nên **di động (mobile)**

### Bước 2: Khuếch Tán Tới Bẫy (Diffusion to Gettering Sink)

- Kim loại di chuyển từ vùng "bẩn" **đi dài khoảng cách** tới nơi **có bẫy**
- **Tốc độ**: Phụ thuộc **Diffusion Coefficient, Concentration Gradient, Temperature**
- **Khoảng cách**: ~1 mm trong vài giờ ở 900°C (kim loại khác nhau khác tốc độ)

### Bước 3: Bắt Giữ Tại Bẫy (Trapping at Gettering Sink)

- Kim loại tới bẫy → **kết hợp mạnh với khuyết tật, oxide precipitate**
- Trở thành **immobile (bất động)** → không thể khuếch tán ra được
- Được "mắc kẹt" vô vĩnh

## Hai Phương Pháp Gettering

### 1. External Gettering (EG) – Bẫy Bên Ngoài

**Nguyên Tắc**: Tạo **khuyết tật nhân tạo ở mặt sau wafer** để bẫy kim loại.

#### Phương Pháp EG

1. **Sandblasting (Giải Cát)**
   - Bắn cát/hạt lạnh ở **mặt sau wafer**
   - Tạo **ứng suất, khuyết tật** tại bề mặt
   - Kim loại khuếch tán tới bề mặt này → bẫy

2. **Phosphorus Diffusion**
   - Khuếch tán **P nồng độ rất cao** (10¹⁸-10¹⁹ cm⁻³) vào **lớp bề mặt sau**
   - P tạo **ứng suất compressive** + **khuyết tật nhiều**
   - Kim loại "thích" tích tụ ở vùng P doping cao

3. **CVD Deposition (Si₃N₄, Poly-Si)**
   - Phủ **lớp Si₃N₄ hoặc polysilicon** ở **mặt sau**
   - Lớp này tạo **ứng suất, defect** → bẫy kim loại

#### Ưu Điểm EG

- **Không ảnh hưởng thiết bị** (ở mặt sau, ngoài vùng hoạt động)
- **Hiệu quả cao** (kim loại bị bẫy tại bề mặt)
- **Chi phí tương đối thấp**

#### Nhược Điểm EG

- **Chỉ hiệu quả** nếu kim loại **khuếch tán xa tới mặt sau**
- **Kim loại bẩn sâu trong chip** → EG không đạt được

### 2. Intrinsic Gettering (IG) – Bẫy Nội Tại

**Nguyên Tắc**: Tận dụng **khuyết tật tự nhiên/được hình thành** trong khối wafer để bẫy kim loại.

#### Nguồn IG

1. **Oxygen Precipitate (CZ Silicon)**
   - CZ có oxy supersaturated (~10¹⁸ atom/cm³)
   - Khi nung ở 700-800°C → oxy **tích tụ** → **SiO₂ precipitate**
   - SiO₂ precipitate tạo **ứng suất, khuyết tật** → bẫy kim loại

2. **Thermal Processing**
   - Các công đoạn nung nóng trong IC sản xuất → tự động tạo defect
   - Ví dụ: **diffusion step, annealing** → hình thành khuyết tật tự động

#### Ưu Điểm IG

- **Tự động hình thành** → không cần thêm công đoạn
- **Hiệu quả cao** nếu có oxygen precipitate
- **Chi phí thấp**

#### Nhược Điểm IG

- **Chỉ dùng được cho CZ** (có oxy)
- **FZ không thể dùng IG** (quá ít oxy)
- **Không kiểm soát được** – phụ thuộc oxy concentration, annealing profile

## So Sánh IG vs EG

| Tiêu Chí | IG | EG |
|---|---|---|
| **Nguồn Bẫy** | Oxygen precipitate, khuyết tật tự nhiên | Sandblasting, P diffusion, CVD |
| **Chi Phí** | Thấp (tự động) | Vừa (thêm công đoạn) |
| **Hiệu Suất** | Vừa (phụ thuộc O) | Cao (kiểm soát tốt) |
| **Yêu Cầu Wafer** | CZ (có oxy) | Mọi loại |
| **Kiểm Soát** | Khó (phụ thuộc history) | Tốt (kiểm soát bẫy) |

## Ứng Dụng Thực Tế

### Trong IC Sản Xuất

1. **Diffusion Steps**: Kim loại từ **diffusion furnace, lò** → cần gettering
2. **Metallic Contamination**: Kim loại từ **dụng cụ, thiết bị** → cần gettering
3. **Process Induced Defects**: Các công đoạn etch, implant → tạo defect → IG active

### Chiến Lược Gettering

- **Dùng EG** nếu kim loại **bẩn nặng** (yêu cầu cao)
- **Dùng IG** nếu **CZ + chi phí cần tiết kiệm**
- **Hybrid** (IG + EG): Tối ưu nhất – vừa tận dụng IG tự động, vừa bổ sung EG

## Hiệu Quả Gettering

**Kiểm Soát**:
- Trước gettering: Kim loại nồng độ ~10¹² atom/cm³ (bẩn)
- Sau gettering: Kim loại nồng độ ~10⁹ atom/cm³ (sạch)
- **Hiệu suất loại bỏ**: ~99%

**Mục Tiêu**:
- **Lifetime tăng**: từ ~10 μs → ~100-1000 μs (IC logic, DRAM)
- **Leakage giảm**: dòng rò giảm 10-100 lần
- **Yield tăng**: lỗi từ kim loại gần như "0"

## Kết Luận

**Gettering là công cụ cực kỳ quan trọng** để kiểm soát kim loại trong IC. Kết hợp **EG + IG** là chiến lược tối ưu để đạt **wafer quality cao, yield cao** trong sản xuất bán dẫn hiện đại.
