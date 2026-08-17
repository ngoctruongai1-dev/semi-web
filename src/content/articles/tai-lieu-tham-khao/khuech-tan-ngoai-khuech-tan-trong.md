---
title: Khuếch Tán Ngoài & Khuếch Tán Trong (Outward & Inward Diffusion)
sourceUrl: https://semi-journal.jp/basics/ref/in-out-diffusion.html
category: tai-lieu-tham-khao
order: 7
flagship: false
---

## Tổng Quan

**Khuếch tán (diffusion)** là quá trình nguyên tử di chuyển từ vùng nồng độ cao sang vùng nồng độ thấp, được chi phối bởi phương trình Fick. Trong sản xuất wafer Silicon, khuếch tán có thể xảy ra theo **hai chiều**:

1. **Khuếch tán ngoài (外方拡散, outward diffusion):** Nguyên tử từ bên trong wafer thoát ra ngoài.
2. **Khuếch tán trong (内方拡散, inward diffusion):** Nguyên tử từ bên ngoài vào sâu vào wafer.

Cả hai quá trình đều có ảnh hưởng sâu sắc đến chất lượng wafer, vừa có lợi vừa có hại, tùy thuộc vào cách sử dụng.

## Khuếch Tán Ngoài (Outward Diffusion)

### Định Nghĩa và Nguyên Lý

**Khuếch tán ngoài** xảy ra khi các nguyên tử bên trong wafer (chủ yếu là **Oxy - O**, nhưng cũng có thể là dopant như B, P) di chuyển ra bề mặt hoặc thoát ra khỏi wafer trong quá trình xử lý nhiệt.

**Điều kiện kích hoạt:**
- **Nhiệt độ cao** (~1000-1200°C).
- **Thời gian xử lý dài**.
- **Môi trường khí trơ hoặc không có nhiều oxy** - nếu ngoài có oxy ít, gradient nồng độ tạo điều kiện cho oxy bên trong thoát ra.

### Ứng Dụng: Tạo Denuded Zone (DZ Layer)

Một ứng dụng **quan trọng và dương tính** của khuếch tán ngoài là tạo **Denuded Zone - DZ** (vùng không có khuyết tật ở bề mặt).

#### Quy Trình Tạo DZ

**Bước 1: Xử lý nhiệt ở 1200°C trong môi trường N₂ (Nitrogen)**
- Nhiệt độ cao + môi trường khí trơ (không có oxy).
- Oxy bên trong wafer (nồng độ cao do phương pháp CZ) có nồng độ gradient hướng ra ngoài.
- **Oxy khuếch tán ra ngoài** khỏi wafer.

**Bước 2: Hình thành DZ Layer**
- Ở **bề mặt wafer**, sau quá trình khuếch tán này, **không còn oxy** (hoặc rất ít).
- Lớp này được gọi là **Denuded Zone** - vùng **bề mặt sạch khuyết tật (bề mặt không có oxide precipitate)**.
- Độ dày DZ: thường **50-100 μm** từ bề mặt vào.

#### Lợi Ích của DZ

- **Chất lượng wafer cải thiện:** Không có oxide precipitate gây **tổn thương cơ học (mechanical damage)** và **ảnh hưởng điện (electrical impact)**.
- **Thiết bị hoạt động tốt hơn:** Yield (tỷ lệ thành phẩm) tăng, độ tin cậy thiết bị tăng.
- **Dành cho thiết bị logic:** Thường sử dụng cho IC logic, CMOS cần bề mặt sạch.

#### Công Thức Thực Tế

```
Wafer CZ (chứa oxy cao: ~10^18 atom/cm³) 
    ↓ (Xử lý nhiệt 1200°C, N₂, vài giờ)
Khuếch tán ngoài oxy
    ↓
DZ layer (bề mặt: oxy ≈ 0) + Vùng sâu (oxy giữ lại, còn cao)
```

### Tác Động Tiêu Cực: Oxide Precipitate Phá Hủy

Mặt khác, nếu **không kiểm soát đúng**, oxy khuếch tán bên trong có thể kết tụ tạo **oxide precipitate** - những cục SiO₂ khổng lồ, làm:
- Giảm cường độ cơ học wafer.
- Tạo ứng suất nội bộ.
- Ảnh hưởng điện (leakage current).

**Giải pháp:** Xử lý oxy hóa (Oxidation Anneal) hoặc quản lý oxy bằng khuếch tán vào trong.

## Khuếch Tán Trong (Inward Diffusion)

### Định Nghĩa và Nguyên Lý

