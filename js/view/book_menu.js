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
    $("#bookMenuCont").append("<div id='formCont' style='display:inline-block; margin-top:70px; width:300px;'/>");
    $("#formCont").append("<span>This is Home screen</span><br/><br/>");
    $("#formCont").append("<button data-role='button' id='bMenu_content' value='Content'/>");
    $("#formCont").append("<button data-role='button' id='bMenu_acivity' value='Activity'/>");
    $("#formCont").append("<button data-role='button' id='bMenu_quiz' value='Quiz'/>");
    $("#formCont").append("<button data-role='button' id='bMenu_games' value='Games'/>");
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