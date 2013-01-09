/**
 * @author prashant.raut
 */
var headerDiv;
var footerDiv;
var contentDiv;
var qEngine;
var cEngine;

$(document).ready(init);
function init()
{
    console.log("init Called!");
    createMainContainer();
}

function createMainContainer()
{
    $("#mainContainer").append('<div id="appHeader"/>');
    $("#mainContainer").append('<div id="appContainer"/>');
    $("#mainContainer").append('<div id="appFooter"/>');
    headerDiv = new headerDiv($("#appHeader"));
    footerDiv = new footerDiv($("#appFooter"));
    contentDiv = new contentDiv($("#appContainer"));
    $("body").append("<div id='popupDiv'></div>");
}

function gotoHomeScreen()
{
    headerDiv.removeHomeButton();
    footerDiv.emptyFooter();
    loadPage("js/view/home_screen.js");
}

function gotoMyBookScreen()
{
    headerDiv.addHomeButton();
    loadPage("js/view/my_books.js");
}

function gotoBookMenu()
{
    loadPage("js/view/book_menu.js");
}

function loadContentEngine()
{
    cEngine = new contentEngine(["page_1.js", "page_2.js", "page_3.js", "page_4.js"]);
}

function loadQuizEngine()
{
    qEngine = new quizEngine(["quiz_1.js", "quiz_2.js", "quiz_3.js", "quiz_4.js", "result.js"]);    
}

function insertScript(script, status) {
    var cur = document.getElementById('temp');
    cur && cur.parentNode.removeChild(cur);
    
    var elem = document.createElement('script');
    elem.type = 'text/javascript';
    elem.id = status;
    elem.src = script;
    document.getElementsByTagName("head")[0].appendChild(elem);
}

function insertStyle(css){
    //css has the format: selector{...style...}
    var elem, 
        cur = document.getElementById('_theme');
    cur && cur.parentNode.removeChild(cur);

    elem = document.createElement('link');
    elem.type = "text/css";
    elem.id = "_theme";
    elem.rel = "stylesheet";
    elem.href = css;
    document.getElementsByTagName('head')[0].appendChild(elem);
}

function loadPage(script_path, status)
{
    if(status == undefined)
    {
        status = "temp";
    }
     $("#appContainer").empty();
     insertScript(script_path, status);
}

function addPopup(script_path)
{
    var cur = document.getElementById('popupscr');
    cur && cur.parentNode.removeChild(cur);
    
    var elem = document.createElement('script');
    elem.type = 'text/javascript';
    elem.id = "popupscr";
    elem.src = script_path;
    document.getElementsByTagName("head")[0].appendChild(elem);
}
