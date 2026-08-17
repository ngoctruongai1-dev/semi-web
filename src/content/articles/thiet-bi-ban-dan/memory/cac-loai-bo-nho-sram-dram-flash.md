---
title: 'Các Loại Bộ Nhớ: SRAM, DRAM, Flash (SRAM/DRAM/Flash)'
sourceUrl: https://semi-journal.jp/basics/device/memory/dram-sram-nand.html
category: thiet-bi-ban-dan
subcategory: memory
order: 2
flagship: false
---

## Định Nghĩa Tổng Quan

Bộ nhớ bán dẫn (半導体メモリ, *handoutai memory*) là "thiết bị bán dẫn được dùng để lưu trữ dữ liệu bằng điện thế". Chúng có mặt trong hầu hết các điện tử như máy tính, điện thoại thông minh, máy chơi game, máy ảnh số.

## Ba Loại Bộ Nhớ Chính

### 1. SRAM (Static Random Access Memory, 静的ランダムアクセスメモリ)

**Cấu trúc**: Sử dụng các transistor MOSFET để tạo mạch flip-flop giữ dữ liệu trong trạng thái ổn định

**Đặc điểm chính**:
- Tốc độ truy cập: **Nhanh nhất** (picoseconds)
- Chi phí: **Rất cao** do cấu trúc phức tạp
- Cần refresh: **Không** - dữ liệu tự động giữ miễn là có điện
- Mật độ tế bào: Thấp nhất (4-6 transistor/bit) → dung lượng bị giới hạn

**Ứng dụng chính**: Cache L1, L2, L3 trong CPU và GPU, bộ lưu trữ tạm thời hiệu suất cao

### 2. DRAM (Dynamic Random Access Memory, 動的ランダムアクセスメモリ)

**Cấu trúc**: Kết hợp 1 transistor MOSFET + 1 tụ điện (capacitor) - gọi là cấu trúc 1T1C

**Đặc điểm chính**:
- Tốc độ truy cập: **Trung bình** (nanoseconds)
- Chi phí: **Trung bình** - rẻ hơn SRAM nhưng đắt hơn Flash
- Cần refresh: **Có** - phải làm mới định kỳ vì tụ điện tự phóng điện
- Mật độ tế bào: Cao hơn SRAM (chỉ 1T1C) → dung lượng lớn hơn

**Ứng dụng chính**: RAM chính trong máy tính, điện thoại, máy chủ

### 3. Flash Memory (フラッシュメモリ)

**Cấu trúc**: Dùng floating gate (cổng nổi) để lưu điện tích, không cần tập lệnh làm mới

**Đặc điểm chính**:
- Tốc độ truy cập: **Chậm nhất** (microseconds đến milliseconds)
- Chi phí: **Rẻ nhất** - cấu trúc tế bào nhỏ, dễ tích hợp
- Không bay hơi: **Có** - giữ dữ liệu cả khi tắt nguồn
- Mật độ tế bào: Cao nhất → dung lượng khổng lồ

**Ứng dụng chính**: SSD (Solid State Drive), USB drive, thẻ SD, bộ nhớ smartphone

## So Sánh Chi Tiết

| Khía Cạnh | SRAM | DRAM | Flash |
|-----------|------|------|-------|
| **Nguyên tắc lưu trữ** | Flip-flop (transistor) | Tụ điện | Floating gate |
| **Tốc độ đọc/ghi** | Cực nhanh (ps) | Nhanh (ns) | Chậm (μs~ms) |
| **Tiêu thụ công suất** | Cao | Trung bình | Thấp |
| **Dung lượng điển hình** | KB ~ MB | MB ~ GB | GB ~ TB |
| **Giá 1GB** | Hàng chục vạn yên | Vài trăm yên | ~1000 yên |
| **Mạch điều khiển** | Đơn giản | Phức tạp (refresh circuit) | Phức tạp (programming circuit) |
| **Thời gian sống** | Vô hạn (với điện) | Vô hạn (với điện) | 10-100 năm hoặc 10K-1M chu kỳ ghi |

## Nguyên Nhân Chênh Lệch Giá

Sự khác biệt lớn về giá phát sinh từ **số lượng transistor trong mỗi tế bào bộ nhớ**:

1. **SRAM**: 1 bit cần 4-6 transistor → diện tích tế bào lớn → cần bộ xử lý để làm nhỏ → chi phí cao, dung lượng bị giới hạn
2. **DRAM**: 1 bit cần 1 transistor + 1 tụ → diện tích tế bào nhỏ hơn → dung lượng trung bình, giá tương đối
3. **Flash**: 1 bit được lưu bằng điện tích floating gate → diện tích tế bào nhỏ nhất → dung lượng lớn nhất, giá rẻ nhất

## Sự Hỗ Trợ Lẫn Nhau Trong Thiết Bị Hiện Đại

Các loại bộ nhớ được sắp xếp theo cấp tầng:

- **Cấp 1 (SRAM)**: Cache L1, L2 trực tiếp trong CPU/GPU → tốc độ siêu nhanh nhưng dung lượng nhỏ (KB~MB)
- **Cấp 2 (DRAM)**: RAM chính → tốc độ cao, dung lượng vừa (GB)
- **Cấp 3 (Flash)**: SSD, bộ nhớ ngoài → tốc độ chậm nhưng dung lượng khổng lồ (GB~TB)

Cách sắp xếp này giúp máy tính cân bằng giữa hiệu suất, dung lượng, tiêu thụ điện năng, và chi phí để tạo ra các thiết bị điện tử hiệu quả và kinh tế.
