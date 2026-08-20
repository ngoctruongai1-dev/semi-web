<script lang="ts">
	export let question: string;
	export let options: { label: string; correct?: boolean }[];
	export let explanation: string | undefined = undefined;

	let picked: number | null = null;

	function pick(i: number) {
		if (picked !== null) return;
		picked = i;
	}

	function reset() {
		picked = null;
	}
</script>

<div class="quick-check reticle-frame">
	<p class="mono label">kiểm tra nhanh</p>
	<p class="question">{question}</p>

	<div class="options">
		{#each options as opt, i (opt.label)}
			<button
				type="button"
				class="option"
				class:correct={picked !== null && opt.correct}
				class:wrong={picked === i && !opt.correct}
				disabled={picked !== null}
				on:click={() => pick(i)}
			>
				{opt.label}
			</button>
		{/each}
	</div>

	{#if picked !== null}
		<p class="feedback mono" class:is-correct={options[picked].correct}>
			{options[picked].correct ? "✓ Chính xác." : "✗ Chưa đúng."}
			{#if explanation}<span class="explain">{explanation}</span>{/if}
		</p>
		<button type="button" class="retry mono" on:click={reset}>Thử lại</button>
	{/if}
</div>

<style>
	.quick-check {
		margin: var(--space-6) 0;
		border-radius: var(--radius);
		background: var(--bg-elevated);
		padding: var(--space-4);
	}
	.label {
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--accent-2);
		margin: 0 0 var(--space-2);
	}
	.question { font-weight: 600; margin: 0 0 var(--space-3); }

	.options {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}
	.option {
		text-align: left;
		border: 1px solid var(--border);
		border-radius: var(--radius);
		background: transparent;
		color: var(--fg);
		padding: var(--space-2) var(--space-3);
		font-family: var(--font-sans);
		font-size: 0.95rem;
		cursor: pointer;
		transition: border-color 0.15s ease, background 0.15s ease;
	}
	.option:hover:not(:disabled) { border-color: var(--accent); background: var(--bg-hover); }
	.option:disabled { cursor: default; }
	.option.correct { border-color: var(--success); background: var(--success-bg); }
	.option.wrong { border-color: var(--danger); background: rgba(239, 68, 68, 0.1); }

	.feedback {
		margin: var(--space-3) 0 0;
		font-size: 0.85rem;
		color: var(--danger);
	}
	.feedback.is-correct { color: var(--success); }
	.explain { display: block; margin-top: var(--space-1); color: var(--fg-muted); font-family: var(--font-sans); }

	.retry {
		margin-top: var(--space-2);
		background: transparent;
		border: none;
		color: var(--fg-muted);
		font-size: 0.8rem;
		cursor: pointer;
		padding: 0;
	}
	.retry:hover { color: var(--accent); text-decoration: underline; }
</style>
