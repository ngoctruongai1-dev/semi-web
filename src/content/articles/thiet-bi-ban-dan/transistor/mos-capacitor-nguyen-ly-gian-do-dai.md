---
title: 'MOS Capacitor: Nguyên Lý, Biểu Đồ Dải Năng Lượng và Gian Đo'
sourceUrl: https://semi-journal.jp/basics/device/transistor/mosfet-band-diagram.html
category: thiet-bi-ban-dan
subcategory: transistor
order: 9
flagship: false
---

## Định Nghĩa MOS Capacitor

**MOS Capacitor** (MOS容量, hoặc MOS capacitor structure, MOS構造) là "**cấu trúc ba lớp kim loại-oxide-bán dẫn** với vai trò là **tụ điện điều khiển bề mặt bán dẫn**".

**Ý nghĩa**: MOS Capacitor chính là **cơ cấu hoạt động chính của gate MOSFET** – nó điều khiển việc hình thành/cắt lớp đảo chiều (inversion layer) mà không cần dòng điện qua oxide (do oxide là cách điện).

---

## Nguyên Lý Hoạt Động: Điện Áp → Band Bending

### Nguyên Tắc Đọc Biểu Đồ Dải Năng Lượng

Khi áp điện áp gate VG:
- **Mức Fermi (Ef) không di chuyển** – nó được xác định bởi hệ thống điều kiện ở thân bán dẫn
- **Thay vào đó, các dải năng lượng Ec và Ev bị uốn cong (band bending)** ở vùng gần bề mặt
- Độ uốn cong tỷ lệ với điện áp VG tác dụng

### Quy Tắc Vàng

Tại một vị trí bề mặt, nếu:
- **Ei > Ef**: vùng đó là p-type (lỗ trống chiếm ưu thế)
- **Ei = Ef**: vùng đó là intrinsic (số electron = số hole)
- **Ei < Ef**: vùng đó là n-type (electron chiếm ưu thế) → **đây là điều kiện tạo kênh inversion**

---

## Ba Chế Độ Hoạt Động Chi Tiết

### Chế Độ 1: Tích Lũy (Accumulation, VG < 0)

**Điều kiện**: Cấp VG âm

**Quá trình**:
- Gate âm → điện trường hướng từ bán dẫn tới gate
- **Hole (lỗ trống) bị hút tới bề mặt**, tích lũy ở giao diện oxide-bán dẫn
- Bề mặt trở nên **p-type mạnh** (lỗ trống dư)
- Ei nằm cao, vẫn > Ef ở bề mặt

**Biểu đồ dải năng lượng**:
- Dải Ec, Ev **uốn lên** (năng lượng tăng lên) gần bề mặt
- Vùng tích lũy có độ cong "lên" (convex upward)

**Dòng điện**: ID = 0 (không có kênh)

### Chế Độ 2: Cạn Kiệt (Depletion, 0 < VG < Vth)

**Điều kiện**: Cấp VG dương nhưng chưa đủ (VG < Vth)

**Quá trình**:
- Gate dương → điện trường hướng từ gate tới bán dẫn
- **Hole bị đẩy ra khỏi bề mặt**, hình thành **vùng cạn kiệt (depletion region)**
- Vùng này không có carrier tự do, chỉ còn ion acceptor âm (B⁻) bị lộ ra
- Bề mặt vẫn là p-type (nhưng yếu hơn)
- Ei dịch chuyển xuống nhưng vẫn > Ef

**Biểu đồ dải năng lượng**:
- Dải Ec, Ev **uốn xuống** (năng lượng giảm) ở vùng cạn kiệt
- Độ cong "xuống" (concave downward), sâu hơn khi VG tăng

**Độ sâu vùng cạn kiệt (Depletion Width, W)**:
$$W = \sqrt{\frac{2 \varepsilon_s (V_{bi} + |V_S|)}{q N_A}}$$

(ε_s: permittivity, NA: nồng độ acceptor, Vbi: built-in potential)

**Dòng điện**: ID = 0 (vẫn không có kênh)

### Chế Độ 3: Đảo Chiều (Inversion, VG ≥ Vth)

**Điều kiện**: Cấp VG đủ lớn (VG ≥ Vth)

**Quá trình**:
- Gate dương **đủ mạnh** → điện trường **kéo electron từ thân bán dẫn lên bề mặt**
- Electron tích tụ tạo thành **lớp đảo chiều (inversion layer, 反転層)** mỏng ở bề mặt
- Bề mặt **từ p-type đảo ngược thành n-type** (tạm thời, local)
- Ei lúc này **< Ef** ở bề mặt → điều kiện tạo kênh
- **Lớp đảo chiều này chính là "kênh dẫn (channel)"** của MOSFET

**Biểu đồ dải năng lượng**:
- Dải Ec, Ev **uốn xuống mạnh** gần bề mặt
- Electron tích tụ ở mức Ec thấp nhất
- Các dải "lật ngược" local

**Độ sâu vùng cạn kiệt** ở inversion:
$$W_{max} = \sqrt{\frac{4 \varepsilon_s \phi_F}{q N_A}}$$

(φF: Fermi potential = kT/q · ln(NA/ni))

**Dòng điện**: ID ≠ 0 → **transistor BẬT**, có dòng drain

**Công thức nồng độ electron tại bề mặt (surface channel)**:
$$n_s = n_i \exp\left(\frac{E_F - E_i}{kT}\right)$$

---

## Mối Liên Hệ: MOS Capacitor vs MOSFET

| Thành phần | MOS Capacitor | MOSFET |
|---|---|---|
| **Chức năng** | Điều khiển bề mặt bán dẫn | Kênh kết nối Source-Drain |
| **Gate** | Điều khiển duy nhất | Điều khiển duy nhất |
| **Source/Drain** | Không có | Cấp/thu carrier |
| **Lớp đảo chiều** | Tạo ra nhưng không dùng để dẫn | **Được dùng làm kênh** |

**Kết luận**: MOSFET = MOS Capacitor + Source/Drain → biến lớp đảo chiều (từ MOS) thành kênh dẫn thực tế.

---

## Sự Phụ Thuộc Vào Điện Áp: Công Thức Quantitative

**Độ sâu vùng cạn kiệt theo VG**:
$$W(V_G) = \sqrt{\frac{2\varepsilon_s}{qN_A}\left(V_{bi} - V_{th} + \frac{C_{ox}}{q N_A} V_{th}^2\right)}$$

(Xấp xỉ, công thức chính xác phức tạp hơn)

**Dung lượng vùng cạn kiệt (Depletion capacitance)**:
$$C_{dep} = \frac{\varepsilon_s}{W}$$

**Tổng dung lượng MOS**:
$$C_{ox,total} = \frac{1}{1/C_{ox} + 1/C_{dep}}$$

(Tụ series: oxide + depletion region)

---

## Ứng Dụng thực tế

1. **Xác định Vth**: Vth là điện áp VG khi Ei = Ef tại bề mặt (điểm chuyển tiếp inversion)
2. **Tốc độ chuyển mạch**: Phải nạp/xả Cgate → tốc độ phụ thuộc vào RC (R: kênh resistance, C: gate capacitance)
3. **Độ nhạy cảm sóng**: Số electron ở lớp đảo chiều → điều khiển độ lớn dòng ID
