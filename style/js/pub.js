$(function(){
    FastClick.attach(document.body); 
    $('.header_top').click(function(){
        $('.header_nav').slideToggle();
    })
    $('.header_nav li').each(function(a,b){
        $(this).click(function(){
            $(this).children('.li_btn').toggleClass('li_btn_bg');
            $(this).children('.li_add_ul').slideToggle();
        })
        
    })

    $('.go_top').click(function(){
        $(window).scrollTop(0)
    })
    $('.weixin').click(function(){
        $('.ircode').slideDown();
    })    
    $('.email').click(function(){
        $('.email_bot').slideDown();
    })
    $('.btn_close').click(function(){
        $('.ircode').slideUp()
        $('.email_bot').slideUp();
    }) 
})