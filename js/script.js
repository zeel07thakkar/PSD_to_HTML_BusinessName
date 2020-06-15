jQuery(document).ready(function($) {

// header transparent-------------------------------------------		
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    // $(".header_menu").css("background" , "#343a40");
	    $(".header_menu").css({
	    	background: '#343a40',
	    	transition: 'background-color 0.5s linear'
	    });

	    $('.back-to-top').fadeIn('slow');  
	    	// back-to-top
	  }

	  else{
		  $(".header_menu").css("background" , "transparent");  

		  $('.back-to-top').fadeOut('slow');
		  	// back-to-top	
	  }
  });

// portfolio img gallery--------------------------------------------
  $('.img_gallery_nav .img_gallery_link').click(function(event) {
  	event.preventDefault();
  	var my_class=$(this).addClass('blue_bg').addClass('white').removeClass('text-dark');
  	$('.img_gallery_link').not(my_class).removeClass('blue_bg').addClass('text-dark');
  });



$(".img_gallery_link").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.portfolio-item').fadeTo('slow',1);
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".portfolio-item").not('.'+value).fadeOut('1000');
            $('.portfolio-item').filter('.'+value).fadeIn('1000');
            
        }
    });


    //AOS animation------------------------------------------------------
    AOS.init();



     //----------add active class on page load-------
    var path=window.location.href;

                $(".navbar .nav-link").each(function(){

                    if (this.href == path) {
                        var active=$(this).addClass('active_link');
                        $('.navbar .nav-link').not(active).removeClass('active_link');
                    }
                });


    //----------add active class on nav-link click-------
    
                $(".navbar .nav-link").click(function(event) {
                      var active=$(this).addClass('active_link');
                        $('.navbar .nav-link').not(active).removeClass('active_link');
                });

});


$(window).on("load", function(e) {

    // console.log($(window).scrollTop());
    if($(window).scrollTop()>300)
    {
        $('.header_menu').addClass('add_header');
    }

  });