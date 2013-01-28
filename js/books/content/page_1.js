/**
 * @author prashant.raut
 */
page_1();

function page_1()
{
	var attachTo = currentId + 1;
	$("#"+attachTo).empty();
    console.log("create1Question "+currentId); 
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
    $("#"+second_id).append("<span>This is First Page</span><br/><br/>Closures are arguably the great secret of Javascript: the way variable scope stacks get frozen at the point of closure (and hence variables persist within the closure) is quite subtle and catches most out, including me! Be warned that IEx has a garbage-collector subtlety, though; I think that if you reference a DOM variable in a Javascript closure, then the collection mechanism gets confused and it doesn’t get trashed at the end of the request: eventually this becomes a memory leak. I think it’s because DOM variables and internal JS variables get collected by two different collectors, and they don’t communicate properly about what’s no longer being used.");
	$("#"+first_id).trigger("create");
}