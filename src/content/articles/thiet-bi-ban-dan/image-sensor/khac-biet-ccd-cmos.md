---
title: Sự Khác Biệt Giữa CCD và CMOS (CCD vs CMOS Sensors)
sourceUrl: https://semi-journal.jp/basics/device/image-sensor/ccd-cmos.html
category: thiet-bi-ban-dan
subcategory: image-sensor
order: 2
flagship: false
---

## Lịch Sử Phát Triển

- **CCD** (1969): Phát minh đầu tiên, chiếm ưu thế từ 1980s–2000s
- **CMOS** (1960s–1990s): Phát triển song song nhưng chất lượng kém → chỉ dùng trong ứng dụng thấp
- **Ngã Ba Năm 2000**: CMOS bắt đầu lên ngôi (smartphone xuất hiện → cần power thấp)
- **Hiện Nay** (2025): CMOS **>95% thị trường**, CCD chỉ còn ứng dụng chuyên dụng

---

## Nguyên Lý Hoạt Động Cơ Bản

### CCD (Charge-Coupled Device, 電荷結合素子)

**Cơ Chế: "Chuyền Thùng Nước" (Bucket Brigade)**

```
┌─────────────────────────────────────┐
│ Pixel Row 1  │ Pixel Row 2  │ ...   │  ← Vertical Shift Register
├─────────────────────────────────────┤
│ Photodiode   │ Photodiode   │ ...   │  (tích lũy điện tích)
└─────────────────────────────────────┘
        ↓         ↓
    [Horizontal Shift Register]
        ↓
    [Amplifier & ADC] ← Điểm duy nhất chuyển đổi thành điện áp
        ↓
   [Đầu ra Video]
```

**Hoạt Động Chi Tiết**:

1. **Tích Lũy**: Photodiode ở tất cả pixel tích lũy điện tích trong thời gian Texp

2. **Truyền Dọc (Vertical Shift)**: 
   - Xung nhịp điều khiển được áp vào (shift clock, φ1, φ2)
   - Điện tích từ pixel trên → pixel dưới, dòng sau dòng
   - Thực hiện hàng loạt (row-by-row)

3. **Truyền Ngang (Horizontal Shift)**:
   - Điện tích từ hàng đã chọn → lần lượt chuyển qua horizontal register
   - Pixel-by-pixel (từ trái sang phải)

4. **Khuếch Đại & Chuyển Đổi**:
   - **Một amplifier duy nhất** ở cạnh chip nhận tất cả điện tích
   - Chuyển điện tích → điện áp (Charge-to-Voltage Converter)
   - ADC chuyển thành số

**Ưu Điểm**:
- Amplifier chia sẻ → **độ ồn thấp, chất lượng cao**
- **Độ Nhạy cao** (~90% QE): photodiode lớn (không bị dây dẫn che)
- Nếu được chế tạo tốt → chất lượng hình ảnh **tuyệt vời**

**Nhược Điểm**:
- **Truyền điện tích sequential** → chậm (không thể đọc trực tiếp từ một pixel)
- **Phức tạp**: cần shift register dọc/ngang + xung nhịp timing phức tạp
- **Tiêu thụ công suất cao** (~1 W vì phải "kéo" điện tích suốt thời gian)
- **Không thể đọc từng hàng nhanh** → tốc độ frame thấp
- **Giá thành cao** (quy trình riêng biệt, khó tích hợp logic)

### CMOS (Complementary MOS, CMOS撮像素子)

**Cơ Chế: "Mỗi Pixel Có Amplifier Riêng" (In-Pixel Amplifier)**

```
┌─────────────────────────────────────┐
│ PD+AMP │ PD+AMP │ PD+AMP │ ...     │  ← Mỗi pixel có amplifier riêng
├─────────────────────────────────────┤
│ Row 1  │ Row 2  │ Row 3  │ ...     │  ← Có thể chọn hàng độc lập
└─────────────────────────────────────┘
    ↓      ↓       ↓
[Column Multiplexer] ← Chọn cột nào
    ↓
[ADC] ← Chuyển đổi từng pixel
    ↓
[Pixel Data]
```

**Hoạt Động Chi Tiết**:

1. **Tích Lũy**: Photodiode + Storage Node lưu trữ điện tích (như CCD)

2. **Đọc Trực Tiếp**:
   - **Chọn Hàng** (Row Address): bật source follower amplifier ở hàng cần đọc
   - **Chọn Cột** (Column Address): chọn pixel nào trong hàng
   - **Khuếch Đại Ngay Tại Pixel**: source follower (transistor amplifier 1 tầng) chuyển charge → voltage
   - **ADC**: mỗi cột có 1 ADC (hoặc 1 ADC chia sẻ lần lượt)

3. **Xuất Dữ Liệu**: pixel-by-pixel (hoặc hàng-by-hàng nhanh)

**Ưu Điểm**:
- **Đọc Ngẫu Nhiên (Random Access)**: có thể đọc bất kỳ pixel nào → tốc độ **siêu nhanh**
- **Tốc Độ Frame Cao**: hỗ trợ 4K 60fps, 8K, slow-mo 1000fps
- **Tiêu Thụ Công Suất Thấp**: chỉ khuếch đại pixel cần đọc, không "kéo" tất cả
- **Dễ Tích Hợp**: dùng quy trình CMOS chuẩn → có thể tích hợp logic, ADC, ISP trên cùng chip (System-on-Chip)
- **Giá Thành Rẻ**: quy trình tiêu chuẩn, sản xuất hàng loạt
- **Kích Thước Nhỏ**: logic điều khiển trên cùng substrate → chip nhỏ gọn

