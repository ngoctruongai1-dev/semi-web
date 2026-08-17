---
title: 'SRAM: Cấu Trúc và Nguyên Lý Hoạt Động (SRAM - Static RAM)'
sourceUrl: https://semi-journal.jp/basics/device/memory/sram.html
category: thiet-bi-ban-dan
subcategory: memory
order: 5
flagship: false
---

## Định Nghĩa

SRAM (Static Random Access Memory, 静的ランダムアクセスメモリ) là "một loại bộ nhớ RAM cho phép đọc/ghi dữ liệu mà không cần làm mới định kỳ". Khác với DRAM, SRAM tự động giữ dữ liệu ở trạng thái ổn định miễn là có nguồn điện cung cấp. Được sử dụng chủ yếu làm cache L1, L2, L3 trong CPU và GPU.

## Cấu Trúc 6T (6 Transistor)

Mỗi ô nhớ SRAM được cấu tạo từ **6 transistor MOSFET** được sắp xếp thành hai phần chức năng:

### Phần 1: Mạch Flip-Flop Lưu Trữ (4 Transistor)

**Cấu trúc**: Hai mạch đảo (inverter) CMOS xếp liên tiếp, tạo thành một **mạch flip-flop SR** (Set-Reset latch)

**Thành phần**:
- **M1 (nMOSFET)** + **M4 (pMOSFET)**: Tạo inverter thứ nhất
- **M2 (nMOSFET)** + **M3 (pMOSFET)**: Tạo inverter thứ hai
- Hai inverter được kết nối chéo: đầu ra của một là đầu vào của cái kia

**Nguyên tắc hoạt động flip-flop**:
- Nếu điểm A ở mức HIGH (1), inverter 1 sẽ buộc điểm B ở mức LOW (0)
- Nếu B ở LOW, inverter 2 sẽ buộc A ở HIGH
- Nếu điểm A ở LOW (0), inverter 1 sẽ buộc B ở HIGH
- Nếu B ở HIGH, inverter 2 sẽ buộc A ở LOW
- **Kết quả**: Hai trạng thái ổn định tự duy trì lẫn nhau:
  - **Trạng thái 1**: A=HIGH, B=LOW → Biểu diễn "1"
  - **Trạng thái 2**: A=LOW, B=HIGH → Biểu diễn "0"

### Phần 2: Hai Transistor Truy Cập (2 Transistor)

**Thành phần**:
- **M5 (nMOSFET)**: Nối điểm A với Bit Line 1
- **M6 (nMOSFET)**: Nối điểm B với Bit Line 2 (hoặc Bit Line Bar)
- Cổng (Gate) của cả M5 và M6: Nối với **Word Line** (Đường từ, ワード線)

**Chức năng**: Khi Word Line được nâng lên, M5 và M6 bật → cho phép đọc/ghi dữ liệu từ/vào flip-flop

## Khác Biệt Flip-Flop SRAM vs Latch Thông Thường

Flip-flop trong SRAM có **hai trạng thái ổn định vững chắc**:

- Mỗi trạng thái được duy trì bởi phản hồi dương (positive feedback) từ hai inverter
- Điện áp tại A và B không lúc nào gặp trong phạm vi trung gian
- Khi có nhiễu nhỏ (noise), hệ thống tự động đẩy ngược về trạng thái ổn định gần nhất
- Do đó, SRAM **không cần refresh** để giữ dữ liệu

## Ba Chế Độ Hoạt Động

### 1. Chế Độ Chờ (Standby Mode, スタンバイモード)

**Điều kiện**:
- Word Line: 0V (GND - mức thấp)
- Transistor M5, M6: TẮT (OFF)
- Bit Line 1, Bit Line 2: Thường cách ly

**Tính chất**:
- Transistor truy cập tắt → flip-flop cách ly hoàn toàn
- Hai inverter tự động duy trì trạng thái ổn định lẫn nhau
- Dữ liệu được giữ lại không cần làm mới
- Tiêu thụ điện: Chỉ dòng rò trong transistor (rất nhỏ)

### 2. Chế Độ Đọc (Read Mode, 読み出しモード)

**Điều kiện**:
- Word Line: V_DD (mức cao)
- Transistor M5, M6: BẬT (ON)
- Bit Line 1, Bit Line 2: Được **Sense Amplifier** phát hiện

**Quá trình**:
1. Nâng Word Line lên mức cao (V_DD) → M5, M6 bật
2. **Nếu dữ liệu là "1"** (A=HIGH, B=LOW):
   - Bit Line 1 được nối với A (HIGH) → điện áp cao
   - Bit Line 2 được nối với B (LOW) → điện áp thấp
   - Sense Amplifier phát hiện sự khác biệt này

3. **Nếu dữ liệu là "0"** (A=LOW, B=HIGH):
   - Bit Line 1 được nối với A (LOW) → điện áp thấp
   - Bit Line 2 được nối với B (HIGH) → điện áp cao
   - Sense Amplifier phát hiện sự khác biệt

