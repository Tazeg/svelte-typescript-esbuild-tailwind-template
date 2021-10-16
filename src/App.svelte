<script lang="ts">
	export let name: string
</script>

<main class="p-4">
	<h1 class="text-yellow-700 text-2xl pb-2">
		Hello {name} !
	</h1>
	<p>
		Visit the <a class="underline text-blue-600" href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.<br>
		Learn to code with <a class="underline text-blue-600" href="https://www.typescriptlang.org/">TypeScript</a> which adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.<br>
		This project is built by <a class="underline text-blue-600" href="https://esbuild.github.io/">esbuild</a>, the fastest JavaScript bundler in the world.<br>
		Build modern websites with <a class="underline text-blue-600" href="https://tailwindcss.com/">Tailwind CSS</a>.
	</p>
</main>
