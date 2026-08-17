---
title: Công Đoạn Rửa – Làm Sạch (Cleaning Process)
sourceUrl: https://semi-journal.jp/basics/equipment/cleaning.html
category: quy-trinh-san-xuat
order: 3
flagship: false
---

## Giới Thiệu

Rửa (洗浄, yousenjou) là một trong những công đoạn **quan trọng nhất** trong quy trình sản xuất bán dẫn. Bình thường, công đoạn này chiếm **30-40% tổng số công đoạn** (trên 500 bước) – điều này cho thấy tầm quan trọng của việc kiểm soát nhiễm bẩn. Bất cứ chất bẩn nào còn lại – dù nhỏ nhất – cũng có thể làm hỏng chip hoặc giảm đáng kể độ tin cậy thiết bị.

## Các Loại Chất Bẩn Cần Loại Bỏ

### 1. Hạt Vi Mô (Particles)

- **Kích thước**: nm ~ μm (nano tới micro mét).
- **Nguồn gốc**: Từ thiết bị, khí trường, bụi con người, khí thải.
- **Nguy hại**: Các hạt này có thể làm cản trở các đường truyền mạch siêu nhỏ, gây **mất kết nối (short circuit)** hoặc **hở (open circuit)** tùy vị trí.

### 2. Kim Loại Nặng – Chất Vô Cơ (Metals)

- **Loại**: Fe (sắt), Cu (đồng), Ni (niken), Cr (crom), các kim loại kiềm (Na, K).
- **Nồng độ**: Chỉ cần vài ppb (parts per billion) cũng đủ để làm giảm **thời gian sống carrier (lifetime)** từ ms xuống μs – cực kỳ nguy hiểm.
- **Nguồn gốc**: Từ thiết bị xử lý (scraper, gripper), các công đoạn ion implantation, RIE.

### 3. Chất Hữu Cơ (Organic Contamination)

- **Loại**: Residual photoresist (dư lượng resist), hydrocarbon, dầu máy, dầu từ da người.
- **Nguy hại**: Tạo lớp mỏng trên bề mặt, ngăn cản doping, làm giảm adhesion (độ bám) của các lớp tiếp theo.

### 4. Oxide Tự Nhiên (Native Oxide Film)

- **Là gì**: Lớp SiO₂ siêu mỏng (~10-30 Å) tự hình thành trên bề mặt Si khi tiếp xúc với không khí/nước.
- **Nguy hại**: Ngăn cản **doping ion implantation**, **diffusion**, và hình thành kế tiếp. Cần **gỡ bỏ tạm thời** trước các bước nhạy cảm (thường bằng HF vapour/ướt).

### 5. Chất Khác

- **Vi khuẩn/virus**: Phát triển trong nước cất đã lâu (nếu không có chlorine diệt khuẩn). Chúng tạo ra các hạt tới 100 μm chứa phosphor gây thay đổi điện trở cục bộ.

## Thiết Bị Rửa – Phân Loại

### Phân Loại Theo Cách Xử Lý

#### 1. Batch Processing (Xử Lý Theo Lô)

- **Định nghĩa**: Hàng chục đến hàng trăm wafer xử lý cùng lúc trong các bồn/tank chứa dung dịch.
- **Ưu điểm**: 
  - Hiệu suất cao (throughput), sản lượng lớn.
  - Chi phí khấu hao thiết bị thấp.
- **Nhược điểm**:
  - Khó kiểm soát điều kiện từng wafer cá nhân.
  - Dễ gây tái bám hạt (re-deposition) nếu dung dịch không được quản lý tốt.
  - Chi phí hóa chất cao (sử dụng lượng lớn dung dịch).
- **Phân loại thêm**: Multi-tank (nhiều bồn liên tiếp), Single-tank (một bồn), với các công đoạn: sơ bộ, chính, rửa, sấy.

