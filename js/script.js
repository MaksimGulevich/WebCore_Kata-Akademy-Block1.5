
        window.addEventListener('DOMContentLoaded', () => {

          const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
            let swiper;
        
            breakpoint = window.matchMedia(breakpoint);
        
            const enableSwiper = function(className, settings) {
              swiper = new Swiper(className, settings);
        
          
            }
        
            const checker = function() {
              if (breakpoint.matches) {
                return enableSwiper(swiperClass, swiperSettings);
              } else {
                if (swiper !== undefined) swiper.destroy(true, true);
                return;
              }
            };
        
            breakpoint.addEventListener('change', checker);
            checker();
          }
        
          const someFunc = (instance) => {
            if (instance) {
              instance.on('slideChange', function (e) {
                console.log('*** mySwiper.activeIndex', instance.activeIndex);
              });
            }
          };
        
          resizableSwiper(
            '(max-width: 767.99px)',
            '.swiper', {
              direction: 'horizontal',
              loop: true,
              pagination: {
              el: '.swiper-pagination',
              },
               slidesPerView: 'auto',
            },
            someFunc
          );
        });

        let brandsList = document.querySelector('.brands');
        let swiperWripperItem = brandsList.querySelector('.swiper-wrapper');
        let buttonItem = brandsList.querySelector('.brands__button');
        let buttonImage = brandsList.querySelector('.brands__img');
        let buttonSpan = brandsList.querySelector('.brands__span');

        let buttonClickOpenClose = function(){
        buttonItem.addEventListener('click', function() {
          if (swiperWripperItem.classList.contains('swiper-wrapper')){
            swiperWripperItem.classList.add('swiper-wrapper_height--auto');
            swiperWripperItem.classList.remove('swiper-wrapper');
            buttonSpan.textContent = 'Скрыть'
            buttonImage.src = './img/icon/expand1.svg';
            console.log('Кнопка открыть работает');
          }else{
            swiperWripperItem.classList.add('swiper-wrapper');
            swiperWripperItem.classList.remove('swiper-wrapper_height--auto');
            buttonImage.src = './img/icon/expand.svg';
            buttonSpan.textContent = 'Показать все'
            console.log('Кнопка скрыть работает');
          }
        })
      };
      
      buttonClickOpenClose();

      
     