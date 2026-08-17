<script lang="ts">
	export let label: string;
	export let min: number;
	export let max: number;
	export let step: number = 1;
	export let value: number;
	export let unit: string = "";
	export let format: (v: number) => string = (v) => `${v}${unit}`;
</script>

<label class="slider-field mono">
	<span class="slider-label">{label}</span>
	<span class="slider-value">{format(value)}</span>
	<input type="range" {min} {max} {step} bind:value class="slider-input" aria-label={label} />
</label>

<style>
	.slider-field {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 0 var(--space-3);
		font-size: 0.85rem;
	}
	.slider-label { color: var(--fg-muted); }
	.slider-value { color: var(--accent); font-weight: 600; text-align: right; }
	.slider-input {
		grid-column: 1 / -1;
		width: 100%;
		accent-color: var(--accent);
		background: transparent;
	}
</style>