#### 2. Single-Wafer Processing (Xử Lý Từng Chiếc)

- **Định nghĩa**: Mỗi wafer được xử lý riêng lẻ, thường bằng các tia/mũi phun (spray nozzles) khi wafer quay.
- **Ưu điểm**:
  - Kiểm soát chính xác từng wafer.
  - Chi phí hóa chất thấp (sử dụng ít dung dịch).
  - Giảm tái bám hạt.
  - Phù hợp với công nghệ tiên tiến (node nhỏ).
- **Nhược điểm**:
  - Hiệu suất thấp (sản lượng chậm).
  - Chi phí thiết bị cao.
  - Chiếm diện tích lớn hơn.

### Phân Loại Theo Phương Pháp

#### 1. Wet Cleaning (Rửa Ướt)

- **Phương pháp**: Dùng dung dịch hóa học (nước, acid, kiềm, h.v.).
- **Tỷ lệ**: **99%** các nhà máy hiện nay dùng rửa ướt (vì hiệu quả cao, chi phí thấp).
- **Ưu điểm**: Loại bỏ tất cả loại chất bẩn (hạt, kim loại, hữu cơ).
- **Nhược điểm**: Tạo "water mark" (vết chứng) nếu không sấy kỹ.

**Các dung dịch rửa phổ biến:**
- **H₂O + H₂O₂ + NH₄OH**: Loại hữu cơ + hạt (SC1).
- **H₂O + H₂O₂ + HCl**: Loại kim loại (SC2).
- **Các dung dịch khác**: HF loại oxide, KOH loại metal contamination.

#### 2. Dry Cleaning (Rửa Khô)

- **Phương pháp**: Sử dụng khí (argon, nitrogen), plasma, hoặc phân tử (molecules) hấp thụ.
- **Loại**:
  - **Aerosol cực lạnh** (-160°C đến -150°C): Jet khí lạnh phun lên wafer, đông cứng hạt rồi bong tróc.
  - **Ozone ashing**: UV phân hủy O₃ thành gốc oxy (•O), chúng oxy hóa hữu cơ.
  - **Chất lỏng siêu tới hạn (Supercritical Fluid)**: Trạng thái thứ 4 của vật chất (áp suất + nhiệt độ cao), sức căng bề mặt = 0, phù hợp làm sạch cấu trúc 3D mà không gây "pattern collapse" (sụp đổ).
- **Ưu điểm**: Không tạo water mark, thích hợp cho cấu trúc 3D hiện đại.
- **Nhược điểm**: Chi phí cao, chưa phổ biến rộng rãi.

## Quy Trình RCA Cleaning – Tiêu Chuẩn Công Nghiệp

**RCA Cleaning** (phát triển bởi công ty RCA vào năm 1970) là tiêu chuẩn được sử dụng rộng rãi nhất hiện nay, gồm **hai bước chính**:

### SC1 (Standard Clean 1) – Loại Hữu Cơ + Hạt

**Thành phần**: 5 : 1 : 1 (H₂O : NH₄OH : H₂O₂)
- Tỷ lệ này được tối ưu hóa để **tối đa hóa zeta potential** (điện thế bề mặt).

**Điều kiện**:
- Nhiệt độ: 75-85°C.
- Thời gian: 10-20 phút.
- pH: ~10.5 (kiềm mạnh).

**Nguyên lý**:
- **NH₄OH (ammonia hydroxide)** tạo môi trường kiềm, làm **loại bỏ chất hữu cơ** bằng cách oxy hóa (cùng với H₂O₂).
- pH cao tạo **"electrostatic repulsion"** (đẩy lùi tĩnh điện) giữa các hạt âm, ngăn cản **re-deposition** (tái bám).
- **H₂O₂** cung cấp gốc OH để oxy hóa các hợp chất hữu cơ.

### SC2 (Standard Clean 2) – Loại Kim Loại

