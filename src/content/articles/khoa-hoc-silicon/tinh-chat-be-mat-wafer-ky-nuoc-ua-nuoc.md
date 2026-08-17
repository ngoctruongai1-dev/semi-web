---
title: 'Tính Chất Bề Mặt Wafer: Thân Nước Và Kỵ Nước (ウェハー表面の特性)'
sourceUrl: https://semi-journal.jp/basics/si-chem/wafer-surface.html
category: khoa-hoc-silicon
order: 10
flagship: false
---

## Bề Mặt Silicon Tự Nhiên

### Lớp Oxide Tự Nhiên (Native Oxide)

Khi wafer silicon để phơi với không khí, nó **tự động bị oxy hóa**:

$$2\text{Si} + \text{O}_2 \rightarrow 2\text{SiO}_2$$

**Độ Dày**: 10-30 Ångström (1-3 nm) – rất mỏng, gần như "vô hình"

**Thành Phần Bề Mặt**:
- **Lớp SiO₂** (silicon dioxide) phía ngoài
- **Si** tinh khiết phía trong
- **Các nhóm hydroxyl** (-OH) ở giao diện

**Ảnh Hưởng**: Lớp oxide mỏng này ảnh hưởng lớn tới **tính chất duy ẩm (wetting property)** của bề mặt.

## Tính Chất Ẩm (Wettability)

### Định Nghĩa

**Tính Ẩm (Wettability, 濡れ性)** là khả năng **chất lỏng trải rộng trên bề mặt rắn** hay **kéo ra thành giọt**.

### Góc Tiếp Xúc (Contact Angle, θ)

**Góc tiếp xúc** là góc **giữa bề mặt lỏng** (meniscus) và **bề mặt rắn**, đo tại điểm tiếp xúc ba pha (rắn-lỏng-khí).

**Ký Hiệu**: **θ** (theta)

**Phân Loại**:
- **θ < 90°**: Bề mặt **thân nước (hydrophilic, 親水性)** – nước lây trải
- **θ > 90°**: Bề mặt **kỵ nước (hydrophobic, 疎水性)** – nước kéo thành giọt
- **θ ≈ 0°**: **Thân nước hoàn toàn** – nước trải rộng hoàn hảo
- **θ ≈ 180°**: **Kỵ nước hoàn toàn** – nước kéo thành viên

### Phương Trình Young (Young's Equation)

Góc tiếp xúc được xác định bởi **cân bằng lực tại giao diện**:

$$\gamma_{SG} - \gamma_{SL} = \gamma_{LG} \cos\theta$$

Hoặc viết lại:

$$\cos\theta = \frac{\gamma_{SG} - \gamma_{SL}}{\gamma_{LG}}$$

Trong đó:
- **γ_SG**: Sức căng bề mặt giữa rắn-khí (solid-gas interfacial tension)
- **γ_SL**: Sức căng bề mặt giữa rắn-lỏng (solid-liquid interfacial tension)
- **γ_LG**: Sức căng bề mặt giữa lỏng-khí (liquid-gas interfacial tension) – thường là nước
- **θ**: Góc tiếp xúc

**Ý Nghĩa**: 
- Nếu γ_SG > γ_SL → nước thích trải (θ nhỏ, thân nước)
- Nếu γ_SG < γ_SL → nước không thích trải (θ lớn, kỵ nước)

## Bề Mặt Silicon Thân Nước (SiO₂)

### Tính Chất

- **Bề mặt**: Phủ toàn bộ bởi **lớp SiO₂ + nhóm hydroxyl (-OH)**
- **Góc tiếp xúc**: **θ ≈ 0-30°** – rất thân nước
- **Độ ẩm**: Bề mặt **hấp thụ nước** từ không khí → tạo lớp nước hấp phụ (adsorbed water layer)

### Hóa Học Bề Mặt

$$\equiv\text{Si-OH} + \text{H}_2\text{O} \leftrightarrow \equiv\text{Si-O}^- + \text{H}_3\text{O}^+$$

Các nhóm Si-OH trên bề mặt **tương tác yếu** với nước → nước **wets (ẩm) tốt**.

### Ứng Dụng

- **Mask trong lithography**: SiO₂ (thân nước) giúp **resist phủ đều**
- **Lớp cách điện**: SiO₂ là vật liệu lý tưởng

## Bề Mặt Silicon Kỵ Nước (H-terminated)

### Cách Tạo

Khi wafer được **rửa HF** (axit hydrofluoric):

$$\text{SiO}_2 + 6\text{HF} \rightarrow \text{H}_2\text{SiF}_6 + 2\text{H}_2\text{O}$$

