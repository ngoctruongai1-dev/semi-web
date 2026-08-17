---
title: RCA Cleaning - SC1 & SC2 (Phương Pháp Làm Sạch RCA)
sourceUrl: https://semi-journal.jp/basics/ref/rca.html
category: tai-lieu-tham-khao
order: 4
flagship: false
---

## Tổng Quan

**RCA Cleaning** là phương pháp làm sạch wafer Silicon chuẩn quốc tế, được phát triển bởi công ty **RCA Corporation vào năm 1970**. Đây là kỹ thuật nền tảng được sử dụng rộng rãi trong sản xuất bán dẫn hiện nay để loại bỏ các loại tạp chất khác nhau trên bề mặt Silicon.

**Tầm quan trọng:** Làm sạch chiếm **30-40%** trong tổng số hơn 500 công đoạn sản xuất bán dẫn, làm cho nó là một bước cực kỳ quan trọng.

## Quy Trình Ba Bước

RCA Cleaning gồm ba bước chính:

1. **SC1 (Standard Clean 1)** - Loại bỏ chất hữu cơ và hạt vi mô
2. **SC2 (Standard Clean 2)** - Loại bỏ tạp chất kim loại ion
3. **Rửa lại và sấy** - Loại bỏ dư lượng và tránh watermark

## SC1 (Standard Clean 1) - Loại Bỏ Hữu Cơ

### Thành Phần Hóa Học

**Tỷ lệ tiêu chuẩn:** 5:1:1 hoặc 7:2:1

| Thành Phần | Công Thức | Vai Trò |
|---|---|---|
| Nước cất (DI water) | H₂O | Dung môi chính |
| Ammonium Hydroxide | NH₄OH | Kiềm, loại bỏ hữu cơ |
| Hydrogen Peroxide | H₂O₂ | Oxy hóa mạnh, loại bỏ tạp chất |

### Điều Kiện Xử Lý

- **Nhiệt độ:** 75-85°C
- **Thời gian:** 10-20 phút
- **pH:** cao, khoảng 10.5

### Cơ Chế Loại Bỏ Tạp Chất

**Nguyên lý làm việc:**
1. **Oxy hóa tuần hoàn:** H₂O₂ oxy hóa Silicon thành SiO₂ mỏng, sau đó NH₄OH (kiềm) hòa tan lớp oxide này.
2. **Lặp lại quá trình:** Chu kỳ oxy hóa-tan oxide lặp đi lặp lại, từng lớp bỏ đi một lớp, "gõ" các hạt bẩn và chất hữu cơ bám trên bề mặt.
3. **Đẩy lùi tĩnh điện (zeta potential):** pH cao tạo ra lớp tĩnh điện âm ở bề mặt wafer, ngăn chặn các hạt bẩn (cũng âm) tái bám lại.

### Kim Loại Bị Loại Bỏ bởi SC1

Các kim loại nhất định có thể tạo **phức hợp ammonium** (ammonia complex) và hòa tan trong SC1:
- Cu (đồng)
- Au (vàng)
- Ag (bạc)
- Zn (kẽm)
- Cd (Cađmium)
- Ni (Nickel)
- Co (Cobalt)

**Lưu ý:** **Iron (Fe)** KHÔNG bị loại bỏ bởi SC1 mà cần đến SC2.

## SC2 (Standard Clean 2) - Loại Bỏ Tạp Chất Kim Loại

### Thành Phần Hóa Học

**Tỷ lệ tiêu chuẩn:** 6:1:1 hoặc 8:2:1

| Thành Phần | Công Thức | Vai Trò |
|---|---|---|
| Nước cất (DI water) | H₂O | Dung môi chính |
| Hydrochloric Acid | HCl | Acid mạnh, loại bỏ kim loại |
| Hydrogen Peroxide | H₂O₂ | Oxy hóa mạnh, hỗ trợ loại bỏ kim loại |

### Điều Kiện Xử Lý

