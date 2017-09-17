$(function(){
	$(".btn").click(function(){
		var n = $(this).html() - 1;

		var img_move = -420 * n;

		$(".imgs").css("transform","translateX(" + img_move + "px)");
	});

	$(window).resize(function(){
		if($(window).width() > 420){
			$(".imgs").css("transform","translateX(0)");
		}
	});
});