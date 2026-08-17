---
title: Developer – Quá Trình Hiện Ảnh (Development Process)
sourceUrl: https://semi-journal.jp/basics/process/develop.html
category: quy-trinh-san-xuat
order: 9
flagship: false
---

## Giới Thiệu

Developer (quá trình hiện ảnh, 現像 – genzo) là bước **hòa tan photoresist đã phơi sáng** để tạo ra hình dạng mạch trên wafer. Sau bước phơi sáng, resist ở những vùng được kích hoạt sáng (positive resist) hoặc không được kích hoạt (negative resist) có khả năng hòa tan khác nhau. Developer sử dụng dung dịch hóa học để loại bỏ các phần resist không cần thiết, "phơi bày" các vùng silicon/oxide chuẩn bị cho bước etch tiếp theo.

## Nguyên Lý Cơ Bản

### Positive Resist (Resist Dương)

**Cơ Chế Hóa Học**:
1. **Sau phơi sáng UV**: 
   - PAC (Photo-Active Compound) bị photolyze → phóng hành acid mạnh.
   - Acid tấn công novolac resin (binder) → làm phân hủy/làm mềm resin.
   - Vùng phơi sáng trở nên **"soluble"** (hòa tan) trong dung dịch kiềm.

2. **Phần không phơi sáng**: 
   - Vẫn còn resin nguyên vẹn, không bị acid tấn công.
   - Vẫn **"insoluble"** (không hòa tan) trong kiềm.

**Developer Thành Phần**:
- **Kiềm** (alkaline): thường **TMAH (Tetramethylammonium Hydroxide, 2.38%)** hoặc **KOH**.
- **pH cao**: ~11-13 để hòa tan resin được acid làm phân hủy.

### Negative Resist (Resist Âm)

**Cơ Chế Hóa Học** (ngược lại):
1. **Sau phơi sáng UV**:
   - Photoinitiator bị kích hoạt → khởi tạo **cross-linking (liên kết ngang)**.
   - Polymer trở nên **siêu cứng, crosslinked** → **"insoluble"** trong dung dịch hữu cơ.

2. **Phần không phơi sáng**:
   - Vẫn còn polymer lỏng (chưa crosslink).
   - **"Soluble"** trong dung dịch hữu cơ.

**Developer Thành Phần**:
- **Dung dịch hữu cơ**: thường **xylene, tetrachloroethylene, hoặc các hợp chất hữu cơ khác**.
- Độc tính cao hơn positive resist developer.

## Quá Trình Development Chi Tiết

### Quy Trình 5 Bước (Single-Wafer Developer)

**Bước 1: Nhỏ Developer (Developer Dispense)**

- Wafer được đặt trên bàn quay, bắt đầu quay ở tốc độ **thấp** (~500-800 RPM).
- **Phun developer** lên bề mặt wafer từ các nozzle phun.
- Developer phân tán đều trên wafer nhờ lực ly tâm nhẹ.

**Thời gian**: ~5-10 giây.

### Bước 2: Hòa Tan Resist (Resist Dissolution)

- Wafer quay **từ từ** (~500 RPM) hoặc **đứng yên** (0 RPM).
- Developer **tương tác hóa học** với resist, từ từ hòa tan phần resist nhạy cảm.
- Quá trình này phụ thuộc:
  - **Nồng độ developer**: Developer đặc → hòa tan nhanh.
  - **Nhiệt độ developer**: Nóng → hòa tan nhanh.
  - **Thời gian ngâm**: Lâu → hòa tan kỹ.
- **Vùng không phơi sáng (positive resist)**: Hòa tan nhanh → "pattern" xuất hiện.
- **Vùng phơi sáng (positive resist)**: Hòa tan chậm → giữ lại.

**Thời gian**: 30-90 giây (tùy điều kiện).

### Bước 3: Loại Bỏ Developer Cũ (Developer Removal)