**Thành phần**: 6 : 1 : 1 (H₂O : HCl : H₂O₂)
- Nước cất : axit muriatic : nước oxy già.

**Điều kiện**:
- Nhiệt độ: 75-85°C.
- Thời gian: 10-20 phút.
- pH: 0-2 (acid mạnh).

**Nguyên lý**:
- **HCl** tạo môi trường acid, **hòa tan kim loại** dạng oxide hoặc kim loại nguyên chất.
- **H₂O₂** cung cấp gốc OH để oxy hóa thêm các chất khó tan.
- Ví dụ: Fe³⁺ hoặc Cu²⁺ được hòa tan, rửa sạch khỏi bề mặt.

### Các Bước Tiếp Theo Sau SC1 & SC2

1. **DI Water Rinse** (rửa nước cất): Loại bỏ các ion từ SC1/SC2.
2. **Drying** (sấy khô): Dùng **IPA (isopropanol)** hoặc **spin-dry** để tránh "water mark" (vết chứa nước).
3. **Tùy chọn**: Nếu cần tránh oxide tự nhiên, dùng **HF dip (nhúng HF)** hoặc **HF vapour** ngay trước bước doping.

## Các Bước Rửa Khác – Specialized Cleaning

### Rửa Pha Khí (Gas-Phase Cleaning)

Dùng cho các bước cần tránh water mark hoặc loại bỏ oxide tự nhiên:

- **HF Vapour**: Loại bỏ native oxide bằng hơi HF.
- **Ozone (O₃) + UV**: Phân hủy hydrocarbon.
- **UV + Cl₂**: Loại bỏ kim loại bằng photochemical reaction.

### Plasma Ashing

- Dùng **oxygen radical** (O·, O₃) tạo bằng plasma để phân hủy photoresist/hữu cơ thành CO₂ + H₂O.
- **Nguy hiểm**: Gây "charge-up" (tích điện) làm hỏng transistor nhạy cảm → cần hạn chế trong công nghệ hiện đại.

## Nguyên Tắc Cốt Lõi – "Dry-in/Dry-out"

**Quy tắc vàng**: Wafer phải **khô khi vào** và **khô khi ra** từ các công đoạn quan trọng để tránh tạo water mark, nitride/oxide trở nên **hydrophobic (kỵ nước)** sau HF treatment nên dễ bị tái nhiễm bẩn nếu không bảo vệ kỹ.

## Thiết Bị Rửa Chính

| Loại Thiết Bị | Đặc Điểm | Ứng Dụng |
|---------------|---------|---------|
| **Multi-tank batch** | Hiệu suất cao, chi phí thấp, không kiểm soát cá nhân | Công nghệ cũ (>180nm) |
| **Single-tank batch** | Hiệu suất vừa, kiểm soát tốt hơn | Công nghệ trung (130-45nm) |
| **Single-wafer** | Hiệu suất thấp, kiểm soát tuyệt đối | Công nghệ tiên tiến (<28nm) |
| **Aerosol/Supercritical** | Chi phí cao, loại bỏ 3D tốt | Công nghệ cực tiên tiến + 3D NAND |

## Tầm Quan Trọng và Thách Thức

### Tầm Quan Trọng
- Quyết định **yield (tỷ lệ sản phẩm tốt)** của chip: wafer bẩn → lỗi → chip báng.
- Ảnh hưởng **reliability (độ tin cậy)** dài hạn.

### Thách Thức Hiện Đại
1. **Cấu trúc 3D**: Trench/pillar siêu hẹp → khó tiếp cận chất bẩn sâu → risk "pattern collapse" (sụp đổ) khi dùng rửa khô.
2. **Node nhỏ**: Feature size 5-3nm → bất cứ hạt nào cũng làm hỏng mạch → yêu cầu độ sạch tuyệt đối.
3. **Chi phí**: Rửa chiếm ~20-30% chi phí hoạt động → cần tối ưu hóa.
