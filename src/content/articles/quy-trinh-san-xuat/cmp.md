---
title: CMP – Đánh Bóng Hóa-Cơ (Chemical Mechanical Polishing)
sourceUrl: https://semi-journal.jp/basics/process/cmp.html
category: quy-trinh-san-xuat
order: 16
flagship: false
---

## Định Nghĩa

CMP (đánh bóng hóa-cơ, 化学機械研磨) là quá trình **kết hợp tác dụng hóa học và cơ học** để **làm phẳng bề mặt wafer**. Hóa chất làm mềm/tan vật liệu, đá mài (pad) + hạt mài (abrasive) loại bỏ vật liệu thừa.

**Nguyên Lý Kết Hợp**:
- **Hóa học**: Dung dịch polishing (slurry) chứa CeO₂, SiO₂, hoặc hạt mài khác + reactant hóa học.
- **Cơ học**: Pad đánh bóng quay, áp suất → hạt mài gãi/mài surface.
- **Kết quả**: Vật liệu bị mài mòn + hoá học tan → tốc độ polishing nhanh, bề mặt sạch.

## Ứng Dụng Chính

1. **Wafer Silicon**: Làm phẳng wafer thô từ cutting/lapping → độ phẳng nano.
2. **Trench Isolation (STI)**: Mài dẹp oxide STI sau etch → bề mặt bằng.
3. **Interlayer Dielectric**: Mài dẹp oxide giữa các lớp metal.
4. **Metal Polishing**: Mài Cu, Al, W sau deposition/electroplating.
5. **Damascene Process**: Mài dẹp Cu dư sau mạ điện → định hình dây dẫn.

## Quy Trình CMP Chi Tiết

**Bước 1**: Wafer đặt face-down trên pad đánh bóng quay.
**Bước 2**: Phun slurry (hạt mài + hóa chất) lên pad.
**Bước 3**: Pad quay ở tốc độ 50-300 RPM, wafer quay 20-100 RPM (ngược chiều).
**Bước 4**: Áp suất controlled (~2-5 psi) để kiểm soát mài mòn.
**Bước 5**: Giám sát **endpoint** (khi nào dừng) bằng optical, in-situ sensor.
**Bước 6**: Rửa wafer sạch slurry.

## Vật Liệu Slurry

| Ứng Dụng | Abrasive Particles | Hóa Chất | Dụng Ý |
|---------|------------------|---------|--------|
| **SiO₂ polish** | CeO₂ (Cerium oxide) | KOH, H₂O₂ | CeO₂ yếu Si-O bond → dễ mài |
| **Si polish** | SiO₂ | KOH | SiO₂ cơ học, KOH hóa học |
| **Cu polish** | Silica (SiO₂) | H₂O₂ + acid | H₂O₂ oxy hóa Cu → oxide dễ mài |
| **TiN polish** | Al₂O₃, SiO₂ | H₂O₂ | Oxy hóa TiN |

## Các Chỉ Số Quan Trọng

**Polishing Rate** (nm/min): Tốc độ loại bỏ vật liệu.
- ArF: 50-200 nm/min (phụ thuộc oxide loại).
- Cu: 100-300 nm/min.

**Selectivity**: Tỷ lệ mài của material A / material B.
- Ví dụ: Selectivity SiO₂/Si = 50 → mài SiO₂ nhanh 50× Si.
- Quan trọng để **stop-on** (dừng đúng khi oxide mài xong, Si còn nguyên).

**Uniformity**: Độ đều trên wafer (mục tiêu <5%).
- Nếu không đều → mạch có vùng dày vùng mỏng → yield giảm.

**Planarity (WIWU – Wafer-In-Wafer-Uniformity)**:
- Độ phẳng theo micro-scale (nanomet).
- CMP cho phép <1 nm roughness → siêu phẳng.

## Vấn Đề và Thách Thức

**Dishing**: Vùng mềm (trench) bị mài sâu hơn vùng cứng (metal line).
**Erosion**: Vùng không có metal bị mài nhiều hơn.
**Corrosion**: Metal bị hoá học tan (đặc biệt Cu + acid).
**Defect Generation**: CMP tạo hạt → contamination.

## Tầm Quan Trọng

CMP là **bước cạn dần đời sống**, mỗi bước lặp lại ~5-15 lần:
- Quyết định độ phẳng → yield.
- Selectivity → stop-on chính xác.
- Tỷ lệ yield wafer cao nhất phụ thuộc vào CMP quality.
