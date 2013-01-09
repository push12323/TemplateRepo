/**
 * @author prashant.raut
 */
createSettingsPopup();

function createSettingsPopup()
{
    console.log("createHelpPopup");
    $("#popupDiv").empty();
    $("#popupDiv").css("width", "300px");
    $("#popupDiv").css("height", "200px");
    $("#popupDiv").append("<div style='padding:10px; background-color:black; color:white;'>Settings</div>");
    $("#popupDiv").popup();
    $("#popupDiv").trigger("create");
    $("#popupDiv").popup("open");
}
