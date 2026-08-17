---
title: Công Đoạn Tạo Lớp Mỏng (Thin Film Deposition)
sourceUrl: https://semi-journal.jp/basics/process/deposition.html
category: quy-trinh-san-xuat
order: 15
flagship: false
---

## Định Nghĩa

Tạo lớp mỏng (成膜, seikan – film deposition) là quá trình **tạo ra một lớp vật liệu mỏng (từ vài nm tới vài μm) trên bề mặt wafer**. Lớp mỏng này có thể là:
- **Bán dẫn** (Si, Ge, GaAs, SiGe, GaN).
- **Cách điện** (SiO₂, Si₃N₄, HfO₂, Al₂O₃).
- **Dây dẫn** (Cu, Al, W, TiN).
- **Các vật liệu khác** (barrier layer, photoresist).

Công đoạn tạo lớp mỏng là **bước cốt lõi** được lặp lại **nhiều lần** (10-50 lần) trong toàn bộ quy trình sản xuất IC.

## Bốn Phương Pháp Chính

### 1. Thermal Oxidation (Oxy Hóa Nhiệt)

#### Nguyên Lý

**Nung nóng wafer silicon trong môi trường oxy (O₂) hoặc hơi nước (H₂O)** → silicon oxy hóa thành SiO₂.

**Phản ứng**:
- **Khô (Dry oxidation)**: Si + O₂ → SiO₂ ở ~1000°C.
  - Công thức: Si(s) + O₂(g) → SiO₂(s).
  - Tốc độ: Chậm (~50 nm/giờ).
- **Ướt (Wet oxidation)**: Si + 2H₂O → SiO₂ + 2H₂ ở ~1000°C.
  - Công thức: Si(s) + 2H₂O(g) → SiO₂(s) + 2H₂(g).
  - Tốc độ: Nhanh (~500 nm/giờ).

#### Quá Trình Tạo Layer Oxide

1. **Nung trong lò**: Wafer trong quartz tube, khí O₂/H₂O vào.
2. **Diffusion-controlled**: Oxy thoát xuyên qua lớp SiO₂ đã tạo để tiếp tục oxy hóa Si dưới.
3. **Thickness growth**: Lớp SiO₂ dần dần dầy lên, Si "tiêu thụ" (consumption ratio ≈ 0.45, tức 100nm Si → 230nm SiO₂).

#### Điều Kiện

- **Nhiệt độ**: 900-1100°C.
- **Thời gian**: Phút ~ giờ (tuỳ độ dày mong muốn).
- **Áp suất**: Thường ở áp suất khí quyển.
- **Khí**: O₂ (khô) hoặc H₂O/O₂ (ướt).

#### Mô Hình Deal-Grove

**Công thức độ dày tăng**:
```
X² + AX = Bt
```

Trong đó X = thickness, A, B = hằng số phụ thuộc T, t = thời gian.

- **X nhỏ (vùng mỏng)**: Tăng tuyến tính (linear) ∝ t.
- **X lớn (vùng dày)**: Tăng theo quy luật parabol ∝ √t.

#### Ưu Điểm

- **Độ sạch**: Không cần hóa chất tiếp xúc (in-situ process).
- **Chất lượng cao**: SiO₂ từ Si nguyên → giao diện Si/SiO₂ chất lượng tốt.
- **Gate oxide**: Có thể tạo SiO₂ cực mỏng (10-20 Å) làm gate dielectric.

#### Nhược Điểm

- **Thermal budget cao**: Nhiệt độ 1000°C → dopant diffusion, doping profile mở rộng.
- **Chi phí thiết bị lò**: Lò quartz phức tạp.
- **Chỉ cho SiO₂**: Không tạo oxide của vật liệu khác (Al, Ti...).

### 2. CVD (Chemical Vapor Deposition – Khuếch Tán Hóa Học từ Pha Khí)

#### Nguyên Lý

**Dùng khí hóa chất (gas precursor)** + **nhiệt độ/plasma** để tạo phản ứng hóa học → **tích tụ lớp rắn** trên wafer.

