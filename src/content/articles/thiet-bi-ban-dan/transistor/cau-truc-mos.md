---
title: Cấu Trúc MOS (Metal-Oxide-Semiconductor Structure)
sourceUrl: https://semi-journal.jp/basics/device/transistor/mos-structure.html
category: thiet-bi-ban-dan
subcategory: transistor
order: 6
flagship: false
---

## Định Nghĩa

**Cấu trúc MOS** (MOS構造) là "cấu trúc ba lớp bao gồm một điện cực kim loại đặt trên bán dẫn thông qua một lớp oxide cách điện (oxide layer)". Cấu trúc này là **nền tảng của MOSFET** – loại transistor phổ biến nhất hiện nay trong IC.

## Ba Lớp Cấu Thành

1. **Lớp kim loại (Metal Gate, ゲート)**: thường là polsilicon hoặc kim loại thực sự (W, TiN), có vai trò điều khiển điện thế bề mặt bán dẫn.
2. **Lớp oxide cách điện (Gate Oxide, ゲート酸化膜)**: thường là SiO₂ hoặc dielec cao-k (HfO₂, Al₂O₃), dày 1–10 nm, ngăn ngừa dòng điện trực tiếp từ kim loại sang bán dẫn.
3. **Lớp bán dẫn (Substrate, 半導体基板)**: thường là Si p-type hoặc n-type.

## Nguyên Lý Cốt Lõi

**Ưu điểm chính của cấu trúc MOS**: lớp oxide cách điện cho phép **điều khiển trạng thái bề mặt bán dẫn bằng điện áp mà không cần dòng điện chảy trực tiếp** qua lớp oxide (chỉ có dòng rò rất nhỏ). Điều này khác biệt hoàn toàn so với transistor BJT (cần dòng base chảy vào).

## Ba Chế Độ Hoạt Động của MOS Capacitor

MOS Capacitor (tụ MOS) là thiết bị mô phỏng, gồm kim loại + oxide + bán dẫn p-type. Khi thay đổi điện áp cấp, nó trải qua ba chế độ:

### 1. Chế Độ Tích Lũy (Accumulation, 蓄積)

**Điều kiện**: VG < 0 (gate âm, substrate được đặt là 0V tham chiếu)

**Quá trình**:
- Điện trường từ gate âm **đẩy electron ra khỏi bề mặt bán dẫn**
- **Hole (lỗ trống) tích lũy** tại giao diện bán dẫn-oxide
- Bề mặt có tính chất p-type mạnh

**Không có kênh dẫn (inversion layer)** → không dòng điện

### 2. Chế Độ Cạn Kiệt (Depletion, 枯渇)

**Điều kiện**: 0 < VG < Vth (Vth: điện áp ngưỡng – threshold voltage)

**Quá trình**:
- Điện trường từ gate dương **đẩy hole ra khỏi bề mặt**
- Hình thành **lớp cạn kiệt (depletion region)** – vùng không có carrier tự do
- Ion acceptor âm (B⁻) bị "lộ ra", tạo điện trường nội bộ
- Tiếp tục tăng VG, lớp cạn kiệt sẽ sâu hơn

**Vẫn không có kênh dẫn**

### 3. Chế Độ Đảo Chiều (Inversion, 反転)

**Điều kiện**: VG ≥ Vth

**Quá trình**:
- Điện trường từ gate mạnh đủ để **kéo electron từ thân bán dẫn lên bề mặt**
- Electron tích tụ tại giao diện, tạo thành **"lớp đảo chiều"** (inversion layer, 反転層)
- Bề mặt p-type **tạm thời có tính chất n-type** → có một "mạch n" mỏng ở bề mặt
- **Đây chính là kênh dẫn (channel)** của MOSFET

**Lớp đảo chiều có thể dẫn điện** → khi Source và Drain nối tiếp (với cùng độ doping n-type), dòng điện có thể chảy qua.

## Biểu Đồ Dải Năng Lượng trong Ba Chế Độ

| Chế độ | Mô tả |
|---|---|
| **Accumulation** | Hole tích lũy, Ef cao, không có electron ở bề mặt |
| **Depletion** | Đẩy hole, vùng cạn kiệt, Ef thấp hơn |
| **Inversion** | Kéo electron lên, Ef rất thấp, electron tích lũy ở bề mặt → tạo kênh |

## Điện Áp Ngưỡng (Threshold Voltage, Vth)

**Vth** là "điện áp VG tối thiểu cần thiết để tạo ra lớp đảo chiều". Định nghĩa chính xác: VG khi tại bề mặt của bán dẫn, Ef hạ xuống bằng **Ei (mức nội tại)** – lúc này số electron = số hole ở bề mặt, bắt đầu hình thành inversion layer.

**Công thức**:
$$V_{th} = V_{FB} + 2\phi_F + \frac{\sqrt{2q \varepsilon_s N_A (2\phi_F)}}{C_{ox}}$$

Trong đó:
- VFB: Flat-band voltage (điện áp chế độ phẳng)
- φF: Fermi potential
- Cox: capacitance của lớp oxide

## Ứng Dụng trong MOSFET

Cấu trúc MOS là **bộ khung chính** để tạo **MOSFET (Metal-Oxide-Semiconductor Field Effect Transistor)**:
- **Gate voltage** kiểm soát lớp đảo chiều
- **Sự hiện diện/vắng mặt của kênh** kiểm soát dòng Source-Drain
- **Điều khiển VG** → bật/tắt transistor → thực hiện chuyển mạch và khuếch đại
