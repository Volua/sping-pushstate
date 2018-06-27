$(function () {



	var load = function(url){

		$.ajax({
			url: "ajax",
			type: 'get',
			data: {
				pageId: url
			},
			success: function(response){
				$("#content").html("");
				console.log("clean screen is called")
				worker(response);
			}
 
		});

	}
	$(document).ready(function(){
		console.log("page is ready");
		url = window.location.pathname.substring(1);
		load(url);
	})

    $(document).on('click', 'a', function (e) {
        e.preventDefault();

        var $this = $(this),
            url = $this.attr("href"),
            title = $this.text();

        history.pushState({
            url: url,
            title: title
        }, title, url);

        document.title = title;

	   load(url);
	   
	});
	


    $(window).on('popstate', function (e) {
        var state = e.originalEvent.state;
        if (state !== null) {
            document.title = state.title;
            load(state.url);
        } else {
			document.title = 'World Regions';
			console.log("empting")
            $("#content").empty();
        }
	});

// for (var i in files) {
// 	$("#content").append(i+ ":" + files[i].bookState+ " ");
// }
});



