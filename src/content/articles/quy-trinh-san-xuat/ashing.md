---
title: Ashing – Tẩy Photoresist Bằng Đốt Cháy (Photoresist Stripping)
sourceUrl: https://semi-journal.jp/basics/process/ashing.html
category: quy-trinh-san-xuat
order: 10
flagship: false
---

## Giới Thiệu

Ashing (灰化, haika – tạo thành tro) là quá trình **tẩy bỏ photoresist sau khi etch xong**. Resist đã thực hiện nhiệm vụ mặt nạ bảo vệ các vùng silicon/oxide trong bước etch, nhưng khi etch xong, resist không còn cần thiết và phải được **loại bỏ hoàn toàn**. Nếu resist sót lại, nó sẽ gây:
- Lây nhiễm lên wafer tiếp theo.
- Ảnh hưởng các bước tiếp theo (diffusion, deposition...).
- Giảm độ bám (adhesion) của các lớp tiếp theo.

Ashing là một bước **cực kỳ quan trọng** để đảm bảo chất lượng sản phẩm.

## Khái Niệm Cơ Bản

### Photoresist là gì?

Photoresist là một **polymer hữu cơ** chứa:
- **Polymer backbone**: Chuỗi carbon-hydrogen chính.
- **Photoactive compound (PAC)**: Thành phần nhạy sáng.
- **Solvent**: Dung dịch để resist lỏng.

**Phân tử resist gồm chủ yếu**: C, H, O, N – tất cả là **chất hữu cơ**.

### Ashing = Đốt Cháy?

**Thực chất**: Ashing là quá trình **oxy hóa (oxidation)** resist từ dạng polymer rắn thành:
- **CO₂** (khí)
- **H₂O** (hơi nước)
- **NOₓ/N₂** (nếu chứa nitrogen)
- **Tro (ash)** – những ion oxide nhẹ bay hơi

Sau khi ashing, **không còn resist** – chỉ còn CO₂/H₂O bay ra khỏi chamber, wafer sạch.

## Ba Phương Pháp Ashing Chính

### 1. Plasma Ashing (Ashing Bằng Plasma)

#### Nguyên Lý

**Plasma oxygen**:
1. **Tạo plasma**: Dùng **microwave (MW)** hoặc **RF (radio frequency)** ở 300-600W để ionize oxygen (O₂) trong chamber.
2. **Tạo radical**: Plasma tạo ra **oxygen radical** (O· – oxygen atom có electron tự do, cực hoạt tính).
3. **Oxy hóa resist**:
   - O· tấn công polymer resist.
   - Phá vỡ liên kết C-H, C-C, C-O.
   - Chuyển đổi C → CO, CO₂ (khí).
   - Chuyển đổi H → H₂O (hơi).

#### Điều Kiện

- **Áp suất**: 0.5-2 Torr (vacuum yếu, không phải UHV).
- **Tần số plasma**: MW (2.45 GHz) hoặc RF (13.56 MHz).
- **Công suất**: 300-600W.
- **Thời gian**: 5-30 phút (tùy độ dày resist).
- **Nhiệt độ**: 50-150°C (wafer có thể hơi nóng từ năng lượng plasma).

#### Ưu Điểm

- **Tốc độ nhanh**: Oxy hóa mạnh, loại bỏ resist nhanh.
- **Hiệu suất cao (Throughput)**: Mỗi batch 5-100 wafer.
- **Không cần hóa chất lỏng**: Không dùng acid/kiềm.

#### Nhược Điểm – CHARGE-UP EFFECT (Tích Điện)

**Vấn Đề Nghiêm Trọng**:
- **Plasma tạo ion**: Electron (âm) được hút vào grounded electrode, chuỗi ion dương (O⁺) tích tụ trên wafer.
- **Potentiel wafer tăng**: Wafer trở nên **cực dương** (~1000V hoặc cao hơn).
- **Tác Động Hại**:
  - Electron từ resist bị **gia tốc** bởi potentiel cao → **ESD (electrostatic discharge)** xảy ra.
  - ESD phá vỡ transistor nhạy cảm → **dielectric breakdown** (hỏng oxide gate, ngắt mạch) → **yield giảm đáng kể**.
  - Các node nhỏ (7nm trở lại) cực kỳ nhạy cảm với ESD.

