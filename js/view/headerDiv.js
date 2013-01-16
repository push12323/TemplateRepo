/**
 * @author prashant.raut
 */
function headerDiv(d)
{
    this.createHeader = function()
    {
        d.addClass("headerDiv");
        this.createButtons();
    }
    
    this.createButtons = function()
    {
        var helpBtn = $("<div class='topNavigation'><button data-role='button' id='headerHelp' data-inline='true'>Help</button></div>");
        d.append(helpBtn);
        
        var settingBtn = $("<div class='topNavigation'><button data-role='button' id='headerSetting' data-inline='true'>Settings</button></div>");
        d.append(settingBtn);
		
		var audioBtn = $("<div class='topNavigation'><button data-role='button' id='audioSetting' data-inline='true'>Audio</button></div>");
        d.append(audioBtn);
		
        d.trigger("create");
        
        this.addEventListeners();
    }
    this.addEventListeners = function()
    {
        $("#headerHelp").on("tap", this.headerHelpTap);
        $("#headerSetting").on("tap", this.headerSettingTap);
		$("#audioSetting").on("tap", this.audioToggleTap);
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
        console.log("headerHelpTap");
        addPopup("js/view/help_popup.js");
    }
    this.headerSettingTap = function()
    {
        addPopup("js/view/settings_popup.js");
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

