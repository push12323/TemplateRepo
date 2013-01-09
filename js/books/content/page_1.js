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
    $("#formCont").append("<h2>Object-oriented programming</h2><br/>Object-oriented programming is a programming paradigm that uses abstraction to create models based on the real world. It uses several techniques from previously established paradigms, including modularity, polymorphism, and encapsulation. Today, many popular programming languages (such as Java, JavaScript, C#, C++, Python, PHP, Ruby and Objective-C) support object-oriented programming (OOP). Object-oriented programming may be seen as the design of software using a collection of cooperating objects, as opposed to a traditional view in which a program may be seen as a collection of functions, or simply as a list of instructions to the computer. In OOP, each object is capable of receiving messages, processing data, and sending messages to other objects. Each object can be viewed as an independent little machine with a distinct role or responsibility.Object-oriented programming is intended to promote greater flexibility and maintainability in programming, and is widely popular in large-scale software engineering. By virtue of its strong emphasis on modularity, object oriented code is intended to be simpler to develop and easier to understand later on, lending itself to more direct analysis, coding, and understanding of complex situations and procedures than less modular programming methods.2<br/>");
    $("#pageCont").trigger("create");
}
