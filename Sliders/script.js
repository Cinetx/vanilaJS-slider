window.addEventListener('DOMContentLoaded', function() {
    'use strict';

// Slider

let slideIndex = 1,
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

showSlides(slideIndex);

function showSlides(n) {

    //Если слайды закончились переходим на первый
    if(n > slides.length) {
        slideIndex = 1;
    }

    // Если стоим на первом слайде, присваеваем последний слайд
    if(n < 1) {
        slideIndex = slides.length;
    }

    //перебираем все слайды и точки и скрываем их
    slides.forEach((item) => item.style.display = 'none');
    dots.forEach((item) => item.classList.remove('dot-active'));

    // находим самый первый слайд и показываем его.
    // Тк slideIndex = 1, а у js счет с 0, мы вычитаем 1.
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
};

// функция переключения слайдера.
// она запускает функцию показа слайда
// В которую передается аргумент из коллбек функций при клике на кнопку (prev или next)
function plusSlides(n) {
    showSlides(slideIndex += n);
};

// функция перехода на слайд при клике на точки
function currentSlide(n) {
    showSlides(slideIndex = n);
};

prev.addEventListener('click', function() {
    plusSlides(-1);
});

next.addEventListener('click', function() {
    plusSlides(1);
});

// делегирование событий при клики на точку
dotsWrap.addEventListener('click', function(event) {
    //Находим все точки
    for( let i = 0; i < dots.length + 1; i++ ) {
        // Если у кликабельного элемента есть класс dot И кликабельный элемент соответсвует найденой точки.
        // Запускаем вывод слайда 
        if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
            currentSlide(i);
        }
    }
});
});

