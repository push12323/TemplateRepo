/**
 * @author prashant.raut
 */

function quizEngine(p)
{
    this.pages;
    this.currentPage = 0;
    this.scoreMgr;
    this.setQuizPages = function(pa)
    {
        this.pages = pa;
        footerDiv.addNavigation(this);
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
        console.log(this.pages[0]);
        loadPage("js/books/quiz/"+this.pages[0]);
        footerDiv.enablePrevBtn(false);
    }
    this.loadNextPage = function()
    {
        console.log(this.currentPage);
        if(this.currentPage < this.pages.length-1)
        {
            this.currentPage++;
            loadPage("js/books/quiz/"+this.pages[this.currentPage]);
            if(this.currentPage == this.pages.length-1)
            {
                footerDiv.enableNextBtn(false);
            }
            footerDiv.enablePrevBtn(true);
        }
    }
    this.loadPreviousPage = function()
    {
        if(this.currentPage > 0)
        {
            this.currentPage--;
            loadPage("js/books/quiz/"+this.pages[this.currentPage]);
            if(this.currentPage == 0)
            {
                footerDiv.enablePrevBtn(false);
            }
            footerDiv.enableNextBtn(true);
        }
    }
    this.setQuizPages(p);
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

