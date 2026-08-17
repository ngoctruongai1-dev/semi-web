---
title: Liên Quang Immersion Lithography (Immersion Lithography)
sourceUrl: https://semi-journal.jp/basics/process/immersion.html
category: quy-trinh-san-xuat
order: 12
flagship: false
---

## Định Nghĩa

Liên quang immersion (浸液リソグラフィ – shinekinritho) là **kỹ thuật quang khắc đặt nước cất giữa thấu kính cuối cùng (final lens) và wafer** để tăng số khẩu độ (NA) hiệu dụng, từ đó cải thiện độ phân giải mà **không cần thay đổi wavelength hoặc thiết bị hoàn toàn**.

Được giới thiệu từ **2006** cho node 45nm, kỹ thuật này đã trở thành **chuẩn công nghệ** cho các node 65nm → 28nm (trước EUV).

## Nguyên Lý Vật Lý

### Công Thức Rayleigh Độ Phân Giải

```
Resolution (R) = k₁ × λ / NA
```

### Tính NA Trước và Sau Immersion

**Trước (Khô - Dry)**:
```
NA = n_air × sin(θ) = 1.0 × sin(60°) ≈ 0.87
```

**Sau (Immersion - Wet)**:
```
NA = n_water × sin(θ) = 1.44 × sin(60°) ≈ 1.25
```

**Lợi Ích Độ Phân Giải**:
- Cải thiện: R_immersion / R_dry = NA_dry / NA_immersion ≈ 0.87 / 1.25 ≈ **0.70** → độ phân giải **tốt hơn 1.44×**.
- **Ví dụ ArF (193nm, k₁=0.3)**:
  - Khô: R ≈ 0.3 × 193 / 0.87 ≈ 66 nm.
  - Immersion: R ≈ 0.3 × 193 / 1.25 ≈ 46 nm.
  - Cải thiện: 66 / 46 ≈ 1.43×.

### Depth-of-Focus (DOF) Cũng Cải Thiện

```
DOF_immersion = DOF_dry / (NA_dry / NA_immersion)² ≈ DOF_dry / 0.49 ≈ 2× DOF_dry
```

Hoặc:
```
DOF_immersion ≈ λ / (2 × NA²) 
```

**Ví dụ ArF**:
- Khô, NA=0.87: DOF ≈ 193 / (2 × 0.87²) ≈ 128 nm.
- Immersion, NA=1.25: DOF ≈ 193 / (2 × 1.25²) ≈ 62 nm.

**Hiểu Đơn Giản**: Mặc dù NA cao → DOF hẹp theo công thức, nhưng **nước làm cho hình ảnh sắc nét hơn**, nên DOF tuyệt đối vẫn rộng hơn nước khô ở cùng k₁.

## Quy Trình Immersion Lithography

### Bước Chuẩn Bị

1. **Phủ Resist**: Như bình thường (spin coating, pre-bake).
2. **Chế Độ Immersion**: Kiểm tra wafer có topography cao không (nếu cao → nước dễ thoát, tạo "bubbles").

### Bước Phơi Sáng với Nước

1. **Tạo Lớp Nước**: Nước cất được đưa vào chamber, tạo **"water layer"** mỏng (~200 μm) giữa thấu kính và wafer.
2. **Quét/Phơi Sáng**: Máy scanner quét mask qua wafer, ánh sáng ArF xuyên qua nước, chiếu lên resist.
3. **Duy Trì Nước**: Hệ thống pump liên tục cung cấp nước mới, loại bỏ nước cũ (có thể bị ô nhiễm), để giữ chất lượng nước.
4. **Xóa Nước**: Sau phơi sáng xong, nước được hút ra khỏi chamber, rửa wafer bằng nước cất.

### Bước Sau (Development + Etch)

- Như bình thường (development, post-bake, etch, ashing...).

## Chất Lỏng Dùng trong Immersion

### Nước Cất (Pure Water)

**Đặc Điểm**:
- **Chiết suất**: n ≈ 1.440 ở 23°C (thay đổi theo nhiệt độ, k ≈ -0.0002/°C).
- **Sạch**: Phải là **siêu sạch (Ultra-pure water)** → điện trở suất > 18 MΩ·cm.
- **Luôn dùng**: Phổ biến nhất, rẻ, không độc.

### Các Chất Lỏng Khác

**Silica (SiO₂ hòa tan trong nước)**:
- Chiết suất: n ≈ 1.47 (cao hơn nước → NA cao hơn).
- **Ít dùng**: Silica để lại dư lượng trên wafer, phải lau sạch kỹ.

