<script lang="ts">
	import gsap from 'gsap/dist/gsap';
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import 'swiper/css';
	import { Autoplay, EffectCards } from 'swiper/modules';

	onMount(() => {
		const ctx = gsap.context(() => {
			const italicChars = gsap.utils.toArray('.heading em');
			gsap.to(italicChars, {
				skewX: '-10deg',
				marginLeft: '0em',
				marginRight: '0.03em',
				duration: 1,
				ease: 'power2.in',
				stagger: 1
			});
			gsap.to('.cards', { rotate: '-10deg', duration: 1, ease: 'power2.in' });
		});

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

		return () => {
			introSwiper.destroy(true, true);
			ctx.revert();
		};
	});
</script>

<section class="relative mt-8">
	<div
		class="heading flex flex-wrap items-center justify-between font-display font-bold uppercase leading-none text-primary ~/lg:~text-[12rem]/[30rem]"
	>
		<span class="-my-12 inline-flex gap-2">T<em class="inline-block not-italic">h</em>e</span>
		<span class="-my-12 inline-flex gap-2">Ma<em class="inline-block not-italic">g</em>i</span>
		<span class="-my-12 inline-flex gap-2">-cal</span>
		<p class="-mt-24 w-1/2 text-left font-body text-2xl normal-case text-secondary">
			I’m Muzammil Loya, an Pakistani web developer working worldwide and challenging boundaries of
			conceptual and innovative digital design.
		</p>
		<span class="w-1/5"></span>
		<span class="-my-12 inline-flex gap-2"
			>A<em class="inline-block not-italic">R</em>ti<em class="inline-block not-italic">s</em
			>t</span
		>
	</div>
	<div class="cards absolute bottom-0 left-4 -z-10">
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
			width: 300px;
			height: 500px;
		}
	}
	.swiper-slide {
		@apply overflow-hidden rounded-2xl;
		img {
			@apply h-full w-full object-cover;
		}
	}
</style>
