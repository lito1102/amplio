// FIXED HEADER/STICKY HEADER
const fixedHeader = document.querySelector('.fixed-header');
const height = fixedHeader.offsetTop;

window.addEventListener('scroll', function () {
	if (window.pageYOffset > height) {
		fixedHeader.classList.add('fixed');
	} else {
		fixedHeader.classList.remove('fixed');
	}
});

// MOBILE NAVIGATION FUNCIONALITY.
const openNavBtn = document.querySelector('#openNavBtn');
const bodyScroll = document.querySelector('body');
const siteMobileNav = document.querySelector('.site-mobile-nav');
const closeNavBtn = document.querySelector('#closeNavBtn');

openNavBtn.addEventListener('click', () => {
	siteMobileNav.classList.add('site-mobile-nav__display');
	bodyScroll.classList.add('scroll-y');
});

closeNavBtn.addEventListener('click', () => {
	siteMobileNav.classList.remove('site-mobile-nav__display');
	bodyScroll.classList.remove('scroll-y');
});

// HERO SECTION ANIMATION
const tl = gsap.timeline({ defaults: { ease: 'power4.inOut', duration: 2 } });

tl.to('h1.hero__heading', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2 });
tl.to('p.hero__text', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0 }, '-=1');
tl.to('.site-cta-wrapper', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0 }, '-=1');

// SINGLE PRODUCT SECTION ANIMATION
const productTl = gsap.timeline();

productTl.fromTo('.single-product__grid-item', { y: 100, opacity: 0 }, { y: 0, duration: 1, opacity: 1, stagger: 0.5 });

let homeController = new ScrollMagic.Controller();
const singleProductSection = document.querySelector('.single-product');

let twoScene = new ScrollMagic.Scene({
	triggerElement: '.single-product__grid-parent',
	triggerHook: 1,
	duration: 0,
	offset: 100,
	reverse: false,
})
	.setTween(productTl)
	// .addIndicators()
	.addTo(homeController);

// FEATURE 1 ANIMATION
const featureTl = gsap.timeline();

featureTl.fromTo('.product-info__content', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 });

const featureSection = document.querySelector('.product-info__content');

const featureScene = new ScrollMagic.Scene({
	triggerElement: '.product-info',
	triggerHook: 0.7,
	duration: 0,
	offset: 100,
	reverse: false,
})
	.setTween(featureTl)
	// .addIndicators()
	.addTo(homeController);

// OVERLAPING SECTION
const overlapTl = gsap.timeline();

overlapTl.fromTo('.overlap-animate', { y: 100, opacity: 0 }, { y: 0, duration: 1, opacity: 1, stagger: 0.6 });

const overlapSection = new ScrollMagic.Scene({
	triggerElement: '.overlap__item',
	triggerHook: 1,
	duration: 0,
	offset: 150,
	reverse: false,
})
	.setTween(overlapTl)
	// .addIndicators()
	.addTo(homeController);

// TWO GRID COLLECTION ANIMATION
const twoCollectionTl = gsap.timeline();

twoCollectionTl.fromTo('.two-column-grid__image-wrapper', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 });

const twoCollectionSection = new ScrollMagic.Scene({
	triggerElement: '.two-column-grid__image-wrapper',
	triggerHook: 0.9,
	duration: 0,
	offset: 100,
	reverse: false,
})
	.setTween(twoCollectionTl)
	// .addIndicators()
	.addTo(homeController);

// PROMOTION SECTION
const promotionTl = gsap.timeline({ defaults: { ease: 'power4.inOut', duration: 2.2 } });

promotionTl.to('.promotional-banner__content-data h1', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2 });
promotionTl.to('.promotional-banner__content-data p', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0 }, '-=1');
promotionTl.to('.promo-cta-animate', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0 }, '-=1');

const promotionSection = new ScrollMagic.Scene({
	triggerElement: '.promotional-banner__wrapper',
	triggerHook: 1,
	duration: 0,
	offset: 100,
	reverse: false,
})
	.setTween(promotionTl)
	// .addIndicators()
	.addTo(homeController);

// MEGAMENU ANIMATION
const itemAnimate = document.querySelector('.megamenu-animate');
const megamenu = document.querySelector('.megamenu');

let megamenuTl = gsap.timeline();

megamenuTl.paused(true);
megamenuTl.fromTo('.megamenu-grid-column-animate', { y: 30, opacity: 0 }, { y: 0, duration: 1, opacity: 1, stagger: 0.2 });

itemAnimate.addEventListener('mouseover', () => {
	megamenuTl.play();
});

itemAnimate.addEventListener('mouseleave', () => {
	megamenuTl.reverse(0.7);
});
