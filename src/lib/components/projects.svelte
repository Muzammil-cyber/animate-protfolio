<script lang="ts">
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	import Project from './project.svelte';

	const Cards: ProjectType[] = [
		{
			id: '1',
			title: 'Some Title',
			name: 'Some Name',
			description: [
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas rem cupiditate iure provident quia sapiente aliquid ducimus, distinctio id enim aliquam ratione asperiores in exercitationem minus perspiciatis, porro eum sunt.',
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas rem cupiditate iure provident quia sapiente aliquid ducimus, distinctio id enim aliquam ratione asperiores in exercitationem minus perspiciatis, porro eum sunt.'
			],
			link: 'https://www.google.com',
			linkText: 'Enter Website',
			image: 'https://via.placeholder.com/150'
		},
		{
			id: '2',
			title: 'Some Title',
			name: 'Some Name',
			description: [
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas rem cupiditate iure provident quia sapiente aliquid ducimus, distinctio id enim aliquam ratione asperiores in exercitationem minus perspiciatis, porro eum sunt.',
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas rem cupiditate iure provident quia sapiente aliquid ducimus, distinctio id enim aliquam ratione asperiores in exercitationem minus perspiciatis, porro eum sunt.'
			],
			link: 'https://www.google.com',
			linkText: 'Discover Website',
			image: 'https://via.placeholder.com/150'
		}
	];

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
	<div class="min-h-screen">
		<div class="flex flex-col items-center justify-center gap-8">
			{#each Cards as data (data.id)}
				<Project {data} />
			{/each}
		</div>
	</div>
</section>