**Giải Pháp**:
- Dùng **grounded anode** để trung hòa tích điện.
- Dùng **pulsed plasma** để giảm tích điện.
- Thay thế bằng **Ozone Ashing** (an toàn hơn).

### 2. Ozone Ashing (Ashing Bằng Ozone + UV)

#### Nguyên Lý

**Ozone (O₃) + UV**:
1. **Tạo O₃**: Tia UV 185nm phân hủy O₂ → tạo O₃ (ozone, toan).
   - 2 O₂ + hν(185nm) → O₃ + [O]
2. **Oxygen Radical từ O₃**:
   - O₃ không ổn định → tự phân hủy → O· + O₂.
   - O₃ cũng trực tiếp tấn công resist: C-H + O₃ → oxides + CO + CO₂.
3. **Oxy Hóa Resist**:
   - Giống plasma ashing, nhưng không có **charged particles** (plasma).
   - O· từ O₃ phân hủy polymer.

#### Điều Kiện

- **UV wavelength**: 185 nm (siêu tím).
- **Ozone concentration**: ~10-100 ppm trong không khí.
- **Thời gian**: 20-60 phút (chậm hơn plasma).
- **Nhiệt độ**: Thường ở nhiệt độ phòng (RT) – không bị nóng.

#### Ưu Điểm

- **Không có charge-up**: Không tạo ion → không tích điện → **an toàn cho transistor**.
- **Thích hợp cho công nghệ tiên tiến**: Node nhỏ (<7nm) sử dụng ozone ashing để bảo vệ thiết bị.
- **Tiêu thụ năng lượng thấp**: Không cần microwave công suất cao.

#### Nhược Điểm

- **Tốc độ chậm**: Tốc độ oxy hóa chậm hơn plasma ~3-5 lần.
- **Throughput thấp**: Mỗi cycle 20-60 phút (vs. 10-20 phút plasma).
- **Công suất tạo O₃ yếu**: Yêu cầu UV lamp công suất cao → tiêu thụ điện.

### 3. Wet Process (Quy Trình Ướt – Immerse Stripping)

#### Nguyên Lý

**Chất tẩy axit**:
1. **Chất tẩy điển hình**: **H₂SO₄ + H₂O₂ (viết tắt: H₂SO₄/H₂O₂)** hoặc **N-methyl-2-pyrrolidone (NMP)**.
2. **Cơ chế oxy hóa**:
   - H₂O₂ → H₂O + [O] (oxygen nguyên tử).
   - [O] mạnh oxy hóa hữu cơ.
   - H₂SO₄ acid mạnh → giúp oxy hóa.
3. **Phản ứng**:
   - C-H + [O] → C=O (carbonyl).
   - Tiếp tục → CO, CO₂.
   - H → H₂O.

#### Điều Kiện

- **Nhiệt độ**: 70-120°C (nóng để tăng tốc độ phản ứng).
- **Thời gian**: 5-20 phút (tùy loại resist, độ dày).
- **Nồng độ H₂O₂**: 5-30% (cao → mạnh → nhanh).

#### Ưu Điểm

- **Tốc độ nhanh**: Thích hợp các resist dày.
- **Throughput cao**: Xử lý hàng chục wafer cùng lúc (batch).
- **Chi phí thấp**: Thiết bị đơn giản (bồn chứa, heater).
- **Không tích điện**: An toàn với transistor.

#### Nhược Điểm

- **Lây nhiễm ion**: H₂SO₄/H₂O₂ tạo ion → phải rửa kỹ DI water sau.
- **Chất thải axit**: H₂SO₄ độc, xử lý thải khó, chi phí xử lý cao.
- **Corrosion thiết bị**: Axit mạnh → thiết bị bị ăn mòn.
- **Ít dùng hiện đại**: Thay thế bằng plasma/ozone.

## So Sánh Ba Phương Pháp

| Tiêu Chí | Plasma Ashing | Ozone Ashing | Wet Stripping |
|---------|--------------|-------------|---------------|
| **Tốc độ** | Nhanh (10-20 min) | Chậm (30-60 min) | Nhanh (5-20 min) |
| **Charge-up** | Cao (nguy hiểm) | Không | Không |
| **Hiệu suất** | Cao (throughput) | Vừa | Cao |
| **An toàn thiết bị** | Kém (ESD risk) | Tốt | Tốt |
| **Chi phí thiết bị** | Cao | Vừa | Thấp |
| **Chất thải** | Ít (CO₂/H₂O) | Ít (CO₂/H₂O) | Nhiều (acid) |
| **Ứng dụng hiện đại** | Cũ (<7nm tránh dùng) | **Tiên tiến (chủ lực)** | Cũ |

