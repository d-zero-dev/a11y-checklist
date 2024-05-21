<script lang="ts">
	import {
		Tab,
		TabGroup,
		TabList,
		TabPanel,
		TabPanels,
	} from '@rgossiaux/svelte-headlessui';
</script>

<TabGroup>
	<TabList class="flex justify-end relative z-10 mb-[-2px]">
		<Tab
			class="border-2 border-b-0 px-4 py-1 bg-slate-600 text-white aria-selected:bg-white aria-selected:text-inherit"
			>2.0</Tab>
		<Tab
			class="border-2 border-b-0 px-4 py-1 bg-slate-600 text-white aria-selected:bg-white aria-selected:text-inherit"
			>2.1</Tab>
		<Tab
			class="border-2 border-b-0 px-4 py-1 bg-slate-600 text-white aria-selected:bg-white aria-selected:text-inherit"
			>2.2</Tab>
	</TabList>
	<TabPanels class="border-2 p-4 relative z-0 bg-white">
		<TabPanel>
			<slot name="wcag20" />
		</TabPanel>
		<TabPanel>
			<slot name="wcag21" />
		</TabPanel>
		<TabPanel>
			<slot name="wcag22" />
		</TabPanel>
	</TabPanels>
</TabGroup>
