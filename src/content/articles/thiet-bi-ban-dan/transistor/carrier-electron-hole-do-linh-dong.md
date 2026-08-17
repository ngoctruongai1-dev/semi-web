---
title: 'Carrier: Electron, Lỗ Trống (Hole) và Độ Linh Động (Mobility)'
sourceUrl: https://semi-journal.jp/basics/device/transistor/electron-hole.html
category: thiet-bi-ban-dan
subcategory: transistor
order: 2
flagship: false
---

## Carrier là gì?

**Carrier** (キャリア) hay "hạt tải điện" là các hạt bên trong bán dẫn có nhiệm vụ mang điện tích để tạo nên dòng điện. Có hai loại carrier:

1. **Electron** (電子): hạt tích điện âm (−e), di chuyển theo hướng ngược với điện trường.
2. **Lỗ trống / Hole** (正孔, hole): "khoảng trống nơi electron bị thiếu", mang tích điện dương (+e). Cơ chế: khi electron bị bóc ra khỏi liên kết Si-Si, để lại một "khoảng trống" – khoảng trống này có thể được một electron lân cận lấp vào, tạo cho ấn tượng "lỗ trống di chuyển" theo hướng ngược với electron.

## Độ Linh Động (Mobility, 移動度)

**Độ linh động (μ)** đo lường "tốc độ di chuyển của carrier bên trong bán dẫn" khi chịu tác dụng của một điện trường bên ngoài. Mối quan hệ được biểu diễn bằng công thức:

$$v = \mu \cdot E$$

Trong đó:
- **v**: vận tốc trôi của carrier (drift velocity)
- **μ**: độ linh động (đơn vị: cm²/(V·s))
- **E**: cường độ điện trường tác dụng

**Ý nghĩa**: Mobility càng cao → carrier di chuyển càng nhanh → thiết bị chuyển mạch/khuếch đại nhanh hơn.

## So Sánh Electron Mobility và Hole Mobility trong Si

| Loại carrier | Độ linh động tiêu biểu | Ghi chú |
|---|---|---|
| Electron | ~1350 cm²/(V·s) | **Cao gấp ~3 lần hole** |
| Hole | ~480 cm²/(V·s) | Thấp hơn electron |

**Hệ quả thực tiễn**: Transistor n-type (dùng electron) hoạt động nhanh hơn transistor p-type → các mạch CMOS thường ưu tiên tăng số lượng nMOSFET để tăng tốc độ.

## Yếu Tố Ảnh Hưởng Đến Độ Linh Động

Mobility bị giảm đi bởi các cơ chế tán xạ (scattering):

1. **Tán xạ mạng tinh thể (Phonon scattering, 格子散乱)**: electron va chạm với các nguyên tử Si dao động → truyền năng lượng cho mạng. Tăng theo căn bậc 3/2 của nhiệt độ.
2. **Tán xạ tạp chất (Impurity scattering, 不純物散乱)**: electron/hole va chạm với các ion donor/acceptor đã doping → bị lệch hướng. Tăng tỷ lệ với nồng độ dopant.
3. **Tán xạ khuyết tật/giao diện (Defect/Interface scattering)**: va chạm với khuyết tật trong tinh thể hoặc dangling bond ở giao diện Si/SiO₂.

**Ảnh hưởng thực tiễn**: Nhiệt độ cao → tốc độ transistor giảm; nồng độ dopant cao → mobility giảm → phải cân bằng giữa độ dẫn điện mục tiêu và tốc độ hoạt động.
