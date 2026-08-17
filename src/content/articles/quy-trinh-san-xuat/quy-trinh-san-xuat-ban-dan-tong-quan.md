---
title: Quy Trình Sản Xuất Bán Dẫn – Tổng Quan (Semiconductor Manufacturing Flow)
sourceUrl: https://semi-journal.jp/basics/process/flow.html
category: quy-trinh-san-xuat
order: 1
flagship: false
---

## Giới thiệu

Quy trình sản xuất bán dẫn là một chuỗi công đoạn phức tạp gồm **hơn 100 bước** để chuyển từ nguyên liệu thô (polysilicon) thành sản phẩm cuối cùng hoàn thiện. Bài viết này trình bày các giai đoạn chính thông qua ví dụ về sản xuất **MOSFET** (Metal-Oxide-Semiconductor Field-Effect Transistor – transistor hiệu ứng điện trường oxy-kim loại), một loại transistor phổ biến nhất trong các mạch tích hợp hiện đại.

## Các Giai Đoạn Chính

### Giai Đoạn 1: Chuẩn Bị Wafer

1. **Chế tạo wafer silicon**: Từ ingot silicon đơn tinh thể được kéo bằng phương pháp CZ (Czochralski – kéo tinh thể), cắt lát thành những lát mỏng (~1mm), rồi đánh bóng bằng **CMP (Chemical Mechanical Polishing – đánh bóng hóa-cơ)** để tạo bề mặt siêu phẳng, gương và không khuyết tật.

2. **Làm sạch**: Loại bỏ các chất bẩn (hạt, kim loại, hữu cơ, oxide tự nhiên) bằng dung dịch hóa học hoặc ashing (tẩy đốt), giai đoạn này chiếm **30-40% tổng số công đoạn**.

### Giai Đoạn 2: Xây Dựng Cơ Cấu Silicon (Front-End-of-Line – FEOL)

3. **Tạo lớp oxide/nitride**: Sử dụng oxy hóa nhiệt hoặc **CVD (Chemical Vapor Deposition – khuếch tán hóa học từ pha khí)** để hình thành các lớp cách điện SiO₂ hoặc Si₃N₄.

4. **Phủ photoresist**: Phủ một lớp chất nhạy sáng (photoresist) lên wafer bằng **spin coating (quay ly tâm)** để tạo bề mặt kỵ nước.

5. **Phơi sáng**: Chiếu tia **UV (tia cực tím)** qua **mặt nạ (photomask)** có hình dạng mạch lên wafer.

6. **Hiện ảnh**: Rửa bỏ phần photoresist bị phơi sáng (resist dương) hoặc không bị phơi sáng (resist âm) bằng dung dịch hiện ảnh.

7. **Khắc (Etching)**: Sử dụng **RIE (Reactive Ion Etching – khắc ion phản ứng)** hoặc các phương pháp khắc khác để loại bỏ vật liệu (oxide/nitride) ở các vùng không được bảo vệ bởi resist.

8. **Tẩy photoresist**: Loại bỏ photoresist còn lại bằng axit hoặc **ashing (đốt cháy)**. Giai đoạn quang khắc (photolithography) này **lặp lại nhiều lần** (10-20 lần trở lên) để tạo hình các lớp mạch.

### Giai Đoạn 3: Doping và Hình Thành Transistor

9. **Cấy ion (Ion Implantation)**: Tiêm các ion dopant (phosphorus cho n-type, boron cho p-type) vào wafer bằng điện áp cao để tạo vùng có tính chất dẫn điện khác nhau. Quá trình này làm vùng cấy trở nên **vô định hình (amorphous)**.

10. **Ủ nhiệt (Annealing)**: Nung nóng wafer ở nhiệt độ cao (>1000°C) để **phục hồi tinh thể** (crystallization) và **kích hoạt dopant** (activation), cho phép chúng hòa tan vào mạng tinh thể silicon.

11. **Cách điện (Isolation)**: Tạo lớp cách điện giữa các transistor bằng cách nhồi oxide vào các rãnh nông (**STI – Shallow Trench Isolation**), rồi dùng **CMP** để làm phẳng.

