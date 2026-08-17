---
title: Công Đoạn Khắc – Etching (Etching Process)
sourceUrl: https://semi-journal.jp/basics/process/etching.html
category: quy-trinh-san-xuat
order: 14
flagship: false
---

## Định Nghĩa

Khắc (エッチング – etching) là quá trình **loại bỏ các phần không cần thiết của wafer** (silicon, oxide, metal, nitride...) bằng **hóa chất hoặc plasma** để tạo hình dạng cấu trúc 3D. Etching là một công đoạn **cốt lõi** quyết định độ chính xác hình dạng mạch.

Trong quy trình quang khắc, resist đã được hình thành thành mặt nạ – bước etching sử dụng resist này để **bảo vệ vùng không bị khắc**, trong khi **loại bỏ vất liệu ở vùng khác**.

## Hai Loại Khắc Chính

### 1. Wet Etching (Khắc Ướt)

#### Nguyên Lý

Dùng **dung dịch hóa học (liquid acid/base)** để tan/phân hủy vật liệu wafer.

**Ví dụ Phản Ứng**:
- **HF (axit hydrofluoric)**: Tan SiO₂ → Si + HF → SiF₆²⁻ (tan).
  - Phản ứng: SiO₂ + 6HF → SiF₆²⁻ + 2H₂O + 4H⁺.
- **KOH (kiềm mạnh)**: Tan Si (silicon).
- **H₂SO₄ + H₂O₂**: Oxy hóa mạnh, tan nhiều vật liệu.

#### Quy Trình

1. **Chuẩn bị**: Wafer với resist mask đặt trong bồn chứa dung dịch etch.
2. **Ngâm (Soak)**: Wafer ngâm trong etch solution ở nhiệt độ/thời gian kiểm soát.
3. **Phản ứng**: Dung dịch tấn công wafer, loại bỏ vật liệu ở vùng không có resist.
4. **Rửa**: Rửa wafer bằng nước cất để dừng phản ứng.

#### Đặc Điểm: Isotropic Etching (Khắc Đẳng Hướng)

- **Khắc mọi hướng**: Ngang (horizontal) + xuống (vertical) → cấu trúc bị **undercut** (mút nhô ra dưới resist).
- **Công thức**: Etched depth ≈ Etch rate × Time.
- **Tương đối đơn giản**: Không cần vacuum/plasma.
- **Throughput cao**: Xử lý nhiều wafer cùng lúc (batch).

#### Ưu Điểm

- **Chi phí thấp**: Bồn chứa đơn giản, hóa chất rẻ.
- **Không gây damage**: Không tạo tích điện (ESD), không làm hại transistor.
- **Tốt cho vật liệu cứng**: Etch metal, SiO₂, Si dễ.

#### Nhược Điểm

- **Độ phân giải kém**: Undercut → cạnh mạch không sắc nét → pattern bị rộng hơn.
- **Selectivity kém**: Khó lựa chọn loại vật liệu → có thể etch nhầm resist hoặc substrate.
- **Chi phí xử lý thải cao**: Dung dịch acid/base phải xử lý → độc hại môi trường.
- **Ít dùng hiện đại**: Chỉ dùng cho công nghệ cũ hoặc bước etch không yêu cầu độ chính xác cao.

### 2. Dry Etching (Khắc Khô)

Dùng **khí hoặc plasma** để etch vật liệu.

#### 2.1. Gas Etching (Khắc Khí Hóa Học)

**Phương Pháp**: Dùng khí phản ứng hóa học ở nhiệt độ cao.

**Ví dụ**: Cl₂ khí etch Si hoặc metal.

**Nhược Điểm**: Ít dùng vì tốc độ chậm, khó kiểm soát.

#### 2.2. Sputter Etching (Khắc Bằng Sputtering)

**Nguyên Lý**: Tia ion (thường Argon) ở năng lượng cao bắn vào wafer → **các nguyên tử wafer bị sputtered (bật) ra**.

**Đặc Điểm**: **Isotropic** (giống wet etching) → undercut.

**Ưu điểm**: Etch tất cả vật liệu (Si, SiO₂, metal, resist...).

**Nhược điểm**: Slow, tạo damage, tích điện.

#### 2.3. Reactive Ion Etching (RIE)

**Nguyên Lý**: Kết hợp **phản ứng hóa học + sputtering vật lý**.

**Cơ Chế**:
1. **Khí phản ứng** (thường Cl₂, CF₄, SF₆, O₂) trong plasma → tạo **radical** (ví dụ Cl·, F·).
2. **Radical tấn công** wafer → phá vỡ liên kết → tạo **volatile compounds** (chất bay hơi).
3. **Ion từ plasma** (Cl⁺, F⁺) được gia tốc bởi **điện trường ngang** → sputtering thêm.
4. **Combine**: Hóa học + vật lý → etch mạnh mẽ.

