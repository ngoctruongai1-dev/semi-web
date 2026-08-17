<script lang="ts">
	import WidgetFrame from "../ui/WidgetFrame.svelte";
	import Slider from "../ui/Slider.svelte";

	const Vbi = 0.7; // điện thế nội tại minh họa cho Si, ~0.7V

	let bias = 0; // V, phân cực thuận (+) / ngược (-)

	$: barrier = Math.max(0.05, Vbi - bias); // rào thế năng hiệu dụng
	$: stepPx = barrier * 70; // chiều cao bậc thang tỉ lệ với rào thế
	$: depletionPx = Math.max(18, Math.sqrt(barrier / Vbi) * 70); // độ rộng lớp cạn kiệt (minh họa)
	$: cx = 200;
	$: leftEdge = cx - depletionPx / 2;
	$: rightEdge = cx + depletionPx / 2;
	$: baseY = 90;
	$: topY = baseY - stepPx;
	$: turnedOn = bias > 0.55;
</script>

<WidgetFrame
	title="Dải năng lượng tiếp giáp p-n"
	description="Kéo điện áp phân cực để xem rào thế năng và lớp cạn kiệt thay đổi."
	caption={`Rào thế hiệu dụng ≈ ${barrier.toFixed(2)} V (Vbi ≈ ${Vbi} V). Đây là minh họa định tính, không phải số liệu chính xác.`}
>
	<Slider label="Điện áp phân cực" min={-3} max={0.65} step={0.05} bind:value={bias} unit=" V" format={(v) => `${v > 0 ? "+" : ""}${v.toFixed(2)} V`} />

	<svg viewBox="0 0 400 160" role="img" aria-label="Sơ đồ dải năng lượng tiếp giáp p-n">
		<!-- vùng p / n nền -->
		<rect x="10" y="20" width={leftEdge - 10} height="120" fill="var(--bg)" stroke="var(--border)" />
		<rect x={rightEdge} y="20" width={390 - rightEdge} height="120" fill="var(--bg)" stroke="var(--border)" />
		<rect x={leftEdge} y="20" width={depletionPx} height="120" fill="var(--accent-bg)" />

		<text x={(10 + leftEdge) / 2} y="145" text-anchor="middle" font-size="11" fill="var(--fg-muted)" font-family="var(--font-mono)">p-type</text>
		<text x={(rightEdge + 390) / 2} y="145" text-anchor="middle" font-size="11" fill="var(--fg-muted)" font-family="var(--font-mono)">n-type</text>
		<text x={cx} y="145" text-anchor="middle" font-size="10" fill="var(--accent)" font-family="var(--font-mono)">lớp cạn kiệt</text>

		<!-- dải dẫn Ec -->
		<path
			d={`M10,${topY} L${leftEdge},${topY} C${leftEdge + depletionPx * 0.3},${topY} ${rightEdge - depletionPx * 0.3},${baseY} ${rightEdge},${baseY} L390,${baseY}`}
			fill="none" stroke="var(--accent)" stroke-width="2.5"
		/>
		<!-- dải hóa trị Ev -->
		<path
			d={`M10,${topY + 45} L${leftEdge},${topY + 45} C${leftEdge + depletionPx * 0.3},${topY + 45} ${rightEdge - depletionPx * 0.3},${baseY + 45} ${rightEdge},${baseY + 45} L390,${baseY + 45}`}
			fill="none" stroke="var(--fg)" stroke-width="2.5"
		/>

		<text x="16" y={topY - 6} font-size="10" fill="var(--accent)" font-family="var(--font-mono)">Ec</text>
		<text x="16" y={topY + 40} font-size="10" fill="var(--fg)" font-family="var(--font-mono)">Ev</text>

		{#if turnedOn}
			<g>
				<line x1="30" y1="70" x2="370" y2="70" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="4 3" />
				<polygon points="370,70 360,65 360,75" fill="var(--accent)" />
				<text x="200" y="62" text-anchor="middle" font-size="10" fill="var(--accent)" font-family="var(--font-mono)">dòng điện bắt đầu chảy mạnh</text>
			</g>
		{/if}
	</svg>
</WidgetFrame>

<style>
	svg { width: 100%; height: auto; }
</style>