**Khuếch tán trong** là quá trình nguyên tử từ **bên ngoài wafer** (từ lò (furnace), từ oxy, từ hydrogen) di chuyển **vào sâu vào wafer** trong quá trình xử lý nhiệt.

**Điều kiện kích hoạt:**
- **Xử lý trong môi trường giàu oxy hoặc các chất khác.**
- **Nồng độ gradient hướng vào** - nồng độ bên ngoài cao, bên trong thấp.

### Ứng Dụng: Duy Trì & Loại Bỏ Void

#### Mục Đích Khuếch Tán Vào Oxy

**Lợi ích:**
1. **Duy trì nồng độ oxy:** Oxy từ bên ngoài khuếch tán vào bù đắp cho oxy đã thoát.
2. **Loại bỏ void (lỗ rỗng):** 
   - Void = tập hợp các khoảng trống nguyên tử bên trong wafer CZ.
   - Xử lý trong môi trường oxy + nhiệt độ cao → oxy khuếch tán vào vùng void.
   - Oxy liên kết với Silicon → điền lấp void, biến thành oxide.
   - Void được loại bỏ → wafer chất lượng cải thiện.

**Quy Trình Điển Hình:**
```
Wafer CZ (có void, có oxy nhưng mất một phần do thời gian)
    ↓ (Xử lý nhiệt trong O₂ hoặc steam, ~1000°C, vài giờ)
Khuếch tán vào oxy
    ↓
Void được oxy "điền lấp" + Nồng độ oxy toàn wafer được duy trì ổn định
```

**Cân bằng:** Khuếch tán ngoài oxy (ở bề mặt) được cân bằng bởi khuếch tán vào oxy (ở vùng sâu/void).

## Vấn Đề: Auto-Doping (Tự Tạp Chất Hóa)

### Định Nghĩa

**Auto-doping** là hiện tượng **tiêu cực** - dopant (tạp chất doping như Boron, Phosphorus từ đế nồng độ cao) khuếch tán ra khỏi đế sang pha khí, rồi tái hấp thụ vào lớp epitaxial được mọc phía trên.

### Quá Trình

```
Đế Si (P-type, nồng độ B cao) 
    ↓ (Xử lý nhiệt ~1200°C, áp suất cao)
Boron khuếch tán ngoài → hơi Boron ở gần đế
    ↓ (Lớp epitaxial được mọc)
Boron từ hơi tái hấp thụ vào lớp epi
    ↓
Lớp epi bị nhiễm Boron từ đế → điện trở không đều, chất lượng xấu
```

### Tác Động

- **Ruin resistivity uniformity** - điện trở không đều trên wafer.
- **Giảm chất lượng thiết bị** - hiệu suất giảm.

### Giải Pháp

- Kiểm soát nhiệt độ, áp suất, thời gian.
- Sử dụng **barrier layer** giữa đế và lớp epi.
- Tối ưu hóa điều kiện xử lý để giảm khuếch tán dopant.

## Bảng So Sánh Khuếch Tán Ngoài vs Trong

| Tiêu Chí | Khuếch Tán Ngoài | Khuếch Tán Trong |
|---|---|---|
| **Chiều** | Ra ngoài wafer | Vào trong wafer |
| **Nguyên tử** | Oxy, dopant từ wafer | Oxy, hydrogen từ bên ngoài |
| **Điều kiện** | Nhiệt cao, khí trơ | Nhiệt cao, khí giàu oxy |
| **Lợi ích** | Tạo DZ sạch | Duy trì oxy, loại bỏ void |
| **Tiêu cực** | Oxide precipitate | Auto-doping (nếu không kiểm soát) |
| **Ứng dụng** | Wafer logic, IC yêu cầu bề mặt sạch | Wafer công suất, Wafer giác (bipolar) |

## Kết Luận

Khuếch tán ngoài/trong không phải là hiện tượng **hoàn toàn tốt hoặc xấu** - chúng phải được **kiểm soát cẩn thận** tùy thuộc vào:

1. **Loại wafer cần sản xuất** - logic vs công suất vs analog.
2. **Yêu cầu chất lượng** - độ sạch bề mặt, độ tinh khiết, resistivity uniformity.
3. **Công đoạn sản xuất** - sau đó, sử dụng một trong hai quá trình để tối ưu hóa chất lượng wafer cuối cùng.

Hiểu rõ cơ chế khuếch tán ngoài/trong là chìa khóa để tạo ra wafer Silicon chất lượng cao, đáp ứng yêu cầu của các thiết bị bán dẫn hiện đại.
