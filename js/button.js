let brandsList = document.querySelector('.brands');
let swiperWripperItem = brandsList.querySelector('.brands_swiper-wrapper');
let buttonItem = brandsList.querySelector('.brands__button');
let buttonImage = brandsList.querySelector('.brands__img');
let buttonSpan = brandsList.querySelector('.brands__span');

let buttonClickOpenClose = function(){
buttonItem.addEventListener('click', function() {
  if (swiperWripperItem.classList.contains('brands_swiper-wrapper')){
    swiperWripperItem.classList.add('swiper-wrapper_height--auto');
    swiperWripperItem.classList.remove('brands_swiper-wrapper');
    buttonSpan.textContent = 'Скрыть'
    buttonImage.src = './img/icon/expand1.svg';
    console.log('Кнопка открыть работает');
  }else{
    swiperWripperItem.classList.add('brands_swiper-wrapper');
    swiperWripperItem.classList.remove('swiper-wrapper_height--auto');
    buttonImage.src = './img/icon/expand.svg';
    buttonSpan.textContent = 'Показать все'
    console.log('Кнопка скрыть работает');
  }
})
}

buttonClickOpenClose();

