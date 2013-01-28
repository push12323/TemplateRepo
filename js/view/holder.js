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
    footerDiv.emptyFooter();
    loadPage("js/view/home_screen.js");
}

function gotoMyBookScreen()
{
    headerDiv.createMyBooksBtns();
	footerDiv.emptyFooter();
	insertStyle("css/my_books.css");
    loadPage("js/view/my_books.js");
}

function gotoBookMenu()
{
	insertStyle("css/book_menu.css");
    loadPage("js/view/book_menu.js");
}

function gotoNoteScreen()
{
	loadPage("js/view/notesScreen.js");
}

function loadContentEngine()
{
	console.log("loadContentEngine");
    cEngine = new contentEngine(["page_1.js", "page_2.js", "page_3.js", "page_4.js", "page_5.js", "page_6.js", "page_7.js", "quiz_1.js", "quiz_2.js", "quiz_3.js", "quiz_4.js", "quiz_5.js", "quiz_6.js", "quiz_7.js"]);
}

function loadQuizEngine()
{
	console.log("loadQuizEngine");
    qEngine = new quizEngine(["quiz_1.js", "quiz_2.js", "quiz_3.js", "quiz_4.js", "quiz_5.js", "quiz_6.js", "quiz_7.js"]);    
	
	//insertStyle("css/quiz.css");
}

function refreshContentNavigation(pSession)
{
	$.mobile.silentScroll(0);
	contentDiv.emptyContentDiv();
    headerDiv.addContentNavigation(pSession);
	footerDiv.addContentNavigation();
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

