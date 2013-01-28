/**
 * @author prashant.raut
 */

function quizEngine(p)
{
    this.pages;
    this.currentPage = 0;
    this.scoreMgr;
	this.isInitialpagesLoaded = false;
    this.setQuizPages = function(pa)
    {
        this.pages = pa;
        this.loadFirstPage();
        this.scoreMgr = new scoreManager();
        
    }
    this.setScore = function(bool)
    {
        this.scoreMgr.setScore(bool, this.currentPage);
    }
    this.getScrore = function()
    {
        return this.scoreMgr.getPercentageScore();
    }
    this.getQuizPages = function()
    {
        return quizPages;
    }
    this.loadFirstPage = function()
    {
		//insertStyle("css/page_swipe_cont.css");
		//$.getScript("js/view/page_swipe_container.js", this.onContainerLoad);
		createSwiperDivs(this);
		$.mobile.loading('show', { theme: "b", text: "Please wait Loading Content...", textonly: true, textVisible:true });
		//this.loadContentPage(1);
    }
	/*this.onContainerLoad = function()
	{
		console.log("onContainerLoad");
		qEngine.loadContentPage(1);
	}*/
	
	this.loadContentPage = function(no)
	{
		console.log("Loading page "+this.pages[no]);
		var path;
		if(this.pages[no].substr(0,4) == "page")
		{
			path = "js/books/content/";
		}
		else if(this.pages[no].substr(0,4) == "quiz")
		{
			path = "js/books/quiz/";
		}
		console.log("Path >> "+path+this.pages[no]);
		$.getScript(path+this.pages[no], this.onResult);
		
	}
	this.onResult = function(data)
	{
		console.log("onResult >> "+currentId);
		//createFirstQuestion($("#pFirstDiv"));
		
		if(!qEngine.isInitialpagesLoaded)
		{
			//var func = "createQuestion_"+(currentId+1);
			//window[func]($('#'+(currentId+1)));
			//console.log("Calling function "+func);
			currentId++;
			if(currentId < 3)
			{
				//qEngine.loadContentPage(currentId+1);
				setTimeout(pCallDelayFunction, 500, qEngine);
			}
			else
			{
				//currentId++;
				qEngine.isInitialpagesLoaded = true;
				$.mobile.loading('hide');
			}
		}
		else
		{
			//var func = "createQuestion_"+(currentId);
			//window[func]($('#'+(currentId)));
			//console.log("Calling function "+func);
			currentId++;
		}
	}
    this.setQuizPages(p);
}
function callDelayFunction(ref)
{
	ref.loadContentPage(currentId+1);
}

function scoreManager()
{
    this.totalScore = 0;
    this.outOffScore = 0;
    this.scrArr = new Array();
    this.setScore = function(bool, index)
    {
        if(bool)
        {
            this.scrArr[index] = 1;
        }
        else
        {
            this.scrArr[index] = 0;
        }
    }
    
    this.getPercentageScore = function()
    {
        var score = 0;
        for(var i=0; i<this.scrArr.length; i++)
        {
            score += this.scrArr[i];
        }
        return ((score/this.scrArr.length)*100)+"%";
    }
}

