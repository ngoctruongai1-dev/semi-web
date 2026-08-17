---
title: CMOS Chiếu Sáng Mặt Sau (Back-Illuminated CMOS Image Sensor, BI-CIS, 裏面照射型CMOS)
sourceUrl: https://semi-journal.jp/basics/device/image-sensor/bi-cis.html
category: thiet-bi-ban-dan
subcategory: image-sensor
order: 3
flagship: false
---

## Định Nghĩa

**BI-CIS (Back-Illuminated CMOS Image Sensor)** hay **Backside-Illuminated CMOS** là "**cảm biến CMOS có cấu trúc **lật ngược** so với thiết kế chuẩn – ánh sáng chiếu vào **mặt sau (back side)** của silicon thay vì mặt trước (front side)**".

Nó là **"công nghệ vàng"** trong smartphone camera năm nay (2020–2025), giải quyết vấn đề độ nhạy thấp của CMOS.

---

## Hai Loại Cấu Trúc: FI vs BI

### FI-CIS (Front-Illuminated, 表面照射)

**Cấu Trúc Truyền Thống**:

```
Micro Lens
    ↓
Color Filter
    ↓
Photodiode
    ↓
[Wiring Layer 1 (kim loại M1)]
[Wiring Layer 2 (kim loại M2)]
    ...
[Bulk Silicon, N-Well, P-Substrate]
```

**Hoạt Động**:
- Ánh sáng **từ trên xuống** qua photodiode trước
- Phải xuyên qua các **lớp dây dẫn kim loại** (M1, M2, M3 ...) ở giữa
- Kim loại **phản xạ & tán xạ ánh sáng** → không phải tất cả photon tới được photodiode

**Vấn Đề**:
- **Độ Nhạy Thấp**: photodiode chỉ bắt ~40–50% photon (bị che bởi dây kim loại)
- **Hiệu Suất Lượng Tử (QE)** chỉ 50–70%
- **Chiếm không gian**: dây dẫn chiếm ~60% diện tích pixel → photodiode bé → bắt sáng ít

### BI-CIS (Back-Illuminated, 裏面照射)

**Cấu Trúc Lật Ngược**:

```
Micro Lens
    ↓
Color Filter
    ↓
[Thinned Silicon (mỏng ~1–3 μm)]  ← Mặt sau (lật ngược)
    ↓
Photodiode (tiếp xúc trực tiếp với ánh sáng mặt sau!)
    ↓
[Wiring Layer 1, 2, 3 ...]
    ↓
[Bulk Silicon, N-Well]
```

**Hoạt Động**:
- Sau khi chế tạo, **lật chip ngược lại**
- **Mài silicon mặt sau** thành lớp siêu mỏng (1–3 μm)
- Ánh sáng **từ mặt sau đi vào trực tiếp** → photodiode
- **Không phải xuyên qua dây dẫn kim loại** → toàn bộ photon tới photodiode

**Ưu Điểm**:
- **Độ Nhạy Cao**: ~80–90% QE (gần bằng CCD)
- **Lớp Silicon Mỏng**: các photon hầu hết được hấp thụ trong lớp mỏng (xấp xỉ làm dày diffusion length của carrier)
- **Pixel Lớn Hơn**: không bị dây dẫn che → photodiode có thể lớn hơn → bắt sáng hiệu quả

---

## Quy Trình Sản Xuất BI-CIS

### Bước 1–5: Chế Tạo Thông Thường (Trước Flip)

1. **Chuẩn Bị Wafer**: Si p-type substrate
2. **Tạo Wiring**: M1, M2, M3 (kim loại dẫn)
3. **Tạo Photodiode**: tiếp giáp p-n ở tầng trên (gần M1)
4. **Chuẩn Bị Wafer Thứ 2**: gắn flip-chip frame/adhesive
5. **Bonding**: keo hai wafer lại (logic wafer + Si substrate)

### Bước 6: Lật Ngược (Flip)

