<script lang="ts">
	import WidgetFrame from "../ui/WidgetFrame.svelte";
	import Slider from "../ui/Slider.svelte";

	// thang log điện trở suất: 10^exp Ωcm, exp từ -8 (dẫn điện tốt) đến 16 (cách điện tốt)
	let exp = 3;

	const bands = [
		{ from: -8, to: -4, label: "Vật dẫn điện (kim loại)", example: "Cu, Al, Ag", color: "#3b82f6" },
		{ from: -4, to: -1, label: "Bán dẫn pha tạp mạnh", example: "Si pha tạp cao", color: "#60a5fa" },
		{ from: -1, to: 8, label: "Bán dẫn", example: "Si, Ge nguyên chất", color: "#93c5fd" },
		{ from: 8, to: 16, label: "Vật cách điện", example: "Thủy tinh, cao su, gốm", color: "#8a909c" },
	];

	$: currentBand = bands.find((b) => exp >= b.from && exp <= b.to) ?? bands[bands.length - 1];
	$: markerX = 20 + ((exp - -8) / (16 - -8)) * 360;
</script>

<WidgetFrame
	title="So sánh độ dẫn điện"
	description="Kéo thanh trượt để xem điện trở suất thay đổi từ vật dẫn điện đến vật cách điện."
	caption="Thang log — mỗi bước tương ứng 1 bậc 10 (Ωcm). Vị trí bán dẫn nằm giữa, có thể điều khiển được."
>
	<Slider label="Điện trở suất" min={-8} max={16} step={1} bind:value={exp} format={(v) => `10^${v} Ωcm`} />

	<svg viewBox="0 0 400 130" role="img" aria-label="Thang điện trở suất">
		{#each bands as b}
			<rect
				x={20 + ((b.from - -8) / 24) * 360}
				y="30"
				width={((b.to - b.from) / 24) * 360}
				height="24"
				fill={b.color}
				opacity={b === currentBand ? 1 : 0.35}
			/>
		{/each}
		<line x1="20" y1="30" x2="380" y2="30" stroke="var(--border)" />
		<line x1="20" y1="54" x2="380" y2="54" stroke="var(--border)" />

		<!-- marker -->
		<line x1={markerX} y1="18" x2={markerX} y2="66" stroke="var(--fg)" stroke-width="2" />
		<polygon points={`${markerX - 6},18 ${markerX + 6},18 ${markerX},28`} fill="var(--fg)" />

		<text x="20" y="16" font-size="10" fill="var(--fg-muted)" font-family="var(--font-mono)">10⁻⁸</text>
		<text x="360" y="16" font-size="10" fill="var(--fg-muted)" font-family="var(--font-mono)">10¹⁶</text>
	</svg>

	<div class="readout mono">
		<p class="band-label" style={`color:${currentBand.color}`}>{currentBand.label}</p>
		<p class="band-example">Ví dụ: {currentBand.example}</p>
	</div>
</WidgetFrame>

<style>
	svg { width: 100%; height: auto; }
	.readout { font-size: 0.85rem; }
	.band-label { margin: 0; font-weight: 700; }
	.band-example { margin: 2px 0 0; color: var(--fg-muted); }
</style>
