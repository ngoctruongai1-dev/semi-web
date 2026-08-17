---
title: Burn-in Board
sourceUrl: https://semi-journal.jp/basics/test/burn-in-board.html
category: test-va-do-tin-cay
order: 6
flagship: false
---

## Định Nghĩa

**Burn-in board (バーンインボード)** là "**một **circuit board chuyên dụng** được thiết kế để cầm cố (mount) nhiều chip DUT (Device Under Test) − thường từ hàng trăm đến hàng ngàn chip − và cấp điện/tín hiệu test cho chúng trong môi trường nhiệt độ cao**".

Nó hoạt động như **"cầu nối"** giữa tester (máy test điện) và lò nhiệt (oven) trong quá trình burn-in.

## Cấu Trúc Vật Lý

### Các Thành Phần Chính

1. **Nền Board**
   - Làm từ **FR-4 (fiberglass reinforced epoxy)** hoặc vật liệu chịu nhiệt cao hơn (polyimide, BT resin).
   - **Yêu cầu**: Giữ độ bền cơ học và điện ở nhiệt độ cao (125°C–175°C+).

2. **Socket Hoặc Pinhole**
   - Những **khe cắm** hoặc **lỗ nhỏ** để đặt IC chips.
   - Thường là **BGA (Ball Grid Array)** hoặc **DIP (Dual In-line Package)** connectors.
   - Cần **tiếp xúc tin cậy** để truyền tín hiệu.

3. **Đường Dây Dẫn (Wiring/Traces)**
   - **Mạch phức tạp** với hàng trăm/hàng ngàn đường dây.
   - **Vật liệu**: Thường là **Copper (đồng)** − dẫn điện tốt.
   - **Cách điện**: Sử dụng **insulating material** (sơn, polyimide) giữa các lớp.

4. **Capacitor & Resistor Trao Đổi Nhiệt (Passive Components)**
   - **Decoupling capacitor** (tụ khử song): ổn định điện áp.
   - **Pull-up/Pull-down resistor**: giữ mức logic ổn định.
   - Yêu cầu: **phải chịu được nhiệt độ cao** (rated for ≥125°C).

5. **Connector Ngoài (External Connectors)**
   - **High-temperature connector** kết nối board với:
     - Tester (tín hiệu test/power).
     - Oven (cảm biến nhiệt độ).

## Những Thách Thức Thiết Kế

### 1. Giáp Chế Nhiệt Độ (Thermal Management)

**Vấn Đề**: Burn-in tạo ra **nhiệt độ siêu cao** (125–175°C+):

- **Giản Nở Nhiệt (Thermal Expansion)**: Board, chip socket, dây dẫn → sự giãn nở khác nhau.
  - **Silicon**: hệ số giãn nở (CTE) ~3 ppm/°C.
  - **FR-4**: CTE ~15–20 ppm/°C.
  - Chênh lệch → **ứng suất cơ học**, có thể làm cong board hoặc hỏng contact.

- **Gia Công Vật Liệu**: Cần chọn vật liệu với **CTE khớp nhất** để giảm ứng suất.
  - **Polyimide** hoặc **BT resin**: CTE thấp hơn FR-4, phù hợp burn-in.

### 2. Mật Độ Đường Dây Cao (High Density Wiring)

- **Chip hiện đại**: có **hàng trăm đến hàng ngàn pin** (pad).
- **Burn-in board phải fit mọi pin** → **đa lớp (multi-layer) board** (4–20+ lớp).
- **Thách thức**: Làm sao để quay dây dẫn chặt chẽ mà không gây **crosstalk** (xuyên nhiễu tín hiệu).

### 3. Lựa Chọn Linh Kiện Chịu Nhiệt (High-Temperature Components)

- **Linh kiện thông thường (consumer grade)**: chỉ định mức ~85°C.
- **Linh kiện chịu nhiệt cho burn-in**: phải định mức ≥125°C (hoặc 155°C, 175°C tùy ứng dụng).
  - **Capacitor**: dùng loại ceramic X7R, X5R (ít bị thay đổi capacitance ở nhiệt độ cao).
  - **Resistor**: thin-film (mỏng) hoặc thick-film chịu nhiệt.
  - **Connector**: Gold-plated (mạ vàng) để tránh oxy hóa.

### 4. Hiệu Ứng Tích Điện (Charge-up Problem)

- **Static electricity**: Khi chip hoạt động trong lò nóng, lớp insulation có thể bị tích điện → tạo **điện áp cao** → **làm hỏng chip**.
- **Giải pháp**: Ground straps, ESD protection, hoặc thiết kế board để **tán tỏa điện tích**.

## Quy Trình Thiết Kế Burn-in Board

1. **Định Nghĩa Yêu Cầu**
   - Số lượng chip per board?
   - Loại chip (BGA, DIP, QFP)?
   - Điều kiện test (nhiệt độ, điện áp)?

2. **Schematic Design**
   - Vẽ sơ đồ điện (power distribution, signal routing).
   - Xác định decoupling/bypass capacitor cần thiết.

3. **PCB Layout**
   - Sắp xếp vị trí chip, socket, linh kiện.
   - Routing dây dẫn thận trọng (minimize crosstalk).
   - Thermal analysis: kiểm tra phân bố nhiệt đều hay không.

4. **Prototype & Validation**
   - Chế tạo mẫu board.
   - Test ở điều kiện thực tế (với chip real).
   - Điều chỉnh nếu phát hiện vấn đề.

5. **Mass Production**
   - Chế tạo hàng loạt board cho nhà máy.

## Tầm Quan Trọng & Hiệu Ứng Của Thiết Kế Tồi

### Thiết Kế Tốt
- **Tín hiệu sạch** → test kết quả chính xác.
- **Liên hệ bền bỉ** → ít sai sót giả (false failure).
- **Hiệu suất cao** → test nhanh.

### Thiết Kế Tồi
- **Tín hiệu bị nhiễu** → **sai sót giả (false positive)**: chip tốt bị đánh giá là lỏi.
- **Contact kém** → **bỏ sót lỏi (false negative)**: chip lỏi được đánh giá là tốt → **flow out to customer** (hỏng ở khách hàng).
- **Quá nhiều false failures** → **giảm hiệu suất** (yield) → **tăng chi phí**.

## Loại Burn-in Board

| Loại | Mô Tả | Ứng Dụng |
|---|---|---|
| **Static Burn-in Board** | Cấp chỉ điện áp (Vcc, GND) − không test tín hiệu | Phổ biến, rẻ |
| **Dynamic Burn-in Board** | Cấp điện áp + tín hiệu test pattern | Cao cấp, đắt, automotive/medical |
| **Hybrid Board** | Kết hợp static + dynamic elements | Trung gian |

## Kết Luận

**Burn-in board là một artwork vô cùng phức tạp** mặc dù nhìn bên ngoài có vẻ đơn giản. Thiết kế tốt của burn-in board **trực tiếp ảnh hưởng đến chất lượng test** − quyết định liệu chip tốt được nhận hay chip lỏi bị loại. Vì thế, **các nhà sản xuất bán dẫn đầu** (TSMC, Samsung, Intel) đều có **đội ngũ chuyên dụng** thiết kế burn-in board riêng, không phải dùng thiết kế chung.