**Phương Trình Chung**:
```
Precursor gas + reactant gas → Solid film + Byproduct gas
```

**Ví Dụ**:
- **Si từ SiH₄**: SiH₄(g) + O₂(g) → SiO₂(s) + 2H₂(g) [để tạo SiO₂].
- **Si từ SiHCl₃**: 3SiHCl₃(g) + 4NH₃(g) → Si₃N₄(s) + 9HCl(g) + 3H₂(g) [để tạo Si₃N₄].
- **Polysilicon từ SiH₄**: SiH₄(g) → Si(s) + 2H₂(g) [để tạo poly-Si gate].

#### Hai Loại CVD

**Thermal CVD**:
- **Nhiệt độ**: 600-1000°C.
- **Áp suất**: Thường 0.1-10 Torr (LP-CVD) hoặc áp suất khí quyển (APCVD).
- **Ưu điểm**: Tốc độ khác (tuỳ hóa chất), chất lượng tốt.
- **Nhược điểm**: Thermal budget cao.

**Plasma-Enhanced CVD (PE-CVD)**:
- **Nhiệt độ**: 200-500°C (thấp hơn nhiều).
- **Plasma**: MW hoặc RF plasma kích hoạt khí.
- **Ưu điểm**: Nhiệt độ thấp → thermal budget thấp → không diffusion.
- **Nhược điểm**: Chất lượng film kém hơn thermal CVD (có khuyết tật, density thấp).

#### Ứng Dụng

- **SiO₂**: Thermal CVD từ SiH₄ + O₂, hoặc TEOS-CVD từ Si(OC₂H₅)₄.
- **Si₃N₄**: Thermal CVD từ SiH₄ + NH₃.
- **Polysilicon**: Thermal CVD từ SiH₄.
- **Cu**: CVD từ các hợp chất Cu phức tạp (ít dùng so với PVD/Electroplating).
- **High-k dielectric** (HfO₂, Al₂O₃): CVD từ metal precursor + O₂.

#### Ưu Điểm

- **Conformal coating**: Có thể phủ các cấu trúc phức tạp (rãnh hẹp, lỗ cao).
- **Tốc độ có thể điều chỉnh**: Tuỳ nhiệt độ, áp suất, flow rate.
- **Vật liệu đa dạng**: Có thể tạo bất kỳ vật liệu nào từ khí phù hợp.

#### Nhược Điểm

- **Khí tiền chất độc tính**: SiH₄ phát nổ, NH₃ độc, di dưỡng.
- **Byproduct khí**: Phải xử lý khí thải.
- **Contaminant**: Khí precursor có tạp chất → film bị nhiễm.

### 3. PVD (Physical Vapor Deposition – Khuếch Tán Vật Lý)

#### Nguyên Lý

**Dùng lực vật lý** (nhiệt, ion, laser) để **bay hơi/sputtering nguyên tố từ target**, nguyên tố này **bám lại trên wafer**.

#### Hai Phương Pháp Chính

**Evaporation (Bay Hơi Nhiệt)**:
- **Nung nóng target** (Al, Si, metal) tới điểm sôi → bay hơi → bám lên wafer lạnh.
- **Áp suất**: Ultra-high vacuum (UHV), ~10⁻⁶ Torr.
- **Tốc độ**: Vừa phải.
- **Ứng dụng**: Ít dùng, chỉ cho Al, Ti, W...

**Sputtering (Bắn Tung)**:
- **Target bị ion bombardment** (thường Ar⁺) từ plasma → nguyên tử target bị sputtered ra → bay tới wafer.
- **Áp suất**: Thấp, ~1-10 mTorr.
- **Tốc độ**: Nhanh (10-100 nm/phút).
- **Ứng dụng**: **Phổ biến nhất** – dùng cho Cu, W, TiN, barrier layer.

