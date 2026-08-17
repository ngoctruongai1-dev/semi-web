---
title: Rửa Wafer – RCA Cleaning và Làm Sạch Pha Khí (洗浄)
sourceUrl: https://semi-journal.jp/basics/si-chem/cleaning-2.html
category: khoa-hoc-silicon
order: 9
flagship: false
---

## Tầm Quan Trọng Của Làm Sạch

**Làm sạch (Cleaning, 洗浄)** chiếm **30-40% tổng số công đoạn** trong sản xuất IC (hơn 500 công đoạn toàn bộ). Tuy vậy, nó thường được **xem nhẹ** so với photolithography hay etch – điều này là **sai lầm lớn**. Một wafer bẩn có thể **làm hỏng toàn bộ lot (batch)** sản xuất.

## RCA Cleaning (Rửa Tiêu Chuẩn)

### Lịch Sử

**RCA Cleaning** được phát triển bởi **công ty RCA Corporation** vào **năm 1970** (hơn 50 năm trước), nhưng **vẫn còn được dùng rộng rãi ngày nay** trong ngành bán dẫn. Nó là **tiêu chuẩn toàn cầu** cho wafer cleaning.

### Nguyên Tắc Cơ Bản

RCA gồm **hai bước chính** để loại bỏ **ba loại ô nhiễm**: hữu cơ, hạt vi mô, và kim loại.

### SC1 – Standard Clean 1 (Rửa Kiềm)

#### Công Thức

**Tỷ Lệ**:
- **H₂O (nước cất)**: 5 phần
- **NH₄OH (axit amoni)**: 1 phần
- **H₂O₂ (nước oxy hóa)**: 1 phần

**Công Thức Hóa Học**:
$$\text{SC1} = 5\text{H}_2\text{O} + 1\text{NH}_4\text{OH} + 1\text{H}_2\text{O}_2$$

**Ví Dụ Cụ Thể**: Để chuẩn bị 100L SC1:
- 50L nước cất
- 10L NH₄OH (28% aqueous)
- 10L H₂O₂ (30%)

#### Điều Kiện Hoạt Động

| Thông Số | Giá Trị |
|---|---|
| **Nhiệt độ** | 75-85°C (tiêu chuẩn 80°C) |
| **pH** | ~10.5 (kiềm mạnh) |
| **Thời gian Immerse** | 10-20 phút |
| **Quay tốc độ** | 0 rpm (để yên) |
| **Nồng độ H₂O₂** | Giám sát, cần thay ~mỗi 8-12 giờ |

#### Cơ Chế Loại Bỏ Chất Bẩn

**Hữu Cơ** (sáp, dầu mỡ, resist):
1. H₂O₂ bị phân hủy → **O radical (•O) mạnh oxi hóa**
2. Hữu cơ bị oxi hóa thành **CO₂ + H₂O** → hòa tan trong dung dịch

**Hạt Vi Mô** (bụi, hạt):
1. Si bề mặt được oxi hóa: Si + H₂O₂ → SiO₂ (lớp mỏng)
2. SiO₂ được **hòa tan chậm bởi NH₄OH** → lớp Si bề dưới bị "phơi ra"
3. Hạt vi mô **mất chỗ treo** → **bay tắp** ra khỏi bề mặt
4. **pH cao (~10.5)** tạo **zeta potential âm** → tĩnh điện **đẩy lùi hạt** (tránh tái bám)

#### Công Thức Phân Hủy H₂O₂

$$2\text{H}_2\text{O}_2 \xrightarrow{\text{heat, alkaline}} 2\text{H}_2\text{O} + \text{O}_2↑$$

Oxygen phát sinh giúp **tăng khả năng oxi hóa**.

### SC2 – Standard Clean 2 (Rửa Acid)

#### Công Thức

**Tỷ Lệ**:
- **H₂O (nước cất)**: 6 phần
- **HCl (axit hydrochloric)**: 1 phần
- **H₂O₂**: 1 phần

