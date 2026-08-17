---
title: Quy Tắc Scaling (Dennard Scaling, デナード則)
sourceUrl: https://semi-journal.jp/basics/device/transistor/dennard-scaling.html
category: thiet-bi-ban-dan
subcategory: transistor
order: 11
flagship: false
---

## Định Nghĩa

**Dennard Scaling** (hay **Constant Electric Field Scaling**) là "**luật phát triển ngành bán dẫn được Robert Dennard (IBM) phát hiện năm 1974**, phát biểu rằng **khi thu nhỏ kích thước transistor theo hệ số k, nếu vừa lúc giảm điện áp và tăng nồng độ dopant, thì hiệu năng sẽ tăng với công suất gần như không thay đổi**".

Đây là **"con số phép màu" (magic number)** của ngành bán dẫn suốt 30 năm (1974–2002).

---

## Công Thức Scaling Dennard

Khi **giảm kích thước theo hệ số k** (k > 1, ví dụ k = 2 là giảm 1 nửa):

| Thông Số | Thay Đổi | Giải Thích |
|---|---|---|
| **Kích thước tuyến tính** (L, W, tox) | × 1/k | Chiều dài kênh, chiều rộng, độ dày oxide đều giảm k lần |
| **Điện áp cấp** (V) | × 1/k | Giảm cùng tỷ lệ để duy trì **cường độ điện trường không đổi** |
| **Nồng độ dopant** (NA, ND) | × k | Tăng k lần để duy trì "constant field" |
| **Dòng điện** (I) | × 1/k | I = σE·A; E không đổi, A giảm 1/k² → I giảm 1/k |
| **Điện áp ngưỡng** (Vth) | × 1/k | Giảm theo |
| **Tốc độ chuyển mạch** (f) | × k | Cải thiện ~k lần (tần số tăng) |
| **Công suất per chip** (P) | × 1/k² | **Giảm 1/k² → cực kỳ quan trọng!** |
| **Diện tích per transistor** (A) | × 1/k² | Giảm 1/k² |
| **Mật độ transistor** (Density) | × k² | Tăng k² → tích hợp được nhiều transistor hơn |
| **Mật độ công suất** (P/A) | × 1 | **Không đổi!** |

---

## Ví Dụ Cụ Thể: k = 2

Khi giảm kích thước transistor xuống **nửa** (k = 2):

| Tham Số | Ban Đầu | Sau Scaling |
|---|---|---|
| Kích thước tuyến tính | 1 μm | 0.5 μm |
| Điện áp | 5 V | 2.5 V |
| Dòng điện | 1 mA | 0.5 mA |
| Tốc độ | 1 GHz | 2 GHz |
| **Công suất per transistor** | 5 mW | 1.25 mW (↓75%) |
| Diện tích | 1 mm² | 0.25 mm² |
| **Mật độ transistor** | 100 triệu | 1.6 tỷ (↑16×) |
| Mật độ công suất | 5 W/mm² | 5 W/mm² (không đổi) |

**Kết luận**: với cùng diện tích chip, có thể tích hợp **gấp 4 lần transistor** với công suất giảm **75%** → siêu hữu ích!

---

## Nguyên Lý Vật Lý: Tại Sao Công Suất Giảm?

### Công Suất Động Tính (Dynamic Power)

**Công thức công suất**:
$$P = C \cdot V^2 \cdot f$$

(C: capacitance, V: điện áp, f: tần số)

Khi scaling theo k:
- C giảm ~1/k² (diện tích giảm)
- V giảm 1/k
- f tăng k

$$P_{new} = \frac{C}{k^2} \cdot \frac{V^2}{k^2} \cdot (f \cdot k) = \frac{P_0}{k^3} \approx \frac{P_0}{k^2}$$

(Giảm k² lần! Lý do k lần từ frequency bù lại một phần)

### Công Suất Rò (Leakage Power)

