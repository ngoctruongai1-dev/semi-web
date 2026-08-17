---
title: Hiện Tượng Phân Lập Và Hệ Số Phân Lập (分配現象と分配係数)
sourceUrl: https://semi-journal.jp/basics/si-chem/segregation.html
category: khoa-hoc-silicon
order: 5
flagship: false
---

## Định Nghĩa Hiện Tượng Phân Lập

**Phân Lập (Segregation, 分配現象)** là hiện tượng **nồng độ tạp chất khác nhau** giữa **pha rắn (tinh thể được tạo thành)** và **pha lỏng (nóng chảy còn lại)** trong quá trình kết tinh.

### Ví Dụ Cụ Thể

Khi tạo đơn tinh thể Si bằng phương pháp CZ:
- Polysilicon được nóng chảy
- Khi Si rắn đầu tiên kết tinh trên hạt giống, nó có **nồng độ tạp chất A**
- Nóng chảy còn lại vẫn có **nồng độ tạp chất B** (khác với A)
- **B ≠ A** vì các tạp chất có "sở thích" khác nhau giữa rắn vs lỏng

## Hệ Số Phân Lập Cân Bằng (Equilibrium Segregation Coefficient)

### Định Nghĩa

**Hệ số phân lập cân bằng** (平衡分配係数, k₀ hay ke) được định nghĩa:

$$k_0 = \frac{[C]_{\text{rắn}}}{[C]_{\text{lỏng}}}$$

Trong đó:
- **[C]_rắn**: Nồng độ tạp chất trong pha rắn (tinh thể) – tính bằng atom/cm³
- **[C]_lỏng**: Nồng độ tạp chất trong pha lỏng (nóng chảy) – tính bằng atom/cm³
- **k₀**: Hệ số phân lập, là một số không có đơn vị

### Giải Thích

- **k₀ < 1**: Tạp chất **có xu hướng ở lại trong lỏng** → nồng độ trong rắn thấp hơn
- **k₀ > 1**: Tạp chất **ưa thích tinh thể** → nồng độ trong rắn cao hơn
- **k₀ = 1**: Tạp chất **phân bổ đều** giữa rắn vs lỏng

### Tính Chất "Cân Bằng"

k₀ là hệ số **cân bằng nhiệt** (thermal equilibrium) – chỉ áp dụng khi **tốc độ kết tinh rất chậm** (gần như chắc chắn đạt cân bằng tại giao diện rắn-lỏng). Nếu tốc độ kết tinh nhanh, hệ số **thực tế (k_eff)** sẽ khác.

## Công Thức Scheil (Scheil's Equation)

### Công Thức

Khi kết tinh **dần dần** từ pha lỏng, nồng độ tạp chất trong pha rắn tại mỗi thời điểm:

$$[C]_{\text{S}} = k_0 [C]_0 (1 - g)^{k_0 - 1}$$

Trong đó:
- **[C]_S**: Nồng độ tạp chất trong rắn tại mỗi bước
- **[C]_0**: Nồng độ tạp chất ban đầu (trong lỏng chưa kết tinh)
- **k₀**: Hệ số phân lập cân bằng
- **g**: Phân số đã rắn hóa (từ 0 tới 1)

### Ý Nghĩa

- Khi g = 0 (bắt đầu kết tinh): [C]_S = k₀[C]_0
- Khi g → 1 (gần hết kết tinh): [C]_S phụ thuộc vào (k₀ - 1)
- **Nếu k₀ < 1**: [C]_S từ từ tăng khi g tăng (tạp chất dồn về phía cuối)
- **Nếu k₀ > 1**: [C]_S từ từ giảm (tạp chất tiêu hao)

### Ứng Dụng Thực Tế

Công thức Scheil giúp dự đoán **phân bô nồng độ tạp chất** trong thỏi ingot:
- **Đầu thỏi (head)**: Nồng độ thấp (vì kết tinh trước, tạp chất chưa dồn)
- **Giữa thỏi (center)**: Nồng độ trung bình
- **Cuối thỏi (tail)**: Nồng độ cao (vì kết tinh sau, tạp chất đã dồn)

Điều này gây ra **độ không đều (inhomogeneity)** trong thỏi → cần xử lý nhiệt (annealing) để san bằng

## Bảng k₀ Của Một Số Tạp Chất Trong Silicon

