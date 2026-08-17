---
title: Burn-in Là Gì
sourceUrl: https://semi-journal.jp/basics/test/burn-in.html
category: test-va-do-tin-cay
order: 1
flagship: false
---

## Định Nghĩa

**Burn-in (バーンイン)** là công đoạn "**cấp ứng suất (stress) mạnh mẽ − áp suất cao, điện áp cao, nhiệt độ cao − liên tục cho chip bán dẫn để buộc những khuyết tật tiềm ẩn phát lộ, từ đó chọn loại bỏ sản phẩm lỗi trước khi xuất xưởng**".

Đây không phải là **bước kiểm tra điện** (electrical test) mà là bước **"chọn lọc chất lượng"** dựa trên sự phát lộ khuyết tật tự nhiên.

## Mục Đích Chính

### 1. Phát Lộ Khuyết Tật Tiềm Ẩn (Latent Defects)

Mỗi chip có thể chứa những khuyết tật nhỏ bé − **"chưa bị hỏng nhưng sắp bị hỏng"**:
- **Ví dụ**: hạt bụi trong oxide, liên kết khác thường, căng thẳng nội bộ.
- Những khuyết tật này **không được phát hiện** qua electrical test đơn giản vì chip vẫn hoạt động được (lúc này).

### 2. Gia Tốc Thời Gian Sự Cố (Accelerate Failure)

Burn-in **tạo điều kiện strack mạnh** để buộc khuyết tật:

- **Nhiệt độ cao** (~100°C trở lên): tăng tốc độ khuếch tán & phản ứng hóa học → "**lão hóa nhanh**" chip.
- **Điện áp/dòng điện cao**: gây ứng suất điện lớn, gia tốc quá trình suy giảm.
- **Kết quả**: những khuyết tật sẽ phát lộ trong **vài giờ đến vài chục giờ** thay vì phải chờ **tháng hoặc năm** trong điều kiện bình thường.

### 3. Bảo Vệ Danh Tiếng & Khách Hàng

- Chip "đã passed burn-in" được coi là **đã qua "bài kiểm tra tự nhiên"** − đã sống sót qua giai đoạn nguy hiểm.
- **Khách hàng** (ví dụ: nhà sản xuất xe hơi, y tế) yên tâm rằng chip trong sản phẩm của họ **đã được "luyện thép"** trước.

## Nguyên Lý Vật Lý

### Thời Gian Sống Hạt Tải (Carrier Lifetime)

Khuyết tật trong chip làm **giảm thời gian sống** (lifetime) của electron và lỗ trống:

```
Lifetime ∝ 1 / (nồng độ khuyết tật)
```

- Chip có **khuyết tật nhiều** → lifetime ngắn → dòng rò (leakage) tăng → hiệu suất giảm.
- Khi tạo ứng suất mạnh qua burn-in → những khuyết tật "bộc lộ", dòng rò vượt ngưỡng → chip **bị loại bỏ**.

### Phương Trình Arrhenius (Gia Tốc Nhiệt)

Tốc độ suy giảm chip tuân theo **phương trình Arrhenius**:

```
Rate ∝ exp(-Ea / kT)
```

Nâng nhiệt độ từ 25°C lên 125°C có thể **gia tốc 100–1000 lần** quá trình suy giảm.

## Điều Kiện Burn-in Điển Hình

- **Nhiệt độ**: 100–150°C (phổ biến 125°C).
- **Điện áp**: Áp suất điện bình thường hoặc cao hơn.
- **Thời gian**: 4–48 giờ tùy chip.
- **Điều kiện**: Chip được đặt trong lò nóng (oven) có điều khiển nhiệt độ chặt chẽ.

## Phân Biệt Với Wafer Test & Final Test

| Bước Kiểm Tra | Mục Đích | Phương Pháp | Tại Thời Điểm |
|---|---|---|---|
| **Wafer Test (Probe)** | Kiểm tra tính chất điện tại thời điểm hiện tại | Đo IV, RC, etc. ở điều kiện bình thường | Trước dicing |
| **Burn-in** | Phát lộ khuyết tật tiềm ẩn | Cấp ứng suất mạnh ~4–48 giờ | Sau packaging (hoặc trước − wafer level) |
| **Final Test** | Kiểm tra lại tính chất điện sau burn-in | Đo IV, RC lại ở điều kiện bình thường | Sau burn-in |

## Ứng Dụng: Ngành Nào Cần Burn-in?

Những ứng dụng **"không được phép dừng"** yêu cầu burn-in bắt buộc:

- **Xe hơi (Automotive)**: hiệu suất bán dẫn ảnh hưởng đến an toàn.
- **Y tế (Medical)**: máy theo dõi tim, pacemaker − không được lỗi.
- **Server/Cloud computing**: downtime tốn kém.
- **Viễn thông**: trạm biến áp chạy 24/7.

Các ứng dụng **tiêu dùng** (ví dụ: smartphone bình thường) có thể bỏ qua hoặc giảm burn-in để tiết kiệm chi phí.

## Kết Luận

**Burn-in không phải kiểm tra mà là "luyện tập tay não"** − nó khô quặng (sift out) những chip yếu đuối trước khi chúng gây hỏi hỏng cho khách hàng. Đây là **hành động tiên phòng** giá trị cao trong bảo đảm chất lượng bán dẫn, đặc biệt với những sản phẩm quan trọng về độ tin cậy.
