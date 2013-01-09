/**
 * @author prashant.raut
 */
createFirstQuestion();

function createFirstQuestion()
{
    console.log("createFirstQuestion"); 
    $("#appContainer").append("<div id='pageCont'/>");
    $("#pageCont").css("height", "100%");
    $("#pageCont").css("backgroundColor", "gray");
    $("#pageCont").css("color", "white");
    //$('#pageCont').css('textShadow','black 1px 1px 1px');
    $('#pageCont').css('textAlign','center');
    $("#pageCont").append("<div id='formCont' style='display:inline-block; margin-top:20px; width:350px;'/>");
    $("#formCont").append("<h2>Prototype-based programming</h2><br/>Prototype-based programming is a style of object-oriented programming in which classes are not present, and behavior reuse (known as inheritance in class-based languages) is accomplished through a process of decorating existing objects which serve as prototypes. This model is also known as class-less, prototype-oriented, or instance-based programming. The original (and most canonical) example of a prototype-based language is the programming language Self developed by David Ungar and Randall Smith. However, the class-less programming style has recently grown increasingly popular, and has been adopted for programming languages such as JavaScript, Cecil, NewtonScript, Io, MOO, REBOL, Kevo, Squeak (when using the Viewer framework to manipulate Morphic components), and several others<br/>");
    $("#pageCont").trigger("create");
}
