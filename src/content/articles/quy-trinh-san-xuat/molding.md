---
title: Molding – Đúc Khuôn (Chip Encapsulation)
sourceUrl: https://semi-journal.jp/basics/process/molding.html
category: quy-trinh-san-xuat
order: 21
flagship: false
---

## Định Nghĩa

Molding (モールディング) hay encapsulation là quá trình **bao niêm chip bằng nhựa epoxy (resin)** sau khi wire bonding xong. Mục đích bảo vệ chip khỏi:
- **Tác động cơ học** (va chạm, rơi).
- **Độ ẩm** (nước → corrosion).
- **Ô nhiễm** (bụi, khí độc).
- **Oxy hóa** (Au, Cu dây oxidize).

## Hai Phương Pháp Chính

### 1. Hermetic Sealing (Kín Chặt Cách Điện)

**Phương Pháp**: Dùng **kính (glass) hoặc gốm (ceramic)** phủ kín hoàn toàn → chip không tiếp xúc môi trường.

**Ưu Điểm**:
- **Độ tin cậy cao**: Chip hoàn toàn bảo vệ.
- **Tuổi thọ cao**: Có thể dùng >20 năm.

**Nhược Điểm**:
- **Rất đắt**: Chi phí gấp 10× non-hermetic.
- **Hiếm dùng**: Chỉ cho quân sự, aerospace, reliability-critical.

### 2. Non-Hermetic Sealing (Kín Một Phần) – Chủ Lực

**Phương Pháp**: Dùng **nhựa epoxy** (resin) bao phủ → chip vẫn tiếp xúc oxid khí nhưng giảm.

**Ứng Dụng**: >99% sản phẩm (consumer electronics, IoT, automotive...).

## Quy Trình Molding Chi Tiết

### Chuẩn Bị

1. **Lead frame + chip + wire bonds** được xếp vào **mold cavity** (buồng khuôn).
2. **Mold closure**: Nắp khuôn đóng chặt (giữ chip + lead frame).

### Transfer Molding (Phương Pháp Tiêu Chuẩn – 90% Dùng)

**Quy Trình**:

**Bước 1 - Nước Nóng Epoxy**:
- Epoxy powder (hoặc pellet) được nung nóng tới ~150-200°C → trở nên lỏng.

**Bước 2 - Phun Epoxy**:
- Epoxy nóng được **phun (inject)** vào mold cavity nhờ **plunger (búa phun)** đẩy.
- **Áp suất**: 80-150 MPa.
- **Thời gian phun**: 30-60 giây.

**Bước 3 - Đông Cứng (Cure)**:
- Epoxy bắt đầu **crosslink (liên kết ngang)** ở nhiệt độ cao.
- **Nung tiếp**: 150-200°C, 3-5 phút → hoàn toàn cứng.
- Cấu trúc mạng polymer cứng.

**Bước 4 - Tách Khuôn (Demolding)**:
- Khuôn lạnh xuống → epoxy cứng.
- Mở khuôn, lấy package ra.

### Compression Molding (Phương Pháp Khác – Ít Dùng)

**Khác Biệt**: Epoxy đã sẵn trong cavity (preform) → ấn xuống (compression) thay vì phun (injection).

**Ưu Điểm**: Tạo ít stress trên wire bond (epoxy flow chậm) → wire ít bị damage.

**Nhược Điểm**: Tốc độ chậm hơn transfer molding.

## Vật Liệu Epoxy

### Thành Phần Chính

1. **Epoxy Resin**: Bonding agent, tạo mạng polymer.
2. **Hardener (Curing Agent)**: Trigger crosslinking.
3. **Filler**: SiO₂ hạt nhỏ (~70% weight) để:
   - Tăng độ cứng (hardness).
   - Giảm co (shrinkage) → giảm stress.
   - Giảm CTE (hệ số giãn nở nhiệt) → phù hợp chip + lead frame.
4. **Flame Retardant**: Chất chống cháy (thường Br compound).
5. **Pigment**: Màu (thường nâu, đỏ).
6. **Catalyst**: Tăng tốc độ curing.

### Loại Epoxy Tiêu Chuẩn

- **EMC (Epoxy Molding Compound)**: Phổ biến.
- **Green Molding Compound**: Eco-friendly (thay thế cổ điển).

## Vấn Đề & Khắc Phục

### Void (Bóng Khí Bẫy)

**Vấn đề**: Khí bẫy trong epoxy → điểm yếu → cracks → hydrolysis.

**Giải Pháp**:
- Vacuum pre-heat epoxy trước phun.
- Tối ưu pressure/temperature.

### Wire Sweep / Loop Collapse

**Vấn Đề**: Wire bond bị áp lực epoxy → lộn → đứt mạch.

**Giải Pháp**: Tối ưu pressure, dùng compression molding.

### Delamination (Bong Tách)

**Vấn Đề**: Epoxy bong tách khỏi chip/lead frame → device lỏng.

**Giải Pháp**: Surface treatment (silanization), tối ưu adhesion.

### Moisture Absorption (Hấp Thụ Ẩm)

**Vấn Đề**: Epoxy hấp thụ độ ẩm →膨胀 (swell) → stress → corrosion dây.

**Giải Pháp**: Dùng epoxy low moisture absorption, hermetic sealing.

## Sau Molding

### Trim & Form

- Cắt thừa lead frame.
- Uốn lead thành hình dạng chuẩn (gull-wing, J-lead).

### Marking

- In mã sản phẩm, date code lên package.

### Final Test & Inspection

- Kiểm tra kích thước, hình dạng.
- Electrical test cuối cùng.

## Tầm Quan Trọng

Molding quyết định:
- **Reliability**: Moist ingress → corrosion → device fail.
- **Packaging Quality**: Delamination → lỏng → vibration → crack.
- **Cost**: Molding chi phí vừa, nhưng epoxy + khuôn đắt.
- **Lead-Free Compliance**: Epoxy phải phù hợp Pb-free solder (temperature).
