var option = "purchased";



$(document).ready(function(){
	


	jQuery(function(){
		jQuery('#featured').click();

	});

	$('#books').on('click',function(){
		$("#books").html("");
		var value = $(event.target).closest('div')['0'].outerText;
		value = jQuery.trim(value);
		//console.log(value);
		//var obj = {"category" : value};

		var obj ={
			"value" : "categories",
			"category" : value};
		
		console.log(obj);
		

		$.ajax({
			type: "POST",
			url: "",
			data: JSON.stringify(obj),
			dataType: 'json',
			cache:false,
			timeout:100000,
			contentType:'application/json',

			success: function(text){
				console.log(text);
				myFunction(text);
			},
			error: function(){
				console.log("ERROR: ");
			},
			done : function(e){
				console.log("DONE");
			}
		});

	});


	$('a.menu-btn').on('click',function(){
		//console.log(this.id);
		$("#category").html("");

		var id =this.id;
		//choose

		switch(id){
			case id ="featured":
				//console.log(id);
				$("#idNav *").css('background-position','');
				$("#featured").css('background-position','-80px 20.031250em');

				option="featured"
				break;
			case id ="topcharts":
				//console.log(id);
				option="topcharts"
				break;
			case id ="categories":
				//console.log(id);
				$("#idNav *").css('background-position','');
				$("#categories").css('background-position','-80px 20.031250em');

				option="categories"
				
				break;
			case id ="purchased":
				//console.log(id);
				$("#idNav *").css('background-position','');
				$("#purchased").css('background-position','-80px 20.031250em');

				option="purchased"
				break;
			default:
				//console.log('default');
		}
		//#category > a:nth-child(2)
		//#Education > div > img
		
		console.log(option);
		console.log("here begin changes to history")
		// history.pushState({
		// 	url: option,
		// 	title: 'title'
		// }, title, option);

		$.ajax({
			type: "GET",
			//url:"http://localhost:8080/response",
			url: "/" + option,
			data: { get_param: 'value' }, 
			cache:false,
			timeout:100000,

			success: function(text){
				console.log(text);
				//$("#divchyk").prepend(text);
				//var obj = JSON.stringify(text);

				$("body").append(JSON.stringify(text));
				var obj = text;
				console.log(obj);
				switch (option) {
					case option = "categories":
					$('#title small').html("Categories");
						categoriesFunc(obj);
						break;
						case option = "purchased":
						$('#title small').html("Purchased");
						myFunction(obj);
						break;
						case option = "featured":
						$('#title small').html("New books We love");
						myFunction(obj);
						break;
						case option = "topcharts":
						$('#title small').html("Top free");
						myFunction(obj);
						break;
					default:
						break;
				}
				//var obj = myFunction(text);
				//console.log(obj[1]);
			},
			error: function(){
				console.log("ERROR: ");
			},
			done : function(e){
				console.log("DONE");
			}
		});

	});
	
});

	//Parsing json

function categoriesFunc(obj){
	$("#button_menu").addClass("d-none");
	var categories = [];
	var imageUrls = [];

	jQuery.each(obj,function(index,item){
		$('#books').html("");
		categories.push(item.category);
		//console.log(item);
		imageUrls.push(item.imageUrl);
	});

	jQuery.each(imageUrls, function(index, imageUrl){
		//console.log(index);
		createCategoryDiv(categories[index], categories[index], imageUrl);

	});	

	function createCategoryDiv(id, item, imageUrl){
			//alert("hello from categories div");
			$("#books").addClass("remove d-flex justify-content-start");
			$("#books").addClass("row h-100 d-flex justify-content-center");
			$("#books").prepend("<a href=\"#\"></a>");
			$("#books a").prepend("<div id = \"\"></div>");
			if($("#books div")["0"].id == ""){
				$("#books div")["0"].id = id;
				//console.log($("#books div")["0"]);
			}
			$("#"+id).addClass("book-column");	
			$("#"+id).prepend("<div class = \"row\"></div>");					
			$("#" + id + " div").prepend("<img>");
			$("#" + id + " div").append("<p></p>");
			$("#" + id + " div p").prepend("<small></small>");
			$("#" + id + " div img").addClass("img-fluid float-left clearfix");			
			$("#" + id + " div img").css("max-width", "100%");
			$("#" + id + " div img").css("height", "70%");
			$("#" + id + " div img").attr('src', item);
			$("#" + id + " div img").attr('src', imageUrl);
			$("#" + id + " div p small").prepend(item);

		};

}

		

