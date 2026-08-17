<script lang="ts">
	import WidgetFrame from "../ui/WidgetFrame.svelte";
	import Slider from "../ui/Slider.svelte";

	const Ea = 0.7; // eV, giả định minh họa
	const k = 8.617e-5; // eV/K
	const Tuse = 55; // °C, nhiệt độ sử dụng tham chiếu

	let Tburn = 125; // °C
	let hoursBurn = 10; // giờ

	function toKelvin(c: number) {
		return c + 273.15;
	}

	$: AF = Math.exp((Ea / k) * (1 / toKelvin(Tuse) - 1 / toKelvin(Tburn)));
	$: equivHours = hoursBurn * AF;
	$: equivYears = equivHours / 8760;

	// vị trí marker trên trục thời gian (thang log, giới hạn trong vùng early failure hiển thị)
	$: markerFrac = Math.min(0.92, Math.max(0.03, Math.log10(equivHours + 1) / Math.log10(20000)));

	const W = 340, H = 150;
	// đường bathtub: giảm rồi phẳng rồi tăng (minh họa hình dạng, không phải hàm chính xác)
	const curve = `M20,40 C60,110 100,128 140,130 L260,130 C300,128 320,90 330,40`;
</script>

<WidgetFrame
	title="Đường cong bồn tắm & gia tốc Arrhenius"
	description="Burn-in ở nhiệt độ cao giúp 'nén' nhiều giờ sử dụng thực tế vào một thời gian ngắn trong nhà máy."
	caption={`Hệ số gia tốc AF ≈ ${AF.toFixed(0)}× (Ea giả định ${Ea} eV, T dùng tham chiếu ${Tuse}°C). Đây là mô hình minh họa.`}
>
	<Slider label="Nhiệt độ burn-in" min={55} max={150} step={5} bind:value={Tburn} unit=" °C" />
	<Slider label="Thời gian burn-in" min={0} max={168} step={2} bind:value={hoursBurn} unit=" giờ" />

	<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Đường cong bồn tắm">
		<line x1="20" y1="130" x2="330" y2="130" stroke="var(--border)" />
		<path d={curve} fill="none" stroke="var(--fg-muted)" stroke-width="2" />
		<text x="45" y="55" font-size="9" fill="var(--fg-muted)" font-family="var(--font-mono)">hỏng sớm</text>
		<text x="175" y="122" font-size="9" fill="var(--fg-muted)" font-family="var(--font-mono)">ngẫu nhiên (ổn định)</text>
		<text x="270" y="55" font-size="9" fill="var(--fg-muted)" font-family="var(--font-mono)">mài mòn</text>

		<line x1={20 + markerFrac * 310} y1="15" x2={20 + markerFrac * 310} y2="130" stroke="var(--accent)" stroke-width="2" stroke-dasharray="3 2" />
		<circle cx={20 + markerFrac * 310} cy="130" r="4" fill="var(--accent)" />
		<text x={20 + markerFrac * 310} y="12" text-anchor="middle" font-size="9" fill="var(--accent)" font-family="var(--font-mono)">tương đương</text>
	</svg>

	<p class="readout mono">
		{hoursBurn}h burn-in ở {Tburn}°C ≈ <strong>{equivHours >= 8760 ? `${equivYears.toFixed(1)} năm` : `${equivHours.toFixed(0)} giờ`}</strong> sử dụng thực tế ở {Tuse}°C.
	</p>
</WidgetFrame>

<style>
	svg { width: 100%; height: auto; }
	.readout { font-size: 0.85rem; margin: 0; }
</style>
