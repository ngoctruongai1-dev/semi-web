---
title: Tăng Trưởng Epitaxy Silicon (エピタキシャル成長)
sourceUrl: https://semi-journal.jp/basics/si-chem/epitaxial.html
category: khoa-hoc-silicon
order: 7
flagship: false
---

## Định Nghĩa Epitaxy

**Epitaxy** (エピタキシー, epitaxial growth) là quá trình **mọc một lớp tinh thể mới trên nền tinh thể có sẵn**, sao cho lớp mới **kế thừa hướng tinh thể** của nền. Từ này từ tiếng Hy Lạp: "epi" (trên) + "taxis" (sắp xếp).

### Homoepitaxy vs Heteroepitaxy

- **Homoepitaxy**: Nền và lớp **cùng vật liệu** (ví dụ Si/Si)
  - Dùng rộng rãi nhất trong IC bán dẫn
  - Dễ kiểm soát, chất lượng cao

- **Heteroepitaxy**: Nền và lớp **khác vật liệu** (ví dụ GaN/Si, SiC/Si)
  - Khó khăn hơn (do mismatch lattice)
  - Dùng trong ứng dụng đặc biệt (power device, LED)

## Hai Phương Pháp Chính

### 1. CVD (Chemical Vapor Deposition)

#### Nguyên Tắc

**CVD** là phương pháp phân hủy hóa học **khí nguồn** trên bề mặt nóng để tạo lớp rắn.

#### Công Thức Phản Ứng

Với Silicon, các khí nguồn phổ biến:

- **SiCl₄ + H₂**: 
  $$\text{SiCl}_4 + 2\text{H}_2 \xrightarrow{>1000°C} \text{Si} + 4\text{HCl}$$

- **SiHCl₃ + H₂**:
  $$4\text{SiHCl}_3 + 3\text{H}_2 \xrightarrow{>1000°C} 3\text{Si} + \text{SiCl}_4 + 6\text{HCl}$$

- **SiH₄** (monosilane):
  $$\text{SiH}_4 \xrightarrow{800-1200°C} \text{Si} + 2\text{H}_2$$

#### Điều Kiện Hoạt động

- **Nhiệt độ**: 800-1200°C (tùy loại khí)
- **Áp suất**: Thường ở áp suất khí quyển, hoặc **LPCVD (Low Pressure)** ở ~100 Pa
- **Khí trơ**: H₂ hoặc N₂ làm môi trường

#### Hai Chế Độ Tăng Trưởng

1. **Reaction-Limited**: Tốc độ phụ thuộc **nhiệt độ** (không phụ thuộc áp suất khí)
   - Ứng dụng: **RTCVD** (tốc độ chậm, điều khiển tốt)

2. **Diffusion-Limited**: Tốc độ phụ thuộc **nồng độ khí** và **khuếch tán**
   - Ứng dụng: **LPCVD** (tốc độ cao, cho batch lớn)

#### Ưu Điểm

- Tốc độ tăng trưởng cao (microns/phút)
- Chi phí tương đối thấp
- Phù hợp sản xuất hàng loạt

#### Nhược Điểm

- Các khí nguồn (SiCl₄, SiHCl₃) cần xử lý đặc biệt (độc)
- Độ phẳng kém hơn MBE
- Doping khí (B₂H₆, PH₃) độc tính cao

### 2. MBE (Molecular Beam Epitaxy)

#### Nguyên Tắc

**MBE** là phương pháp **chân không siêu cao** (ultra-high vacuum, UHV < 10⁻⁹ Torr), các nguyên tử/phân tử **bay trực tiếp** từ nguồn tới nền mà không va chạm lẫn.

#### Điều Kiện Hoạt Động

- **Chân không**: < 10⁻⁹ Torr (cực kỳ sạch)
- **Nhiệt độ**: 600-900°C (thấp hơn CVD)
- **Tốc độ**: Chậm hơn CVD (nm/phút)

#### Ưu Điểm

- **Kiểm soát độ dày ở mức nguyên tử** (atomic layer)
- **Quan sát in-situ** bằng RHEED (Reflection High-Energy Electron Diffraction)
- **Tạp chất rất ít** (do UHV)
- **Chất lượng lớp tinh thể xuất sắc**

#### Nhược Điểm

- **Chi phí rất cao** (~$1-5 triệu/thiết bị)
- **Tốc độ chậm** → năng suất thấp
- **Khó sản xuất hàng loạt**
- Dùng chủ yếu trong **R&D** hoặc **ứng dụng cao cấp** (GaN, GaAs RF)

#### Doping Trong MBE

- Dùng **K-cell (Knudsen cell)** chứa dopant rắn (B, P, Si₃N₄...)
- Công thức khuếch tán: $$\Phi = \Phi_0 \exp\left(-\frac{E_A}{k_B T}\right)$$
- Tốc độ thay đổi dễ dàng bằng cách điều chỉnh nhiệt độ K-cell

## Khí Dopant Trong CVD Epitaxy

