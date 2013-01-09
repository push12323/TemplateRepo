/**
 * @author prashant.raut
 */
createHelpPopup();

function createHelpPopup()
{
    console.log("createHelpPopup");
    $("#popupDiv").empty();
    $("#popupDiv").css("width", "300px");
    $("#popupDiv").css("height", "200px");
    $("#popupDiv").append("<div style='padding:10px; color:white;'>This is test</div>");
    $("#popupDiv").popup();
    $("#popupDiv").trigger("create");
    $("#popupDiv").popup("open");
}
