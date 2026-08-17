---
title: Ủ Nhiệt – Annealing (Thermal Annealing / Heat Treatment)
sourceUrl: https://semi-journal.jp/basics/equipment/anneal.html
category: quy-trinh-san-xuat
order: 5
flagship: false
---

## Giới Thiệu

Ủ nhiệt (熱処理, netsu-shori) là quá trình **nung nóng wafer ở nhiệt độ cao** để:
1. **Phục hồi tinh thể (crystallization)** – chuyển silicon vô định hình (amorphous) từ cấy ion trở lại thành đơn tinh thể.
2. **Kích hoạt dopant (activation)** – đưa các nguyên tử dopant từ vị trí khoảng lưới vào vị trí thay thế trong mạng tinh thể, giúp chúng trở nên "hoạt động" và dẫn điện.
3. **Nửa chảy (liquid phase epitaxy)** hoặc **annealing cấp tế bào (solid phase)** trong một số trường hợp đặc biệt.

Bước annealing là **bắt buộc** sau cấy ion, vì vùng cấy nếu không ủ nhiệt sẽ vô định hình và không thể dẫn điện.

## Ba Phương Pháp Annealing Chính

### 1. Batch Furnace (Lò Ủ Theo Lô)

#### Mô Tả

- **Cấu trúc**: Hàng **50-200 wafer** được xếp chồng lên nhau (hoặc cạnh nhau) bên trong một **lò quartz (quartz tube)** được nung nóng bằng các vòng điện trở (heater).
- **Môi trường**: Thường ở trong không khí hoặc khí inert (N₂, Ar).

#### Quy Trình

1. **Đặt wafer**: Xếp wafer vào "boat" (chiếc thuyền) quartz, rồi đưa vào lò.
2. **Ramp-up (Tăng nhiệt)**: Tăng nhiệt độ chậm từ phòng đến ~800-1000°C (tốc độ thường 10-20°C/phút).
3. **Plateau (Giữ nhiệt)**: Giữ ở nhiệt độ mục tiêu 30 phút ~ vài giờ (tùy loại annealing).
4. **Cool-down (Hạ nhiệt)**: Hạ xuống từ từ để tránh shock nhiệt.
5. **Unload**: Lấy wafer ra khỏi lò.

**Thời gian tổng**: 1-4 giờ.

#### Ưu Điểm

- **Hiệu suất cao**: Xử lý nhiều wafer cùng lúc → sản lượng lớn.
- **Chi phí khấu hao thiết bị thấp**: Thiết bị đơn giản, rẻ.
- **Phù hợp với công nghệ cũ**: Được dùng từ thập niên 1980-1990.

#### Nhược Điểm

- **Tốc độ ramp chậm**: ~10-20°C/phút → diffusion xảy ra lâu → profile dopant bị "mở rộng" (mất sắc nét).
- **Kiểm soát tuyến tính kém**: Khó kiểm soát từng wafer cá nhân, cả lô cảm nhận điều kiện khác nhau.
- **Cảm ứng (thermal budget) cao**: Tích lũy nhiệt lâu → dopant khuếch tán xa → vùng doped trở nên dày/mở rộng (không lý tưởng cho node nhỏ).
- **Ít được dùng hiện đại**: Chỉ dành cho công nghệ cũ (>130nm node).

#### Loại Furnace: Vertical vs. Horizontal

- **Vertical Furnace**: Wafer xếp thẳng đứng → lực tác dụng ít lên wafer → ít hạt quartz bong tróc → chất lượng tốt hơn.
- **Horizontal Furnace**: Wafer xếp ngang, boat quay → cũ, ít dùng ngày nay do vấn đề bẩn bụi.

### 2. RTA – Rapid Thermal Annealing (Ủ Nhiệt Nhanh)

#### Mô Tả

- **Cấu trúc**: Mỗi **wafer được xử lý riêng lẻ** trong một buồng kín (chamber) có **các bóng đèn hồng ngoại (halogen/tungsten lamps)** bao quanh.
- **Cơ chế tăng nhiệt**: Đèn phát nhiệt bức xạ hồng ngoại → wafer hấp thụ → tăng nhiệt độ.

#### Quy Trình

1. **Load wafer**: Một wafer được đặt vào chamber trên một lớp hỗ trợ quartz (susceptor).
2. **Ramp-up nhanh**: Tăng nhiệt độ cực nhanh – **tới 1000-1200°C chỉ trong 2-5 giây** (tốc độ ~200-500°C/s).
3. **Plateau**: Giữ ở nhiệt độ cao chỉ **vài giây ~ vài mươi giây**.
4. **Cool-down**: Hạ xuống cực nhanh (bằng cách tắt đèn), có thể trong vài giây.
5. **Unload**: Lấy wafer ra.

