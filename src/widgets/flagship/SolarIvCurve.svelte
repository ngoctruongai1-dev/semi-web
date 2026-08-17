<script lang="ts">
	import WidgetFrame from "../ui/WidgetFrame.svelte";
	import Slider from "../ui/Slider.svelte";

	let irradiance = 1000; // W/m², 1000 = "1 sun"
	let temp = 25; // °C

	const IscRef = 5; // A tại 1000 W/m²
	const VocRef = 0.6; // V tại 25°C

	$: Isc = IscRef * (irradiance / 1000);
	$: Voc = Math.max(0.3, VocRef - 0.002 * (temp - 25));

	function currentAt(v: number) {
		if (Isc <= 0) return 0;
		const i = Isc * (1 - Math.exp((v - Voc) / 0.05));
		return Math.max(0, Math.min(Isc, i));
	}

	$: samples = Array.from({ length: 41 }, (_, i) => {
		const v = (i / 40) * Voc;
		const i_ = currentAt(v);
		return { v, i: i_, p: v * i_ };
	});
	$: maxP = samples.reduce((m, s) => (s.p > m.p ? s : m), samples[0]);

	const W = 300, H = 160, padL = 34, padB = 22, padT = 10, padR = 10;
	$: xScale = (v: number) => padL + (v / Math.max(Voc, 0.01)) * (W - padL - padR);
	$: yScale = (i: number) => H - padB - (i / Math.max(Isc, 0.01)) * (H - padB - padT);
	$: pathD = samples.map((s, idx) => `${idx === 0 ? "M" : "L"}${xScale(s.v).toFixed(1)},${yScale(s.i).toFixed(1)}`).join(" ");
</script>

<WidgetFrame
	title="Đường cong I-V của pin mặt trời"
	description="Thay đổi cường độ sáng & nhiệt độ để xem đường cong I-V và điểm công suất cực đại (Pmax) dịch chuyển."
	caption={`Isc ≈ ${Isc.toFixed(2)} A, Voc ≈ ${Voc.toFixed(2)} V, Pmax ≈ ${maxP.p.toFixed(2)} W (mô hình minh họa, không phải số liệu đo thật).`}
>
	<Slider label="Cường độ sáng" min={0} max={1200} step={50} bind:value={irradiance} unit=" W/m²" />
	<Slider label="Nhiệt độ" min={0} max={75} step={1} bind:value={temp} unit=" °C" />

	<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Đường cong I-V pin mặt trời">
		<line x1={padL} y1={padT} x2={padL} y2={H - padB} stroke="var(--border)" />
		<line x1={padL} y1={H - padB} x2={W - padR} y2={H - padB} stroke="var(--border)" />
		<text x="4" y={padT + 8} font-size="8" fill="var(--fg-muted)" font-family="var(--font-mono)">I (A)</text>
		<text x={W - padR - 18} y={H - padB + 16} font-size="8" fill="var(--fg-muted)" font-family="var(--font-mono)">V (V)</text>

		<path d={pathD} fill="none" stroke="var(--accent)" stroke-width="2" />
		<circle cx={xScale(maxP.v)} cy={yScale(maxP.i)} r="4" fill="var(--accent-hover)" />
		<line x1={xScale(maxP.v)} y1={yScale(maxP.i)} x2={xScale(maxP.v)} y2={H - padB} stroke="var(--accent-hover)" stroke-dasharray="2 2" />
		<text x={xScale(maxP.v) + 5} y={yScale(maxP.i) - 5} font-size="9" fill="var(--accent-hover)" font-family="var(--font-mono)">Pmax</text>
	</svg>
</WidgetFrame>

<style>
	svg { width: 100%; height: auto; }
</style>
