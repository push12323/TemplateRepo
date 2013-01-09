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
    $("#formCont").append("<h2>The Class</h2><br/>JavaScript is a prototype-based language which contains no class statement, such as is found in C++ or Java. This is sometimes confusing for programmers accustomed to languages with a class statement. Instead, JavaScript uses functions as classes. Defining a class is as easy as defining a function. In the example below we define a new class called Person.<br/>");
    $("#formCont").append("<h2>The Constructor</h2><br/>The constructor is called at the moment of instantiation (the moment when the object instance is created). The constructor is a method of the class. In JavaScript, the function serves as the constructor of the object; therefore, there is no need to explicitly define a constructor method. Every action declared in the class gets executed at the time of instantiation. The constructor is used to set the object's properties or to call methods to prepare the object for use. Adding class methods and their definitions occurs using a different syntax described later in this article. In the example below, the constructor of the class Person displays an alert when a Person is instantiated.<br/>");
    $("#pageCont").trigger("create");
}
