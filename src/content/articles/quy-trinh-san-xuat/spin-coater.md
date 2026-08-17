---
title: Spin Coater – Máy Phủ Quay Ly Tâm (Spin Coating Equipment)
sourceUrl: https://semi-journal.jp/basics/process/spin-coater.html
category: quy-trinh-san-xuat
order: 8
flagship: false
---

## Giới Thiệu

Spin coater (máy phủ quay) là thiết bị **phủ một lớp photoresist đều và mỏng lên wafer** bằng lực ly tâm. Đây là bước **rất quan trọng** trong photolithography vì độ dày, độ đều của resist layer quyết định:
- Độ phân giải và độ chính xác khi phơi sáng.
- Khả năng etch và tẩy resist.
- Tỷ lệ yield (defect rate).

Spin coating là phương pháp **đơn giản nhất, rẻ nhất**, được sử dụng rộng rãi trong công nghiệp.

## Nguyên Lý Cơ Bản

### Quy Trình Spin Coating

**Bước 1: Chuẩn Bị Wafer**
- Wafer được **hút chân không** (vacuum chuck) lên bàn quay.
- Bề mặt đã được xử lý HMDS (làm kỵ nước).

**Bước 2: Cho Resist**
- **Nhỏ dung dịch photoresist** lên **tâm wafer** (thường 3-5 mL).
- Resist là một **dung dịch hữu cơ** chứa:
  - Resin (binder) – thành phần chính, chiếm ~15-20%.
  - Solvent (dung môi) – chiếm ~80-85%, giúp resist sệt/lỏng.
  - Photoactive compound (PAC) – chất nhạy sáng, chiếm ~5-10%.

**Bước 3: Quay Ly Tâm (Centrifugal Force)**
- Wafer quay ở tốc độ cao: **1000-5000 RPM** (vòng/phút).
- **Lực ly tâm**: F = mω²r → đẩy resist từ tâm ra ngoài.
- **Kết quả**: Resist phân bô đều trên toàn bề mặt, tạo lớp phủ mỏng.

**Bước 4: Hơi Hóa Solvent (Solvent Evaporation)**
- Trong khi quay, solvent bay hơi liên tục (do nhiệt độ môi trường + tác dụng của quay).
- Resist dần **trở nên sệt (viscous)** → độ dày tăng lên.
- Khi solvent bay hơi đủ, resist trở nên **"tack-free"** (không còn dính) và bắt đầu **khô cứng**.

**Bước 5: Kết Thúc**
- Quay dừng lại, wafer được lấy ra.
- Resist đã phủ đều, mỏng (thường 0.5-2 micrometers).

## Các Yếu Tố Ảnh Hưởng Đến Độ Dày Resist

### 1. Tốc Độ Quay (Rotation Speed)

**Công Thức Gần Đúng**:
```
Độ dày ∝ 1 / √(tốc độ quay)
```

**Ý Nghĩa**:
- Quay **nhanh** → lực ly tâm **lớn** → resist được **đẩy ra mạnh** → độ dày **mỏng**.
- Quay **chậm** → lực ly tâm **nhỏ** → resist **bám lại lâu** → độ dày **dày**.

**Ví Dụ**:
- 1000 RPM → độ dày ~2 μm.
- 3000 RPM → độ dày ~0.8 μm.
- 5000 RPM → độ dày ~0.4 μm.

### 2. Độ Nhạo của Resist (Viscosity)

**Công Thức**:
```
Độ dày ∝ độ nhạo resist
```

**Ý Nghĩa**:
- Resist **sệt** (độ nhạo cao) → khó đẩy ra → độ dày **dày**.
- Resist **lỏng** (độ nhạo thấp) → dễ đẩy ra → độ dày **mỏng**.

**Lý do**:
- Resist sệt → lực ma sát lớn → khó di chuyển → phân bô chậm → còn lại dày.
- Resist lỏng → lực ma sát nhỏ → dễ di chuyển → phân bô nhanh → còn lại mỏng.

### 3. Tốc Độ Hơi Hóa Solvent (Evaporation Rate)

**Công Thức**:
```
Độ dày ∝ tốc độ hơi hóa
```

**Ý Nghĩa**:
- Nếu solvent **bay hơi nhanh** → resist nhanh trở nên **sệt** → càng sệt càng khó đẩy → độ dày **dày**.
- Nếu solvent **bay hơi chậm** → resist vẫn lỏng lâu → dễ đẩy → độ dày **mỏng**.

**Yếu Tố Ảnh Hưởng Hơi Hóa**:
- **Nhiệt độ wafer**: Cao → bay hơi nhanh → độ dày dày.
- **Nhiệt độ không khí**: Cao → bay hơi nhanh → độ dày dày.
- **Tốc độ gió/exhaust**: Lớn → hơi hóa nhanh → độ dày dày.
- **Loại solvent**: Nhạy cảm – một số solvent bay hơi nhanh (acetone), một số chậm (propylene glycol).

## Vấn Đề Thực Tế – Edge Bead và Các Khuyết Tật

### 1. Edge Bead (Mép Resist Dính)

**Vấn Đề**:
- Lực căng bề mặt (surface tension) làm resist tập trung ở **cạnh wafer** → tạo **vành (bead)** cao (có thể dày 5-10 lần so với giữa wafer).
- Nguyên nhân: Sức căng mặt chất lỏng-không khí làm resist bám chặt lên cạnh.

