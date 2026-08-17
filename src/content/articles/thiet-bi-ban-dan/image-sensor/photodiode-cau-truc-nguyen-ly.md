---
title: 'Photodiode: Cấu Trúc, Nguyên Lý, và Ba Loại (フォトダイオード)'
sourceUrl: https://semi-journal.jp/basics/device/image-sensor/photodiode.html
category: thiet-bi-ban-dan
subcategory: image-sensor
order: 4
flagship: false
---

## Định Nghĩa

**Photodiode** (フォトダイオード, photodiode) là "**linh kiện bán dẫn chuyên dụng để chuyển đổi ánh sáng thành dòng điện (photocurrent)**".

Nó là **"mắt" thực sự** của image sensor – photodiode bắt photon và tạo ra tín hiệu điện tương ứng.

---

## Nguyên Lý Quang Điện Hiệu Ứng Bên Trong (Internal Photoelectric Effect)

### Quá Trình Chuyển Đổi: Photon → Electron-Hole → Dòng Điện

**Bước 1: Photon Chiếu Vào Silicon**

Khi photon có năng lượng E = hc/λ (h: hằng số Planck, c: tốc độ sáng, λ: bước sóng):
- **Nếu E ≥ Eg (band gap Si ≈ 1.1 eV)**: photon bị **hấp thụ** ở Si
- **Nếu E < Eg**: photon **xuyên qua** silicon (không tác dụng) → hồng ngoại (λ > 1100 nm)

**Ví Dụ Ánh Sáng Khả Kiến**:
- Đỏ (700 nm): E = 1.77 eV > 1.1 eV ✓ Được hấp thụ
- Xanh (550 nm): E = 2.26 eV > 1.1 eV ✓ Được hấp thụ
- Tím (400 nm): E = 3.1 eV > 1.1 eV ✓ Được hấp thụ
- Hồng ngoại (1200 nm): E = 1.03 eV < 1.1 eV ✗ Xuyên qua

**Bước 2: Tạo Cặp Electron-Hole**

Photon bị hấp thụ → cung cấp năng lượng cho electron trong dải hóa trị:
- Electron nhảy từ dải hóa trị (Ev) lên dải dẫn (Ec)
- Để lại **lỗ trống (hole)** trong dải hóa trị
- Kết quả: **cặp electron-hole mới** được tạo

**Công Thức Đơn Giản**:
$$\text{Photon} + e^{-}(\text{bound}) \rightarrow e^{-}(\text{free}) + h^{+}$$

**Bước 3: Dòng Điện (Photocurrent)**

Vùng cạn kiệt của photodiode (p-n junction) có **điện trường mạnh**:
- **Electron tự do** bị **hút tới n-region** (positive charge)
- **Hole tự do** bị **hút tới p-region** (negative charge)
- Hai loại carrier di chuyển **ngược hướng** → cùng **tạo dòng điện một chiều (photocurrent)**

**Dòng Quang (Photocurrent, IPh)**:
$$I_{Ph} = q \cdot \eta \cdot \frac{P}{hf}$$

(q: điện tích cơ bản, η: quantum efficiency, P: công suất sáng, h: hằng số Planck, f: tần số ánh sáng)

Hoặc đơn giản hơn:
$$I_{Ph} = \Phi \cdot q \cdot \eta$$

(Φ: số photon/second)

---

## Ba Loại Photodiode

### Loại 1: PN Photodiode (p-n Diode Đơn Giản)

**Cấu Trúc**:

```
     P-type
   (Photons) ↓
     ─────────
    │  p  n  │
    │────────│  ← Tiếp giáp p-n
     ─────────
     N-type
```

**Đặc Điểm**:
- **Đơn giản nhất**: chỉ cần 1 tiếp giáp p-n
- **Vùng Cạn Kiệt**: hẹp (độ dày W ≈ 0.2–1 μm)
- **Độ Nhạy**: trung bình (~30–50% QE)

**Ưu Điểm**:
- Thiết kế đơn giản
- Tốc độ đáp ứng cao (vùng cạn kiệt mỏng → carrier nhanh thoát)
- Chi phí rẻ

**Nhược Điểm**:
- Vùng cạn kiệt mỏng → phần lớn photon không bị hấp thụ
- Độ nhạy thấp so với PIN/APD
- Hiệu suất lượng tử Q.E. chỉ ~30–50%