**Công Thức Hóa Học**:
$$\text{SC2} = 6\text{H}_2\text{O} + 1\text{HCl} + 1\text{H}_2\text{O}_2$$

#### Điều Kiện Hoạt Động

| Thông Số | Giá Trị |
|---|---|
| **Nhiệt độ** | 75-85°C (tiêu chuẩn 80°C) |
| **pH** | 0-2 (acid mạnh) |
| **Thời gian Immerse** | 10-20 phút |

#### Cơ Chế Loại Bỏ Kim Loại

**Kim Loại Kiềm** (Na, K, Li):
- Môi trường acid → các cation kim loại bị **hòa tan trực tiếp**
- Hình thành: Na⁺, K⁺ vào dung dịch

**Kim Loại Chuyển Tiếp** (Fe, Cu, Ni, Cr):
- H₂O₂ **oxi hóa** Fe²⁺ → Fe³⁺
- HCl tạo **complex anion** với kim loại: Fe³⁺ + Cl⁻ → FeCl⁺⁺
- Complex này **hòa tan tốt** trong dung dịch acid

**Protective Oxide**:
- Sau SC2, Si bề mặt được **phủ một lớp oxide mỏng** (SiO₂ ~1-2 nm)
- Lớp oxide này **bảo vệ Si** khỏi **tái nhiễm** trong giai đoạn sau

#### Công Thức Phản Ứng (Ví Dụ Fe)

$$\text{Fe} + \text{H}_2\text{O}_2 + 2\text{HCl} \rightarrow \text{FeCl}_3 + 2\text{H}_2\text{O}$$

$$\text{FeCl}_3 + \text{excess HCl} \rightarrow \text{Complex} + \text{heat}$$

### Quy Trình RCA Hoàn Chỉnh

**Bước 1: SC1 Cleaning**
- Immerse wafer trong dung dịch SC1 ở 80°C
- Giữ 10-20 phút
- Đầu tiên để yên, sau đó có thể quay tốc độ thấp

**Bước 2: DI Rinse (Rửa Nước)**
- Lấy wafer ra khỏi SC1
- Rửa liên tục với **nước cất (DI water)** chảy từ từ
- Loại bỏ hết dư lượng SC1 (~3-5 lần rửa)

**Bước 3: SC2 Cleaning**
- Immerse vào dung dịch SC2 ở 80°C
- Giữ 10-20 phút

**Bước 4: Rửa DI + Sấy**
- Rửa lại DI nhiều lần
- **Sấy khô** bằng:
  - **Hơi IPA (Isopropanol)** - phương pháp chuẩn (tránh watermark)
  - Hoặc **N₂ gas** khô

**Dry-in/Dry-out Principle**:
- Wafer **phải khô hoàn toàn** khi đưa vào SC1 (dry-in)
- **Phải khô** khi lấy ra khỏi quy trình (dry-out)
- Nước còn lại → oxidation → vết nước (watermark)

### Vấn Đề Thực Tế RCA

**Tư Khoá**: RCA cũ (~30 năm trước) dùng được ~100-200 wafer/batch, còn hiện đại dùng được ~1000+ wafer.

**Yêu Cầu Kiểm Soát**:
- **H₂O₂ phải kiểm tra** - nó bị phân hủy dần
- **pH phải đo** - amonia bay hơi
- **Nhiệt độ phải ổn định** - quá nóng → quá nhanh, quá lạnh → chậm

## Làm Sạch Pha Khí (Gas-Phase Cleaning)

### Vấn Đề RCA Ướt (Wet)

Mặc dù RCA rất hiệu quả, nhưng:
- **Tạo nhiều dữ liệu hóa chất** (ammonia, acid, hydrogen peroxide)
- **Khó xử lý wastewater** (vấn đề môi trường)
- **Slow speed** (~5-20 wafer/phút với single-wafer system)
- **Pattern collapse** – nước có surface tension làm sụp đổ cấu trúc 3D siêu nhỏ

### Giải Pháp: Gas-Phase Cleaning