**Thời gian tổng**: 10-60 giây.

#### Ưu Điểm

- **Tốc độ Ramp cực nhanh**: Giảm thời gian diffusion dopant → profile dopant sắc nét hơn.
- **Kiểm soát từng wafer**: Mỗi wafer riêng lẻ → tránh biến động giữa các wafer.
- **Thermal Budget thấp**: Tích lũy nhiệt ít → dopant ít khuếch tán → vùng doped hẹp, chính xác (lý tưởng cho node nhỏ).
- **Tiết kiệm năng lượng**: Chỉ nung một wafer, thời gian ngắn.
- **Chủ lực hiện đại**: Sử dụng rộng rãi trong công nghệ ≤65nm.

#### Nhược Điểm

- **Hiệu suất thấp**: Chỉ xử lý một wafer lúc một → sản lượng chậm.
- **Chi phí thiết bị cao**: Đèn hồng ngoại chính xác giá ~$1-2 triệu.
- **Yêu cầu nhiệt độ gốc cao**: Để tránh shock nhiệt, wafer thường pre-heat ở ~600°C, sau đó ramp thêm.
- **Khó kiểm soát gradient nhiệt độ**: Phía trên (gần đèn) nóng hơn phía dưới → có thể tạo gradient T → stress ứng suất cơ học.

#### Công Nghệ Cải Tiến

- **Flash Annealing (FA)**: Sử dụng **laser pulse siêu ngắn** (microseconds ~ nanoseconds) để nung cực cục bộ chỉ bề mặt → thermal budget siêu thấp → kích hoạt dopant ngay tại chỗ mà không diffusion → **ứng dụng tiên tiến nhất** (node 7nm trở lại).

### 3. Laser Annealing (Ủ Nhiệt Bằng Laser)

#### Mô Tả

- **Cấu trúc**: Dùng **laser UV hoặc laser Excimer** (wavelength siêu tím, 200-400nm) để nung nóng wafer.
- **Bề ngoài hấp thụ**: Wafer chỉ hấp thụ ánh sáng laser ở các wavelength cụ thể → chủ yếu ở **bề mặt (~100nm)** chứ không phải toàn khối.

#### Quy Trình

1. **Pre-heat**: Wafer được ủ sơ bộ ở ~500°C (tùy ứng dụng).
2. **Laser pulse**: Một hoặc nhiều xung laser được phát ra, mỗi xung thường **microseconds ~ nanoseconds**.
3. **Melt + Recrystallize**: Bề mặt nóng chảy ~1500°C rồi nhanh chóng nguội lạnh và tái kết tinh.
4. **Cool-down**: Tự nhiên.

**Thời gian tổng**: Giây ~miliseconds.

#### Ứng Dụng Chính

- **Flat-panel displays (LCD/OLED)**: Tạo thin-film transistor (TFT) bằng polysilicon → cần ủ để tái kết tinh.
- **Công nghệ siêu tiên tiến bán dẫn**: Cần extreme thermal budget control.

#### Ưu Điểm

- **Thermal budget cực thấp**: Chỉ bề mặt được nung → bulk silicon không bị ảnh hưởng.
- **Kích hoạt dopant tại chỗ**: Tốc độ freezing cực nhanh → dopant bị "đóng băng" ở vị trí kích hoạt.
- **Không gây diffusion**: Thích hợp cho các cấu trúc 3D (3D NAND) vì không mở rộng vùng doped theo chiều dọc.

#### Nhược Điểm

- **Chi phí cực cao**: Laser Excimer giá ~$3-5 triệu.
- **Phức tạp kỹ thuật**: Khó kiểm soát melt depth, recrystallization quality.
- **Không phổ biến**: Chỉ dùng ở các công ty top-tier (TSMC, Samsung, Intel).

## Các Loại Annealing Theo Mục Đích

### 1. Activation Annealing (Ủ Kích Hoạt)

- **Mục đích**: Kích hoạt dopant sau implant.
- **Điều kiện**: 700-1100°C, vài giây ~ vài phút.
- **Hiệu ứng**: Dopant nhảy vào vị trí substitutional, tạo nên tính dẫn điện.

### 2. Damage Annealing (Ủ Phục Hồi Khuyết Tật)

