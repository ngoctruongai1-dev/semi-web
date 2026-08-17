---
title: Bipolar Junction Transistor (BJT, 両極接合トランジスタ)
sourceUrl: https://semi-journal.jp/basics/device/transistor/bjt.html
category: thiet-bi-ban-dan
subcategory: transistor
order: 13
flagship: false
---

## Định Nghĩa

**BJT (Bipolar Junction Transistor)** là "**loại transistor được cấu thành từ ba lớp bán dẫn (n-p-n hoặc p-n-p) chứa hai tiếp giáp p-n**".

Tên gọi "Bipolar" (hai cực) vì nó sử dụng **cả electron và hole** để dẫn điện (khác MOSFET chỉ dùng một loại).

---

## Cấu Trúc BJT

### Hai Loại Cấu Trúc

1. **n-p-n Transistor** (chủ yếu là electron):
   - Lớp dưới (Emitter, E): n-type, doping nặng (n+)
   - Lớp giữa (Base, B): p-type, doping nhẹ hơn E (~1-2 μm dày)
   - Lớp trên (Collector, C): n-type, doping vừa phải

2. **p-n-p Transistor** (chủ yếu là hole):
   - Emitter: p-type, doping nặng (p+)
   - Base: n-type
   - Collector: p-type

### Ba Cực (Terminals)

| Cực | Ký Hiệu | Vai Trò |
|---|---|---|
| **Emitter** | E | "Phát xạ" carrier (electron cho n-p-n, hole cho p-n-p) |
| **Base** | B | Kiểm soát luồng carrier từ E tới C bằng **dòng điện** |
| **Collector** | C | Nhận carrier từ Base |

---

## Nguyên Lý Hoạt Động

### Trạng Thái Tắt (Cutoff)

**Điều kiện**: VBE < 0.6V (cho n-p-n ở silicon)

- Cả hai tiếp giáp E-B và B-C đều ở trạng thái **thiên áp nghịch (reverse bias)**
- Không có electron tiêm từ E tới B
- IC ≈ 0 (chỉ dòng rò)

### Trạng Thái Bẩn (Saturation)

**Điều kiện**: VBE ≥ 0.7V, VBC ≥ 0.6V

- Tiếp giáp E-B ở **thiên áp thuận** → electron từ E tiêm vào B
- Tiếp giáp B-C ở **gần thiên áp thuận** hoặc **yếu thiên áp nghịch**
- **Phần lớn electron từ E vượt qua Base mỏng** → chạy tới Collector
- Kết quả: IC lớn (~0.1–0.3V ở VCE)

### Trạng Thái Hoạt Động (Active Region)

**Điều Kiện**: VBE ≈ 0.7V (thuận), VBC < 0 (nghịch)

- Tiếp giáp **E-B thuận** → electron tiêm vào B
- Tiếp giáp **B-C nghịch** → hẻm Collector rộng mở
- Electron từ B hầu hết **bay sang Collector**
- IC được **kiểm soát bởi IB**

**Mối Quan Hệ Cực Kỳ Quan Trọng**:
$$I_C = \beta \cdot I_B$$

(β: current gain, tiêu biểu 50–500)

### Điều Kiện Kiểm Soát

**Nhân Tố Kiểm Soát**: IB (dòng Base)

- IB nhỏ → điều khiển IC lớn
- "Dòng Base nhỏ (IB ~ μA) điều khiển dòng Collector lớn (IC ~ mA)" → **khuếch đại dòng**

**Công Thức Hệ Số α (Transport Factor)**:
$$I_C = \alpha \cdot I_E$$
$$I_B = I_E - I_C = I_E(1 - \alpha)$$

(α ≈ 0.95–0.99, như vậy chỉ 1–5% electron tái hợp tại B)

**Mối Liên Hệ α vs β**:
$$\beta = \frac{\alpha}{1 - \alpha}$$

Ví dụ: α = 0.99 → β = 0.99/0.01 = 99

---

## Đặc Tính I-V Của BJT

### Đặc Tính Emitter-Base (I_B vs V_BE)

- Hoạt động như một **diode p-n**
- Chỉ dẫn điện khi VBE ≥ 0.6V
- Dòng tăng exponentially: IB ∝ exp(VBE/VT)

