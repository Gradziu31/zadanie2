            $("#button").click(function () {
                $(".nav").toggleClass("navi");
                $("#button").toggleClass("button1").filter('[class=""]').removeAttr('class');
            });

            $(window).scroll(function () {
                // declare variable
                var topPos = $(this).scrollTop();

                // if user scrolls down - show scroll to top button
                if (topPos > 100) {
                    $("header").addClass("slide_down");
                    $(".contnet").addClass("slide");
                } else {
                    $("header").removeClass("slide_down");
                    $("header .contnet").removeClass("slide");
                }

            });
  



$(document).ready(function() { 
 
	$('a[href^="#"]').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
 
});