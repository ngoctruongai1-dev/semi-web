---
title: Các Loại Bán Dẫn Công Suất (Power Diode, Transistor, Thyristor)
sourceUrl: https://semi-journal.jp/basics/device/power/diode-transistor-thyristor.html
category: thiet-bi-ban-dan
subcategory: power-semiconductor
order: 2
flagship: false
---

## Định Nghĩa Chung

Bán dẫn công suất (パワー半導体) là các thiết bị "được thiết kế để điều khiển dòng điện lớn và điện áp cao" trong các ứng dụng chuyển đổi và quản lý năng lượng điện. Chúng chia thành ba loại chính, mỗi loại có cấu trúc và chức năng khác nhau.

## Ba Loại Bán Dẫn Công Suất Chính

### 1. Power Diode (Diode Công Suất, パワーダイオード)

#### Chức Năng
- **Chỉnh lưu** (整流作用, rectification): Cho phép dòng điện chảy chỉ một chiều duy nhất

#### Cấu Trúc
- Tiếp hợp p-n đơn giản: p-side kết nối cực dương, n-side kết nối cực âm
- Khi p-side dương, n-side âm → dòng điện chảy qua
- Khi đảo cực → không có dòng điện (chặn dòng ngược)

#### Nguyên Lý Hoạt Động
- **Thiên áp thuận** (順方向): Vùng cạn kiệt hẹp → dòng điện chảy (điện áp xuôi ~0.7V)
- **Thiên áp nghịch** (逆方向): Vùng cạn kiệt rộng → dòng điện gần như bằng 0 (đóng vai trò chặn dòng)

#### Ứng Dụng
- Chuyển đổi AC-DC: Sạc điện thoại, nguồn điện máy tính
- Mạch chỉnh lưu nửa sóng và toàn sóng
- Cấp dưới cho transistor công suất (bảo vệ nguồn)

#### Đặc Điểm
- Cấu trúc đơn giản, chi phí thấp
- Tốc độ chuyển mạch chậm so với transistor
- Chịu áp thấp hơn transistor (100-1000V)

### 2. Power Transistor (Transistor Công Suất, パワートランジスタ)

#### Chức Năng
- **Chuyển mạch** (スイッチング, switching): Đóng/mở điện ở tốc độ cao
- **Điều khiển dòng điện** lớn nhân một tín hiệu điều khiển nhỏ

#### Ba Loại Power Transistor

##### A. BJT Công Suất (Bipolar Junction Transistor)
- **Cấu trúc**: 3 cực (Base, Emitter, Collector)
- **Nguyên lý**: Dòng nhỏ tại Base kiểm soát dòng lớn Emitter-Collector
- **Ứng dụng**: Điều khiển công suất vừa (kW)
- **Nhược điểm**: Cần dòng Base liên tục, tiêu thụ điện cao

##### B. MOSFET Công Suất (Metal-Oxide-Semiconductor FET)
- **Cấu trúc**: 3 cực (Gate, Source, Drain)
- **Nguyên lý**: Điện áp tại Gate điều khiển kênh dẫn dòng lớn Source-Drain
- **Ứng dụng**: Chuyển đổi DC-DC, inverter công suất vừa
- **Ưu điểm**: Tiêu thụ điện Gate rất thấp (chỉ sạc/xả tụ), tốc độ nhanh
- **Nhược điểm**: Chịu áp không cao như IGBT (100-200V)

##### C. IGBT Công Suất (Insulated Gate Bipolar Transistor)
- **Cấu trúc**: Kết hợp Gate điều khiển của MOSFET + Collector của BJT
- **Nguyên lý**: Gate điều khiển tính dẫn, nhưng dòng Collector-Emitter lớn như BJT
- **Ứng dụng**: Inverter công suất cao (xe điện, pin mặt trời), biến tần
- **Ưu điểm**: Tiêu thụ điện Gate thấp + chịu áp cao (600-3300V) + dòng lớn
- **Nhược điểm**: Tốc độ chuyển mạch chậm hơn MOSFET, chi phí cao

#### Phương Pháp Điều Khiển: PWM (Pulse Width Modulation)
- Thay vì thay đổi điện áp trực tiếp, transistor bật/tắt nhanh (kHz~MHz)
- Tỷ lệ thời gian bật/tắt xác định độ lớn điện áp trung bình
- Ví dụ: Bật 50% thời gian → điện áp trung bình = 50% V_DD
- Lợi ích: Hiệu suất cao, điều khiển chính xác, ít tản nhiệt

