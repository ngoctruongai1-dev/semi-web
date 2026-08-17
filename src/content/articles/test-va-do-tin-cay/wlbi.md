---
title: WLBI (Wafer Level Burn-in)
sourceUrl: https://semi-journal.jp/basics/test/wafer-leve-burn-in.html
category: test-va-do-tin-cay
order: 5
flagship: false
---

## Định Nghĩa

**WLBI (Wafer Level Burn-in)** là "**thực hiện burn-in test (cấp ứng suất) trên wafer silicon hoàn chỉnh − trước khi dicing (cắt lát thành từng chip riêng lẻ)**", trong đó **hàng ngàn chip được test đồng thời** trên cùng một wafer.

Ngược lại, **package-level burn-in** là test sau khi đã dicing và packaging − test từng chip hoặc chip trong gói riêng.

## Sự Khác Biệt: WLBI vs Package-Level Burn-in

| Tiêu Chí | WLBI | Package-Level Burn-in |
|---|---|---|
| **Thời Điểm** | Trước dicing | Sau dicing + packaging |
| **Số Chip** | Hàng ngàn chip/wafer | Từng chip hoặc nhóm nhỏ |
| **Thiết Bị** | Probe card + oven chuyên dụng | Burn-in board trong oven |
| **Chi Phí/Chip** | Thấp (batch large) | Cao hơn (per-chip) |
| **Thời Gian/Chip** | Nhanh (parallel) | Lâu hơn (sequential) |

## Tại Sao WLBI Trở Nên Quan Trọng?

### Lý Do: Công Nghệ Packaging Tiên Tiến

**Công nghệ cũ**: Mỗi wafer chứa **một loại chip** đơn nhất.

**Công nghệ mới** (Chiplet, 3D Stacking):
- **Chiplet**: Một sản phẩm cuối cùng gồm **nhiều "chip con" (chiplets)** khác loại được kết hợp.
- **3D Stacking**: Nhiều layer chip được xếp chồng dọc.

**Vấn Đề**:
- Nếu **một trong số những chiplet** bị lỗi → **toàn bộ sản phẩm hoàn chỉnh bị hỏng**.
- Ví dụ: nếu bộ xử lý lỗi, cache bị lỗi, hay memory bị lỗi → sản phẩm không dùng được.

**Giải Pháp**: Phải **kiểm tra chất lượng từng chiplet TRƯỚC khi kết hợp** → WLBI giúp loại bỏ những chiplet lỏi sớm.

### KGD (Known Good Die)

WLBI giúp đạt trạng thái **"Known Good Die (KGD)"** − chip được **"xác nhận là tốt"** trước khi tập hợp.

**KGD của từng chiplet** → **sản phẩm cuối hoàn toàn tốt** (hoặc ít nhất giảm xác suất lỗi).

## Những Thách Thức Kỹ Thuật

### 1. Chính Xác Tiếp Xúc Probe Card

- WLBI dùng **probe card** − thiết bị có hàng ngàn kim nhỏ để tiếp xúc với pad của từng chip trên wafer.
- **Thách thức**: Kim phải tiếp xúc **chính xác cao** với các pad siêu nhỏ (μm scale).
- **Yêu cầu**: probe card phải có độ chính xác trong micron.

### 2. Đơn Giản Hóa Quy Trình Test

- **Package-level burn-in** có thể chạy **full test pattern** − hoạt động chip hoàn toàn, chạy mọi chức năng.
- **WLBI** không thể chạy full pattern vì:
  - **Quá lâu**: test từng chip riêng trên wafer sẽ mất hàng ngày.
  - Quy trình cần được **đơn giản hóa** − chạy **simplified patterns** để nhanh.

### 3. Phân Tích Kết Quả Bụng Cách

- WLBI test từng chip **song song** → cộng lại:
  - Chip FAIL → **đánh dấu (tapping pen trên silicon)** hoặc ghi nhớ vị trí XY.
  - Chip PASS → bình thường.
- Sau WLBI, tại bước **dicing**, những chip bị đánh dấu **bị loại bỏ** (hay được tách riêng).

## Quy Trình WLBI Tiêu Chuẩn

```
Wafer Silicon Hoàn Chỉnh (Sau lithography/etching/metallization)
    ↓
[WLBI Test]
├─ Bước 1: Đặt wafer vào probe station
├─ Bước 2: Chạy test pattern đơn giản (~Vcc/GND check, basic functional test)
├─ Bước 3: Ghi nhớ vị trí XY chip FAIL (hoặc đánh dấu)
└─ Bước 4: Cấp ứng suất nhiệt (125°C, ~4–24 giờ) đồng thời

    ↓
[Phân Tích Kết Quả]
├─ Chip PASS: quay tiếp sang dicing bình thường
└─ Chip FAIL: bị loại bỏ hoặc ghi chú "không sử dụng vùng XY"

    ↓
[Dicing + Packaging]
(Chỉ những chip PASS được packaging)

    ↓
[Package-Level Test] (nếu cần thêm)
    ↓
[Chip Cuối: KGD (Known Good Die)]
```

## Ưu Điểm WLBI

1. **Chi Phí Thấp**: Giáp lại là test hàng ngàn chip cùng lúc, chi phí/chip rẻ.
2. **Loại Bỏ Chip Lỏi Sớm**: Không lãng phí công sức packaging những chip lỏi.
3. **Kiểm Soát Chất Lượng Cao**: Đảm bảo KGD − chip đến nhà máy cuối cùng hoàn toàn tốt.
4. **Tích Hợp Công Nghệ Chiplet**: Cần thiết cho công nghệ tiên tiến với chiplet.

## Nhược Điểm WLBI

1. **Thiết Bị Phức Tạp**: Probe station wafer-level burn-in đắt đỏ.
2. **Test Bị Đơn Giản Hóa**: Không thể chạy full functional test − chỉ basic test.
3. **Độ Chính Xác Cao**: Yêu cầu sự điều chỉnh chính xác cao của probe card.
4. **Hiệu Suất Thấp Hơn**: Parallel test chậm hơn sequential nếu wafer quá lớn.

## So Sánh Chi Phí: WLBI vs Package-Level

Mặc dù WLBI thiết bị đắt, nhưng **tổng chi phí/chip thường thấp hơn** vì:

- **WLBI**: Chi phí thiết bị cao NHƯ lại chi phí/chip thấp (vì batch lớn).
- **Package-Level**: Chi phí thiết bị thấp hơn NHƯ lại chi phí/chip cao (vì sequential, từng chip).

Ngành đang **chuyển dần sang WLBI** vì lợi ích chất lượng & kinh tế.

## Kết Luận

**WLBI là bước tiến quan trọng** trong ngành bán dẫn hiện đại, đặc biệt với công nghệ chiplet & 3D stacking. Nó không chỉ **giảm chi phí cuối cùng** mà còn **nâng cao độ tin cậy** của sản phẩm bằng cách loại bỏ **những chip yếu sớm**, trước khi chúng được kết hợp thành sản phẩm hoàn chỉnh.
