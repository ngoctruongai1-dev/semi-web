---
title: Sản Xuất Đơn Tinh Thể Silicon – Phương Pháp CZ và FZ (単結晶シリコン製造)
sourceUrl: https://semi-journal.jp/basics/si-chem/cz-fz.html
category: khoa-hoc-silicon
order: 4
flagship: false
---

## Tổng Quan

**Đơn tinh thể Silicon (monocrystalline silicon, 単結晶シリコン)** là Silicon ở dạng **một tinh thể duy nhất** có cấu trúc tinh thể đồng nhất theo toàn bộ thể tích. Đây là **nguyên liệu chính** để sản xuất wafer silicon dùng trong IC bán dẫn.

Có **hai phương pháp chính** để tạo đơn tinh thể từ polysilicon:
1. **CZ (Czochralski Method)** – phương pháp kéo tinh
2. **FZ (Floating Zone Method)** – phương pháp vùng nổi

## Phương Pháp CZ (Czochralski, チョクラルスキー法)

### Nguyên Tắc

Trong phương pháp CZ:
- **Polysilicon** được cho vào **lò nóng chảy (crucible)** làm từ quartz (SiO₂)
- Silicon được nung nóng tới **~1420°C** (trên điểm nóng chảy của Si là 1414°C) → **nóng chảy**
- Một **hạt giống (seed crystal, シード)** được nhúng vào bề mặt nóng chảy
- Hạt giống được **kéo lên từ từ** (một vài mm/phút) trong môi trường có kiểm soát
- Silicon từ nóng chảy **kết tinh lên hạt giống** → tạo thành đơn tinh thể ngày càng lớn

### 5 Giai Đoạn Tăng Trưởng

#### 1. **Seeding (Cấy Hạt)**
- Hạt giống (đường kính nhỏ, ~1-2mm, hướng {100} hoặc {111}) được hạ xuống chạm mặt nóng chảy
- Một lượng nhỏ Silicon kết tinh trên hạt → "nối" thành một khối lớn

#### 2. **Necking (Cổ Hẹp)**
- Khi hạt vừa được chạm, quá trình tăng trưởng chưa ổn định
- Có **chuyển vị (dislocation, 転位)** từ hạt giống được mang vào
- Để **loại bỏ chuyển vị này**, đường kính được **giảm ý định** – kéo rất chậm, để thành phần "mỏng cổ" (~5mm đường kính)
- Chuyển vị từ hạt giống không thể tuân theo cột silicon mỏng → bị loại bỏ khi đường kính tăng
- Giai đoạn này kéo dài **~30 phút**

#### 3. **Cone (Nón)**
- Sau necking, đường kính **từ từ tăng** từ ~5mm lên đường kính mục tiêu (ví dụ 300mm)
- Hình dạng tạo thành gần giống **hình nón** (cone)
- Kiểm soát tốc độ kéo + nhiệt độ để đường kính tăng đều
- Thời gian: **30-60 phút**

#### 4. **Body (Thân)**
- Đường kính đã đạt mục tiêu (~300mm), **giữ nguyên** trong thời gian dài
- Kéo với tốc độ ổn định, kiểm soát nhiệt độ + tốc độ quay rất chính xác
- Đây là **phần chính** của thỏi ingot, kéo dài hàng giờ (có thể 4-8 giờ hoặc lâu hơn)
- Độ dầy của phần body quyết định **số lượng wafer** có thể cắt ra

#### 5. **Tail (Đuôi)**
- Khi nóng chảy **gần hết**, đường kính **từ từ giảm** để tách thỏi ingot khỏi nóng chảy
- Tạo thành hình "đuôi" nhỏ dần
- Sau đó **tắt nguồn nhiệt**, cho phép thỏi **nguội dần**

### Ưu Điểm Của CZ

| Ưu Điểm | Chi Tiết |
|---|---|
| **Đường kính lớn** | Có thể sản xuất đơn tinh thể đường kính tới 300mm (ngay cả 450mm thử nghiệm) |
| **Tốc độ nhanh** | Mỗi thỏi ~8-12 giờ |
| **Chi phí thấp** | So với FZ, chi phí sản xuất CZ thấp hơn nhiều |
| **Độ bền cơ học** | Oxy hòa tan trong Si → cứng cáp, chịu ứng suất tốt |
| **Công suất cao** | Có thể sản xuất hàng tấn/năm |

### Nhược Điểm Của CZ

| Nhược Điểm | Chi Tiết |
|---|---|
| **Hàm lượng Oxy cao** | Từ crucible quartz → ~10¹⁷-10¹⁸ nguyên tử O/cm³ |
| **Oxide Precipitate** | Oxy dư → tạo kết tụ SiO₂ → hỏng thiết bị |
| **Khuyết tật COP** | Coil-shaped voids hình thành |

## Phương Pháp FZ (Floating Zone, フローティングゾーン法)

### Nguyên Tắc

