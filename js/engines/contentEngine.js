/**
 * @author prashant.raut
 */
function contentEngine(p)
{
    this.pages;
    this.currentPage = 0;
    this.setContentPages = function(pa)
    {
        this.pages = pa;
        footerDiv.addNavigation(this);
        this.loadFirstPage();
    }
    this.getContentPages = function()
    {
        return quizPages;
    }
    this.loadFirstPage = function()
    {
        console.log(this.pages[0]);
        loadPage("js/books/content/"+this.pages[0]);
        footerDiv.enablePrevBtn(false);
    }
    this.loadNextPage = function()
    {
        console.log(this.currentPage);
        if(this.currentPage < this.pages.length-1)
        {
            this.currentPage++;
            loadPage("js/books/content/"+this.pages[this.currentPage]);
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
            loadPage("js/books/content/"+this.pages[this.currentPage]);
            if(this.currentPage == 0)
            {
                footerDiv.enablePrevBtn(false);
            }
            footerDiv.enableNextBtn(true);
        }
    }
    this.setContentPages(p);
}
