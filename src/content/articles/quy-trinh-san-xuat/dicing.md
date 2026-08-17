---
title: Dicing – Cắt Chip (Semiconductor Wafer Dicing)
sourceUrl: https://semi-journal.jp/basics/process/dicing.html
category: quy-trinh-san-xuat
order: 19
flagship: false
---

## Định Nghĩa

Dicing (ダイシング, wafer cutting – cắt lát) là quá trình **cắt wafer thành từng chip (die) riêng lẻ**. Mỗi chip chứa một hoặc nhiều IC hoàn chỉnh.

**Quy Mô**: Wafer 300mm chứa hàng trăm ~ hàng ngàn chip (tuỳ kích thước chip).

## Ba Phương Pháp Cắt Chính

### 1. Blade Dicing (Cắt Bằng Lưỡi Dao)

**Phương Pháp**: Dùng **lưỡi dao quay tốc độ cao** (thường 10.000-30.000 RPM) để cắt wafer.

**Cấu Trúc Lưỡi**:
- **Độ dày**: 100-300 μm (siêu mỏng).
- **Vật liệu**: Diamond-coated steel hoặc Si (silicon blade).
- **Kích thước đường cắt (kerf)**: 10-20 μm.

**Quy Trình**:
1. **Mount wafer**: Dán wafer lên **dicing tape** (tape dính).
2. **Positioning**: Xác định vị trí cắt (scribe line giữa chip).
3. **Cutting**: Lưỡi dao quay, di chuyển x-y → cắt dọc/ngang hình lưới.
4. **Coolant**: Phun nước liên tục để thoát nhiệt, loại bỏ debris.
5. **Tape Expansion**: Sau cắt, **UV chiếu tape** → nhất định adhesive yếu → tape giãn nở → chip tách ra.
6. **Chip Collection**: Pick-and-place robot lấy chip.

**Ưu Điểm**:
- Rẻ, đơn giản.
- Throughput cao.
- Phổ biến (99% wafer dùng blade dicing).

**Nhược Điểm**:
- Tạo damage vùng cạnh chip (chipped edge).
- Nhiệt từ cắt → stress → crack.
- Debris Si → contamination.

### 2. Laser Ablation Dicing

**Phương Pháp**: Dùng **laser năng lượng cao** phát ra pulse ngắn (ns ~ μs) → **bốc hơi/sublime wafer**.

**Phương Trình**: Si + high-energy laser → Si(g) [vapor].

**Ưu Điểm**:
- **Minimal thermal damage**: Pulse ngắn → wafer chủ yếu ở nhiệt độ thấp.
- **Narrow kerf**: Cắt siêu hẹp (~5-10 μm).
- **Clean edges**: Ít chip/crack.
- **Tốt cho struktur nhạy cảm**: MEMS, sensor.

**Nhược Điểm**:
- Chậm.
- Đắt (laser equipment).
- Ít dùng hiện nay.

### 3. Stealth Dicing (Khắc Bí Mật)

**Nguyên Lý**: Laser focused **INSIDE wafer** (cách bề mặt ~100 μm) → tạo modified layer (stress, color change) nội bộ → sau đó áp lực ngoài → split thành chip.

**Ưu Điểm**:
- **Zero kerf loss**: Không cần loại bỏ vật liệu, chỉ split.
- **Siêu sạch**: Không tạo debris.
- **Tốt cho 3D structures**: MEMS, stacked die.

**Nhược Điểm**:
- Siêu chậm.
- Siêu đắt.
- Hiếm dùng (chỉ premium products).

## Blade Dicing Chi Tiết

### Tape Bonding (Dán Tape Trước)

Wafer phải được dán lên **dicing tape** trước:
- **Tape dính**: Adhesive yếu, phục vụ việc tách chip sau.
- **Mục đích**: Giữ chip xếp lớp không rơi vụn.

### Cutting Pattern (Hình Cắt)

- **Grid cutting**: Cắt ngang + dọc → hình lưới (thông thường).
- **Single-edge**: Chỉ cắt 1 cạnh (ít dùng).
- **Multiple-pass**: Cắt nhiều lần cùng đường → cắt sâu hơn (cho wafer dày).

### Dicing Accuracy (Độ Chính Xác)

- **Positioning tolerance**: ±1-2 μm (scribe line phải nằm chính giữa dòng cắt).
- **Nếu sai**: Cạnh chip bị lệch → mất diện tích chip hoặc cắt vào circuit.

### Debris & Damage

- **Micro-chipping**: Cạnh chip bị chip nhỏ.
- **Lateral crack**: Vết nứt ngang vùng cạnh (từ stress cắt).
- **Si dust**: Bụi Si bay → contamination.

**Giảm Thiểu**: Chọn blade tốt, coolant đủ, tốc độ tối ưu.

## Post-Dicing (Sau Cắt)

### Tape Release

1. **UV heating**: Chiếu UV + nung nhẹ → adhesive yếu.
2. **Tape expansion**: Tape giãn → chip tách.
3. **Cleaning**: Loại bỏ adhesive dư (isopropanol, ultrasonic).

### Chip Inspection

- Kiểm tra chip bị chip/crack không.
- Loại chip lỗi.

### Wafer Edge (Scrap)

- Vành wafer (scrap frame) không có chip → loại bỏ.
- Đây là **loss**: ~2-5% diện tích wafer mất.

## Tầm Quan Trọng

Dicing quyết định:
- **Yield**: Chip bị damage → yield giảm.
- **Reliability**: Crack nhỏ từ cắt → grow lâu dài → device fail → bảo hành.
- **Packaging Quality**: Chip bị chip → không vừa khít trong package → lỏng lẻo.
- **Cost**: Dicing chi phí vừa, nhưng blade/laser/tape tốn.