**Đặc Điểm: Anisotropic Etching (Khắc Hướng)**

- **Khắc chủ yếu xuống** (vertical) → cẁnh nhọn.
- **Cạnh sắc nét**: Không undercut (hoặc undercut nhỏ) → pattern chính xác.
- **Selectivity cao**: Có thể lựa chọn loại vật liệu (etch Si mà không etch SiO₂).

**Ưu Điểm**

- **Độ phân giải cao**: Pattern sắc nét, cạnh nhọn.
- **Selectivity**: Lựa chọn loại vật liệu tốt.
- **Chính xác**: Kiểm soát tốt chiều sâu etch.
- **Phù hợp hiện đại**: Chủ lực trong công nghệ node nhỏ.

**Nhược Điểm**

- **Tạo damage**: Plasma ion làm hại crystallinity → khuyết tật → leakage tăng.
- **Tích điện (charge-up)**: Có thể gây ESD (giải pháp: neutral/low damage RIE).
- **Chi phí cao**: Thiết bị RIE phức tạp.
- **Throughput**: Single-wafer RIE chậm.

## Các Loại Vật Liệu Cần Etch

| Vật Liệu | Etch Method | Etch Gas Typical |
|---------|-----------|-----------------|
| **Si (Silicon)** | RIE | Cl₂, SF₆ |
| **SiO₂ (Oxide)** | RIE | CF₄, C₂F₆ (fluorine-based) |
| **Si₃N₄ (Nitride)** | RIE | CF₄, SF₆ |
| **Polysilicon** | RIE | Cl₂ |
| **Metal (Al, W, Cu)** | RIE | Cl₂, BCl₃ (Cu khó etch, dùng Cl₂ + O₂) |
| **Resist (Photoresist)** | RIE | O₂ (oxygen plasma ashing) |

## Các Chỉ Số Quan Trọng

### Etch Rate (Tốc Độ Khắc)

```
Etch rate (nm/min) = Depth etched / Time
```

**Ảnh hưởng**:
- **Nhanh**: Thời gian etch ngắn → throughput cao, nhưng khó kiểm soát chiều sâu → over-etch.
- **Chậm**: Dễ kiểm soát chiều sâu, nhưng thời gian lâu → throughput thấp.

### Selectivity (Tính Chọn Lựa)

```
Selectivity = Etch rate (material A) / Etch rate (material B)
```

**Ví dụ**: Selectivity SiO₂/Si = etch rate O₂ dùng SiO₂ / etch rate O₂ dùng Si.

**Tầm quan trọng**: Selectivity cao → etch xong material A, material B còn nguyên → không cần kiểm soát thời gian chính xác.

### Aspect Ratio

```
Aspect ratio = Etched depth / Pattern width
```

**Ảnh hưởng**: Aspect ratio cao (etch sâu, pattern hẹp) → khó etch (profile collapse).

## Profile Control – Straight Wall vs. Sloped

- **Straight (Vertical) Wall**: Anisotropic RIE → cạnh dựng → pattern chính xác.
- **Sloped Wall**: Isotropic etch hoặc RIE không tối ưu → cạnh chếch → undercut.

Hiện đại yêu cầu **straight wall** → RIE anisotropic.

## Etch Selectivity – Quyết Định Thành Công

Selectivity **Si/SiO₂, SiO₂/Si₃N₄, Metal/SiO₂** rất quan trọng. Nếu selectivity kém:
- Etch SiO₂, nhưng SiO₂ sẽ etch Si ngầm → undercut.
- Khó dừng etch đúng lúc → pattern bị hỏng.

## Etch Endpoint Detection

**Vấn đề**: Biết khi nào dừng etch → prevent over-etch.

**Phương pháp**:
- **Optical Emission Spectroscopy (OES)**: Theo dõi phổ quang từ plasma → thay đổi khi vật liệu thay đổi → dừng etch.
- **Interferometry**: Đo độ dày từ phía sau wafer.
- **Time-based**: Tính thời gian từ etch rate (kém chính xác).

## Tầm Quan Trọng

Etching quyết định:
- **Độ chính xác pattern**: Pattern width, depth, profile.
- **Yield**: Etch sai → chip báng.
- **Tính chất điện**: Damage từ plasma → leakage ↑ → hiệu năng ↓.
- **Chi phí**: Gas, thiết bị RIE đắt.

## Trường Hợp Đặc Biệt: Deep Etching / Via Etching

Khi cần etch **rất sâu** (10-100 μm) để tạo **via** (lỗ kết nối giữa các lớp):
- Yêu cầu **high aspect ratio** (R = 10+).
- Dùng **Bosch process** (ICP RIE với passivation thay phiên) hoặc **deep RIE**.
- **Scalloping**: Cạnh lượn sóng do passivation thay phiên → khó tránh.