| Tạp Chất | k₀ | Loại | Ứng Dụng |
|---|---|---|---|
| **Boron (B)** | 0.8 | Acceptor | p-type dopant chính |
| **Aluminum (Al)** | 0.002 | Acceptor | Hiếm |
| **Gallium (Ga)** | 0.008 | Acceptor | Hiếm |
| **Phosphorus (P)** | 0.35 | Donor | n-type dopant chính |
| **Arsenic (As)** | 0.3 | Donor | Dopant n, ít volatile |
| **Antimony (Sb)** | 0.023 | Donor | Hiếm |
| **Oxygen (O)** | 0.25 ~ 1.25 | Interstitial | Từ crucible (CZ) |
| **Carbon (C)** | 0.07 | Interstitial | Từ graphite |
| **Copper (Cu)** | 4×10⁻⁴ | Transition metal | **Rất bị loại** |
| **Iron (Fe)** | 8×10⁻⁶ | Transition metal | Độc hại |
| **Silver (Ag)** | 10⁻⁶ | Transition metal | Rất độc hại |

### Ghi Chú

- **B, P**: k₀ gần 1 → dễ dùng làm dopant, phân bổ tương đối đều
- **O, C**: k₀ khác nhau → phân bổ không đều, cần kiểm soát
- **Cu, Fe, Ag**: k₀ cực nhỏ → bị **loại ra khỏi tinh thể** → nằm lại trong lỏng
  - Ưu điểm: Tinh thể sạch kim loại
  - Nhược điểm: Tạp chất tích tụ trong lỏng → khó xử lý

## Ảnh Hưởng Tới Thiết Bị Bán Dẫn

### Dopant (Boron, Phosphorus)

Vì k₀ ≠ 1, nồng độ dopant **không đều** trong thỏi:
- **Đầu**: Nồng độ thấp → điện trở cao
- **Cuối**: Nồng độ cao → điện trở thấp

**Giải pháp**: Xử lý nhiệt (annealing) + đo lường điều chỉnh để san bằng

### Kim Loại Nặng (Cu, Fe)

- k₀ cực nhỏ → kim loại **bị loại ra lỏng**
- Nhưng **một lượng rất nhỏ** vẫn bị tiêm vào tinh thể khi kết tinh
- Kim loại này **làm hỏng lifetime** → giảm hiệu suất thiết bị
- **Phòng chống**: Kiểm soát lỏng, sạch crucible, xử lý surface

## Hệ Số Phân Lập Thực Tế (k_eff)

### Khác Biệt Với k₀

Công thức Scheil giả định **cân bằng hoàn toàn** tại giao diện rắn-lỏng. Nhưng trong thực tế:
- Tốc độ kết tinh **không phải zero** → có độ trễ trong quá trình cân bằng
- Sự phân lập không hoàn toàn → **k_eff > k₀** (hoặc < k₀)

### Tác Động Của Tốc Độ Kết Tinh

- **Kết tinh chậm** (v → 0): k_eff → k₀
- **Kết tinh nhanh** (v lớn): k_eff → 1 (phân lập giảm, tạp chất phân bổ gần như đều)

Điều này quan trọng trong **rapid quenching, CVD epitaxy** nơi tốc độ rất nhanh.

## Ứng Dụng Thực Tế Trong Sản Xuất

### CZ Method (Pulling Single Crystal)

Khi kéo thỏi Si bằng CZ:
- Nồng độ dopant (B hoặc P) **không đều từ đầu đến cuối** do phân lập
- Phải **chia thỏi thành các phần** với độ không đều chấp nhận được
- Hoặc **kiểm soát tốc độ kéo** để hạn chế phân lập

### Wafer Slicing

- Sau khi cắt wafer, các wafer từ **phần đầu** có điện trở cao
- Các wafer từ **phần cuối** có điện trở thấp
- Cần **phân loại (grading)** và xử lý riêng

### Dopant Diffusion

Khi khuếch tán dopant vào Si (diffusion process):
- Nồng độ surface và bulk khác nhau
- Phải tính Scheil để dự đoán profile nồng độ

## Kết Luận

Hiện tượng phân lập là một **quá trình tự nhiên** xảy ra trong mọi pha kết tinh. Hiểu rõ k₀ và công thức Scheil giúp:
- **Dự đoán phân bổ tạp chất** trong ingot
- **Kiểm soát chất lượng** wafer
- **Tối ưu hóa quy trình** sản xuất
- **Giải quyết vấn đề** độ không đều trong thiết bị

Vì lý do này, **pha lập lịch sử biến động dopant** là một trong những kỹ thuật quan trọng nhất trong kiểm soát chất lượng wafer silicon.
