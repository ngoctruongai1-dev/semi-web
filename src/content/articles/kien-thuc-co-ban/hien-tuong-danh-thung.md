---
title: Hiện Tượng Đánh Thủng / Hạ Thấp (Breakdown, 破壊現象)
sourceUrl: https://semi-journal.jp/basics/beginner/breakdown.html
category: kien-thuc-co-ban
order: 8
flagship: false
---

## Định Nghĩa

Khi **điện áp nghịch áp dụng lên tiếp giáp p-n vượt quá một giá trị ngưỡng nhất định**, dòng điện ngược sẽ **tăng đột ngột** từ giá trị rất nhỏ (nanoamperes) lên giá trị rất lớn (amperes). Hiệu ứng này gọi là **breakdown (破壊, hạ thấp/sụp đổ)** và tiếp giáp sẽ bị phá hủy nếu không có biện pháp giới hạn dòng.

## Hai Cơ Chế Breakdown Chính

Có **hai cơ chế vật lý khác nhau** có thể gây ra breakdown, tuỳ thuộc vào cấu trúc tiếp giáp:

## 1. Avalanche Breakdown (Tuyết Lở Điện Tử, 電子雪崩)

### Cơ Chế Vật Lý

Trong **lớp cạn kiệt rộng** (ứng với doping nhẹ/thấp):

1. **Gia Tốc Bởi Điện Trường Mạnh**: Electron tự do trong lớp cạn kiệt bị điện trường mạnh gia tốc tới vận tốc rất cao.

2. **Va Chạm Tác Động (Impact Ionization)**: Electron có năng lượng cao va chạm với các nguyên tử Silicon trong mạng tinh thể:
   - Electron va chạm vào Si → **phá vỡ liên kết cộng hóa trị Si-Si**
   - Năng lượng va chạm **giải phóng thêm electron** và **tạo ra lỗ trống** (một cặp electron-hole mới)

3. **Hiệu Ứng Dây Chuyền (Cascade Effect)**: 
   - Những electron mới sinh ra cũng bị gia tốc, lại va chạm tiếp → giải phóng thêm electron
   - Lỗ trống mới cũng bị gia tốc ngược chiều → va chạm → giải phóng thêm lỗ trống
   - Quá trình lặp lại liên tiếp theo **cấp số nhân** (exponential)
   - Từ một electron ban đầu → 2 → 4 → 8 → 16... → hàng triệu electron

4. **Kết Quả**: Dòng điện tăng **rất nhanh** (từ nanoamperes tới amperes chỉ trong vài microseconds)

### Đặc Điểm

- Xảy ra ở **vùng doping thấp/nhẹ** (cạn kiệt dày, điện trường trung bình)
- Xảy ra ở **điện áp breakdown cao hơn** (vài chục tới vài trăm volts)
- **Reversible**: Nếu giảm điện áp lại, hình thành hoàn toàn bình thường (không bị vĩnh viễn hủy)
- Ứng dụng: Sử dụng trong **varistor** (저항기를 조절하는 소자) để ổn định điện áp

## 2. Zener Breakdown (Hiệu Ứng Đường Hầm / Tunnel Effect, トンネル効果)

### Cơ Chế Vật Lý

Trong **lớp cạn kiệt rất mỏng** (ứng với doping cao/nặng):

1. **Điện Trường Rất Mạnh**: Vì cạn kiệt rất mỏng, cùng điện áp → điện trường **cực kỳ mạnh** (khoảng 10⁵-10⁶ V/cm)

2. **Tunnel Effect (Hiệu Ứng Đường Hầm)**: 
   - Điện trường mạnh **kéo trực tiếp electron từ liên kết Si-Si** (không cần va chạm)
   - Theo cơ học lượng tử: electron có khả năng **"xuyên qua" rào thế năng** như đi qua "đường hầm" (tunnel)
   - Electron được "hút" qua lớp cạn kiệt một cách trực tiếp, tạo ra dòng lớn

