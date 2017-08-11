$(function(){
	 var p=0,t=0;    
		$(window).scroll(function(e){  
			            p = $(this).scrollTop();  			              
			            if(t<=p){  
			        		$('.anli_part').each(function(){
			        				if(($(this).children('.anli_left').offset().top-$(window).scrollTop()) <= 30){
			        						$(this).children('.anli_left').addClass('fix');
			        				if($(this).find('.anli_last').offset().top+181-$(window).scrollTop() <= 185){
			        					$(this).children('.anli_left').removeClass('fix').addClass('fix2');
			        				}

			        			}
			        				
			        		})
			            }  
			              
			            else{//上滚  
			        		$('.anli_part').each(function(){
			        				if(($(this).children('.anli_left').offset().top-$(window).scrollTop()) <= 30){
			        					$(this).children('.anli_left').removeClass('fix2').addClass('fix');
			        				// if($(this).find('.wwl').offset().top+300-$(window).scrollTop() <= 300){
			        				// 	$(this).children('.left').removeClass('fix').addClass('fix2');
			        				// }
			        				if($(this).find('.anli_first').offset().top >= $(this).children('.anli_left').offset().top){
			        						$(this).children('.anli_left').removeClass('fix');			        						
			        					}
			        			}
			        				
			        		})
			            }  
			            setTimeout(function(){t = p;},0);         
			    }); 
})