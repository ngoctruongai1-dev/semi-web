---
title: Quy Tắc Scaling và Sự Kết Thúc Của Nó
sourceUrl: https://semi-journal.jp/basics/market-knowledge/scaling.html
category: kien-thuc-nganh
order: 3
flagship: false
---

## Định Nghĩa Scaling

**Scaling** là một **quy tắc thiết kế transistor** cho rằng "**khi thu nhỏ kích thước transistor xuống 1/k lần, điện áp, dòng điện, và các thông số khác cũng giảm theo tỷ lệ, sao cho hiệu suất tăng mà không tăng công suất tiêu thụ**".

Nó là **cơ sở vật lý của Định Luật Moore** − mà không có scaling, Moore's Law không thể duy trì được 60 năm.

## Dennard Scaling (1974)

### Người Đề Xuất

**Robert Dennard** (IBM, 1974) − nhà khoa học huyền thoại.

### Nguyên Tắc Cơ Bản

Khi thu nhỏ kích thước transistor một chiều dài **L** xuống **1/k**:

**Các Thông Số Thay Đổi**:

```
Chiều dài (L)         → L/k
Chiều rộng (W)        → W/k
Độ dày (T)            → T/k
Điện áp (V)           → V/k
Dòng điện (I)         → I/k
Dung lượng (C)        → C/k
Tần số xung nhịp (f)  → f×k  (nhanh hơn k lần!)
Công suất (P)         → P/k²  (giảm k² lần!)
Mật độ công suất      → Không đổi
```

### Ví Dụ Với k=2 (Thu Nhỏ Một Nửa)

Khi thu nhỏ tất cả kích thước xuống 1/2:

- **Diện tích transistor**: giảm 1/4 (1/2 × 1/2).
- **Dung lượng gate**: giảm 1/2.
- **Công suất/transistor**: giảm 1/4.
- **Mật độ transistor**: tăng 4 lần (ngược lại diện tích).
- **Tổng công suất chip**: (1/4 × 4) = **1 × công suất cũ** (không đổi).
- **Tần số xung nhịp**: tăng 2 lần → **tốc độ nhanh gấp 2 lần**.

### Kết Quả Đáng Kinh Ngạc

**"Bạn có cả lợi:" Tốc độ tăng mà công suất không tăng!**

- **Hiệu năng**: gấp 2 lần.
- **Công suất chip**: không đổi.
- **Mật độ công suất**: không đổi.
- **Chi phí/transistor**: giảm.

Đây chính là **"golden age" của ngành bán dẫn** (1975–2002) − mỗi 2 năm:
- CPU nhanh gấp 2 lần.
- Dân số transistor tăng 4 lần.
- Giá không tăng.
- Điện năng tiêu thụ không tăng.

## Yêu Cầu Scaling

Để scaling hoạt động, phải giảm **điện áp nguồn (Vdd)** theo k. Nhưng:

- **Điện áp ngưỡng (Vth)** của transistor gần như **không thể giảm quá nhiều**.
- Nếu Vth quá cao so với Vdd → **tỷ lệ V/Vth giảm** → khó kiểm soát transistor.
- **Kết quả**: Vth phải giảm cùng với Vdd, nhưng **giảm hạn chế** = không tuân theo quy tắc Dennard hoàn hảo.

## Sự Sụp Đổ: Leakage Current Crisis (2000–2005)

### Vấn Đề: Dòng Rò Tăng Vô Kiểm

Khi **Vth giảm xuống quá thấp** (để fitting scaling):

```
Leakage Current ∝ exp(-Vth / n·Vt)
```

**Ý Nghĩa**: dòng rò **tăng theo hàm số mũ** khi Vth giảm.

**Ví Dụ Thực Tế**:
- **Pentium III (180 nm, 2000)**: leakage = ~10 W.
- **Pentium 4 (90 nm, 2004)**: leakage = ~70 W.
- **Từ 180nm → 90nm (5 năm)**: leakage tăng **7 lần** mặc dù công suất động (switching) chỉ tăng 3 lần!

### Kết Quả: Mất Mát Công Suất Hổn Hợp

**Trước**: công suất chủ yếu từ switching (công suất động).

**Sau**: công suất phân chia giữa:
- **Công suất động** (switching): từ việc thay đổi trạng thái.
- **Công suất tĩnh (leakage)**: từ dòng rò, không phụ thuộc hoạt động.

**Vấn đề**: ngay cả khi transistor **"idle" (không làm gì)**, nó vẫn tiêu thụ điện năng → tảo hỏa tăng → cần tản nhiệt lớn.

### Giới Hạn Điện Áp

Đến **65 nm (2006)**, công suất rò **gần bằng** công suất động:

```
P_total = P_dynamic + P_leakage ≈ 2 × P_dynamic
```

