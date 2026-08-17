---
title: Digital và Analog (Kỹ Thuật Số và Tương Tự)
sourceUrl: https://semi-journal.jp/basics/logic-circuit/digital-analog.html
category: mach-logic-co-ban
order: 2
flagship: false
---

## Định Nghĩa Cơ Bản

### Analog (Tương Tự, アナログ)

**Analog** là "xử lý thông tin dưới dạng **giá trị liên tục**". Analog đến từ từ "analogy" (tương đồng) - tín hiệu điện tương đồng với sự biến thiên của đại lượng vật lý.

**Ví dụ**:
- **Kim đồng hồ**: Chuyển động mượt mà qua mọi thời điểm từ 3:00 → 3:00.5 → 3:01 → ...
- **Micrô**: Sóng âm thanh liên tục → điện áp liên tục thay đổi (không có nước nhảy)
- **Nhiệt độ**: Từ 20°C → 20.1°C → 20.2°C → ... (vô hạn các giá trị trung gian)

### Digital (Kỹ Thuật Số, デジタル)

**Digital** là "xử lý thông tin thành **các giá trị rời rạc**". Thông tin được chia thành "bước nhảy" rõ ràng, không có giá trị trung gian.

**Ví dụ**:
- **Đồng hồ số**: Hiển thị 3:01, 3:02 (không có 3:00.5) - nó "nhảy" từ phút này tới phút kế tiếp
- **Dòng điện digital**: Chỉ có hai trạng thái rõ ràng: 0V (Logic 0) hoặc 5V (Logic 1)
- **Mã số**: 0, 1, 2, 3, ... (các số nguyên, không có 2.5)

## Digital Theo Nghĩa Hẹp: Hệ Nhị Phân

### Định Nghĩa Chính Xác

Theo định nghĩa chính xác trong ngành bán dẫn, **"Digital" thường chỉ hệ nhị phân** (binary, 二進法):

**Digital = Biểu diễn dữ liệu bằng hai trạng thái: 0 và 1**

Hệ nhị phân là một trường hợp đặc biệt của digital - nó sử dụng **chỉ 2 mức logic**:
- **0** (Logic LOW): Điện áp thấp (GND, ~0V)
- **1** (Logic HIGH): Điện áp cao (V_DD, ~5V hoặc 3.3V)

### Ví Dụ Chuyển Đổi

**Chữ Cái 'A'**:
- ASCII Code: 65 (thập phân)
- **Binary**: 0100 0001 (8 bit)

**Chữ Số '1'**:
- ASCII Code: 49 (thập phân)
- **Binary**: 0011 0001 (8 bit)

**Hình Ảnh**: Mỗi pixel là 3 byte (R, G, B), mỗi byte = 8 bit binary

## Tại Sao Sử Dụng "0 Và 1"?

### Phù Hợp Với Cấu Trúc Vật Lý

**Lý do chính**: "Hai trạng thái 0 và 1 **tương thích tuyệt vời với cấu trúc vật lý của linh kiện bán dẫn**."

#### 1. Transistor (Xử Lý Logic)

Transistor là một **công tắc điện tử** với hai trạng thái:

- **OFF (Tắt)**: Không có dòng điện từ Drain → Source = **0**
- **ON (Bật)**: Có dòng điện từ Drain → Source = **1**

Điểm mạnh:
- Chuyển đổi rất nhanh: nanoseconds → picoseconds
- Cấu trúc đơn giản: 1 transistor = 1 bit logic
- Độ tin cậy cao: Có margin an toàn (ngưỡng hiện rõ ràng)

#### 2. Bộ Nhớ (Lưu Trữ)

**DRAM**: 1 transistor + 1 tụ điện
- **Tích điện** (Charged): Tụ có điện tích = **1**
- **Xả (Discharged)**: Tụ không có điện tích = **0**

**Flash**: Floating gate
- **Có electron** trong floating gate = **0**
- **Không có electron** = **1**

