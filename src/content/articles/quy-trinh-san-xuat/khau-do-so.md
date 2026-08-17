---
title: Số Khẩu Độ – Numerical Aperture (NA)
sourceUrl: https://semi-journal.jp/basics/process/numerical-aperture.html
category: quy-trinh-san-xuat
order: 11
flagship: false
---

## Định Nghĩa

Số khẩu độ (NA – Numerical Aperture, 開口数) là một **chỉ số quang học** xác định **khả năng tập trung/phân tán ánh sáng** của hệ thống quang học (thấu kính). Đó là một trong những **tiêu chí cốt lõi** quyết định độ phân giải của máy phơi sáng (lithography scanner/stepper).

**Công Thức**:
```
NA = n × sin(θ)
```

**Trong đó**:
- **n**: Chiết suất của môi trường giữa thấu kính và wafer.
  - Không khí: n ≈ 1.0.
  - Nước cất (immersion): n ≈ 1.44.
  - Silica: n ≈ 1.47.
- **θ**: Góc tối đa (half-angle) của cone của tia sáng được thấu kính thu nhận từ vật (object).
  - Thấu kính tốt có θ ≈ 60°, sin(60°) ≈ 0.866.

**Ví Dụ Tính Toán**:
- **Không khí**: NA = 1.0 × sin(60°) ≈ 0.866 → NAmax ≈ 0.85-0.95 (thực tế).
- **Immersion (nước)**: NA = 1.44 × sin(60°) ≈ 1.246 → NAmax ≈ 1.2-1.35 (thực tế).

## Ảnh Hưởng của NA – Hai Tác Dụng Chính

### 1. Khả Năng Tập Trung Ánh Sáng (Light-Gathering Power)

**Hiểu đơn giản**:
- NA **cao** → thấu kính có khả năng thu nhận ánh sáng từ **góc rộng** → **sáng hơn, nhạy cảm hơn**.
- NA **thấp** → thấu kính chỉ thu nhận ánh sáng từ **góc hẹp** → **tối hơn, nhạy cảm kém**.

**Ứng dụng photolithography**:
- NA cao → tín hiệu phơi sáng mạnh → photoresist nhạy cảm hơn → dễ phơi sáng → chi phí exposure thấp.

### 2. Độ Phân Giải – Rayleigh Criterion (Độ Nhỏ của Vết Sáng)

**Công Thức Rayleigh**:
```
Spot diameter (φ) = 1.22 × λ / NA
```

hoặc công thức độ phân giải (resolution) chuẩn:
```
R = k₁ × λ / NA
```

**Ý Nghĩa**:
- NA **cao** → mẫu số lớn → R **nhỏ** → độ phân giải **tốt** → có thể tạo mạch **nhỏ**.
- NA **thấp** → mẫu số nhỏ → R **lớn** → độ phân giải **kém** → chỉ tạo mạch **lớn**.

**Ví Dụ Tính Toán** (với ArF 193nm, k₁=0.3):
- **Không khí, NA=0.75**: R = 0.3 × 193 / 0.75 ≈ **77 nm** → tạo mạch 77nm trở lên.
- **Immersion, NA=1.3**: R = 0.3 × 193 / 1.3 ≈ **45 nm** → tạo mạch 45nm trở lên.
- **EUV 13.5nm, NA=0.33**: R = 0.3 × 13.5 / 0.33 ≈ **12 nm** → tạo mạch 12nm trở lên.

## Depth-of-Focus (DOF) – Mối Đánh Đổi với NA

**Công Thức DOF**:
```
DOF ≈ λ / (2 × NA²)
```

**Hiểu Đơn Giản**:
- NA **cao** → DOF **nhỏ** (vùng tiêu điểm **hẹp**) → khó căn chỉnh, yêu cầu bề mặt wafer **phẳng**.
- NA **thấp** → DOF **lớn** (vùng tiêu điểm **rộng**) → dễ căn chỉnh, nhưng độ phân giải kém.

