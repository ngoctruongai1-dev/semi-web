---
title: Sản Xuất Wafer Silicon (シリコンウェハー製造)
sourceUrl: https://semi-journal.jp/basics/si-chem/wafer-process.html
category: khoa-hoc-silicon
order: 6
flagship: false
---

## Tổng Quan

**Wafer** là một **tấm silicon mỏng, hình tròn, phẳng** dùng làm nền tảng để sản xuất các IC bán dẫn. Từ một thỏi đơn tinh thể (ingot) đạt ~300mm đường kính, phải trải qua **10+ bước xử lý chuyên biệt** để tạo thành wafer cuối cùng có độ phẳng cấp nano.

## 10 Bước Sản Xuất Wafer

### 1. Cắt Khối (Block Cutting)

**Mục Đích**: Chia thỏi ingot dài thành các khối nhỏ hơn.

**Quy Trình**:
- Ingot được **quét qua X-ray hoặc kiểm tra điện trở** để xác định vùng có độ không đều cao
- Chia ingot thành **khối với điện trở không đều chấp nhận được**
- Mỗi khối chứa ~200-500 wafer tùy kích thước

**Dụng Cụ**: Cưa hoặc wire saw

### 2. Mài Ngoài (Cylindrical Grinding) – Định Đường Kính

**Mục Đích**: Làm tròn và tiêu chuẩn hóa đường kính của ingot.

**Quy Trình**:
- Ingot được **đặt vào máy mài**
- Các mài đĩa có **hạt mài (abrasive particles)** loại bỏ lớp ngoài không đều
- **Đường kính được tiêu chuẩn hóa** chính xác (ví dụ: 300.0 ± 0.3 mm)

**Kết Quả**: Ingot có hình trụ hoàn hảo, đường kính đồng nhất

### 3. Khắc Notch / Oriflat (Đánh Dấu Hướng)

**Mục Đích**: Chỉ định **hướng tinh thể** và **loại doping** của wafer.

**Hai Loại Đánh Dấu**:

#### Oriflat (Cũ, cho wafer ≤ 200mm)
- Một **mặt phẳng dài** được khắc / mài vào cạnh ingot
- **Mục đích**:
  - Oriflat kép → hướng (111)
  - Oriflat đơn → hướng (100)
  - Nếu không có → (110)

#### Notch (Mới, cho wafer ≥ 300mm)
- Một **vũ hình bán nguyệt** được khắc vào cạnh
- **Mục đích**:
  - Có Notch + ở trên mặt phẳng chính → p-type (100) hoặc chỉ định khác
  - Có Notch + ở dưới → n-type
  - Notch + vị trí khác → (111) hoặc loại khác

**Lợi Ích Notch**:
- Tiêu chuẩn hiện đại
- Dễ **tự động hóa** (máy nhận diện Notch)
- Chứa thêm thông tin so với Oriflat

### 4. Cắt Lát (Slicing) – **Bước Quan Trọng Nhất**

**Mục Đích**: Cắt ingot thành từng lát mỏng để tạo wafer.

**Phương Pháp Wire Saw**:
- **Wire (sợi dây)** được "kéo" qua ingot với tốc độ cao (> 10 m/s)
- **Chất mài (abrasive slurry)** chứa hạt kim cương hoặc SiC được **bơm lên wire**
- Hạt mài **xước đi Si** → dần dần cắt qua ingot

**Độ Dày Wafer**:
- Độ dày cut wafer (sau cắt): **~350 μm** (rất mỏng)
- Độ mất Si do cắt (kerf loss): ~250 μm (phí phổi)
- **Hiệu suất chỉ ~60%** – phần lớn Si bị lãng phí thành "bột cắt"

**Tốc Độ Cắt**:
- Thường **8-20 giờ** để cắt một ingot 300mm thành 200+ wafer

**Vấn Đề**:
- Wire saw tạo ra **lớp tổn thương (damage layer)** ~ 2 μm trên bề mặt wafer
- Phải loại bỏ ở các bước sau

### 5. Tháo Góc / Vát Cạnh (Edge Beveling)

**Mục Đích**: Loại bỏ cạnh sắc nhọn.

**Quy Trình**:
- **Cạnh wafer được mài xiên** (beveled) ~ 45°
- Tránh **chipped edge** (vỡ cạnh) trong xử lý tiếp theo

**Độ Sâu**: ~0.5-1 mm vào từ cạnh

### 6. Lapping (Mài Thô) – Mài Hai Mặt

**Mục Đích**: Làm phẳng hai mặt wafer (trước + sau).

**Quy Trình**:
- Wafer được **đặt giữa hai đĩa mài (lapping plates)**
- Đĩa quay với **slurry (lớp lơ lửng)** chứa hạt mài (ví dụ: Al₂O₃)
- **Áp lực kiểm soát** → xước đi Si ~200 μm
- Kết quả: **Hai mặt song song, planar** ~ ±10 μm

**Loại Bỏ**:
- Lớp tổn thương từ wire saw
- Độ không phẳng từ cắt lát
- Các vết nứt nhỏ

### 7. Khắc Hóa Học (Etching)

