---
title: 'Transistor: Công Tắc 0 và 1 (Transistor Switch)'
sourceUrl: https://semi-journal.jp/basics/logic-circuit/transistor-switch.html
category: mach-logic-co-ban
order: 4
flagship: false
---

## Định Nghĩa

**Transistor** (トランジスタ) là "thiết bị bán dẫn hoạt động như một **công tắc điện tử** (electronic switch), dùng để **bật/tắt dòng điện** thông qua tín hiệu điều khiển nhỏ".

Transistor là **nền tảng của tất cả tính toán số** - hàng tỷ transistor bật/tắt với tốc độ GHz tạo nên máy tính hiện đại.

## Nguyên Tắc Hoạt Động Cơ Bản

### Transistor Là Một "Vòi Nước Điện"

**Tương Tự Thực Tế**:
- **Vòi nước cơ học**: Xoay khóa → nước chảy (hoặc không)
- **Transistor điện**: Áp tín hiệu vào Gate → dòng điện chảy (hoặc không)

**Ba Cực Của Transistor MOSFET** (loại phổ biến nhất):
1. **Gate (Cổng, ゲート)**: Nơi nhận tín hiệu điều khiển
2. **Source (Nguồn, ソース)**: Nơi electron/lỗ trống xuất phát
3. **Drain (Máng, ドレイン)**: Nơi electron/lỗ trống chảy ra

**Tương Tự**:
- **Gate** ≈ khóa vòi
- **Source** ≈ đầu vào nước
- **Drain** ≈ đầu ra nước
- **Dòng I_D** (Drain current) ≈ lưu lượng nước

## Hai Trạng Thái Cơ Bản

### Trạng Thái 1: TẮT (OFF, Cut-Off Region)

**Điều Kiện**:
- Điện áp Gate = 0V (dưới ngưỡng V_TH)
- **Vùng cạn kiệt** ở Source-Drain vẫn tồn tại

**Hành Vi**:
- Dòng I_D ≈ 0 (gần như không có dòng chảy)
- Transistor hoạt động như **công tắc mở** (open switch)
- Điện áp V_DS có thể là bất kỳ giá trị nào (không bị chi phối)

**Ứng Dụng Logic**: **0** (Logic LOW, OFF)

### Trạng Thái 2: BẬT (ON, Saturation Region)

**Điều Kiện**:
- Điện áp Gate > V_TH (cao hơn ngưỡng)
- **Kênh dẫn** hình thành giữa Source-Drain

**Hành Vi**:
- Dòng I_D có giá trị lớn (phụ thuộc load)
- Transistor hoạt động như **công tắc đóng** (closed switch)
- Điện áp V_DS rất nhỏ (chỉ ~0.1V) - mất mát tối thiểu

**Ứng Dụng Logic**: **1** (Logic HIGH, ON)

## Đặc Tính Công Tắc Của Transistor

### Bảng Sự Thật Đơn Giản

| V_Gate | Trạng Thái | I_D | V_DS | Ứng Dụng |
|---------|-----------|-----|------|---------|
| < V_TH | OFF | ≈ 0 | Cao | 0 |
| > V_TH | ON | Lớn | ≈ 0 | 1 |

### Lợi Ích Của Transistor Như Công Tắc

1. **Tốc độ Siêu Nhanh**:
   - Chuyển từ OFF → ON: nanoseconds (10⁻⁹ s)
   - Chuyển từ ON → OFF: nanoseconds
   - Cho phép hoạt động ở GHz (10⁹ Hz)

2. **Dòng Điều Khiển Nhỏ**:
   - Gate cần dòng nhỏ hoặc thậm chí không (MOSFET)
   - Điều khiển dòng Drain lớn bằng tín hiệu nhỏ

3. **Không Có Bộ Phận Cơ Học**:
   - Không mài mòn như công tắc cơ học
   - Tuổi thọ hàng năm (>10⁹ lần chuyển đổi)

4. **Kích Thước Nhỏ**:
   - Kích thước nanometers (nm)
   - Hàng tỷ transistor trên một chip

## Mạch Logic Đơn Giản: NOT Gate (Inverter)

