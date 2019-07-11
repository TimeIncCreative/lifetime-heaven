$(document).ready(function(e) {
		var centerscroll = function(){
			$('#ltig-wrapper .ltig-wrapper-scroll').scrollLeft( ($('#ltig-wrapper .ltig-wrapper-inner').width() - $('#ltig-wrapper .ltig-wrapper-scroll').width()) / 2);
		}
		centerscroll();	
		
		function loopNext(){
			$('#ltig-wrapper .ltig-wrapper-scroll, #ltig-wrapper .ltig-overlay-bar').stop().animate({scrollLeft:'+=20'}, 60, 'linear', loopNext);
		}
		
		function loopPrev(){
			$('#ltig-wrapper .ltig-wrapper-scroll, #ltig-wrapper .ltig-overlay-bar').stop().animate({scrollLeft:'-=20'}, 60, 'linear', loopPrev);
		}
		
		function stop(){
			$('#ltig-wrapper .ltig-wrapper-scroll, #ltig-wrapper .ltig-overlay-bar').stop();
		}
		
		$('#ltig-wrapper .ltig-right-wrapper-arrow').hover(function () {
		   loopNext();
		},function () {
		   stop();
		});
		
		$('#ltig-wrapper .ltig-left-wrapper-arrow').hover(function () {
		   loopPrev();
		},function () {
		   stop();
		});
		
		function isTouchDevice(){
			return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
		}	
	
		if(isTouchDevice()===true) {
			jQuery('body').addClass('touch-devices-body')
		}	
		
		$(window).on('load resize', function(){
			if(isTouchDevice()===false){
				centerscroll();				
			}
		})	
		
		$('#ltig-wrapper .ltig-start-overlay .intro-start-overlay .ltig-btn').click(function(e) {
            e.preventDefault();
			$('#ltig-wrapper .ltig-start-overlay').fadeOut();
			if($('#ltig-wrapper').width() < 1280){
				$('#ltig-wrapper .ltig-left-wrapper-arrow, #ltig-wrapper .ltig-right-wrapper-arrow').css({'display': 'block'});
			}else{
				$('#ltig-wrapper .ltig-left-wrapper-arrow, #ltig-wrapper .ltig-right-wrapper-arrow').css({'display': 'none'});
			}
        });
		
        $('#ltig-wrapper #ltig-content-part .people-list li a, #ltig-wrapper #ltig-content-part .lead-tile a').click(function(e) {
			e.preventDefault();
			$('#ltig-wrapper .ltig-overlay-bar .overlay-style').removeClass('active');
            $('#ltig-wrapper .ltig-overlay-bar').fadeIn();
			$('#ltig-wrapper .ltig-overlay-bar .overlay-style[data-value='+$(this).attr('data-value')+']').addClass('active');			
        });
		
		$('#ltig-wrapper .ltig-overlay-bar ul li a, #ltig-wrapper .ltig-overlay-bar .top-tile a').click(function(e) {
			e.preventDefault();
            $('#ltig-wrapper .ltig-overlay-bar .overlay-style').removeClass('active');
			$('#ltig-wrapper .ltig-overlay-bar .overlay-style[data-value='+$(this).attr('data-value')+']').addClass('active');
        });
		
		$('#ltig-wrapper .ltig-overlay-bar .ltig-overlay-close').click(function(e) {
            e.preventDefault();
			 $('#ltig-wrapper .ltig-overlay-bar').fadeOut();
        });
		
		 $('.ltig-mobile-slider').slick({
		  arrows: false,
		  dots: true,
		  infinite: false,
		  initialSlide: 2,					  
		  responsive: [
			{
				breakpoint: 9999,
				settings: "unslick"
			},
			{
				breakpoint: 767,								 
			}
		]
		});
		
		var heightchange = function(){
			$('#ltig-wrapper .ltig-wrapper-inner').css({'height': 'auto'});
			$('#ltig-wrapper .ltig-wrapper-inner').css({'height': $(window).innerHeight()});
		}
		
		heightchange();
		
		$(window).on('resize', function() {
			$('.ltig-mobile-slider').slick('resize');
			heightchange();
		});
		
    });