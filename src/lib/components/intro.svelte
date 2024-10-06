<script lang="ts">
	import gsap from 'gsap/dist/gsap';
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import 'swiper/css';
	import { Autoplay, EffectCards } from 'swiper/modules';

	onMount(() => {
		const italicChars = gsap.utils.toArray('h1 em');
		gsap.to(italicChars, {
			skewX: '-10deg',
			duration: 1,
			ease: 'power2.in'
		});
		gsap.to('.cards', { rotate: '-10deg', duration: 1, ease: 'power2.in' });
		const introSwiper = new Swiper('.intro-swiper', {
			effect: 'cards',
			loop: true,
			autoplay: {
				delay: 4000
			},
			cardsEffect: {
				perSlideOffset: 30,
				perSlideRotate: 12
			},
			speed: 1500,
			grabCursor: true,
			modules: [EffectCards, Autoplay]
		});
	});
</script>

<section class="relative mt-8">
	<h1
		class=" flex max-h-screen flex-col justify-center font-display font-bold uppercase leading-[0.8] text-orange-50 ~/lg:~text-[12rem]/[30rem]"
	>
		<span class="inline-flex gap-2">T<em class="inline-block not-italic">h</em>e</span>
		<span class="ml-auto inline-flex gap-2"><em class="inline-block not-italic">A</em>rtist</span>
	</h1>
	<div class="left-[35rem] top-20 hidden w-1/2 flex-col gap-4 text-2xl lg:absolute lg:flex">
		<p>
			Welcome to the official website of the artist. Here you can find all the information about the
			artist and his work.
		</p>
		<p>
			Welcome to the official website of the artist. Here you can find all the information about the
			artist and his work.
		</p>
	</div>
	<p class="lg:hidden">
		Welcome to the official website of the artist. Here you can find all the information about the
		artist and his work.
	</p>
	<div
		class="cards absolute max-lg:right-4 max-lg:top-4 max-sm:-top-6 max-sm:right-10 lg:bottom-20 lg:left-32 lg:block"
	>
		<div class="swiper intro-swiper max-lg:w-40">
			<siv class="swiper-wrapper">
				<div class="swiper-slide">
					<img
						src="https://images.unsplash.com/photo-1671955100855-074bf3f3db3c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0aXN0aWN8ZW58MHx8MHx8fDA%3D"
						alt="placeholder"
					/>
				</div>
				<div class="swiper-slide">
					<img
						src="https://media.istockphoto.com/id/2129774773/photo/creative-light-bulb-explodes-with-colorful-paint-and-splashes-on-a-black-background-think.webp?a=1&b=1&s=612x612&w=0&k=20&c=vxyobLJOS7D3CwbDYOLrtrPPG7s14xceFaEXx3pbubY="
						alt="placeholder"
					/>
				</div>
				<div class="swiper-slide">
					<img
						src="https://images.unsplash.com/photo-1622542796254-5b9c46ab0d2f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aXN0aWMlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
						alt="placeholder"
					/>
				</div>
			</siv>
		</div>
	</div>
</section>

<style lang="postcss">
	.intro-swiper {
		width: 100px;
		height: 150px;
		overflow: visible;
		@media screen and (min-width: 1024px) {
			width: 200px;
			height: 300px;
		}
	}
	.swiper-slide {
		@apply overflow-hidden rounded-2xl;
		img {
			@apply h-full w-full object-cover;
		}
	}
</style>
