---
title: Sản Xuất Polysilicon – Phương Pháp Siemens (シーメンス法)
sourceUrl: https://semi-journal.jp/basics/si-chem/siemens-2.html
category: khoa-hoc-silicon
order: 3
flagship: false
---

## Định Nghĩa Polysilicon

**Polysilicon** (đa tinh thể Silicon, ポリシリコン) là Silicon ở dạng **tinh thể nhiều hạt**, không phải tinh thể đơn. Nó là **nguyên liệu thô** để tạo ra đơn tinh thể Silicon (monocrystalline silicon) dùng trong sản xuất IC bán dẫn.

### Phân Loại Theo Cấp Độ Tinh Khiết

- **Semiconductor-grade Polysilicon**: Độ tinh khiết **11N (99.999999999%)** – **chuẩn bán dẫn**
  - Dùng để sản xuất IC, vi xử lý, chip logic
  - Giá cao (lên tới vài chục USD/kg)
  - Quy trình phức tạp, tốn kém

- **Solar-grade Polysilicon**: Độ tinh khiết thấp hơn (99.9999%)
  - Dùng để sản xuất pin mặt trời
  - Giá thấp hơn (~5-15 USD/kg)
  - Phương pháp sản xuất đơn giản hơn (Casting)

## Quy Trình Siemens (西門子法)

**Phương pháp Siemens** là **phương pháp tiêu chuẩn công nghiệp** để sản xuất polysilicon cấp bán dẫn. Nó gồm **4-5 bước chính**:

### Bước 1: Chuyển Hóa (Conversion) – ~300°C

**Phản Ứng Hóa Học**:
$$\text{Si(kim loại)} + 3\text{HCl} \rightarrow \text{SiHCl}_3 + \text{H}_2$$

**Chi Tiết Quá Trình**:
- Silicon kim loại (từ cát hoặc quặng) được cho vào reactor
- **Hydro cloride (HCl)** được thổi vào ở nhiệt độ khoảng **300°C**
- Silicon phản ứng với HCl → tạo **Trichlorosilane (SiHCl₃)** – một chất lỏng không màu

**Tác Dụng Loại Kim Loại**:
- Các tạp chất kim loại (Fe, Cu, Ni, Al...) cũng phản ứng với HCl → tạo các **chloride kim loại**
- Vì những chloride này có **điểm nóng chảy thấp** (volatile), chúng **bay hơi** và tách khỏi dung dịch SiHCl₃
- Điều này **loại bỏ đa số tạp chất kim loại** trong bước đầu tiên

**Hiệu Suất**: SiHCl₃ tạo được ở dạng lỏng, dễ dàng xử lý.

### Bước 2: Chưng Cất (Distillation)

**Mục Đích**: Tách SiHCl₃ tinh khiết từ các byproduct và tạp chất còn lại.

**Nguyên Tắc**:
- Sử dụng **phương pháp chưng cất phân tử (fractional distillation)** – tách các chất lỏng dựa trên **điểm sôi khác nhau**
- SiHCl₃ (điểm sôi 31.8°C) được tách khỏi:
  - SiCl₄ (điểm sôi 57.6°C)
  - Si₂Cl₆ (điểm sôi ~150°C)
  - H₂SiCl₂ (điểm sôi ~5°C)
  - Các tạp chất hữu cơ/vô cơ khác

**Kết Quả**: Thu được **SiHCl₃ với độ tinh khiết rất cao** (11N – "eleven nines" = 99.999999999%)

**Đây chính là bước quan trọng nhất** để đạt độ tinh khiết cấp bán dẫn. Việc chưng cất có thể được lặp lại nhiều lần để tăng độ tinh khiết thêm nữa.

### Bước 3: Khử (Reduction) – 1100-1200°C

**Phản Ứng Hóa Học**:
$$4\text{SiHCl}_3 + 3\text{H}_2 \xrightarrow{1100-1200°C} 3\text{Si(rắn)} + \text{SiCl}_4 + 6\text{HCl} + 3\text{H}_2\text{O}$$

**Cấu Trúc Thiết Bị (Reactor)**:
- **Filament Silicon (U-shaped rod)**: Hai thanh silicon hình chữ U, được nung nóng tới **1100-1200°C** bằng điện trở
- **Khí SiHCl₃**: Được thổi vào ở dạng khí, kết hợp với hydrogen (H₂) – hydrogen làm điều kiện khử (reducing atmosphere)
- **Quá Trình Khử**: SiHCl₃ bị phân hủy bởi nhiệt độ cao, giải phóng Silicon rắn