4. Sense Amplifier khuếch đại sự khác biệt nhỏ (mV~V) lên mức logic rõ (0V hoặc V_DD)

**Đặc điểm quan trọng**: **Đọc không phá hủy (non-destructive read)** - flip-flop vẫn giữ nguyên trạng thái ban đầu

### 3. Chế Độ Ghi (Write Mode, 書き込みモード)

**Điều kiện ghi "1"**:
- Word Line: V_DD (mức cao)
- Transistor M5, M6: BẬT (ON)
- Bit Line 1: V_DD (HIGH)
- Bit Line 2: GND (LOW)

**Quá trình**:
1. Nâng Word Line → M5, M6 bật
2. Đặt Bit Line 1 lên V_DD, Bit Line 2 xuống GND
3. Dòng điện từ Bit Line 1 qua M5 vào điểm A → A bị buộc ở HIGH
4. Dòng điện từ B qua M6 vào Bit Line 2 (GND) → B bị buộc ở LOW
5. Flip-flop chuyển sang trạng thái 1 (A=HIGH, B=LOW) → "1" được ghi

**Điều kiện ghi "0"**:
- Word Line: V_DD (mức cao)
- Transistor M5, M6: BẬT (ON)
- Bit Line 1: GND (LOW)
- Bit Line 2: V_DD (HIGH)

**Quá trình**:
1. Nâng Word Line → M5, M6 bật
2. Đặt Bit Line 1 xuống GND, Bit Line 2 lên V_DD
3. Dòng điện từ A qua M5 vào Bit Line 1 (GND) → A bị buộc ở LOW
4. Dòng điện từ Bit Line 2 vào B → B bị buộc ở HIGH
5. Flip-flop chuyển sang trạng thái 0 (A=LOW, B=HIGH) → "0" được ghi

## Nguyên Lý Lưu Trữ Dữ Liệu

**SRAM lưu trữ dữ liệu hoàn toàn nhờ vào cấu trúc flip-flop**:

- **Không dùng tụ điện** → không phóng điện → không cần refresh
- **Dùng phản hồi dương từ hai inverter** → tự động duy trì trạng thái
- Miễn là có điện (V_DD), flip-flop sẽ tự động lưu giữ dữ liệu vĩnh viễn

## So Sánh SRAM với DRAM

| Đặc Điểm | SRAM | DRAM |
|----------|------|------|
| **Cấu trúc ô** | 6T flip-flop | 1T1C |
| **Cần refresh** | Không | Có (64ms) |
| **Tốc độ truy cập** | Cực nhanh (ps) | Nhanh (ns) |
| **Tiêu thụ điện** | Cao (dòng tĩnh + động) | Thấp hơn |
| **Dung lượng điển hình** | KB ~ MB | MB ~ GB |
| **Giá/bit** | Rất đắt (10-100× DRAM) | Rẻ hơn SRAM |
| **Đọc có phá hủy** | Không | Có (destructive) |
| **Ứng dụng** | Cache L1, L2, L3 CPU/GPU | RAM chính máy tính |
| **Độ phức tạp sản xuất** | Cao (6 transistor/bit) | Thấp (1T1C) |

## Ưu Điểm Và Hạn Chế Của SRAM

### Ưu Điểm:
1. **Tốc độ cực nhanh**: Truy cập trong picoseconds → phù hợp CPU siêu tốc
2. **Không cần refresh**: Tiết kiệm mạch điều khiển phức tạp
3. **Đọc không phá hủy**: Dữ liệu không thay đổi sau khi đọc
4. **Độ trễ xác định**: Thời gian truy cập không phụ thuộc vào state trước
5. **Cấu trúc đơn giản** (về logic): Chỉ là latch flip-flop + transistor truy cập

### Hạn Chế:
1. **Giá thành rất cao**: 10-100 lần đắt hơn DRAM vì cần 6 transistor/bit
2. **Dung lượng nhỏ**: Khó tạo MB vì chi phí, chứng thực là KB~MB
3. **Tiêu thụ điện cao**: Mạch flip-flop luôn tiêu thụ dòng tĩnh (static current)
4. **Diện tích chip lớn**: 6 transistor → diện tích 6× lớn hơn 1 transistor
5. **Bay hơi**: Mất dữ liệu khi ngắt điện

## Ứng Dụng Thực Tiễn

SRAM được sử dụng độc quyền làm **cache bộ nhớ** trong CPU/GPU vì tốc độ cần thiết:

- **L1 Cache**: 32-64 KB, tốc độ ~1ns, được truy cập mỗi chu kỳ xung nhịp
- **L2 Cache**: 256 KB ~ 1 MB, tốc độ ~5-10ns
- **L3 Cache**: 2-16 MB, tốc độ ~30-40ns (một số hệ thống dùng DRAM)
- **TLB (Translation Lookaside Buffer)**: Lưu cache dịch địa chỉ ảo→thật
- **Thanh ghi nội bộ** trong CPU: Chỉ vài chục byte, tốc độ ~0.1ns
