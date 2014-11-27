// JavaScript Document

// 
// 	Check width 
//	- move nav out of hero for mobile (allows for mobile nav positioning relative under img)
//	- add mobile class in html (this is a fallback - being used for max-width and overflow-x: hidden;)
//
function checkWidth(init)
{
    //If browser resized, check width again */
    if ($(window).width() < 800) {	
		$('.portfolioAlpha').prepend("<div class='newbox'>I'm new box by prepend</div>");	
		$('.portfolioAlpha').each(function() {
		// each function splits the class into its indivifual divs (see below)
		// we want the middle one as it's our technology name
		//.technology '.insert tech name' .clearfix
		// this prevents ALL images going to ALL sections
  			var classSpliter = $(this).attr('class').split(" ")[1]; // number in [ ] is the class ... 0 is the first, 1 is the second, 2 is the third
			//alert(classSpliter);
			$('.'+classSpliter+' > section.portfolioAlpha Img').insertBefore('.'+classSpliter+' > section.portfolioAlpha');
			
		});
		
    }
    else {
        if (!init) {
			//Add nav inside hero - position absolute
			$('.newbox').remove();
			$('.portfolioAlpha').each(function() {
		// each function splits the class into its indivifual divs (see below)
		// we want the middle one as it's our technology name
		//.technology '.insert tech name' .clearfix
		// this prevents ALL images going to ALL sections
  			var classSpliter = $(this).attr('class').split(" ")[1]; // number in [ ] is the class ... 0 is the first, 1 is the second, 2 is the third
			//alert(classSpliter);
			$('.'+classSpliter+' > section.portfolioAlpha Img').insertBefore('.'+classSpliter+' > section.portfolioAlpha');
			
		});
        }
    }
}

$(document).ready(function() {
    checkWidth(true);

    $(window).resize(function() {
        checkWidth(false);
    });
});