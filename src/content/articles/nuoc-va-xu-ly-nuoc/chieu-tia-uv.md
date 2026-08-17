---
title: Chiếu Tia UV (UV Irradiation)
sourceUrl: https://semi-journal.jp/basics/water/uv-decomposition.html
category: nuoc-va-xu-ly-nuoc
order: 11
flagship: false
---

## Định Nghĩa

**Chiếu tia UV (UV Irradiation)** là phương pháp sử dụng ánh sáng tia cực tím để **phân hủy chất hữu cơ (TOC – Total Organic Carbon)** và **tiêu diệt vi sinh vật** trong nước siêu tinh khiết.

Nó là **bước đầu tiên** trong **hệ thống tinh khiết thứ cấp (secondary purification system)** − giai đoạn cuối cùng trước khi sử dụng nước UPW.

## Hai Bước Sóng UV Chính

### 1. Bước Sóng 185 nm – Phân Hủy Chất Hữu Cơ (TOC)

**Cơ chế:**
- Tia UV 185 nm **được hấp thụ bởi chính phân tử nước** (H₂O).
- Năng lượng photon làm **phân hủy H₂O** thành:
  - **Hydroxyl radical (OH•)** − gốc oxy (chứa oxygen radical).
  - Những gốc này có **sức oxy hóa cực mạnh**.

**Phản Ứng Oxy Hóa:**
- OH• gốc tấn công **chất hữu cơ (organic compounds)** → phá vỡ liên kết hóa học.
- Kết quả: chất hữu cơ phân hủy thành **CO₂** (khí) và **H₂O** (nước).
- Quá trình này gọi là **Advanced Oxidation Process (AOP)**.

**Hiệu Quả:**
- Loại bỏ hiệu quả **TOC** từ mức ppm (nước thô) xuống ppb (nước tinh khiết).

### 2. Bước Sóng 254 nm – Tiêu Diệt Vi Sinh Vật (Sterilization)

**Cơ Chế:**
- Tia UV 254 nm **được hấp thụ dễ dàng bởi DNA (nucleic acid)** của vi khuẩn.
- Năng lượng này **phá vỡ cấu trúc DNA** → ngăn chặn **khả năng tái sản xuất** của vi sinh vật.
- Gọi là **"sterilization line"** hoặc **"germicidal line"**.

**Hiệu Quả:**
- Giết chết hầu hết vi khuẩn (không loại bỏ hoàn toàn nhưng giảm mạnh).

## Thiết Bị UV

### Nguồn Sáng: Đèn Mercury Áp Thấp (Low-Pressure Mercury Lamp)

- **Loại**: Đèn HG áp thấp phát ra **hai bước sóng cùng lúc** (185 nm + 254 nm).
- **Hiệu suất**: Ngoài các bước sóng UV còn phát ra **tia hồng ngoại** (heat).
- **Thời gian sống**: ~8.000–10.000 giờ hoạt động.

### Vấn Đề Vận Hành: Suy Giảm Cường Độ (Lamp Degradation)

- Theo thời gian, đèn UV **phát ra cường độ giảm dần** → hiệu quả tiêu diệt giảm.
- **Giải pháp**: Phải **giám sát cường độ chiếu xạ** liên tục (dùng cảm biến UV meter).
- **Thay thế**: Khi cường độ **rơi dưới ngưỡng thiết lập** (thường ~80% cường độ ban đầu), phải **thay đèn mới**.

## Vị Trí trong Quy Trình Xử Lý

```
Nước Tinh Khiết (từ EDI, ~1-15 MΩ·cm)
    ↓
[UV Irradiation 185nm: phân hủy TOC]
[UV Irradiation 254nm: tiêu diệt vi khuẩn]
    ↓
[Tạo CO₂ và các ion nhỏ từ phân hủy]
    ↓
[IER (Ion Exchange Resin): loại bỏ CO₂ + ion]
    ↓
[UF (Ultrafiltration): lọc hạt còn sót]
    ↓
[Nước Siêu Tinh Khiết UPW (18.2 MΩ·cm)]
```

## Sản Phẩm Phụ Sau UV

Khi UV phân hủy chất hữu cơ, **tạo ra CO₂ hòa tan** và các **ion nhỏ (H⁺, OH⁻, HCO₃⁻)**. Những sản phẩm này cần được loại bỏ ở **bước IER tiếp theo** để đạt độ tinh khiết cuối cùng.

## Ưu Điểm

- **Không dùng hóa chất** → an toàn, không tạo thải.
- **Tiêu diệt vi khuẩn** mà không cần kháng sinh.
- **Loại bỏ TOC hiệu quả** − vấn đề lớn trong bán dẫn.

## Nhược Điểm

- **Suy giảm đèn** → cần giám sát + thay thế định kỳ.
- **Không loại bỏ ion** → cần IER sau đó.
- **Chi phí điện năng** chạy đèn UV.

## Kết Luận

Chiếu tia UV là **bước tinh chỉnh cuối cùng** giúp loại bỏ những chất hữu cơ và vi sinh vật mà các bước trước không thể loại bỏ hết. Mặc dù không phải "bước chính" nhưng nó là **"lá chắn thực tế" cuối cùng** giữa nước tinh khiết và nước siêu tinh khiết trong sản xuất bán dẫn.