**Nhược Điểm**:
- **Độ Nhạy Thấp Hơn** (~50–70% so với CCD): vì amplifier (transistor) chiếm chỗ trên pixel
- **Nhiễu Cao Hơn**: mỗi amplifier có noise riêng (nhân lên khi nhiều pixel)
- **Read Noise**: noise từ source follower amplifier (~10–20 e⁻ rms) >CCD (~5 e⁻)
- **Crosstalk**: dòng điện từ một transistor ảnh hưởng pixel lân cận (vì tích hợp chặt)

---

## So Sánh Định Lượng

| Tính Năng | CCD | CMOS |
|---|---|---|
| **Độ Nhạy (QE)** | 90% | 50–70% (70–90% với BSI) |
| **Read Noise** | 3–5 e⁻ | 10–20 e⁻ (reduced với CIS 技術) |
| **SNR** | ~50 dB | ~45 dB (khoảng lệch ~5dB) |
| **Dynamic Range** | 70–100 dB | 60–80 dB |
| **Tốc Độ Frame** | <100 fps | 1000+ fps |
| **Tiêu Thụ** | ~1 W | ~50–200 mW |
| **Chi Phí Chip** | $200–500 | $10–100 |
| **Quy Trình** | Riêng biệt | CMOS chuẩn |
| **Tích Hợp Logic** | Khó | Dễ (on-chip ADC, ISP) |
| **Kích Thước Pixel** | 5–10 μm | 0.7–2 μm |

---

## Tại Sao CMOS Chiếm Ưu Thế Hiện Nay

### 1. **Yêu Cầu Thị Trường: Tốc Độ + Giá Rẻ**

- Smartphone cần 4K video → tốc độ cao (CCD không đủ)
- Giá bán rẻ (DxOMark rating → affordability)
- CCD không thể tuân thủ → thị trường loại bỏ dần

### 2. **Công Nghệ CMOS Tiến Bộ (2010s–2020s)**

**Back-Illuminated (BSI / BI-CIS, 裏面照射)**:
- Lật chip để photodiode tiếp xúc trực tiếp với ánh sáng (không bị dây kim loại che)
- Độ nhạy tăng ~70–90% (gần với CCD)
- Giải quyết **chủ yếu nhược điểm độ nhạy**

**Stacking (3D, 積層化)**:
- Xếp chồng photodiode + logic lên nhau
- Giảm crosstalk, cải thiện SNR

**Per-Pixel Gain & Exposure**:
- Mỗi pixel kiểm soát được amplifier gain + integration time riêng
- Linh động hơn CCC

### 3. **Lợi Thế Kinh Tế**

- Quy trình CMOS tiêu chuẩn (được dùng vào mục đích khác)
- CCD cần thiết bị chuyên dụng → chi phí sản xuất cao
- **Đơn giá CMOS: $5–50 vs CCD: $200–500** → CMOS thắng

### 4. **Tích Hợp Toàn Diện**

CMOS cho phép **System-on-Chip**:
- Photodiode + Source Follower + ADC + ISP (Image Signal Processor) + DRAM + Interface (MIPI) trên **1 chip duy nhất**
- CCD: Riêng sensor → cần chip xử lý bên ngoài → tổng diện tích lớn, tiêu thụ cao

---

## Ứng Dụng Hiện Nay

### Vẫn Dùng CCD

1. **Thiên văn học**: cần độ nhạy cực cao (nguyên sao mờ)
2. **Y Tế**: endoscope cần chất lượng ảnh tuyệt vời (surgery)
3. **Công Nghiệp**: kiểm tra chất lượng sản phẩm (cần SNR cao)
4. **Bioscience**: microscopy (tốc độ không quan trọng)

### CMOS Chiếm Ưu Thế

1. **Smartphone & Tablet**: mỗi điện thoại 3–6 sensors (main, ultra-wide, tele, depth, ToF)
2. **Máy Quay Video**: 4K, 8K (DCI cinema 4K)
3. **Xe Tự Lái**: nhiều camera 360° cần tốc độ (real-time processing)
4. **Drone**: cần nhẹ, tiêu thụ thấp
5. **Game**: VR camera tracking high-speed
6. **IoT**: camera giám sát (tiêu thụ năng lượng quan trọng)

---

## Xu Hướng Tương Lai

### CCD

- Dần **biến mất** (thiết bị chuyên dụng nhất)
- Thay thế bằng **CMOS cao cấp** (BSI, stacking)

### CMOS

1. **Pixel Size Nhỏ Hơn**: 0.7 μm → 0.5 μm (tăng MP nhưng giảm light gathering)
2. **Multi-Spectrum**: sensor đa sắc (RGB + NIR / UV) trên cùng chip
3. **Neuromorphic Sensors**: cảm biến sự kiện (event-based, chỉ ghi pixel thay đổi)
4. **Quant Imaging**: sensor lượng tử (trong tương lai xa)

---

## Kết Luận

| Tiêu Chí | Chiến Thắng |
|---|---|
| Độ Nhạy Thuần Chủng | CCD (chưa có BSI) |
| Chất Lượng Ảnh Tối Ưu | CCD (static) |
| Tốc Độ | **CMOS** (rõ ràng) |
| Chi Phí | **CMOS** (rõ ràng) |
| Tích Hợp/Linh Động | **CMOS** (rõ ràng) |
| Ứng Dụng Hiện Đại | **CMOS** (>95% thị trường) |

**CMOS là chiến thắng lớn của ngành bán dẫn** – nó chứng minh rằng sự năng động (speed) + chi phí thấp + tích hợp cao có thể **bù cho nhược điểm chất lượng** thông qua công nghệ tiến bộ.
