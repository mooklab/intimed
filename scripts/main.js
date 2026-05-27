import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs'
import { Tabs } from "./tabs.js"


const indexMainSwiper = document.querySelector('section.main div.swiper')
const reviewSwiper = document.querySelector('section.reviews div.swiper')
const productSwiper = document.querySelector('section.products div.swiper')
const commonWhereSwipers = document.querySelectorAll('section.where div.swiper')
const questionAccordions = document.querySelectorAll('section.faq div.accordion')
const productAccordions = document.querySelectorAll('section.product div.accordion')
const tabsSections = document.querySelectorAll('div.tabs')
const productPreviewSwiper = document.querySelector('section.product div.swiper.previews')
const productThumbSwiper = document.querySelector('section.product div.swiper.thumbs')
const bannerSwiper = document.querySelector('section.banners div.swiper')


new Swiper(indexMainSwiper, {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: indexMainSwiper?.closest('section').querySelector('div.swiper-pagination'),
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2
        },
        960: {
            slidesPerView: 3
        }
    },
    on: {
        init: function () {
            this.el.classList.add('show')
        }
    }
})

new Swiper(reviewSwiper, {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: reviewSwiper?.closest('section').querySelector('div.swiper-pagination'),
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 'auto'
        },
        960: {
            slidesPerView: 'auto'
        }
    },
    on: {
        init: function () {
            this.el.classList.add('show')
        }
    }
})

new Swiper(productSwiper, {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
        el: productSwiper?.closest('section').querySelector('div.swiper-pagination'),
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 3
        }
    },
    on: {
        init: function () {
            this.el.classList.add('show')
        }
    }
})

new Swiper(productPreviewSwiper, {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: productPreviewSwiper?.closest('section').querySelector('div.swiper-navigation div.arrow:last-child'),
        prevEl: productPreviewSwiper?.closest('section').querySelector('div.swiper-navigation div.arrow:first-child')
    },
    pagination: {
        el: productPreviewSwiper?.closest('section').querySelector('div.swiper-pagination'),
        clickable: true,
    },
    thumbs: {
        swiper: productThumbSwiper
    },
    on: {
        init: function () {
            this.el.classList.add('show')
        }
    }
})

new Swiper(productThumbSwiper, {
    slidesPerView: 4,
    spaceBetween: 10,
    on: {
        init: function () {
            this.el.classList.add('show')
        }
    }
})

new Swiper(bannerSwiper, {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: bannerSwiper?.closest('section').querySelector('div.swiper-navigation div.arrow:last-child'),
        prevEl: bannerSwiper?.closest('section').querySelector('div.swiper-navigation div.arrow:first-child')
    },
    pagination: {
        el: bannerSwiper?.closest('section').querySelector('div.swiper-pagination'),
        clickable: true,
    },
    on: {
        init: function () {
            this.el.classList.add('show')
        }
    }
})

commonWhereSwipers.forEach(swiper => {
    new Swiper(swiper, {
        slidesPerView: 2,
        spaceBetween: 10,
        pagination: {
            el: swiper.nextElementSibling,
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            960: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1280: {
                slidesPerView: 5,
                spaceBetween: 20,
            }
        },
        on: {
            init: function () {
                this.el.classList.add('show')
            }
        }
    })
})




// Табы

tabsSections.forEach(tabSection => {
    const captions = tabSection.querySelectorAll('.tab_caption')
    const contents = tabSection.querySelectorAll('.tab_content')
    new Tabs(tabSection, captions, contents)
})


// Аккордионы

questionAccordions.forEach(accordion => {
    const question = accordion.querySelector('div.question')

    question.addEventListener('click', event => {
        question.parentNode.classList.toggle('open')
    })
})

productAccordions.forEach(accordion => {
    const question = accordion.querySelector('div.title')

    question.addEventListener('click', event => {
        question.parentNode.classList.toggle('open')
    })
})





function createTriggers() {
    const circle = document.querySelector('section.why img.circle')
    const bottle = document.querySelector('section.why img.bottle')
    const description = document.querySelector('section.why div.description')
    const advantages = document.querySelectorAll('section.why div.advantage')
    const leaf_first = document.querySelector('section.why img.leaf.first')
    const leaf_second = document.querySelector('section.why img.leaf.second')

    let timeline = gsap.timeline({
        scrollTrigger: {
            trigger: "section.why",
            start: "center 50%",
            end: "+=3000",
            toggleActions: 'play none none reverse',
            scrub: 2,
            pin: true,
            // markers: true
        }
    });

    gsap.set(description, { opacity: 0 })
    gsap.set(circle, { scale: 0 })
    gsap.set(bottle, { scale: 0.7 })
    gsap.set(leaf_first, { opacity: 0, x: -300 })
    gsap.set(leaf_second, { opacity: 0, x: 300 })

    timeline.to(description, { opacity: 1 })
        .to(bottle, { rotation: '+=20', scale: 1 })
        .to(circle, { scale: 1 }, '<')
        .to(leaf_first, { opacity: 1, x: 0 }, '<')
        .to(leaf_second, { opacity: 1, x: 0 }, '<')

    advantages.forEach(advantage => {
        gsap.set(advantage, { opacity: 0 })
        timeline.to(advantage, { opacity: 1 })
    })
}

function init() {
    ScrollTrigger.getAll().forEach(t => t.kill())
    createTriggers()
    requestAnimationFrame(() => {
        ScrollTrigger.refresh()
    })
}

window.addEventListener("load", () => {
    if (window.innerWidth >= 640) document.fonts?.ready?.then(init) ?? init()
})
window.addEventListener("resize", () => {
    if (window.innerWidth >= 640) document.fonts?.ready?.then(init) ?? init()
})