**Hậu Quả**:
- Trong bước phơi sáng, vành này tạo **focus error** (sai lệch tiêu điểm).
- Các transistor ở cạnh wafer sẽ **out-of-focus** → độ phân giải kém → yield giảm.

**Giải Pháp – Edge Rinse (Rửa Cạnh)**:
1. Sau khi quay spin coating xong, **quay nhẹ** (thường 500-1000 RPM).
2. **Phun dung dịch rửa** (thường là isopropanol hoặc xylene) vào cạnh wafer.
3. Dung dịch này hòa tan resist ở cạnh → loại bỏ edge bead.
4. Quay tiếp để loại bỏ dung dịch rửa.

**Kết quả**: Bề mặt resist mỏng đều, không còn vành.

### 2. Back Seepage (Thẩm Lậu Mặt Sau)

**Vấn Đề**:
- Resist thẩm lậu qua mặt sau wafer (phía chân không).
- Nguyên nhân: Vacuum chuck yếu, resist quá lỏng, hoặc gap quá lớn.

**Hậu Quả**:
- Resist bám trên bàn quay → lây nhiễm lên wafer tiếp theo → contamination.
- Wafer không được hút chắc → dịch chuyển trong khi phơi sáng → overlay error.

**Giải Pháp – Back Rinse (Rửa Mặt Sau)**:
1. Sau khi quay spin coating, **rửa mặt sau** bằng dung dịch rửa trước khi wafer rời bàn.
2. Hoặc tăng vacuum chuck strength.

### 3. Uniformity (Độ Đều)**

**Vấn Đề**:
- Nếu wafer không quay đúng tâm (off-center) → resist phân bô không đều → một phía dày, một phía mỏng.

**Giải Pháp**:
- Kiểm tra vacuum chuck → đảm bảo wafer được hút chắc, tâm đúng.
- Kiểm tra bàn quay có bị côi không.

## Thiết Bị Spin Coater Chi Tiết

### Cấu Trúc

1. **Bàn quay (Spindle)**: Quay với tốc độ chính xác, thường với servo motor (điều khiển tốc độ số).
2. **Vacuum chuck**: Hút chân không giữ wafer an toàn.
3. **Hệ thống phun (Dispense system)**:
   - Bình chứa resist.
   - Pump và nozzle để nhỏ resist lên tâm wafer.
   - Độ chính xác: thường ±0.5 mL.
4. **Hệ thống rửa (Rinse system)**:
   - Nozzle rửa cạnh (edge rinse).
   - Nozzle rửa mặt sau (back rinse).
5. **Sensor (Cảm biến)**:
   - Cảm biến tốc độ để kiểm soát chính xác RPM.
   - Cảm biến vacuum để phát hiện wafer rơi.

### Kiểu Thiết Bị

- **Batch type**: Xử lý nhiều wafer cùng lúc (ít dùng).
- **Single-wafer type**: Xử lý từng wafer riêng lẻ (phổ biến) – kiểm soát tốt hơn, độ chính xác cao.

## Ưu Điểm của Spin Coating

1. **Đơn Giản**: Thiết kế đơn giản, dễ vận hành.
2. **Rẻ**: Chi phí thiết bị thấp (~$200k-500k).
3. **Linh Hoạt**: Có thể phủ độ dày từ nm tới μm.
4. **Tốc Độ Nhanh**: Mỗi wafer chỉ mất ~1-2 phút.
5. **Không Cần Chân Không Cao**: Không cần UHV (ultra-high vacuum) như MBE hay PVD.

## Nhược Điểm

1. **Lãng Phí Resist**: Phần lớn resist bị loại bỏ (lực ly tâm → bay ra). Hiệu suất resist ~20-30% (70-80% bị lãng phí).
2. **Khó Kiểm Soát Dòng**: Các yếu tố (nhiệt độ, độ ẩm, tốc độ gió) ảnh hưởng → khó tái tạo lại điều kiện y hệt.
3. **Wafer Flat Khó**: Độ dày resist rất nhạy cảm với các thay đổi nhỏ → cần kiểm soát kỹ.

## Công Thức Tính Độ Dày – Công Thức Gần Đúng

**Công thức Landau & Levich** (từ thuyết chất lỏng):
```
h = 0.6 × (μ × ν)^(1/3) × (ω × r²)^(-1/2)
```

**Trong đó**:
- h: độ dày resist cuối cùng.
- μ: độ nhạo (viscosity).
- ν: tốc độ quay.
- ω: tốc độ góc = 2πn (n: RPM).
- r: bán kính từ tâm.

Công thức này chỉ là **gần đúng** – thực tế còn phụ thuộc vào hơi hóa, dạng hạn (profile), độ ẩm...

## Quy Trình Tối Ưu Hóa

Để đạt resist layer tốt nhất:
1. **Chọn tốc độ quay** dựa trên độ dày mong muốn.
2. **Hiệu chỉnh nhiệt độ/độ ẩm** để kiểm soát hơi hóa.
3. **Sử dụng edge rinse** để loại bỏ mép.
4. **Kiểm tra uniformity** bằng máy đo độ dày (ellipsometer).
5. **Điều chỉnh lại** nếu độ dày không đạt.

## Tầm Quan Trọng

Spin coating quyết định:
- **Độ phân giải photolithography**: Resist mỏng = phân giải tốt, nhưng etch khó. Resist dày = etch dễ, nhưng phân giải kém.
- **Tỷ lệ yield**: Resist không đều → defect → chip báng.
- **Chi phí hóa chất**: Lãng phí resist → chi phí cao.
