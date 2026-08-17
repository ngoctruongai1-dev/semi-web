---
title: 'Multi-Patterning: LELE, SADP, SAQP (Multi-Patterning Technologies)'
sourceUrl: https://semi-journal.jp/basics/process/multi-patterning.html
category: quy-trinh-san-xuat
order: 13
flagship: false
---

## Giới Thiệu

Multi-patterning (đa họa đồ) là **tập hợp các kỹ thuật quang khắc** cho phép **tạo các mạch nhỏ hơn giới hạn diffraction của photolithography đơn**. Thay vì phơi sáng một lần (single exposure), multi-patterning **phơi sáng/khắc nhiều lần** để đạt mạch tối thiểu nhỏ hơn.

**Động lực**: Khi ArF (193nm) + Immersion đã cạn dần giới hạn (độ phân giải ~45nm), để tiếp tục sử dụng ArF mà không chuyển EUV, ngành đã phát triển multi-patterning (từ **22nm node** trở lại).

## Ba Phương Pháp Chính

### 1. LELE (Litho-Etch-Litho-Etch)

#### Định Nghĩa

"Lặp lại phơi sáng và khắc hai lần" để tạo mạch với pitch (khoảng cách giữa hai đường) **gấp đôi độ tốt** so với single exposure.

#### Quy Trình

**Vòng 1 (Exposure & Etch)**:
1. Phơi sáng lần đầu → pattern A trên resist.
2. Development loại bỏ resist → phơi bày substrate (silicon/oxide).
3. Etch dùng resist A làm mask → tạo vị trí gọt 1 (trench 1).
4. Tẩy resist A.

**Vòng 2 (Exposure & Etch Lại)**:
1. Phủ resist lần hai.
2. Phơi sáng lần hai → pattern B.
3. Development.
4. Etch lần hai dùng resist B làm mask → tạo vị trí gọt 2 (trench 2), xen kẽ với gọt 1.
5. Tẩy resist B.

**Kết Quả**: Hai hàng gọt xen kẽ, mỗi hàng có khoảng cách gấp đôi → **pitch tổng = pitch_đơn / 2**.

#### Ưu Điểm

- **Đơn giản về khái niệm**: Chỉ lặp lại quang khắc/etch.
- **Không yêu cầu overlay chính xác**: Mỗi vòng độc lập (miễn là overlap đủ để tạo pattern liên tục).

#### Nhược Điểm

- **Throughput giảm 50%**: Phơi 2 lần, khắc 2 lần → thời gian gấp đôi.
- **Overlay yêu cầu cao**: Giữa vòng 1 và 2 cần **overlay chính xác <10nm** để pattern không bị sai lệch.
- **Chi phí cao**: Resist, developer, energy tăng gấp đôi.
- **Khó tạo các pattern phức tạp**: Nếu không lên kế hoạch cẩn thận, hai vòng có thể không tạo được pattern mong muốn.

#### Công Thức Pitch Giảm

```
Pitch_LELE = Pitch_single / 2
```

**Ví dụ**:
- Pitch single ArF: ~90nm (node ~45nm).
- Pitch LELE: ~45nm (node ~22nm).

### 2. SADP (Self-Aligned Double Patterning)

#### Định Nghĩa

"Tự căn chỉnh đôi họa đồ" – kỹ thuật tạo **2 pattern từ 1 pattern ban đầu** bằng cách **tạo sidewalls**.

#### Quy Trình

**Bước 1 - Tạo Core Pattern**:
1. Phơi sáng + etch → tạo core pattern (thường là các thanh hẹp, width W).
2. Etch tạo chiều sâu chuẩn.

**Bước 2 - Tạo Spacer (Sidewall)**:
1. Phủ lớp **spacer material** (thường SiO₂ hoặc SiN) lên toàn bộ.
2. **Reactive Ion Etch (RIE) anisotropic** với selectivity cao → loại bỏ spacer ở **mặt phẳng** (horizontal), giữ lại spacer ở **cạnh** (vertical wall).
3. Kết quả: Spacer mỏng (~20-50nm) "ôm" cạnh core pattern.

**Bước 3 - Etch Main**:
1. **Tẩy core**: Loại bỏ core pattern (hòa tan hoặc plasma ash).
2. Spacer vẫn còn, tạo thành **2 gọt** xen kẽ (giữa hai spacer sát nhau, giữa spacer và cạnh trench...).
3. Etch dùng spacer làm mask.

**Bước 4 - Tẩy Spacer**:
1. Loại bỏ spacer bằng HF (nếu SiO₂) hoặc plasma (nếu SiN).
2. Pattern cuối cùng: Hai gọt (từ hai spacer).

**Kết Quả**: **Từ 1 core → tạo 2 gọt** (hoặc 2 line).

#### Ưu Điểm

