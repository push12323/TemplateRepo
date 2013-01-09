/**
 * @author prashant.raut
 */
createMyBookScreen();

function createMyBookScreen()
{
    console.log("createMyBookScreen"); 
    $("#appContainer").append("<div id='myBookCont'/>");
    $("#myBookCont").css("height", "100%");
    $("#myBookCont").css("backgroundColor", "gray");
    $("#myBookCont").css("color", "white");
    //$('#myBookCont').css('textShadow','black 1px 1px 1px');
    $('#myBookCont').css('textAlign','center');
    $("#myBookCont").append("<div id='formCont' style='display:inline-block; margin-top:70px; width:350px;'/>");
    $("#formCont").append("<span>This is Home screen</span><br/><br/>");
    $("#formCont").append("<img style='margin:5px;' onClick='onBookClick()' src='assets/business.jpg'/>");
    $("#formCont").append("<img style='margin:5px; opacity:0.2;' src='assets/cheese.jpg'/>");
    $("#formCont").append("<img style='margin:5px; opacity:0.2;' src='assets/chicken.jpg'/>");
    $("#formCont").append("<img style='margin:5px; opacity:0.2;' src='assets/destiny.jpg'/>");
    $("#formCont").append("<img style='margin:5px; opacity:0.2;' src='assets/megaliving.jpg'/>");
    $("#formCont").append("<img style='margin:5px; opacity:0.2;' src='assets/rdpd.jpg'/>");
    $("#myBookCont").trigger("create");
}

function onBookClick()
{
    gotoBookMenu();
}
