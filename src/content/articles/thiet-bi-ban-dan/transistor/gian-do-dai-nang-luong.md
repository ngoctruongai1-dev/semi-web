---
title: 'Gian Đo Dài Năng Lượng (Energy Band Diagram): Ec, Ev, Ei, Ef'
sourceUrl: https://semi-journal.jp/basics/device/transistor/ec-ev-ef.html
category: thiet-bi-ban-dan
subcategory: transistor
order: 4
flagship: false
---

## Khái Niệm Cơ Bản

**Biểu đồ dải năng lượng** là "đồ thị mô tả phân bố các mức năng lượng mà electron có thể hoặc không thể tồn tại trong bán dẫn". Trục dọc đại diện cho năng lượng, trục ngang đại diện cho vị trí không gian (hoặc chỉ dùng để biểu diễn các lớp khác nhau). Biểu đồ này là công cụ cơ bản để hiểu hành vi của transistor.

## Bốn Mức Năng Lượng Quan Trọng

### 1. Ec – Đáy Dải Dẫn (Conduction Band Edge, 伝導帯下端)

**Ec** là "mức năng lượng thấp nhất trong dải dẫn". Electron chiếm dụng mức này hoặc cao hơn có đủ năng lượng để di chuyển tự do qua tinh thể, tạo ra dòng điện.

### 2. Ev – Đỉnh Dải Hóa Trị (Valence Band Edge, 価電子帯上端)

**Ev** là "mức năng lượng cao nhất trong dải hóa trị". Electron ở mức này bị ràng buộc trong liên kết Si-Si với các nguyên tử lân cận, không thể di chuyển tự do. **Lỗ trống (hole)** được định nghĩa là "khoảng trống năng lượng" ở dải hóa trị – khi electron rời khỏi liên kết, nó để lại một "chỗ trống" mà electron khác có thể lấp vào, tạo cảm giác hole di chuyển.

### 3. Eg – Vùng Cấm (Bandgap, バンドギャップ)

**Eg = Ec − Ev** là "khoảng năng lượng mà electron **không thể** tồn tại" – không có trạng thái năng lượng khả dụng trong khoảng này. Đây là **đặc điểm cơ bản phân biệt vật dẫn, bán dẫn, và cách điện**:
- **Vật dẫn (Kim loại)**: dải hóa trị và dải dẫn chồng lấn, Eg = 0 → dẫn điện tốt lúc nào cũng được.
- **Bán dẫn**: Eg nhỏ (~1 eV cho Si) → dẫn điện khi được cấp năng lượng (nhiệt, ánh sáng, điện áp).
- **Cách điện**: Eg lớn (>3 eV) → không dẫn điện ở điều kiện thường.

**Ví dụ band gap (eV)**:
- Si: 1.11–1.12 eV
- Ge: 0.67 eV
- GaAs: 1.43 eV
- SiC: 2.86 eV
- GaN: 3.4 eV

### 4. Ei – Mức Nội Tại (Intrinsic Level, 真性フェルミ準位)

**Ei** là "mức năng lượng nằm giữa Ec và Ev, nơi số electron trong dải dẫn bằng số lỗ trống trong dải hóa trị". Ở bán dẫn **nội tại (không doping)** ở trạng thái cân bằng nhiệt độ phòng, mức Fermi Ef ≈ Ei.

### 5. Ef – Mức Fermi (Fermi Level, フェルミ準位)

**Ef** (hay EF) là "mức năng lượng có xác suất chiếm dụng bằng 50%". Nó là tham số thuận lợi để mô tả trạng thái cân bằng của hệ electron-hole:

- **N-type**: Ef gần Ec (cách Ec khoảng kBT·ln(Nc/Nd), với Nd là nồng độ donor, Nc là mật độ trạng thái hiệu dụng)
- **P-type**: Ef gần Ev (cách Ev khoảng kBT·ln(Nv/Na), với Na là nồng độ acceptor)
- **Intrinsic**: Ef = Ei (chính giữa)

Mức Fermi **không đổi trên toàn thể hệ khi ở trạng thái cân bằng nhiệt độ động**.

## Ứng Dụng trong Transistor

**Mục tiêu của transistor** là **điều khiển vị trí của Ef và độ cong dải năng lượng** (band bending) bằng điện áp ngoài:

- **Gate voltage trong MOSFET**: tạo lớp oxy cách điện → điều khiển điện thế bề mặt → uốn cong các dải năng lượng → kiểm soát việc hình thành "lớp đảo chiều (inversion layer)" để tạo kênh dẫn.
- **Chuyển mạch (On/Off)**: khi Ef được nâng cao so với band gap, electron từ dải dẫn và hole từ dải hóa trị tăng số lượng, tăng dòng điện.
