---
title: Oxy Hóa Nhiệt Silicon Và Mô Hình Deal-Grove (酸化)
sourceUrl: https://semi-journal.jp/basics/si-chem/deal-grove.html
category: khoa-hoc-silicon
order: 12
flagship: false
---

## Phản Ứng Oxy Hóa

### Hai Phương Thức Chính

Khi Silicon tiếp xúc với O₂ hoặc H₂O ở nhiệt độ cao (900-1200°C), nó **tự động oxy hóa** thành SiO₂:

#### 1. Oxy Hóa Khô (Dry Oxidation)
$$\text{Si} + \text{O}_2 \xrightarrow{900-1200°C} \text{SiO}_2$$

- Dùng khí O₂ sạch (hoặc O₂ pha loãng với N₂)
- Tốc độ **chậm**
- Chất lượng oxide **tốt, ít khuyết tật**

#### 2. Oxy Hóa Ướt (Wet Oxidation)
$$\text{Si} + 2\text{H}_2\text{O} \xrightarrow{900-1200°C} \text{SiO}_2 + 2\text{H}_2$$

- Dùng hơi nước (H₂O vapor)
- Tốc độ **nhanh** (3-10 lần nhanh hơn dry)
- Lợi ích: Hiệu quả cao, nhưng oxide có **nhiều khuyết tật hơn**

#### 3. Oxy Hóa Pyrogenic (Combustion)
$$2\text{H}_2 + \text{O}_2 \xrightarrow{\text{reaction}} 2\text{H}_2\text{O}$$

(Tự tạo hơi nước từ đốt H₂ + O₂)

- Tương tự wet oxidation
- Ưu điểm: Tạo môi trường oxy hóa rất mạnh

#### 4. Oxy Hóa Hơi Nước (Steam Oxidation)
$$\text{Si} + 2\text{H}_2\text{O} \rightarrow \text{SiO}_2 + 2\text{H}_2$$

- Tương tự wet nhưng dùng **hơi nước sạch (steam)**
- Kiểm soát tốt hơn

### Sự Thay Đổi Thể Tích

**Rất quan trọng**: Khi Si oxy hóa → SiO₂:

$$\text{Thể tích SiO}_2 \approx 2.25 \times \text{Thể tích Si được tiêu thụ}$$

**Ảnh Hưởng**:
- Si bị **tiêu thụ** (bị oxy hóa) → **giảm kích thước**
- SiO₂ mọc lên từ Si → **thể tích tăng**
- **Ứng suất** (stress) hình thành:
  - **Ứng suất nén** (compressive) trong SiO₂ (vì không có chỗ thoải)
  - **Ứng suất kéo** (tensile) trong Si (bị "kéo ra")

**Công Thức**: Nếu tạo oxide dày x:
- Si tiêu thụ: x/2.25 ≈ **0.44x**
- SiO₂ mọc tới độ sâu: **0.56x** vào Si

Ví dụ: Để tạo oxide **1 μm**, Si được **tiêu thụ 0.44 μm**.

## Mô Hình Deal-Grove (Deal-Grove Model)

### Lịch Sử

Mô hình được đề xuất bởi **B.E. Deal** và **A.S. Grove** năm **1965** – vẫn được dùng phổ biến ngày nay để **dự đoán tốc độ oxy hóa**.

### Nguyên Tắc Cơ Bản

Oxy hóa Silicon gồm **3 bước**:

1. **Diffusion**: Oxy từ không khí → khuếch tán qua lớp oxide (chậm)
2. **Reaction**: Oxy tương tác với Si tại giao diện (reaction-limited)
3. **Product Growth**: SiO₂ tạo thành, mọc lên

**Bước chậm nhất** là **diffusion** qua lớp oxide → điều này **kiểm soát tốc độ tổng**.

### Công Thức Deal-Grove

Độ dày oxide X(t) theo thời gian t được mô tả bởi:

$$X^2 + AX = B(t + \tau)$$

Trong đó:
- **X**: Độ dày oxide (μm)
- **t**: Thời gian oxy hóa (giờ)
- **A, B, τ**: Các hệ số phụ thuộc vào:
  - Loại oxy hóa (dry/wet)
  - Nhiệt độ
  - Áp suất oxy

### Hai Chế độ Tăng Trưởng

#### Vùng Tuyến Tính (Linear Region, Vùng Mỏng X << B/2A)

$$X \approx \frac{B}{A}(t + \tau)$$

- Tốc độ **tỷ lệ thuận** với thời gian
- Ứng dụng: **Các oxide mỏng** (gate oxide, <100 nm)

#### Vùng Parabol (Parabolic Region, Vùng Dày X >> B/2A)

$$X^2 \approx B(t + \tau)$$

