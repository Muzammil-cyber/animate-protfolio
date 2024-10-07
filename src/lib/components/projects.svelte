<script lang="ts">
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const ctx = gsap.context(() => {
			const t1 = gsap.timeline({
				defaults: {
					duration: 1
				},
				scrollTrigger: {
					trigger: 'h2',
					start: '-=20% center',
					end: 'bottom+=10% center',
					scrub: 1
					// markers: true
				}
			});

			t1.to('h2 .to-left', {
				marginRight: '1.5em'
			})
				.to(
					'h2 .to-right',
					{
						marginLeft: '1.5em'
					},
					'-=1'
				)
				.from(
					'.para',
					{
						y: 20,
						opacity: 0
					},
					'-=0.5'
				);
		}, '.project-section');

		return () => {
			ctx.revert();
		};
	});
</script>

<section class="project-section">
	<div class="relative flex h-screen flex-col items-center justify-center gap-8">
		<p class="text-xl uppercase text-muted">UP NEXT</p>
		<h2 class="flex flex-col text-9xl uppercase">
			<span class="to-left">Selected</span><span class="to-right">Projects</span>
		</h2>
		<p class="para absolute bottom-36 left-4 text-xl uppercase text-muted">
			Showcase of diverse works reflecting <br /> a signature approach to design and development
		</p>
	</div>
	<div class="min-h-screen"></div>
</section>
