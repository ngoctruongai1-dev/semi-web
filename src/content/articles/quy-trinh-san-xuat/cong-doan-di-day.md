---
title: Công Đoạn Di Dây – Back-End-of-Line (BEOL) / Interconnect
sourceUrl: https://semi-journal.jp/basics/process/beol.html
category: quy-trinh-san-xuat
order: 17
flagship: false
---

## Định Nghĩa

Công đoạn di dây (配線工程, BEOL – Back-End-of-Line) là quá trình **kết nối các transistor/thiết bị được tạo trên wafer bằng dây dẫn kim loại**. Nó cho phép **truyền dòng điện (power) và tín hiệu** giữa các linh kiện.

Khác với **FEOL (Front-End-of-Line)** tạo transistor, BEOL tạo hệ thống kết nối 3D phức tạp.

## Vật Liệu Dây Dẫn Lịch Sử

### Aluminum (Al)

**Sử dụng**: 1980-2000s, node 180nm trở lại.

**Ưu điểm**:
- Rẻ, dễ etch.
- Độ dẫn vừa phải.

**Nhược điểm**:
- Kháng điện cao → IR drop (giảm điện áp).
- Chậm → RC delay tăng.
- Khi node nhỏ → delay trở thành bottleneck → hiệu năng giảm.
- Electromigration (EM) failure tăng.

### Copper (Cu) – Hiện Tại

**Sử dụng**: 2000s → nay (node 130nm trở lại, chủ lực).

**Ưu điểm**:
- **Kháng điện thấp 30% so với Al** → IR drop thấp.
- Dẫn nhiệt tốt → thoát nhiệt.
- Electromigration resistance cao.
- Tốc độ cao, delay thấp.

**Nhược điểm**:
- Khó etch (low vapor pressure etch byproduct) → dùng **damascene** thay vì RIE.
- Dễ diffuse vào oxide → cần **barrier layer** (TiN, Ta, Cu3N).

## Quy Trình Kết Nối

### Aluminum Process (Cũ)

1. **Deposition**: Phủ Al bằng sputtering.
2. **Photolithography**: Phơi sáng + development → hình dạng Al.
3. **RIE Etch**: Khắc Al → tạo trenches/lines.
4. **Insulation**: Phủ oxide cách điện.
5. **CMP**: Làm phẳng.
6. **Lặp lại**: 5-8 lớp metal.

### Copper Damascene Process (Hiện Đại)

**Khác biệt**: Tạo trenches/vias trong oxide TRƯỚC, sau đó mạ Cu vào (không etch Cu).

**Quy Trình**:
1. **Seed Layer**: Phủ TiN barrier + Cu seed bằng PVD (để làm cathode mạ).
2. **Electroplating**: Mạ Cu vào trenches/vias.
3. **CMP Polish**: Mài dẹp Cu dư, định hình dây dẫn.
4. **Repeat**: Tạo 10-20 lớp metal.

**Ưu Điểm**:
- Tránh etch Cu (khó).
- Cu đặc, không bị hollow.
- Chính xác cao.

## Cấu Trúc Kết Nối

**Các Lớp**:
1. **M1 (Metal 1)**: Kết nối transistor source/drain → tiếp xúc (contacts).
2. **M2-M8**: Dây dẫn cấp cao, kết nối phức tạp.
3. **Via**: Lỗ kết nối giữa các lớp metal.

**Khoảng Cách (Pitch)**:
- **Local interconnect**: ~20-30 nm (node 5nm).
- **Middle metal**: ~40-60 nm.
- **Upper metal**: ~100-200 nm (ít lặp lại, cost lower).

## Vấn Đề Kết Nối Hiện Đại

**Resistance/Capacitance Delay (RC Delay)**:
- Khi metal hẹp → kháng điện tăng.
- Khoảng cách close → điện dung tăng.
- **RC delay = 0.4 × R × C** → tốc độ logic giảm → tần số clock giới hạn.

**Electromigration (EM)**:
- Electron va chạm với nguyên tử metal → nguyên tử drift → vỏ/khuyếp → hỏng mở circuit.
- Cu tốt hơn Al.
- Giảm bằng: kháng điện thấp (Cu), dòng thấp, liên kết chắc (barrier).

**Crosstalk**:
- Nhiễu từ dây dẫn lân cận.
- Metal hẹp + close → điện dung cao.

## Tầm Quan Trọng

BEOL quyết định:
- **Tốc độ (Timing)**: RC delay → clock frequency giới hạn.
- **Công suất (Power)**: Cap charging → CV²F power tiêu thụ cao.
- **Yield**: Via/metal defect → chip báng.
- **Chi phí**: Lặp lại 10-20 lớp → chi phí lũy tích.