- Tốc độ **tỷ lệ với √t**
- **Chậm dần** theo thời gian (diffusion bị kìm hãm)
- Ứng dụng: **Field oxide, thick oxide** (>1 μm)

### Ý Nghĩa Tham Số

**Hệ Số B** (Parabolic Rate Constant):
$$B = \frac{2D C_\infty}{N_s}$$

- **D**: Hệ số khuếch tán oxy trong oxide
- **C∞**: Nồng độ oxy bão hòa
- **Ns**: Nồng độ vị trí SiO₂

**Hệ Số A** (Linear Rate Constant):
$$A = \frac{2k}{C_\infty}$$

- **k**: Hằng số tốc độ phản ứng

**Thời Gian Ban Đầu τ**:
- Ứng dụng cho **"initial oxide"** (oxide tự nhiên hoặc từ bước oxy hóa trước)
- τ = X₀²/(B) + X₀A/B (tính từ "equivalent time")

### Bảng Hệ Số A, B (Ví Dụ Si ở 1000°C)

| Loại | A (μm) | B (μm²/h) | Kiểm Soát |
|---|---|---|---|
| **Dry O₂** | 0.05 | 0.3 | Reaction-limited (chậm) |
| **Wet H₂O** | 0.1 | 3-5 | Diffusion-limited (nhanh) |

**Nhận Xét**: B_wet ≈ 10× B_dry → wet oxy hóa **nhanh hơn 10 lần**!

### Ví Dụ Tính Toán

**Tính độ dày oxide sau 2 giờ oxy hóa ở 1000°C (Dry O₂, không có initial oxide)**

Cho: A = 0.05 μm, B = 0.3 μm²/h, τ = 0

$$X^2 + 0.05X = 0.3 \times (2 + 0)$$
$$X^2 + 0.05X = 0.6$$

Giải phương trình bậc 2:
$$X = \frac{-0.05 + \sqrt{0.0025 + 2.4}}{2} \approx \frac{-0.05 + 1.55}{2} \approx 0.75 \text{ μm}$$

**Kết quả**: Oxide dày **~0.75 μm** sau 2 giờ oxy hóa khô ở 1000°C.

### Phụ Thuộc Vào Nhiệt Độ

**Công Thức Arrhenius**:
$$B, A \propto \exp\left(-\frac{Q}{kT}\right)$$

- **Q**: Năng lượng kích hoạt
- **T**: Nhiệt độ tuyệt đối

**Ví dụ**: Tăng nhiệt độ từ 900°C → 1000°C (~10% tăng tuyệt đối):
- Tốc độ oxy hóa **tăng 2-3 lần**

## Ứng Dụng Thực Tế

### Gate Oxide (Mỏng, ~2-10 nm)

- Dùng **dry oxidation** (O₂ sạch)
- Chất lượng cao, ít khuyết tật
- Thời gian ngắn (phút-vài chục phút)
- Tốc độ **tuyến tính** (linear regime)

### Field Oxide (Dày, >100 nm-1 μm)

- Dùng **wet oxidation** (H₂O vapor)
- Nhanh hơn, tiết kiệm thời gian
- Chất lượng kém hơn nhưng đủ dùng
- Tốc độ **parabol** (parabolic regime)

### Kiểm Soát Độ Dày

Deal-Grove giúp **dự đoán chính xác**:
- Để tạo oxide 1 μm: cần bao lâu?
- Sau oxy hóa 2 giờ, oxide dày bao nhiêu?
- Điều chỉnh nhiệt độ/loại oxy để đạt mục tiêu

## Vấn Đề Thực Tế

### Ứng Suất (Stress)

- Oxide **nén** (compressive) → có thể bị nứt nếu dày quá
- Si **kéo** (tensile) → ảnh hưởng tới bandgap, mobility
- **Giải pháp**: Dùng **polysilicon** phủ trên oxide để hấp thụ ứng suất

### Khuyết Tật Giao Diện

- Wet oxidation tạo **nhiều dangling bonds** hơn dry
- Sau oxy hóa cần **annealing** để giảm defect

### Oxy Hóa Không Đều

- Si surface không hoàn toàn phẳng → oxy hóa không đều
- Các vùng cao oxy hóa **nhanh hơn** (curvature effect)

## Kết Luận

**Deal-Grove model** là **công cụ tiêu chuẩn** để:
- **Dự đoán tốc độ oxy hóa** (linear + parabolic)
- **Kiểm soát độ dày oxide** chính xác
- **Lựa chọn loại oxy hóa** (dry/wet) phù hợp

Hiểu rõ mô hình này giúp **tối ưu hóa quy trình oxy hóa** và **đảm bảo chất lượng oxide** trong sản xuất IC hiện đại.
