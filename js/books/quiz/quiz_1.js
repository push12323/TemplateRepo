/**
 * @author prashant.raut
 */
createFirstQuestion();

function createFirstQuestion()
{
	
	
    console.log("createFirstQuestion"); 
    $("#appContainer").append("<div id='loginCont'/>");
    $("#loginCont").css("height", "100%");
    $("#loginCont").css("backgroundColor", "gray");
    $("#loginCont").css("color", "white");
	
    //$('#loginCont').css('textShadow','black 1px 1px 1px');
    $('#loginCont').css('textAlign','center');
    $('#loginCont').css('textAlign','center');
	$('.ui-controlgroup-label').css('font-size','18px')
    $("#loginCont").append("<div id='formCont' style='display:inline-block; margin-top:70px; width:80%;'/>");
    $("#formCont").append("<span>This is First Question</span><br/><br/>");
	$("#formCont").append("<fieldset data-role='controlgroup' id='fieldset' />");    
	$("#fieldset").append("<legend>Choose the correct HTML tag for the heading:</legend>");
    $("#fieldset").append("<input type='checkbox' name='checkbox-1a' id='checkbox-1a' class='custom' />");
    $("#fieldset").append("<label for='checkbox-1a'>head</label>");

    $("#fieldset").append("<input type='checkbox' name='checkbox-2a' id='checkbox-2a' class='custom' />");
    $("#fieldset").append("<label for='checkbox-2a'>heading</label>");
        
    $("#fieldset").append("<input type='checkbox' name='checkbox-3a' id='checkbox-3a' class='custom' />");
    $("#fieldset").append("<label for='checkbox-3a'>h1</label>");

    $("#fieldset").append("<input type='checkbox' name='checkbox-4a' id='checkbox-4a' class='custom' />");
    $("#fieldset").append("<label for='checkbox-4a'>h3</label>");
	
	$("#formCont").append("<button type='submit' data-theme='b' onclick=checkOption() name='submit' value='submit-value' class='ui-btn-hidden' aria-disabled='false'>Submit</button>");
	
	$("#formCont").append("<div id='wrong' data-role='popup' data-theme='e' data-overlay-theme='a' class='ui-content'> Wrong Answer </div>")
	$("#formCont").append("<div id='right' data-role='popup' data-theme='e' data-overlay-theme='a' class='ui-content'> Right Answer </div>")
	$("#formCont").append("<div id='selectans' data-role='popup' data-theme='e' data-overlay-theme='a' class='ui-content'> Please Select Answer </div>")
	
	$("#loginCont").trigger("create");
	  
	  qEngine.setScore(false);
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
			createFirstQuestion();
		}
	}	
}