/**
 * @author prashant.raut
 */
createFirstQuestion();

function createFirstQuestion()
{
    console.log("createFirstQuestion"); 
    $("#appContainer").append("<div id='pageCont'/>");
    $("#pageCont").css("height", "100%");
    $("#pageCont").css("backgroundColor", "gray");
    $("#pageCont").css("color", "white");
    //$('#pageCont').css('textShadow','black 1px 1px 1px');
    $('#pageCont').css('textAlign','center');
    $("#pageCont").append("<div id='formCont' style='display:inline-block; margin-top:70px; width:350px;'/>");
    $("#formCont").append("<span>This is Fourth Page</span><br/><br/>");
    $("#pageCont").trigger("create");
}

