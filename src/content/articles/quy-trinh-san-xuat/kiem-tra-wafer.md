---
title: Kiểm Tra Wafer (Wafer Inspection)
sourceUrl: https://semi-journal.jp/basics/process/inspection.html
category: quy-trinh-san-xuat
order: 18
flagship: false
---

## Định Nghĩa

Kiểm tra wafer (ウェーハ検査, wafer kensa) là quá trình **phát hiện các khuyết tật, hạt bẩn, lỗi mạch** trên bề mặt wafer để **đánh giá chất lượng** và **xác định yield**.

Khuyết tật có thể từ: hạt bẩn, lỗi lithography, lỗi etch, cạnh resist kém...

## Hai Loại Kiểm Tra

### 1. Bare Wafer Inspection

**Mục đích**: Kiểm tra wafer nguyên chất (trước khi fabrication) hoặc sau CMP.

**Phương Pháp**: **Laser + Particle Counter**
- Laser quét spiral qua wafer.
- Bụi/hạt bị phản xạ → photodiode phát hiện.
- Tính số lượng hạt (particles/cm²).

**Ứng Dụng**: Kiểm tra độ sạch wafer nguyên chất từ wafer supplier.

### 2. Patterned Wafer Inspection

**Mục đích**: Kiểm tra mạch/pattern được tạo trên wafer (quang khắc, etch, deposition...).

#### Phương Pháp 1: Wafer Prober (Kiểm Tra Điện)

**Cách**: Dùng **fine probes (tay đo cực mỏng)** tiếp xúc các pad **I/O của chip** → đo điện áp/dòng → so sánh với ideal waveform lưu sẵn.

**Kiểm tra**:
- Vth (threshold voltage).
- Leakage current.
- Tính chất gain.
- Tất cả điều kiện DC/AC.

**Ưu điểm**: Phát hiện lỗi điện (ngay cả pattern nhìn bằng mắt vẫn tốt nhưng điện bị hỏng).

**Nhược điểm**: Chậm, chỉ kiểm tra các pad cụ thể.

#### Phương Pháp 2: Optical Defect Inspection

**Cách**: **Laser quét wafer** → phát hiện phản xạ/tán xạ từ **hạt, edge roughness, pattern defect**.

**Quá Trình**:
1. Laser (thường 405nm-630nm) chiếu wafer.
2. Phản xạ/tán xạ từ hạt → photodiode detect.
3. So sánh với reference database → nếu sai lệch → báo alert.

**Throughput**: Cực nhanh (vài phút/wafer).

**Ứng Dụng**: Phát hiện **hạt, edge defect, pattern collapse, resist residue**.

**Thách Thức**: False positive (báo lỗi không cần thiết).

#### Phương Pháp 3: Review SEM (Scanning Electron Microscopy)

**Cách**: Dùng **electron beam** chiếu wafer ở độ phân giải cao.

**Mục đích**: Sau optical inspection phát hiện suspect area → dùng SEM để xác nhận chi tiết.

**Thông Tin**:
- Hình dạng pattern (CD, profile).
- Vị trí hạt.
- Mức độ damage.

**Nhược điểm**: Chậm, chỉ dùng cho sampling/review (không full wafer).

## Các Loại Defect Phát Hiện

| Loại Defect | Nguyên Nhân | Phương Pháp Detect |
|-----------|-----------|------------------|
| **Particles** | Từ thiết bị, khí | Optical (high sensitivity) |
| **Pattern CD Variation** | Lithography/etch drift | Optical (pattern matching) |
| **Line Collapse/Bridging** | Photolithography/etch kém | Optical + SEM |
| **Resist Residue** | Under-development | Optical |
| **Dishing/Erosion** | CMP uneven | Optical (topography) |
| **Metal Void** | Electroplating bong bóng | Optical (dark spot) |
| **Contamination (Cu, Fe)** | From process | Wafer prober (electrical) |

## Wafer Map (Bản Đồ Defect)

**Là gì**: Biểu đồ 2D thể hiện vị trí các defect trên wafer.

**Sử dụng**:
- Phân tích pattern khuyết tật (systemic/random).
- Xác định vùng wafer bị hỏng (edge vs. center).
- Truy ngược nguyên nhân (từ quá trình nào).

**Ví Dụ**:
- Defect tập trung ở cạnh → edge defect (từ spin coating, lithography alignment).
- Defect random → particle contamination.
- Defect stripes → scanner overlay error.

## Yield Calculation

```
Yield (%) = Số chip tốt / Tổng số chip × 100%
```

**Die per Wafer (DPW)**: Số chip có thể cắt từ 1 wafer (phụ thuộc kích thước die + scrap edge).

**Defect-Limited Yield**: Defect làm chip báng.

**Formula**: Yield ≈ exp(-n × Defect_Density), trong n = die area.

## Tầm Quan Trọng

Inspection quyết định:
- **Yield**: Phát hiện defect → loại chip báng → tối ưu yield.
- **Quality**: Đảm bảo chip tốt trước gửi khách hàng.
- **Process Control**: Track defect trend → điều chỉnh quy trình.
- **Cost**: Inspection chi phí có, nhưng tránh ship chip báng rẻ hơn.