- **Mục đích**: Phục hồi silicon vô định hình từ cấy ion.
- **Điều kiện**: 300-600°C, vài phút ~ vài giờ.
- **Hiệu ứng**: Nguyên tử Si khuếch tán, tái sắp xếp vào vị trí tinh thể.

### 3. Stress Annealing (Ủ Giải Ứng Suất)

- **Mục đích**: Loại bỏ ứng suất cơ học tích lũy từ các bước implant/etch.
- **Điều kiện**: 300-500°C.
- **Hiệu ứng**: Giảm defect, cải thiện độ tin cậy.

### 4. RTO (Rapid Thermal Oxidation) – Vừa Ủ Vừa Oxy Hóa

- **Mục đích**: Tạo lớp SiO₂ trong khi ủ nhiệt.
- **Điều kiện**: 700-1000°C, vài phút, trong không khí hoặc O₂.
- **Ứng dụng**: Gate oxide, isolation dielectric.

## So Sánh Ba Phương Pháp

| Tiêu Chí | Batch Furnace | RTA | Laser Annealing |
|---------|--------------|-----|-----------------|
| **Nhiệt độ tối đa** | 1000-1200°C | 1200-1400°C | 1500-2000°C |
| **Tốc độ Ramp** | 10-20°C/s | 200-500°C/s | >1000°C/s |
| **Thermal Budget** | Cao | Vừa | Rất thấp |
| **Profile dopant** | Rộng (diffused) | Tương đối sắc nét | Siêu sắc nét |
| **Hiệu suất** | Cao | Vừa | Thấp |
| **Chi phí thiết bị** | Thấp (~$500k) | Vừa (~$1-2M) | Cao (~$3-5M) |
| **Ứng dụng** | Công nghệ cũ (>130nm) | Công nghệ tiên tiến (65-28nm) | Cực tiên tiến (<7nm) |
| **Kích hoạt dopant hiệu suất** | 60-70% | 80-90% | 95%+ |

## Vấn Đề Thực Tế và Thách Thức

### 1. Boron Transient-Enhanced Diffusion (TED)

- **Vấn đề**: Sau implant B, interstitial Si tạo ra bởi implant damage làm tăng tốc **khuếch tán Boron** ngay cả ở nhiệt độ thấp.
- **Tác động**: Vùng boron doped mở rộng nhanh chóng → Vth thay đổi.
- **Giải pháp**: Dùng **carbon implant** (C⁺) cùng lúc để "trải" interstitial Si, giảm TED.

### 2. End-of-Range (EOR) Defects

- **Vấn đề**: Ở độ sâu cuối quỹ đạo ion implant, tạo thành những defect cluster lớn.
- **Tác động**: Bẫy dopant, tăng leakage current.
- **Giải pháp**: Dùng Ge pre-amorphization implant (Ge⁺) trước dopant implant để tạo amorphous layer toàn bộ → healing đều.

### 3. Diffusion vs. Activation Trade-off

- **Dilema**: Nung nhiệt độ cao → activation tốt nhưng diffusion mạnh. Nung nhiệt độ thấp → diffusion ít nhưng activation yếu.
- **Giải pháp hiện đại**: RTA (ramp nhanh) hoặc Laser Annealing để cân bằng.

## Kích Hoạt Dopant Chi Tiết

### Cơ Chế Kích Hoạt

1. Nguyên tử dopant ban đầu ở vị trí **interstitial** (tạm thời) hoặc bị **bẫy bởi point defect**.
2. Nhiệt độ cao → dopant bắt đầu "nhảy" khuếch tán.
3. Dopant nhảy vào vị trí **substitutional** (chính thức) trong mạng Si.
4. Ngay khi tại vị trí substitutional, dopant trở nên **ionize** và **tạo carrier** (dương cho p-type, âm cho n-type).

### Hiệu Suất Kích Hoạt Điển Hình

- **Batch annealing**: 60-70%.
- **RTA**: 80-95% (tùy điều kiện).
- **Laser**: >95%.
- **Flash Annealing**: ~100% (lý tưởng).

Độ kích hoạt không tới 100% do:
- Dopant bị bẫy bởi cluster defect lâu hơn.
- Dopant có thể tập trung ở grain boundary trong polysilicon.

## Tầm Quan Trọng

Annealing quyết định:
- **Đặc tính transistor**: Nồng độ dopant hiệu dụng → Vth, tính chất điện khác.
- **Độ tin cậy**: Vùng defect còn lại → leakage → độ tin cậy kém.
- **Yield**: Vùng implant bị lỗi → chip báng.
- **Công suất tiêu thụ**: Leakage cao → ngốn điện.
