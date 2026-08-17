---
title: Khuyết Tật Tinh Thể Silicon (シリコンの微視的欠陥)
sourceUrl: https://semi-journal.jp/basics/si-chem/si-defect.html
category: khoa-hoc-silicon
order: 15
flagship: false
---

## Ba Loại Khuyết Tật Vi Mô Chính

**Khuyết tật vi mô (microdefects)** là những **khoảng trống/cụm nguyên tử** kích thước nm-μm, hình thành trong quá trình CZ/FZ.

### 1. Void (Lỗ Rỗng, 空孔)

**Định Nghĩa**: Tập hợp các **khoảng trống nguyên tử (atomic vacancies)** đã **kết tụ** trong silicon.

**Kích Thước**: 0.1-10 μm
**Loại**: **V-rich** (vacancy-rich, giàu vacancy)
**Ảnh Hưởng**:
- Giảm độ bền cơ học
- Tạo điểm "pin-hole" trong oxide
- Ảnh hưởng tới silicon wafer quality

### 2. L-pit (Lõm Dây Chuyền, 格子間Si凝集体)

**Định Nghĩa**: Cụm các **nguyên tử Si xen kẽ (interstitial Si)** tạo **vòng chuyển vị (dislocation loops)**.

**Kích Thước**: Tương tự void
**Loại**: **I-rich** (interstitial-rich, giàu interstitial)
**Ảnh Hưởng**:
- Tạo leakage channels
- Ảnh hưởng tới nhân IC

### 3. Oxide Precipitate (Kết Tụ Oxide, SiO₂析出物)

**Định Nghĩa**: Những **cộng hợp SiO₂ lớn** hình thành từ **oxy dư** trong Si CZ.

**Từ Đâu**: Oxy từ crucible quartz trong CZ phương pháp → ~10¹⁷-10¹⁸ atom/cm³
**Hình Thành**: Khi cool down từ nhiệt độ cao, oxy **tích tụ và tinh lập** → SiO₂ khổng lồ
**Ảnh Hưởng**:
- Giảm cường độ cơ học
- Gây leakage trong thiết bị
- Chính là **lý do CZ cần Donor Killer Annealing**

## Mô Hình Voronkov (Voronkov Model)

### Nguyên Tắc

**Tỷ Lệ V/G (Pull Rate vs Temperature Gradient)** quyết định loại khuyết tật:

$$\frac{V}{G} = \frac{\text{Tốc độ kéo (mm/phút)}}{\text{Gradient nhiệt độ (°C/cm)}}$$

### V/G Cao (Tốc Độ Kéo Nhanh, Gradient Nhỏ)

- **Điều kiện**: Cool down chậm, Si không có thời gian rắn hóa → **vacancy tích tụ**
- **Kết quả**: **V-rich defects** (Void)
- **Nồng độ**: Cao, ảnh hưởng lớn

### V/G Thấp (Tốc Độ Kéo Chậm, Gradient Lớn)

- **Điều kiện**: Cool down nhanh, Si rắn hóa nhanh → **interstitial tích tụ**
- **Kết quả**: **I-rich defects** (L-pits)
- **Nồng độ**: Thấp hơn V-rich

### Điểm Tối Ưu

Có một **V/G tối ưu** để **giảm tổng khuyết tật** (sweet spot), thường xảy ra khi:
- V/G ≈ 0.5-1 mm-cm⁻¹/°C
- Đó là lý do **CZ hiện đại cần kiểm soát rất kỹ V, G**

## Ảnh Hưởng Tới Wafer Quality

| Defect Type | COP Count | Ảnh Hưởng |
|---|---|---|
| **Void (V-rich)** | Cao | Giảm yield, leakage |
| **L-pit (I-rich)** | Thấp | Ít ảnh hưởng |
| **Oxide Ppt** | Tuỳ Oxy | Gây hỏng nặng |

**Tiêu Chuẩn SEMI**: Defect density < 100/cm³ (modern wafer)

## Ứng Dụng Loại Bỏ Khuyết Tật

### Annealing Profile

**Donor Killer Annealing**:
- Nung 300-500°C: TD tạo
- Ủ 600-800°C: TD phân rã
- Mục đích: Loại oxy precipitate, giảm void

### Wafer Selection

- **Vùng V-rich**: Dùng cho **pin mặt trời** (void ít ảnh hưởng)
- **Vùng I-rich**: Dùng cho **IC logic** (L-pit ít làm hỏng)

## Kết Luận

**Mô hình Voronkov** là công cụ **dự đoán + kiểm soát khuyết tật** trong CZ. Hiểu **V/G, V-rich vs I-rich** giúp **tối ưu ingot quality** → **tăng wafer yield**.
