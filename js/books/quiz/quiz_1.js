/**
 * @author prashant.raut
 */
//createFirstQuestion();

quiz_1();

function quiz_1()
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
    $("#"+second_id).append("<span>This is First Question</span><br/><br/>");
	$("#"+second_id).append("<fieldset data-role='controlgroup' id='"+third_id+"' />");    
	$("#"+third_id).append("<legend>Choose the correct HTML tag for the heading:</legend>");
    $("#"+third_id).append("<input type='checkbox' name='checkbox-1a' id='checkbox-1a' class='custom' />");
    $("#"+third_id).append("<label for='checkbox-1a'>head</label>");

    $("#"+third_id).append("<input type='checkbox' name='checkbox-2a' id='checkbox-2a' class='custom' />");
    $("#"+third_id).append("<label for='checkbox-2a'>heading</label>");
        
    $("#"+third_id).append("<input type='checkbox' name='checkbox-3a' id='checkbox-3a' class='custom' />");
    $("#"+third_id).append("<label for='checkbox-3a'>h1</label>");

    $("#"+third_id).append("<input type='checkbox' name='checkbox-4a' id='checkbox-4a' class='custom' />");
    $("#"+third_id).append("<label for='checkbox-4a'>h3</label>");
	
	$("#"+second_id).append("<button type='submit' data-theme='b' onclick=checkOption() name='submit' value='submit-value' class='ui-btn-hidden' aria-disabled='false'>Submit</button>");
	
	$("#"+second_id).append("<div id='wrong' data-role='popup' data-theme='e' data-overlay-theme='a' class='ui-content'> Wrong Answer </div>")
	$("#"+second_id).append("<div id='right' data-role='popup' data-theme='e' data-overlay-theme='a' class='ui-content'> Right Answer </div>")
	$("#"+second_id).append("<div id='selectans' data-role='popup' data-theme='e' data-overlay-theme='a' class='ui-content'> Please Select Answer </div>")
	
	$("#"+first_id).trigger("create");
	  
	//qEngine.setScore(false);
}

function checkOption()
{
	var correctAns = "checkbox-3a,checkbox-4a";
	var checkedAns = "";
	
	
	$.each($("input"), function (i, item) {
		
		
		if($("input")[i].checked)
		{
			if(checkedAns == "")
			{
				checkedAns += $("input")[i].id;
			}
			else
			{
				checkedAns += "," + $("input")[i].id;
			}
		}		
       
    });
	
	if(checkedAns == "")
	{
		$( "#selectans" ).popup( "open" );
	}
	else
	{
		if(checkedAns == correctAns)
		{
			qEngine.setScore(true);
			$( "#right" ).popup( "open" );
		}
		else
		{
			qEngine.setScore(false);
			$( "#wrong" ).popup( "open" );
			//loadPage("Path to js");
			loadPage("js/books/quiz/"+this);
			createQuestion_1();
		}
	}	
}