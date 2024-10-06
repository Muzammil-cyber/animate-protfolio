<script lang="ts">
	import { onMount } from 'svelte';
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';
	import '../app.css';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	onMount(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
		});

		function raf(time: number) {
			lenis.raf(time);
			ScrollTrigger.update();
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});
</script>

<main class=" container">
	<slot></slot>
</main>
