---
title: Tại Sao CMOS Tiêu Thụ Điện Năng Cực Thấp?
sourceUrl: https://semi-journal.jp/basics/device/transistor/energy.html
category: thiet-bi-ban-dan
subcategory: transistor
order: 15
flagship: false
---

## Nguyên Lý Cốt Lõi

**Lý Do Chính**: "**Ở cả hai trạng thái (0 hoặc 1), VDD và GND KHÔNG BẠO NỐI TRỰC TIẾP với nhau thông qua transistor, mà chỉ một đường dẫn được kích hoạt – đường dẫn kia hoàn toàn TẮT**".

Điều này khác biệt hoàn toàn so với các công nghệ cũ (Pseudo-NMOS, DTL), nơi có một **"con đường nước chảy liên tục" từ VDD tới GND** ngay cả khi chỉnh lưu đầu ra.

---

## So Sánh Chi Tiết: CMOS vs Pseudo-NMOS vs DTL

### 1. Pseudo-NMOS Inverter (Cũ)

**Cấu Trúc**:
```
      Vdd
       |
      (R) ← Pull-up resistor (đơn vị MΩ)
       |
    ---|--- Output A
       |
      (N) ← nMOSFET (dùng để kéo xuống)
       |
      GND
```

**Hoạt Động Khi A = 0 (Logic 0)**:
- nMOS **OFF** → không kéo xuống
- **Resistor R cung cấp dòng liên tục**: I = (Vdd − VOH)/R
- Dòng này chảy qua resistor **liên tục**, tạo **công suất P = I²×R = (Vdd − VOH)²/R**
- VOH ở mức cao (gần Vdd) nhưng không bằng Vdd đúng (do rơi điện áp trên R)

**Hoạt Động Khi A = 1 (Logic 1)**:
- nMOS **ON** → kéo A xuống GND
- **nMOS cạnh tranh với resistor R** ← "fight"
- nMOS giành thắng nhưng **resistor vẫn tiêu thụ công suất**: P = Vdd²/R (nếu nMOS lý tưởng)

**Vấn Đề Chính**: 
- Công suất tiêu thụ **KHÔNG PHỤ THUỘC TẦN số** (P ∝ 1/R là cố định)
- Ngay cả khi không chuyển trạng thái, resistor vẫn nóng lên!

**Ví Dụ Cụ Thể**:
- R = 1 MΩ, Vdd = 5V
- P = 5²/1M = 25 μW **liên tục** (xấu cho pin!)

### 2. DTL / TTL Inverter (Cũ Hơn Nữa)

**Cấu Trúc**: Dùng diode + resistor kéo lên

**Vấn Đề**: Dòng resistor kéo lên vẫn chảy liên tục → tiêu thụ cao

### 3. CMOS Inverter (Hiện Đại)

**Cấu Trúc**:
```
      Vdd
       |
      (P) ← pMOSFET (pull-up, dẫn khi Vin = 0)
       |
    ---|--- Output A
       |
      (N) ← nMOSFET (pull-down, dẫn khi Vin = 1)
       |
      GND
```

**Hoạt Động Khi A = 0**:
- pMOS: **ON** → kéo A lên Vdd (dòng từ Vdd)
- nMOS: **OFF** → không kéo xuống
- **Output A = Vdd** (đầy đủ, không rơi)
- **Dòng qua pMOS chỉ tồn tại thời gian kê tụ output** (nanosecond)

**Hoạt Động Khi A = 1**:
- pMOS: **OFF** → không kéo lên
- nMOS: **ON** → kéo A xuống GND
- **Output A = 0** (đầy đủ)
- **Dòng qua nMOS chỉ tồn tại thời gian xả tụ output** (nanosecond)

**Trạng Thái Tĩnh (Static)**:
- pMOS OFF → nMOS ON: dòng từ Vdd **gián đoạn ngay ở cầu nMOS, không chạy sang GND**
- nMOS ON → pMOS OFF: tương tự

---

## Công Thức Công Suất Chi Tiết

### Công Suất Pseudo-NMOS

**Công suất tĩnh** (independent of frequency):
$$P_{static} = \frac{V_{dd}^2}{R}$$

**Ví dụ**: R = 1 MΩ, Vdd = 5V
- P = 25 μW liên tục (điều này rất xấu!)

### Công Suất CMOS

**Công suất chỉ phát sinh khi chuyển trạng thái (Switching Power)**:
$$P_{switching} = C \cdot V_{dd}^2 \cdot f \cdot \alpha$$

(C: capacitance tại node, Vdd: điện áp, f: tần số, α: activity factor)

**Công suất rò (Leakage Power)**:
$$P_{leakage} = I_{leak} \cdot V_{dd}$$

(Ileakage: rất nhỏ nanoampere, phụ thuộc công nghệ)

**Tổng công suất CMOS**:
$$P_{total,CMOS} = C \cdot V_{dd}^2 \cdot f \cdot \alpha + I_{leak} \cdot V_{dd}$$