#### 1. Plasma Ashing

**Nguyên Tắc**: Dùng **oxygen radical (•O)** tạo bởi plasma để **oxi hóa và phân hủy hữu cơ**.

- **Khí**: O₂ hoặc CF₄/O₂ mixture
- **Power**: RF hoặc microwave (~100-500W)
- **Áp suất**: Thường 1-10 Pa (vacuum)
- **Nhiệt độ**: 50-150°C (thấp)

**Ưu Điểm**:
- Loại hữu cơ rất hiệu quả
- Tốc độ nhanh

**Nhược Điểm**:
- **Charge-up effect** – tích điện tĩnh → có thể hại IC
- Khó loại kim loại
- Cần kiểm soát plasma rất kỹ

#### 2. Ozone Cleaning (UV + Ozone)

**Nguyên Tắc**: **UV photon** kích hoạt **O₃ (ozone)** → tạo **oxygen radical**.

- **Khí**: O₂ → UV tạo O₃
- **Bước sóng UV**: 254 nm hoặc 185 nm
- **Không dùng plasma** → **không tích điện**

**Ưu Điểm**:
- Loại hữu cơ tốt
- **Không charge-up** ✓
- Thân thiện môi trường

**Nhược Điểm**:
- Chậm hơn plasma
- Khó loại kim loại

#### 3. UV/Cl₂ Cleaning

**Nguyên Tắc**: **UV photon** + **Cl₂ (chlorine)** → tạo **chlorine radical**.

- **Cl radical** loại kim loại bằng cách **complexing**
- Tương tự SCl, nhưng **khô** (gas phase)

**Ứng Dụng**: Kim loại → Cl⁻ complex

#### 4. Supercritical Fluid Cleaning

**Nguyên Tắc**: Dùng **trạng thái thứ 4 của vật chất** (siêu tới hạn) – khi áp suất/nhiệt độ vượt ngưỡng.

- **Điểm tới hạn CO₂**: T=31°C, P=73 atm
- Tính chất: **Không sức căng bề mặt** (surface tension = 0)
- Kết quả: **Không watermark, không collapse**

**Ưu Điểm**:
- **Hoàn hảo cho cấu trúc 3D mỏng** (FinFET, GAA)
- Không watermark
- Nhanh

**Nhược Điểm**:
- Rất **đắt** ($1-5M/thiết bị)
- Yêu cầu **CO₂ tinh khiết**
- Khó kiểm soát

### So Sánh Ướt vs Khô

| Loại | SC1/SC2 (Ướt) | Plasma | Ozone | Supercritical |
|---|---|---|---|---|
| **Tốc độ** | Chậm (5-20/phút) | Nhanh (50+/phút) | Vừa | Vừa |
| **Loại Hữu Cơ** | Tốt | Tốt | Tốt | Tốt |
| **Loại Kim Loại** | Tốt | Khó | Khó | Khó |
| **Charge-up** | Không | Có ⚠️ | Không | Không |
| **Pattern Collapse** | Có | Không | Không | Không |
| **Chi Phí** | Thấp | Vừa | Vừa | Cao |

## Xu Hướng Tương Lai

- **Wet (RCA)**: Vẫn là tiêu chuẩn chính để loại kim loại
- **Hybrid approach**: Dùng **cả ướt lẫn khô** – ứt lập 2D sau khô (plasma)
- **Megasonic + RCA**: Thêm **siêu âm** vào RCA để tăng tốc độ
- **Advanced gas-phase**: Supercritical fluid dần phổ biến cho cộng nghệ tiên tiến

## Kết Luận

**RCA Cleaning là tiêu chuẩn vàng** – hơn 50 năm vẫn còn sử dụng do **hiệu quả cao** loại hầu hết ô nhiễm. Tuy nhiên, với **công nghệ tiên tiến (advanced nodes)**, các phương pháp **gas-phase** (đặc biệt supercritical fluid) đang trở nên **không thể thiếu** để tránh **pattern collapse** và đạt **độ sạch cực cao**.
