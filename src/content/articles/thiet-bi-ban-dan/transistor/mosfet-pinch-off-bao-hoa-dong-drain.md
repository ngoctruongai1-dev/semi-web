---
title: MOSFET Pinch-off, Bão Hòa, và Dòng Drain (Saturation Region)
sourceUrl: https://semi-journal.jp/basics/device/transistor/pinchoff.html
category: thiet-bi-ban-dan
subcategory: transistor
order: 10
flagship: false
---

## Định Nghĩa Pinch-off

**Pinch-off** (ピンチオフ) là "**hiện tượng kênh dẫn (inversion layer) bị 'siết chặt' gần Drain khi điện áp Drain (VDS) tăng quá cao**".

**Điểm Pinch-off Voltage (Vp)**:
- Vp là điện áp VDS lúc kênh **bắt đầu bị siết chặt (channel narrowing)** gần Drain
- Vp = VGS − Vth (điện áp khiến kênh sắp biến mất tại Drain)

**Ý nghĩa**: Pinch-off là **biên giới giữa vùng Linear và vùng Saturation** của MOSFET.

---

## Lý Do Kênh Bị Siết Chặt

### Phân Tích Vùng Gần Drain

Khi VDS tăng:

1. **Điện áp local tại Drain tăng**: điểm Drain có điện thế cao hơn Source
2. **Vùng cạn kiệt giữa Channel-Drain mở rộng**: do chênh lệch điện thế cục bộ (VGate − VDrain) giảm xuống
3. **Kênh bị hẹp lại ở Drain**: vùng cạn kiệt "gặp" kênh ngược lại, làm cho kênh hẹp
4. **Tại Vp = VGS − Vth**: kênh gần như biến mất tại điểm Drain

### Biểu Diễn Công Thức

Tại bất kỳ vị trí nào dọc theo kênh (khoảng cách y từ Source):
$$V_{channel}(y) = V_{GS} - V_{th} - V(y)$$

(V(y): điện thế local tại vị trí y)

Kênh **biến mất (pinch-off)** khi:
$$V_{channel}(y_{pinch}) = 0$$
$$\Rightarrow V(y_{pinch}) = V_{GS} - V_{th}$$

Khi VDS đủ lớn, điểm pinch-off nằm ở Drain:
$$V_{DS} = V_p = V_{GS} - V_{th}$$

---

## Bốn Điểm Quan Trọng Về Dòng Điện Sau Pinch-off

### 1. **Dòng Điện KHÔNG Bị Cắt Hoàn Toàn**

Mặc dù kênh bị siết chặt (channel narrowing) ở Drain, **dòng điện vẫn tiếp tục chảy**. Lý do:

- Electron từ Source tiếp tục được **tiêm vào** kênh (do VGS vẫn dương)
- Ở vùng Drain (pinch-off), điện trường **vô cùng mạnh**
- Electron bị **gia tốc mạnh** qua vùng hẹp → vẫn chạy tới Drain

### 2. **Vùng Saturation Region Hình Thành**

Khi VDS ≥ Vp:
- **Channel length modulation**: kênh bị ngắn đi do vùng pinch-off mở rộng
- Dòng ID giảm dần theo (1 + λVDS) thay vì tăng tuyến tính như vùng Linear
- **Slope của I-V curve rất mỏng** (gần như ngang)

### 3. **Dòng Drain Bão Hòa**

**Công thức dòng bão hòa (Saturation)**:

Lý tưởng (không có CLM):
$$I_{D,sat} = \frac{1}{2} \mu_n C_{ox} \frac{W}{L} (V_{GS} - V_{th})^2$$

Thực tế (có Channel Length Modulation):
$$I_{D,sat} = \frac{1}{2} \mu_n C_{ox} \frac{W}{L} (V_{GS} - V_{th})^2 (1 + \lambda V_{DS})$$

**Ý nghĩa**:
- Dòng **phụ thuộc vào (VGS − Vth)² chứ không phụ thuộc vào VDS** (ngoài hiệu ứng λ)
- Transistor hoạt động như **nguồn dòng được điều khiển bởi VGS**
- Rất hữu ích cho **amplification** (khuếch đại tín hiệu nhỏ)

### 4. **Channel-Length Modulation (λ)**

**CLM Parameter (λ)**: 
- Đơn vị: V⁻¹
- Ý nghĩa: mỗi 1V tăng VDS → dòng tăng thêm λ×ID(nominal) (%)
- Giá trị tiêu biểu: 0.01–0.1 V⁻¹ (tùy công nghệ)

**Hiệu ứng**:
- Vùng pinch-off mở rộng → chiều dài kênh hiệu dụng **L' = L − ΔL(VDS)** giảm
- Dòng tăng ngoài vùng Linear vì L' giảm:
$$I_{D,sat}(V_{DS}) = I_{D0} (1 + \lambda V_{DS})$$

---

## Ba Vùng I-V Chi Tiết

| Vùng | Điều Kiện | Công Thức ID | Đặc Điểm |
|---|---|---|---|
| **Cutoff** | VGS < Vth | ID ≈ 0 | Không có kênh |
| **Linear** | VGS > Vth, VDS < Vp | $ID = \mu_n C_{ox} \frac{W}{L}[(VGS−Vth)VDS − \frac{VDS^2}{2}]$ | ID ∝ VDS (như R thay đổi) |
| **Saturation** | VGS > Vth, VDS ≥ Vp | $ID = \frac{1}{2}\mu_n C_{ox} \frac{W}{L}(VGS−Vth)^2(1+\lambda VDS)$ | ID gần độc lập VDS (như nguồn dòng) |

---

## Ứng Dụng Thực Tế

### 1. **Vùng Linear: Điều Khiển Tín Hiệu Analog**
- **Analog switch**: transistor làm điện trở thay đổi
- **Điều khiển ánh sáng LED**: nạp/xả dòng để điều chỉnh độ sáng
- **Tích hợp tín hiệu nhỏ** trên substrate

### 2. **Vùng Saturation: Khuếch Đại & Logic Digital**
- **Amplifier**: dòng ra **độc lập với VDS** → không bị "non-linear distortion"
- **Digital Logic**: transistor **On/Off rõ ràng**
  - On: VGS cao → ID lớn, "nối" đầu ra tới GND/VDD
  - Off: VGS thấp → ID ≈ 0, "ngắt"
- **Vùng saturation đảm bảo ổn định**

### 3. **Biên Giới VDS = Vp: Chuyển Tiếp**
- Vị trí từ từ chuyển từ tuyến tính sang bão hòa
- Cách nhằm "linear region" → tốc độ nhanh nhưng độ lợi nhức
- Cách nhằm "saturation" → độ lợi ổn định nhưng chậm hơn

---

## Công Thức Transconductance (Gm) – Độ Lợi

**Transconductance** (先導率): đạo hàm của dòng theo điện áp cấu:

**Vùng Linear**:
$$g_m = \frac{\partial I_D}{\partial V_{GS}} = \mu_n C_{ox} \frac{W}{L} V_{DS}$$

**Vùng Saturation**:
$$g_m = \frac{\partial I_D}{\partial V_{GS}} = \mu_n C_{ox} \frac{W}{L} (V_{GS} - V_{th})$$

**Ý nghĩa**: gm cao → tín hiệu vào nhỏ thì dòng ra thay đổi nhiều (khuếch đại cao).
