---
title: 'Đánh Giá Độ Tin Cậy Oxide Cổng: TZDB và TDDB'
sourceUrl: https://semi-journal.jp/basics/method/tzdb-tddb.html
category: phuong-phap-danh-gia
order: 11
flagship: false
---

## Định Nghĩa
TZDB (Time Zero Dielectric Breakdown) và TDDB (Time Dependent Dielectric Breakdown) là hai phương pháp quan trọng để đánh giá độ tin cậy của lớp oxide cách điện (gate oxide) trong MOSFET, một thành phần critical trong các transistor hiện đại.

## Phương Pháp TZDB (Time Zero Dielectric Breakdown)

### Nguyên Lý
TZDB đo điện áp đánh thủng bằng cách tăng dần điện áp cổng (gate voltage) và theo dõi dòng rò (leakage current). Khi dòng rò vượt ngưỡng, đó là điểm đánh thủng.

### Phân Loại Các Chế Độ Đánh Thủng
"Phân bố điện áp đánh thủng TZDB được phân loại thành 3 chế độ," được phân biệt bởi các loại khuyết tật:
- Khuyết tật nhỏ (pinhole – lỗ chân chim).
- Đánh thủng nội tại của oxide.

## Phương Pháp TDDB (Time Dependent Dielectric Breakdown)

### Nguyên Lý
TDDB áp dụng một điện áp (hoặc dòng điện) không đổi trong một khoảng thời gian dài, rồi đo khoảng thời gian khi 50% số thiết bị kiểm tra bị hỏng. Đây là phương pháp đánh giá độ tin cậy dài hạn.

### Tầm Quan Trọng Ngày Càng Tăng
Phương pháp này trở nên rất quan trọng khi độ dày lớp oxide giảm xuống trong các transistor thu nhỏ hiện đại. Với oxide mỏng hơn, dòng rò tăng lên, do đó đánh giá độ tin cậy dài hạn trở nên critical.

## Sự Khác Biệt Chính
- **TZDB**: đánh giá khả năng chịu đựng ngay lập tức (immediate breakdown characteristics) dưới tác dụng tăng điện áp.
- **TDDB**: đánh giá độ tin cậy dài hạn (long-term reliability) dưới tác dụng ứng suất điện liên tục – rất quan trọng để dự đoán tuổi thọ của thiết bị trong thực tế.

## Phương Pháp Phân Tích
Cả hai phương pháp đều sử dụng phân tích thống kê trên nhiều thiết bị trong wafer thử nghiệm để thiết lập các tiêu chuẩn độ tin cậy cho sản xuất bán dẫn.
