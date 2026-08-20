<script lang="ts">
	import WidgetFrame from "../ui/WidgetFrame.svelte";
	import StepControls from "../ui/StepControls.svelte";

	let step = 0;
	const labels = ["1. Phủ resist", "2. Chiếu sáng qua mask", "3. Hiện hình (develop)", "4. Khắc (etch)", "5. Bóc resist"];
	const captions = [
		"Photoresist được phủ đều lên lớp màng mỏng (thin film) nằm trên substrate bằng spin coating.",
		"Ánh sáng UV chiếu qua mask có khe hở — vùng resist bị chiếu sáng thay đổi độ hòa tan.",
		"Developer hòa tan phần resist đã phơi sáng (giả định positive resist), để lại resist theo đúng hình mạch.",
		"Etch loại bỏ lớp màng mỏng ở những vùng không còn resist che phủ, để lộ substrate.",
		"Resist còn lại được bóc bỏ (ashing/strip), để lại lớp màng mỏng đã được khắc đúng hình mạch mong muốn.",
	];

	const substrateY = 110, substrateH = 20;
	const filmY = 95, filmH = 15;
	const resistY = 78, resistH = 17;
	// vùng bị chiếu sáng / etch (khe giữa)
	const gapX = 150, gapW = 60;
</script>

<WidgetFrame title="Quy trình Photolithography" description="Bấm ▶ hoặc dùng nút để xem từng bước." caption={captions[step]}>
	<svg viewBox="0 0 360 150" role="img" aria-label="Các bước photolithography">
		<!-- substrate luôn có -->
		<rect x="20" y={substrateY} width="320" height={substrateH} fill="var(--bg-elevated)" stroke="var(--border)" />
		<text x="30" y={substrateY + substrateH + 14} font-size="9" fill="var(--fg-muted)" font-family="var(--font-mono)">substrate</text>

		<!-- thin film: nguyên vẹn ở bước 0-2, bị khắc ở bước 3-4 -->
		{#if step < 3}
			<rect x="20" y={filmY} width="320" height={filmH} fill="var(--fg-muted)" opacity="0.55" />
		{:else}
			<rect x="20" y={filmY} width={gapX - 20} height={filmH} fill="var(--fg-muted)" opacity="0.55" />
			<rect x={gapX + gapW} y={filmY} width={340 - gapX - gapW} height={filmH} fill="var(--fg-muted)" opacity="0.55" />
		{/if}
		<text x="30" y={filmY - 4} font-size="9" fill="var(--fg-muted)" font-family="var(--font-mono)">thin film</text>

		<!-- resist -->
		{#if step === 0}
			<rect x="20" y={resistY} width="320" height={resistH} fill="var(--accent-2)" opacity="0.7" />
		{:else if step === 1}
			<rect x="20" y={resistY} width="320" height={resistH} fill="var(--accent-2)" opacity="0.7" />
			<rect x={gapX} y={resistY} width={gapW} height={resistH} fill="var(--accent-2)" opacity="0.25" />
			<!-- mask -->
			<rect x="20" y="45" width="320" height="8" fill="var(--fg)" opacity="0.6" />
			<rect x={gapX} y="45" width={gapW} height="8" fill="var(--bg)" />
			<text x="30" y="42" font-size="9" fill="var(--fg-muted)" font-family="var(--font-mono)">mask</text>
			{#each [gapX + 10, gapX + gapW / 2, gapX + gapW - 10] as x}
				<line x1={x} y1="20" x2={x} y2="45" stroke="var(--accent-2)" stroke-width="1.5" />
			{/each}
		{:else if step >= 2 && step < 4}
			<rect x="20" y={resistY} width={gapX - 20} height={resistH} fill="var(--accent-2)" opacity="0.7" />
			<rect x={gapX + gapW} y={resistY} width={340 - gapX - gapW} height={resistH} fill="var(--accent-2)" opacity="0.7" />
		{/if}

		{#if step === 4}
			<text x="180" y="70" text-anchor="middle" font-size="9" fill="var(--accent)" font-family="var(--font-mono)">resist đã được bóc</text>
		{/if}
	</svg>

	<StepControls bind:step total={5} {labels} autoplay />
</WidgetFrame>

<style>
	svg { width: 100%; height: auto; }
</style>
