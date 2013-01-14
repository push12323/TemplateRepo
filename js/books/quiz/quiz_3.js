/**
 * @author prashant.raut
 */
createFirstQuestion();

var questionType;
var correctAns;
var givenAns;

function createFirstQuestion()
{
	questionType = "sc";
    console.log("createFirstQuestion"); 
    $("#appContainer").append("<div id='loginCont'/>");
    $("#loginCont").css("height", "100%");
    $("#loginCont").css("backgroundColor", "gray");
    $("#loginCont").css("color", "white");
	$('#loginCont').css('textAlign','center');
    //$('#loginCont').css('textShadow','black 1px 1px 1px'); $('#loginCont').css('textAlign','center');
    $("#loginCont").append("<div id='formCont' style='display:inline-block; margin-top:70px; width:80%;'/>");
    $("#formCont").append("<span>This is Third Question</span><br/><br/>");
	
	$("#formCont").append("<h2>Which of the following fruit is a Apple? </h2>");
	$("#formCont").append("<ul data-role='listview' data-inset='true' id='answerlist'><li id='choice-1'><img src='assets/images/quiz/fruit1.jpg' /></li><li id='choice-2'><img src='assets/images/quiz/fruit2.jpg' /></li><li id='choice-3'><img src='assets/images/quiz/fruit3.jpg' /></li><li id='choice-4'><img src='assets/images/quiz/fruit4.jpg' /></li></ul>");
	
	$("#formCont").append("<button type='submit' data-theme='b' onclick=checkOption() name='submit' value='submit-value' class='ui-btn-hidden' aria-disabled='false'>Submit</button>");
	
	$("#formCont").append("<div id='wrong' data-role='popup' data-theme='e' data-overlay-theme='a' class='ui-content'> Wrong Answer </div>")
	$("#formCont").append("<div id='right' data-role='popup' data-theme='e' data-overlay-theme='a' class='ui-content'> Wrong Answer </div>")
	$("#formCont").append("<div id='selectans' data-role='popup' data-theme='e' data-overlay-theme='a' class='ui-content'> Please Select Answer </div>")
	
	$('#answerlist').delegate('li', 'click', function () {
		setOptions($(this));
	} );
	
    $("#loginCont").trigger("create");
	
	qEngine.setScore(false);
	
}

function setOptions(choice)
{
	givenAns = $(choice).attr("id");
	
	
	$(choice).parent("ul").children("li").removeClass("listItem-selected");
	
	$(choice).addClass("listItem-selected");
	
}

function checkOption()
{
	correctAns = "choice-3";
	
	
	if(givenAns == "")
	{
		$( "#selectans" ).popup( "open" );
	}
	else
	{
		if(givenAns == correctAns)
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