**Quan sát**:
- Nếu tần số **f = 0** (chip tắt) → P = 0 (chỉ rò)
- Nếu f cao → công suất tăng tỷ lệ **linear với f**
- Nếu Vdd giảm 50% → công suất giảm **75%** (V² coefficient)

---

## Ví Dụ So Sánh Định Lượng

**Giả sử**:
- Pseudo-NMOS: R = 1 MΩ, C = 10 pF, Vdd = 5V, f = 100 MHz
- CMOS: R_eq không tồn tại, C = 10 pF, Vdd = 5V, f = 100 MHz, α = 30%

### Pseudo-NMOS

**Static power**:
$$P_{static} = \frac{5^2}{10^6} = 25 \mu W$$

**Dynamic power** (chỉ khi chuyển trạng thái):
$$P_{dynamic} = 10 \times 10^{-12} \times 5^2 \times 100 \times 10^6 \times 0.3 = 75 \mu W$$

**Tổng**: 100 μW

### CMOS

**Dynamic power** (chỉ khi có chuyển trạng thái):
$$P_{dynamic} = 10 \times 10^{-12} \times 5^2 \times 100 \times 10^6 \times 0.3 = 75 \mu W$$

**Leakage** (siêu nhỏ, bỏ qua ở công nghệ 90nm trở lên):
$$P_{leakage} \approx 1 \mu W$$

**Tổng**: ~76 μW (**giảm 24% so với Pseudo-NMOS**)

**Lưu ý**: Khi tần số cao hơn hoặc logic phức tạp hơn, chiến thắng của CMOS rõ ràng hơn nhiều (100–1000×).

---

## Tại Sao CMOS Lợi Thế

### 1. **Không Có "Current Path" Liên Tục**

**Pseudo-NMOS**: 
```
VDD ← R ← Output ← nMOS ← GND  (đường này LUÔN TỒN TẠI khi Output = 1)
```

**CMOS**:
```
VDD ← (pMOS TẮT) ← Output ← (nMOS ON) ← GND  (bị ngắt ở pMOS!)
```

### 2. **Chỉ Tiêu Thụ Khi Chuyển Trạng Thái**

- **Sạc tụ output** từ 0→Vdd: nạp điện qua pMOS
- **Xả tụ output** từ Vdd→0: xả qua nMOS
- Quá trình này diễn ra trong **nanosecond** (rất ngắn)
- Tổng công suất = (tần số chuyển) × (năng lượng/chuyển)

### 3. **Năng Lượng/Chuyển Độc Lập Công Suất**

Năng lượng cần để nạp tụ từ 0→Vdd:
$$E = C \cdot V_{dd}^2$$

Công suất = Năng lượng × Tần số:
$$P = E \cdot f = C \cdot V_{dd}^2 \cdot f$$

Nếu f giảm 50% → P giảm 50% (tuyến tính) ✓ Có thể tiêu chỉnh!

---

## Chiến Lược Tối Ưu Hóa Công Suất CMOS

### 1. **Giảm Vdd (Voltage Scaling)**
- Giảm Vdd từ 5V → 3.3V → 1.8V → 1.2V
- Công suất giảm V² → **rất hiệu quả**
- Nhưng tần số giảm (do tốc độ chậm hơn)

### 2. **Giảm f (Frequency Scaling)**
- Giảm tần số CPU khi không cần tốc độ (ví dụ: khi chạy email)
- Power Management: Dynamic Voltage and Frequency Scaling (DVFS)

### 3. **Giảm α (Activity Factor)**
- Tắt module không dùng (**power gating**)
- Dùng clock gating để ngừng xung nhịp ở những khối không hoạt động

### 4. **Giảm C (Capacitance)**
- Giảm kích thước transistor
- Giảm độ dài dây dẫn (routing optimization)

### 5. **Leakage Reduction** (ở công nghệ nhỏ)
- Chọn transistor **high-Vth (cao ngưỡng)** ở vùng non-critical
- Dùng **body biasing** để điều chỉnh Vth

---

## Hậu Quả Thực Tế

**CMOS là lý do tại sao**:
1. **Mobile devices (smartphone)** có thể hoạt động được (tiêu thụ <10W)
2. **CPU hiện đại** chứa 100 tỷ transistor mà không phát nóng (với tản nhiệt)
3. **IoT devices** chạy được tháng/năm trên pin nhỏ

Nếu dùng Pseudo-NMOS, **một smartphone sẽ tiêu thụ ~100W** (hot như lò nướng) → hoàn toàn không khả thi!

---

## Xu Hướng Hiện Đại: Leakage Power Ngày Càng Lớn

**Vấn đề**: Ở công nghệ 22nm và nhỏ hơn:
- Dòng rò subthreshold tăng exponential
- **Leakage Power có thể = Dynamic Power** (mỗi ~50W cho CPU)
- Thách thức thiết kế: giảm dòng rò mà vẫn giữ tốc độ

**Giải pháp**:
- FinFET/GAA: kiểm soát dòng rò tốt hơn
- Power domain isolation: chia chip thành các miền, tắt các miền không dùng
- "Back biasing": chủ động tăng Vth ở vùng leaky để cắt giảm dòng rò