### Đặc Tính Collector-Emitter (I_C vs V_CE)

**Ba Vùng**:

1. **Saturation (VCE ≤ 0.2V)**:
   - IC ≈ hằng số = (VCC − VCE)/RL (phụ thuộc mạch ngoài)
   - Transistor **hoạt động như công tắc ĐÓNG** (closed switch)

2. **Active Region (0.2V < VCE < VCE sat)**:
   - IC ≈ β·IB (lý tưởng: IC gần độc lập VCE)
   - **Dùng cho amplification**

3. **Cutoff (VBE < 0.6V)**:
   - IC ≈ 0
   - Transistor **hoạt động như công tắc MỞ** (open switch)

---

## Hệ Số Khuếch Đại (Current Gain)

### β (DC Gain)

$$\beta = \frac{I_C}{I_B}$$

**Ý Nghĩa**: dòng Base tăng 1 mA → dòng Collector tăng β mA

**Giá Trị Tiêu Biểu**: 50–500 tùy loại transistor

**Phụ Thuộc Vào**:
- Nhiệt độ: β tăng khi T tăng ~0.5%/°C
- IC: β lớn nhất ở IC trung bình, giảm ở IC rất nhỏ hoặc quá lớn
- VCE: β giảm dần khi VCE tăng (do Early effect)

### Early Effect

**Hiện Tượng**: Trong vùng active, IC **hơi tăng** theo VCE (khác lý tưởng gần như không đổi).

**Công Thức**:
$$I_C = \beta \cdot I_B \cdot (1 + \frac{V_{CE}}{V_A})$$

(VA: Early voltage, tiêu biểu 50–200V)

---

## Phân Loại BJT

| Tiêu Chí | Phân Loại |
|---|---|
| **Loại Carrier** | n-p-n (electron, nhanh), p-n-p (hole, chậm) |
| **Công Suất** | Low-power BJT (~100 mW), Power BJT (~100 W) |
| **Tốc Độ** | Slow/General purpose, Fast/High-speed |
| **Ứng Dụng** | Analog amplifier, Switching, Darlington (cascaded) |

---

## Ứng Dụng BJT

### 1. **Amplifier Tín Hiệu Nhỏ**
- **Common Emitter (CE)**: khuếch đại điện áp cao nhất
- **Common Collector (CC)**: giải phóng dòng cao (buffer)
- **Common Base (CB)**: độ khư động thấp

### 2. **Mạch Switching**
- Đóng-mở relay
- Driver LED
- Điều khiển động cơ

### 3. **Darlington Pair**
- Hai BJT mắc liên tầng → β tổng = β₁ × β₂
- Dùng khi cần khuếch đại dòng rất lớn

### 4. **Comparator & Logic**
- So sánh tín hiệu (analog)
- Bộ phát cảnh báo nhiệt độ

---

## So Sánh BJT vs MOSFET

| Tính Năng | BJT | MOSFET |
|---|---|---|
| **Điều Khiển** | Dòng (IB) | Điện áp (VGS) |
| **Dòng Điều Khiển** | ~μA | ~nA (nhỏ gấp 1000 lần) |
| **VCE(sat) / VDS(on)** | 0.1–0.2V (thấp) | 0.2–0.5V (cao hơn) |
| **Chuyển Mạch** | Chậm (~100ns) | Cực nhanh (~1ns) |
| **Dòng Rò** | Cao (μA level) | Rất thấp (nA) |
| **Điện Áp Cấp** | 5V~100V+ | Vmin ~1.8V |
| **Ứng Dụng** | Analog, Ampli, Discrete | Digital, IC, Power |
| **Thời Đại** | 1950s~Hiện tại | 1960s~Hiện tại (chiếm chủ đạo) |

---

## Lý Do BJT Vẫn Dùng Hiện Nay

**Dù MOSFET chiếm ưu thế**, BJT vẫn được sử dụng ở:

1. **Analog Circuits**: nhạy cảm cân bằng nhạy cảm cao
2. **High-Speed Circuits**: ECL (Emitter-Coupled Logic) cho RF/Microwave
3. **Discrete Applications**: Tiết kiệm chi phí khi số lượng ít
4. **Power Circuits**: Dòng saturation thấp → hiệu suất tốt khi On
