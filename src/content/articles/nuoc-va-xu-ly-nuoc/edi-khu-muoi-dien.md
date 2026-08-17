---
title: EDI (Khu Muối Điện)
sourceUrl: https://semi-journal.jp/basics/water/edi.html
category: nuoc-va-xu-ly-nuoc
order: 10
flagship: false
---

## Định Nghĩa

**EDI (Electrodeionization)** là "phương pháp khu muối liên tục sử dụng nhựa trao đổi ion (ion exchange resin), màng trao đổi ion (ion exchange membrane), và điện trường (electric field) kết hợp" để loại bỏ tạp chất.

Nó được **đặt ngay sau bước Degassing Membrane** trong hệ thống xử lý nước chính, mục đích loại bỏ những ion còn lại mà RO không bắt được hết.

## Cấu Trúc Thiết Bị

### Hai Phòng Chính

1. **Phòng Khu Muối (Deionization Chamber)**
   - Chứa **nhựa trao đổi ion (IER)** − dương ion (H⁺) và âm ion (OH⁻).
   - Nước cần xử lý chảy qua.

2. **Phòng Tập Trung (Concentration Chamber)**
   - Là nơi những ion bị **tập trung lại** để sau này xả ra.

### Màng Trao Đổi Ion
- **Màng trao đổi cation (Cation Exchange Membrane)**: chỉ cho phép cation (Na⁺, K⁺, Ca²⁺...) đi qua.
- **Màng trao đổi anion (Anion Exchange Membrane)**: chỉ cho phép anion (Cl⁻, SO₄²⁻...) đi qua.

## Nguyên Lý Hoạt Động

### Áp Dụng Điện Áp DC (Direct Current)

Khi điện áp DC được tác động:

1. **Cation (Na⁺, K⁺...)** bị **phân cực âm** → hướng về cathode (cực âm).
2. **Anion (Cl⁻, SO₄²⁻...)** bị **phân cực dương** → hướng về anode (cực dương).
3. **Vận động ion**: Những ion bị **kéo vào phòng tập trung** (concentration chamber).

### Tái Tạo Tự Động (Self-regeneration)

- Khi ion di chuyển, nước bị **vi phân ly** thành H⁺ và OH⁻.
- **H⁺** tích lũy ở nhựa cation → nhựa được "**tái tạo**" (regenerated) với H⁺.
- **OH⁻** tích lũy ở nhựa anion → nhựa được "**tái tạo**" với OH⁻.
- **Kết quả**: Nhựa không cần thêm hóa chất tái tạo → tiết kiệm chi phí + không tạo chất thải.

## Ưu Điểm So Với Trao Đổi Ion Thông Thường

| Tiêu Chí | EDI | Trao Đổi Ion Thông Thường (IER) |
|---|---|---|
| **Tái Tạo** | Tự động (no chemical) | Cần hóa chất (HCl, NaOH) |
| **Chi Phí Tái Tạo** | Thấp (chỉ điện) | Cao (hóa chất + lao động) |
| **Chất Thải** | Ít | Nhiều (nước thải acid/base) |
| **Tốc Độ** | Nhanh | Chậm hơn |
| **Độ Liên Tục** | Liên tục | Theo lô (batch) |

## Hiệu Suất Loại Bỏ

- **Ion cation**: loại bỏ xuống mức **ppb (phần tỉ)**, thậm chí **ppt (phần tỉ tỉ)**.
- **Ion anion**: loại bỏ tương tự.
- **Silica (SiO₂)**: EDI có hiệu quả loại bỏ silica rất tốt (quan trọng vì silica dễ gây fouling).

## Vị Trí trong Quy Trình

```
Nước Thô
    ↓
[Pretreatment: Lọc Cát + Than] → [RO: loại bỏ 95-99% ion]
                                   ↓
                    [Degassing Membrane: loại bỏ CO₂, O₂]
                                   ↓
                    [EDI: loại bỏ ion đến ppt level]
                                   ↓
                    [Nước Tinh Khiết (~1-15 MΩ·cm)]
```

## Kết Luận

**EDI là công đoạn nâng cao chất lượng nước** từ mức tinh khiết (1–15 MΩ·cm) lên gần với mức siêu tinh khiết. Khả năng **tự động tái tạo không cần hóa chất** của nó làm cho EDI trở thành **công nghệ hiệu quả kinh tế** trong sản xuất nước bán dẫn hiện đại.