**Cơ Chế Sputtering**:
1. Ar⁺ được tạo bằng plasma.
2. Ar⁺ gia tốc vào target.
3. Va chạm → nguyên tử target phóng ra (sputtering yield ~1-10 nguyên tử/ion).
4. Nguyên tử du hành tới wafer → bám lại.

#### Đặc Điểm Sputtering

- **Directional** (hướng): Nguyên tử chủ yếu bay theo hướng wafer → không conformal trên cấu trúc hẹp.
- **Non-conformal** → không thích cho vùng sâu/hẹp.

#### Ưu Điểm

- **Vật liệu đa dạng**: Bất kỳ vật liệu nào có thể sputtered (metal, oxide...).
- **Không gas toxic**: Không cần khí nguy hiểm như CVD.
- **Tốc độ nhanh**: Sputtering nhanh.
- **Nhiệt độ thấp**: Wafer không bị nung nóng → thermal budget thấp.

#### Nhược Điểm

- **Không conformal**: Không phủ được cấu trúc 3D.
- **Damage**: Ar⁺ bombardment → gây defect ở surface.
- **UHV yêu cầu**: Cần chân không cao → chi phí cao.

### 4. Electroplating (Mạ Điện)

#### Nguyên Lý

**Dùng điện phân** để tích tụ kim loại từ dung dịch lên wafer.

**Phương Trình**:
```
M^(n+) + n·e⁻ → M
```

**Ứng dụng**: Chủ yếu để mạ **Copper (Cu)** cho dây dẫn (wiring).

#### Quá Trình

1. **Wafer (cathode)** được nhúng vào dung dịch chứa Cu²⁺ (thường CuSO₄).
2. **Anod** (Cu nguyên chất) ở đối diện.
3. **Áp điện**: Nối wafer là âm → Cu²⁺ di chuyển tới wafer → bị khử thành Cu rắn → bám lên.
4. **Kiểm soát dòng**: Dòng điện → tốc độ mạ, độ dầy màng Cu.

#### Ưu Điểm

- **Rẻ**: Chỉ cần dung dịch + điện áp DC.
- **Tốc độ nhanh**: Mạ Cu ~1 μm/phút.
- **Conformal**: Cu mạ đều trên mọi vùng (electrochemistry properties).
- **Dùng rộng rãi**: Hiện tại **phương pháp chủ đạo** để tạo dây dẫn Cu.

#### Nhược Điểm

- **Chỉ cho kim loại**: Không thể mạ oxide hay bán dẫn.
- **Cần conductive seed layer**: Trước tiên phải PVD/CVD một lớp Cu mỏng để làm cathode.
- **Seaming**: Khí bẫy tạo lỗ trong Cu.

## Các Loại Film Phổ Biến

| Film | Phương Pháp | Ứng Dụng | Đặc Điểm |
|------|-----------|---------|---------|
| **SiO₂** | Thermal oxidation, LP-CVD, PE-CVD | Gate oxide, interlayer dielectric | Sạch, chất lượng cao |
| **Si₃N₄** | LP-CVD | Cách điện, mask, spacer | Chất lượng cao, tuổi thọ cao |
| **Polysilicon** | LP-CVD SiH₄ | Gate, resistor | Tinh thể, conductivity |
| **TiN** | PVD sputtering | Barrier layer, seed layer | Mỏng, chống diffusion |
| **Cu** | Electroplating | Wiring, interconnect | Độ dẫn cao, rẻ |
| **Al** | PVD evaporation | Back metal, ít dùng | Lỗi thời |
| **HfO₂, Al₂O₃** | ALD | High-k gate dielectric | Chất lượng cao, mỏng |

## Tầm Quan Trọng

Tạo lớp mỏng quyết định:
- **Độ dầy chính xác**: Gate oxide 10Å → Vth, leakage chính xác.
- **Chất lượng film**: Sạch → đặc tính điện tốt.
- **Uniformity**: Lớp mỏng phải đều → tính chất không đổi trên wafer.
- **Chi phí**: Tạo lớp mỏng là bước lặp lại nhiều → chi phí lũy tích cao.
