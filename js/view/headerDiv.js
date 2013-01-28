/**
 * @author prashant.raut
 */
function headerDiv(d)
{
	this.pChapterList = ["Ch.1 Sound", "Ch.2 Force and Pressure", "Ch.3 Light", "Ch.4 Velocity", "Ch.5 Energy Cosumption", "Ch.6 Fuel", "Ch.7 Natural Resources", "Ch.8 Pollution", "Ch.9 Atmosphere"];
    this.createHeader = function()
    {
        d.addClass("headerDiv");
        //this.createButtons();
    }
    
    this.createMyBooksBtns = function()
    {
		this.emptyHeader();
        d.append($("<div id='hContainer' style='display:inline-block;'/>"));
        var mToggle = $("<div class='menuToggle'></div>");
        $("#hContainer").append(mToggle);
		
		var mIcon = $("<div class='menuIcon'><img src='assets/images/theme1/menuIcon_img.png'/></div>");
        $(".menuToggle").append(mIcon);
		
		var maskDiv = $("<div class='mask-div'></div>");
		$(".menuToggle").append(maskDiv);
		
		var appNav = $("<div class='appNavigation'/>");
		$(".mask-div").append(appNav);
        
        
        var bBtn = $("<div class='nav active' onclick='headerDiv.onHeaderBooksClick(event)'><img src='assets/images/theme1/icon1.png'/></div>")
		$(".appNavigation").append(bBtn);
		var bBtn = $("<div class='nav disable'><img src='assets/images/theme1/icon2.png'/></div>")
        $(".appNavigation").append(bBtn);
        var bBtn = $("<div class='nav disable'><img src='assets/images/theme1/icon3.png'/></div>")
        $(".appNavigation").append(bBtn);
        var bBtn = $("<div class='nav disable'><img src='assets/images/theme1/icon4.png'/></div>")
        $(".appNavigation").append(bBtn);
        var bBtn = $("<div class='nav' onclick='headerDiv.onHeaderNotesClick(event)'><img src='assets/images/theme1/icon5.png'/></div>")
        $(".appNavigation").append(bBtn);
		
		var vBtn = $("<div class='headerViewNav'/>");
        $("#hContainer").append(vBtn);
        var bBtn = $("<div class='nav active'><img src='assets/images/theme1/icon6.png'/></div>")
        $(".headerViewNav").append(bBtn);
        var bBtn = $("<div class='nav disable'><img src='assets/images/theme1/icon7.png'/></div>")
        $(".headerViewNav").append(bBtn);
        
        var leftBts = $("<div class='headerLeftNav'/>");
        $("#hContainer").append(leftBts);
        var bBtn = $("<div class='nav disable'><img src='assets/images/theme1/icon8.png'/></div>")
        $(".headerLeftNav").append(bBtn);
        var bBtn = $("<div class='nav search-btn'><img src='assets/images/theme1/icon9.png'/></div>")
		$(".headerLeftNav").append(bBtn);
		
		//var searchBox = $("<div class='search-box'></div>");
		//$(".search-btn").append(searchBox);
		
        var bBtn = $("<div class='nav'><img src='assets/images/theme1/icon10.png'/></div>")
        $(".headerLeftNav").append(bBtn);
		
		
		
        d.trigger("create");
        
        this.addEventListeners();
    }
	this.onHeaderNotesClick = function(e)
	{
		//$(".appNavigation .active").addClass("disable");
		$(".appNavigation .active").removeClass("active");
		
		
		$(e.currentTarget).addClass("active");
		$(e.currentTarget).removeClass("disable");
		//$(e.currentTarget).css("opacity");
		gotoNoteScreen();
		console.log("onHeaderBooksClick after >> "+$(".active").css("opacity"));
	}
	
	this.onHeaderBooksClick = function(e)
	{
		gotoMyBookScreen();
		
		console.log("onHeaderBooksClick >> "+$(e.currentTarget).attr('class'));
		$(e.currentTarget).removeClass("disable");
		$(e.currentTarget).addClass("active");
		//$(e.currentTarget).css("opacity");
		//d.trigger("refresh");
		console.log("onHeaderBooksClick after >> "+$(e.currentTarget).css("opacity"));
	}
    this.addEventListeners = function()
    {
        $("#headerHelp").on("tap", this.headerHelpTap);
        $("#headerSetting").on("tap", this.headerSettingTap);
		$("#audioSetting").on("tap", this.audioToggleTap);
		$(".menuIcon").on("tap", this.menuToggleTap);
    }
    this.addHomeButton = function()
    {
        var homeBtn = $("<div class='topNavigation' id='headerDivHome'><button data-role='button' onclick='gotoHomeScreen()' data-inline='true'>Home</button></div>");
        d.append(homeBtn);
        d.trigger("create");
    }
    this.removeHomeButton = function()
    {
        $("#headerDivHome").remove();
    }
    this.headerHelpTap = function () {
        
        addPopup("js/view/help_popup.js");
    }
    this.headerSettingTap = function()
    {
        addPopup("js/view/settings_popup.js");
    }
	this.menuToggleTap = function()
	{
		console.log($('.appNavigation').css("margin-left") == "0px");
		if($('.appNavigation').css("margin-left") == "0px")
		{
			$('.appNavigation').animate({marginLeft: "-360px"}, 500);
		}
		else
		{
			$('.appNavigation').animate({marginLeft: "0px"}, 500);
		}
		
	}
	this.audioToggleTap = function()
	{
		
	}
	
	this.addContentNavigation = function(pSession)
	{
		this.emptyHeader();
		var studyClass = "studyNormal";
		var gameClass = "gameNormal";
		var quizClass = "quizNormal";
		d.append("<div class='contentNavigation'/>");
		//$(".contentNavigation").append("<div class='headeWhiteBg'/>");
		$(".contentNavigation").append("<div style='float:left; top:0px; margin-left:50px; z-index:10; background-color:white;'><div style='margin-top:7px; width:370px; height:30px; border:1px solid #D6D6D6; background-color:#EAEAEA;' onclick='pHeaderChapterList()'><div style='color:black; margin-left:5px; margin-top:5px; float:left; text-weight:bold;' id='pChapterTitle'>"+this.pChapterList[0]+"</div><div style='float:right; margin-right:10px; margin-top:7px'><image src='assets/images/theme1/Topic_arrow_active.png'/></div><div style='float:right;color:gray;margin-right:7px;margin-top:4px;'>Interactive Science</div></div></div>");
		switch(pSession)
		{
			case "content":
			studyClass = "studyActive";
			break;
			case "game":
			gameClass = "gameActive";
			break;
			case "quiz":
			quizClass = "quizActive";
			break;
		}
		$(".contentNavigation").append("<div class='bookNavigation'><div class='"+studyClass+"' id='studyBtn' onclick='headerDiv.onHeaderStudyClick(event)'><div style='margin-left:20px; margin-top: 10px;'><img src='assets/images/theme1/study_icon.png'/></div></div><div class='"+gameClass+"' id='gameBtn' onclick='headerDiv.onHeaderGameClick(event)'><div style='margin-left:20px; margin-top: 10px;'><img src='assets/images/theme1/game_icon.png'/></div></div><div id='quizBtn' class='"+quizClass+"' onclick='headerDiv.onHeaderQuizClick(event)'><div style='margin-left:20px; margin-top: 10px;'><img src='assets/images/theme1/quiz_icon.png'/></div></div></div>");
		$(".contentNavigation").append("<div style='float:right;margin-right:50px;'><a href='#' data-role='button' onclick='showNoteEditor()' data-inline='true' data-mini='true'>Save As Note</a><a href='#' data-role='button' data-inline='true' data-mini='true' onclick='gotoMyBookScreen()'>Exit</a></div>");
		//d.append();
		$("#pChList").css("top", "-"+parseInt($("#pChList").css("height"))+"px");
		d.trigger("create");
	}
	this.onHeaderStudyClick = function(e)
	{
		$(e.currentTarget).removeClass("studyNormal");
		$(e.currentTarget).addClass("studyActive");
		
		$("#quizBtn").removeClass("quizActive");
		$("#quizBtn").addClass("quizNormal");
		
		$("#gameBtn").removeClass("gameActive");
		$("#gameBtn").addClass("gameNormal");
		
		loadContentEngine();
	}
	this.onHeaderGameClick = function(e)
	{
		$(e.currentTarget).removeClass("gameNormal");
		$(e.currentTarget).addClass("gameActive");
		
		$("#studyBtn").removeClass("studyActive");
		$("#studyBtn").addClass("studyNormal");
		
		$("#quizBtn").removeClass("quizActive");
		$("#quizBtn").addClass("quizNormal");
	}
	this.onHeaderQuizClick = function(e)
	{
		$(e.currentTarget).removeClass("quizNormal");
		$(e.currentTarget).addClass("quizActive");
		
		$("#studyBtn").removeClass("studyActive");
		$("#studyBtn").addClass("studyNormal");
		
		$("#gameBtn").removeClass("gameActive");
		$("#gameBtn").addClass("gameNormal");
		
		loadQuizEngine();
	}
	this.emptyHeader = function()
	{
		d.empty();	
	}
	
    this.createHeader();
}
function pUpdateSelectList()
{
	$(".ui-popup-active").css("top", "50px");
}
function pOnChapterListClick(e)
{
	$("#pChapterTitle").html(headerDiv.pChapterList[parseInt(e.currentTarget.id.substring(7, 8))]);
	pHeaderChapterList();
}
function pHeaderChapterList()
{
	if($("#pChList").css("top") == "-333px")
	{
		$("#pChList").animate({top:45}, 500);
	}
	else
	{
		$("#pChList").animate({top:0-parseInt($("#pChList").css("height"))}, 500);
	}
}

