

var moviedataA = JSON.parse(movieA);
console.log (moviedataA);

for (var i = 0; i < moviedataA.length; i++) {
	var movie_object = moviedataA[i];
	document.getElementById("movies").innerHTML += `<div class="movie" style="padding-left:10pt">

														<p style="font-weight:bold; font-size:20pt; text-align:center">${movie_object.name}</p>

														<hr width=150> 

														<p style="width:500px; font-size:14pt; text-align:center">${movie_object.description}</p>
														
														<div style="width:500px; height:450px">
															
															<img src="${movie_object.image}" width=80% height=80%>
															
														</div>

														<p class="likes">${movie_object.likes}</p>
														
														<div>

															<img class="button" src="${movie_object.image_button}" width=40 height=40">
							
														</div>

													</div>`;
													
}


var like = document.getElementsByClassName("button");
for (let i=0; i<like.length; i++) {
like[i].addEventListener("click", function(){DisplayLikes(i)});
}


function DisplayLikes(i) {

	moviedataA[i].likes++;
	document.getElementsByClassName("likes")[i].innerHTML= moviedataA[i].likes;
}

		
