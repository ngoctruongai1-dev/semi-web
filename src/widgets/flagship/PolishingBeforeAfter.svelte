<script lang="ts">
	import WidgetFrame from "../ui/WidgetFrame.svelte";
	import ToggleTabs from "../ui/ToggleTabs.svelte";

	let state = "before";
	$: after = state === "after";

	// đường biên dạng bề mặt gồ ghề (before) — minh họa, không phải số liệu thật
	const roughPoints = "20,90 40,70 55,85 70,60 90,88 105,65 125,90 140,68 160,85 180,62 200,90 220,70 240,88 260,65 280,90 300,72 320,90";
	const smoothPoints = "20,80 320,80";
</script>

<WidgetFrame
	title="Bề mặt wafer trước và sau đánh bóng"
	description="So sánh độ nhám bề mặt trước và sau công đoạn đánh bóng (polishing)."
	caption={after
		? "Sau đánh bóng: bề mặt gần như phẳng tuyệt đối, độ nhám ở mức nanomet — minh họa, không phải số đo thật."
		: "Trước đánh bóng (sau mài): bề mặt còn gồ ghề ở mức micromet do vết cắt/mài để lại — minh họa, không phải số đo thật."}
>
	<ToggleTabs options={[{ value: "before", label: "Trước (sau mài)" }, { value: "after", label: "Sau đánh bóng" }]} bind:value={state} />

	<svg viewBox="0 0 340 130" role="img" aria-label="So sánh bề mặt trước/sau đánh bóng">
		<rect x="20" y="90" width="300" height="30" fill="var(--bg-elevated)" stroke="var(--border)" />
		<polyline points={after ? smoothPoints : roughPoints} fill="none" stroke="var(--accent)" stroke-width="2.5" />
		<text x="20" y="115" font-size="9" fill="var(--fg-muted)" font-family="var(--font-mono)">substrate</text>
		<text x="170" y="30" text-anchor="middle" font-size="11" fill="var(--accent)" font-family="var(--font-mono)">
			{after ? "Ra ≈ dưới 1 nm (minh họa)" : "Ra ≈ hàng trăm nm (minh họa)"}
		</text>
	</svg>
</WidgetFrame>

<style>
	svg { width: 100%; height: auto; }
</style>