**Sản Phẩm**:
- **Silicon rắn** được **沈積 (deposit) trên filament** – tích tụ để tạo thanh polysilicon
- Thanh polysilicon **dần dần phình to** khi quá trình tiếp diễn

**Vấn Đề Hiệu Suất**:
- Lý thuyết: từ 4 moles SiHCl₃ → 3 moles Si rắn + 1 moles SiCl₄ (khí)
- Thực tế: SiCl₄ (byproduct) sinh ra từ **phản ứng giải phóng-tiếp tục (decomposition)**, không phải từ khử hoàn toàn
- **Hiệu suất khử thực tế chỉ ~25%** (tối đa)
- Vì vậy phải **tái chế SiCl₄** → chuyển hóa lại thành SiHCl₃ để sử dụng lại

**Thời Gian**: Mỗi chu kỳ tạo thanh polysilicon mất **8-12 giờ**

### Bước 4: Gia Công Cơ Khí

**Quá Trình**:
- Thanh polysilicon được **tháo ra** khỏi reactor sau khi đủ dung lượng
- Được **đập/tách thành miếng nhỏ** (chunking) để tiện xử lý
- **Mài/gia công** để loại bỏ vỏ ngoài có tạp chất

### Bước 5: Rửa Sạch (Cleaning)

**Rửa Acid**:
- Immerse polysilicon chunks trong **acid 稀 (dilute acid)** để loại bỏ tạp chất kim loại còn lại
- Thường dùng **HCl pha loãng** hoặc **HF pha loãng**

**Rửa Nước**:
- Rửa sạch bằng **nước cất (deionized water)** nhiều lần để loại bỏ acid

**Sấy**:
- Sấy khô bằng không khí nóng hoặc N₂ khô

**Đóng Gói**:
- Đặt vào **hộp kín, chứa khí inert (N₂ hoặc Ar)** để **tránh tái nhiễm bẩn từ không khí**
- Lưu trữ và vận chuyển trong điều kiện kiểm soát

## So Sánh Siemens Với Phương Pháp Khác

| Tiêu Chí | Siemens | Casting | Fluidized Bed |
|---|---|---|---|
| **Độ Tinh Khiết** | 11N (bán dẫn) | 99.9999% (pin mặt trời) | 11N (bán dẫn) |
| **Chi Phí** | Cao (vì chưng cất, tái chế) | Thấp | Trung bình |
| **Hiệu Suất Khối Lượng** | Thấp (~25%) | Cao (~99%) | Cao |
| **Công Suất Điện** | Cao (nung nóng 1200°C) | Thấp | Trung bình |
| **Sản Lượng Năng Suất** | Từ từ (8-12h/thanh) | Nhanh | Nhanh |
| **Cấp Ứng Dụng** | IC, vi xử lý | Pin mặt trời | IC (hiếm) |

## Ưu Điểm Của Siemens

1. **Độ tinh khiết tuyệt đối** – 11N là chuẩn công nghiệp bán dẫn
2. **Khả năng tái chế** – SiCl₄ có thể chuyển hóa lại, giảm lãng phí
3. **Kiểm soát tốt** – dễ dàng giám sát độ tinh khiết từng bước
4. **Đã trưởng thành** – công nghệ ổn định, đã dùng >50 năm

## Nhược Điểm

1. **Chi phí cao** – vì chưng cất phức tạp, tái chế SiCl₄
2. **Hiệu suất khối lượng thấp** (~25%)
3. **Tiêu thụ điện năng lớn** – nung nóng 1100-1200°C yêu cầu công suất lớn
4. **Byproduct HCl, H₂O** – cần xử lý môi trường

## Ứng Dụng Thực Tế

- **Intel, Samsung, TSMC, SK Hynix**: Dùng Siemens polysilicon để sản xuất wafer bán dẫn
- **Dung lượng**: Thế giới tiêu thụ ~500,000 tấn polysilicon mỗi năm (2020s), trong đó ~35% là semiconductor-grade

## Kết Luận

Phương pháp Siemens là **tiêu chuẩn công nghiệp** để tạo Polysilicon cấp bán dẫn với độ tinh khiết 11N. Mặc dù chi phí cao và hiệu suất thấp, nhưng vì **yêu cầu độ tinh khiết cực cao** của ngành bán dẫn, Siemens vẫn **chiếm ưu thế tuyệt đối**. Sự phát triển gần đây của các phương pháp mới (fluidized bed, metal-based reduction) cố gắng giảm chi phí, nhưng Siemens vẫn là lựa chọn chính.
