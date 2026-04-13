let swiper = null;

function initSwiper() {

    if (window.innerWidth <= 320 && swiper === null) {
        swiper = new Swiper('.swiper', {
            slidesPerView: 1.2,
            spaceBetween: 10,
        
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });
    }

    if (window.innerWidth <= 320 && swiper === null) {
        swiper.destroy(true, false);
        swiper = null;
    }
}

initSwiper();
window.addEventListener('resize', initSwiper);

console.log ('WORK')

const details = document.getElementById('read-more');
const text = details.querySelector('.text');

details.addEventListener('toggle', () => {
    if (details.open) {
        text.textContent = 'Скрыть';
    } else {
        text.textContent = 'Показать всё';
    }
});