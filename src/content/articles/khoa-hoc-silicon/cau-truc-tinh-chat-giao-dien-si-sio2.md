---
title: Cấu Trúc Tính Chất Giao Diện Si/SiO₂ (Si/SiO₂界面)
sourceUrl: https://semi-journal.jp/basics/si-chem/sio2-interface.html
category: khoa-hoc-silicon
order: 13
flagship: false
---

## Heterojunction Cực Dốc

Giao diện Si/SiO₂ là một **chuyển tiếp cực kỳ sắc nhọn** từ **tinh thể Si** sang **vô định hình SiO₂**. Nó được coi là một **"heterojunction" rất sắc nét**.

## Cấu Trúc 4 Lớp (Từ Si Sang SiO₂)

### Lớp 1: Si Tinh Thể (Substrate)

- **Si bình thường**, hình thành từ quá trình CZ/FZ
- Cấu trúc kim cương hoàn toàn

### Lớp 2: Si Biến Dạng (Strained Si)

- Gần giao diện, Si bị **kéo giãn** (strain) do sự khác biệt thể tích
- Khoảng dày: ~1-5 nm
- **Ứng suất kéo (tensile)** từ sự nở của SiO₂

### Lớp 3: Vùng Chuyển Tiếp (SiOₓ)

- **Oxy hóa không đầy đủ** (x < 2), có thành phần Si, Si₂O, SiO...
- Khoảng dày: ~0.5-2 nm
- **Mục đích**: Giảm ứng suất, giảm độ không phù hợp mạng
- Thể tích **tăng khoảng 2.2 lần** từ Si → SiO₂

### Lớp 4: SiO₂ Vô Định Hình (Pure Oxide)

- **SiO₂ hoàn toàn**, mạng random 3D Si-O-Si
- Ứng suất **nén** (compressive)
- Độ dày: từ vài nm tới microns (tùy ứng dụng)

## Ứng Suất Tại Giao Diện

### Nguyên Nhân

- Si oxy hóa → SiO₂: **Thể tích tăng 2.25 lần**
- Si bị nén khi SiO₂ mọc, nhưng Si **không thể rút gọn** (cấu trúc tinh thể cứng)
- Kết quả: **Ứng suất đối kháng**

### Phân Bố Ứng Suất

- **Compressive trong SiO₂**: Gần như 1-2 GPa (kéo kỷ vào bên trong)
- **Tensile trong Si**: Phía dưới giao diện, tác động tới bandgap

### Ảnh Hưởng

- **Bandgap Si**: Thay đổi do strain → thay đổi optical, electrical properties
- **Mobility carrier**: Ứng suất ảnh hưởng tới scattering → hiệu ứng piezoresistive
- **Lifetime**: Thay đổi do dangling bonds gia tăng

## Hệ Số Phân Dị (Segregation Coefficient) Tại Giao Diện

### Định Nghĩa

**Hệ số phân dị m**:
$$m = \frac{[C]_{Si}}{[C]_{SiO_2}}$$

Nó quyết định **nồng độ dopant chia sẻ** giữa Si và SiO₂ khi oxy hóa.

### Giá Trị Cho Các Dopant

| Dopant | m | Ưu Tiên |
|---|---|---|
| **Boron (B)** | 0.2-0.4 | **SiO₂** (tích tụ trong oxide) |
| **Phosphorus (P)** | 10 | **Si** (tích tụ trong substrate) |
| **Arsenic (As)** | 0.5-2 | Trung lập đến Si-ưu tiên |

### Ảnh Hưởng

- **B doped (p-type) Si**: Khi oxy hóa → B **tích tụ SiO₂**, Si substrate **mất dopant** → điện trở tăng (vấn đề)
- **P doped (n-type) Si**: P **tích tụ lại Si**, substrate **vẫn độc lập** (tốt)
- **Giải pháp**: Kiểm soát **tốc độ oxy hóa, nhiệt độ** để hạn chế tái phân bố

## Dangling Bonds (Liên Kết Không Hoàn Thành)

### Định Nghĩa

**Dangling bond** là một **liên kết hoá học không hoàn thành** tại giao diện:
- Si ở Si/SiO₂ interface mất một trong 4 liên kết Si-Si
- Lại không hoàn toàn liên kết với O
- Kết quả: **Trạng thái lơ lửng (trap state)** giữa valence-conduction band

### Ảnh Hưởng

- **Interface state density (Dit)**: Số dangling bonds trên unit area × energy
- Đơn vị: cm⁻² eV⁻¹
- **Cao → MOSFET hiệu suất kém**: Tăng leakage, giảm mobility

### Chuẩn Hiện Đại

- **Old (1970s-1980s)**: Dit ~10¹² cm⁻² eV⁻¹ (rất cao)
- **Modern (2000s)**: Dit ~10¹⁰ cm⁻² eV⁻¹
- **Advanced (2020s)**: Dit ~10⁹-10¹⁰ cm⁻² eV⁻¹ (rất tốt)

### Loại Bỏ

- **Annealing H₂**: Đưa H từ ngoài → Si-H, kín dangling bonds
- **Nitridation (SiON)**: Thêm N → Si-N, kín defect
- **Post-metal anneal**: Nung sau cấy cột cản (after contacts formed)

## Band Bending Tại Giao Diện

### Cơ Chế

Vì **dangling bonds + trapping states** → từ trường **cụm quanh giao diện**:
- Dải năng lượng Si **bị uốn cong (band bending)** gần SiO₂ interface
- Tạo **potential barrier** tương tự pn junction

### Ứng Dụng MOSFET

- **MOS capacitor**: Band bending quyết định **accumulation, depletion, inversion**
- Gate voltage điều khiển band bending → tạo/hủy kênh dẫn

## Kết Luận

**Giao diện Si/SiO₂** là **linh hồn của MOSFET hiện đại**. Hiểu rõ:
- **Cấu trúc 4 lớp**
- **Ứng suất tại interface**
- **Hệ số phân dị**
- **Dangling bonds**

...là chìa khóa để **tối ưu hóa MOSFET performance** và **đạt yield cao**.
