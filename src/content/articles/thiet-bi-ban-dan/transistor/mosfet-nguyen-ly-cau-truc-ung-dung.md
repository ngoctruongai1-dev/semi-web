---
title: 'MOSFET: Nguyên Lý, Cấu Trúc, và Ứng Dụng'
sourceUrl: https://semi-journal.jp/basics/device/transistor/mosfet.html
category: thiet-bi-ban-dan
subcategory: transistor
order: 8
flagship: false
---

## Định Nghĩa MOSFET

**MOSFET** (Metal-Oxide-Semiconductor Field Effect Transistor, 金属酸化物半導体電界効果トランジスタ) là "transistor cấu trúc MOS, trong đó **điện áp gate (Gate voltage) điều khiển trạng thái của bề mặt bán dẫn** để hình thành hoặc cắt đứt kênh dẫn giữa Source và Drain".

Nó là **loại transistor phổ biến nhất** trong IC hiện đại, từ CPU, bộ nhớ, đến cảm biến hình ảnh.

---

## Cấu Trúc MOSFET

### Bốn Thành Phần Chính

1. **Gate (G, ゲート)**: Cổng điều khiển
   - Thường bằng polsilicon hoặc kim loại
   - Cách bề mặt bán dẫn bởi lớp oxide (~1–10 nm)
   - Điểu khiển điện thế bề mặt mà **không cần dòng điện** (dòng gate ≈ 0)

2. **Source (S, ソース)**: Nguồn carrier
   - Vùng bán dẫn nặng doping (n+ hoặc p+)
   - Cung cấp electron (n-channel) hoặc hole (p-channel)

3. **Drain (D, ドレイン)**: Thoát carrier
   - Vùng bán dẫn nặng doping (n+ hoặc p+)
   - Thu nhận electron (n-channel) hoặc hole (p-channel)
   - Thường nối tải hoặc mạch tiếp theo

4. **Bulk (Substrate, バルク)**: Nền bán dẫn
   - Loại bán dẫn mẹ (p-type cho n-channel, n-type cho p-channel)
   - Thường nối mức GND (ground)

### Lớp Oxide Cách Điện

Lớp SiO₂ (hoặc dielec cao-k như HfO₂) giữa Gate và Substrate:
- **Ngăn ngừa dòng điện trực tiếp** gate → channel (chỉ có dòng rò pA~nA)
- Cho phép **điều khiển bằng điện áp** mà **không tiêu thụ công suất** để duy trì điều khiển (khác BJT cần dòng Base liên tục)

---

## Nguyên Lý Hoạt Động

### Trạng Thái TẮT (OFF State)

**Điều kiện**: VGS < Vth (Vth: threshold voltage – điện áp ngưỡng)

- **Không có lớp đảo chiều (inversion layer)** ở bề mặt
- **Không có kênh dẫn** → Source và Drain bị cách ly
- **Dòng ID ≈ 0** (chỉ có dòng rò rất nhỏ)

### Trạng Thái BẬT (ON State)

**Điều kiện**: VGS > Vth

- **Lớp đảo chiều hình thành** ở bề mặt
- Electron (n-channel) hoặc hole (p-channel) tích tụ tạo **kênh dẫn**
- **Dòng ID chảy từ Source tới Drain** = ID = f(VGS, VDS)

---

## Ba Vùng Hoạt Động – Đặc Tính I-V

### Vùng 1: Cắt (Cutoff Region, 遮断領域)

**Điều kiện**: VGS < Vth

**Đặc tính**:
- ID ≈ 0
- Transistor **TẮT**, không dẫn điện

### Vùng 2: Tuyến Tính (Linear/Ohmic Region, 線形領域)

**Điều kiện**: VGS > Vth và VDS < VGS − Vth

**Đặc tính**:
- **ID tỷ lệ với VDS** (dòng tăng khi VDS tăng)
- Kênh vẫn "mở" trên toàn chiều dài → hoạt động như điện trở có thể kiểm soát được

**Công thức**:
$$I_D = \mu_n C_{ox} \frac{W}{L} \left[ (V_{GS} - V_{th}) V_{DS} - \frac{V_{DS}^2}{2} \right]$$

