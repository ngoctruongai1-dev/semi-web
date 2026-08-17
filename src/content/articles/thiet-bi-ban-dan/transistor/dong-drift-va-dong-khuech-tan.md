---
title: Dòng Drift và Dòng Khuếch Tán (Drift & Diffusion Current)
sourceUrl: https://semi-journal.jp/basics/device/transistor/drift-diffusion.html
category: thiet-bi-ban-dan
subcategory: transistor
order: 3
flagship: false
---

## Dòng Drift (Drift Current, ドリフト電流)

**Dòng Drift** là "dòng điện sinh ra do di chuyển của carrier dưới tác dụng của điện trường bên ngoài". 

**Nguyên lý**: Khi đặt điện áp trên bán dẫn, nó tạo ra một điện trường E. Các carrier (electron và hole) nhận lực từ trường này:
- **Electron**: lực tác dụng ngược hướng điện trường → di chuyển ngược E
- **Hole (lỗ trống)**: lực tác dụng cùng hướng điện trường → di chuyển cùng E

**Công thức**:
$$I_{\text{drift}} = q \cdot n(x) \cdot \mu_n \cdot E \text{ (electron)}$$
$$I_{\text{drift}} = q \cdot p(x) \cdot \mu_p \cdot E \text{ (hole)}$$

Trong đó:
- q: điện tích cơ bản (1.6×10⁻¹⁹ C)
- n(x), p(x): nồng độ carrier tại vị trí x
- μₙ, μₚ: độ linh động electron/hole
- E: cường độ điện trường

**Ứng dụng thực tế**: Dòng drift là cơ chế chính tạo ra dòng điện trong các vùng có điện trường mạnh, chẳng hạn vùng cạn kiệt của tiếp giáp p-n hoặc kênh MOSFET.

## Dòng Khuếch Tán (Diffusion Current, 拡散電流)

**Dòng Khuếch Tán** là "dòng điện sinh ra do di chuyển của carrier nhằm san bằng sự chênh lệch nồng độ".

**Nguyên lý**: Khi nồng độ carrier không đều (ví dụ cao ở một bên, thấp ở bên khác), các carrier tự nhiên khuếch tán từ nơi nồng độ cao tới nơi nồng độ thấp – một quá trình tự phát nhằm san bằng nồng độ. Quá trình này tạo ra dòng điện.

**Công thức (định luật Fick)**:
$$I_{\text{diffusion}} = q \cdot D \cdot \frac{dn}{dx} \text{ (electron)}$$
$$I_{\text{diffusion}} = -q \cdot D \cdot \frac{dp}{dx} \text{ (hole)}$$

Trong đó:
- D: hệ số khuếch tán (diffusion coefficient)
- dn/dx, dp/dx: gradient nồng độ (đạo hàm theo vị trí)

**Mối liên hệ Einstein**: Có mối liên hệ đơn giản giữa độ linh động và hệ số khuếch tán:
$$D = \frac{\mu \cdot k_B \cdot T}{q}$$

(kB: hằng số Boltzmann, T: nhiệt độ tuyệt đối)

**Ứng dụng thực tế**: Dòng khuếch tán đóng vai trò quan trọng ở tiếp giáp p-n trong trạng thái cân bằng (không áp điện), tạo ra dòng tổn hao trong diode.

## Tổng Dòng Điện trong Bán Dẫn

Trong một thiết bị bán dẫn thực, **cả dòng drift và dòng khuếch tán đều tồn tại đồng thời**:

$$I_{\text{total}} = I_{\text{drift}} + I_{\text{diffusion}}$$

**Ý nghĩa**: Hành vi của thiết bị phụ thuộc vào sự cân bằng giữa hai cơ chế này:
- Ở vùng cạn kiệt tiếp giáp p-n: dòng drift chiếm ưu thế (điện trường mạnh).
- Ở vùng trung tính gần kênh: dòng khuếch tán có ảnh hưởng.
- Trong MOSFET kênh: cả hai cơ chế cùng hoạt động để kiểm soát dòng drain.