- **Quay tốc độ cao** (~1000-2000 RPM).
- Lực ly tâm loại bỏ developer còn thừa khỏi wafer.
- Nếu không loại bỏ kỹ, developer cũ sẽ tiếp tục hòa tan resist → pattern không chính xác.

**Thời gian**: 5-10 giây.

### Bước 4: Rửa bằng Nước Cất (Rinse Application)

- **Phun nước cất (DI water)** lên wafer.
- Nước cất **trung hòa developer** (kiềm → trung tính).
- Loại bỏ các phân tử kiềm còn lại, tránh tiếp tục hòa tan resist.
- **Quan trọng**: Nước cất phải được xịt **từ từ, đều** để không "shock" cấu trúc resist (nếu xịt quá mạnh có thể làm sụp đổ pattern siêu mỏng).

**Thời gian**: 5-10 giây.

### Bước 5: Sấy Khô (Spin Dry)

- **Quay tốc độ cao** (~3000-5000 RPM).
- Lực ly tâm loại bỏ nước → wafer khô.
- **Tầm quan trọng**: Nếu không sấy kỹ, nước sẽ để lại **"water mark"** (vết chứng) → defect → yield giảm.
- Một số thiết bị dùng **IPA (isopropanol)** ở bước cuối để tránh water mark (vì IPA bay hơi nhanh hơn nước).

**Thời gian**: 10-20 giây.

## Các Loại Developer

### 1. TMAH (Tetramethylammonium Hydroxide) – Positive Resist

**Thành Phần**:
- **TMAH 2.38%** trong nước cất.
- Nồng độ này được chuẩn hóa (standard) trong công nghiệp.

**Ưu Điểm**:
- **Tốc độ hòa tan kiểm soát tốt**: Không quá nhanh (tránh over-develop), không quá chậm (quá lâu).
- **Chlorine-free**: Không chứa chlorine → an toàn hơn cho thiết bị/môi trường.
- **Rẻ**: So với các developer khác.

**Nhược Điểm**:
- Độc tính cao: nhạy cảm + môi trường.

### 2. KOH (Potassium Hydroxide) – Cũ hơn

**Đặc Điểm**:
- Kiềm mạnh, hòa tan nhanh.
- **Ít dùng** ngày nay (thay thế bằng TMAH).

### 3. Các Developer Hữu Cơ – Negative Resist

**Loại**:
- **Xylene, tetrachloroethylene, d-limonene** (từ vỏ cam, an toàn hơn).

**Đặc Điểm**:
- Hòa tan polymer crosslinked của negative resist.
- Độc tính cao → cần kiểm soát an toàn lao động.

### 4. Developer Chuyên Biệt

**Type**:
- **Aqueous developer**: Nước + kiềm (dùng cho positive).
- **Non-aqueous developer**: Dung dịch hữu cơ (dùng cho negative).
- **Surfactant-based**: Chứa chất hoạt động bề mặt để cải thiện hòa tan + rửa.

## Các Vấn Đề Thường Gặp

### 1. Under-Development (Phát Triển Không Đủ)

**Vấn Đề**: 
- Developer không xâm nhập sâu → resist ở sâu không được loại bỏ hết → pattern bị "dầy" (wider than intended).

**Nguyên Nhân**:
- Nồng độ developer quá thấp.
- Thời gian phát triển quá ngắn.
- Nhiệt độ developer quá lạnh.

**Hậu Quả**:
- Mạch rộng hơn dự tính → điện trở giảm → hiệu năng thay đổi.

**Giải Pháp**: Tăng thời gian phát triển, tăng nồng độ, tăng nhiệt độ.

### 2. Over-Development (Phát Triển Quá Mức)

**Vấn Đề**:
- Developer tấn công quá sâu → hòa tan cả phần resist không bị phơi sáng → pattern bị "nhỏ" (narrower).

**Nguyên Nhân**:
- Nồng độ developer quá cao.
- Thời gian quá lâu.
- Nhiệt độ quá nóng.

