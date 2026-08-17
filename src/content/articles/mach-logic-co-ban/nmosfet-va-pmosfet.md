---
title: NMOSFET Và PMOSFET (nMOS và pMOS Transistor)
sourceUrl: https://semi-journal.jp/basics/logic-circuit/nmos-pmos-transistor.html
category: mach-logic-co-ban
order: 5
flagship: false
---

## Tổng Quan

**MOSFET** (Metal-Oxide-Semiconductor Field-Effect Transistor, MOSFET) là "transistor điều khiển bằng điện trường", có **hai loại chính: NMOSFET (nMOS, n-channel) và PMOSFET (pMOS, p-channel)**.

Hai loại này được thiết kế với **tính toán bổ sung** (complementary) - khi nMOS bật thì pMOS tắt, và ngược lại. Kết hợp giữa chúng tạo thành **CMOS (Complementary MOS)** - công nghệ chủ yếu của tất cả chip logic hiện đại.

## NMOSFET (N-Channel MOSFET, nMOSFET)

### Cấu Trúc

```
        Gate (Cổng)
           │
        ┌──┴──┐
        │ SiO₂│ (Oxide)
        └─────┘
     ┌──────────────┐
     │ P-type Si    │ (Nền)
     │    ┌──────┐  │
     │    │ N+ N+│  │
     │ Source Drain
     └──────────────┘
```

**Thành phần**:
- **Nền (Substrate)**: p-type Silicon
- **Source & Drain**: Hai vùng n-type cách nhau (~0.1 μm)
- **Cơ chế**: Điện trường từ Gate tạo kênh n-type (nMOS) giữa Source-Drain

### Nguyên Lý Hoạt Động

#### Trạng Thái 1: OFF (V_Gate < V_TH)

- Không có điện trường tại bề mặt
- Lỗ trống (p-type) vẫn ở bề mặt
- Không có kênh dẫn electron
- Dòng I_D ≈ 0 → "**0**" (OFF)

#### Trạng Thái 2: ON (V_Gate > V_TH)

- Điện trường từ Gate dương kéo electron từ nền xuống bề mặt
- Electron tích lũy tạo **kênh n-type** giữa Source-Drain
- Electron chảy từ Source → Drain
- Dòng I_D lớn → "**1**" (ON)

### Bảng Sự Thật

| V_Gate | Kênh | I_D | Logic |
|--------|------|-----|-------|
| < V_TH | Không | ≈ 0 | 0 |
| > V_TH | Có (n-type) | Lớn | 1 |

### Ứng Dụng

- Cổng logic (NOT, NAND, NOR)
- Transistor để kéo output xuống LOW (pull-down)

## PMOSFET (P-Channel MOSFET, pMOSFET)

### Cấu Trúc

```
        Gate (Cổng)
           │
        ┌──┴──┐
        │ SiO₂│ (Oxide)
        └─────┘
     ┌──────────────┐
     │ N-type Si    │ (Nền)
     │    ┌──────┐  │
     │    │ P+ P+│  │
     │ Source Drain
     └──────────────┘
```

**Thành phần**:
- **Nền (Substrate)**: n-type Silicon
- **Source & Drain**: Hai vùng p-type
- **Cơ chế**: Điện trường từ Gate (âm) tạo kênh p-type (pMOS) giữa Source-Drain

### Nguyên Lý Hoạt Động

#### Trạng Thái 1: ON (V_Gate = 0V hoặc âm)

- Điện trường âm từ Gate dương kéo lỗ trống từ nền xuống bề mặt
- Lỗ trống tích lũy tạo **kênh p-type** giữa Source-Drain
- Lỗ trống chảy từ Source → Drain
- Dòng I_D lớn → "**1**" (ON)

#### Trạng Thái 2: OFF (V_Gate = V_DD hoặc cao)

- Không có điện trường âm
- Electron từ nền (n-type) vẫn ở
- Không có kênh lỗ trống
- Dòng I_D ≈ 0 → "**0**" (OFF)

### Bảng Sự Thật

| V_Gate | Kênh | I_D | Logic |
|--------|------|-----|-------|
| = V_DD | Không | ≈ 0 | 0 |
| = 0V | Có (p-type) | Lớn | 1 |

### Ứng Dụng

- Cổng logic (NOT, NAND, NOR)
- Transistor để kéo output lên HIGH (pull-up)

## So Sánh NMOSFET vs PMOSFET

