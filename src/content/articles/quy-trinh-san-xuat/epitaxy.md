---
title: Epitaxy – Tăng Trưởng Epitaxial (Epitaxial Growth)
sourceUrl: https://semi-journal.jp/basics/process/epi.html
category: quy-trinh-san-xuat
order: 22
flagship: false
---

## Định Nghĩa

Epitaxy (エピタキシー) hay epitaxial growth là quá trình **mọc một lớp tinh thể mới trên nền tinh thể có sẵn** với **hướng tinh thể (crystal orientation) giống** nền.

**Công Thức**:
```
Substrate (hạt seed) + Precursor (khí/lỏng) → Epitaxial Layer (tăng trưởng)
```

**Ứng Dụng**: CMOS gate engineering, SiGe channel, GaN power devices, SiC, GaAs (RF/optoelectronic).

## Hai Loại Epitaxy

### 1. Homoepitaxy (Cùng Chất)

**Định Nghĩa**: Nền và lớp epitaxy là **cùng loại vật liệu**.

**Ví Dụ**: Si substrate → Si epitaxial layer.

**Ứng Dụng**: CMOS (Si/Si), Power devices (SiC/SiC).

**Ưu Điểm**:
- Không bị lattice mismatch (mismatch = 0%).
- Crystal quality tuyệt vời.
- Interface Si/Si sạch → đặc tính điện tốt.

### 2. Heteroepitaxy (Khác Chất)

**Định Nghĩa**: Nền và lớp epitaxy là **loại vật liệu khác**.

**Ví Dụ**: Si substrate → SiGe layer, Si substrate → GaN layer.

**Ứng Dụng**: SiGe CMOS (strained channel → tăng mobility), GaN/Si (power), GaAs/Si (ít dùng, mismatch quá lớn).

**Thách Thức**: **Lattice mismatch** (kích thước ô tinh thể khác) → stress → dislocation → defect.

**Mismatch Ví Dụ**:
- Si (5.43Å) vs. SiGe (5.65Å): ~4% mismatch → có thể hoạt động nếu lớp SiGe mỏng (<100nm).
- Si (5.43Å) vs. GaN (3.19Å): ~40% mismatch → khó hoạt động.

## Ba Cơ Chế Tăng Trưởng Epitaxy

### 1. Frank-van der Merwe (FM) – Layer-by-Layer

**Đặc điểm**: Tăng trưởng **2D từ lớp nguyên tử này sang lớp kế tiếp**, một lớp complete rồi mới tới lớp khác.

**Điều kiện**: Substrate-adsorbate interaction mạnh.

**Kết quả**: Bề mặt trơn, chất lượng cao.

**Ứng dụng**: Homoepitaxy (Si/Si), MBE high-quality.

### 2. Volmer-Weber (VW) – 3D Island

**Đặc điểm**: Tăng trưởng **dạng đảo (3D islands)** từ nhiều **nucleation sites** độc lập, không phẳng.

**Điều kiện**: Adsorbate-substrate interaction yếu.

**Kết quả**: Bề mặt gồ ghề, chất lượng kém, defect nhiều.

**Ứng dụng**: Heteroepitaxy với mismatch lớn (GaN/Si).

### 3. Stranski-Krastanov (SK) – Transition

**Đặc điểm**: Ban đầu FM (phẳng, 2D) → sau khi đạt độ dày tới hạn → chuyển thành VW (3D).

**Lý do**: Ứng suất tích lũy quá lớn (từ lattice mismatch) → hệ thống prefer 3D (giảm elastic energy).

**Kết quả**: Self-assembled quantum dots (ứng dụng trong optoelectronics, quantum computing).

## Phương Pháp Tăng Trưởng

### 1. CVD (Chemical Vapor Deposition)

**Phương Pháp**: Khí precursor (ví dụ SiHCl₃, SiH₄) vào lò nung (600-1000°C) → phản ứng hóa học trên Si surface → Si deposit.

**Phương Trình Ví Dụ**:
```
SiHCl₃(g) + H₂(g) → Si(s) + 3HCl(g) + heat
```

**Ưu Điểm**:
- Tốc độ nhanh (tăng trưởng ~1 μm/phút).
- Doping bằng khí (B₂H₆ cho p, PH₃ cho n).
- Throughput cao (batch processing).

**Nhược Điểm**:
- Thermal budget cao → dopant diffusion → profile mở rộng.
- Khí precursor độc tính (SiH₄ phát nổ, PH₃/AsH₃ độc cực).

### 2. MBE (Molecular Beam Epitaxy)

**Phương Pháp**: Nguyên tố được **nung nóng trong UHV (ultra-high vacuum)** (~10⁻⁹ Torr) → tạo **molecular beams** bay trực tiếp tới substrate lạnh.

**Ưu Điểm**:
- **Kiểm soát nguyên tử**: Tăng trưởng chậm, chính xác → độ dầy control tới monolayer.
- **Thermal budget thấp**: Substrate <600°C → dopant không diffuse.
- **In-situ monitoring**: RHEED (Reflection High-Energy Electron Diffraction) theo dõi surface real-time.
- **Chất lượng tuyệt vời**: Crystal defect cực thấp.

**Nhược Điểm**:
- Chậm (~0.1-1 μm/giờ).
- UHV yêu cầu → chi phí cao.
- Throughput thấp (single-wafer).

**Ứng Dụng**: Quantum well (QW), quantum dots, heterostructures yêu cầu high-quality.

### 3. MOCVD (Metal-Organic CVD)

**Phương Pháp**: CVD dùng **organometallic precursor** (ví dụ Ga(CH₃)₃ cho Ga, As(CH₃)₃ cho As).

**Ứng Dụng**: Chủ yếu cho **compound semiconductors** (GaAs, GaN, AlGaAs, InGaP) → không thể dùng hydride CVD.

**Ưu Điểm**: Tốc độ, doping dễ dàng (organometallic compounds).

**Nhược Điểm**: Khí organic độc, đắt.

## Auto-Doping Problem

**Vấn đề**: Trong homoepitaxy (ví dụ Si epi trên Si substrate), dopant từ **substrate có thể diffuse ngược lên** vào lớp epitaxy → "auto-doping" → profile bị contaminate.

**Ví Dụ**: 
- Substrate p-type (Boron-doped) → đặt lớp n-type epi → Boron từ substrate diffuse lên → profile n-type bị hỏng.

**Giải Pháp**:
- Tối ưu nhiệt độ/thời gian để minimize diffusion.
- Dùng **MBE** (nhiệt độ thấp).
- **Flash Annealing** (nóng cực nhanh) kích hoạt dopant mà không để diffuse.

## Ứng Dụng Chính

| Ứng Dụng | Epitaxy Type | Mục Đích |
|---------|-------------|---------|
| **CMOS (5nm+)** | Si homoepitaxy | Stress engineering, mobility boost |
| **SiGe Channel** | SiGe hetero | Tensile strain → hole mobility ↑ |
| **GaN Power** | GaN hetero/Si | High voltage switching |
| **GaAs RF** | GaAs homoepitaxy | High-frequency amplifier |
| **Quantum Dots** | SiGe SK | Quantum computing, optoelectronic |

## Tầm Quan Trọng

Epitaxy quyết định:
- **Carrier Mobility**: Strain engineering tăng tốc độ transistor.
- **Bandgap Engineering**: Heteroepitaxy tạo well/barrier → control carrier confinement.
- **Crystal Quality**: Defect → leakage, lifetime giảm.
- **Cost**: MBE đắt, CVD rẻ → choice ảnh hưởng cost.
