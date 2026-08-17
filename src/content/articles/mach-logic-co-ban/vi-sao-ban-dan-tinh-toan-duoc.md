---
title: Tại Sao Bán Dẫn Có Thể Tính Toán (Semiconductor Computing)
sourceUrl: https://semi-journal.jp/basics/logic-circuit/semiconductor-computing.html
category: mach-logic-co-ban
order: 1
flagship: false
---

## Định Nghĩa

Bán dẫn (半導体, *handoutai*) là "vật chất có khả năng tính toán" nhờ vào hai yếu tố cơ bản: **(1) tính chất độc đáo cho phép kiểm soát dòng điện**, và **(2) khả năng sử dụng hệ nhị phân (0 và 1)** để biểu diễn mọi loại thông tin.

## Tính Chất Độc Đáo Của Bán Dẫn

### Vị Trí Giữa Dẫn Điện và Cách Điện

**Điện trở suất (Resistivity, ρ)**:
- **Chất dẫn điện** (kim loại): ρ = 10⁻⁸ ~ 10⁻⁴ Ω·cm (cực thấp)
- **Bán dẫn**: ρ = 10⁻⁴ ~ 10⁸ Ω·cm (trung gian rộng)
- **Chất cách điện** (cao su): ρ = 10⁸ ~ 10¹⁸ Ω·cm (cực cao)

### Kiểm Soát Dòng Điện

Bán dẫn độc đáo vì **điện trở suất có thể được điều chỉnh mạnh mẽ** bằng:
- **Nhiệt độ**: Tăng nhiệt độ → tăng độ dẫn điện
- **Ánh sáng**: Chiếu ánh sáng → sinh ra các cặp electron-lỗ → tăng độ dẫn điện
- **Điện áp**: Áp điện áp → kiểm soát chính xác dòng điện (dùng trong transistor)
- **Pha tạp (Doping)**: Thêm tạp chất từ nguyên tố khác → thay đổi cấu trúc điện tử

**Ví dụ**: Một điều khiển nhỏ tại Cổng (Gate) transistor có thể bật/tắt dòng điện lớn ở Drain - như "vòi nước điện từ" kiểm soát tính toán.

## Hệ Nhị Phân: 0 Và 1

### Sự Tương Ứng Với Transistor

Máy tính hiện đại sử dụng **hệ nhị phân** (Binary, 2進法) để mã hóa mọi thông tin (chữ, số, hình ảnh, âm thanh).

**Hai trạng thái cơ bản**:
- **"0" (Logic LOW)**: Transistor **TẮT** (OFF) → Không có dòng điện
- **"1" (Logic HIGH)**: Transistor **BẬT** (ON) → Có dòng điện

### Tại Sao Chọn Hệ Nhị Phân?

1. **Phù hợp với cấu trúc vật lý transistor**: Transistor tự nhiên có hai trạng thái ổn định (bật/tắt)
2. **Tốc độ cao**: Chuyển đổi giữa hai trạng thái rất nhanh (nanoseconds)
3. **Chống nhiễu**: Nếu tín hiệu bị nhiễu nhưng vẫn lớn hơn ngưỡng → vẫn đọc được "1" (margin an toàn)
4. **Quy mô lớn**: Có thể xếp chồng hàng tỷ transistor nhỏ nhất để tạo máy tính mạnh

## Từ Transistor Tới Mạch Logic

### Từ Bật/Tắt Tới Phán Đoán

Mỗi transistor có thể được sử dụng như một **công tắc điện từ**. Khi kết hợp nhiều transistor thành **mạch logic** (logic gate), chúng tạo ra khả năng "**phán đoán có điều kiện**":

**Ví dụ: Cổng AND (Phép Và)**
```
        ┌──────┐
    A ──┤      │
        │ AND  ├── Y
    B ──┤      │
        └──────┘

Bảng sự thật (Truth Table):
A  B  Y
0  0  0
0  1  0
1  0  0
1  1  1
```

