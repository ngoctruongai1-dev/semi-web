<script lang="ts">
	import WidgetFrame from "../ui/WidgetFrame.svelte";
	import Slider from "../ui/Slider.svelte";
	import ToggleTabs from "../ui/ToggleTabs.svelte";

	let angle = 35; // độ xoay quanh trục Y
	let showBonds = "on";

	// 8 nguyên tử của ô mạng lập phương kim cương (2 mạng FCC lồng nhau, lệch 1/4 đường chéo)
	const fcc1 = [
		[0, 0, 0], [0, 0.5, 0.5], [0.5, 0, 0.5], [0.5, 0.5, 0],
	];
	const fcc2 = [
		[0.25, 0.25, 0.25], [0.25, 0.75, 0.75], [0.75, 0.25, 0.75], [0.75, 0.75, 0.25],
	];

	function center(p: number[]) {
		return [p[0] - 0.5, p[1] - 0.5, p[2] - 0.5];
	}

	const atoms = [
		...fcc1.map((p) => ({ pos: center(p), group: 1 })),
		...fcc2.map((p) => ({ pos: center(p), group: 2 })),
	];

	// tìm liên kết tứ diện: mỗi nguyên tử fcc2 nối với 4 nguyên tử fcc1 gần nhất (kể cả ảnh tuần hoàn)
	function periodicImages(p: number[]) {
		const out: number[][] = [];
		for (const dx of [-1, 0, 1]) for (const dy of [-1, 0, 1]) for (const dz of [-1, 0, 1]) {
			out.push([p[0] + dx, p[1] + dy, p[2] + dz]);
		}
		return out;
	}
	function dist(a: number[], b: number[]) {
		return Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
	}
	const bonds: [number[], number[]][] = [];
	for (const p2 of fcc2.map(center)) {
		const candidates: number[][] = [];
		for (const p1 of fcc1.map(center)) candidates.push(...periodicImages(p1));
		const withDist = candidates.map((c) => ({ c, d: dist(c, p2) })).sort((a, b) => a.d - b.d);
		const bondLen = withDist[0].d;
		for (const cand of withDist) {
			if (Math.abs(cand.d - bondLen) < 0.01 && Math.max(...cand.c.map(Math.abs)) <= 0.76) {
				bonds.push([p2, cand.c]);
			}
		}
	}

	const tiltX = 22 * (Math.PI / 180);

	function project(p: number[], theta: number) {
		const c = Math.cos(theta), s = Math.sin(theta);
		const x1 = p[0] * c + p[2] * s;
		const z1 = -p[0] * s + p[2] * c;
		const ct = Math.cos(tiltX), st = Math.sin(tiltX);
		const y2 = p[1] * ct - z1 * st;
		const z2 = p[1] * st + z1 * ct;
		const scale = 1 / (1 + z2 * 0.35);
		return { x: x1 * 90 * scale + 150, y: y2 * 90 * scale + 100, scale, depth: z2 };
	}

	$: theta = (angle * Math.PI) / 180;
	$: projectedAtoms = atoms
		.map((a) => ({ ...a, p: project(a.pos, theta) }))
		.sort((x, y) => x.p.depth - y.p.depth);
	$: projectedBonds = bonds.map(([a, b]) => ({ a: project(a, theta), b: project(b, theta) }));
</script>

<WidgetFrame
	title="Mạng tinh thể kim cương của Silicon"
	description="Xoay để quan sát 8 nguyên tử trong ô mạng cơ sở và các liên kết tứ diện đặc trưng."
	caption="Mỗi nguyên tử Si liên kết cộng hóa trị với 4 nguyên tử lân cận gần nhất — cấu trúc tứ diện (tetrahedral)."
>
	<Slider label="Góc xoay" min={0} max={360} step={2} bind:value={angle} unit="°" />
	<ToggleTabs options={[{ value: "on", label: "Hiện liên kết" }, { value: "off", label: "Chỉ nguyên tử" }]} bind:value={showBonds} />

	<svg viewBox="0 0 300 200" role="img" aria-label="Mạng tinh thể kim cương xoay được">
		{#if showBonds === "on"}
			{#each projectedBonds as b}
				<line x1={b.a.x} y1={b.a.y} x2={b.b.x} y2={b.b.y} stroke="var(--fg-muted)" stroke-width="1.5" opacity="0.6" />
			{/each}
		{/if}
		{#each projectedAtoms as a}
			<circle cx={a.p.x} cy={a.p.y} r={8 * a.p.scale} fill={a.group === 1 ? "var(--accent)" : "var(--fg)"} opacity={0.55 + 0.45 * a.p.scale} />
		{/each}
	</svg>

	<div class="legend mono">
		<span><i style="background:var(--accent)"></i> Nguyên tử nhóm A (FCC)</span>
		<span><i style="background:var(--fg)"></i> Nguyên tử nhóm B (FCC lệch ¼)</span>
	</div>
</WidgetFrame>

<style>
	svg { width: 100%; height: auto; }
	.legend { display: flex; flex-wrap: wrap; gap: var(--space-4); font-size: 0.78rem; color: var(--fg-muted); }
	.legend i { display: inline-block; width: 0.6rem; height: 0.6rem; border-radius: 50%; margin-right: 4px; }
</style>