**Ví Dụ**:
- **ArF, NA=0.75**: DOF ≈ 193 / (2 × 0.75²) ≈ **215 nm**.
- **ArF immersion, NA=1.35**: DOF ≈ 193 / (2 × 1.35²) ≈ **53 nm**.
- **EUV, NA=0.33**: DOF ≈ 13.5 / (2 × 0.33²) ≈ **62 nm**.

**Kỳ Vọng**: Immersion tăng NA ~1.8× → độ phân giải cải thiện ~1.8×, nhưng DOF giảm ~3.2×.

## Sự Thay Đổi NA Theo Thế Hệ Công Nghệ

| Node (nm) | Wavelength | Công Nghệ | NA Typical | Độ Phân Giải |
|-----------|-----------|---------|-----------|------------|
| **180-90** | ArF 193nm | Khô (dry) | ~0.75 | ~80nm |
| **65-45** | ArF 193nm | Immersion | ~1.2 | ~45nm |
| **32-28** | ArF 193nm | Immersion | ~1.3 | ~30nm |
| **22-16** | ArF 193nm | Immersion + Multi-patterning | ~1.35 | ~20nm |
| **14-7** | ArF 193nm | Immersion + Multi-patterning | ~1.35 | ~15-20nm |
| **5-3** | EUV 13.5nm | EUV | ~0.33 | ~10-15nm |

## Giới Hạn NA và Diffraction Limit

**Giới Hạn Tự Nhiên**:
- **Không khí**: NA ≤ 1.0 (sin(90°) = 1).
- **Immersion nước**: NA ≤ 1.44 (n nước).
- **Immersion silica**: NA ≤ 1.47 (n silica).

**Thực Tế**:
- NA không thể đạt giới hạn lý thuyết vì các hạn chế kỹ thuật (aberration, không thể tập trung hoàn hảo).
- Máy ArF tốt nhất đạt NA ≈ 1.35.
- Máy EUV đạt NA ≈ 0.33 (giới hạn kỹ thuật optical, vì tất cả phần tử phải là gương, không có lens).

## Immersion Lithography – Tận Dụng NA

**Kỹ Thuật Immersion**:
- **Bình thường (khô)**: NA = n_air × sin(θ) = 1.0 × sin(60°) ≈ 0.87.
- **Immersion (nước)**: NA = n_water × sin(θ) = 1.44 × sin(60°) ≈ 1.25 → tăng **~1.44×**.

**Lợi Ích**:
- Độ phân giải cải thiện **~1.44×** mà không cần wavelength ngắn.
- Không cần thay thế toàn bộ máy (chi phí), chỉ thêm kỹ thuật immersion.

**Chi Phí Hiệu Quả**: Immersion tốt hơn EUV về chi phí + throughput, nhưng EUV có độ phân giải tốt hơn.

## Các Nhân Tố Ảnh Hưởng NA Trong Thực Tế

1. **Aberration (Sai Biệt Quang Học)**: Sai biệt tạo sai lệch từ công thức lý thuyết.
2. **Thấu Kính Chất Lượng**: Thấu kính xấu không thể đạt NA cao.
3. **Xử Lý Mặt Thấu Kính**: Anti-reflection coating cải thiện NA hiệu dụng.
4. **Khoảng Cách Thấu Kính-Wafer**: Phải tối ưu hóa để tối đa hóa NA.

## Tầm Quan Trọng

NA quyết định:
- **Độ phân giải**: Trực tiếp ảnh hưởng kích thước tối thiểu mạch có thể tạo.
- **Chi phí thiết bị**: Thấu kính NA cao rất đắt.
- **Chi phí phơi sáng**: DOF hẹp → yêu cầu wafer phẳng → chi phí cao.
- **Năng suất (Throughput)**: DOF hẹp → thời gian alignment lâu → sản lượng thấp.
