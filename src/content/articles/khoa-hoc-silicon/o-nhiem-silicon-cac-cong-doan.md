---
title: Ô Nhiễm Silicon Trong Các Công Đoạn (シリコンの汚染)
sourceUrl: https://semi-journal.jp/basics/si-chem/impurity.html
category: khoa-hoc-silicon
order: 8
flagship: false
---

## Tổng Quan

**Ô Nhiễm (Contamination, 汚染)** là sự có mặt của các **tạp chất không mong muốn** trên wafer silicon. Một trong những **thách thức lớn nhất** của ngành bán dẫn hiện đại là kiểm soát ô nhiễm, vì ngay cả **những tạp chất ở mức vô cùng nhỏ** (ppb – phần tỷ) cũng có thể **hủy hoại toàn bộ thiết bị**.

## Bốn Loại Ô Nhiễm Chính

### 1. Hạt Vi Mô (Particles, 微粒子)

#### Định Nghĩa
**Hạt vi mô** là những **hạt rắn nhỏ** từ **nm (nanomet) đến μm (micromet)** – bụi, mảnh vỡ, hoặc sản phẩm phụ từ quá trình sản xuất.

#### Kích Thước Và Phân Loại
- **Macroparticle**: > 1 μm (nhìn thấy bằng mắt hoặc kính hiển vi ánh sáng)
- **Microparticle**: 0.1-1 μm
- **Nanoparticle**: < 0.1 μm (chỉ có thể nhìn qua TEM)

#### Nguồn Gốc
- **Môi trường cleanroom** (bề mặt, hệ thống HVAC)
- **Con người** (da, tóc, mồ hôi, quần áo)
- **Vật liệu công nghiệp** (mài, polish, resist)
- **Thiết bị sản xuất** (phần mòn, bụi máy)
- **Hệ thống nước** (nước cất bị ô nhiễm)

#### Ảnh Hưởng Tới Thiết Bị

- **Mùa Thu Lỗi**: Hạt vi mô **che phủ một phần pattern** trong photolithography
  - Khi etch, hạt bảo vệ Si bên dưới → lại **lỗ trống**
  - Lỗ này **chuyên mạch IC bị ngắt** hoặc **tạo leakage**

- **Tần Số Lỗi**: Nếu wafer có **100 hạt > 0.1 μm**, có thể có **10+ chip bị lỗi** trên wafer

- **Ảnh Hưởng Tới Yield**: Ô nhiễm hạt là **nguyên nhân chính gây lỗi** (~30-40% lỗi trong IC nhỏ)

#### Kiểm Soát
- **Cleanroom cấp cao** (ISO 5-6)
- **Particle counter** liên tục giám sát
- **Rửa sạch định kỳ** (RCA standard)
- **Sử dụng thiết bị sạch** (ultraviolet, plasma treatment)

### 2. Chất Vô Cơ (Inorganic Substances) – Kim Loại Nặng

#### Loại Chính

**Kim Loại Kiềm** (Alkali Metals):
- **Na⁺ (Sodium), K⁺ (Potassium), Li⁺ (Lithium)**
- Từ: nước, hóa chất, quần áo người vận hành

**Kim Loại Chuyển Tiếp** (Transition Metals):
- **Fe (Iron), Cu (Copper), Ni (Nickel), Cr (Chromium), Zn (Zinc), Co (Cobalt)**
- Từ: thiết bị sản xuất, bề mặt mài, dụng cụ

#### Nồng độ Ngưỡng Tối Thiểu

Ngay cả ở nồng độ **cực thấp** (ppb – phần tỷ), kim loại cũng gây hại:

| Kim Loại | Nồng Độ Gây Hại | Ảnh Hưởng |
|---|---|---|
| **Fe** | ~10¹¹ atom/cm³ | Giảm lifetime hạt tải 10-100 lần |
| **Cu** | ~10¹² atom/cm³ | Tạo deep trap, leakage cao |
| **Ni** | ~10¹² atom/cm³ | Hỏng MOSFET |
| **Na** | ~10¹³ atom/cm³ | Tích điện ở oxide, gây instability |

**Kỳ Diệu**: Chỉ **một nguyên tử kim loại trên triệu tỷ nguyên tử Si** cũng **mất cân bằng toàn bộ điện tích thiết bị**!

#### Cơ Chế Hại

- Kim loại tạo **deep level (bẫy)** giữa Ev-Ec
- Electron/hole bị mắc kẹt → **giảm lifetime (τ)**
- Lifetime giảm → **dòng rò tăng, hiệu suất xuống**
- Công thức: $$\Delta I_{\text{leakage}} = \frac{q D n_i L}{L_D}$$

#### Kiểm Soát

- **RCA SC1 + SC2** loại bỏ hầu hết kim loại
- **Implant isolation** (gettering)
- **Dùng dụng cụ titanium/platinum** (ít reactive) thay vì inox thông thường

