/**
 * @author prashant.raut
 */
createBookMenu();

function createBookMenu()
{
    console.log("createhomeScreen"); 
    $("#appContainer").append("<div id='bookMenuCont'/>");
    //$("#bookMenuCont").css("height", "100%");
    //$("#bookMenuCont").css("backgroundColor", "gray");
    $("#bookMenuCont").css("color", "black");
    //$('#bookMenuCont').css('textShadow','black 1px 1px 1px');
    $('#bookMenuCont').css('textAlign','center');
    $("#bookMenuCont").append("<div id='formCont' style='display:inline-block; width:930px; height:580px; padding-left:40px;'/>");
	
	$("#formCont").append("<div class='swiper-container swiper-nested1 swiper-n1' />");
    $(".swiper-container").append("<div class='swiper-wrapper' />");
    $(".swiper-wrapper").append("<div class='swiper-slide slide-one'>	<div class='book-info'><div class='book-cover'><img src='assets/images/theme1/book1_stage2.png' /></div><div class='book-content'><h3>Interactive Science</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt mi vel lectus sodales consequat. Quisque vitae ipsum lacus, et molestie erat. Ut rhoncus nisl in nisl bibendum non commodo ligula semper. Aenean erat nunc, ultricies eget bibendum nec, tincidunt ut risus. Etiam scelerisque, massa a fringilla aliquam, libero quam viverra justo, quis consectetur orci dui sit amet metus. </p></div><div class='book-ratings'><div id='example-2'></div></div></div> 	<div class='book-chapters' style='width:650px; height:580px; margin:0 auto'>		<div class='swiper-container vertical sc5'><div class='swiper-wrapper'><div class='swiper-slide'><div class='dummy-page'>		<div id='collaspible-set' data-role='collapsible-set' data-inset='false'>	<div data-role='collapsible' data-iconpos='right'>   <h3>Ch.1 Sound</h3>   	<div class='study-btn' onclick='onBookMenuContentClick()'><img src='assets/images/theme1/btn_std_time.png'/></div>	<div class='gaming-btn'><img src='assets/images/theme1/btn_game.png'/></div>	<div class='quiz-btn' onclick='onBookMenuQuizClick()'><img src='assets/images/theme1/btn_quiz.png'/></div>		</div>	<div data-role='collapsible' data-iconpos='right'>   <h3>Ch.2 Force and Pressure</h3>   	<div class='study-btn'><img src='assets/images/theme1/btn_std_time.png'/></div>	<div class='gaming-btn'><img src='assets/images/theme1/btn_game.png'/></div>	<div class='quiz-btn'><img src='assets/images/theme1/btn_quiz.png'/></div>		</div>	<div data-role='collapsible' class='ui-disabled' data-iconpos='right'>   <h3>Ch.3 Light</h3>   	<div class='study-btn'><img src='assets/images/theme1/btn_std_time.png'/></div>	<div class='gaming-btn'><img src='assets/images/theme1/btn_game.png'/></div>	<div class='quiz-btn'><img src='assets/images/theme1/btn_quiz.png'/></div>		</div>	<div data-role='collapsible' class='ui-disabled' data-iconpos='right'>   <h3>Ch.4 Velocity</h3>   	<div class='study-btn'><img src='assets/images/theme1/btn_std_time.png'/></div>	<div class='gaming-btn'><img src='assets/images/theme1/btn_game.png'/></div>	<div class='quiz-btn'><img src='assets/images/theme1/btn_quiz.png'/></div>		</div>	<div data-role='collapsible' class='ui-disabled' data-iconpos='right'>   <h3>Ch.3 Light</h3>   	<div class='study-btn'><img src='assets/images/theme1/btn_std_time.png'/></div>	<div class='gaming-btn'><img src='assets/images/theme1/btn_game.png'/></div>	<div class='quiz-btn'><img src='assets/images/theme1/btn_quiz.png'/></div>		</div>	<div data-role='collapsible' class='ui-disabled' data-iconpos='right'>   <h3>Ch.6 Energy Consumption</h3>   	<div class='study-btn'><img src='assets/images/theme1/btn_std_time.png'/></div>	<div class='gaming-btn'><img src='assets/images/theme1/btn_game.png'/></div>	<div class='quiz-btn'><img src='assets/images/theme1/btn_quiz.png'/></div>		</div>	<div data-role='collapsible' class='ui-disabled' data-iconpos='right'>   <h3>Ch.7 Fuel</h3>   	<div class='study-btn'><img src='assets/images/theme1/btn_std_time.png'/></div>	<div class='gaming-btn'><img src='assets/images/theme1/btn_game.png'/></div>	<div class='quiz-btn'><img src='assets/images/theme1/btn_quiz.png'/></div>		</div>	<div data-role='collapsible' class='ui-disabled' data-iconpos='right'>   <h3>Ch.8 Natural Resources</h3>   	<div class='study-btn'><img src='assets/images/theme1/btn_std_time.png'/></div>	<div class='gaming-btn'><img src='assets/images/theme1/btn_game.png'/></div>	<div class='quiz-btn'><img src='assets/images/theme1/btn_quiz.png'/></div>		</div>	<div data-role='collapsible' class='ui-disabled' data-iconpos='right'>   <h3>Ch.9 Pollutions</h3>   	<div class='study-btn'><img src='assets/images/theme1/btn_std_time.png'/></div>	<div class='gaming-btn'><img src='assets/images/theme1/btn_game.png'/></div>	<div class='quiz-btn'><img src='assets/images/theme1/btn_quiz.png'/></div>		</div>	<div data-role='collapsible' class='ui-disabled' data-iconpos='right'>   <h3>Ch.10 Atmosphere</h3>   	<div class='study-btn'><img src='assets/images/theme1/btn_std_time.png'/></div>	<div class='gaming-btn'><img src='assets/images/theme1/btn_game.png'/></div>	<div class='quiz-btn'><img src='assets/images/theme1/btn_quiz.png'/></div>		</div>	 </div>		</div></div></div><div class='swiper-scrollbar sb5'></div></div>		</div>	</div>");	
		<!-- Scrollbar: -->
    //$("#swiper-container").append("<div class='swiper-scrollbar-verticle' />");
	
	$(document).ready(function() {
		
		
	/* Nested Swipers. Vertical Swiper inside of horizontal: 	
	var swiperN1 = $('.swiper-n1').swiper({
		slidesPerSlide : 1,
	});*/
	
	var swiper = new Swiper('.swiper-n1', {
	
		slidesPerSlide : 1,
	   
		
	})
	
	var swiperN2 = new Swiper('.sc5', {		
		scrollContainer:true,
		mode:'vertical',
		//Enable Scrollbar
		scrollbar: {
			container :'.sb5',
			hide: true,
			draggable: true	
		}
	})
	
	  
	  // JavaScript For Ratings
	  $('#example-2').ratings(5).bind('ratingchanged', function(event, data) {
		$('#example-rating-2').text(data.rating);
	  });  
		 
		 var collapsibleHeight = $('#collaspible-set').height();
			console.log(collapsibleHeight);
			 $('.vertical .swiper-wrapper').css("height",(collapsibleHeight))
			 $('.vertical .swiper-slide').css("height",(collapsibleHeight)) 
			 resetSwiper(swiperN2);
		 
		 
		 $("div[data-role='collapsible-set']").bind("collapse",function(){			
			 $('.ui-collapsible-content').on('webkitTransitionEnd moztransitionend transitionend oTransitionEnd', function () {
				
				collapsibleHeight = $('.ui-collapsible-set').height();
				$('.vertical .swiper-wrapper').css("height",(collapsibleHeight))
				$('.vertical .swiper-slide').css("height",(collapsibleHeight)) 
				resetSwiper(swiperN2);
			 });
		 });
		 
		 $("div[data-role='collapsible-set']").bind("expand",function(){
			 $('.ui-collapsible-content').on('webkitTransitionEnd moztransitionend transitionend oTransitionEnd', function () {
				
				collapsibleHeight = $('.ui-collapsible-set').height();
				$('.vertical .swiper-wrapper').css("height",(collapsibleHeight))
				$('.vertical .swiper-slide').css("height",(collapsibleHeight)) 
				resetSwiper(swiperN2);
			 });
		 });	
		 
	  
	});
	
	
	
	$("#bookMenuCont").trigger("create");
	
    
    addEventListeners();
}