3. **Không Cần Va Chạm**: Khác với avalanche, Zener **không cần electron va chạm** – chỉ cần điện trường mạnh đủ để "kéo" electron qua

4. **Kết Quả**: Dòng điện tăng, nhưng cơ chế khác hoàn toàn

### Đặc Điểm

- Xảy ra ở **vùng doping cao/nặng** (cạn kiệt mỏng, điện trường rất mạnh)
- Xảy ra ở **điện áp breakdown thấp hơn** (vài volts, thường ~5V cho Si)
- **Reversible**: Giảm điện áp trở lại bình thường (không bị vĩnh viễn hủy)
- **Ứng dụng**: **Zener Diode** – dùng để ổn định điện áp (voltage regulator)
- **Phát hiện**: Có thể sử dụng để xác định bằng cách đo điện áp breakdown

## So Sánh Avalanche và Zener

| Đặc Tính | Avalanche | Zener |
|---|---|---|
| **Cơ Chế** | Va chạm tác động (Impact ionization) | Tunnel effect (xuyên qua) |
| **Vùng Doping** | Thấp/nhẹ | Cao/nặng |
| **Độ Dày Cạn Kiệt** | Dày | Mỏng |
| **Điện Trường** | Trung bình | Cực kỳ mạnh |
| **Điện Áp Breakdown** | Cao (10-100+ V) | Thấp (< 10V) |
| **Tính Đảo Ngược** | Có (Reversible) | Có (Reversible) |
| **Ứng Dụng** | Varistor | Zener Diode |

## Dòng Rò (Leakage Current) Trước Breakdown

Trước khi đạt ngưỡng breakdown, tiếp giáp ở **thiên áp nghịch có dòng rò rất nhỏ**:
- **Dòng nhiễu vùng cạn kiệt (Generation current)**: từ việc tạo cặp electron-hole bên trong cạn kiệt
- **Dòng bề mặt (Surface leakage)**: từ các trạng thái trapping tại bề mặt Si/SiO₂

Dòng rò này thường là **10⁻¹² ~ 10⁻⁹ A** ở nhiệt độ phòng.

## Ứng Dụng Thực Tế

### Zener Diode (Ổn Định Điện Áp)
- Chọn Zener Diode với điện áp breakdown nhất định (ví dụ 5V)
- Khi điện áp vượt quá 5V, Zener breakdown → dòng tăng → giảm điện áp
- Dung địa hiệu ứng: điện áp ở **ngõ ra luôn ≈ 5V** dù điện áp đầu vào thay đổi

### Surge Protector (Bảo Vệ Chống Tăng Áp)
- Sử dụng Zener/Varistor song song với mạch
- Khi có xung áp cao, linh kiện này breakdown → đánh tắt tăng áp trước khi hại mạch chính

### Photodiode (Phát Hiện Ánh Sáng)
- Để tăng độ nhạy, photodiode thường hoạt động ở **thiên áp nghịch gần ngưỡng breakdown**
- Photon tạo cặp electron-hole → các carrier này được gia tốc → impact ionization → dòng được khuếch đại

## Hiện Tượng Nhiệt Đảo (Thermal Runaway)

Nếu không có biện pháp bảo vệ:
- Dòng breakdown gây **phát nhiệt Joule** (P = I²R)
- Nhiệt tăng → kích hoạt thêm carrier → dòng tiếp tục tăng
- Nhiệt lại tăng → quá trình "chạy trốn" (runaway) → **tiếp giáp bị hoàn toàn hủy**

## Kết Luận

Hiến tượng breakdown là **ranh giới hoạt động** của tiếp giáp p-n – nó cho phép thiết kế các thiết bị chuyên dụng (Zener diode, varistor) nhưng cũng là một nguy hiểm cần tránh trong các mạch bình thường. Hiểu rõ hai cơ chế này là chìa khóa để thiết kế mạch bảo vệ hiệu quả.
