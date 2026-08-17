---
title: 'Các Loại Transistor: Nguyên Lý, Phân Loại, và Ứng Dụng'
sourceUrl: https://semi-journal.jp/basics/device/transistor/type.html
category: thiet-bi-ban-dan
subcategory: transistor
order: 7
flagship: false
---

## Tổng Quan Ba Loại Transistor Chính

Transistor hiện đại chia thành **ba loại chính**:

1. **BJT (Bipolar Junction Transistor, 両極接合トランジスタ)**
2. **FET (Field Effect Transistor, 電界効果トランジスタ)** – gồm JFET và MOSFET
3. **IGBT (Insulated Gate Bipolar Transistor, 絶縁ゲート両極性トランジスタ)**

---

## 1. BJT (Bipolar Junction Transistor)

### Cấu Trúc
- **Ba lớp bán dẫn**: n-p-n hoặc p-n-p
- **Ba cực**: Emitter (E), Base (B), Collector (C)

### Nguyên Lý Hoạt Động
- **Điều khiển bằng dòng (Current-driven, 電流駆動)**: dòng Base nhỏ điều khiển dòng Emitter-Collector lớn
- Electron từ Emitter tiêm vào Base (mỏng), phần lớn vượt qua Base đến Collector → tạo dòng Collector lớn (~100-500 lần dòng Base)
- **Hệ số khuếch đại β = IC/IB** (~100–500)

### Ưu Điểm
- Khuếch đại dòng cao
- Điện áp bão hòa (VCE(sat)) thấp (~0.1-0.2V) → tiêu thụ công suất ít
- Thích hợp amplifier, tần số trung bình

### Nhược Điểm
- Cần dòng Base để điều khiển → điều khiển phức tạp hơn FET
- Nhiều nhiệt độ → hiệu suất không ổn định
- Chuyển mạch chậm hơn FET

### Ứng Dụng
- Amplifier tín hiệu nhỏ (phát thanh, microphone)
- Mạch điều khiển công suất thấp

---

## 2. FET (Field Effect Transistor)

### Phân Loại
- **JFET**: ghép tiếp giáp p-n, điều khiển bằng điện áp
- **MOSFET**: ghép cấu trúc MOS, điều khiển bằng điện áp → **chiếm ưu thế hiện nay**

### Nguyên Lý Hoạt Động
- **Điều khiển bằng điện áp (Voltage-driven, 電圧駆動)**: điện áp Gate điều khiển kênh dẫn Source-Drain
- Dòng ra (ID) tỷ lệ với (VGS − Vth)² ở vùng saturate
- **Không cần dòng Gate** (dòng Gate gần như 0) → tiêu thụ công suất thấp

### Ưu Điểm
- **Tiêu thụ công suất cực thấp** – chỉ tiêu thụ khi chuyển trạng thái
- Chuyển mạch **cực nhanh** (nanosecond~picosecond)
- **Độ ổn định nhiệt độ cao**
- Dễ tích hợp thành mạch lớn (IC)

### Nhược Điểm
- Điện áp bão hòa (VDS(on)) cao hơn BJT
- Nhạy cảm với điện áp tĩnh điện (ESD – Electrostatic Discharge)

### Ứng Dụng
- **Mạch số (Digital logic)**: cổng AND, OR, NOT, CPU, RAM
- **Power switching**: điều khiển điện động cơ, SMPS (Switched-Mode Power Supply)
- **Cảm biến ảnh (Image sensor)**
- **Bộ nhớ (Memory)**

---

## 3. IGBT (Insulated Gate Bipolar Transistor)

### Cấu Trúc
**Kết hợp ưu điểm BJT + MOSFET**:
- **Cột MOSFET**: điều khiển bằng điện áp gate
- **Cột BJT**: tầng collector có cấu trúc p (thay vì n) → cung cấp thêm carrier

### Nguyên Lý Hoạt Động
- Gate voltage điều khiển kênh MOSFET
- Kênh MOSFET modulation kênh BJT trong cấu trúc → dòng collector lớn
- Vừa có ưu điểm "điều khiển điện áp" của MOSFET, vừa có "dòng ra lớn" của BJT

### Ưu Điểm
- Điều khiển bằng điện áp (khác BJT)
- Dòng ra lớn với điện áp nhỏ (khác MOSFET tính toán)
- Thích hợp **áp cao, dòng lớn** (ranh giới giữa khả năng chịu áp và tốc độ)

### Nhược Điểm
- Phức tạp hơn BJT/FET
- Chuyển mạch chậm hơn MOSFET
- Tailing current → mất mát nhiệt cao khi tắt

### Ứng Dụng
- **Inverter công nghiệp** (biến tần AC/DC)
- **Xe điện (EV)**: kiểm soát động cơ
- **Nguồn SMPS công suất cao** (>1kW)
- Biến áp công suất

---

## So Sánh Toàn Diện

| Tính năng | BJT | MOSFET | IGBT |
|---|---|---|---|
| **Điều khiển** | Dòng (IB) | Điện áp (VGS) | Điện áp (VGS) |
| **Dòng điều khiển** | ~mA | ~μA | ~μA |
| **Tốc độ chuyển mạch** | Chậm (100 ns) | Cực nhanh (1-10 ns) | Trung bình (50-200 ns) |
| **VCE(sat) / VDS(on)** | Thấp (~0.1V) | Cao (~0.5V) | Trung bình (~0.5-2V) |
| **Áp dụng công suất** | Thấp (<50W) | Trung/cao | **Cao (>1kW)** |
| **Ổn định nhiệt** | Kém | Tốt | Tốt |
| **Độ phức tạp** | Đơn giản | Đơn giản | Phức tạp |

---

## Xu Hướng Công Nghệ

**Hiện tại**: MOSFET chiếm ưu thế **90%+** trong IC/chip logic vì tốc độ cao, tiêu thụ công suất thấp.

**Công suất cao (>1kW)**: IGBT vẫn phổ biến, nhưng **GaN/SiC MOSFETs** (bán dẫn wide-bandgap) đang thay thế dần do chuyển mạch nhanh hơn, hiệu suất cao hơn.
