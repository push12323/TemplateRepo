/**
 * @author prashant.raut
 */
createMyBookScreen();

function createMyBookScreen()
{
    console.log("createMyBookScreen"); 
    $("#appContainer").append("<div id='myBookCont'/>");
    $("#myBookCont").css("height", "100%");
    $("#myBookCont").css("color", "white");
    //$('#myBookCont').css('textShadow','black 1px 1px 1px');
    $('#myBookCont').css('textAlign','center');
    $("#myBookCont").append("<div id='formCont' style='display:inline-block; width:930px; height:590px;'/>");
	
	
	$("#formCont").append("<div class='swiper-container swiper-scroll-container' />");
    $(".swiper-container").append("<div class='swiper-wrapper' />");
    $(".swiper-wrapper").append("<div class='swiper-slide slide-one'><div class='book-container'>	<div class='book-info'><div class='book-cover'><img src='assets/images/theme1/book1_stage1.png' onClick='onBookClick()' /></div><div class='book-content'><h3>Interactive Science</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt mi vel lectus sodales consequat. Quisque vitae ipsum lacus, et molestie erat. Ut rhoncus nisl in nisl bibendum non commodo ligula semper. Aenean erat nunc, ultricies eget bibendum nec, tincidunt ut risus. Etiam scelerisque, massa a fringilla aliquam, libero quam viverra justo, quis consectetur orci dui sit amet metus. </p></div><div class='book-ratings'><div id='book-1'></div></div></div>	<div class='book-info slide-disable'><div class='book-cover'><img src='assets/images/theme1/book2_stage2.png' /></div><div class='book-content'><h3>Asian Brand Strategy</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt mi vel lectus sodales consequat. Quisque vitae ipsum lacus, et molestie erat. Ut rhoncus nisl in nisl bibendum non commodo ligula semper. Aenean erat nunc, ultricies eget bibendum nec, tincidunt ut risus. Etiam scelerisque, massa a fringilla aliquam, libero quam viverra justo, quis consectetur orci dui sit amet metus.</p></div><div class='book-ratings-disable'><div id='book-2'></div></div></div>		<div class='book-info slide-disable'><div class='book-cover'><img src='assets/images/theme1/book3_stage2.png' /></div><div class='book-content'><h3>Mathematical Linguistics</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt mi vel lectus sodales consequat. Quisque vitae ipsum lacus, et molestie erat. Ut rhoncus nisl in nisl bibendum non commodo ligula semper. Aenean erat nunc, ultricies eget bibendum nec, tincidunt ut risus. Etiam scelerisque, massa a fringilla aliquam, libero quam viverra justo, quis consectetur orci dui sit amet metus.</p></div><div class='book-ratings-disable'><div id='book-3'></div></div></div>		<div class='book-info slide-disable'><div class='book-cover'><img src='assets/images/theme1/book4_stage2.png' /></div><div class='book-content'><h3>Maps and Geography</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt mi vel lectus sodales consequat. Quisque vitae ipsum lacus, et molestie erat. Ut rhoncus nisl in nisl bibendum non commodo ligula semper. Aenean erat nunc, ultricies eget bibendum nec, tincidunt ut risus. Etiam scelerisque, massa a fringilla aliquam, libero quam viverra justo, quis consectetur orci dui sit amet metus.</p></div><div class='book-ratings-disable'><div id='book-4'></div></div></div>		<div class='book-info slide-disable'><div class='book-cover'><img src='assets/images/theme1/book1_stage2.png' /></div><div class='book-content'><h3>Interactive Science</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt mi vel lectus sodales consequat. Quisque vitae ipsum lacus, et molestie erat. Ut rhoncus nisl in nisl bibendum non commodo ligula semper. Aenean erat nunc, ultricies eget bibendum nec, tincidunt ut risus. Etiam scelerisque, massa a fringilla aliquam, libero quam viverra justo, quis consectetur orci dui sit amet metus.</p></div><div class='book-ratings-disable'><div id='book-5'></div></div></div>		<div class='book-info slide-disable'><div class='book-cover'><img src='assets/images/theme1/book2_stage2.png' /></div><div class='book-content'><h3>Interactive Science</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt mi vel lectus sodales consequat. Quisque vitae ipsum lacus, et molestie erat. Ut rhoncus nisl in nisl bibendum non commodo ligula semper. Aenean erat nunc, ultricies eget bibendum nec, tincidunt ut risus. Etiam scelerisque, massa a fringilla aliquam, libero quam viverra justo, quis consectetur orci dui sit amet metus.</p></div><div class='book-ratings-disable'><div id='book-6'></div></div></div>		<div class='book-info slide-disable'><div class='book-cover'><img src='assets/images/theme1/book3_stage2.png' /></div><div class='book-content'><h3>Mathematical Linguistics</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt mi vel lectus sodales consequat. Quisque vitae ipsum lacus, et molestie erat. Ut rhoncus nisl in nisl bibendum non commodo ligula semper. Aenean erat nunc, ultricies eget bibendum nec, tincidunt ut risus. Etiam scelerisque, massa a fringilla aliquam, libero quam viverra justo, quis consectetur orci dui sit amet metus.</p></div><div class='book-ratings-disable' ><div id='book-7'></div></div></div>		<div class='book-info slide-disable'><div class='book-cover'><img src='assets/images/theme1/book4_stage2.png' /></div><div class='book-content'><h3>Maps and Geography</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt mi vel lectus sodales consequat. Quisque vitae ipsum lacus, et molestie erat. Ut rhoncus nisl in nisl bibendum non commodo ligula semper. Aenean erat nunc, ultricies eget bibendum nec, tincidunt ut risus. Etiam scelerisque, massa a fringilla aliquam, libero quam viverra justo, quis consectetur orci dui sit amet metus.</p></div><div class='book-ratings-disable'><div id='book-8'></div></div></div>		</div></div>");
	
	<!-- Scrollbar: -->
    $("#formCont").append("<div class='swiper-scrollbar' />");
         
	
	/*var swiper = new Swiper('.swiper-container', {
	
		slidesPerSlide : 4,
	   
		//Scrollbar:
		scrollbar: {
			container : '.swiper-scrollbar',
			draggable : true,
			hide: false
		}
	})*/
	
	/* Scroll container: */
	var sScroll = $('.swiper-scroll-container').swiper({
		scrollContainer : true,
		scrollbar : {
			container : '.swiper-scrollbar'	
		}
	})
	
	// JavaScript For Ratings
	$(document).ready(function() {
	  
	  $('#book-1').ratings(5).bind('ratingchanged', function(event, data) {
		$('#book-rating-1').text(data.rating);
	  });
	  
	  
	  	/*$('.book-ratings').each(function(index, element) {
			if(index == 0)
			{
				console.log($(element).children([0]));
				$(element).children([0]).ratings(5).bind('ratingchanged', function(event, data) {
					$('#book-rating-1').text(data.rating);
				});
			}
        	
			console.log($(element).children([0]).ratings);
			 
    	});*/
	});
	  
	
   // $("#formCont").append("<img style='margin:5px;' onClick='onBookClick()' src='assets/business.jpg'/>");
   // $("#formCont").append("<img style='margin:5px; opacity:0.2;' src='assets/cheese.jpg'/>");
   // $("#formCont").append("<img style='margin:5px; opacity:0.2;' src='assets/chicken.jpg'/>");
    //$("#formCont").append("<img style='margin:5px; opacity:0.2;' src='assets/destiny.jpg'/>");
   // $("#formCont").append("<img style='margin:5px; opacity:0.2;' src='assets/megaliving.jpg'/>");
   // $("#formCont").append("<img style='margin:5px; opacity:0.2;' src='assets/rdpd.jpg'/>");
    $("#myBookCont").trigger("create");
}

function onBookClick()
{
    gotoBookMenu();
}