### 3. Chất Hữu Cơ (Organic Materials)

#### Loại Chính

- **Sáp gia công (polishing wax, 研磨ワックス)**
- **Dư lượng Photoresist** từ lithography
- **Dầu mỡ** từ dụng cụ, con người
- **Bụi da, tóc** (70% bụi không khí)
- **Plastic, elastomer** từ bộ phận thiết bị
- **Các hợp chất hữu cơ** từ nước, hóa chất

#### Ảnh Hưởng

- **Ngăn tiếp xúc** giữa các lớp → **điện trở tập trung (contact resistance)** cao
- **Ô nhiễm photoresist dư** gây **chuyển vị khuyết tật (line width roughness)**
- **Momen tích điện** → ảnh hưởng tới dielectric

#### Kiểm Soát

- **RCA SC1** (dung dịch kiềm nóng) loại hữu cơ tốt nhất
- **Ozone cleaning** (UV + O₃ oxidize hữu cơ)
- **Ashing** (plasma oxygen)

### 4. Vi Khuẩn / Vi Sinh Vật (Microorganisms)

#### Nguồn Gốc

**Nước cất (Deionized Water – DI Water)**:
- Nước cất được dùng rất nhiều trong sản xuất (rửa, quenching, chế pha)
- Nước **không có chlorine (axit hóa)** để tiệt khuẩn như nước lạnh thường
- **Vi khuẩn phát triển** nếu hệ thống bị hở

#### Loại Vi Khuẩn

- **Pseudomonas**, **Bacillus**, **Cocci** – phổ biến nhất
- Phát triển trong đường ống, bể chứa, filters

#### Vấn Đề Cụ Thể

Nước bị nhiễm vi khuẩn → hình thành **cụm hạt lớn (~100 μm)**:
- Các hạt này chứa **phosphor (P), iron (Fe), metal salt**
- Khi wafer được rửa bằng nước bị nhiễm → **P, Fe được khuếch tán vào Si**
- **Điện trở wafer thay đổi** → không thích hợp để sử dụng

#### Kiểm Soát

- **Hệ thống RO (Reverse Osmosis) + DI** hiện đại
- **Thêm biocide (thạo tiệt khuẩn)** hoặc **UV sterilization**
- **Kiểm tra định kỳ** số lượng vi khuẩn (CFU – Colony Forming Units)
- **Thay filter thường xuyên**

## Ảnh Hưởng Tổng Hợp

| Loại Ô Nhiễm | Mức Độ Nguy Hiểm | Ảnh Hưởng Chính | Kiểm Soát |
|---|---|---|---|
| **Hạt vi mô** | Cao | Lỗi pattern | Cleanroom, rửa sạch |
| **Kim Loại** | Cực Cao | Lifetime ↓↓, leakage ↑↑ | RCA SC1/SC2 |
| **Hữu Cơ** | Vừa | Contact resistance ↑ | RCA SC1, ozone |
| **Vi Khuẩn** | Cao | P/Fe khuếch tán | DI purity, UV |

## Tiêu Chuẩn Ô Nhiễm Cho Wafer Bán Dẫn

### SEMI Standard

- **Particle ≤ 0.25 μm**: < 1000 particles/cm³
- **Particle ≤ 0.1 μm**: < 500 particles/cm³
- **Kim loại (Fe)**: < 10¹¹ atom/cm³
- **Hữu cơ (TOC)**: < 50 ppb (phần tỷ theo phần lượng)

### Hiện Đại (28nm Node)

- **Particle ≤ 45 nm**: < 100 particles/cm³
- **Các kim loại cơ bản**: < 10¹¹ atom/cm³
- **Sạch sẽ toàn bộ**: < 10 nm defect

## Quy Trình Làm Sạch RCA (Standard Clean)

RCA là **phương pháp tiêu chuẩn** loại bỏ cả 3 loại ô nhiễm (hạt, kim loại, hữu cơ):

1. **SC1 (SC = Standard Clean)**: H₂O:NH₄OH:H₂O₂ = 5:1:1, 75°C, 10-20 phút
   - Loại hữu cơ + hạt (pH cao → zeta potential đẩy hạt)

2. **SC2**: H₂O:HCl:H₂O₂ = 6:1:1, 75°C, 10-20 phút
   - Loại kim loại (pH thấp acid → complexing)

3. **Rửa DI + Sấy** (khô hoàn toàn)

## Kết Luận

**Ô Nhiễm điều khiển toàn bộ yield** của IC hiện đại. Mỗi công đoạn (slicing, epitaxy, photolithography, etch, diffusion, implant, ashing, cleaning) đều có **rủi ro ô nhiễm riêng**. Vì vậy, **kiểm soát chất lượng nước (DI purity), cleanroom, hóa chất, thiết bị** là **cốt lõi của sản xuất bán dẫn hiện đại**.