Trong phương pháp FZ:
- **Thanh polysilicon dài** được đặt thẳng đứng, không dùng crucible
- **Vòng nóng (RF coil – bộ khuyếch đại RF)** được sử dụng để nung nóng một **vùng hẹp** của thanh
- Vùng nung nóng này chuyển động **từ dưới lên trên** với tốc độ kiểm soát
- Polysilicon trong vùng được **nóng chảy một phần**
- Khi vùng nóng chuyển động, Silicon lạnh dưới → nóng chảy → đơn tinh thể hình thành

### Ưu Điểm Của FZ

| Ưu Điểm | Chi Tiết |
|---|---|
| **Độ tinh khiết cực cao** | **~10¹⁶ atom O/cm³ hoặc thấp hơn** – ít oxy hơn CZ 100-1000 lần |
| **Không dùng crucible** | Không có ô nhiễm từ quartz |
| **Không COP** | Không có coil voids |
| **Độ bền điện** | Tính chất điện ổn định hơn |

### Nhược Điểm Của FZ

| Nhược Điểm | Chi Tiết |
|---|---|
| **Đường kính nhỏ** | Khó tạo đường kính lớn (thường chỉ ~100mm, tối đa ~150mm) |
| **Chi phí cao** | Thiết bị phức tạp, hiệu suất thấp |
| **Độ bền cơ học kém** | Ít oxy → không đủ "cứng cáp" |
| **Tốc độ chậm** | Mỗi thỏi ~20-30 giờ |
| **Sản lượng thấp** | Không thể sản xuất hàng loạt hiệu quả |

## So Sánh CZ vs FZ – Bảng Chi Tiết

| Tiêu Chí | CZ (Czochralski) | FZ (Floating Zone) |
|---|---|---|
| **Độ Tinh Khiết** | 10¹⁷-10¹⁸ O/cm³ | <10¹⁶ O/cm³ |
| **Đường Kính** | 100-300mm (thử ~450mm) | 50-150mm |
| **Thời Gian/Thỏi** | 8-12 giờ | 20-30 giờ |
| **Chi Phí Thiết Bị** | Thấp (~$1-3M) | Cao (~$5-10M) |
| **Chi Phí Sản Xuất/kg** | Thấp (~$50-100) | Cao (~$200-500) |
| **Độ Bền Cơ Học** | Cao (có oxy) | Thấp (ít oxy) |
| **Khuyết Tật COP** | Có | Không |
| **Ứng Dụng** | Logic, Memory, Analog | Analog, Power, RF (đặc biệt) |

## Sử Dụng Thực Tế Trong Công Nghiệp

### CZ Chiếm Ưu Thế Tuyệt Đối

**Năm 2020s**:
- **Hơn 95%** đơn tinh thể Silicon dùng **CZ**
- **Lý do chính**: Giá rẻ, đường kính lớn, độ bền cơ học tốt

**Ứng Dụng CZ**:
- **IC Logic** (CPU, GPU): Hầu hết dùng CZ (100) hoặc (111)
- **DRAM, Flash Memory**: CZ
- **Analog, Power Devices**: CZ thường xuyên

### FZ – Niche Market

**Khi nào dùng FZ**:
- **RF Devices (GaAs, GaN...)**: FZ độ tinh khiết cao giúp performance RF tốt
- **Một số Analog/Power** yêu cầu độ tinh khiết cực cao
- **Tinh thể V/G mặt trời** (ít dùng vì đắt)

**Tỷ lệ FZ**: Chỉ ~5% đơn tinh thể toàn cầu

## Oxy Trong CZ – Ảnh Hưởng Đôi Chiều

### Lợi Ích Của Oxy

- **Cứng cáp cơ học** – Si-O liên kết mạnh
- **Độ bền ứng suất** – chịu được áp suất, va chạm trong gia công
- **Gettering nội tại (Internal Gettering)** – oxide precipitate bẫy kim loại nặng

### Hại Của Oxy Dư

- **Oxide Precipitate** – kết tụ SiO₂ lớn → giảm lifetime, tăng leakage
- **Cần xử lý nhiệt** – Donor Killer Annealing để loại bỏ

## Kết Luận

**CZ là phương pháp chủ đạo** trong sản xuất đơn tinh thể Silicon hiện đại vì:
1. Giá rẻ (~5-10 lần rẻ hơn FZ)
2. Đường kính lớn (300mm standard, 450mm emerging)
3. Độ bền cơ học tốt (oxy giúp)
4. Hiệu suất cao

**FZ dành cho niche market** yêu cầu tinh khiết cực cao (RF, analog hiệu suất cao). Mặc dù FZ tinh khiết hơn, nhưng **chi phí cao + sản lượng thấp** khiến nó không cạnh tranh được với CZ trong sản xuất IC hiện đại. Thế nhưng, FZ vẫn **không thể thay thế hoàn toàn** được vì có những ứng dụng chỉ FZ mới đủ tốt.
