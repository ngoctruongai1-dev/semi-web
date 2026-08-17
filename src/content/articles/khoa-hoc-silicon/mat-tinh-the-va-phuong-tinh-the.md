---
title: Mặt Tinh Thể và Phương Tinh Thể Silicon (結晶面と結晶方位)
sourceUrl: https://semi-journal.jp/basics/si-chem/plane.html
category: khoa-hoc-silicon
order: 2
flagship: false
---

## Chỉ Số Miller (Miller Indices)

### Định Nghĩa

**Chỉ số Miller** (ミラー指数, Miller indices) là một **hệ ký hiệu chuẩn** dùng để mô tả các mặt phẳng và hướng trong tinh thể. Ký hiệu: **(h k l)** hoặc **{h k l}** (h, k, l là các số nguyên).

### Cách Tính

Để xác định chỉ số Miller của một mặt phẳng:

1. **Xác định giao điểm**: Tìm điểm mặt phẳng giao với các trục tinh thể (x, y, z) ở những vị trí (a, b, c)

2. **Lấy nghịch đảo**: Tính 1/a, 1/b, 1/c

3. **Quy đồng mẫu số**: Nhân với số hợp lý nhỏ nhất để được các số nguyên

**Ví dụ**:
- Mặt cắt tại (a, ∞, ∞) → chỉ số (100)
- Mặt cắt tại (a, a, ∞) → chỉ số (110)
- Mặt cắt tại (a, a, a) → chỉ số (111)

## Ba Mặt Tinh Thể Chính Của Silicon

### Mặt (100) – Most Common

| Đặc Tính | Chi Tiết |
|---|---|
| **Tên gọi** | (100) plane hay (100) surface |
| **Đặc điểm** | Mặt phẳng nhất, dễ tạo liên kết kép Si=Si |
| **Sử dụng** | **Phổ biến nhất trong sản xuất** – >95% wafer sử dụng (100) |
| **Động học** | Electron mobility ≈ 1350 cm²/(V·s), hole mobility ≈ 500 cm²/(V·s) |
| **Ứng dụng** | MOSFET truyền thống, bộ nhớ DRAM/Flash |

### Mặt (110)

| Đặc Tính | Chi Tiết |
|---|---|
| **Tên gọi** | (110) plane |
| **Đặc điểm** | Giàu đầu từ (dangling bonds), hỏa tính cao |
| **Động học** | Hole mobility cao hơn, electron mobility kém |
| **Ứng dụng** | Hiếm dùng trong IC hiện đại |
| **Lý do ít dùng** | Khó kiểm soát, tốc độ thiết bị không cao |

### Mặt (111)

| Đặc Tính | Chi Tiết |
|---|---|
| **Tên gọi** | (111) plane |
| **Đặc điểm** | Giàu silicon, ba liên kết cho mỗi nguyên tử |
| **Tính hóa học** | Bề mặt bền, ít đột phát tác động (reconstruction) |
| **Ứng dụng** | Epitaxy, một số cảm biến |
| **Ưu điểm** | Khuyết tật thấp hơn (100) trong một số trường hợp |

## Ảnh Hưởng Tới Tính Chất Thiết Bị

### Độ Linh Động (Mobility)

Độ linh động của electron và lỗ trống **phụ thuộc mạnh** vào hướng tinh thể:

**Ví dụ ở 300K (Silicon):**
- **Electron mobility (μe)**:
  - Mặt (100): 1350 cm²/(V·s)
  - Mặt (110): 900 cm²/(V·s)
  - Mặt (111): 600 cm²/(V·s)

- **Hole mobility (μh)**:
  - Mặt (100): 500 cm²/(V·s)
  - Mặt (110): 1000 cm²/(V·s) (cao hơn!)
  - Mặt (111): 300 cm²/(V·s)

**Ứng dụng Thực Tế**:
- NMOS (n-channel MOSFET) được thiết kế để sử dụng (100) vì μe cao
- Nếu muốn PMOS tốt, có thể sử dụng (110) nhưng chi phí sản xuất tăng

### Tốc Độ Etch (Mài Khắc)

Tốc độ etch bằng các dung dịch hóa học (ví dụ HF, KOH) **khác biệt đáng kể** tùy theo mặt:
- Mặt (100) etch nhanh
- Mặt (111) etch chậm → tạo ranh giới "tự nhiên"
- Ứng dụng: MEMS, tạo kết cấu 3D

### Khuyết Tật Tinh Thể

Các khuyết tật (void, dislocation, oxide precipitate) có hướng ưu tiên:
- (111) là mặt chia tự nhiên
- (100)/{100} là mặt có khuyết tật ít

## Cách Biểu Diễn Khác

### {h k l} vs (h k l)

- **(h k l)**: chỉ một mặt cụ thể
- **{h k l}**: chỉ tất cả các mặt tương đương (vì tính đối xứng), ví dụ:
  - {100} = (100), (010), (001) và các mặt đối xứng
  - {111} = (111), (1̄11), (11̄1), (111̄)... (8 mặt tổng cộng)

## Công Thức Tính Góc Giữa Hai Mặt

Góc θ giữa hai mặt (h₁ k₁ l₁) và (h₂ k₂ l₂) được tính bằng:

$$\cos \theta = \frac{h_1 h_2 + k_1 k_2 + l_1 l_2}{\sqrt{h_1^2 + k_1^2 + l_1^2} \sqrt{h_2^2 + k_2^2 + l_2^2}}$$

**Ví dụ**: Góc giữa (100) và (110) = 45°

## Ứng Dụng Trong Sản Xuất Wafer

### Chọn Mặt Wafer

Hầu hết wafer silicon cho sản xuất IC:
- **Mặt chính (Primary flat)**: (100)
- **Mặt phụ (Secondary flat)**: để chỉ loại doping (p-type hay n-type)

### Notch và Oriflat

- **Oriflat** (cũ): một mặt phẳng để chỉ hướng (100) vs (111)
- **Notch** (mới): một vừa hình bán nguyệt để chỉ hướng và loại doping
- Wafer 300mm hiện đại chỉ dùng Notch

## Kết Luận

Chỉ số Miller là **công cụ chuẩn** để mô tả hướng tinh thể Silicon. Ba mặt chính (100, 110, 111) có tính chất điện, cơ, hóa khác nhau. **Mặt (100) chiếm ưu thế** trong sản xuất hiện đại vì kết hợp các ưu điểm: dễ sản xuất, electron mobility tốt, thích hợp MOSFET. Hiểu rõ khái niệm này là cần thiết để nắm bắt các quy trình sản xuất tiên tiến.
