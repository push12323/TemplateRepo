/**
 * @author prashant.raut
 */
function contentEngine(p)
{
    this.pages;
    this.currentPage = 0;
    this.scoreMgr;
	this.isInitialpagesLoaded = false;
    this.setContentPages = function(pa)
    {
		this.pages = pa;
        this.loadFirstPage();
        this.scoreMgr = new scoreManager();
    }
    this.getContentPages = function()
    {
        return this.pages;
    }
    this.loadFirstPage = function()
    {
        createSwiperDivs(this);
		$.mobile.loading('show', { theme: "b", text: "Please wait Loading Content...", textonly: true, textVisible:true });
    }
	
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
		
		if(!cEngine.isInitialpagesLoaded)
		{
			//var func = "createQuestion_"+(currentId+1);
			//window[func]($('#'+(currentId+1)));
			//console.log("Calling function "+func);
			currentId++;
			if(currentId < 3)
			{
				//qEngine.loadContentPage(currentId+1);
				setTimeout(pCallDelayFunction, 500, cEngine);
			}
			else
			{
				//currentId++;
				cEngine.isInitialpagesLoaded = true;
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
    this.setContentPages(p);
}
function pCallDelayFunction(ref)
{
	ref.loadContentPage(currentId);
}
