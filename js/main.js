 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

$(document).ready(function($) {

	"use strict";

	$(window).stellar({
    responsive: false,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });

	// Scrollax
  $.Scrollax();


	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    dots: false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1,
	        nav:false
	      },
	      600:{
	        items:1,
	        nav:false
	      },
	      1000:{
	        items:1,
	        nav:false
	      }
	    }
	   });
	};
	carousel();

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var burgerMenu = function() {

		$('.js-colorlib-nav-toggle').on('click', function(event) {
			event.preventDefault();
			var $this = $(this);
			if( $('body').hasClass('menu-show') ) {
				$('body').removeClass('menu-show');
				$('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
			} else {
				$('body').addClass('menu-show');
				setTimeout(function(){
					$('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
				}, 900);
			}
		})
	};
	burgerMenu();
	
	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

   
   $('#appointment_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});
	$('#appointment_time').timepicker();

	var pageProgress = function() {
		$(window).scroll(function() {
	    var wintop = $(window).scrollTop(), docheight = $('.page').height(), winheight = $(window).height();
	    // console.log(wintop);
	    var totalScroll = (wintop/(docheight-winheight))*100;
	    // console.log("total scroll" + totalScroll);
	    $(".KW_progressBar").css("width",totalScroll+"%");
	  });

	};
	pageProgress();


});

// my js


//   <p class="hero-subtitle" id="hello">Hello I'm</p>
  document.addEventListener('DOMContentLoaded', () => {

	setTimeout(() => {
		document.getElementById('hello').style.opacity = 1;
	  }, 400);
  });

//   <h1 class="hero-title"id="Name">Anirudh Arora</h1>
  document.addEventListener('DOMContentLoaded', () => {

	setTimeout(() => {
		document.getElementById('Name').style.opacity = 1;
	  }, 700);
  });

//   <div class="ab hero-subtitle" id="line">I'm from Indore, Madhya Pradesh</div>
document.addEventListener('DOMContentLoaded', () => {
	setTimeout(() => {
	  document.getElementById('line').style.opacity = 1;
	}, 1000);

  });

//   <a href="#portfolio" class="hero-button" id="button">Explore My Work</a>
  document.addEventListener('DOMContentLoaded', () => {

	setTimeout(() => {
		document.getElementById('button').style.opacity = 1;
	  }, 1300);
  });


// --- Scroll Progress Bar Logic ---
// This code should be added at the end of your js/main.js file

(function() {
    // 1. Select the progress bar element from the HTML
    const progressBar = document.querySelector('.KW_progressBar');

    // 2. Check if the element actually exists on the page
    if (!progressBar) {
        return; // If not, do nothing
    }

    // 3. Create the function to update the bar's width
    const updateProgressBar = () => {
        // Get the total height of the page
        const scrollHeight = document.documentElement.scrollHeight;
        // Get the height of the visible window
        const clientHeight = document.documentElement.clientHeight;
        // Get the current vertical scroll position
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        // Calculate the percentage of the page that has been scrolled
        // We subtract clientHeight from scrollHeight to get the maximum scrollable distance
        const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

        // 4. Set the width of the progress bar to the calculated percentage
        progressBar.style.width = scrollPercentage + '%';
    };

    // 5. Add an event listener to the window
    // This will call our updateProgressBar function every time the user scrolls
    window.addEventListener('scroll', updateProgressBar);
})();

  
