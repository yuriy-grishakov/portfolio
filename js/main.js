// ——— burger

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
var menuLink1 = document.querySelectorAll('.menu__link')[0];
var menuLink2 = document.querySelectorAll('.menu__link')[1];
var menuLink3 = document.querySelectorAll('.menu__link')[2];
var menuLink4 = document.querySelectorAll('.menu__link')[3];

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});

menuLink1.addEventListener('click', function(){
	menuBtn.classList.remove('active');
	menu.classList.remove('active');
});
menuLink2.addEventListener('click', function(){
	menuBtn.classList.remove('active');
	menu.classList.remove('active');
});
menuLink3.addEventListener('click', function(){
	menuBtn.classList.remove('active');
	menu.classList.remove('active');
});
menuLink4.addEventListener('click', function(){
	menuBtn.classList.remove('active');
	menu.classList.remove('active');
});


// ——— якорные ссылки в меню

var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 0.22;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash 
            }
        }
    }, false);
}


// MORE


$(function(){
    $('.work-box_site').slice(0, 12).show();
    $('#loadMore1').on('click', function(e){
        e.preventDefault();
        $('.work-box_site:hidden').slice(0, 9).slideDown();
        if ($('.work-box_site:hidden').length == 0) {$('#loadMore1').hide()}
    });
});


$(function(){
    $('.feedback').slice(0, 9).show();
    $('#loadMore3').on('click', function(e){
        e.preventDefault();
        $('.feedback:hidden').slice(0, 9).slideDown();
        if ($('.feedback:hidden').length == 0) {$('#loadMore3').hide()}
    });
});


// ——— Модальные окна

const btnOpen  = document.getElementById('btn-open');
const btnOpen2  = document.getElementById('btn-open2');
const popUp = document.getElementById('pop-up');
const overlay = document.getElementById('overlay');

btnOpen.addEventListener('click', () => {
    popUp.classList.add('active');
});

btnOpen2.addEventListener('click', () => {
    popUp.classList.add('active');
});

const closePopUp = () => {
    popUp.classList.remove('active');
}

overlay.addEventListener('click', closePopUp);

// ——— feedbacks




