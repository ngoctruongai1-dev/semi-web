<script lang="ts">
	import WidgetFrame from "../ui/WidgetFrame.svelte";
	import ToggleTabs from "../ui/ToggleTabs.svelte";

	type GateKey = "NOT" | "AND" | "OR" | "NAND" | "NOR";
	const gates: { key: GateKey; label: string; needsB: boolean; fn: (a: number, b: number) => number }[] = [
		{ key: "NOT", label: "NOT", needsB: false, fn: (a) => (a ? 0 : 1) },
		{ key: "AND", label: "AND", needsB: true, fn: (a, b) => (a && b ? 1 : 0) },
		{ key: "OR", label: "OR", needsB: true, fn: (a, b) => (a || b ? 1 : 0) },
		{ key: "NAND", label: "NAND", needsB: true, fn: (a, b) => (a && b ? 0 : 1) },
		{ key: "NOR", label: "NOR", needsB: true, fn: (a, b) => (a || b ? 0 : 1) },
	];

	let gateKey: GateKey = "AND";
	let aVal = "0";
	let bVal = "0";

	$: gate = gates.find((g) => g.key === gateKey)!;
	$: a = Number(aVal);
	$: b = Number(bVal);
	$: output = gate.needsB ? gate.fn(a, b) : gate.fn(a, 0);
	$: rows = gate.needsB ? [[0, 0], [0, 1], [1, 0], [1, 1]] : [[0], [1]];
</script>

<WidgetFrame title="Giả lập cổng logic" description="Chọn cổng, bật/tắt input để xem output thay đổi trực tiếp.">
	<ToggleTabs options={gates.map((g) => ({ value: g.key, label: g.label }))} bind:value={gateKey} />

	<div class="io-row mono">
		<div class="io-group">
			<span>A</span>
			<ToggleTabs options={[{ value: "0", label: "0" }, { value: "1", label: "1" }]} bind:value={aVal} />
		</div>
		{#if gate.needsB}
			<div class="io-group">
				<span>B</span>
				<ToggleTabs options={[{ value: "0", label: "0" }, { value: "1", label: "1" }]} bind:value={bVal} />
			</div>
		{/if}
		<div class="io-group output">
			<span>Y</span>
			<span class="output-value" class:on={output === 1}>{output}</span>
		</div>
	</div>

	<svg viewBox="0 0 260 100" role="img" aria-label={`Sơ đồ cổng ${gate.label}`}>
		<line x1="10" y1={gate.needsB ? 35 : 50} x2="70" y2={gate.needsB ? 35 : 50} stroke={a ? "var(--accent)" : "var(--fg-muted)"} stroke-width="2" />
		{#if gate.needsB}
			<line x1="10" y1="65" x2="70" y2="65" stroke={b ? "var(--accent)" : "var(--fg-muted)"} stroke-width="2" />
		{/if}
		<rect x="70" y="20" width="80" height="60" rx="6" fill="var(--bg-elevated)" stroke="var(--border)" />
		<text x="110" y="55" text-anchor="middle" font-size="12" fill="var(--fg)" font-family="var(--font-mono)">{gate.label}</text>
		<line x1="150" y1="50" x2="210" y2="50" stroke={output ? "var(--accent)" : "var(--fg-muted)"} stroke-width="2" />
		<circle cx="215" cy="50" r="6" fill={output ? "var(--accent)" : "var(--bg)"} stroke="var(--fg-muted)" />
		<text x="230" y="54" font-size="11" fill="var(--fg-muted)" font-family="var(--font-mono)">Y</text>
	</svg>

	<table class="truth-table mono">
		<thead>
			<tr>
				<th>A</th>
				{#if gate.needsB}<th>B</th>{/if}
				<th>Y</th>
			</tr>
		</thead>
		<tbody>
			{#each rows as row}
				{@const rowA = row[0]}
				{@const rowB = gate.needsB ? row[1] : 0}
				{@const rowY = gate.needsB ? gate.fn(rowA, rowB) : gate.fn(rowA, 0)}
				<tr class:current={rowA === a && (!gate.needsB || rowB === b)}>
					<td>{rowA}</td>
					{#if gate.needsB}<td>{rowB}</td>{/if}
					<td>{rowY}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</WidgetFrame>

<style>
	.io-row { display: flex; gap: var(--space-6); align-items: center; flex-wrap: wrap; font-size: 0.85rem; }
	.io-group { display: flex; align-items: center; gap: var(--space-2); }
	.output-value {
		display: inline-flex; align-items: center; justify-content: center;
		width: 1.8rem; height: 1.8rem; border-radius: 50%;
		border: 1px solid var(--border); color: var(--fg-muted);
	}
	.output-value.on { border-color: var(--accent); color: var(--accent); background: var(--accent-bg); }
	svg { width: 100%; max-width: 320px; height: auto; }

	.truth-table { border-collapse: collapse; font-size: 0.82rem; width: auto; }
	.truth-table th, .truth-table td { border: 1px solid var(--border); padding: 4px 12px; text-align: center; }
	.truth-table tr.current { background: var(--accent-bg); color: var(--accent); }
</style>