### Donor (n-type)

- **PH₃ (Phosphine, phosphine hydride)** – độc
- **AsH₃ (Arsine)** – độc, không thường dùng

### Acceptor (p-type)

- **B₂H₆ (Diborane)** – độc, cần xử lý đặc biệt
- **BH₃ complex** – ít độc hơn

### Vấn Đề Độc Tính

- Những khí này **phải được kiểm soát, quản lý chặt chẽ**
- Lượng rất nhỏ (ppm) → nhưng độc
- **Xử lý khí thải** bắt buộc (có nghĩa vụ môi trường)

## Hiện Tượng Auto-Doping

### Định Nghĩa

**Auto-doping** (自動ドーピング, unintended doping) là hiện tượng **tạp chất từ đế khuếch tán ngược lên lớp epitaxy** rồi **tái hấp thụ vào lớp mọc**.

### Cơ Chế

1. Nền Si doped ở **nồng độ cao** (ví dụ nền p-type +10¹⁸ B⁺/cm³)
2. Khi nung nóng để tăng trưởng epitaxy (>1000°C), dopant từ nền **khuếch tán ra khỏi bề mặt**
3. Dopant này lại **được mang lên** bởi khí, rồi **tái hấp thụ** vào lớp epi đang mọc
4. Kết quả: Lớp epi **bị nhiễm dopant từ nền** → không sạch

### Tác Động Hại

- **Lớp epi không có độ dẫn điện theo ý định**
- **Lớp epi phải ở nước sạch** (không dopant hoặc dopant tối thiểu) để tạo **high-resistivity buffer**
- **Nhân tố này** là một trong những vấn đề chính trong **power device sản xuất**

### Thứ Tự Ưu Tiên Auto-Doping

$$\text{P} > \text{As} > \text{B} >> \text{Sb}$$

- **P (Phosphorus)** bị auto-doping nhiều nhất
- **B (Boron)** ít hơn
- **Sb (Antimony)** gần như không bị

## Ba Cơ Chế Tăng Trưởng Lớp Mỏng (Growth Mode)

Khi mọc epitaxy trên Si, có **3 cơ chế khác nhau** để hình thành cấu trúc bề mặt:

### 1. FM Mode (Frank-van der Merwe) – Layer-by-layer

- Mọc **từng lớp hoàn chỉnh 2D**
- Mỗi lớp hoàn thành trước khi lớp kế tiếp bắt đầu
- Kết quả: **Bề mặt rất phẳng**, chất lượng cao
- Ứng dụng: Epitaxy chất lượng cao

### 2. VW Mode (Volmer-Weber) – 3D islands

- Mọc thành **các đảo 3D tách rời**
- Các đảo sau này dội lại thành một lớp liên tục
- Kết quả: **Bề mặt hơi nhám**, có vùng không liên tục
- Ứng dụng: Một số trường hợp đặc biệt (không phổ biến)

### 3. SK Mode (Stranski-Krastanov) – Kết hợp 2D + 3D

- Bắt đầu với **một vài lớp 2D (FM)**, rồi chuyển sang **3D (VW)**
- Kết quả: **Quantum dots** (chấm lượng tử)
- Ứng dụng: Nghiên cứu, một số optoelectronic

## Ứng Dụng Thực Tế

### Power Devices (SiC, GaN)

- CVD hoặc MOCVD (Metal Organic CVD) được dùng
- Mọc thick epitaxial layer (~50-100 μm) để tạo **blocking voltage**
- Auto-doping là vấn đề chính → cần xử lý nền đặc biệt

### RF/Microwave Devices

- MBE dùng cho **GaN/GaAs** có chất lượng cao
- Kiểm soát doping chính xác ở mức nguyên tử

### Memory (Flash, DRAM)

- CVD dùng để tạo **floating gate, tunnel oxide** trong Flash
- Epitaxy Si sạch (intrinsic) rất quan trọng

## Công Thức Tính Tốc độ Tăng Trưởng

Trong chế độ **reaction-limited**:

$$v = v_0 \exp\left(-\frac{E_a}{kT}\right)$$

Trong chế độ **diffusion-limited**:

$$v = D \cdot \Delta C / \delta$$

Trong đó:
- **v**: Tốc độ tăng trưởng
- **v₀**: Hệ số pre-exponential
- **E_a**: Năng lượng kích hoạt
- **D**: Hệ số khuếch tán
- **ΔC**: Chênh lệch nồng độ
- **δ**: Độ dày lớp giới hạn (boundary layer)

## Kết Luận

Epitaxy là **kỹ thuật cốt lõi** trong sản xuất bán dẫn hiện đại:
- **CVD** cho **tốc độ cao, chi phí thấp** (IC thông thường)
- **MBE** cho **chất lượng xuất sắc** (R&D, RF/power device)
- **Hiện tượng auto-doping** là một thách thức lớn cần kiểm soát

Việc nắm vững epitaxy là chìa khóa để **tối ưu hóa đặc tính thiết bị** và **cải thiện yield**.
