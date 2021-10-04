function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, inner}) {

    let offset = 0;
    let slideIntex = 1;

    const slider = document.querySelector(slide),
        slides = document.querySelectorAll(container),
        slidesWrapper = document.querySelector(wrapper),
        slidesInner = document.querySelector(inner),
        slidesWrapperWidth = window.getComputedStyle(slidesWrapper).width,
        buttonPrev = document.querySelector(prevArrow),
        buttonNext = document.querySelector(nextArrow),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter);

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIntex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIntex;
    }

    // Slides inner
    slidesInner.style.width = 100 * slides.length + '%';
    slidesInner.style.display = 'flex';
    slidesInner.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = slidesWrapperWidth;
    });

    // Slider  and dots
    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
        dots = [];

    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.classList.add('carousel-indicators__dot');
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        dot.setAttribute('data-slide-to', i + 1);

        if (i === 0) {
            dot.style.opacity = 1;
        }

        indicators.append(dot);
        dots.push(dot);
    }

    function dotsInit() {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIntex - 1].style.opacity = '1';
    }

    function changeOffset() {
        slidesInner.style.transform = `translateX(-${offset}px)`;
    }

    function currentInit() {
        if (slides.length < 10) {
            current.textContent = `0${slideIntex}`;
        } else {
            current.textContent = slideIntex;
        }
    }

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    buttonNext.addEventListener('click', () => {

        if (offset == deleteNotDigits(slidesWrapperWidth) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(slidesWrapperWidth);
        }

        changeOffset();

        if (slideIntex == slides.length) {
            slideIntex = 1;
        } else {
            slideIntex++;
        }

        currentInit();
        dotsInit();
    });

    buttonPrev.addEventListener('click', () => {

        if (offset == 0) {
            offset = deleteNotDigits(slidesWrapperWidth) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(slidesWrapperWidth);
        }

        changeOffset();

        if (slideIntex == 1) {
            slideIntex = slides.length;
        } else {
            slideIntex--;
        }

        currentInit();
        dotsInit();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIntex = slideTo;
            offset = deleteNotDigits(slidesWrapperWidth) * (slideTo - 1);

            changeOffset();
            currentInit();
            dotsInit();
        });
    });
}

export default slider;
