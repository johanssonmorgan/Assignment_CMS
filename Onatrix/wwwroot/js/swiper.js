document.addEventListener('DOMContentLoaded', function () {

    const serviceEl = document.querySelector('.service-swiper');
    if (serviceEl) {
        const serviceSwiper = new Swiper(serviceEl, {
            slidesPerView: 1.2,
            spaceBetween: 16,
            centeredSlides: true,
            centeredSlidesBounds: true,
            slidesOffsetBefore: 32,
            slidesOffsetAfter: 32,

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: (i, className) => `<span class="${className}">${i + 1}</span>`
            },

            navigation: {
                nextEl: '.custom-next',
                prevEl: '.custom-prev'
            },

            breakpoints: {
                768: {
                    slidesPerView: 2,
                    grid: { rows: 2, fill: 'row' },
                    slidesPerGroup: 2,
                    centeredSlides: false,
                    centeredSlidesBounds: false,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 0
                },

                1024: {
                    slidesPerView: 3,
                    grid: { rows: 2, fill: 'row' },
                    slidesPerGroup: 2,
                    centeredSlides: false,
                    centeredSlidesBounds: false,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 0
                }
            },

            observer: true,
            observeParents: true
        });

        window.addEventListener('resize', () => serviceSwiper.update());
    }

    const teamEl = document.querySelector('.team-swiper');
    if (teamEl) {
        const teamSwiper = new Swiper(teamEl, {
            slidesPerView: 1.2,
            spaceBetween: 16,
            centeredSlides: true,
            centeredSlidesBounds: true,
            slidesOffsetBefore: 48,
            slidesOffsetAfter: 48,

            observer: true,
            observeParents: true
        });

        window.addEventListener('resize', () => teamSwiper.update());
    }
});