**Ứng dụng**: Analog switch, tăng giảm tín hiệu, điều khiển LED độ sáng

### Vùng 3: Bão Hòa (Saturation Region, 飽和領域)

**Điều kiện**: VGS > Vth và VDS ≥ VGS − Vth

**Đặc tính**:
- **ID gần như độc lập với VDS** (dòng giảm dần theo VDS nhưng rất chậm, từ hiệu ứng **Channel Length Modulation – CLM**)
- Hiệu ứng **Pinch-off**: kênh bị "siết chặt" gần Drain nhưng vẫn không cắt hoàn toàn
- Electron tiếp tục chảy qua vùng cạn kiệt bằng cơ chế drift mạnh

**Công thức (lý tưởng)**:
$$I_D = \frac{1}{2} \mu_n C_{ox} \frac{W}{L} (V_{GS} - V_{th})^2$$

**Công thức (có CLM)**:
$$I_D = \frac{1}{2} \mu_n C_{ox} \frac{W}{L} (V_{GS} - V_{th})^2 (1 + \lambda V_{DS})$$

(λ: channel-length modulation parameter)

**Ứng dụng**: Amplification (khuếch đại), vùng hoạt động của **tất cả mạch logic digital**

---

## Phân Loại MOSFET

### Theo Loại Carrier

| Loại | Carrier | Cực cao áp | Cực thấp áp | Tốc độ |
|---|---|---|---|---|
| **n-channel (NMOS)** | Electron | Source | Drain | Nhanh (~3× hole) |
| **p-channel (PMOS)** | Hole | Drain | Source | Chậm |

**Trong IC CMOS**: nMOS + pMOS đặt song song → logic fast, low power.

### Theo Chế Độ Mặc Định

1. **Enhancement-mode (E-mode, 空乏型)**: Vth > 0 → **thường TẮT** (VGS = 0 thì ID = 0)
   - Loại phổ biến nhất, an toàn năng lượng

2. **Depletion-mode (D-mode, 増強型)**: Vth < 0 → **thường BẬT** (VGS = 0 thì có dòng)
   - Hiếm gặp, dùng trong ứng dụng đặc biệt

---

## Các Tham Số MOSFET Quan Trọng

| Tham Số | Ký hiệu | Ý nghĩa |
|---|---|---|
| **Threshold Voltage** | Vth | Điện áp ngưỡng để hình thành kênh |
| **On-resistance** | RDS(on) | Điện trở kênh ở vùng linear (dùng để tính mất mát I²R) |
| **Gate Capacitance** | Cgs, Cgd | Tụ gate → ảnh hưởng tốc độ chuyển mạch |
| **Channel Length** | L | Khoảng cách Source-Drain (→ kích thước transistor) |
| **Channel Width** | W | Chiều rộng kênh → ảnh hưởng dòng ra (ID ∝ W/L) |
| **Aspect Ratio** | W/L | Tỷ số chiều rộng/dài kênh → điều chỉnh dòng/tốc độ |

---

## Ứng Dụng MOSFET

1. **Mạch số (Digital)**: Cổng logic, CPU, SRAM, DRAM
2. **Cảm biến ảnh (Image Sensor)**: Photodiode + MOSFET = pixel cảm biến
3. **Điều khiển công suất (Power)**:
   - LED driver
   - Motor driver
   - SMPS (Switched-Mode Power Supply)
4. **Analog**: Amplifier, multiplexer, transimpedance amplifier
5. **Bộ nhớ**: Flash memory (Floating-Gate MOSFET)

---

## Xu Hướng Phát Triển

**Scaling (Thu Nhỏ)**:
- Từ micrometer (μm) → nanometer (nm) → 10nm, 7nm, 5nm hiện tại
- Mỗi lần giảm kích thước ~30%: công suất/chip giảm ~75%, mật độ tăng
- Nhưng **hiệu ứng kênh ngắn (Short-Channel Effect)** ngày càng nghiêm trọng

**Cấu trúc mới**:
- Planar (truyền thống) → **FinFET** (kênh 3D) → **GAA** (Gate-All-Around)
