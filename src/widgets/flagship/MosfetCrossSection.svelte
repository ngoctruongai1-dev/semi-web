<script lang="ts">
	import WidgetFrame from "../ui/WidgetFrame.svelte";
	import ToggleTabs from "../ui/ToggleTabs.svelte";

	let state = "off";
	$: on = state === "on";

	const reduceMotion =
		typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
</script>

<WidgetFrame
	title="Mặt cắt nMOSFET: OFF vs ON"
	description="Chuyển đổi điện áp cổng (Vgs) để xem kênh dẫn (channel) hình thành giữa Source và Drain."
	caption={on ? "Vgs > Vth: lớp nghịch đảo (inversion layer) nối Source–Drain, electron chảy qua." : "Vgs < Vth: chưa có kênh dẫn, Source và Drain bị cách ly bởi vùng p-substrate."}
>
	<ToggleTabs options={[{ value: "off", label: "OFF (Vgs < Vth)" }, { value: "on", label: "ON (Vgs > Vth)" }]} bind:value={state} />

	<svg viewBox="0 0 360 190" role="img" aria-label="Mặt cắt MOSFET">
		<!-- p-substrate -->
		<rect x="20" y="80" width="320" height="90" fill="var(--bg-elevated)" stroke="var(--border)" />
		<text x="30" y="165" font-size="10" fill="var(--fg-muted)" font-family="var(--font-mono)">p-substrate</text>

		<!-- n+ source & drain -->
		<rect x="50" y="80" width="70" height="35" rx="4" fill={on ? "var(--accent)" : "var(--fg-muted)"} opacity="0.8" />
		<text x="60" y="102" font-size="10" fill="var(--bg)" font-family="var(--font-mono)">n+ Source</text>

		<rect x="240" y="80" width="70" height="35" rx="4" fill={on ? "var(--accent)" : "var(--fg-muted)"} opacity="0.8" />
		<text x="256" y="102" font-size="10" fill="var(--bg)" font-family="var(--font-mono)">n+ Drain</text>

		<!-- channel -->
		{#if on}
			<rect x="120" y="78" width="120" height="6" fill="var(--accent)">
				<title>Kênh dẫn (inversion layer)</title>
			</rect>
			<circle cx="140" cy="81" r="2.5" fill="var(--bg)">
				{#if !reduceMotion}<animate attributeName="cx" values="130;220;130" dur="1.6s" repeatCount="indefinite" />{/if}
			</circle>
			<circle cx="170" cy="81" r="2.5" fill="var(--bg)">
				{#if !reduceMotion}<animate attributeName="cx" values="150;230;150" dur="1.6s" begin="0.5s" repeatCount="indefinite" />{/if}
			</circle>
		{/if}

		<!-- gate oxide -->
		<rect x="120" y="66" width="120" height="10" fill="var(--fg)" opacity="0.5" />
		<text x="140" y="63" font-size="9" fill="var(--fg-muted)" font-family="var(--font-mono)">gate oxide</text>

		<!-- poly gate -->
		<rect x="120" y="40" width="120" height="26" fill={on ? "var(--accent-hover)" : "var(--border)"} />
		<text x="155" y="57" font-size="11" fill={on ? "var(--bg)" : "var(--fg-muted)"} font-family="var(--font-mono)">Gate</text>

		<!-- contacts -->
		<line x1="85" y1="80" x2="85" y2="30" stroke="var(--fg-muted)" />
		<line x1="180" y1="40" x2="180" y2="20" stroke="var(--fg-muted)" />
		<line x1="275" y1="80" x2="275" y2="30" stroke="var(--fg-muted)" />
		<text x="70" y="24" font-size="10" fill="var(--fg-muted)" font-family="var(--font-mono)">S</text>
		<text x="176" y="14" font-size="10" fill="var(--fg-muted)" font-family="var(--font-mono)">G</text>
		<text x="270" y="24" font-size="10" fill="var(--fg-muted)" font-family="var(--font-mono)">D</text>
	</svg>
</WidgetFrame>

<style>
	svg { width: 100%; height: auto; }
</style>
