---
title: 'CMOS Inverter: Cổng NOT (CMOS NOT Gate)'
sourceUrl: https://semi-journal.jp/basics/logic-circuit/cmos-inverter.html
category: mach-logic-co-ban
order: 6
flagship: false
---

## Định Nghĩa CMOS

**CMOS** (Complementary Metal-Oxide-Semiconductor, CMOS, 相補性金属酸化物半導体) không phải là một **thiết bị cụ thể** mà là một **phương pháp bố trí bán dẫn**. 

CMOS = "kết hợp **complementary** (bổ sung) **MOS** (n-type + p-type)" để tạo thành các cổng logic và mạch số có **tiêu thụ điện năng cực thấp** và **tốc độ cao**.

## Cấu Trúc CMOS Inverter (NOT Gate)

### Sơ Đồ

```
        Vdd (~5V)
          │
          ├─────┐
          │     ├──────┐
        ┌─┴─┐   │  pMOS│ (kéo lên)
    In ─┤G  ├─┐ ├──┬───┤D
        └───┘ │ │  │   └──── Out
              │ │  │
        ┌─────┴─┼──┴───┐
        │       │      │
        │nMOS  │(kéo xuống)
    In ─┤G  ├─┘      │
        ├──┬────────┘
        │  │D
        │  │
       GND (0V)
```

**Thành Phần**:
- **pMOSFET**: Kết nối từ Vdd (cực dương) đến Out
  - Source nối Vdd
  - Drain nối Out
  - Gate nối In
  
- **nMOSFET**: Kết nối từ Out đến GND (cực âm)
  - Source nối GND
  - Drain nối Out
  - Gate nối In

**Nguyên Tắc**: "Hai cửa được kết nối với một **dòng đầu vào duy nhất**, với **đầu ra được lấy từ điểm giữa** giữa hai transistor"

## Nguyên Lý Hoạt Động

### Trường Hợp 1: Input = 0V (LOW)

**Trạng Thái Transistor**:
- **pMOS**: V_Gate = 0V (thấp, bằng GND) → **ON** (lỗ trống chảy)
- **nMOS**: V_Gate = 0V (thấp, dưới V_TH) → **OFF** (không có electron)

**Dòng Điện**:
- pMOS dẫn: Dòng từ Vdd → Out → pMOS → GND (quá trình này kéo Out lên)
- nMOS không dẫn: Không có dòng từ Out → GND

**Kết Quả**:
- Output bị kéo lên Vdd ≈ 5V
- **Output = 1 (HIGH)**

### Trường Hợp 2: Input = 5V (HIGH)

**Trạng Thái Transistor**:
- **pMOS**: V_Gate = 5V (cao, bằng Vdd) → **OFF** (không có lỗ trống)
- **nMOS**: V_Gate = 5V (cao, trên V_TH) → **ON** (electron chảy)

**Dòng Điện**:
- pMOS không dẫn: Không có dòng từ Vdd → Out
- nMOS dẫn: Dòng từ Out → nMOS → GND (kéo Out xuống)

**Kết Quả**:
- Output bị kéo xuống GND ≈ 0V
- **Output = 0 (LOW)**

## Bảng Sự Thật

| Input | pMOS | nMOS | Output | Logic |
|-------|------|------|--------|-------|
| 0V (0) | ON | OFF | 5V (1) | NOT: 0→1 |
| 5V (1) | OFF | ON | 0V (0) | NOT: 1→0 |

## Ứng Dụng: Phép Trừ Nhị Phân (Two's Complement)

### Tại Sao Dùng NOT?

