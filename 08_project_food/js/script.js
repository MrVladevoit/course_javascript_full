window.addEventListener("DOMContentLoaded", () => {

    // Start: Tabs --------------------------
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent () {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if(target && target.classList.contains('tabheader__item')) {
            // item = это элемент , i = номер по порядку
            tabs.forEach((item, i) => {
                if(item == target) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
    // End: Tabs --------------------------


    // Start: Timer --------------------------
    const deadline = '2021-09-22';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()), // parse -получим колличество миллисекунд для расчетов
              // Math.floor - округление до целово числа
              days = Math.floor(t / (1000 * 60 * 60 * 24)), // 1000 - колличество мл, 60 * секунд в минуте, 60 минут в часе, 24 часа в сутках
              hours = Math.floor((t / (1000 * 60 * 60) % 24)), // % - делит на число и возвращает остаток от деления
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timerInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timerInterval);
            }
        }
    }

    setClock('.timer', deadline);


    // End: Timer --------------------------

    // Start: Modal --------------------------
    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    modal.addEventListener('click', (e) => {
        if(e.target === modal || e.target.getAttribute('data-close') == "") {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    // Start: Scroll event --------------------------

    // Timer - показывать modal после 5сек, но если пользователь уже открывал модальное окно, то его не нужно показывать снова
    const modalTimerId = setTimeout(openModal, 50000);

    // Scroll
    function showModalByScroll() {
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

    // End: Scroll event --------------------------
    // End: Modal --------------------------

    // Start: Classes for cards --------------------------
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.price = price;
            this.descr = descr;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            
            if(this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    const getResource = async (url) => {
        const result = await fetch(url);

        if(!result.ok) {
            throw new Error(`Could not fetch ${url}, status: ${result.status}`);
        }

        return await result.json();
    };

    // getResource('http://localhost:3000/menu')
    //     .then(data => {
    //         data.forEach(({img, altimg, title, descr, price}) => {
    //            new MenuCard(img, altimg,title, descr, price, '.menu .container', 'menu__item').render(); 
    //         });
    //     });

    // AXIOS
    axios.get('http://localhost:3000/menu')
        .then(data => {
            data.data.forEach(({img, altimg, title, descr, price}) => {
                new MenuCard(img, altimg,title, descr, price, '.menu .container', 'menu__item').render(); 
             });
        });

    // End: Classes for cards --------------------------
    
    // Start: AJAX FORM --------------------------

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжимся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    // async / awaint - всегда используются в паре
    // async - внутри функции будет ансихронный код
    // await - указывает какие данные стоит дождаться 
    const postData = async (url, data) => {
        const result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        return await result.json();
    };

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);


            const formData = new FormData(form);

            // fromEntries -  Из массива массивов - превращает в классический объект
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            // const obj = {a: 23, b: 50};
            // console.log(Object.entries(obj)); // [ [ 'a', 23 ], [ 'b', 50 ] ]

            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
              <div class="modal__close" data-close>&times;</div>
              <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }
    // End: AJAX FORM --------------------------

    // Start: Slider --------------------------

    const slider = document.querySelector('.offer__slider'),
          slides = document.querySelectorAll('.offer__slide'),
          slidesWrapper = document.querySelector('.offer__slider-wrapper'),
          slidesInner = document.querySelector('.offer__slider-inner'),
          slidesWrapperWidth = window.getComputedStyle(slidesWrapper).width,
          buttonPrev = document.querySelector('.offer__slider-prev'),
          buttonNext = document.querySelector('.offer__slider-next'),
          total = document.querySelector('#total'),
          current = document.querySelector('#current');
    
    let slideIntex = 1;
    let offset = 0;

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
        if(slides.length < 10) {
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

        if(slideIntex == slides.length) {
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

        if(slideIntex == 1) {
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
     // End: Slider --------------------------
});