12. **Tạo cấu trúc cổng**: Hình thành lớp **gate oxide (oxy cổng)** mỏng trên bề mặt semiconductor, rồi phủ polysilicon (poly-Si) làm điện cực cổng.

13. **Tạo vùng source/drain**: Dùng photolithography + ion implantation để tạo các vùng doping cao nồng độ ở hai đầu transistor.

### Giai Đoạn 4: Kết Nối Đa Lớp Kim Loại (Back-End-of-Line – BEOL)

14. **Hình thành lỗ tiếp xúc**: Dùng photolithography + etching để mở các lỗ nhỏ kết nối từ các vùng p/n và cổng tới lớp kim loại đầu tiên.

15. **Phủ và làm phẳng**: Phủ kim loại (thường tungsten hoặc aluminum), sau đó dùng **CMP** để loại bỏ phần kim loại dư thừa, tạo ra các **tiếp xúc (contact)** chuẩn.

16. **Tạo đường dẫn kim loại**: Tạo các rãnh trong lớp cách điện, phủ kim loại (thường copper/đồng) và CMP. Giai đoạn này **lặp lại 5-15 lần** để hình thành các lớp dây dẫn (metal layers), tạo mạng lưới kết nối ba chiều.

17. **Phủ Passivation**: Phủ lớp cách điện cuối (thường SiO₂ hoặc Si₃N₄) để bảo vệ chip khỏi độ ẩm, oxy hóa, lỗi điện tĩnh.

### Giai Đoạn 5: Kiểm Tra

18. **Kiểm tra Probe**: Kiểm tra đặc tính điện của từng chip IC bằng **tay đo (probe tester)** để phát hiện chip bị lỗi trước khi đóng gói.

### Giai Đoạn 6: Đóng Gói (Packaging) – Back-End Assembly

19. **Cắt chip (Dicing)**: Dùng lưỡi kim cương quay để cắt wafer thành từng chip (die) riêng lẻ.

20. **Dán chip (Die Attach)**: Gắn die lên **khung chì (lead frame)** bằng keo (epoxy) hoặc hàn (solder).

21. **Kết nối dây (Wire Bonding)**: Nối die và lead frame bằng những sợi dây vàng (gold wire) siêu mỏng (đường kính khoảng 25-50 micrometers).

22. **Đúc khuôn (Molding)**: Bao niêm chip bằng nhựa epoxy để bảo vệ trước tác động cơ học, ẩm độ, bẩn bụi. Sau đó cắt thừa, định hình, dò lỗi, và test điện cuối cùng.

## Những Đặc Điểm Cốt Lõi

- **Độ phức tạp cao**: Hơn 100 công đoạn, mỗi bước yêu cầu kiểm soát chất lượng khắt khe.
- **Dung sai cực chặt**: Kích thước đặc trưng hiện nay là **3-5 nm** (node 3nm), yêu cầu thiết bị với độ chính xác đến từng nguyên tử.
- **Tỷ lệ lỗi (yield) đáng chú ý**: Không phải tất cả chip trên wafer đều đạt chất lượng – quá trình tối ưu hóa yield (thường 80-95%) là một trong những vấn đề chính của nhà sản xuất.

## Thuật Ngữ Chuyên Ngành

| Thuật Ngữ | Giải Thích |
|-----------|-----------|
| **Photolithography** | Quang khắc – công nghệ in mạch bằng ánh sáng UV qua mặt nạ |
| **CVD** | Khuếch tán hóa học từ pha khí (Chemical Vapor Deposition) |
| **RIE** | Khắc ion phản ứng (Reactive Ion Etching) – có độ chọn lọc cao |
| **CMP** | Đánh bóng hóa-cơ (Chemical Mechanical Polishing) |
| **STI** | Cách điện rãng nông (Shallow Trench Isolation) |
| **Doping** | Pha tạp – tiêm tạp chất để điều chỉnh tính chất điện |
| **Ashing** | Tẩy – loại bỏ photoresist bằng đốt cháy plasma |
| **FEOL** | Front-End-of-Line – giai đoạn hình thành transistor |
| **BEOL** | Back-End-of-Line – giai đoạn kết nối kim loại |
