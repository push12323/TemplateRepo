/**
 * @author prashant.raut
 */
showResult();

function showResult()
{
    console.log("createFirstQuestion"); 
    $("#appContainer").append("<div id='loginCont'/>");
    $("#loginCont").css("height", "100%");
    $("#loginCont").css("backgroundColor", "gray");
    $("#loginCont").css("color", "white");
    //$('#loginCont').css('textShadow','black 1px 1px 1px');
    $('#loginCont').css('textAlign','center');
    $("#loginCont").append("<div id='formCont' style='display:inline-block; margin-top:70px; width:350px;'/>");
    $("#formCont").append("<span>You have scored "+qEngine.getScrore()+"</span><br/><br/>");
    $("#loginCont").trigger("create");
}