<script lang="ts">
	import { onDestroy } from "svelte";

	export let step: number; // 0-based, bindable
	export let total: number;
	export let labels: string[] | undefined = undefined;
	export let autoplay: boolean = false;
	export let intervalMs: number = 1800;

	let playing = false;
	let timer: ReturnType<typeof setInterval> | undefined;

	function prefersReducedMotion() {
		return typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
	}

	function goTo(n: number) {
		step = Math.max(0, Math.min(total - 1, n));
	}
	function next() {
		step = (step + 1) % total;
	}
	function prev() {
		step = (step - 1 + total) % total;
	}

	function togglePlay() {
		if (prefersReducedMotion()) return;
		playing = !playing;
		if (playing) {
			timer = setInterval(next, intervalMs);
		} else if (timer) {
			clearInterval(timer);
		}
	}

	onDestroy(() => {
		if (timer) clearInterval(timer);
	});
</script>

<div class="step-controls mono">
	<div class="step-buttons">
		<button type="button" on:click={prev} aria-label="Bước trước">←</button>
		<span class="step-indicator">
			{labels?.[step] ?? `Bước ${step + 1}/${total}`}
		</span>
		<button type="button" on:click={next} aria-label="Bước tiếp">→</button>
		{#if autoplay}
			<button type="button" class="play-btn" on:click={togglePlay} aria-pressed={playing}>
				{playing ? "⏸" : "▶"}
			</button>
		{/if}
	</div>
	<div class="step-dots" role="tablist">
		{#each Array(total) as _, i}
			<button
				type="button"
				class:active={i === step}
				aria-label={`Đến bước ${i + 1}`}
				on:click={() => goTo(i)}
			></button>
		{/each}
	</div>
</div>

<style>
	.step-controls { display: flex; flex-direction: column; gap: var(--space-2); font-size: 0.85rem; }
	.step-buttons { display: flex; align-items: center; gap: var(--space-3); }
	.step-buttons button {
		background: var(--bg);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		color: var(--fg);
		width: 2rem;
		height: 2rem;
		cursor: pointer;
	}
	.step-buttons button:hover { border-color: var(--accent); color: var(--accent); }
	.step-indicator { color: var(--fg-muted); min-width: 8rem; text-align: center; }
	.play-btn { margin-left: auto; }

	.step-dots { display: flex; gap: var(--space-1); }
	.step-dots button {
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 50%;
		border: 1px solid var(--border);
		background: transparent;
		padding: 0;
		cursor: pointer;
	}
	.step-dots button.active { background: var(--accent); border-color: var(--accent); }
</style>
