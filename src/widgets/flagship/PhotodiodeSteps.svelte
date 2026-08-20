<script lang="ts">
	import WidgetFrame from "../ui/WidgetFrame.svelte";
	import StepControls from "../ui/StepControls.svelte";

	let step = 0;
	const labels = [
		"1. Photon chiếu tới",
		"2. Hấp thụ, sinh cặp e⁻/lỗ trống",
		"3. Điện trường tách hạt tải",
		"4. Dòng quang điện ra mạch ngoài",
	];
	const captions = [
		"Ánh sáng (photon) đi tới bề mặt photodiode, xuyên qua lớp p tới vùng cạn kiệt.",
		"Photon có năng lượng ≥ band gap Si truyền năng lượng cho electron, sinh ra một cặp electron–lỗ trống.",
		"Điện trường nội tại trong vùng cạn kiệt đẩy electron về phía n, lỗ trống về phía p.",
		"Electron và lỗ trống di chuyển ra 2 cực tạo thành dòng quang điện (photocurrent) đọc được bởi mạch.",
	];
</script>

<WidgetFrame title="Photodiode biến ánh sáng thành dòng điện" description="Xem từng bước hạt tải sinh ra và di chuyển." caption={captions[step]}>
	<svg viewBox="0 0 360 170" role="img" aria-label="Nguyên lý hoạt động photodiode">
		<rect x="20" y="30" width="150" height="100" fill="var(--bg-elevated)" stroke="var(--border)" />
		<rect x="170" y="30" width="150" height="100" fill="var(--bg)" stroke="var(--border)" />
		<rect x="160" y="30" width="20" height="100" fill="var(--accent-bg)" />

		<text x="70" y="145" font-size="10" fill="var(--fg-muted)" font-family="var(--font-mono)">p-type</text>
		<text x="250" y="145" font-size="10" fill="var(--fg-muted)" font-family="var(--font-mono)">n-type</text>
		<text x="150" y="20" font-size="9" fill="var(--accent)" font-family="var(--font-mono)" text-anchor="middle">vùng cạn kiệt</text>

		{#if step === 0}
			<g>
				{#each [0, 1, 2] as i}
					<line x1={90 + i * 20} y1="0" x2={100 + i * 20} y2="28" stroke="var(--accent-2)" stroke-width="2" />
					<polygon points={`${100 + i * 20},28 ${96 + i * 20},20 ${104 + i * 20},20`} fill="var(--accent-2)" />
				{/each}
			</g>
		{/if}

		{#if step >= 1}
			<circle cx="170" cy="75" r="5" fill="var(--accent)" />
			<text x="170" y="60" text-anchor="middle" font-size="9" fill="var(--accent)" font-family="var(--font-mono)">e⁻</text>
			<circle cx="170" cy="95" r="5" fill="none" stroke="var(--fg)" stroke-width="2" />
			<text x="170" y="115" text-anchor="middle" font-size="9" fill="var(--fg)" font-family="var(--font-mono)">h⁺</text>
		{/if}

		{#if step === 2}
			<line x1="180" y1="75" x2="230" y2="75" stroke="var(--accent)" stroke-width="1.5" marker-end="url(#arrow)" />
			<line x1="160" y1="95" x2="110" y2="95" stroke="var(--fg)" stroke-width="1.5" marker-end="url(#arrow2)" />
		{/if}

		{#if step === 3}
			<circle cx="280" cy="75" r="5" fill="var(--accent)" />
			<circle cx="60" cy="95" r="5" fill="none" stroke="var(--fg)" stroke-width="2" />
			<path d="M320,75 L340,75 L340,150 L20,150 L20,95 L40,95" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="3 2" />
			<text x="180" y="163" text-anchor="middle" font-size="9" fill="var(--accent)" font-family="var(--font-mono)">dòng quang điện (Iph)</text>
		{/if}

		<defs>
			<marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--accent)" /></marker>
			<marker id="arrow2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--fg)" /></marker>
		</defs>
	</svg>

	<StepControls bind:step total={4} {labels} autoplay />
</WidgetFrame>

<style>
	svg { width: 100%; height: auto; }
</style>
