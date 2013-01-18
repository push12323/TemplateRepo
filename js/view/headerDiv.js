/**
 * @author prashant.raut
 */
function headerDiv(d)
{
    this.createHeader = function()
    {
        d.addClass("headerDiv");
        //this.createButtons();
    }
    
    this.createButtons = function()
    {
        d.append($("<div id='hContainer' style='display:inline-block;'/>"));
        var mToggle = $("<div class='menuToggle'></div>");
        $("#hContainer").append(mToggle);
		
		var mIcon = $("<div class='menuIcon'>MENU ></div>");
        $(".menuToggle").append(mIcon);
		
		var appNav = $("<div class='appNavigation'/>");
		$(".menuToggle").append(appNav);
        
        
        var bBtn = $("<div><img src='assets/images/theme1/icon1.png'/></div>")
		$(".appNavigation").append(bBtn);
		var bBtn = $("<div><img src='assets/images/theme1/icon2.png'/></div>")
        $(".appNavigation").append(bBtn);
        var bBtn = $("<div><img src='assets/images/theme1/icon3.png'/></div>")
        $(".appNavigation").append(bBtn);
        var bBtn = $("<div><img src='assets/images/theme1/icon4.png'/></div>")
        $(".appNavigation").append(bBtn);
        var bBtn = $("<div><img src='assets/images/theme1/icon5.png'/></div>")
        $(".appNavigation").append(bBtn);
		
		var vBtn = $("<div class='headerViewNav'/>");
        $("#hContainer").append(vBtn);
        var bBtn = $("<div><img src='assets/images/theme1/icon6.png'/></div>")
        $(".headerViewNav").append(bBtn);
        var bBtn = $("<div><img src='assets/images/theme1/icon7.png'/></div>")
        $(".headerViewNav").append(bBtn);
        
        var leftBts = $("<div class='headerLeftNav'/>");
        $("#hContainer").append(leftBts);
        var bBtn = $("<div><img src='assets/images/theme1/icon8.png'/></div>")
        $(".headerLeftNav").append(bBtn);
        var bBtn = $("<div><img src='assets/images/theme1/icon9.png'/></div>")
        $(".headerLeftNav").append(bBtn);
        var bBtn = $("<div><img src='assets/images/theme1/icon10.png'/></div>")
        $(".headerLeftNav").append(bBtn);
		
        d.trigger("create");
        
        this.addEventListeners();
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
		//console.log("menuToggleTap");
		$(".appNavigation").animate({width:'toggle'},312);
        $(this).toggleClass("closed"); 
	}
	this.audioToggleTap = function()
	{
		/*var audio = $('audio');
		if(audio.muted){
            song.play();
         } else {
             song.pause();
         }
		$('audio')[2].volume=0;
		console.log($('audio')[2].volume);*/
		
		/*$('#soundonoff').on('click', function () {
			var $this = $(this);
			if ($this.attr('src') == 'images/icons/soundon.png') {
				$this.attr('src', 'images/icons/soundoff.png').attr('data-muted', true);
			} else {
				$this.attr('src', 'images/icons/soundon.png').attr('data-muted', false);
			}
		});*/
	}
	
	
    this.createHeader();
}

