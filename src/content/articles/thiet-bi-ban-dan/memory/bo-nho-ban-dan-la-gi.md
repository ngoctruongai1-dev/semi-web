---
title: Bộ Nhớ Bán Dẫn Là Gì (Semiconductor Memory)
sourceUrl: https://semi-journal.jp/basics/device/memory/variety.html
category: thiet-bi-ban-dan
subcategory: memory
order: 1
flagship: false
---

## Định Nghĩa

Bộ nhớ bán dẫn (半導体メモリ, *handoutai memory*) là "thiết bị lưu trữ dữ liệu bằng cách điều khiển điện thế của chất bán dẫn". Nó được sử dụng rộng rãi trong các thiết bị hàng ngày như smartphone, máy tính, máy chơi game để lưu trữ ảnh, tập tin dữ liệu và các chương trình.

## Phân Loại Chính

Bộ nhớ bán dẫn chia thành hai loại chính dựa trên khả năng lưu giữ dữ liệu:

### 1. Bộ Nhớ Dễ Bay Hơi (Volatile Memory, 揮発性メモリ)
- Chỉ giữ dữ liệu khi có nguồn điện liên tục
- Mất toàn bộ dữ liệu khi ngắt điện
- Bao gồm: **SRAM** (Static RAM) và **DRAM** (Dynamic RAM)
- Tốc độ truy cập nhanh

### 2. Bộ Nhớ Không Bay Hơi (Non-Volatile Memory, 不揮発性メモリ)
- Giữ dữ liệu ngay cả khi ngắt nguồn điện
- Dữ liệu được lưu trữ vĩnh viễn cho đến khi bị xóa hoặc ghi đè
- Bao gồm: **Flash Memory** (SSD, USB, thẻ SD)
- Tốc độ truy cập chậm hơn nhưng dung lượng lớn

## So Sánh Ba Loại Bộ Nhớ Chính

| Tiêu Chí | SRAM | DRAM | Flash Memory |
|----------|------|------|--------------|
| **Tốc độ** | Rất nhanh (ps) | Nhanh (ns) | Chậm (μs~ms) |
| **Dung lượng** | Nhỏ (KB~MB) | Vừa (MB~GB) | Lớn (GB~TB) |
| **Giá thành** | Rất đắt | Trung bình | Rẻ nhất |
| **Cần Refresh** | Không | Có | Không |
| **Cấu trúc** | 4-6 transistor/bit | 1T1C | Floating gate |
| **Ứng dụng** | Cache CPU/GPU | RAM chính máy tính | Lưu trữ: SSD, USB, điện thoại |

## Các Loại Bộ Nhớ Chi Tiết

### SRAM (Static RAM, 静的RAM)
- Sử dụng 4-6 transistor để giữ dữ liệu
- Không cần làm mới (refresh) - dữ liệu tự lưu giữ miễn là có điện
- Cấu trúc phức tạp → mật độ cao → dung lượng nhỏ nhưng tốc độ siêu nhanh
- Chi phí rất cao (ví dụ: 8GB SRAM tiêu tốn hàng chục vạn yên)
- Dùng làm cache trong CPU, GPU, bộ xử lý

### DRAM (Dynamic RAM, 動的RAM)
- Sử dụng 1 transistor + 1 tụ điện (capacitor) → cấu trúc 1T1C đơn giản
- Tụ điện dễ phóng điện → cần làm mới định kỳ (refresh)
- Dung lượng lớn hơn SRAM, giá rẻ hơn
- Tốc độ trung bình (ns)
- Làm bộ nhớ RAM chính trong máy tính hiện đại

### Flash Memory (フラッシュメモリ)
- Bộ nhớ không bay hơi, có thể ghi lại và xóa điện
- Cấu trúc đơn giản hơn SRAM/DRAM → dễ tăng dung lượng
- Tốc độ chậm nhất (μs~ms)
- Giá thành rẻ nhất (ví dụ: 8GB Flash ~1000 yên)
- Dùng cho: SSD, USB drive, thẻ SD, smartphone, camera

## Nguyên Nhân Chênh Lệch Giá

Sự khác biệt lớn về giá phát sinh từ **cấu trúc tế bào bộ nhớ**:

- **SRAM**: Cần 4-6 transistor cho mỗi bit → diện tích tế bào lớn → chi phí cao, dung lượng hạn chế
- **DRAM**: Chỉ cần 1 transistor + 1 tụ → diện tích tế bào nhỏ hơn → giá trung bình
- **Flash**: Cấu trúc tế bào nhỏ nhất (dùng floating gate) → diện tích nhỏ nhất → giá rẻ nhất

## Ứng Dụng Thực Tiễn

Các loại bộ nhớ được phân công nhiệm vụ khác nhau trong thiết bị điện tử hiện đại:

- **Xử lý tốc độ cao, độ trễ siêu thấp**: SRAM dùng làm cache trong CPU/GPU
- **Xử lý chung, tốc độ cao**: DRAM là RAM chính, truy cập nhanh để chạy ứng dụng
- **Lưu trữ dung lượng lớn**: Flash trong SSD, USB, thẻ nhớ smartphone

Cách này giúp cân bằng hiệu suất (speed), dung lượng (capacity) và chi phí (cost) trong thiết kế máy tính hiện đại.
