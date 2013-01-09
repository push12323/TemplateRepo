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
        d.trigger("create");
        
        this.addEventListeners();
    }
    this.addEventListeners = function()
    {
        $("#headerHelp").on("tap", this.headerHelpTap);
        $("#headerSetting").on("tap", this.headerSettingTap);
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
    this.createHeader();
}

