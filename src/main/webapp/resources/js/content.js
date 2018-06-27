var content;
var bookIds = [];
var bookDescrs = [];
var bookImages = [];

var worker = function(json){
    json = JSON.parse(json);
    jsonParse(json);
    pagination();
}

var jsonParse = function(json){
    bookDescrs = [];
    bookImages = [];
    jQuery.each(json, function(index, item){
        bookDescrs.push(item.bookDescr);
        bookImages.push(item.bookImage);
    }
)};

var pagination = function (){
    var currentPage = 1;
    var resultsPerPage = 9;
    var numberOfPages = Math.ceil(bookImages.length/resultsPerPage);
    pageGen( resultsPerPage);  
    
    function pageGen (){
        var initialValue = resultsPerPage * currentPage - resultsPerPage;
        var finalValue = resultsPerPage * currentPage;  
        var page1descrs = bookDescrs.slice(initialValue, finalValue);
        var page1images = bookImages.slice(initialValue, finalValue);        
        jQuery.each(page1images, function(index, item){
        genDivs(index, item, page1descrs);
        });  
    }

    function genDivs(index, item, page1descrs){
        $("#content").removeClass("d-flex justify-content-center");
        $("#content").addClass("row h-100 w-20 d-flex justify-content-start");
        $("#content").prepend("<div id = '"+ index +"'></div>");
        $("#" + index).addClass("book-column");	
        $("#" + index).prepend("<div class = \"row\"></div>");
        $("#" + index + " div").prepend("<img>");
        $("#" + index + " div").append("<p></p>");
        $("#" + index + " div p").prepend("<small></small>");
        $("#" + index + " div img").addClass("img-fluid float-left clearfix");			
        $("#" + index + " div img").css("max-width", "100%");
        $("#" + index + " div img").css("height", "90%");
        $("#" + index + " div img").attr('src', item);
        $("#" + index + " div p small").prepend(page1descrs[index]);
    }

    showCurrentPage();
				
    $("#next_page").on('click', function(){
        $("#content").html("");
        if (currentPage < numberOfPages) {
            currentPage = currentPage + 1;
        }
        pageGen();
        showCurrentPage();
    });

	$("#prev_page").on('click', function(){
	    $("#content").html("");
	    if (currentPage > 1) {
		    currentPage = currentPage - 1;
	    }
	    pageGen();
	    showCurrentPage();
    });
    
    function showCurrentPage(){
        //alert(currentPage);
        $("#current_page small").html(currentPage + " of " + numberOfPages);
        $("#button_menu").removeClass("d-none");
    }

};