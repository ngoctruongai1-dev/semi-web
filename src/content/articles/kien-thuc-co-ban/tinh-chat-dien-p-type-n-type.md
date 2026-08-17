---
title: Tính Chất Điện của Bán Dẫn P-type và N-type (半導体のp型・n型)
sourceUrl: https://semi-journal.jp/basics/beginner/electrical-property.html
category: kien-thuc-co-ban
order: 3
flagship: false
---

## Cấu Trúc Nguyên Tử và Quy Tắc Octet

Tính chất điện của bán dẫn được xác định bởi **electron hóa trị (valence electron, 価電子)** – các electron ở lớp ngoài cùng của nguyên tử. Theo **quy tắc octet (オクテット則)**, các nguyên tử tự nhiên có xu hướng ổn định khi có **8 electron trong lớp ngoài cùng** (hoặc 2 cho lớp K).

## Silicon Tinh Khiết (Intrinsic Semiconductor)

Nguyên tử Silicon (Si) có **4 electron hóa trị**. Để đạt trạng thái ổn định:
- Si tạo **liên kết cộng hóa trị (covalent bond, 共有結合)** với 4 nguyên tử Si lân cận trong tinh thể
- Mỗi liên kết sử dụng 2 electron, đạt tổng cộng 8 electron ở lớp ngoài

**Kết quả**: Silicon tinh khiết là **bán dẫn nội tại** – lực liên kết mạnh, gần như không có electron tự do → điện trở suất cao, gần như không dẫn điện, không thích hợp để sử dụng thực tế.

## Pha Tạp (Doping) và Quá Trình Thay Đổi

Để biến Silicon tinh khiết thành vật liệu dẫn điện hữu dụng, ta thêm một lượng **rất nhỏ** các nguyên tố khác (gọi là **tạp chất pha tạp hoặc dopant, 不純物**). Chỉ với nồng độ vô cùng thấp (phần triệu – ppm), tính dẫn điện thay đổi đáng kể.

## Bán Dẫn Loại n (n-type Semiconductor, n型半導体)

### Pha Tạp Phosphorus

Khi **Phosphorus (P, 15 electron)** được pha tạp vào Silicon:
- P có **5 electron hóa trị** (nhiều hơn Si 1 electron)
- P liên kết với 4 nguyên tử Si xung quanh → 4 liên kết cộng hóa trị được hình thành
- **1 electron còn lại bị "tự do" (loosely bound)**, dễ dàng thoát khỏi nhân P

### Electron Tự Do

Electron tự do này được gọi là **hạt tải điện (carrier, キャリア)** – chính là những "vận động viên" truyền tải điện trong vật liệu. Vì lý do này:
- Phần tử tạp chất P được gọi là **donor (cho phát tán, ドナー)** – nó "cho" electron
- Loại bán dẫn được gọi là **n-type (loại n)** – viết tắt của "**Negative**" (âm), vì những electron âm là những hạt tải chính

## Bán Dẫn Loại p (p-type Semiconductor, p型半導体)

### Pha Tạp Boron

Khi **Boron (B, 5 electron)** được pha tạp vào Silicon:
- B có **3 electron hóa trị** (ít hơn Si 1 electron)
- B liên kết với 4 nguyên tử Si xung quanh → nhưng chỉ 3 liên kết được hình thành
- **1 vị trí liên kết bị trống**, được gọi là **lỗ trống (hole, 正孔)**

### Lỗ Trống Dương

Lỗ trống có thể được xem là một "hạt tải dương" vì nó đại diện cho sự vắng mặt của một electron âm:
- Khi một electron lân cận chuyển động để lấp lỗ trống đó, một lỗ trống mới hình thành ở vị trí cũ của electron
- Quá trình này lặp lại liên tiếp, tạo ra dòng điện kể như là **lỗ trống "chuyển động" qua tinh thể**

Vì lý do này:
- Phần tử tạp chất B được gọi là **acceptor (chấp nhận tán, アクセプター)** – nó "chấp nhận" electron
- Loại bán dẫn được gọi là **p-type (loại p)** – viết tắt của "**Positive**" (dương), vì những lỗ trống dương là những hạt tải chính

## Cơ Chế Dẫn Điện

### N-type
- **Hạt tải chính (majority carrier)**: electron
- **Hạt tải phụ (minority carrier)**: lỗ trống
- Dòng điện chảy từ cực âm đến cực dương (ngược chiều dòng electron từ dương sang âm)

### P-type
- **Hạt tải chính**: lỗ trống
- **Hạt tải phụ**: electron
- Dòng điện chảy từ cực dương đến cực âm (cùng chiều chuyển động của lỗ trống)

## Ứng Dụng Thực Tế

Cặp **p-type và n-type** là nền tảng của hầu hết các thiết bị bán dẫn hiện đại:
- **Tiếp giáp p-n (pn junction)** – thành phần cơ bản của diode, transistor, solar cell
- **MOSFET và các transistor hiện đại**
- **Cảm biến và bộ nhớ**

Bằng cách kết hợp các vùng p-type và n-type ở các hình dạng khác nhau, ta có thể tạo ra những thiết bị với các tính chất điện tử cực kỳ đa dạng.