- **Pitch giảm 2×**: Spacer mỏng → tạo pattern dày đôi.
- **Throughput tốt**: Không phải phơi 2 lần (chỉ 1 lần phơi).
- **Overlay không yêu cầu**: Spacer tự căn chỉnh với core → không cần overlay chính xác.
- **Chi phí vừa**: Ít resist, ít developer.

#### Nhược Điểm

- **Spacer thinness yêu cầu cao**: Spacer quá dày → pitch không đủ giảm. Spacer quá mỏng → dễ bị vỡ.
- **Selectivity etching**: RIE anisotropic phải có selectivity rất cao giữa spacer và substrate.
- **Pattern variability**: Nếu core width thay đổi → spacer width thay đổi → pitch sai.

#### Công Thức Pitch

```
Pitch_SADP ≈ 2 × (Core_width + 2 × Spacer_width)
```

Hoặc:
```
Pitch_SADP ≈ Pitch_single / 2
```

### 3. SAQP (Self-Aligned Quadruple Patterning)

#### Định Nghĩa

"Tự căn chỉnh bốn họa đồ" – **lặp SADP hai lần** để tạo **4 pattern từ 1 pattern ban đầu**.

#### Quy Trình

**Vòng 1 (SADP Lần 1)**:
1. Tạo core pattern 1.
2. Tạo spacer 1 → tạo 2 gọt / 2 line.
3. Tẩy spacer 1.

**Vòng 2 (SADP Lần 2)**:
1. Phủ lớp **2nd spacer material** (thường khác loại từ spacer 1, ví dụ SiN nếu lần 1 là SiO₂).
2. Anisotropic etch → tạo spacer 2 mỏng.
3. Vì spacer 2 ôm cạnh của cả 2 gọt từ vòng 1 → tạo **4 spacer** (mỗi gọt cũ có 2 spacer mới ôm 2 cạnh).
4. Etch dùng 4 spacer làm mask → 4 gọt.
5. Tẩy spacer 2.

**Kết Quả**: **Từ 1 core ban đầu → cuối cùng 4 gọt**.

#### Ưu Điểm

- **Pitch giảm 4×**: Rất nhỏ → cho phép node 7nm từ photolithography ArF 193nm.
- **Không cần phơi 4 lần**: Chi phí resist giảm.

#### Nhược Điểm

- **Phức tạp cực độ**: 2 lần SADP lồng nhau → nhiều bước, khó điều chỉnh.
- **Selectivity / Spacer Thickness Control**: Cần điều chỉnh tuyệt đối → rất khó.
- **Cost**: Lấy hay chi phí, dù ít resist nhưng nhiều bước etch/deposition.
- **Yield**: Khó tạo pattern đúng → defect tăng.
- **Throughput**: Vẫn nhanh hơn LELE 2 lần, nhưng nhanh hơn EUV?

#### Công Thức Pitch

```
Pitch_SAQP ≈ Pitch_single / 4
```

## Bảng So Sánh Ba Phương Pháp

| Tiêu Chí | LELE | SADP | SAQP |
|---------|------|------|------|
| **Phơi sáng lần** | 2 | 1 | 1 |
| **Etch lần** | 2 | 2-3 | 4-5 |
| **Pitch giảm** | 2× | 2× | 4× |
| **Overlay yêu cầu** | Cao | Không | Không |
| **Throughput** | 50% | ~80% | ~70% |
| **Phức tạp** | Thấp | Vừa | Cao |
| **Chi phí** | Cao | Vừa | Vừa |
| **Node áp dụng** | 22nm-16nm | 16nm-14nm | 14nm-7nm |

## Xu Hướng Lịch Sử

| Node | Phương Pháp | Wavelength |
|-----|-----------|-----------|
| 65-45nm | Single patterning | ArF Dry |
| 45-32nm | Single patterning | ArF Immersion |
| 22-16nm | LELE | ArF Immersion |
| 16-14nm | LELE + SADP | ArF Immersion |
| 14-10nm | SADP + SAQP | ArF Immersion |
| 10-7nm | EUV (Multi-patterning kém) | EUV 13.5nm |
| 5-3nm | EUV | EUV 13.5nm |

## Tại Sao Multi-Patterning Dần Bị Thay Thế?

- **Complexity cao**: Mỗi patterning thêm bước → yield giảm, chi phí tăng.
- **Throughput**: SAQP rất chậm.
- **EUV alternative**: EUV 13.5nm có độ phân giải tốt → không cần multi-patterning → quy trình đơn giản hơn.
- **Xu hướng từ 7nm trở lại**: Chuyển sang EUV đơn thay vì ArF multi-patterning.

## Tầm Quan Trọng

Multi-patterning cho phép:
- **Kéo dài đời sống ArF**: Nếu không có multi-patterning, ArF sẽ bị ngừng ở node 28nm → EUV sẽ bắt đầu sớm hơn.
- **Chi phí node nhỏ hơn**: Mặc dù SAQP phức tạp, nhưng vẫn rẻ hơn EUV.
- **Chuyển tiếp mượt mà**: Cho phép ngành có thời gian phát triển/cải thiện EUV.
