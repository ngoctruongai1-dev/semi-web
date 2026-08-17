---
title: 'Flash Memory: Cấu Trúc và Nguyên Lý Hoạt Động (Flash Memory)'
sourceUrl: https://semi-journal.jp/basics/device/memory/flash.html
category: thiet-bi-ban-dan
subcategory: memory
order: 3
flagship: false
---

## Định Nghĩa

Flash Memory (フラッシュメモリ) là "bộ nhớ bán dẫn không mất dữ liệu khi tắt nguồn (không bay hơi) và có thể ghi đè dữ liệu bằng điện thế". Được sử dụng rộng rãi trong smartphone, USB drive, thẻ SD, SSD (Solid State Drive), camera số, và các thiết bị lưu trữ hiện đại.

## Cấu Trúc Cơ Bản Flash Memory Cell

Mỗi ô Flash Memory bao gồm bốn thành phần chính:

### 1. Floating Gate (Cổng Nổi, フローティングゲート)
- Lớp cổng kim loại lơ lửng giữa không gian
- Nhiệm vụ: **Tích lũy và giữ lại điện tích** để lưu trữ dữ liệu
- Không kết nối trực tiếp với bất kỳ mạch nào → điện tích bị mắc kẹt
- Tồn tại lâu dài: 10-100 năm ngay cả khi không có điện

### 2. Control Gate (Cổng Điều Khiển, コントロールゲート)
- Lớp cổng phía trên floating gate
- Nhiệm vụ: **Áp dụng điện áp cao** để kiểm soát quá trình ghi/xóa
- Điều khiển sự thay đổi điện thế floating gate qua đường hầm electron

### 3. Tunnel Oxide (Màng Oxy Hầm, トンネルオキサイド)
- Lớp SiO₂ mỏng (~10 nm) giữa floating gate và semiconductor substrate
- Đặc tính quan trọng: **Cho phép dòng điện xuyên qua khi áp dụng điện áp cao** (hiệu ứng tunnel)
- Khi điện áp không quá cao, là chất cách điện tốt → giữ điện tích trong floating gate

### 4. Insulating Film (Màng Cách Điện)
- Lớp SiO₂ hoặc Si₃N₄ cách ly các phần tử bên ngoài
- Bảo vệ floating gate khỏi tác động điện từ bên ngoài

### 5. Source và Drain
- **Source (nguồn)**: Nối với GND
- **Drain (máng)**: Nối với bit line
- Khoảng cách giữa chúng được gọi là channel (kênh dẫn)

## Nguyên Lý Hoạt Động

### 1. Ghi Dữ Liệu (Write, 書き込み) - Lưu "0"

**Điều kiện áp điện**:
- Control Gate: +20V đến +25V (điện áp cao)
- Drain: +5V (điện áp trung bình)
- Source: 0V (GND)
- Floating Gate: Ban đầu trung lập

**Quá trình**:
1. Điện áp cao tạo ra trường điện mạnh xuyên qua tunnel oxide
2. Điện tử bị kích thích từ silicon substrate qua hiệu ứng tunnel vào floating gate
3. Điện tử tích tụ trong floating gate (mang điện tích âm)
4. Kết quả: Floating gate có điện tích → Biểu diễn dữ liệu **"0"**

### 2. Xóa Dữ Liệu (Erase, 消去) - Khôi phục "1"

**Điều kiện áp điện**:
- Control Gate: -20V đến -25V (điện áp âm cao)
- Source: +20V đến +25V (điện áp cao)
- Drain: 0V hoặc trôi nổi
- Floating Gate: Ban đầu tích điện

**Quá trình**:
1. Điện áp âm mạnh tại control gate đẩy điện tử ra khỏi floating gate
2. Điện tử xuyên qua tunnel oxide quay lại silicon substrate
3. Floating gate mất điện tích (trở nên trung lập/dương)
4. Kết quả: Floating gate hết điện tích → Biểu diễn dữ liệu **"1"**