**Hậu Quả**:
- Mạch nhỏ hơn dự tính → điện trở tăng → hiệu năng thay đổi.
- Cạnh mạch bị "gợn sóng" (wavy) → sai lệch hình học → yield giảm.

**Giải Pháp**: Giảm thời gian phát triển, giảm nồng độ, giảm nhiệt độ.

### 3. Sagging (Sụp Đổ Pattern)

**Vấn Đề**:
- Các cấu trúc siêu mỏng/cao (aspect ratio lớn) bị **sụp đổ** khi develop.
- Nguyên nhân: Developer tấn công đáy → cấu trúc mất hỗ trợ → bị gục xuống.

**Hậu Quả**:
- Mạch hoàn toàn hỏng.

**Giải Pháp**: 
- Tối ưu hóa điều kiện develop (giảm thời gian/nồng độ).
- Dùng resist công thức mới (harder formulation).

### 4. Resist Residue (Dư Lượng Resist)

**Vấn Đề**:
- Phần resist không được loại bỏ hoàn toàn → còn sót lại ở đáy vùng bị etch (thường gọi "scum").

**Nguyên Nhân**:
- Under-development.
- Developer bị "dùng hết" (saturated resist dissolved).

**Hậu Quả**:
- Bước etch tiếp theo không thể xuyên qua → pattern gặp lỗi.

**Giải Pháp**: Tối ưu hóa develop, hoặc dùng bước **post-develop cure (nung sau develop)** để loại bỏ dư lượng.

## Thiết Bị Developer

### Loại 1: Batch Developer

- Xử lý **nhiều wafer cùng lúc** trong bồn chứa developer.
- **Ưu điểm**: Hiệu suất cao (sản lượng).
- **Nhược điểm**: Kiểm soát kém, develop không đều giữa các wafer.

### Loại 2: Single-Wafer Developer

- Xử lý **từng wafer riêng lẻ** (như mô tả trên).
- **Ưu điểm**: Kiểm soát chính xác từng wafer, tái tạo điều kiện tốt.
- **Nhược điểm**: Hiệu suất thấp (chậm).
- **Phổ biến**: Ngày nay sử dụng rộng rãi.

### Cấu Trúc Single-Wafer Developer

1. **Developer tank**: Chứa developer, kiểm soát nhiệt độ ±1°C.
2. **Spray nozzles**: Phun developer/nước đều trên wafer.
3. **Spindle (bàn quay)**: Quay wafer với tốc độ kiểm soát.
4. **Drain (xương rổ)**: Thoát developer thừa.
5. **Control system**: PLC kiểm soát thời gian, nồng độ, nhiệt độ.

## Quy Trình Tối Ưu Hóa

Để đạt pattern chính xác:

1. **Hiệu chỉnh thời gian develop**: Bắt đầu từ giá trị nominal, điều chỉnh ±10 giây để tìm optimal.
2. **Kiểm tra nồng độ developer**: Đo nồng độ (refractometer hoặc titration), duy trì TMAH 2.38% ±0.05%.
3. **Kiểm soát nhiệt độ**: Duy trì 23±0.5°C (standard).
4. **Kiểm tra pattern SEM**: Sau mỗi điều chỉnh, dùng Scanning Electron Microscope để quan sát cấu trúc.
5. **Đo Critical Dimension (CD)**: Đo độ rộng mạch, so sánh với spec.

## Tầm Quan Trọng

Development quyết định:
- **Độ chính xác hình dạng mạch (CD, LER)**: Directly control pattern size.
- **Yield**: Under/over-develop → defect → chip báng.
- **Tính chất điện**: Mạch không chính xác → Vth, tính chất khác thay đổi.

## Chuỗi: Exposure → Development → Etch

Development là **bước nối tiếp** giữa phơi sáng (exposure) và khắc (etch):
- **Exposure**: Phơi sáng resist → PAC hóa học thay đổi.
- **Development**: Hòa tan resist → phơi bày oxide/silicon.
- **Etch**: Dùng RIE/wet-etch → loại bỏ oxide/silicon → tạo mạch 3D.
