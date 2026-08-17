---
title: Wire Bonding – Kết Nối Dây (Wire Bonding Connection)
sourceUrl: https://semi-journal.jp/basics/process/wire-bonding.html
category: quy-trinh-san-xuat
order: 20
flagship: false
---

## Định Nghĩa

Wire bonding (ワイヤボンディング) là quá trình **kết nối chip (die) với lead frame (khung chì) hoặc substrate bằng những sợi dây siêu mỏng**. Dây nối điện chip với chân package để truyền tín hiệu/power.

**Tốc Độ**: >20 bonds/giây (siêu nhanh), hoàn toàn tự động.

## Vật Liệu Dây

### Gold Wire (Dây Vàng) – Tiêu Chuẩn

**Đặc Tính**:
- **Đường kính**: 17-50 μm (typiically ~25 μm).
- **Độ dẫn**: Cực cao.
- **Độ linh hoạt**: Dễ uốn.
- **Độ tin cậy**: Tuyệt vời (không oxy hóa, không corrosion).
- **Giá**: Đắt (~$0.01-0.05/bond).

**Ứng Dụng**: Cao cấp (CPU, memory), reliability-critical.

### Copper Wire (Dây Đồng) – Xu Hướng Mới

**Đặc Tính**:
- **Giá**: Rẻ hơn vàng 100×.
- **Độ dẫn**: Tương tự vàng.
- **Nhược điểm**: Dễ oxy hóa → cần surface coating (Pd, Au thin layer).
- **Độ tin cậy**: Chưa bằng vàng, nhưng đủ cho nhiều ứng dụng.

**Xu Hướng**: Ngành chuyển sang Cu để **giảm chi phí packaging**.

### Silver Wire (Dây Bạc) – Ít Dùng

**Đặc Tính**: Giữa vàng và đồng.

## Hai Loại Wire Bonding

### 1. Ball Bonding (Kết Nối Hình Bóng)

**Quy Trình**:

**Bước 1 - Ball Formation**:
- Dây vàng được đẩy ra từ nozzle.
- **Electric spark (xung điện tử)** nung chảy đầu dây → tạo hình **bóng** (ball diameter ~60-100 μm).

**Bước 2 - First Bond (Đặt Chip)**:
- Dây quay xuống, **bóng ấn vào pad của chip** (thường ở **drain** hoặc **source** của transistor).
- **Nhiệt (heat) + Áp lực (pressure) + Ultrasonic vibration** → Au-Al intermetallic bond (liên kết nguyên tử).
- Nhiệt độ: 100-200°C (low-temp, chip không bị damage).

**Bước 3 - Wire Loop Formation**:
- Dây được kéo lên, tạo **vòng (loop)** để tránh va chạm với chip/package khác.
- Chiều cao loop: tuỳ chip size, ~0.5-2 mm.

**Bước 4 - Second Bond (Đặt Lead Frame)**:
- Dây quay xuống tiếp xúc **lead của package (lead frame)**.
- **Cắt dây** + ấn chặt → tạo **stitch bond** (liên kết tuyến tính).

**Ưu Điểm**:
- Bóng có diện tích tiếp xúc lớn → độ tin cậy cao.
- Tốc độ cực nhanh.
- **Tiêu chuẩn công nghiệp** (99% dùng ball bonding).

### 2. Wire Bonding (Kết Nối Trực Tiếp)

**Quy Trình**: Giống ball bonding, nhưng **không tạo bóng** → dây đầu được ấn trực tiếp vào pad chip.

**Ưu Điểm**: Ít dây dùng (vì không cần bóng).

**Nhược Điểm**: Diện tích tiếp xúc nhỏ → độ tin cậy kém.

**Ứng Dụng**: Hiếm, chỉ cost-sensitive applications.

## Các Thông Số Kỹ Thuật

| Thông Số | Típical Value | Ảnh Hưởng |
|---------|---------------|---------|
| **Ball Diameter** | 60-100 μm | Lớn → tiếp xúc tốt, nhưng khó cắt dây |
| **Loop Height** | 0.5-2 mm | Cao → loopback risk (dây cong lại), nhưng tránh collision |
| **Bond Force** | 50-200 grams | Mạnh → bond chắc, nhưng damage chip pad |
| **Ultrasonic Power** | 50-200 mW | Mạnh → bond tốt, nhưng vibration tạo defect |
| **Temperature** | 100-250°C | Cao → bond nhanh, nhưng damage chip |

## Vấn Đề & Khắc Phục

### Wire Pull-Off (Dây Bị Kéo Tụt)

**Vấn đề**: Dây bond không chắc → dây bị tugging → kéo tụt → ngắt circuit.

**Nguyên Nhân**: Áp lực/nhiệt/ultrasonic không đủ → bond yếu.

**Kiểm Tra**: Pull test (kéo dây bằng lực định lượng).

### Loop Resistance (Điện Trở Loop Quá Cao)

**Vấn Đề**: Dây chỉ ~25 μm đường kính → kháng điện cao → voltage drop lớn.

**Giải Pháp**: Dùng dây dày hơn (nhưng khó kết nối).

### Corrosion (Oxy Hóa)

**Vấn Đề**: Au dây đâm xuyên Al pad → tạo Au-Al intermetallic → lâu ngày → corrosion.

**Giải Pháp**: Hermetic sealing (kín chặt), passivation (bao phủ).

## Sau Wire Bonding

### Encapsulation (Đúc Khuôn)

Chip + dây được bao niêm bằng nhựa epoxy (molding) để bảo vệ.

### Reliability Testing

- **Pull test**: Kéo dây để kiểm tra bond strength.
- **Vibration test**: Rung gây stress → phát hiện bond yếu.
- **Thermal cycle**: Nóng/lạnh → ứng suất tích lũy → crack.

## Tầm Quan Trọng

Wire bonding quyết định:
- **Reliability**: Bond weak → device fail.
- **Performance**: Dây kháng điện → delay, voltage drop.
- **Cost**: Wire bonding + encapsulation chiếm 30-40% cost packaging.
- **Yield**: Bond defect → chip báng.
