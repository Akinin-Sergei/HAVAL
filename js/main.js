let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let dd = document.getElementById('dd');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');


let endDate = '07/15/2026 00:00:00';// формвт даты мм/дд/гггг


let x = setInterval(function () {
    let now = new Date(endDate).getTime();
    let countDown = new Date().getTime();
    let distance = now - countDown;

    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / (1000));

    days.innerHTML = d + "<br><span>Дней</span>";
    hours.innerHTML = h + "<br><span>Часов</span>";
    minutes.innerHTML = m + "<br><span>Минут</span>";
    seconds.innerHTML = s + "<br><span>Секунд</span>";

    dd.style.strokeDashoffset = 310 - (310 * d) / 365;
    hh.style.strokeDashoffset = 310 - (310 * h) / 24;
    mm.style.strokeDashoffset = 310 - (310 * m) / 60;
    ss.style.strokeDashoffset = 310 - (310 * s) / 60;
});


$('.dot').on('click', function (e) {
    e.preventDefault();

    $('.dot').removeClass('active');
    $('.car__img').removeClass('active');

    $(this).addClass('active');
    $($(this).attr('href')).addClass('active');
});


$('.dots').on('click', function (e) {
    e.preventDefault();

    $('.dots').removeClass('active');
    $('.car__imgs').removeClass('active');

    $(this).addClass('active');
    $($(this).attr('href')).addClass('active');
});


if ($('.input__phone').length !== 0) {
    $('.input__phone').mask('+7 (999) 999-99-99');
};


$('.button__poppup').click(function () {
    $('.form__poppup').fadeIn();
    $('body').toggleClass('lock');
    return false;

});
$('.close__btn').click(function () {
    $(this).parents('.form__poppup').fadeOut();
    $('body').toggleClass('lock');
    return false;
});


$('.burger__menu-icon').click(function () {
    $('.burger__menu-body').toggleClass('open');
    $('.burger__menu-bg').toggleClass('open');
    $('body').toggleClass('lock');
    return false;
});