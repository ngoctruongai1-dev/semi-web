<script lang="ts">
	export let title: string;
	export let description: string | undefined = undefined;
	export let caption: string | undefined = undefined;
</script>

<figure class="widget-frame">
	<figcaption class="widget-header">
		<span class="widget-tag mono">widget</span>
		<h4>{title}</h4>
		{#if description}<p class="widget-desc">{description}</p>{/if}
	</figcaption>

	<div class="widget-body">
		<slot />
	</div>

	{#if caption}<p class="widget-caption mono">{caption}</p>{/if}
</figure>

<style>
	.widget-frame {
		position: relative;
		margin: var(--space-6) 0;
		border: 1px solid var(--border);
		border-radius: var(--radius);
		background: var(--bg-elevated);
		padding: var(--space-4);
		box-shadow: var(--shadow-sm);
	}
	.widget-frame::before,
	.widget-frame::after {
		content: "";
		position: absolute;
		width: 10px;
		height: 10px;
		pointer-events: none;
		opacity: 0.7;
	}
	.widget-frame::before {
		top: -1px;
		left: -1px;
		border-top: 2px solid var(--accent-2);
		border-left: 2px solid var(--accent-2);
	}
	.widget-frame::after {
		bottom: -1px;
		right: -1px;
		border-bottom: 2px solid var(--accent-2);
		border-right: 2px solid var(--accent-2);
	}
	.widget-header { margin: 0 0 var(--space-3); }
	.widget-tag {
		display: inline-block;
		font-size: 0.7rem;
		color: var(--accent-2);
		background: var(--accent-2-bg);
		border-radius: 4px;
		padding: 0.05em 0.5em;
		margin-bottom: var(--space-2);
	}
	.widget-header h4 { margin: 0; font-size: 1rem; }
	.widget-desc { margin: var(--space-1) 0 0; font-size: 0.88rem; color: var(--fg-muted); }
	.widget-body { display: flex; flex-direction: column; gap: var(--space-3); }
	.widget-caption {
		margin: var(--space-3) 0 0;
		font-size: 0.78rem;
		color: var(--fg-muted);
		border-top: 1px solid var(--border);
		padding-top: var(--space-2);
	}
</style>