## Các Vấn Đề và Khắc Phục

### 1. Incomplete Stripping (Không Tẩy Sạch)

**Vấn Đề**: Resist còn dư lượng sau ashing.

**Nguyên Nhân**:
- Thời gian ashing quá ngắn.
- Công suất plasma quá thấp (plasma ashing).
- Nồng độ H₂O₂ quá thấp (wet stripping).

**Giải Pháp**: Tăng thời gian, công suất, hoặc nồng độ.

### 2. Polymer Residue

**Vấn Đề**: Polymerized resist (resist bị "coke" – than hóa) còn lại → màu đen trên wafer.

**Nguyên Nhân**:
- Điều kiện ashing quá mạnh → resist bị than hóa thay vì oxy hóa hoàn toàn.

**Giải Pháp**: Tối ưu công suất/thời gian, hoặc dùng **oxygen-containing gas** (O₂ + H₂O vapor) để oxy hóa polymer.

### 3. Resist Swelling (Resist Phồng Lên)

**Vấn Đề**: Resist hấp thụ nước/hóa chất → phồng lên → kích thước thay đổi → mạch bị sai lệch.

**Nguyên Nhân**: Wet stripping có nước.

**Giải Pháp**: Khô nhẹ sau wet stripping.

### 4. Post-Ashing Residue (Tro Còn Lại)

**Vấn Đề**: Sau ashing, có "ash" (tro – ion oxide) còn lại trên wafer.

**Nguyên Nhân**:
- Resist chứa **silicate** (từ additives) → không bay hơi, để lại dạng tro.
- Plasma ashing quá yếu.

**Giải Pháp**: 
- Dùng **dilute HF** (HF loãng) rửa sau ashing để loại tro.
- Hoặc tăng công suất plasma.

## Thiết Bị Ashing

### Plasma Ashing Equipment

**Cấu Trúc**:
1. **Reaction chamber**: Buồng phản ứng (thường stainless steel).
2. **Electrode**: Electrode mạch (powered) và ground electrode.
3. **Gas inlet**: Dòng O₂ vào.
4. **Pump**: Bơm chân không.
5. **Power source**: Nguồn MW hoặc RF.

**Quy trình**:
- Load wafer → tạo vacuum → khí O₂ vào → tạo plasma → ashing → unload.

### Ozone Ashing Equipment

**Cấu Trúc**:
1. **O₃ generator**: Tạo O₃ từ O₂ bằng UV 185nm.
2. **UV lamp**: Bóng UV 185nm công suất cao.
3. **Chamber**: Buồng với đèn UV bao quanh.
4. **Exhaust**: Thoát khí O₃ (dùng activated carbon filter).

## Quy Trình Lựa Chọn Phương Pháp

1. **Nếu node >= 28nm**: Có thể dùng **Plasma ashing** (ESD risk chưa lớn).
2. **Nếu node < 28nm (hiện tại 7-5nm)**: **Bắt buộc dùng Ozone** để tránh ESD.
3. **Nếu resist dày (>2μm)**: Có thể dùng **Wet stripping** kết hợp (nhanh).
4. **Production volume cao**: **Plasma** (throughput cao), nhưng phải có cơ chế chống ESD.
5. **Đặc biệt nhạy cảm (analog, power devices)**: **Ozone** (an toàn nhất).

## Tầm Quan Trọng

Ashing quyết định:
- **Yield**: Resist còn sót → contamination → chip báng.
- **Độ tin cậy (Reliability)**: Polymer residue → điểm yếu trong oxide → leakage → hỏng lâu dài.
- **Tính chất điện**: Tro còn lại → thay đổi điện dung, điện trở → đặc tính thay đổi.

## Xu Hướng Hiện Đại

- **Từ Plasma → Ozone**: Node nhỏ ngày càng yêu cầu dùng Ozone (an toàn ESD).
- **UV curing trước ashing**: Dùng UV để **harden resist** (làm resist cứng lại) → ashing dễ hơn + nhanh hơn.
- **Dry-in/dry-out**: Wafer phải khô khi vào ashing (nếu ướt sẽ tăng polymer residue).
