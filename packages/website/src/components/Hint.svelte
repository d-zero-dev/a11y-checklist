<script lang="ts">
	import { onMount } from 'svelte';

	export let name: string;
	export let mediaQuery = '(min-width: 36rem)';

	let popover: HTMLElement;
	let dialog: HTMLDialogElement;
	let trigger: HTMLButtonElement;

	onMount(() => {
		switchUsePopover();
		globalThis.matchMedia(mediaQuery).addEventListener('change', switchUsePopover);
	});

	function switchUsePopover() {
		if (usePopover()) {
			trigger.popoverTargetElement = popover;
		} else {
			try {
				trigger.popoverTargetElement = null;
			} catch {
				// ignore
			}
		}
	}

	function usePopover() {
		return (
			globalThis.CSS.supports('inset-area', 'top') &&
			globalThis.matchMedia(mediaQuery).matches
		);
	}

	function onClick() {
		if (!usePopover()) {
			dialog.showModal();
		}
	}
</script>

<div class="flex place-items-center">
	<button
		bind:this={trigger}
		on:click={onClick}
		class="hint-trigger bg-blue-900 text-white rounded-full text-[0.7rem] font-bold m-0 p-0 w-5 h-5 flex items-center justify-center leading-none">
		<span class="sr-only">{name}</span>
		?
	</button>
	<div bind:this={popover} popover="auto" class="hint-popover hint-popover-body">
		<slot />
	</div>
	<dialog bind:this={dialog} class="hint-popover-body">
		<div>
			<slot />
		</div>
		<div>
			<button on:click={() => dialog.close()}>閉じる</button>
		</div>
	</dialog>
</div>

<style>
	.hint-trigger {
		anchor-name: --hint-popover;
	}

	.hint-popover {
		position: fixed;
		position-anchor: --hint-popover;
		inset-area: top;
		position-try: flip-block;
		margin: 0;
	}

	.hint-popover-body {
		@apply bg-slate-50 border-2 p-4 shadow-lg translate-y-[-1rem] rounded font-normal;
	}
</style>
