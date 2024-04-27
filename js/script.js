
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