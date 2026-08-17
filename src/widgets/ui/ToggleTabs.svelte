<script lang="ts">
	export let options: { value: string; label: string }[];
	export let value: string;
</script>

<div class="toggle-tabs mono" role="tablist">
	{#each options as opt (opt.value)}
		<button
			type="button"
			role="tab"
			aria-selected={value === opt.value}
			class:active={value === opt.value}
			on:click={() => (value = opt.value)}
		>
			{opt.label}
		</button>
	{/each}
</div>

<style>
	.toggle-tabs {
		display: inline-flex;
		border: 1px solid var(--border);
		border-radius: var(--radius);
		overflow: hidden;
		width: fit-content;
	}
	.toggle-tabs button {
		background: transparent;
		border: none;
		color: var(--fg-muted);
		padding: 0.4rem 0.9rem;
		font-size: 0.85rem;
		font-family: var(--font-mono);
		cursor: pointer;
	}
	.toggle-tabs button + button { border-left: 1px solid var(--border); }
	.toggle-tabs button.active { background: var(--accent-bg); color: var(--accent); }
	.toggle-tabs button:hover:not(.active) { background: var(--bg-hover); color: var(--fg); }
</style>
