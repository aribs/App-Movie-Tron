var selectedMovie 
$(document).ready(function(){
	$(".message").hide();
	getMovie();
	function getId(){
		var strId = "tt05";
		for (i=0; i < 5;i++){
			var numberId = Math.round(Math.random() * (9 - 0) + 0);
			numberId = numberId.toString();
			strId = strId + numberId;
		};
		
		return strId;
	};
	function getMovie(){
		var id = getId();
		var url = "http://www.omdbapi.com/?i=" + id + "&plot=short&r=json" 
		$.ajax({
			url: url,
			data: '',
			dataType: "json",
			success:function(response){printPhoto(response)},
			error:function(){console.log("error, movie not found")}
		});
	};
	function printPhoto(movie){
		$(".message").hide();
		selectedMovie = movie;
		console.log(selectedMovie.Year);
		if(movie.Poster != 'N/A'){
			$("#cartel").attr('src', movie.Poster);
		}
		else{
					getMovie();
				}
			};
		});
		$("#btnSend").on("click",function (){
			var playerYear = $("#inputYear").val();
			playerYear = parseInt(playerYear);
			console.log(selectedMovie.Year);
			if(playerYear === parseInt(selectedMovie.Year)){
				$("#right").show();
				
			}
			else{
				$("#wrong").show();

			}
});