**Mục Đích**: Loại bỏ toàn bộ **lớp tổn thương bề mặt**.

**Hai Phương Pháp**:

#### Etching Acid
- **HNO₃ (axit nitric)** + **HF (axit hydrofluoric)**
- Xức đi ~10-30 μm bề mặt
- Loại bỏ tất cả các khuyết tật cơ học

#### Etching Kiềm
- **KOH (kali hydroxit)** hoặc **NaOH**
- Etching không đẳng hướng → tạo hình dạng đặc biệt trên bề mặt (MEMS)

**Kết Quả**: Bề mặt Si **nguyên sinh sạch** (virgin Si surface)

### 8. Donor Killer Annealing – Xử Lý Oxy

**Mục Đích**: Loại bỏ **Thermal Donor (TD)** hình thành từ oxy.

**Quy Trình**:
- **Nung nóng** ở **300-500°C** (đỉnh TD tạo ở ~450°C)
- Giữ ở nhiệt độ này **vài giờ** → các TD bị hình thành và **tích tụ**
- **Sau đó ủ** ở **650-800°C** → **Phân rã TD**
- Kết quả: Loại bỏ ~99% TD

**Ý Nghĩa**:
- TD tạo ra **donor level** → thay đổi điện trở của wafer
- Nếu không loại TD → wafer có **tính chất điện không ổn định** sau in-situ annealing

### 9. CMP (Chemical-Mechanical Polishing) – Đánh Bóng Siêu Chính Xác

**Mục Đích**: Tạo **bề mặt gương** với **độ phẳng cấp nano**.

**Quy Trình**:
- Wafer được **đặt lên pad xốp** quay tốc độ cao
- **Slurry hóa học (chứa hạt silic)**  được phun lên
- Bề mặt **vừa bị mài (cơ khí) vừa được ăn mòn (hóa học)**
- **Ra lực (down force)** kiểm soát chính xác

**Kết Quả**:
- **Độ phẳng (flatness)**: < 1 μm (trên toàn bộ 300mm wafer!)
- **Độ nhám (roughness)**: < 10 Å (angstrom = 0.001 μm)
- Bề mặt như gương, phản chiếu hoàn hảo

**Thời Gian**: ~30-60 phút/wafer

### 10. Rửa Sạch Cuối Cùng (Final Cleaning)

**Mục Đích**: Loại bỏ tất cả các tạp chất từ các bước trước.

**Quy Trình (RCA)**:
- **SC1**: H₂O:NH₄OH:H₂O₂ = 5:1:1 ở 75-85°C
  - Loại chất hữu cơ + hạt
- **SC2**: H₂O:HCl:H₂O₂ = 6:1:1 ở 75-85°C
  - Loại kim loại
- **Rửa DI (deionized water)** nhiều lần
- **Sấy khô** bằng hơi IPA (isopropanol) hoặc N₂ khô

**Kết Quả**: Wafer **sạch 99.99%**, sẵn sàng đưa vào fab

## Chuẩn Wafer Hiện Đại

| Thông Số | Giá Trị |
|---|---|
| **Đường Kính** | 300 mm (12 inch) standard; 450 mm emerging |
| **Độ Dày** | 725-775 μm (theo SEMI standard) |
| **Hướng** | (100) phổ biến nhất; (111) cũng dùng |
| **Loại Doping** | p-type (Boron) hoặc n-type (Phosphorus) |
| **Điện Trở Suất** | 0.1-100 Ωcm (tuỳ loại wafer) |
| **Notch/Oriflat** | Notch (300mm standard) |
| **Độ Phẳng** | < 1 μm TTV (Total Thickness Variation) |
| **Độ Nhám** | < 20 Å Ra |
| **Defect Density** | < 100 defect/cm³ |

## Ảnh Hưởng Của Từng Bước Tới Thiết Bị

| Bước | Ảnh Hưởng Tới Thiết Bị |
|---|---|
| Lapping + Etching | Loại bỏ **khuyết tật**, đảm bảo **chất lượng interface** |
| CMP | **Độ phẳng** quyết định **overlay** trong lithography |
| RCA Cleaning | **Độ sạch** quyết định **yield** và **lifetime** |
| Notch | **Hướng tinh thể** quyết định **mobility** |

## Thống Kê Sản Xuất

- **Thời gian từ ingot → wafer**: ~2-3 tuần
- **Số lượng wafer/ingot**: 200-300 wafer từ ingot 300mm
- **Chi phí wafer**: ~$10-50 (tuỳ loại, doping, tinh khiết)
- **Lãng phí (wafer bị loại)**: ~5-10% do khuyết tật

## Kết Luận

Sản xuất wafer là **quá trình tinh tế, multi-step** yêu cầu:
- **Kiểm soát chính xác** từng bước (độ dày, độ phẳng, độ sạch)
- **Thiết bị hiên tiến** (wire saw, CMP)
- **Quy trình chuẩn hóa** (RCA cleaning)

Mỗi **μm sai lệch** trong độ phẳng hoặc sạch sẽ ảnh hưởng tới hiệu suất IC cuối cùng. Vì lý do này, **wafer được coi là "nền móng" quan trọng nhất** của ngành bán dẫn hiện đại.
