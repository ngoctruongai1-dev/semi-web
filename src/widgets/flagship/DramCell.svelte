<script lang="ts">
	import WidgetFrame from "../ui/WidgetFrame.svelte";
	import Slider from "../ui/Slider.svelte";

	const REFRESH_PERIOD = 64; // ms, chuẩn JEDEC minh họa
	const TAU = 22; // hằng số thời gian rò rỉ minh họa (ms)

	let elapsed = 0; // ms kể từ lần refresh gần nhất

	$: chargePct = 100 * Math.exp(-elapsed / TAU);
	$: status = chargePct > 60 ? "an toàn" : chargePct > 25 ? "cần refresh sớm" : "sắp mất dữ liệu!";
	$: statusColor = chargePct > 60 ? "var(--accent)" : chargePct > 25 ? "var(--accent-2)" : "var(--danger)";
	$: barHeight = (chargePct / 100) * 90;
</script>

<WidgetFrame
	title="Vì sao DRAM cần refresh"
	description="Tụ điện trong ô nhớ DRAM tự rò điện theo thời gian — kéo thanh trượt để xem điện tích giảm dần."
	caption={`Chuẩn JEDEC yêu cầu refresh mỗi ${REFRESH_PERIOD}ms; đường cong rò rỉ ở đây chỉ mang tính minh họa.`}
>
	<Slider label="Thời gian từ lần refresh gần nhất" min={0} max={REFRESH_PERIOD} step={1} bind:value={elapsed} unit=" ms" />

	<svg viewBox="0 0 300 150" role="img" aria-label="Mức điện tích tụ DRAM theo thời gian">
		<!-- schematic 1T1C -->
		<line x1="40" y1="20" x2="40" y2="40" stroke="var(--fg-muted)" />
		<rect x="25" y="40" width="30" height="16" fill="none" stroke="var(--fg-muted)" />
		<text x="40" y="34" text-anchor="middle" font-size="9" fill="var(--fg-muted)" font-family="var(--font-mono)">Word Line</text>
		<line x1="40" y1="56" x2="40" y2="75" stroke="var(--fg-muted)" />
		<line x1="25" y1="75" x2="55" y2="75" stroke="var(--fg-muted)" stroke-width="2" />
		<line x1="30" y1="82" x2="50" y2="82" stroke="var(--fg-muted)" stroke-width="2" />
		<text x="40" y="98" text-anchor="middle" font-size="9" fill="var(--fg-muted)" font-family="var(--font-mono)">C</text>

		<!-- capacity bar -->
		<rect x="120" y="20" width="50" height="100" fill="none" stroke="var(--border)" />
		<rect x="120" y={120 - barHeight} width="50" height={barHeight} fill={statusColor} opacity="0.75" />
		<text x="145" y="135" text-anchor="middle" font-size="10" fill="var(--fg-muted)" font-family="var(--font-mono)">điện tích</text>

		<!-- decay curve -->
		<polyline
			fill="none" stroke="var(--accent)" stroke-width="1.5"
			points={Array.from({ length: 33 }, (_, i) => {
				const t = (i / 32) * REFRESH_PERIOD;
				const c = 100 * Math.exp(-t / TAU);
				return `${200 + (t / REFRESH_PERIOD) * 90},${118 - (c / 100) * 90}`;
			}).join(" ")}
		/>
		<circle cx={200 + (elapsed / REFRESH_PERIOD) * 90} cy={118 - (chargePct / 100) * 90} r="3.5" fill={statusColor} />
		<text x="245" y="135" text-anchor="middle" font-size="9" fill="var(--fg-muted)" font-family="var(--font-mono)">theo thời gian</text>
	</svg>

	<p class="readout mono" style={`color:${statusColor}`}>
		Điện tích còn lại: {chargePct.toFixed(0)}% — {status}
	</p>
</WidgetFrame>

<style>
	svg { width: 100%; height: auto; }
	.readout { font-size: 0.85rem; font-weight: 600; margin: 0; }
</style>
