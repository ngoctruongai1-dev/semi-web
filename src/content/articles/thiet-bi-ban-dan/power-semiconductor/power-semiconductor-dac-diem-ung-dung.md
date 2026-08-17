---
title: 'Bán Dẫn Công Suất: Đặc Điểm và Ứng Dụng (Power Semiconductor)'
sourceUrl: https://semi-journal.jp/basics/device/power/pd-what.html
category: thiet-bi-ban-dan
subcategory: power-semiconductor
order: 1
flagship: false
---

## Định Nghĩa

Bán dẫn công suất (パワー半導体, *power semiconductor*) là "bán dẫn được sử dụng để điều khiển điện năng (điện áp cao, dòng điện lớn)". Các thiết bị sử dụng bán dẫn công suất gọi chung là "Power Device" (thiết bị công suất). Chúng là thành phần cốt lõi của các hệ thống chuyển đổi, điều khiển và phân phối năng lượng điện.

## Chức Năng Chính

Bán dẫn công suất thực hiện **bốn loại chuyển đổi điện năng chính**:

### 1. AC-DC (Chỉnh Lưu)
- Chuyển đổi dòng xoay chiều (AC - Alternating Current) thành dòng một chiều (DC - Direct Current)
- Ví dụ: Sạc điện thoại (100V AC → 5V DC)

### 2. DC-AC (Biến Tần)
- Chuyển đổi dòng một chiều thành dòng xoay chiều
- Ví dụ: Inverter pin mặt trời (DC từ tấm pin → AC 220V cho lưới điện)

### 3. DC-DC (Biến Áp DC)
- Thay đổi độ lớn điện áp một chiều
- Ví dụ: Xe điện (400V → 12V cho các phụ kiện)

### 4. AC-AC (Biến Tần Xoay Chiều)
- Thay đổi tần số dòng xoay chiều
- Ví dụ: Bộ điều tốc độ động cơ AC

## Ứng Dụng Thực Tiễn

Bán dẫn công suất được áp dụng rộng rãi trong các lĩnh vực:

### 1. Sạc Điện Thoại (AC-DC Converter)
- Biến 100V AC từ lưới điện thành 5-20V DC để sạc pin
- Sử dụng Power Diode và MOSFET công suất

### 2. Pin Mặt Trời (Inverter)
- Biến DC từ tấm pin thành AC để bán cho lưới điện
- Hoạt động 24/7, hiệu suất cần >95%
- Sử dụng IGBT (Insulated Gate Bipolar Transistor) công suất cao

### 3. Xe Điện (EV - Electric Vehicle)
- **Inverter chính**: Điều khiển động cơ AC từ pin 300-400V DC
- **DC-DC Converter**: Hạ 300V xuống 12V cho phụ kiện (đèn, quạt, bơm nước)
- **Sạc Onboard**: AC → DC để sạc pin trong xe (7-10kW)
- **Sạc Nhanh**: DC → DC để sạc từ trạm sạc công cộng (50-350kW)

### 4. Tàu Điện/Đường Sắt
- Kiểm soát tốc độ, hướng chuyển động
- Sử dụng Thyristor công suất lớn

### 5. Thiết Bị Gia Dụng
- Lò vi sóng: AC-DC rồi DC-AC tạo sóng siêu cao tần
- Điều hòa: Biến tần công suất
- Nước nóng: AC-DC để sạc trực tiếp

## Tại Sao Bán Dẫn Công Suất Quan Trọng

### 1. Hiệu Suất Năng Lượng
- Bán dẫn công suất có thể chuyển đổi điện năng với hiệu suất >95%
- So với các phương pháp cơ học (máy biến áp), tiết kiệm 30-50% năng lượng

### 2. Điều Khiển Chính Xác
- Dùng kỹ thuật PWM (Pulse Width Modulation) để điều chỉnh tốc độ, độ sáng với độ chính xác cao
- Không cần biến tần cơ học phức tạp

### 3. Bền Vứt
- Không có bộ phận chuyển động → ít bảo trì
- Tuổi thọ lâu (20-30 năm)
- Kích thước nhỏ, nhẹ

### 4. Chi Phí Rẻ
- Công nghệ sản xuất trưởng thành
- Giá thành thấp so với hiệu suất

## Phân Loại Bán Dẫn Công Suất

### 1. Power Diode (Diode Công Suất)
- **Chức năng**: Chỉnh lưu - cho phép dòng điện chảy một chiều
- **Ứng dụng**: Mạch chỉnh lưu, nguồn điện

### 2. Power Transistor
- **Chức năng**: Chuyển mạch điều khiển dòng điện lớn
- **Loại**: BJT, MOSFET, IGBT
- **Ứng dụng**: Inverter, DC-DC converter, sạc nhanh

### 3. Power Thyristor
- **Chức năng**: Điều khiển công suất rất cao
- **Đặc điểm**: Dòng điện tiếp tục chảy ngay cả khi tín hiệu điều khiển mất
- **Ứng dụng**: Đường sắt, thiết bị biến đổi lớn (MW~GW)

## Xu Hướng Phát Triển

### Từ Silicon (Si) sang Wide Bandgap (WBG)
- **Silicon**: Bandgap 1.1eV, dùng lâu
- **SiC/GaN**: Bandgap 3.3-3.4eV, khả năng chịu áp cao hơn 10 lần
- Lợi ích: Tăng hiệu suất 5-10%, giảm kích thước 50%

### Ứng Dụng Trong Kỷ Nguyên Xanh
- Pin mặt trời: Cần inverter hiệu suất cao
- Xe điện: Cần công suất lớn, tiêu thụ điện thấp
- Pin lưu trữ năng lượng: Cần sạc/xả nhanh hiệu quả
