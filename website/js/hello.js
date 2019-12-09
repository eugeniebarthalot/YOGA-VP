$(document).ready(function() {
	$(".animated").click(function(){
		$(this).animate({right: '20px'}, "slow");
		$(this).css("background-color",'red');
		
		if ($(this).css('background-color') == "rgb(255, 0, 0)") {
			$(this).fadeOut(2000);
		}
	}); 
});