**Polymer Lỏng**:
- Chiết suất có thể tùy chỉnh.
- **Ít dùng**: Độc tính, khó xử lý.

## Thách Thức Kỹ Thuật

### 1. Bubbles (Bong Bóng)

**Vấn Đề**: Bong bóng khí bẫy trong nước → ánh sáng không xuyên qua → pattern bị lỗi.

**Nguyên Nhân**:
- Topography wafer (valley hẹp) → nước dễ thoát → khí xâm nhập.
- Tốc độ quét quá nhanh → động lực học chất lỏng tạo bubbles.

**Giải Pháp**:
- **Surface coating**: Phủ lớp mỏng trên resist để giữ nước (immersion coating).
- **Tối ưu topography**: Làm phẳng hơn bằng CMP.
- **Giảm tốc độ quét**: Chậm lại để nước kịp theo.

### 2. Resist Leaching (Resist Thoát Ra)

**Vấn Đề**: Nước tan một ít resist → photoresist giảm lượng → resist mỏng không mong muốn.

**Nguyên Nhân**:
- Resist có thành phần khó tan nước (PAC) → trong nước lâu dần bị tan.
- Nước trong immersion không tuyệt đối sạch → có impurity.

**Giải Pháp**:
- **Immersion Coating**: Phủ lớp polymer mỏng (50-200nm) trên resist để bảo vệ.
  - Coating này tan trong nước chậm → che chắn resist chính.
  - Sau phơi sáng, coating tẩy bằng developer (cùng lúc tẩy resist).

### 3. Refractive Index Variability

**Vấn Đề**: Chiết suất nước phụ thuộc **nhiệt độ**: dn/dT ≈ -0.0002/°C.
- Thay đổi ±1°C → NA thay đổi → độ phân giải thay đổi → pattern sai lệch.

**Giải Pháp**:
- **Kiểm soát nhiệt độ chặt**: Giữ nước trong khoảng ±0.1°C bằng chill system.
- **Đệm/Buffer**: Cho một vùng "warm-up" nước trước phơi sáng chính.

### 4. Water Spot / Water Mark

**Vấn Đề**: Nước khô lại trên wafer → để lại vệt mineral → contamination.

**Giải Pháp**:
- **Sấy ngay**: Sau phơi sáng, spin-dry ngay để loại nước.
- **Dùng IPA drying**: Rửa IPA (isopropanol) rồi sấy → bay hơi nhanh hơn nước.

## Ứng Dụng và Xu Hướng

### Từ 45nm → 28nm: Immersion là Tiêu Chuẩn

**Các node dùng immersion**:
- **45nm** (2006): Lần đầu áp dụng.
- **32nm, 28nm**: Phổ biến rộng rãi.
- **22nm, 16nm**: Kết hợp immersion + multi-patterning (LELE, SADP).
- **14nm → 7nm**: Kết hợp immersion + multi-patterning + EUV (EUV bắt đầu thay thế).
- **5nm trở lại**: **Chủ yếu là EUV** (immersion + multi-patterning trở nên quá phức tạp/đắt).

### Tại Sao EUV Thay Thế?

- **Immersion + multi-patterning**: Phức tạp, throughput thấp, chi phí cao.
- **EUV đơn**: Đơn giản hơn (không cần multi-patterning), nhưng throughput hiện vẫn thấp.
- **Xu hướng**: Ngành chuyển dần từ ArF immersion sang EUV.

## So Sánh: Khô vs. Immersion vs. EUV

| Tiêu Chí | Khô (Dry) | Immersion | EUV |
|---------|-------|-----------|-----|
| **Wavelength** | 193nm | 193nm | 13.5nm |
| **NA** | ~0.75-0.93 | ~1.2-1.35 | ~0.33 |
| **Resolution** | ~77nm | ~45nm | ~13nm |
| **Throughput** | Cao | Vừa (−20%) | Thấp |
| **Chi phí thiết bị** | Rẻ | Vừa (+10-20%) | Cực đắt (+50-100%) |
| **Node áp dụng** | 90-65nm | 45-7nm | 5nm+ |
| **Độ phức tạp** | Thấp | Vừa | Cao |

## Tầm Quan Trọng

Immersion lithography:
- **Cân nhắc thay thế ArF khô**: Tăng NA → độ phân giải tốt hơn + DOF lớn hơn (mâu thuẫn giải quyết!).
- **Chi phí hiệu quả**: Thêm nước + coating tốn chi phí, nhưng vẫn rẻ hơn thay máy hoặc dùng EUV.
- **Cho phép node 5nm ~ 7nm tồn tại lâu**: Nếu không có immersion, phải chuyển EUV sớm hơn.
