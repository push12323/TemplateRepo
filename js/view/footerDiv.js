/**
 * @author prashant.raut
 */
function footerDiv(d)
{
    this.engineRef;
    this.createFooterDiv = function()
    {
        d.addClass("footerDiv");
    }
    this.setFooterDimentions = function(h)
    {
        d.css("height", h+"px");
        //contentDiv.setContentDimentions();
        
    }   
    this.onQuizPrevClick = function()
    {
        swipeToPrevPg();
		console.log("onQuizPrevClick");
    }
    this.onQuizNextClick = function()
    {
        swipeToNextPg();
		console.log("onQuizNextClick");
    }
    this.enableNextBtn = function(bool)
    {
        if(bool)
        {
            $("#quizNextBtn").button("enable");   
        }
        else
        {
            $("#quizNextBtn").button("disable");
        }
    }
    this.enablePrevBtn = function(bool)
    {
        if(bool)
        {
            $("#quizPrevBtn").button("enable");   
        }
        else
        {
            $("#quizPrevBtn").button("disable");
        }
    }
	this.addContentNavigation = function()
	{
		d.empty();
		this.setFooterDimentions(document.body.clientHeight-parseInt($("#appHeader").css("height")))+"px";
		var prevBtn = $("<div style='float:left;background-color:#5E97C7;height:100%;width:50px;color:black;' onclick='footerDiv.onQuizPrevClick()'>></div>");
        d.append(prevBtn);
        
        var nextBtn = $("<div style='float:right;background-color:#5E97C7;height:100%;width:50px;color:black;' onclick='footerDiv.onQuizNextClick()'><</div>");
        d.append(nextBtn);
        d.trigger("create");
	}
    this.emptyFooter = function()
    {
        d.empty();
        this.setFooterDimentions(0);
    }
    this.createFooterDiv();
}
