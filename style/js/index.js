$(function(){
    FastClick.attach(document.body);  
    var mySwiper = new Swiper ('.swiper-container-top', {
        direction: 'horizontal',
        loop: true,
        autoplay:2000,
        // 如果需要分页器
        pagination: '.swiper-pagination',
      
      })    
    var mySwiper_mid = new Swiper ('.swiper-container-mid', {
        direction: 'horizontal',
        loop: true,
        // 如果需要分页器
            // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
      })    
    var mySwiper_bot = new Swiper ('.swiper-container-bot', {
	    direction: 'horizontal',
	    loop: true,
	    // 如果需要分页器
            // 如果需要前进后退按钮
        // scrollbar: '.swiper-scrollbar',
	  })  
})