### Cấu Trúc

```
       V_DD (5V)
        │
        ├─────┐
        │     │
     Resistor  │
     (Pull-up) │
        │      │ NMOS Transistor
    ────┼──────┤
   │    │      │
   ├─In─┤      ├── Out
   │    │      │
    ────┼──────┘
        │      
       GND (0V)
```

### Hoạt Động

**Trường hợp 1: Input = 0V (LOW)**
- V_Gate = 0V (dưới V_TH)
- NMOS **TẮT** (OFF)
- Dòng không chảy qua NMOS
- Resistor kéo Output lên V_DD = 5V
- **Output = 1** (HIGH)

**Trường hợp 2: Input = 5V (HIGH)**
- V_Gate = 5V (cao hơn V_TH)
- NMOS **BẬT** (ON)
- Dòng lớn chảy qua NMOS từ V_DD → GND
- Output bị kéo xuống gần GND ≈ 0V
- **Output = 0** (LOW)

### Bảng Sự Thật

| Input | Output |
|-------|--------|
| 0 | 1 |
| 1 | 0 |

**Kết luận**: Input = Output (đảo chiều) → Inverter

## Từ Transistor Tới CPU

### Cấp Độ 1: Transistor Đơn Lẻ
- 1 transistor = 1 công tắc = bật/tắt 1 bit

### Cấp Độ 2: Logic Gate
- Kết hợp 2-4 transistor → tạo NOT, AND, OR, NAND, NOR gate
- Các gate này thực hiện các "phán đoán" đơn giản

### Cấp Độ 3: Bộ Cộng (Adder)
- Kết hợp 10-20 gate → tạo 1-bit adder
- 4 x 1-bit adder → 4-bit adder (cộng 4 bit)

### Cấp Độ 4: ALU (Arithmetic Logic Unit)
- Bộ cộng + bộ logic AND/OR + bộ shift
- Thực hiện phép cộng, trừ, nhân, chia

### Cấp Độ 5: CPU Hoàn Chỉnh
- ALU + Bộ nhớ (Registers, Cache) + Bộ điều khiển (Control Unit)
- Fetch → Decode → Execute → Store

## Ví Dụ: Phép Cộng "1 + 1" Trong CPU

```
1 + 1 = 10 (binary: 1 + 1 = 10)

Quá trình:
1. Fetch: Đọc lệnh "ADD 1, 1" từ bộ nhớ
2. Decode: Xác định → chạy ALU (cộng)
3. Execute: 
   - Chuyển 1 → 0001 (binary)
   - Chuyển 1 → 0001 (binary)
   - Cộng từng bit bằng adder:
     0001 + 0001 = 0010
   - Kết quả: 0010 = 2₁₀
4. Store: Lưu 0010 vào thanh ghi/bộ nhớ

Toàn bộ quá trình: ~1 nanosecond (1 GHz CPU)
```

## Ứng Dụng Thực Tiễn

### 1. Bộ Nhớ DRAM
- 1 transistor + 1 tụ = 1 ô nhớ
- Transistor bật → sạc/xả tụ → ghi/đọc dữ liệu
- Miliarde transistor = miliarde bit dữ liệu

### 2. CPU/GPU
- 10⁹ - 10¹⁰ transistor trên một chip
- Chạy ở 2-5 GHz = bật/tắt 2-5 tỉ lần/giây
- Kết hợp: tính toán + logic + bộ nhớ

### 3. Flash SSD
- Floating gate transistor lưu điện tích
- Tinh chỉnh transistor để lưu bit lâu dài

## Kết Luận

Transistor là **công tắc điện tử** với 2 trạng thái (ON/OFF) = 2 mức logic (1/0). Kết hợp hàng tỷ transistor:
- Thực hiện logic gate (NOT, AND, OR)
- Thực hiện số học (cộng, trừ, nhân)
- Tạo nên CPU mạnh

Bằng cách bật/tắt nhanh (GHz), transistor tạo ra:
- Tốc độ cao (tỷ phép/giây)
- Chi phí thấp (transistor rẻ)
- Năng lượng thấp (khi OFF, không tiêu thụ)