**SRAM**: Flip-flop (2 transistor phản hồi)
- **Trạng thái A=HIGH, B=LOW** = **1**
- **Trạng thái A=LOW, B=HIGH** = **0**

### Lợi Ích

1. **Tốc độ cao**: Transistor chuyển mạch cực nhanh
2. **Chống nhiễu tốt**: Nếu tín hiệu bị nhiễu nhưng vẫn lớn hơn ngưỡng → vẫn nhận đúng
3. **Dễ tích hợp**: 0 và 1 là trường hợp đặc biệt → lý thuyết toán học đơn giản
4. **Quy mô lớn**: Có thể xếp chồng hàng tỷ transistor/bit nhỏ nhất

## So Sánh Analog vs Digital

| Đặc Điểm | Analog | Digital |
|----------|--------|---------|
| **Giá trị** | Liên tục | Rời rạc (0 hoặc 1) |
| **Độ chính xác** | Phụ thuộc thiết bị | Cao (có lỗi ±0.5 LSB) |
| **Tiêu thụ điện** | Vừa | Thấp (khi OFF) |
| **Tốc độ** | Chậm hơn | Nhanh hơn |
| **Tín hiệu gốc** | Âm thanh, Hình ảnh | Dữ liệu |
| **Bộ nhớ** | Khó lưu | Dễ lưu, không biến dạng |
| **Ứng dụng** | Ampli, radio, đo lường | CPU, GPU, RAM, SSD |

## Chuyển Đổi Giữa Analog và Digital

### ADC (Analog-to-Digital Converter, A/D)

**Mục đích**: Chuyển tín hiệu analog liên tục thành dãy số digital rời rạc

**Ví dụ**: Micrô thu tiếng nói (analog) → mã PCM (digital) để lưu vào RAM

**Quy trình**:
1. **Lấy mẫu (Sampling)**: Đo điện áp ở các thời điểm cách đều (ví dụ 48kHz = 48000 lần/giây)
2. **Lượng tử hóa (Quantization)**: Làm tròn giá trị đo tới mức gần nhất (8, 16, hoặc 24 bit)
3. **Mã hóa (Encoding)**: Chuyển thành nhị phân để lưu vào bộ nhớ

### DAC (Digital-to-Analog Converter, D/A)

**Mục đích**: Chuyển dãy số digital thành tín hiệu analog liên tục

**Ví dụ**: Dữ liệu âm thanh digital (MP3) → sóng điện analog → loa phát âm

## Ứng Dụng Thực Tiễn

### Smartphone
- **Micrô**: ADC chuyển giọng nói thành dữ liệu digital
- **CPU/GPU**: Xử lý digital (các mạch logic)
- **Loa/Tai nghe**: DAC chuyển dữ liệu digital thành âm thanh analog

### Cảm Biến Hình Ảnh (Camera)
- **Cảm biến**: Photon (ánh sáng) → điện tích analog
- **ADC**: Điện tích → giá trị pixel (8, 10, 12 bit)
- **Xử lý**: CPU/GPU xử lý hình ảnh digital (filter, nén, nhận dạng)

### Radar/Lidar
- **Tín hiệu analog**: Sóng phản xạ từ vật thể
- **ADC**: Chuyển thành dữ liệu khoảng cách
- **Digital Processing**: CPU xác định vị trí, hướng chuyển động

## Kết Luận

- **Analog**: Tự nhiên, liên tục, phù hợp lấy mẫu thế giới thực
- **Digital (Binary)**: Nhân tạo, rời rạc, phù hợp với transistor, nhanh, chính xác, dễ lưu trữ

**Xu hướng**: Hầu hết thiết bị hiện đại dùng digital vì tốc độ, chính xác, chi phí. Chỉ phần "chuỗi analog" (ADC, DAC, RF) vẫn cần để tương tác với thế giới thực.
