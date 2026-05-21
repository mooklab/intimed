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
    }
})

new Swiper(productThumbSwiper, {
    slidesPerView: 4,
    spaceBetween: 10
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