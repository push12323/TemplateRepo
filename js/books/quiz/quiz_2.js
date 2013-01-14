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
    $("#loginCont").append("<div id='formCont' style='display:inline-block; margin-top:70px; width:80%;'/>");
    $("#formCont").append("<span>This is Second Question</span><br/><br/>");
	$("#formCont").append("<fieldset data-role='controlgroup' id='fieldset' />");
	$("#fieldset").append("<legend>What does HTML stand for ? </legend>");
	$("#fieldset").append("<input type='radio' name='radio-choice-1' id='radio-choice-1' value='choice-1' checked='checked' />");
	$("#fieldset").append("<label for='radio-choice-1'>Hyper Text Markup Language</label>");

	$("#fieldset").append("<input type='radio' name='radio-choice-1' id='radio-choice-2' value='choice-2'  />");
	$("#fieldset").append("<label for='radio-choice-2'>Home Tool Markup Language</label>");

	$("#fieldset").append("<input type='radio' name='radio-choice-1' id='radio-choice-3' value='choice-3'  />");
	$("#fieldset").append("<label for='radio-choice-3'>Hyperlinks Markup Language</label>");

	$("#fieldset").append("<input type='radio' name='radio-choice-1' id='radio-choice-4' value='choice-4'  />");
	$("#fieldset").append("<label for='radio-choice-4'>Hyperlinks and Text Markup Language</label>");
	
	
	$("#formCont").append("<button type='submit' data-theme='b' onclick=checkOption() name='submit' value='submit-value' class='ui-btn-hidden' aria-disabled='false'>Submit</button>");
	
	$("#formCont").append("<div id='wrong' data-role='popup' data-theme='e' data-overlay-theme='a' class='ui-content'> Wrong Answer </div>")
	$("#formCont").append("<div id='right' data-role='popup' data-theme='e' data-overlay-theme='a' class='ui-content'> Wrong Answer </div>")
	$("#formCont").append("<div id='selectans' data-role='popup' data-theme='e' data-overlay-theme='a' class='ui-content'> Please Select Answer </div>")
    $("#loginCont").trigger("create");
	
	qEngine.setScore(false);
    
}

function checkOption()
{
	var correctAns = "choice-1";
	var checkedAns = "";
	
	
	$.each($("input"), function (i, item) {
		
		
		if($("input")[i].checked)
		{
			checkedAns = $("input")[i].value;
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
			loadPage("js/books/quiz/"+this);
			createFirstQuestion();
		}
	}	
}