**Công Thức Dòng Quang**:
$$I_{Ph} = R_\lambda \cdot P$$

(R_λ: responsivity, W/A)

**Dòng Tối (Dark Current, I₀)**:
$$I_0 = I_s (e^{V/nV_T} - 1)$$

(Is: saturation current, n: ideality factor, VT: thermal voltage)

### Loại 2: PIN Photodiode (p-Intrinsic-n)

**Cấu Trúc**:

```
     P-type
   (Photons) ↓
     ─────────
    │ p │ i │ n │
    │───────────│  ← Lớp i (intrinsic) ở giữa
     ─────────
     N-type
```

**Đặc Điểm**:
- **Lớp i (Intrinsic)**: lớp bán dẫn nội tại **không doping** xen giữa p và n
- **Vùng Cạn Kiệt**: **rất lớn** (độ dày W ≈ 10–100 μm)
- **Độ Nhạy**: cao (~50–70% QE)
- **Tốc Độ**: nhanh (vì vùng cạn kiệt rộng = điện trường mạnh)

**Nguyên Lý**:

Vùng intrinsic i:
- Không có dopant → **toàn bộ được "cạn kiệt"** bởi điện trường
- Photon bị hấp thụ ở đây → electron/hole **mình trong điện trường mạnh**
- Carrier **drift nhanh** qua vùng i → dòng cao

**Ưu Điểm**:
- **Độ Nhạy Cao**: vùng cạn kiệt rộng → phần lớn photon bị hấp thụ
- **Tốc Độ Đáp Ứng Nhanh**: carrier trong trường mạnh → tốc độ drift cao
- **Dòng Tối Thấp**: vì không có dopant ở i-region

**Nhược Điểm**:
- Thiết kế phức tạp hơn PN
- Capacitance cao (vùng cạn kiệt lớn)
- Chi phí cao hơn

**Công Thức Dòng Quang** (PIN tốt hơn PN):
$$I_{Ph} \approx q \cdot \Phi \cdot \eta \cdot (1 - e^{-\alpha W})$$

(α: absorption coefficient, W: độ dày i-region)

Khi W lớn → (1 − e⁻ᵅᵂ) → 1 → IPh cực đại

### Loại 3: APD (Avalanche Photodiode, 雪崩フォトダイオード)

**Cấu Trúc**:

```
     p+type
   (Photons) ↓
     ─────────
    │ p+ │ i(p-) │ i(n-) │ n+ │
    │────────────────────────│
     ─────────
     N-type

(High-field region ở p-/n- boundary)
```

**Đặc Điểm**:
- **Cấu trúc phức tạp**: p⁺-i(p-)-i(n-)-n⁺ (4 lớp)
- **Vùng Avalanche**: ở ranh giới p-/n- có **điện trường siêu mạnh** (>10⁵ V/cm)
- **Gain M = Avalanche Gain**: đạt 100–1000 lần
- **Độ Nhạy**: siêu cao (~chưa đo được, gain M nhân lên)

**Nguyên Lý Avalanche Gain**:

Ở vùng avalanche:
- Electron tự do bị **gia tốc cực mạnh** bởi điện trường cực cao
- Electron va chạm với **Si nguyên tử** → **phá vỡ liên kết** → giải phóng **thêm 1 electron mới**
- **Hiệu ứng dây chuyền (cascade)**: 1 electron → 2 → 4 → 8 ... → M electrons
- Gain = M = số lần nhân lên (tuỳ thuộc VR – reverse voltage)

**Ưu Điểm**:
- **Độ Nhạy Cực Cao**: M × QE (gain hàng trăm lần)
- **Bắt được photon yếu nhất**: dùng cho astronomy, medical imaging
- **Tốc độ nhanh**

**Nhược Điểm**:
- **Nhiễu Cao**: avalanche noise (random gain multiplier)
- **Thermal Runaway Risk**: nếu T tăng → gain tăng → nhiệt tăng → gain tăng thêm (vòng lặp nguy hiểm)
- **Cần Cấp Áp Cao**: VR phải >50V, thường >100V (không an toàn cho điện thoại)
- **Chi Phí Cực Cao**: $100–1000/chip
- **Tuổi Thọ Thấp**: được ước tính ~10⁶–10⁷ giờ (< LED thường)

**Công Thức Dòng**:
$$I_{out} = M \cdot I_{Ph}$$

