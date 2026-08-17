---
title: Band Bending - Uốn Cong Dải Năng Lượng (Band Bending in Semiconductors)
sourceUrl: https://semi-journal.jp/basics/ref/band-bending.html
category: tai-lieu-tham-khao
order: 5
flagship: false
---

## Định Nghĩa

**Band Bending (バンド曲がり)** - uốn cong dải năng lượng là hiện tượng đường cong của các dải năng lượng (conduction band, valence band) tại các giao diện bán dẫn-kim loại hoặc bề mặt bán dẫn. Thay vì một đường thẳng nằm ngang, các dải này bị "uốn cong" lên hoặc xuống, tạo ra những rào thế hoặc những thay đổi năng lượng quan trọng.

## Nguyên Lý Vật Lý Cơ Bản

### Lý Do Band Bending Xảy Ra

**Nguyên tắc cân bằng:** Carrier (electron và lỗ trống) di chuyển cho đến khi **potential (thế năng)** ở mọi nơi trở nên bằng nhau. Khi có sự khác biệt thế năng ban đầu tại giao diện hoặc bề mặt, carrier sẽ di chuyển tạo ra:

1. **Sự phân bố lại carrier** - electron và lỗ trống di chuyển từ vùng này sang vùng khác.
2. **Điện trường nội bộ** - các carrier bị lộ ra tạo lên trường điện.
3. **Thay đổi năng lượng** - từ trường này làm cho năng lượng ở các vị trí khác nhau không còn cùng độ cao.

Kết quả: **các dải năng lượng bị uốn cong (band bending)** để phản ánh sự thay đổi năng lượng này.

## Hai Loại Band Bending Chính

### Loại 1: Tiếp Giáp Schottky (Schottky Junction)

**Điều kiện:** Khi **work function của kim loại (Φ_m) > work function của bán dẫn n-type (Φ_s)**.

**Quá trình hình thành:**
1. Kim loại có năng lượng Fermi cao hơn bán dẫn.
2. Electron từ bán dẫn n chảy sang kim loại để cân bằng.
3. Bán dẫn n bị mất electron → trở nên dương ở gần giao diện.
4. Điện trường hướng từ bán dẫn ra kim loại → cản electron chảy thêm.

**Kết quả Band Diagram:**
- Dải dẫn (conduction band) và dải hóa trị (valence band) **cong lên** (upward band bending).
- Tạo ra **rào thế (potential barrier)** ngăn electron chảy từ bán dẫn sang kim loại.
- Hoạt động như **diode chỉnh lưu** - dòng điện chỉ chảy dễ dàng một chiều.

**Ứng dụng:** Tạo **Schottky diode** - diode tốc độ chuyển mạch cao, điện áp thuận thấp (0.2-0.5V).

### Loại 2: Tiếp Giáp Ohmic (Ohmic Contact)

**Điều kiện:** Khi **work function của kim loại (Φ_m) < work function của bán dẫn n-type (Φ_s)**.

**Quá trình hình thành:**
1. Bán dẫn n có năng lượng Fermi cao hơn kim loại.
2. Electron từ kim loại chảy sang bán dẫn để cân bằng.
3. Bán dẫn n nhận thêm electron → bề mặt trở nên âm.
4. Điện trường hướng từ kim loại vào bán dẫn.

**Kết quả Band Diagram:**
- Dải dẫn **cong xuống** (downward band bending).
- **Bề mặt bán dẫn nhận được electron dẫn từ kim loại**, làm cho dải dẫn ở gần bề mặt thấp hơn.
- Không còn rào thế → **dòng điện chảy tự do cả hai chiều** giống như điện trở thuần.

**Ứng dụng:** Tạo **tiếp xúc Ohmic** tốt giữa kim loại và bán dẫn để kết nối điện cực - rất quan trọng cho thiết bị bán dẫn thực tế.

## Band Bending do Surface States (Trạng Thái Bề Mặt)

### Dangling Bonds và Surface States

**Vấn đề bề mặt:** Tại bề mặt bán dẫn, các nguyên tử không có đủ liên kết với hàng xóm → tạo ra **dangling bonds (鍵が不足, liên kết không liên kết)** = những trạng thái năng lượng bất thường nằm giữa dải hóa trị và dải dẫn.

**Điểm quan trọng:** Các dangling bonds này hoạt động như **electron traps** - nơi để "bẫy" electron nếu chúng tiếp xúc.

### Band Bending do Dangling Bonds (n-type)

**Trong bán dẫn n-type:**
1. Các electron ở bulk (bên trong) di chuyển lên **surface states** để lấp những gap năng lượng.
2. Điều này làm cho **bề mặt trở nên dương** (thiếu electron ở phía trong).
3. Điện trường từ trong ra ngoài hình thành.
4. **Dải dẫn cong lên** ở bề mặt (upward bending) - tạo rào thế ngăn electron di chuyển tới bề mặt.

**Kết quả:** Bế tục lực kéo electron tới bề mặt, từng phần bảo vệ bán dẫn khỏi ảnh hưởng của surface states.

## Ứng Dụng trong Thiết Bị Bán Dẫn

### MOSFET (Metal-Oxide-Semiconductor FET)

**Band bending là cơ chế cốt lõi:**
- Khi áp điện áp dương vào gate, điện trường từ cổng xuyên qua oxide.
- Tại bề mặt Si/SiO₂, band bending thay đổi - electron bị kéo tới bề mặt.
- Hình thành lớp **inversion layer** (lớp đảo chiều) là lớp n mỏng → tạo kênh dẫn.

### Diode (Tiếp Giáp p-n)

**Band bending ở tiếp giáp p-n:**
- Tại vùng biên, band bending tạo **rào thế (potential barrier)** ngăn carrier di chuyển.
- Khi thiên áp thuận (forward bias), rào thế bị hạ thấp → dòng điện chảy.
- Khi thiên áp nghịch (reverse bias), rào thế tăng cao → dòng bị cắt.

### Bề Mặt Silicon và Tính Chất Điện

**Hiệu ứng Surface Effect:**
- Band bending tại bề mặt ảnh hưởng đến độ dẫn điện và tính chất quang học.
- Hình thành **surface charge** (điện tích bề mặt) ảnh hưởng đến hoạt động thiết bị.

## Bảng So Sánh

| Tiêu Chí | Schottky Junction | Ohmic Contact |
|---|---|---|
| **Điều kiện** | Φ_metal > Φ_semiconductor | Φ_metal < Φ_semiconductor |
| **Band Bending** | Uốn lên (Upward) | Uốn xuống (Downward) |
| **Rào Thế** | Có, cao | Không có |
| **Dòng Điện** | Một chiều (chỉnh lưu) | Hai chiều (Ohmic) |
| **Điện Áp Thuận** | 0.2-0.5V | Cực thấp |
| **Ứng Dụng** | Schottky diode, RF switch | Điện cực nối kim loại-Si |

## Kết Luận

Band bending là hiện tượng cơ bản giải thích:
- **Tại sao tiếp giáp kim loại-bán dẫn tạo rào thế** (Schottky) hoặc không (Ohmic).
- **Tại sao MOSFET hoạt động** - điện trường gate tạo band bending để hình thành kênh.
- **Tại sao bề mặt bán dẫn có đặc tính đặc biệt** - do dangling bonds và band bending.

Hiểu band bending là chìa khóa để nắm vững hoạt động của tất cả các thiết bị bán dẫn hiện đại.
