---
title: Lý Thuyết Dải Năng Lượng và Vùng Cấm (バンド理論とバンドギャップ)
sourceUrl: https://semi-journal.jp/basics/beginner/band.html
category: kien-thuc-co-ban
order: 4
flagship: false
---

## Lý Thuyết Dải Năng Lượng (Band Theory)

**Lý thuyết dải năng lượng** là nền tảng để hiểu các đặc tính điện của bán dẫn. Nó giải thích cách các electron được sắp xếp ở các mức năng lượng khác nhau trong tinh thể.

### Quỹ Đạo Orbital và Sự Hình Thành Dải

Khi các nguyên tử Silicon tiếp cận nhau trong tinh thể:
- Các quỹ đạo electron (orbital, 軌道) tương tác với nhau
- Tạo thành các **quỹ đạo liên kết (bonding orbital, 結合性軌道)** có năng lượng thấp
- Và **quỹ đạo phản liên kết (antibonding orbital, 反結合性軌道)** có năng lượng cao

Khi số lượng nguyên tử **tăng tới vô hạn** (như trong tinh thể thực tế):
- Các mức năng lượng rời rạc này hợp nhất thành các **dải liên tục (band, バンド)**
- Thay vì các mức rời rạc đơn lẻ, các electron được phân bố trên những "dải" năng lượng rộng

## Cấu Trúc Dải Năng Lượng

Trong bán dẫn, có ba thành phần chính:

### 1. Dải Hóa Trị (Valence Band, 価電子帯)
- **Ký hiệu**: Ev
- Là dải năng lượng thấp nhất **chứa electron** ở trạng thái cân bằng
- Chứa các electron tham gia trong các liên kết cộng hóa trị

### 2. Dải Dẫn Điện (Conduction Band, 伝導帯)
- **Ký hiệu**: Ec
- Là dải năng lượng cao nhất trong vùng "có sẵn" để electron di chuyển tự do
- Electron ở dải này có thể chuyển động tự do tạo dòng điện

### 3. Vùng Cấm / Khoảng Cấm (Band Gap, 禁制帯/バンドギャップ)
- **Ký hiệu**: Eg = Ec – Ev
- Là **khoảng năng lượng mà electron KHÔNG thể tồn tại** – một "vùng cấm"
- Nằm giữa dải hóa trị (Ev) và dải dẫn điện (Ec)
- Kích thước của band gap quyết định tính chất điện của vật liệu

## So Sánh Ba Loại Vật Liệu

### Kim Loại (Metal)
- **Cấu trúc dải**: Dải hóa trị và dải dẫn **chồng lấn lên nhau** (overlapping)
- **Band gap**: Không tồn tại (Eg ≈ 0)
- **Kết quả**: Luôn có electron tự do → **dẫn điện tốt ở mọi nhiệt độ**
- **Ví dụ**: Đồng (Cu), Bạc (Ag), Vàng (Au)

### Bán Dẫn (Semiconductor)
- **Cấu trúc dải**: Dải hóa trị và dải dẫn **tách biệt rõ ràng**
- **Band gap**: **Khoảng trung bình (~1-3 eV)**
- **Kết quả**: Cần cấp năng lượng bên ngoài (nhiệt, ánh sáng, điện áp) để kích hoạt electron từ dải hóa trị lên dải dẫn → dẫn điện phụ thuộc vào điều kiện
- **Ví dụ**: Silicon (Si), Germanium (Ge), Gallium Arsenide (GaAs)

### Chất Cách Điện (Insulator)
- **Cấu trúc dải**: Dải hóa trị và dải dẫn tách biệt rõ
- **Band gap**: **Rất lớn (> 3 eV, thường > 5 eV)**
- **Kết quả**: Cần năng lượng rất lớn để kích hoạt electron → **gần như không dẫn điện** ngay cả ở điều kiện bình thường
- **Ví dụ**: Cao su, nhựa, quartz (SiO₂)

## Bảng Band Gap của Các Vật Liệu Phổ Biến

| Vật Liệu | Công Thức | Band Gap (eV) | Phân Loại |
|---|---|---|---|
| **Silicon** | Si | 1.11 ~ 1.12 | Bán dẫn |
| **Germanium** | Ge | 0.67 | Bán dẫn |
| **Gallium Arsenide** | GaAs | 1.43 | Bán dẫn hợp chất |
| **Silicon Carbide** | SiC | 2.86 | Bán dẫn wide bandgap |
| **Gallium Nitride** | GaN | 3.4 | Bán dẫn wide bandgap |
| **Aluminum Nitride** | AlN | 6.3 | Bán dẫn wide bandgap |
| **Diamond** | C | 5.5 | Chất cách điện |
| **Silicon Dioxide** | SiO₂ | 8.95 | Chất cách điện |

## Ý Nghĩa Thực Tế

**Band gap nhỏ (bán dẫn)**:
- Electron dễ dàng được kích thích từ dải hóa trị lên dải dẫn
- Dẫn điện "mềm dẻo" – có thể kiểm soát bằng nhiệt độ, ánh sáng, hoặc điện trường
- Ứng dụng: Transistor, diode, cảm biến

**Band gap lớn (bán dẫn wide bandgap – WBG)**:
- Cần điện áp cao hơn để kích hoạt
- Nhưng khi kích hoạt, chịu được điện áp cao hơn mà không bị đánh thủng (breakdown)
- Ứng dụng: Điều khiển công suất cao, xe điện, biến tần công nghiệp

Chính nhờ sự "linh hoạt" này mà bán dẫn trở thành vật liệu lý tưởng để chế tạo các linh kiện điều khiển và xử lý tín hiệu.
