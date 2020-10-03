

$(document).ready(function(){
	$('.slider-inner').slick({
		prevArrow: '<button class="slider__inner-btn slider__inner-btnprev"><img src="img/arrow-left.svg" alt=""></button>',
	 	nextArrow: '<button class="slider__inner-btn slider__inner-btnnext"><img src="img/arrow-right.svg" alt=""></button>',
	 	speed: 400,
	 	slidesToShow: 1,
		slidesToScroll: 1,
	
	});
	$('.team-slider__box').slick({
	  	prevArrow: '<button class="team-section__slider-btn team-section__slider-btnprev"><img src="img/arrow-left-violet.svg" alt=""></button>',
	  	nextArrow: '<button class="team-section__slider-btn team-section__slider-btnnext"><img src="img/arrow-right-violet.svg" alt=""></button>',
	  	slidesToShow: 4,
		slidesToScroll: 1,
		infinite: false,
	   	responsive: [
	    	{
		      breakpoint: 1024,
		      settings: {
		      	arrows: false,
		        slidesToShow: 3,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 800,
		      settings: {
		      	arrows: false,
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true,

		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		      	arrows: false,
		      	slidesToScroll: 1,
		      	slidesToShow: 1,
		      	infinite: true,
		      }
		    }
	  	]
	});
	$(".xzoom-xoriginal, .xzoom-gallery").xzoom({
		tint: 'transparent', 
		lensShape: "circle",
		zoomWidth: 200,
		zoomHeight: 200,
		zoomType: 'inner',
		position: 'lens',
	});

	$('.tab').on('click', function(e){
		e.preventDefault();

		$('.tab').removeClass('tab--active');
		$('.tabs-content').removeClass('tabs-content--active');
		$($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

		$(this).addClass('tab--active');	
		$($(this).attr('href')).addClass('tabs-content--active');	


		
	});
	 $('.menu__btn').on('click', function(){
	    $('.menu-mobile__list').slideToggle();
	  });

	


 
  	$(".rate-yo").rateYo({
  		rating: 4,
  		ratedFill: "#f2d800",
  		spacing: "3px",
  		normalFill: "#a0a0a0",
  		

 	});
 	wow = new WOW(
	  {
	  boxClass:     'wow',      // default
	  animateClass: 'animated', // default
	  offset:       0,          // default
	  mobile:       true,       // default
	  live:         true        // default
	}
	)
	wow.init();



});