### 3. Đọc Dữ Liệu (Read, 読み出し)

**Điều kiện áp điện**:
- Control Gate: +5V (điện áp vừa phải)
- Drain: +1V
- Source: 0V (GND)

**Quá trình**:
1. Áp điện áp nhỏ không đủ để ghi/xóa
2. Điện áp tại control gate điều khiển sự dẫn điện của channel
3. **Nếu floating gate có điện tích (0)**: Điện thế cao → channel hình thành → dòng điện lớn
4. **Nếu floating gate không có điện tích (1)**: Điện thế thấp → channel không rõ → dòng điện nhỏ hoặc không có
5. Đo dòng điện giữa source-drain để xác định 0 hoặc 1

## Hai Loại Flash Memory Chính

### 1. NAND Flash (NAND型フラッシュ)

**Cấu trúc**:
- Các ô nhớ nối tiếp nhau theo chuỗi (series)
- Cần 2-3 transistor làm nhiệm vụ chọn (select transistor)

**Đặc điểm**:
- Diện tích tế bào nhỏ hơn → dung lượng lớn
- Giá thành rẻ
- **Truy cập tuần tự**: Phải đọc/ghi từng khối dữ liệu, không thể truy cập ngẫu nhiên

**Ứng dụng chính**:
- SSD (Solid State Drive)
- USB drive
- Thẻ SD
- Bộ nhớ nội bộ smartphone

### 2. NOR Flash (NOR型フラッシュ)

**Cấu trúc**:
- Các ô nhớ nối song song
- Cấu trúc "NOR logic": sử dụng cổng NOR để kiểm soát

**Đặc điểm**:
- Diện tích tế bào lớn hơn NAND → dung lượng nhỏ hơn
- Giá thành cao hơn
- **Truy cập ngẫu nhiên**: Có thể truy cập bất kỳ địa chỉ nào trực tiếp

**Ứng dụng chính**:
- Firmware/BIOS trong máy tính, máy in, thiết bị ô tô
- Router, thiết bị mạng
- Bộ lưu trữ code thực thi trong vi điều khiển

## So Sánh NAND và NOR

| Đặc Điểm | NAND Flash | NOR Flash |
|----------|-----------|-----------|
| **Cấu trúc** | Nối tiếp (series) | Nối song song |
| **Dung lượng** | Rất lớn (GB~TB) | Nhỏ hơn (MB~GB) |
| **Giá thành** | Rẻ | Đắt hơn |
| **Tốc độ đọc** | Tuần tự | Ngẫu nhiên (nhanh hơn) |
| **Tốc độ ghi** | Tuần tự, chậm | Nhanh hơn nhưng chỉ chia sẻ một điểm |
| **Cần erase trước ghi** | Có (theo khối) | Có |
| **Ứng dụng** | SSD, USB, bộ nhớ điện thoại | Firmware, BIOS, code thực thi |

## Ưu Điểm Của Flash Memory

1. **Không bay hơi**: Giữ dữ liệu 10-100 năm ngay cả khi mất điện
2. **Có thể ghi lại**: Ghi/xóa bằng điện, không cần cơ học
3. **Dung lượng lớn**: Dễ tích hợp hàng tỷ tế bào trên một chip
4. **Tiêu thụ điện thấp**: Đặc biệt trong chế độ chờ
5. **Bền vứt**: Không có bộ phận cơ học chuyển động

## Hạn Chế Của Flash Memory

1. **Tốc độ chậm**: So với SRAM/DRAM, truy cập chậm hơn 100-1000 lần
2. **Tuổi thọ hạn chế**: Chỉ chịu được 10K-1M chu kỳ ghi/xóa (tùy loại)
3. **Wear leveling cần thiết**: Phải phân bổ ghi đều khắp để tránh vùng nào bị "mòn"
4. **Ghi chậm**: Không thể ghi vào từng byte trực tiếp, phải ghi theo khối