#### So Sánh Ba Loại Transistor Công Suất

| Đặc Điểm | BJT | MOSFET | IGBT |
|----------|-----|--------|------|
| **Cấu trúc** | 3 lớp NPN/PNP | Cộng hưởng Gate | Gate + BJT |
| **Dòng điều khiển** | Dòng Base | Điện áp Gate | Điện áp Gate |
| **Tiêu thụ Gate** | Cao | Rất thấp | Rất thấp |
| **Chịu áp** | Vừa (50-1000V) | Thấp-Vừa (100-200V) | Cao (600-3300V) |
| **Dòng tối đa** | Trung bình (100A) | Cao (500A+) | Rất cao (1000A+) |
| **Tốc độ chuyển** | Chậm (μs) | Nhanh (ns) | Trung bình (μs) |
| **Chi phí** | Rẻ | Rẻ | Đắt |
| **Ứng dụng** | Công suất vừa | Chuyển đổi DC-DC | Inverter công suất cao |

### 3. Power Thyristor (Thyristor Công Suất, パワーサイリスタ)

#### Cấu Trúc
- **4 lớp** P-N-P-N xếp lần lượt
- **3 cực**: Anode (A), Cathode (K), Gate (G)
- Tương đương **2 BJT xếp liên tiếp** với phản hồi dương

#### Nguyên Lý Hoạt Động (Latch-up)

**Trạng thái TẮT (OFF)**:
- Không có dòng Gate
- Thyristor không dẫn điện

**Kích Hoạt (Triggering)**:
- Cấp dòng nhỏ vào Gate (mA~A)
- Cơ chế latch-up kích hoạt: BJT phía dưới ON → phát thải carriers → BJT phía trên ON → phản hồi dương
- Khi latch-up, dòng Anode-Cathode tăng vọt (kA~MA)

**Trạng thái BẬT (ON)**:
- **Đặc biệt**: Ngay cả khi bỏ tín hiệu Gate, dòng tiếp tục chảy
- Thyristor "giữ" trạng thái ON miễn là dòng Anode > dòng giữ tối thiểu (holding current)
- Chỉ tắt được bằng cách giảm dòng Anode xuống dưới dòng giữ

#### Ứng Dụng
- Điều khiển công suất rất cao (MW~GW)
- Đường sắt, thiết bị biến đổi công nghiệp
- Hiệu suất rất cao vì khi ON chỉ có điện áp rơi nhỏ (1-3V)
- Giảm tổn hao nhiệt so với transistor

#### Ưu Điểm và Hạn Chế

**Ưu Điểm**:
- Chịu áp rất cao (kV)
- Dòng rất lớn (kA)
- Khi ON: điện áp rơi siêu thấp → hiệu suất >99%
- Công suất xử lý khổng lồ

**Hạn Chế**:
- Không thể tắt bằng Gate (phải làm mất dòng Anode)
- Tốc độ chuyển mạch chậm (ms) → không dùng PWM hiệu quả
- Chỉ phù hợp với điều khiển công suất cấp thiết bị lớn

## So Sánh Ba Loại

| Đặc Điểm | Diode | Transistor | Thyristor |
|----------|-------|-----------|-----------|
| **Công suất xử lý** | Vừa (MW) | Cao (GW) | Rất cao (GW+) |
| **Chức năng chính** | Chỉnh lưu | Chuyển mạch/Điều khiển | Điều khiển công suất lớn |
| **Tốc độ chuyển** | Chậm | Nhanh-Trung bình | Chậm |
| **Điều khiển** | Không | Gate/Base | Gate (latch-up) |
| **Ứng dụng** | AC-DC | DC-DC, Inverter | Tàu điện, Thiết bị lớn |
| **Chi phí** | Rẻ | Vừa | Đắt |

## Kết Luận

Ba loại bán dẫn công suất này hoạt động cùng nhau trong một hệ thống:
- **Diode**: Bảo vệ, chỉnh lưu
- **Transistor**: Điều khiển chính (đa số ứng dụng hiện đại)
- **Thyristor**: Công suất siêu lớn

Xu hướng hiện đại: **IGBT và MOSFET** chiếm ưu thế trong hầu hết ứng dụng nhờ độ kiểm soát tốt, chi phí giảm, và hiệu suất cao.
