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
    $("#myBookCont").append("<div id='formCont' style='display:inline-block; width:1000px;'/>");
	$("#formCont").append("<div class='swiper-container swiper-car' />");
    $(".swiper-car").append("<div class='pagination-car'></div>");
    $(".swiper-car").append("<div class='swiper-wrapper' />");
    $(".swiper-wrapper").append("<div class='swiper-slide slide-one'> <img src='assets/images/theme1/book1_stage1.png'  onClick='onBookClick()' /><div class='book-content'><h3>Interactive Science</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt mi vel lectus sodales consequat. Quisque vitae ipsum lacus, et molestie erat. Ut rhoncus nisl in nisl bibendum non commodo ligula semper. Aenean erat nunc, ultricies eget bibendum nec, tincidunt ut risus. Etiam scelerisque, massa a fringilla aliquam, libero quam viverra justo, quis consectetur orci dui sit amet metus. </p><p>Etiam ut ipsum odio, eget eleifend purus. Nunc sit amet ipsum odio, eu lacinia orci. Nam nulla diam, dignissim sit amet ultrices lacinia, rutrum nec nulla. In blandit diam a justo aliquam hendrerit. Nullam ac justo tellus, nec pharetra dui. Vestibulum posuere risus quis erat laoreet hendrerit. Donec semper elit eget nibh consectetur vulputate. Sed et leo sem, sed hendrerit nunc. Etiam vitae quam orci. Aenean iaculis elit vitae velit aliquet in ornare felis dignissim. Aliquam erat volutpat.</p></div></div>");
	
	$(".swiper-wrapper").append("<div class='swiper-slide slide-two slide-disable'> <img src='assets/images/theme1/book2_stage2.png' /><div class='book-content'><h3>Asian Brand Strategy</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt mi vel lectus sodales consequat. Quisque vitae ipsum lacus, et molestie erat. Ut rhoncus nisl in nisl bibendum non commodo ligula semper. Aenean erat nunc, ultricies eget bibendum nec, tincidunt ut risus. Etiam scelerisque, massa a fringilla aliquam, libero quam viverra justo, quis consectetur orci dui sit amet metus. </p><p>Etiam ut ipsum odio, eget eleifend purus. Nunc sit amet ipsum odio, eu lacinia orci. Nam nulla diam, dignissim sit amet ultrices lacinia, rutrum nec nulla. In blandit diam a justo aliquam hendrerit. Nullam ac justo tellus, nec pharetra dui. Vestibulum posuere risus quis erat laoreet hendrerit. Donec semper elit eget nibh consectetur vulputate. Sed et leo sem, sed hendrerit nunc. Etiam vitae quam orci. Aenean iaculis elit vitae velit aliquet in ornare felis dignissim. Aliquam erat volutpat.</p></div></div>");
	
	$(".swiper-wrapper").append("<div class='swiper-slide slide-three slide-disable'> <img src='assets/images/theme1/book3_stage2.png' /><div class='book-content'><h3>Mathematical Linguistics</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt mi vel lectus sodales consequat. Quisque vitae ipsum lacus, et molestie erat. Ut rhoncus nisl in nisl bibendum non commodo ligula semper. Aenean erat nunc, ultricies eget bibendum nec, tincidunt ut risus. Etiam scelerisque, massa a fringilla aliquam, libero quam viverra justo, quis consectetur orci dui sit amet metus. </p><p>Etiam ut ipsum odio, eget eleifend purus. Nunc sit amet ipsum odio, eu lacinia orci. Nam nulla diam, dignissim sit amet ultrices lacinia, rutrum nec nulla. In blandit diam a justo aliquam hendrerit. Nullam ac justo tellus, nec pharetra dui. Vestibulum posuere risus quis erat laoreet hendrerit. Donec semper elit eget nibh consectetur vulputate. Sed et leo sem, sed hendrerit nunc. Etiam vitae quam orci. Aenean iaculis elit vitae velit aliquet in ornare felis dignissim. Aliquam erat volutpat.</p></div></div>");
	
	$(".swiper-wrapper").append("<div class='swiper-slide slide-four slide-disable'> <img src='assets/images/theme1/book4_stage2.png' /><div class='book-content'><h3>Maps and Geography</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt mi vel lectus sodales consequat. Quisque vitae ipsum lacus, et molestie erat. Ut rhoncus nisl in nisl bibendum non commodo ligula semper. Aenean erat nunc, ultricies eget bibendum nec, tincidunt ut risus. Etiam scelerisque, massa a fringilla aliquam, libero quam viverra justo, quis consectetur orci dui sit amet metus. </p><p>Etiam ut ipsum odio, eget eleifend purus. Nunc sit amet ipsum odio, eu lacinia orci. Nam nulla diam, dignissim sit amet ultrices lacinia, rutrum nec nulla. In blandit diam a justo aliquam hendrerit. Nullam ac justo tellus, nec pharetra dui. Vestibulum posuere risus quis erat laoreet hendrerit. Donec semper elit eget nibh consectetur vulputate. Sed et leo sem, sed hendrerit nunc. Etiam vitae quam orci. Aenean iaculis elit vitae velit aliquet in ornare felis dignissim. Aliquam erat volutpat.</p></div></div>");
	
	$(".swiper-wrapper").append("<div class='swiper-slide slide-five slide-disable'> <img src='assets/images/theme1/book2_stage2.png' /><div class='book-content'><h3>Asian Brand Strategy</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt mi vel lectus sodales consequat. Quisque vitae ipsum lacus, et molestie erat. Ut rhoncus nisl in nisl bibendum non commodo ligula semper. Aenean erat nunc, ultricies eget bibendum nec, tincidunt ut risus. Etiam scelerisque, massa a fringilla aliquam, libero quam viverra justo, quis consectetur orci dui sit amet metus. </p><p>Etiam ut ipsum odio, eget eleifend purus. Nunc sit amet ipsum odio, eu lacinia orci. Nam nulla diam, dignissim sit amet ultrices lacinia, rutrum nec nulla. In blandit diam a justo aliquam hendrerit. Nullam ac justo tellus, nec pharetra dui. Vestibulum posuere risus quis erat laoreet hendrerit. Donec semper elit eget nibh consectetur vulputate. Sed et leo sem, sed hendrerit nunc. Etiam vitae quam orci. Aenean iaculis elit vitae velit aliquet in ornare felis dignissim. Aliquam erat volutpat.</p></div></div>");
	
	$(".swiper-wrapper").append("<div class='swiper-slide slide-six slide-disable'> <img src='assets/images/theme1/book3_stage2.png' /><div class='book-content'><h3>Mathematical Linguistics</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt mi vel lectus sodales consequat. Quisque vitae ipsum lacus, et molestie erat. Ut rhoncus nisl in nisl bibendum non commodo ligula semper. Aenean erat nunc, ultricies eget bibendum nec, tincidunt ut risus. Etiam scelerisque, massa a fringilla aliquam, libero quam viverra justo, quis consectetur orci dui sit amet metus. </p><p>Etiam ut ipsum odio, eget eleifend purus. Nunc sit amet ipsum odio, eu lacinia orci. Nam nulla diam, dignissim sit amet ultrices lacinia, rutrum nec nulla. In blandit diam a justo aliquam hendrerit. Nullam ac justo tellus, nec pharetra dui. Vestibulum posuere risus quis erat laoreet hendrerit. Donec semper elit eget nibh consectetur vulputate. Sed et leo sem, sed hendrerit nunc. Etiam vitae quam orci. Aenean iaculis elit vitae velit aliquet in ornare felis dignissim. Aliquam erat volutpat.</p></div></div>");
	
	/* Carousel mode: */
	var swiperCar = $('.swiper-car').swiper({
		pagination : '.pagination-car',
		slidesPerSlide : 4
	});
	
   // $("#formCont").append("<img style='margin:5px;' onClick='onBookClick()' src='assets/business.jpg'/>");
   // $("#formCont").append("<img style='margin:5px; opacity:0.2;' src='assets/cheese.jpg'/>");
   // $("#formCont").append("<img style='margin:5px; opacity:0.2;' src='assets/chicken.jpg'/>");
    //$("#formCont").append("<img style='margin:5px; opacity:0.2;' src='assets/destiny.jpg'/>");
   // $("#formCont").append("<img style='margin:5px; opacity:0.2;' src='assets/megaliving.jpg'/>");
   // $("#formCont").append("<img style='margin:5px; opacity:0.2;' src='assets/rdpd.jpg'/>");
   // $("#myBookCont").trigger("create");
}

function onBookClick()
{
    gotoBookMenu();
}