| Đặc Điểm | nMOS | pMOS |
|----------|------|------|
| **Nền** | p-type | n-type |
| **Kênh** | n-type | p-type |
| **Source/Drain** | n+ | p+ |
| **Carrier** | Electron | Lỗ trống |
| **V_Gate để ON** | Cao (>V_TH) | Thấp (<V_DD - \|V_TH\|) |
| **Mobility (μ)** | Cao (~1000 cm²/Vs) | Thấp (~300 cm²/Vs) |
| **Tốc độ** | Nhanh hơn | Chậm hơn |
| **Ứng dụng** | Pull-down | Pull-up |

### Ý Nghĩa: nMOS Nhanh Hơn pMOS

Vì electron có mobility ~3 lần cao hơn lỗ trống:
- **nMOS**: Electron chảy nhanh → kênh hình thành nhanh → bật nhanh
- **pMOS**: Lỗ trống chảy chậm → kênh hình thành chậm → bật chậm

**Hệ Quả**: Để cân bằng tốc độ, pMOS cần **rộng hơn nMOS** (~2-3 lần) → chiếm diện tích lớn hơn

## CMOS: Kết Hợp nMOS và pMOS

### Tại Sao Cần Cả Hai?

**Mạch Inverter CMOS**:

```
       V_DD (5V)
         │
        ┌┴┐
        │ │ pMOS (kéo lên HIGH)
        │ ├───── Out
     In─┤ │
        │ │ nMOS (kéo xuống LOW)
        └┬┘
         │
        GND (0V)
```

**Nguyên Lý**:
- **Khi Input = 0**: nMOS OFF, pMOS ON → Out = V_DD = 1 (HIGH)
- **Khi Input = 1**: nMOS ON, pMOS OFF → Out = GND = 0 (LOW)

### Ưu Điểm CMOS

1. **Tiêu Thụ Điện Cực Thấp**:
   - Chỉ 1 trong 2 transistor dẫn tại một thời điểm
   - Không bao giờ tạo "đường dẫn trực tiếp" V_DD → GND
   - Tiêu thụ: chỉ khi chuyển trạng thái (dynamic power)

2. **Tốc Độ Cao**:
   - nMOS nhanh kéo xuống
   - pMOS nhanh kéo lên
   - Kết hợp → chuyển mạch cực nhanh

3. **Điện Áp Rơi Nhỏ**:
   - Khi ON, transistor ở vùng trilinear/saturation → V_DS rất nhỏ
   - Mất mát P = I × V cực nhỏ

4. **Dễ Thiết Kế**:
   - Lý thuyết đơn giản (ON/OFF)
   - Tiêu thụ dự đoán được
   - Công cụ thiết kế trưởng thành

## Các Loại MOSFET Khác

### Enhancement vs Depletion

- **Enhancement Mode** (phổ biến): Cần V_Gate > V_TH để bật → OFF là trạng thái mặc định
- **Depletion Mode** (hiếm): Cần V_Gate < V_TH để tắt → ON là trạng thái mặc định

### Độ Dẫn Điện Phụ Thuộc V_Gate

**Công Thức (Linear Region)**:
```
I_D = (W/L) × μ × C_ox × [(V_GS - V_TH) × V_DS - V_DS²/2]
```

- **W/L**: Tỷ lệ chiều rộng/chiều dài kênh
- **μ**: Mobility carrier
- **C_ox**: Tư điện tích gate oxide
- Tăng W → tăng I_D (thiết kế để cân bằng tốc độ)

## Ứng Dụng Thực Tiễn

### CPU/GPU (CMOS Logic)

Hàng tỷ cổng logic CMOS xếp lần lượt:
- NOT (2 transistor: 1 nMOS, 1 pMOS)
- NAND (4 transistor)
- NOR (4 transistor)
- → ALU → CPU

### Bộ Nhớ

- **DRAM 1T1C**: Transistor là nMOS (kéo xuống khi đọc)
- **SRAM 6T**: Flip-flop dùng nMOS + pMOS cross-coupled

### Analogue Circuit

- **Op-Amp, Amp**: Kết hợp nMOS/pMOS để tăng/giảm điện áp

## Kết Luận

- **nMOS**: Nhanh, dẫn electron tốt → kéo xuống (pull-down)
- **pMOS**: Chậm hơn nhưng cần để kéo lên (pull-up)
- **CMOS**: Kết hợp → cực nhỏ tiêu thụ, cực nhanh, trở thành công nghệ chủ yếu

Mỗi chip logic hiện đại chứa **hàng tỷ cặp nMOS-pMOS** tạo nên **hàng tỷ cổng logic** hoạt động song song.