**Kết quả**: Lớp oxide bị **tẩy hết**, để lại **Silicon tinh khiết** có bề mặt **kết thúc bằng Hydrogen** (H-terminated).

### Tính Chất

- **Bề mặt**: Chủ yếu **Si-H** (silane), số ít **Si-F** (fluorine), **Si-OH**
- **Góc tiếp xúc**: **θ ≈ 100-120°** – kỵ nước
- **Độ ẩm**: Bề mặt **không hấp thụ nước** – khô tự nhiên

### Hóa Học Bề Mặt

$$\equiv\text{Si-H} + \text{H}_2\text{O} \text{ (không tương tác)}$$

Si-H **không thích** tương tác với nước → góc tiếp xúc lớn.

### Đặc Điểm Thực Tế

- **Thời gian bền**: H-terminated surface **chỉ bền ~5-30 phút** ở không khí
  - Oxy hóa từ từ: Si-H + O₂ → Si-OH, Si-O- (vài phút tới vài giờ)
  - Sau đó bề mặt **lại trở về thân nước**

- **Ứng Dụng**: Dùng ngay sau khi rửa HF cho các công đoạn yêu cầu bề mặt sạch (ví dụ: epitaxy, wafer bonding)

## Ảnh Hưởng Tới Công Nghiệp Bán Dẫn

### Epitaxy Silicon

- Bề mặt **phải thân nước** (H-O termination) để **nucleation tốt** khi CVD
- Si-H trên bề mặt làm **decompose SiHCl₃/SiH₄** dễ dàng

### Photolithography

- **Resist** (photoresist) là **polymer hữu cơ**, thích hợp trên bề mặt **kỵ nước** (tránh roll-up, wrinkling)
- Bề mặt SiO₂ (thân nước) **cần được xử lý bằng HMDS** (hexamethyldisilazane) để làm kỵ nước

### Wafer Bonding (Nối Hai Wafer)

- Hai wafer được **rửa kỹ lưỡng** → **bề mặt thân nước**
- Đặt hai bề mặt sát nhau → **hydrogen bonding** giúp nối tạm thời
- Nung nóng ở 400-500°C → **nối hóa học bền chắc**

### Moisture Absorption (Hấp Thụ Ẩm)

- Bề mặt thân nước **hấp thụ nước** từ không khí → tạo lớp nước mỏng
- Nước này có thể **gây điện hóa (corrosion)** các metal contact → leakage tăng
- **Cần kiểm soát độ ẩm** (dry-in principle)

## So Sánh SiO₂ vs H-terminated Si

| Tính Chất | SiO₂ (Thân Nước) | Si-H (Kỵ Nước) |
|---|---|---|
| **Góc Tiếp Xúc** | ~0-30° | ~100-120° |
| **Hấp Thụ Nước** | Cao | Thấp |
| **Bền** | Rất bền (vô thời hạn) | Chỉ vài phút-giờ |
| **Ứng Dụng** | Gate oxide, cách điện | Epitaxy, bonding |
| **Ưu Điểm** | Ổn định | Sạch, tinh khiết |

## Kiểm Soát Tính Chất Bề Mặt

### Contact Angle Measurement

Dùng **goniometer** để đo góc tiếp xúc **in-situ**:
- **Before HF**: θ ≈ 10-30° (thân nước)
- **After HF**: θ ≈ 100-120° (kỵ nước)
- **After 5 min air exposure**: θ → 30-50° (tái oxy hóa)
- **After 30 min**: θ → 10-30° (trở lại thân nước)

### Tầm Quan Trọng

Góc tiếp xúc là **chỉ số chất lượng** wafer:
- Nếu θ không ổn → **resist adhesion kém** → **lithography fail**
- Nếu θ quá lớn → **watermark** → **pattern resolution kém**

## Công Thức Tính Năng Lượng Bề Mặt

**Gibbs Free Energy of Surface**:

$$\gamma = \left(\frac{\partial G}{\partial A}\right)_{T,P}$$

- **γ**: Sức căng bề mặt (surface energy)
- **G**: Gibbs free energy
- **A**: Diện tích bề mặt

Sức căng cao → bề mặt "muốn" giảm diện tích → nước "không muốn" trải rộng (kỵ nước).

## Kết Luận

**Bề mặt wafer** là yếu tố **cơ bản** quyết định:
- **Chất lượng epitaxy** (kết tinh)
- **Chất lượng photolithography** (in pattern)
- **Độ bền wafer bonding** (nối silicon)

Hiểu rõ **Young's equation, contact angle, H-termination** là chìa khóa để **tối ưu hóa quy trình sản xuất** và **đạt yield cao** trong bán dẫn hiện đại.