(M: avalanche multiplication factor)

**Công Thức Gain**:
$$M = \frac{1}{1 - (V_R/V_{BD})^n}$$

(VR: reverse voltage, VBD: breakdown voltage, n ≈ 3–6)

---

## So Sánh Ba Loại Photodiode

| Tiêu Chí | PN | PIN | APD |
|---|---|---|---|
| **Độ Nhạy** | 30–50% | 50–70% | >90% (với gain) |
| **Vùng Cạn Kiệt** | 0.2–1 μm | 10–100 μm | 10–100 μm (+ avalanche) |
| **Dòng Tối** | Trung (μA) | Thấp (nA) | Cực Thấp (pA) dù có gain |
| **Tốc Độ** | Cực nhanh (100 MHz+) | Nhanh (10–100 MHz) | Nhanh (100 MHz) nhưng nhiễu cao |
| **Điện Áp Cấp** | 5–10 V | 10–50 V | **50–200 V** (nguy hiểm) |
| **Chi Phí** | Rẻ ($1–5) | Vừa ($5–20) | Đắt ($100–1000) |
| **Ứng Dụng** | Image sensor | Image sensor cao cấp, LIDAR | Astronomy, Medical, LIDAR độ cao |
| **Nhiễu (NEP)** | Cao | Trung | Cao (avalanche noise) |

---

## Ứng Dụng Image Sensor

### Smartphone Camera: PIN Photodiode

**Lý Do**:
- Cân bằng giữa độ nhạy (PIN cao) + an toàn (áp không cao)
- Độ tiêu thụ công suất thấp
- Tốc độ đáp ứng nhanh (video 4K 60fps)
- Chi phí hợp lý

**Kích Thước Pixel**: 0.5–1.4 μm  
**Mỗi Pixel**: 1 PIN photodiode + 1 storage node + 1 amplifier

### Máy Ảnh DSLR: PN + PIN

- **Main Sensor**: PN (tốc độ cao, xử lý dễ)
- **Phase Detect AF Sensor**: có thể dùng PIN (cần độ nhạy cao)

### LIDAR Công Nghiệp / Autonomous Vehicles: APD

**Lý Do**:
- Cần phát hiện photon **yếu** trở về từ vật cách xa
- Cần gain cao (APD cung cấp M = 10–1000)
- Điện áp cao không vấn đề (công suất cấp lớn)
- Tiêu thụ dòng cao không vấn đề (laser pulse ngắn)

**Ứng Dụng Cụ Thể**:
- LiDAR ToF (Time-of-Flight): dùng APD 32–64 channels
- Laser rangefinding (đo khoảng cách)
- Photon counting (đếm individual photon)

---

## Sự Tiến Triển Hiện Đại

### 1. **Pixel Lớn Hơn vs Nhỏ Hơn: Tradeoff**

- **Pixel Lớn (1.4 μm)**: photodiode lớn → độ nhạy cao (bắt sáng nhiều) → vào smartphone cho **chất lượng ảnh tuyệt vời**
- **Pixel Nhỏ (0.7 μm)**: photodiode nhỏ → độ phân giải cao (108 MP) → vào smartphone **high-res**

### 2. **Stacked Photodiode (3D)**

- Xếp chồng **4 photodiode nhỏ** trong khoảng trống 1 pixel
- Chế độ Night: cộng 4 photodiode → bắt 4× sáng
- Chế độ Normal: dùng riêng → tách biệt color channel

### 3. **Quantum Dots Photodiode**

- Thay Si bằng **quantum dot** (nanocrystal, kích thước ~10 nm)
- Eg có thể điều chỉnh → bắt được UV/NIR
- Tương lai: camera siêu nhạy cảm (chưa thương mại hóa)

---

## Kết Luận

Photodiode là **"chìa khóa"** của image sensor:
- **PN**: đơn giản, tốc độ (CCD thường dùng PN hoặc PIN chất lượng cao)
- **PIN**: cân bằng hoàn hảo cho smartphone (độ nhạy + tốc độ + an toàn)
- **APD**: siêu nhạy cảm cho ứng dụng đặc biệt (LIDAR, astronomy)

Ngành bán dẫn liên tục cải tiến **quantum efficiency** và giảm **dark current** để đạt hình ảnh sáng sủa hơn, nhất là trong điều kiện tối.