function myFunction(obj){

	//console.log(obj);
	var bookDescrs = [];
	var bookTitles = [];
	var bookImages = [];
	var bookIds = [];

	jQuery.each(obj, function(index, item) {
	//clear window
		$("#books").html("");
		console.log(item.bookDescr);

		bookIds.push(this.id);
		//alert(this.id);
		bookTitles.push(item.bookTitle);
		bookDescrs.push(item.bookDescr);
		bookImages.push(item.bookImage)
		
		//console.log(bookDescr);
		$("#books").add("div").addClass("");
		var pdiv = $("p").add("div");				
	});
			//console.log("Number of pages: " + Math.ceil(bookIds.length/4));
			

			$(document).ready(function pagination(){
				var currentPage = 1;
				var numberOfResultsPerPage = checkSize();
				console.log('number of results: ' + numberOfResultsPerPage);
				;

				var numberOfPages = Math.ceil(bookIds.length/numberOfResultsPerPage);
				//pageGenerator(numberOfResultsPerPage, currentPage);

				showCurrentPage(currentPage);
				
					$("#next_page").on('click', function(){
						$("#books").html("");
						//alert("hello world!");
						if (currentPage < numberOfPages) {
							currentPage = currentPage + 1;
						}
						pageGenerator(numberOfResultsPerPage, currentPage);
						showCurrentPage(currentPage);

					});

					$("#prev_page").on('click', function(){
						$("#books").html("");
						console.log(currentPage);
						if (currentPage > 1) {
							currentPage = currentPage - 1;
						}
						pageGenerator(numberOfResultsPerPage, currentPage);
						showCurrentPage(currentPage);


					});



					function pageGenerator(numberOfResultsPerPage, currentPage){
						var dataLength = bookIds.length;
						//console.log(dataLength);
						
						var numberOfPages = Math.ceil(bookIds.length/numberOfResultsPerPage);
						
						var enteras = Math.floor(bookIds.length/numberOfResultsPerPage)* numberOfResultsPerPage;
						//console.log(enteras);
						
					//	3 pages   4 results per page
						
					//	 page  = results per page x page number - results per page  --- results per page x page number;
					//   prev, next
					

						var initialValue = numberOfResultsPerPage * currentPage - numberOfResultsPerPage;
						var finalValue = numberOfResultsPerPage * currentPage;
						
		// 				
		// 				0 - 4
		// 				4 - 8
		// 				8 - 12
						
						var decenas = (bookIds.length/numberOfResultsPerPage)%1* numberOfResultsPerPage;
						
						var page1ids = bookIds.slice(initialValue, finalValue);
						
						var page1descrs = bookDescrs.slice(initialValue, finalValue);
						
						var page1images = bookImages.slice(initialValue, finalValue);
						
						
						jQuery.each(page1images, function(index, item){
						//alert(index);
						//clear window
						createBookDiv(index+1, item);
						//$("# img").attr('src', item);
				
						});
			
						jQuery.each(page1descrs, function(index, item){
						//alert(index);
						$("#" + (index+1) + " small").prepend(item);		//$("# img").attr('src', item);
				
						});
					}

					function showCurrentPage(currentPage){
						//alert(currentPage);
						$("#current_page small").html(currentPage + " of " + numberOfPages);
						$("#button_menu").removeClass("d-none");

					}


						
					// $(window).resize(function(){     

					// 	checkSize();
						
					// });

					function checkSize(){
						if ($('header').width() == 991){
									
							console.log('hello world!');
							if (numberOfResultsPerPage!=9) {
								$("#books").html("");
								numberOfResultsPerPage = 9;
								numberOfPages = Math.ceil(bookIds.length/numberOfResultsPerPage);
								pageGenerator(numberOfResultsPerPage, currentPage);
								showCurrentPage(currentPage);
								return numberOfResultsPerPage;

							}
		
							// is mobile device
		
						} else{
							$("#books").html("");
		
							numberOfResultsPerPage = 9;
							numberOfPages = Math.ceil(bookIds.length/numberOfResultsPerPage);
							pageGenerator(numberOfResultsPerPage, currentPage);
							showCurrentPage(currentPage);
							return numberOfResultsPerPage;

		
						}

		
						
					}

			});
			
	
	function createBookDiv(id, item){
		$("#books").removeClass("d-flex justify-content-center");
		$("#books").addClass("row h-100 w-20 d-flex justify-content-start");
		$("#books").prepend("<div id = \"\"></div>");
		if($("#books div")["0"].id == ""){
			$("#books div")["0"].id = id;
			//console.log($("#books div")["0"]);
		}
		$("#"+id).addClass("book-column");	
		$("#"+id).prepend("<div class = \"row\"></div>");					
		$("#" + id + " div").prepend("<img>");
		$("#" + id + " div").append("<p></p>");
		$("#" + id + " div p").prepend("<small></small>");
		$("#" + id + " div img").addClass("img-fluid float-left clearfix");			
		$("#" + id + " div img").css("max-width", "100%");
		$("#" + id + " div img").css("height", "90%");
		$("#" + id + " div img").attr('src', item);
	}
	

}


	