Không thể giảm Vdd hơn nữa mà vẫn duy trì Vth hợp lý → **Dennard Scaling kết thúc**.

## Bằng Chứng: Đồ Thị Tần Số CPU

### Trước Sự Sụp Đổ (1970–2002)

```
Tần Số (GHz)
     |
  4  |          ★ (Pentium 4, 3.8 GHz, 2004)
  3  |      ★
  2  |    ★
  1  |  ★
  0  |★
     |_________________ Năm
    1975   1985   1995   2005   2015   2025
```

**Xu Hướng**: lên thẳng, exponential.

### Sau Sự Sụp Đổ (2005–2025)

```
Tần Số (GHz)
     |
  6  |          ================================
  5  |          ★ (Plateau − nằm ngang)
  4  |      ★★★
  3  |    ★
  2  |  ★
  1  |★
  0  |
     |_________________ Năm
    1975   1985   1995   2005   2015   2025
```

**Xu Hướng**: từ 2005 trở đi, tần số **gần như dừng tăng** − chỉ dao động 3–6 GHz, không tăng thêm như trước.

## Giải Pháp: Hậu Dennard

Khi Dennard Scaling kết thúc (~2006), ngành bán dẫn chuyển sang các chiến lược mới:

### 1. Multi-Core Architecture

- Thay vì tăng tốc độ 1 lõi → **tăng số lõi**.
- **Ví dụ**: 
  - Pentium 4: 1 lõi, 3.8 GHz.
  - Core i7 (2010): 4 lõi, 3.3 GHz.
  - EPYC (2023): 128 lõi, 3.5 GHz.
- **Hiệu năng tăng** từ song song processing, không phải tần số.

### 2. Architecture Optimization

- **Branch prediction, cache hierarchy, instruction-level parallelism** → tối ưu hóa không phải từ transistor mà từ logic.
- Hiệu quả per-cycle tăng lên (giữ nguyên tần số).

### 3. Specialized Processors

- GPU, ASIC, AI accelerators.
- Không phải "general-purpose" mà "optimized for task".

### 4. FinFET & 3D Transistor

Để tiếp tục scaling không bị leakage:

- **Planar MOSFET (2D)**: mặt trên bị leakage từ gate độc lập.
- **FinFET (2010)**: kênh được keo 3 mặt bởi cổng → kiểm soát leakage tốt hơn → có thể tiếp tục giảm Vth.
- **Gate-All-Around (2023)**: cổng bao quanh hoàn toàn kênh → kiểm soát tốt nhất.

**Mục đích**: "tiếp tục scaling" từng phần bằng **cách kiểm soát leakage tốt hơn**, không phải theo Dennard hoàn hảo.

### 5. Power Management Techniques

- **DVFS (Dynamic Voltage and Frequency Scaling)**: điều chỉnh điện áp/tần số theo tác vụ.
- **Power Gating**: tắt các phần chip không dùng để tiết kiệm leakage.
- **Heterogeneous Cores**: mix big cores + little cores (ARM big.LITTLE).

## Sự Khác Biệt: Moore's Law vs Dennard Scaling

| Tiêu Chí | Moore's Law | Dennard Scaling |
|---|---|---|
| **Định Nghĩa** | Số transistor tăng gấp 2 mỗi 2 năm | Hiệu năng tăng, công suất không tăng khi scaling |
| **Tình Trạng** | Vẫn đúng (transistor vẫn tăng) | Kết thúc (~2006) |
| **Bằng Chứng** | Chip transistor: 10 tỷ (2020) vs 42 triệu (2000) | Tần số CPU: 3.8 GHz (2004) vs 5 GHz (2024) |
| **Tác Động** | Vẫn sản sinh lợi nhuận từ transistor nhiều hơn | Lợi nhuận từ hiệu năng/watt, không phải tần số |

## Kết Luận

**Dennard Scaling là "nước thần" của ngành bán dẫn từ 1974 đến 2006** − nó cho phép:
- Tốc độ tăng exponential.
- Điện năng = không đổi.
- Chi phí giảm.

**Nhưng không gì là vĩnh cửu**. Khi **leakage current vượt qua ngưỡng**, Dennard Scaling không còn hoạt động. Ngành phải **"reinvent itself"** bằng multi-core, specialized processors, power management, và architecture optimization.

**Bài học**: Công nghệ không bao giờ có thể tăng trưởng exponential mãi mãi. Luôn có một **bức tường vật lý** nào đó. Câu hỏi là: **khi bức tường xuất hiện, bạn làm gì tiếp theo?** Ngành bán dẫn đã trả lời một cách khéo léo − không từ bỏ scaling mà chuyển sang **"scaling khác"** (chiplet, 3D, multi-core, specialized).