Máy tính không có "mạch trừ" - thay vào đó, nó chuyển đổi phép trừ thành **phép cộng bằng phương pháp bù số (two's complement)**.

### Ví Dụ: Tính 7 - 3 Bằng CPU

```
7 - 3 = 7 + (-3)

Bước 1: Chuyển đổi sang nhị phân
7 = 0111₂
3 = 0011₂

Bước 2: Lấy bù số 1 (ONE'S COMPLEMENT) của 3 → Dùng NOT
Bù 1 của 0011 = 1100 (đảo từng bit)
→ Dùng 4 NOT gate riêng biệt cho 4 bit

Bước 3: Thêm 1 (TWO'S COMPLEMENT)
1100 + 1 = 1101

Bước 4: Cộng
0111 + 1101 = 10100 (5 bit)
Bỏ bit thứ 5 (overflow): 0100 = 4₁₀

Kết quả: 7 - 3 = 4 ✓
```

### Mạch Thực Tiễn

```
        ┌─────────┐
    a0 ─┤ NOT0    ├─ not_a0
        ├─────────┤
    a1 ─┤ NOT1    ├─ not_a1
        ├─────────┤
    a2 ─┤ NOT2    ├─ not_a2
        ├─────────┤
    a3 ─┤ NOT3    ├─ not_a3
        └─────────┘
        (4-bit NOT gate)
        
    [not_a] + 1 → Adder → Kết quả trừ
```

## Ưu Điểm CMOS Inverter

### 1. Tiêu Thụ Điện Cực Thấp

**Lý Do**:
- **Chỉ 1 trong 2 transistor dẫn** tại bất kỳ thời điểm nào
- Không bao giờ tạo "đường dẫn trực tiếp" từ Vdd → GND (không có **"short circuit" current**)
- Tiêu thụ chỉ xảy ra khi **chuyển trạng thái** (dynamic power)

**Công Thức**:
```
P_dynamic = C × V² × f
```
- C: Tư điện
- V: Điện áp
- f: Tần số chuyển đổi

**Hệ Quả**:
- Giảm tần số → giảm tiêu thụ (CPU có thể giảm tốc độ khi chạy ứng dụng nhẹ)
- Giảm điện áp → giảm tiêu thụ (mobile giảm V khi pin yếu)

### 2. Tốc Độ Cao

- **nMOS nhanh** (electron mobility cao) → kéo xuống nhanh
- **pMOS chậm nhưng đủ** (lỗ trống mobility thấp) → kéo lên đủ nhanh (vì pMOS thường rộng hơn)
- **Kết hợp** → chuyển mạch cực nhanh (nanoseconds)

### 3. Mức Logic Rõ Ràng

- **Output LOW**: Thực sự 0V (gần GND)
- **Output HIGH**: Thực sự Vdd (gần 5V)
- **Margin lớn**: Nếu tín hiệu bị nhiễu ±10%, vẫn nhận đúng

## Phân Tích Đầu Ra

### Khi Input = 0V

```
Vdd ────┬────────│├── nMOS OFF
        │        │
       pMOS     Out = Vdd (kéo cao)
        │        │
        ├────────┤
        │        │
       GND ─────│└── nMOS OFF
```

### Khi Input = 5V

```
Vdd ────┬────────│├── nMOS ON
        │        │
       pMOS     Out = GND (kéo thấp)
        │        │
        ├────────┤
        │        │
       GND ─────│└── nMOS ON (dẫn)
```

## Tích Hợp Trong IC Thực Tế

### Số Lượng Transistor

- **1 NOT gate**: 2 transistor (1 nMOS + 1 pMOS)
- **1 NAND gate**: 4 transistor (2 nMOS series + 2 pMOS parallel)
- **1 NOR gate**: 4 transistor (2 nMOS parallel + 2 pMOS series)

### CPU Hiện Đại

- **Số transistor**: 10⁹ - 10¹⁰ (miliarde)
- **Kích thước transistor**: 3-7 nm
- **Tần số**: 2-5 GHz

**Ví dụ**:
- Tổng số NOT gate + NAND + NOR + ... ≈ 500 triệu (5×10⁸)
- Mỗi gate dùng 2-4 transistor
- Tổng: 500M × 3 transistor ≈ 1.5 tỷ transistor (1.5×10⁹)

## Kết Luận

**CMOS Inverter (NOT)**:
- Thiết kế cơ bản nhất của logic digital
- Kết hợp nMOS (nhanh) + pMOS (dùng để kéo lên)
- Tiêu thụ cực thấp + tốc độ cao = nền tảng của CPU hiện đại

Tất cả các thiết bị bán dẫn số hiện đại (CPU, GPU, RAM, SSD, điện thoại) đều dựa trên nguyên tắc CMOS này - chỉ khác nhau ở **cách sắp xếp và tối ưu hoá** để đạt chức năng phức tạp.