- **Nhiệt độ:** 75-85°C
- **Thời gian:** 10-20 phút
- **pH:** rất acid, khoảng 0-2

### Cơ Chế Loại Bỏ Tạp Chất

**Đặc điểm SC2:**
- Môi trường **acid mạnh** tạo điều kiện tối ưu để loại bỏ các ion kim loại (Fe³⁺, Fe²⁺, v.v.).
- H₂O₂ ở môi trường acid hoạt động như chất oxy hóa mạnh mẽ, giúp hòa tan kim loại.

**Kim Loại Bị Loại Bỏ:** Fe (sắt) và các kim loại chuyển tiếp khác bị giữ lại sau SC1.

### Điểm Quan Trọng

**SC2 KHÔNG etch (khắc) Silicon hay SiO₂:**
- Đây là ưu điểm quan trọng vì nó cho phép làm sạch một cách an toàn mà không làm tổn hại bề mặt wafer.
- Chỉ loại bỏ tạp chất, không làm hỏng cấu trúc Si/SiO₂.

## Bước Cuối Cùng: Rửa Lại và Sấy (Rinsing & Drying)

### Quy Trình

1. **Rửa bằng nước cất (DI water):** Loại bỏ các tạp chất bị lỏng lẻo từ SC1 và SC2.
2. **Sấy khô (Drying):** Sử dụng **hơi Isopropyl Alcohol (IPA)** để sấy.

### Tránh Watermark (vết nước)

**Vấn đề:** Khi để nước khô tự nhiên trên bề mặt Silicon, sau khi nước bay hơi, các chất hòa tan lại được lại tạo thành **ring-shaped silicon oxide formations** gọi là **watermark** (vết nước), ảnh hưởng đến chất lượng bề mặt.

**Giải pháp:** Dùng hơi IPA sấy để tránh hình thành watermark:
- IPA có độ giãn nở cao hơn nước.
- Khi sấy hơi IPA, nó không tạo lại chất hòa tan như nước.
- Dùng **"dry-in/dry-out"** technique (sấy đầu vào/cuối cùng) để đảm bảo an toàn.

## Bảng Tóm Tắt So Sánh SC1 vs SC2

| Tiêu Chí | SC1 | SC2 |
|---|---|---|
| **Thành phần chính** | H₂O : NH₄OH : H₂O₂ | H₂O : HCl : H₂O₂ |
| **Tỷ lệ** | 5:1:1 ~ 7:2:1 | 6:1:1 ~ 8:2:1 |
| **Nhiệt độ** | 75-85°C | 75-85°C |
| **Thời gian** | 10-20 phút | 10-20 phút |
| **pH** | ~10.5 (Kiềm) | 0-2 (Acid) |
| **Loại bỏ** | Hữu cơ, hạt, Cu, Au, Ag, Zn, Cd, Ni, Co | Kim loại ion (Fe, Cu, v.v.) |
| **Etch Si/SiO₂?** | Có (tuần hoàn oxy-tan oxide) | KHÔNG (an toàn) |

## Quy Trình Hoàn Chỉnh RCA Cleaning

```
Bước 1: SC1 (Loại bỏ hữu cơ)
   ↓
Bước 2: Rửa nước DI
   ↓
Bước 3: SC2 (Loại bỏ kim loại)
   ↓
Bước 4: Rửa nước DI lần 2
   ↓
Bước 5: Sấy hơi IPA (Tránh watermark)
   ↓
Wafer sạch, sẵn sàng cho công đoạn tiếp theo
```

## Ứng Dụng và Ý Nghĩa

- **Kiểm soát chất lượng:** Loại bỏ hầu như toàn bộ tạp chất hữu cơ và kim loại.
- **Chuẩn bị bề mặt:** Tạo bề mặt sạch để xử lý tiếp theo (oxidation, deposition, v.v.).
- **Độ tin cậy thiết bị:** Giảm khuyết tật, tăng tuổi thọ và đáng tin cậy của thiết bị bán dẫn.
