/**
 * @author prashant.raut
 */
quiz_7();

function quiz_7()
{
	var attachTo = currentId + 1;
	$("#"+attachTo).empty();
    console.log("create7Question "+currentId); 
	var first_id = "loginCont"+attachTo;
	var second_id = "formCont"+attachTo;
	var third_id = "fieldset"+attachTo;
    $("#"+attachTo).append("<div id='"+first_id+"'/>");
    $("#"+first_id).css("height", "100%");
    //$("#"+first_id).css("backgroundColor", "gray");
    //$("#"+first_id).css("color", "white");
	
    //$("#"+first_id).css('textShadow','black 1px 1px 1px');
    //$("#"+first_id).css('textAlign','center');
    $("#"+first_id).css('textAlign','center');
	$('.ui-controlgroup-label').css('font-size','18px')
    $("#"+first_id).append("<div id='"+second_id+"' style='display:inline-block; width:80%;'/>");
    $("#"+second_id).append("<span>This is 7 Page</span><br/><br/>");
	
	$("#"+first_id).trigger("create");
}