- Lật wafer ngược lại, mặt photodiode hướng lên
- Gỡ wafer cũ (logic substrate) đi

### Bước 7: Mài Silicon (Grinding & Polishing)

- **Mài mỏng** mặt sau silicon từ ~700 μm xuống **1–3 μm** (ultra-precision)
- Phải cẩn thận để không làm hỏng photodiode ở lớp dưới
- **Đây là bước khó nhất** và đắt nhất!

**Vấn Đề**: 
- Sai sót ~0.5 μm có thể làm hỏng chip
- Cần máy mài CMP (Chemical-Mechanical Polishing) chuyên dụng

### Bước 8: Hóa Xử Lý Mặt Sau

- **Oxide tự nhiên** trên mặt sau Si có chứa **dangling bonds** (Si-Si bond bị đứt)
- Các dangling bonds này = **trap (bẫy điện tử)** → nơi sinh nhiễu
- Xử lý hóa: tạo lớp Oxide (SiO₂) hoặc Nitride (Si₃N₄) để "che" dangling bonds
- Nhưng vẫn không thể 100% loại bỏ → vẫn có thêm nhiễu

### Bước 9: Lắp Bộ Lọc Màu & Micro Lens

- Gắn color filter array (Bayer pattern)
- Gắn micro lens mảng
- (Giống như FI-CIS)

### Bước 10: ADC & Packaging

- Thêm ADC, logic xử lý
- Đóng gói (BGA, flip-chip, ...)

---

## So Sánh Tính Chất FI vs BI

| Tính Chất | FI-CIS | BI-CIS |
|---|---|---|
| **Độ Nhạy (QE)** | 50–70% | **80–90%** |
| **Hiệu Suất** | Trung bình | **Cao** (~1.5–2× FI) |
| **Nhiễu (Read Noise)** | 10–15 e⁻ | **12–20 e⁻** (cao hơn do dangling bond) |
| **SNR** | ~45 dB | ~44 dB (giảm 1dB vì nhiễu cao) |
| **Chi Phí** | $15–50 | **$50–150** (đắt 3–4×) |
| **Quy Trình** | Chuẩn CMOS | Phức tạp (flip + mài + xử lý) |
| **Độ Phẳng Pixel** | Tốt | Có thể bị ảnh hưởng (do mài) |
| **Pixel Size** | 0.7–1.4 μm | **0.5–1.0 μm** (nhỏ hơn, giảm điều chế) |

---

## Ưu Điểm BI-CIS

### 1. **Độ Nhạy Vượt Trội** (Chính Yếu)

- Photodiode nhận hầu hết photon (~90%)
- Hiệu quả cao → chất lượng ảnh sáng sủa tuyệt vời
- **Số Photon Nhiều** → SNR cao (tín hiệu lớn làm cho nhiễu tương đối nhỏ)

**Ứng Dụng Thực**:
- Chụp ảnh trong phòng tối (night mode, low-light)
- Video streaming cần tốc độ mà không quá tối
- Astronomy (với external lens tốt)

### 2. **Hiệu Suất Lượng Tử Cao**

- Lớp silicon mỏng → phần lớn photon bị hấp thụ trong diffusion length → electron thoát ra
- Lớp silicon dày → photon "mất" ở sâu trong silicon (không sinh cặp electron-hole hữu ích)

### 3. **Pixel Có Thể Lớn Hơn**

- Không bị dây dẫn che → photodiode **lớn hơn** → bắt sáng nhiều hơn
- Lợi: hiệu suất cao
- Hại: pixel lớn → giảm độ phân giải (MP thấp)

---

## Nhược Điểm BI-CIS

### 1. **Nhiễu Cao Hơn FI** (Đáng Lưu Ý)

**Nguyên Nhân**: Giao diện Si/SiO₂ ở mặt sau có **dangling bonds**:
- Dangling bonds = Si-Si bond chưa "gắn" nguyên tử
- Những chỗ này = **trap** → electron/hole rơi vào → phát heat (nhiễu tạp âm)
- Nhiều giao diện → nhiều trap → **nhiễu cao hơn**

