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
    //$('#loginCont').css('textShadow','black 1px 1px 1px'); $('#loginCont').css('textAlign','center');
    $("#loginCont").append("<div id='formCont' style='display:inline-block; margin-top:70px; width:80%;'/>");
    $("#formCont").append("<span>This is Fourth Question</span><br/><br/>");
	
	$("#formCont").append("<h2>Identify the dog sound from below option? </h2>");
	
	$("#formCont").append("<ul data-role='listview' data-split-icon='arrow-r' data-split-theme='d' id='answerlist'><li id='choice-1'><a href='#' onclick='setOptions($(this).parent().parent().parent())'><h3>Audio - 1</h3></a><a href='#' onclick='playSound(audio1)';>Play Audio</a></li><li id='choice-2'><a href='#' onclick='setOptions($(this).parent().parent().parent())'><h3>Audio - 2</h3></a><a href='#' onclick='playSound(audio2)'>Play Audio</a></li><li id='choice-3'><a href='#' onclick='setOptions($(this).parent().parent().parent())'><h3>Audio - 3</h3></a><a href='#' onclick='playSound(audio3)'>Play Audio</a></li><li id='choice-4'><a href='#' onclick='setOptions($(this).parent().parent().parent())'><h3>Audio - 4</h3></a><a href='#' onclick='playSound(audio4)'>Play Audio</a></li></ul>");
	
	$("#formCont").append("<audio id='audio1'><source src='assets/sounds/quiz/Cat.ogg' type='audio/ogg'/><source src='assets/sounds/quiz/Cat.wav' type='audio/wave'/><source src='assets/sounds/quiz/Cat.mp3' type='audio/mpeg'/></audio><audio id='audio2'><source src='assets/sounds/quiz/Dog.ogg' type='audio/ogg'/><source src='assets/sounds/quiz/Dog.wav' type='audio/wave'/><source src='assets/sounds/quiz/Dog.mp3' type='audio/mpeg'/></audio><audio id='audio3'><source src='assets/sounds/quiz/Horse.ogg' type='audio/ogg'/><source src='assets/sounds/quiz/Horse.wav' type='audio/wave'/><source src='assets/sounds/quiz/Horse.mp3' type='audio/mpeg'/></audio><audio id='audio4'><source src='assets/sounds/quiz/Lion.ogg' type='audio/ogg'/><source src='assets/sounds/quiz/Lion.wav' type='audio/wave'/><source src='assets/sounds/quiz/Lion.mp3' type='audio/mpeg'/></audio>");
	
	$("#formCont").append("<button type='submit' data-theme='b' onclick=checkOption() name='submit' value='submit-value' class='ui-btn-hidden' aria-disabled='false'>Submit</button>");
	
	$("#formCont").append("<div id='wrong' data-role='popup' data-theme='e' data-overlay-theme='a' class='ui-content'> Wrong Answer </div>")
	$("#formCont").append("<div id='right' data-role='popup' data-theme='e' data-overlay-theme='a' class='ui-content'> Wrong Answer </div>")
	$("#formCont").append("<div id='selectans' data-role='popup' data-theme='e' data-overlay-theme='a' class='ui-content'> Please Select Answer </div>")
	
	
	
    $("#loginCont").trigger("create");
	
	qEngine.setScore(false);
}

function playSound(soundfile) {
	var audio = document.getElementById(soundfile.id);
	audio.play();
}



function setOptions(choice)
{
	givenAns = $(choice).attr("id");
	
	$(choice).parent("ul").children("li").removeClass("listItem-selected");
	
	$(choice).addClass("listItem-selected");
	
}

function checkOption()
{
	correctAns = "choice-2";
	
	
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