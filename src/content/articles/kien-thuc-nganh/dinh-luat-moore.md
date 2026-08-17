---
title: Định Luật Moore
sourceUrl: https://semi-journal.jp/basics/market-knowledge/moores-law.html
category: kien-thuc-nganh
order: 2
flagship: false
---

## Định Nghĩa

**Định Luật Moore (Moore's Law, ムーアの法則)** là một **nguyên tắc kinh nghiệm** (empirical observation, không phải định luật vật lý) đề xuất bởi **Gordon Moore** (đồng sáng lập Intel) năm 1965.

**Nội Dung Gốc**:
"**Số lượng transistor trên một chip IC (integrated circuit) sẽ tăng gấp đôi mỗi năm**" (sau đó được sửa lại thành **"mỗi 18–24 tháng"** vào năm 1975).

## Công Thức Toán Học

```
N(t) = N₀ × 2^(t/τ)
```

Trong đó:
- **N(t)**: số lượng transistor tại thời điểm t.
- **N₀**: số lượng transistor ban đầu.
- **τ**: chu kỳ đôi lên (doubling period) ≈ 1.5–2 năm.
- **t**: thời gian tính từ năm gốc.

## Ứng Dụng Thực Tế: Chip Lịch Sử

| Năm | Chip/Công Ty | Số Transistor | Ghi Chú |
|---|---|---|---|
| 1965 | Intel 4004 | 2,300 | Chip đầu tiên |
| 1971 | Intel 4004 | ~10,000 | Gấp 4 lần |
| 1985 | Intel 80386 | ~275,000 | Gấp 100+ lần |
| 2000 | Intel Pentium 4 | ~42 triệu | |
| 2010 | Intel i7 (Sandy Bridge) | ~1.16 tỷ | |
| 2020 | Apple M1 | ~16 tỷ | |
| 2023 | NVIDIA H100 | ~80 tỷ | |

## Tác Động Của Moore's Law

### Ưu Điểm: Tăng Hiệu Năng Exponential

**Hiệu Năng Tăng**:
- Nhiều transistor → tốc độ xử lý cao hơn.
- Chế độ độc lập (cung cấp) → mật độ năng suất tăng.

**Giá Giảm**:
- Chi phí/transistor **giảm theo hàm mũ** (economy of scale).
- Chip ngày càng **rẻ tiền** mặc dù chức năng tăng lên.

**30 Năm Theo Luật Moore** (từ 1965 đến 1995):
- Số transistor tăng: 2^(30/1.5) ≈ **2^20 ≈ 1.000.000 lần** (1 triệu lần!).

**Kết Quả**: **CPU hiệu năng cao** có sẵn cho tiêu dùng → máy tính cá nhân, điện thoại thông minh.

### Những Công Nghệ Đã Thay Đổi Theo Moore's Law

1. **Lithography (Quang khắc)**:
   - 1965: 10 μm (micrometers).
   - 2000: 180 nm.
   - 2020: 5 nm.
   - 2024: 3 nm (TSMC, Samsung).
   - **Xu hướng**: giảm kích thước → fit nhiều transistor hơn.

2. **Transistor Architecture**:
   - **1965–2000**: Planar (phẳng 2D).
   - **2010**: **FinFET** (kênh 3D, các mặt bao quanh bởi cổng).
   - **2020**: **GAA (Gate-All-Around)** − cổng bao quanh hoàn toàn.
   - **Mục đích**: Kiểm soát dòng rò (leakage) → fit thêm transistor.

3. **Dung Lượng & Tốc Độ Memory**:
   - DRAM, Flash storage cũng theo Moore's Law.
   - Dung lượng phone từ 64 MB (2000) → 256 GB (2020) − gấp **triệu lần**.

## Giới Hạn: Kết Thúc Định Luật Moore

### Vấn Đề Vật Lý: Kích Thước Nguyên Tử

**Bức tường vật lý**: Khi transistor nhỏ xuống **tới kích thước nguyên tử** (~1 nm), những hiệu ứng lượng tử bắt đầu:

- **Quantum Tunneling (Hiệu Ứng Đường Hầm)**: electron có thể xuyên qua rào thế → dòng rò tăng vô kiểm.
- **Kết quả**: không thể **giảm điện áp mà không tăng rò** → không thể maintain hiệu suất.

### Vấn Đề Kinh Tế: Chi Phí Fab Quá Cao

**EUV Lithography (13.5 nm bước sóng)**:
- Máy EUV **tốn >$100 triệu/cái**.
- Một fab mới cho công nghệ 3 nm: **$20–30 tỷ** (so với ~$1 tỷ năm 1995).
- **Chỉ TSMC, Samsung, Intel đủ sức** → thị trường **consolidate** lại.

### Kết Thúc Thực Tế

**Từ 2002–2005**: Đồ thị tần số CPU (GHz) bắt đầu **plateau** (nằm ngang):

- **Pentium 4 (2004)**: 3.8 GHz.
- **Modern CPU (2024)**: ~5–6 GHz.
- **Chênh lệch 20 năm chỉ tăng ~1.5×** − gần như dừng lại!

**Nguyên Nhân**: Dennard Scaling **kết thúc** (xem phần Scaling).

## "Post-Moore" Era (Hậu Moore)

Khi Moore's Law không còn hiệu quả, ngành chuyển sang các chiến lược khác:

### 1. Multi-Core Architecture

- Thay vì tăng tốc độ chỉ một lõi → **tăng số lõi**.
- Ví dụ: Intel Core i9 có **24 lõi** (2024).

### 2. Specialized Processors

- **GPU**: xử lý song song.
- **TPU (Tensor Processing Unit)**: AI/Machine Learning.
- **NPU (Neural Processing Unit)**: neural networks.
- Thay vì **"one size fits all"** → **domain-specific**.

### 3. 3D Stacking & Chiplet Architecture

- **HBM (High Bandwidth Memory)**: xếp chồng DRAM.
- **Chiplet**: chia chip thành nhiều phần nhỏ, kết hợp → linh hoạt hơn.
- **Ví dụ**: Apple M1 (8 cores) = 4 performance cores + 4 efficiency cores.

### 4. System-Level Optimization

- Không chỉ tăng transistor mà **tối ưu hóa hệ thống toàn bộ**.
- Power efficiency, data movement, thermal management → tổng hợp tối ưu.

## Tác Động Xã Hội & Kinh Tế

### Dương Tính

- **Máy tính cá nhân**: trở nên rẻ & phổ biến.
- **Điện thoại thông minh**: không thể có nếu không có Moore's Law.
- **AI/Machine Learning**: dựa vào khả năng tính toán massively parallel.
- **Internet**: phát triển nhờ năng lực xử lý tăng lên.

### Âm Tính

- **Bất bình đẳng kỹ thuật**: chỉ quốc gia giàu (USA, Taiwan, Korea, Japan) có thể sản xuất chip tiên tiến.
- **Rủi ro bảo mật**: toàn bộ computing phụ thuộc vào bán dẫn.
- **Môi trường**: sản xuất chip tiêu tốn nước, năng lượng khổng lồ.

## Kết Luận

**Định Luật Moore không phải định luật vật lý mà là một quan sát kinh nghiệm** đã trở thành **"tự thực hiện" − ngành bán dẫn sử dụng nó làm bản đồ phát triển** trong 60 năm (1965–2025).

Tuy nhiên, **giới hạn vật lý & kinh tế** đang khiến nó **chậm lại** − không phải "dừng hẳn" mà là **"chuyển sang hình thức khác"** (multi-core, specialized, 3D, chiplet).

**Bài học**: Không có gì là "ngàn năm một đêm" − ngay cả những quy luật dường như bất biến cũng có giới hạn.
