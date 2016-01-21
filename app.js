$(document).ready(function(){
		$("ul li").click(function(e){
				e.preventDefault();
				var sectionID = e.currentTarget.children[0].hash;

				$('html body').animate({
						scrollTop: $(sectionID).offset().top
				}, 1000);	
		})
})
