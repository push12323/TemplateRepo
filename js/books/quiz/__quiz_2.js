/**
 * @author prashant.raut
 */
quiz_2();

function quiz_2()
{
	var attachTo = currentId + 1;
	$("#"+attachTo).empty();
    console.log("create2Question "+currentId); 
	var first_id = "loginCont"+attachTo;
	var second_id = "formCont"+attachTo;
	var third_id = "fieldset"+attachTo;
    $("#"+attachTo).append("<div id='"+first_id+"'/>");
    $("#"+first_id).css("height", "100%");
	
    $("#"+first_id).css('textAlign','center');
	$('.ui-controlgroup-label').css('font-size','18px')
    $("#"+first_id).append("<div id='"+second_id+"' style='display:inline-block; width:80%;'/>");
    $("#"+second_id).append("<span>This is Second Page</span><br/><br/>Yesterday I ended up having to hack around FCKEditor a bit to “fine tune” it for a project im involved in. The problem was that the html text we needed from the editor was getting back to our app, I didnt touch the code at all except to add a console log (window.console.log()) and tada… it works now. Well it was aparent that the fckeditor was not getting to where i needed to get to fast enough. Javascript has a method setTimeout, which if you google this, youll find a bunch of related topics on setTimeout, setInterval, and clearTimeout etc… So I went with a setTimeout to simply call the next function i needed 1 millisecond later.");
	
	$("#"+first_id).trigger("create");
}