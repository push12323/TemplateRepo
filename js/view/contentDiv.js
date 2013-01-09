/**
 * @author prashant.raut
 */
function contentDiv(d)
{
    this.createContentDiv = function()
    {
        d.addClass("contentDiv");
        this.setContentDimentions();
        loadPage("js/view/Login.js");
    }
    
    this.setContentDimentions = function()
    {
        /*var h = (document.body.clientHeight-parseInt($("#appHeader").css("height"))-parseInt($("#appFooter").css("height")))+"px";
        console.log(h);
        d.css("height", h);*/
    }
    this.createContentDiv();
}