**So Sánh**:
- FI-CIS: 1 giao diện Si/SiO₂ (dưới photodiode)
- BI-CIS: **2 giao diện** (mặt trước + mặt sau) → nhiễu nhân lên

**Hậu Quả**:
- SNR giảm ~1–2 dB so với FI-CIS chất lượng tương đương
- Nhưng vì độ nhạy cao hơn → tổng thể vẫn tốt (photon nhiều bù cho nhiễu)

### 2. **Chi Phí Cao**

- Quy trình phức tạp (flip, mài precision, xử lý mặt sau)
- Thiết bị đắt (precision grinder, CMP machine)
- **Giá chip: $50–150** (so với FI $15–50)

### 3. **Độ Phẳng & Uniformity Bị Thách Thức**

- Mài silicon mặt sau phải cực kỳ chính xác
- Sai lệch → photodiode sâu nông không đều → độ nhạy không đều (banding artifacts)

### 4. **Dòng Tối (Dark Current) Cao**

- Lớp mặt sau có nhiều defect → sinh carrier nhiều
- Dark current tăng → video chất lượng kém (ở ISO cao)

---

## Kinh Tế & Thị Trường

### Được Dùng Ở Đâu?

1. **Smartphone Cao Cấp** (iPhone, Galaxy, Pixel):
   - Main camera: 48–108 MP BI-CIS
   - Ultra-wide: 12 MP BI-CIS
   - Telephoto: 12 MP BI-CIS (nếu có)

2. **Máy Ảnh Không Gương**:
   - Full-frame mirrorless (Sony A7III, ...) dùng BI-CIS

3. **Laptop/Tablet**:
   - Front camera ở độ phân giải thấp (5 MP) có thể dùng BI-CIS

### Không Dùng / Dùng Ít

1. **Smartphone Ngân Sách**: FI-CIS rẻ hơn, chất lượng "chấp nhận được"
2. **Webcam Máy Tính**: chỉ cần VGA ~ 2MP, FI-CIS đủ
3. **Kamera Công Nghiệp**: cần độ phân giải chuẩn (FI hoặc CCD)

---

## Xu Hướng Tương Lai

### 1. **Stacking (3D)**

- Xếp chồng **Photodiode Layer + Logic Layer** lên nhau
- Giảm crosstalk, cải thiện SNR
- Ví dụ: Sony Exmor RS có "stacked architecture"

### 2. **Octapixel / Pixel Binning**

- Mỗi pixel lớn có 4 photodiode nhỏ bên trong
- Mode "Night": cộng 4 photodiode → bắt sáng gấp 4× (giảm độ phân giải nhưng tăng độ nhạy)
- Mode "Normal": dùng tách 4 photodiode → giữ độ phân giải

### 3. **Multi-Spectral Sensors**

- Thêm **NIR (Near-Infrared)** phía sau (cho focus autofocus nhanh)
- Thêm **Ultra-Violet** ở mặt trước (cho dermatology)

### 4. **Neuromorphic Sensors (Xa Hơn)**

- Thay vì quét toàn bộ frame, chỉ **ghi pixel thay đổi** (event-based)
- Giảm lưu lượng dữ liệu 100–1000×
- Ứng dụng: high-speed tracking, low-power IoT

---

## Kết Luận

**BI-CIS là "game-changer"** cho smartphone camera:
- Độ nhạy cao → ảnh đẹp ở điều kiện tối (night mode tuyệt vời)
- Chi phí cao → chỉ có trong premium (flagship)
- Nhiễu cao hơn → nhưng không đáng lo lắm (tín hiệu lớn bù lại)

Nó chứng minh lại: **chi phí cao + quy trình phức tạp** có thể mang lại **hiệu suất vượt trội** – chính là công thức thành công trong bán dẫn hiệu năng cao.
