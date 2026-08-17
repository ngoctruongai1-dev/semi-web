---
title: 'P-N Tiếp Giáp: Lớp Cạn Kiệt và Điện Thế Nội Tại (pn junction, Depletion Layer, Built-in Potential)'
sourceUrl: https://semi-journal.jp/basics/device/transistor/pn-depletion.html
category: thiet-bi-ban-dan
subcategory: transistor
order: 5
flagship: false
---

## Định Nghĩa Tiếp Giáp P-N

**Tiếp giáp p-n** (p-n接合, pn junction) là "cấu trúc được tạo bằng cách ghép bán dẫn loại p và loại n lại với nhau". Tiếp giáp này là **nền tảng cơ bản** của hầu hết các thiết bị bán dẫn (diode, transistor), vì nó tạo ra **khả năng điều khiển dòng điện**.

## Quá Trình Hình Thành Lớp Cạn Kiệt

### Bước 1: Khuếch Tán Carrier (Carrier Diffusion)

Khi hai vùng p và n được đặt sát nhau:
- **Hole trong p-type** có nồng độ cao, **electron trong n-type** cũng có nồng độ cao.
- Chênh lệch nồng độ tạo ra **gradient** → carrier tự nhiên khuếch tán qua giao diện:
  - Hole từ p → sang vùng n
  - Electron từ n → sang vùng p

### Bước 2: Tẩy-Hấp và Triệt Tiêu (Recombination)

Khi electron và hole gặp nhau tại vùng biên, chúng **triệt tiêu (対消滅)** – kết hợp với nhau và mất đi:
$$e^- + h^+ \rightarrow \text{photon/heat}$$

Quá trình này **loại bỏ carrier** khỏi vùng gần giao diện.

### Bước 3: Hình Thành Lớp Cạn Kiệt (Depletion Layer, 空乏層)

Sau khi carrier triệt tiêu, vùng gần giao diện **không còn carrier tự do** – nhưng vẫn còn **các ion donor và acceptor bị lộ ra**:
- Vùng p: **ion acceptor âm** (B⁻, vì B chỉ có 3 electron hóa trị) được "lộ ra" → tích điện âm
- Vùng n: **ion donor dương** (P⁺, vì P có 5 electron hóa trị) được "lộ ra" → tích điện dương

Vùng chứa các ion này gọi là **lớp cạn kiệt** hay **lớp nghèo carrier** (depletion layer).

## Điện Thế Nội Tại (Built-in Potential, 内蔵電位)

### Hình Thành Điện Trường Nội Bộ

Các ion donor dương và acceptor âm trong lớp cạn kiệt **tạo ra một điện trường tĩnh (built-in field)**. Điện trường này:
- **Hướng từ n → p** (từ dương sang âm)
- **Cô lập** lớp cạn kiệt bằng lực tĩnh điện

### Điện Thế Nội Tại Vbi

**Điện thế nội tại** (Vbi hay Vin) là "độ chênh lệch điện thế giữa vùng p và vùng n khi ở trạng thái cân bằng nhiệt động". Công thức:

$$V_{bi} = \frac{kT}{q} \ln\left(\frac{N_A \cdot N_D}{n_i^2}\right)$$

Trong đó:
- k: hằng số Boltzmann
- T: nhiệt độ tuyệt đối
- q: điện tích cơ bản
- NA, ND: nồng độ acceptor, donor
- ni: nồng độ carrier nội tại

**Ví dụ**: Với Si ở 300K, Vbi thường khoảng 0.6–0.7V.

### Tại Sao Vbi Lại Quan Trọng?

Vbi tạo ra **rào thế năng (potential barrier)** trên biểu đồ dải năng lượng, cách ly hai vùng:
- **Electron từ n muốn sang p** phải vượt qua rào thế → bị ngăn cản
- **Hole từ p muốn sang n** cũng phải vượt qua rào thế → bị ngăn cản

Ở trạng thái cân bằng, các lực tĩnh điện này **ngăn không cho khuếch tán tiếp diễn** → tạo ra **tính chất chỉnh lưu (rectification)** của diode.

## Biểu Đồ Dải Năng Lượng tại Tiếp Giáp P-N

Trên biểu đồ dải năng lượng:
- Dải hóa trị (Ev) và dải dẫn (Ec) **bị uốn cong (band bending)** ở vùng tiếp giáp
- Phía n: Ec và Ev được **nâng cao** (dốc lên)
- Phía p: Ec và Ev được **hạ xuống** (dốc xuống)
- **Rào thế năng** được hình thành ở giao diện, ngăn carrier đa số không thể đi qua tự do

## Ứng Dụng trong Thiết Bị

Tiếp giáp p-n là **bộ khung cơ bản** của:
- **Diode**: khai thác tính chỉnh lưu
- **Transistor BJT**: dùng 2 tiếp giáp p-n (emitter-base và base-collector) để khuếch đại
- **MOSFET**: tạo tiếp giáp p-n giữa Source và Bulk/Substrate
