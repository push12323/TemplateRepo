/**
 * @author prashant.raut
 */
createBookMenu();

function createBookMenu()
{
    console.log("createhomeScreen"); 
    $("#appContainer").append("<div id='bookMenuCont'/>");
    $("#bookMenuCont").css("height", "100%");
    $("#bookMenuCont").css("backgroundColor", "gray");
    $("#bookMenuCont").css("color", "white");
    //$('#bookMenuCont').css('textShadow','black 1px 1px 1px');
    $('#bookMenuCont').css('textAlign','center');
    $("#bookMenuCont").append("<div id='formCont' style='display:inline-block; width:930px; padding-left:40px;'/>");
	
	$("#formCont").append("<div class='book-desc'><div class='book-cover'><img src='assets/images/theme1/book1_stage1.png'  onClick='onBookClick()' /></div><div class='book-content'><h3>Interactive Science</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt mi vel lectus sodales consequat. Quisque vitae ipsum lacus, et molestie erat. Ut rhoncus nisl in nisl bibendum non commodo ligula semper. Aenean erat nunc, ultricies eget bibendum nec, tincidunt ut risus. Etiam scelerisque, massa a fringilla aliquam, libero quam viverra justo, quis consectetur orci dui sit amet metus. </p></div></div>");
	
	$("#formCont").append("<div data-role='collapsible-set'><div data-role='collapsible'><h3>Header</h3><p>Content</p></div><div data-role='collapsible' data-collapsed='true'><h3>Header</h3><p>Content</p></div><div data-role='collapsible' data-collapsed='true'><h3>Header</h3><p>Content</p></div></div>");
	
	$("#formCont").append("<div class='swiper-container swiper-scroll-container' />");
    $(".swiper-car").append("<div class='pagination-car'></div>");
    $(".swiper-car").append("<div class='swiper-wrapper' />");
	
	$("#formCont").append("<button data-role='button' id='bMenu_quiz' value='Quiz'/>");
    /*$("#formCont").append("<span>This is Home screen</span><br/><br/>");
    $("#formCont").append("<button data-role='button' id='bMenu_content' value='Content'/>");
    $("#formCont").append("<button data-role='button' id='bMenu_acivity' value='Activity'/>");
    $("#formCont").append("<button data-role='button' id='bMenu_quiz' value='Quiz'/>");
    $("#formCont").append("<button data-role='button' id='bMenu_games' value='Games'/>");*/
    $("#bookMenuCont").trigger("create");
    
    addEventListeners();
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