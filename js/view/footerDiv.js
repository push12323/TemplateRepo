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
        contentDiv.setContentDimentions();
        
    }
    this.addNavigation = function(ref)
    {
        console.log("addQuizNavigation");
        this.engineRef = ref;
        this.setFooterDimentions(60);
        
        var prevBtn = $("<div style='float:left;'><button id='quizPrevBtn' data-role='button' data-inline='true' onclick='footerDiv.onQuizPrevClick()'>Previous</button></div>");
        d.append(prevBtn);
        
        var nextBtn = $("<div style='float:right;'><button id='quizNextBtn' data-role='button' data-inline='true' onclick='footerDiv.onQuizNextClick()'>Next</button></div>");
        d.append(nextBtn);
        d.trigger("create");
    }
    
    this.onQuizPrevClick = function()
    {
        this.engineRef.loadPreviousPage();
    }
    this.onQuizNextClick = function()
    {
        this.engineRef.loadNextPage();
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
    this.emptyFooter = function()
    {
        d.empty();
        this.setFooterDimentions(20);
    }
    this.createFooterDiv();
}