- **Nguyên lý**: Y=1 chỉ khi **cả A và B đều = 1**
- **Ứng dụng**: "Bật máy chỉ khi cả nút bật và cảm biến đều kích hoạt"

### Từ Logic Tới Tính Toán

**Phép Cộng Nhị Phân**: 1 + 1 = 10 (chứ không phải 2)
- Kết hợp cổng AND, OR, XOR → tạo "bộ cộng (adder)"

**Phép Trừ**: Dùng cổng NOT để đảo bit (bù số) + bộ cộng → thực hiện phép trừ

**Phép Nhân/Chia**: Kết hợp nhiều adder → tạo multiplier/divider

**Bộ Nhớ**: Dùng mạch flip-flop (hai transistor phản hồi dương) → lưu giữ 1 bit

## Kiến Trúc CPU Hiện Đại

### Khối Xây Dựng

Một CPU hiện đại gồm:
1. **ALU (Arithmetic Logic Unit)**: Thực hiện phép cộng, trừ, logic AND/OR
2. **Bộ Nhớ (Memory)**: Lưu trữ dữ liệu và chương trình
3. **Bộ Điều Khiển (Control)**: Chọn phép toán nào chạy
4. **Bus & Kết Nối**: Vận chuyển dữ liệu giữa các khối

### Quy Mô

- **Transistor trong CPU hiện đại**: Hàng tỷ transistor (billions)
- **Kích thước transistor**: ~3-7 nanometers (nm) - nhỏ hơn virus
- **Tần số hoạt động**: 3-5 GHz = 3-5 tỷ chu kỳ/giây

### Ví Dụ: Phép Cộng "7 + 5"

```
7  = 0111 (binary)
5  = 0101 (binary)
──
12 = 1100 (binary) - kết quả
```

Quá trình trong CPU:
1. **Fetch**: Lấy lệnh cộng từ bộ nhớ
2. **Decode**: Giải mã lệnh → tìm ALU
3. **Execute**: ALU thực hiện cộng nhị phân (mạch cộng 4-bit)
   - Chạy 4 mạch adder song song (4 bit)
   - Mỗi adder gồm ~10-20 transistor
   - Toàn bộ phép cộng chạy trong ~1 nanosecond
4. **Store**: Lưu kết quả vào thanh ghi/bộ nhớ

## Ứng Dụng Thực Tiễn

### Smartphone
- **Transistor**: ~15-20 tỷ (GPU + CPU + RAM + bộ nhớ)
- **Xử lý**: Chạy ứng dụng, chơi game, quay video 4K cùng lúc
- **Tốc độ**: Toàn bộ phép tính hoàn thành trong ms (millisecond)

### AI/Machine Learning
- **Mạng nơ-ron**: Hàng triệu "phép cộng" và "phép nhân" chạy song song
- **GPU**: Tối ưu hoá cho tính toán song song → xử lý hàng tỷ phép tính/giây
- **Ứng dụng**: ChatGPT, tự lái xe, nhận dạng khuôn mặt

### Tàu Vũ Trụ/Vệ Tinh
- **Tính toán**: Kiểm soát quỹ đạo, xử lý hình ảnh từ cảm biến
- **Độ tin cậy**: Phải hoạt động dưới điều kiện khắc nghiệt (bức xạ, nhiệt độ cực)

## Kết Luận

Bán dẫn có thể tính toán nhờ:
1. **Khả năng kiểm soát dòng điện** → transistor (công tắc điện từ)
2. **Hệ nhị phân** → cách mã hóa thông tin
3. **Kết hợp transistor thành mạch logic** → phán đoán có điều kiện
4. **Triệu triệu logic gate** → máy tính mạnh (CPU, GPU, AI chips)

Cơ chế này không thay đổi từ những ngày đầu (1950s) đến nay, nhưng **quy mô transistor giảm 1 triệu lần**, tốc độ tăng **1 triệu lần**, khả năng tính toán tăng **1 tỷ lần** - tuân theo **Định luật Moore**.