function onCollapsibleClick(event)
{
	console.log(event);
}

function resetSwiper(mySwiper)
{
	mySwiper.reInit();
}
function onBookMenuQuizClick()
{
	$("#mainContainer").animate({opacity: 0,marginLeft:1024}, 500,function() {
	refreshContentNavigation("quiz");
	loadQuizEngine();
	$("#mainContainer").animate({opacity: 1,marginLeft:0},  1000);
	});
}
function onBookMenuContentClick()
{
	$("#mainContainer").animate({opacity: 0,marginLeft:1024}, 500,function() {
	refreshContentNavigation("content");
	loadContentEngine();
	$("#mainContainer").animate({opacity: 1,marginLeft:0},  1000);
	});
}
function addEventListeners()
{
    $("#bMenu_content").on("tap", onBmenuCotentTap);
    $("#bMenu_acivity").on("tap", onBmenuActivityTap);
    $("#bMenu_quiz").on("tap", onBmenuQuizTap);
    $("#bMenu_games").on("tap", onBmenuGamesTap);
}

function onBmenuCotentTap()
{
    loadContentEngine();
}

function onBmenuActivityTap()
{
    alert("This page is not ready yet!");
}

function onBmenuQuizTap()
{
    //alert("This page is not ready yet!");
    loadQuizEngine();
}

function onBmenuGamesTap()
{
    alert("This page is not ready yet!");
}

