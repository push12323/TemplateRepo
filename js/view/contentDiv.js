/**
 * @author prashant.raut
 */
function contentDiv(d)
{
    this.createContentDiv = function()
    {
        d.addClass("contentDiv");
        this.setContentDimentions();
        //loadPage("js/view/Login.js");
		gotoMyBookScreen();
    }
    
    this.setContentDimentions = function()
    {
        /*var h = (document.body.clientHeight-parseInt($("#appHeader").css("height"))-parseInt($("#appFooter").css("height")))+"px";
        console.log(h);
        d.css("height", h);*/
    }
	this.emptyContentDiv = function()
	{
		d.empty();
	}
    this.createContentDiv();
}

var currentId = 0;
var swiperP;
var previousSlide;
var notes = [];
var currentSession;
function createSwiperDivs(ref)
{
	currentId = 0;
	currentSession = ref;
	var func;
	var color;
	$("#appContainer").empty();
	$("#appContainer").append("<div id='pPageSwipe'/>");
	$("#appContainer").append("<div id='noteContainer' style='position:absolute;top:-200px;right:50px;z-index:20;'><textarea style='width:250px;height:100px;' name='textarea' id='noteText'></textarea><button onclick='submitNote()'>Add Note</button></div>");
	$("#appContainer").append("<div id='pChList' style='padding:5px; box-shadow: 5px 5px 2px #888; position:absolute; top:45px; left:45px; background-color:white; z-index:19'/>");
	for(var i=0; i<headerDiv.pChapterList.length; i++)
	{
		if(i<2)
		{
			func = "pOnChapterListClick(event)";
			color = "black";
		}
		else
		{
			func = null;
			color = "gray";
		}
		$('#pChList').append("<div style='margin-top:5px; width:370px; height:30px; border:1px solid #D6D6D6; background-color:#EAEAEA;' id='pChList"+i+"' onclick='"+func+"'><div style='color:"+color+"; margin-left:5px; margin-top:5px; float:left; text-weight:bold;'>"+headerDiv.pChapterList[i]+"</div><div style='float:right; margin-right:10px; margin-top:7px'><image src='assets/images/theme1/Topic_arrow_disable.png'/></div></div>");
	}
	console.log($('#pChList').css("height"));
    $("#pPageSwipe").css("height", "100%");
    //$("#pPageSwipe").css("color", "white");
    //$('#pPageSwipe').css('textShadow','black 1px 1px 1px');
    $('#pPageSwipe').css('textAlign','center');
    $("#pPageSwipe").append("<div id='pSwiper' style='display:inline-block; width:900px;'/>");
	
	$("#pSwiper").append("<div class='swiper-container' />");
	$(".swiper-container").css("height", "590px");
	$(".swiper-container").css("width", "100%");
    $(".swiper-container").append("<div class='swiper-wrapper' />");
	$(".swiper-wrapper").append("<div class='swiper-slide'><div id='1'>Windows 7</div></div><div class='swiper-slide'><div id='2'>Windows Vista</div></div><div class='swiper-slide'><div id='3'>Windows XP</div></div>");
	//$(".swiper-slide").css("height", "590px");
	$(".swiper-slide").css("width", "100%");
	<!-- Scrollbar: -->
    //$("#pSwiper").append("<div class='swiper-scrollbar' />");
         
	previousSlide = 0;
	swiperP = new Swiper('.swiper-container', {
	
		slidesPerSlide : 1,
		onTouchEnd : function()
		{
			if(swiperP.activeSlide != previousSlide && swiperP.activeSlide > previousSlide)
			{
				if(currentId < currentSession.pages.length)
				{
					console.log("Appending Child >> "+currentId);
					console.log("Appending Child >> "+currentSession.pages.length);
					var tempVal = currentId+1;
					var newSlide = swiperP.createSlide('<div id='+tempVal+'>game</div>');
					newSlide.append();
					ref.loadContentPage(currentId);
					previousSlide = swiperP.activeSlide;
					//currentId++;
				}
			}
		},
		//Scrollbar:
		/*scrollbar: {
			container : '.swiper-scrollbar',
			draggable : true,
			hide: true
		}*/
	})
	$('#noteContainer').outside('click', onNoteEditorClick);
	$("#noteText").click(function(event){
		event.stopPropagation();	
	});
	//showNoteEditor();
	$("#appHeader").css("z-index", "21");
	$("#appContainer").trigger("create");
	ref.loadContentPage(currentId);
}

function onNoteEditorClick()
{
	if($("#noteContainer").css("top") == "50px")
	{
		showNoteEditor();
	}
	if($("#pChList").css("top") == "45px")
	{
		pHeaderChapterList();
	}
}

function swipeToNextPg()
{
	swiperP.swipeNext();
	if(swiperP.activeSlide != previousSlide && swiperP.activeSlide > previousSlide)
	{
		if(swiperP.activeSlide != previousSlide && swiperP.activeSlide > previousSlide)
		{
			if(currentId < currentSession.pages.length)
			{
				console.log("Appending Child >> "+currentId);
				var tempVal = currentId+1;
				var newSlide = swiperP.createSlide('<div id='+tempVal+'>game</div>');
				newSlide.append();
				currentSession.loadContentPage(currentId);
				previousSlide = swiperP.activeSlide;
				//currentId++;
			}
		}
	}
}
function swipeToPrevPg()
{
	swiperP.swipePrev();
}
(function($){
    $.fn.outside = function(ename, cb){
        return this.each(function(){
            var $this = $(this),
                self = this;

            $(document).bind(ename, function tempo(e){
                if(e.target !== self && !$.contains(self, e.target)){
                    cb.apply(self, [e]);
                    if(!self.parentNode) $(document.body).unbind(ename, tempo);
                }
            });
        });
    };
}(jQuery));


function showNoteEditor()
{
	//$("#noteContainer").css("display", "block");
	$("#noteText").val("");
	$("#noteText").css("width", "300px");
	$("#noteText").css("height", "100px");
	console.log($("#noteContainer").css("top"));
	if($("#noteContainer").css("top") == "-200px")
	{
		$("#noteContainer").animate({top:50}, 500);
		$(this).toggleClass("closed");
		if(notes["bookId"])
		{
			if(notes["bookId"][currentSession.pages[swiperP.activeSlide].split(".")[0]])
			{
				$("#noteText").val(notes["bookId"][currentSession.pages[swiperP.activeSlide].split(".")[0]]);
			}
		}
	}
	else
	{
		$("#noteContainer").animate({top:-200}, 500);
		$(this).toggleClass("closed"); 
	}
}
function submitNote()
{
	if(!notes["bookId"])
	{
		notes["bookId"] = [];
	}
	notes["bookId"][currentSession.pages[swiperP.activeSlide].split(".")[0]] = $("#noteText").val();
	console.log(notes["bookId"]);
	console.log(notes["bookId"][currentSession.pages[swiperP.activeSlide].split(".")[0]]);
	console.log(notes["bookId"].length);
	for(var i in notes["bookId"])
	{
		console.log(notes["bookId"][i]);
	}
	showNoteEditor();
}
