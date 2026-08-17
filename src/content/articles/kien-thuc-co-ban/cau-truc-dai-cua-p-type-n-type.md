---
title: Cấu Trúc Dải Năng Lượng của Bán Dẫn p-type và n-type (バンド構造)
sourceUrl: https://semi-journal.jp/basics/beginner/band-structure.html
category: kien-thuc-co-ban
order: 5
flagship: false
---

## Bán Dẫn Nội Tại (Intrinsic Semiconductor) - Vấn Đề

Silicon tinh khiết (không có tạp chất) có band gap khoảng **1.2 eV**. Để kích hoạt một electron từ dải hóa trị lên dải dẫn (tạo cặp electron-hole sử dụng được), cần năng lượng tương đương với **~10.000°K (Kelvin)**. 

**Điều này có nghĩa**:
- Ở nhiệt độ phòng (300K), gần như không có electron tự do → không dẫn điện
- Chỉ khi nung rất nóng hoặc dưới ánh sáng mạnh, điều kiện sẽ thay đổi
- **Bán dẫn nội tại thực tế không thể dùng trong các thiết bị công nghiệp**

Đây chính là vấn đề mà **pha tạp (doping)** giải quyết!

## Bán Dẫn Loại n (n-type) - Donor Level

Khi **Phosphorus (P)** được pha tạp vào Silicon:

### Vị Trí Mức Năng Lượng Donor

- P có 5 electron hóa trị, nhưng chỉ 4 cái được dùng cho liên kết Si
- 1 electron còn lại được **buộc yếu** vào nhân P
- Electron này **gần như "lơi lửng" ngay dưới dải dẫn điện (Ec)**

### Mức Donor (Donor Level)

- **Ký hiệu**: Ed
- Là một mức năng lượng nằm ngay phía **dưới dải dẫn (Ec)**
- **Khoảng cách từ Ec đến Ed rất nhỏ** (~0.04 eV cho Silicon)
- **Meaning**: Chỉ cần cấp năng lượng rất nhỏ (~0.04 eV, tương đương ~500K) để kích hoạt electron từ donor level lên dải dẫn

### Kết Quả Ở Nhiệt Độ Phòng

- Ở 300K, **nhiệt độ phòng đã đủ để kích hoạt hầu hết electron donor** lên dải dẫn
- Silicon n-type trở thành **bán dẫn thực tế dùng được**
- Electron tự do chuyển động → dẫn điện hiệu quả

## Bán Dẫn Loại p (p-type) - Acceptor Level

Khi **Boron (B)** được pha tạp vào Silicon:

### Vị Trí Mức Năng Lượng Acceptor

- B có 3 electron hóa trị, thiếu 1 electron
- Vị trí liên kết trống này (lỗ trống) có **khả năng "hút" một electron từ các liên kết Si lân cận**
- Cần chỉ **rất ít năng lượng** để electron từ một liên kết Si gần đó chuyển qua và lấp lỗ trống B

### Mức Acceptor (Acceptor Level)

- **Ký hiệu**: Ea
- Là một mức năng lượng nằm ngay phía **trên dải hóa trị (Ev)**
- **Khoảng cách từ Ea đến Ev rất nhỏ** (~0.045 eV cho Silicon)
- **Meaning**: Chỉ cần cấp năng lượng rất nhỏ để "nâng" một electron từ dải hóa trị lên để lấp lỗ trống acceptor

### Kết Quả Ở Nhiệt Độ Phòng

- Ở 300K, **nhiệt độ phòng đã đủ để kích hoạt hầu hết electron nhảy lên mức acceptor**
- Điều này tương đương với việc **tạo ra lỗ trống di động ở dải hóa trị**
- Silicon p-type trở thành **bán dẫn thực tế dùng được**
- Lỗ trống chuyển động → dẫn điện hiệu quả

## Bảng So Sánh: Intrinsic vs Doped Semiconductors

| Tính Chất | Intrinsic (Si tinh khiết) | n-type (pha tạp P) | p-type (pha tạp B) |
|---|---|---|---|
| **Hạt tải chính** | Bằng nhau (e⁻ và hole) | Electron (e⁻) | Lỗ trống (hole) |
| **Năng lượng kích hoạt** | ~1.2 eV (rất lớn) | ~0.04 eV (nhỏ) | ~0.045 eV (nhỏ) |
| **Dẫn điện ở 300K** | Gần như không có | Cao | Cao |
| **Ứng dụng thực tế** | Không thể dùng | Tốt | Tốt |

## Mô Hình Sơ Đồ Band Diagram

Dưới đây là biểu diễn sơ đồ (từ trên xuống thể hiện năng lượng tăng):

```
Dải dẫn (Ec) ━━━━━━━━━━ (năng lượng cao)
                │
         n-type:│ Ed (donor level, sát Ec)
                │
         p-type:│ Ea (acceptor level, sát Ev)
                │
Dải hóa trị (Ev)━━━━━━━━━ (năng lượng thấp)
```

Để pha tạp hoạt động (intrinsic semiconductor hoạt động), cần:
1. **Donor level (n-type)** nằm sát dưới dải dẫn (Ec) → electron nhảy lên dễ
2. **Acceptor level (p-type)** nằm sát trên dải hóa trị (Ev) → electron nhảy lên để lấp lỗ dễ

## Ý Nghĩa Thực Tế

Chính nhờ vào mức năng lượng "nông" (shallow level) mà phương pháp pha tạp hoạt động. Nếu donor/acceptor level nằm ở giữa khoảng band gap (deep level), chúng sẽ trở thành "bẫy" và làm hỏng thiết bị thay vì cải thiện dẫn điện. Đây là lý do tại sao chỉ các phần tử nhất định (P, As cho n-type; B, Ga cho p-type) được sử dụng làm dopant trong Silicon.
