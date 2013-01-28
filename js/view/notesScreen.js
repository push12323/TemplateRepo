// JavaScript Document
pCreateNotesScreen();
function pCreateNotesScreen()
{	var notesAbailable = false;
	$("#appContainer").empty();
	$("#appContainer").append("<div id='pPageSwipe'/>");
    $("#pPageSwipe").css("height", "100%");
    $('#pPageSwipe').css('textAlign','center');
    $("#pPageSwipe").append("<div id='pSwiper' style='display:inline-block; width:930px;'/>");
	
	$("#pSwiper").append("<div class='swiper-container' />");
	$(".swiper-container").css("height", "500px");
	$(".swiper-container").css("width", "100%");
    $(".swiper-container").append("<div class='swiper-wrapper' />");
	for(var i in notes["bookId"])
	{
		console.log(notes["bookId"][i]);
		notesAbailable = true;
		$(".swiper-wrapper").append("<div class='swiper-slide'><div style='float:left; width:170px; height:450px; background-color:white; margin-top:2px; border: 1px solid black; border-radius:15px; padding:20px; color:black; word-wrap:break-word;'>"+i+" : "+notes["bookId"][i].toString()+"</div></div>");
	}
	$(".swiper-slide").css("width", "100%");
	previousSlide = 0;
	pNotesSwiper = new Swiper('.swiper-container', {
		slidesPerSlide : 4
	})
	if(!notesAbailable)
	{
		$("#pPageSwipe").empty();
		$("#pPageSwipe").append("<div>No notes available!</div>");
	}
}