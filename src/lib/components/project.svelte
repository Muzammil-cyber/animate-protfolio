<script lang="ts">
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import 'swiper/css';
	export let data: ProjectType;
	const { description, title, name, link = '', linkText = 'Enter Website', image } = data;

	onMount(() => {
		const projectSwiper = new Swiper('.project-swiper', {
			speed: 1500,
			slidesPerView: 1.1,
			spaceBetween: 40
		});

		return () => {
			projectSwiper.destroy(true, true);
		};
	});
</script>

<div class="swiper project-swiper">
	<div class="swiper-wrapper">
		<div class="swiper-slide">
			<img src={image} alt={name} class="h-full w-auto rounded-sm object-cover" />
		</div>
		<div class="swiper-slide">
			<h3 class="text-6xl">{title}</h3>
			<div class="flex gap-4">
				{#each description as para}
					<p class="text-lg">{para}</p>
				{/each}
			</div>
			<a href={link} target="_blank" rel="noopener noreferrer" class="btn mt-auto">
				{linkText}
			</a>
		</div>
	</div>
</div>

<style lang="postcss">
	.project-swiper {
		@apply h-[500px] max-h-screen w-full;
		.swiper-wrapper {
			.swiper-slide {
				@apply flex h-auto flex-col gap-4 rounded border border-secondary-background p-8;
			}
		}
	}
</style>