Phần tối dỉu:
$$I_{leak} = I_0 \cdot e^{-V_{th}/\lambda V_T}$$

Khi V giảm 1/k → leakage cũng giảm (exponentially).

---

## Sự Kết Thúc Dennard Scaling (Năm ~2002)

### Điểm Uốn: Từ 130nm trở đi

**Khoảng 2002** (khi công nghệ xuống 130nm, 90nm):

1. **Dòng rò (Leakage Current) tăng vũ bão**:
   - Điện áp ngưỡng Vth bị **giảm xuống quá thấp** để duy trì tốc độ
   - Subthreshold leakage: $I_{leak} \propto 10^{-(V_{th}/nV_T)}$ → tăng exponentially
   - Dòng rò có thể bằng dòng hoạt động → công suất không giảm nữa

2. **Không thể giảm điện áp thêm**:
   - Scaling công thức yêu cầu giảm V → V quá thấp → mất hiệu ứng digital
   - Chip không hoạt động được

3. **Mật độ công suất bất ngờ tăng lên** (Heat Density):
   - Chip phát nóng → cần tản nhiệt tốt hơn
   - Tiêu thụ pin tăng
   - Các ứng dụng mobile sắp gặp vấn đề

### Biểu Hiện Cụ Thể

**Khi CPU:**
- **2002**: Pentium 4 tần số 3 GHz nhưng phát nóng ghê gớm
- **Sau 2005**: Intel, AMD phải dừng tăng tần số đơn lõi → chuyển sang **multi-core**

---

## Hậu Quả: Từ Moore's Law Tới Thời Đại Multi-core

### Một Thời Kỳ Vàng (1974–2002)

**Mỗi 2 năm**:
- Giảm kích thước theo hệ số ~1.4
- Tần số tăng ~1.4 lần (Moore's Law + Dennard Scaling)
- **Tốc độ CPU tăng gấp đôi hơn** → chương trình chạy nhanh hơn tự nhiên
- Công suất gần như không đổi

**Lập trình viên**: không cần tối ưu hóa gì, chỉ cần viết code → tự chạy nhanh hơn 2 năm sau!

### Thời Kỳ Hiện Đại (2002–Hiện Tại)

**Tidak thể tăng tần số đơn lõi** → ngành chuyển sang:

1. **Multi-core (Đa lõi)**:
   - Thay vì 1 lõi 3 GHz, dùng 4–8–16 lõi ở 2 GHz
   - Song song hóa xử lý → hiệu suất tăng

2. **Kiến trúc chuyên biệt (Specialization)**:
   - GPU (Graphics Processing Unit) cho xử lý song song
   - AI/ML accelerators (TPU, NPU) cho deep learning
   - Codec chuyên dụng cho video/audio

3. **Tối ưu hóa firmware/thuật toán**:
   - Không thể dựa vào hardware tự động tăng tốc
   - Phải viết code thông minh hơn

---

## Công Thức Cuối Cùng: Lý Thuyết vs Thực Tế

### Lý Thuyết Dennard (Ideal)
$$P \propto \frac{1}{k^2} \quad, \quad f \propto k$$
- Công suất giảm, tốc độ tăng

### Thực Tế (Với Leakage)
$$P \propto \frac{1}{k^2} + P_{leak} \cdot (1 + \alpha)$$
- Khi tới kỹ thuật 90nm–65nm, dòng rò = công suất động
- Khi tới 32nm–22nm, dòng rò > công suất động
- **Định luật đã "chết"**

---

## Đáp Lại Thách Thức

**Các hướng đi hiện tại**:

1. **FinFET / Gate-All-Around**: tăng kiểm soát Vth → giảm leakage
2. **Bán dẫn Wide-Bandgap (SiC, GaN)**: dứt khoát cho công suất cao (EV)
3. **Kiến trúc mới**: Chiplet, 3D stacking (HBM)
4. **Quy trình Extreme UV (EUV)**: từ ArF 193nm → 13.5nm → tối ưu
