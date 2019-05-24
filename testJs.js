// Defining variables:
var mode="hard";
var normal=document.querySelector(".normal");
var gg=document.querySelector(".gg");
var colors=assignColor(mode);
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var pickedColor=colors[Math.floor(Math.random()*6)];
var title=document.querySelector("#title");
var newColor=document.querySelector("#newColor");
var message=document.querySelector("#message");
var easyM=document.querySelector("#easyM");
var hardM=document.querySelector("#hardM");
var l3rows=document.querySelector("#l3rows");
var hearts=3;
var heart1=document.querySelector("#heart1");
var heart2=document.querySelector("#heart2");
var heart3=document.querySelector("#heart3");
var idHeart=[heart1,heart2,heart3];
var life=document.querySelector(".life");
var container=document.querySelector(".container");
var spans=document.querySelectorAll(".spans");
var correct=0;


//Events

	// Assigning initial values:
colorDisplay.textContent=pickedColor.toUpperCase();
for(var i =0; i<colors.length; i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click", function(){
		if(pickedColor===this.style.backgroundColor && hearts!==0){
			paintAll(pickedColor);
			title.style.backgroundColor=pickedColor;
			if(correct===0){
				message.innerHTML="<strong>Correct!</strong>";
				newColor.innerHTML="<strong>Next Game?</strong>";
				this.children[0].innerHTML="<i class='fas fa-check'></i>"
				this.children[0].classList.remove("behind");
				this.children[0].classList.add("front");
				correct=1;

			}
			

		} else{
			if(hearts>1 && this.style.backgroundColor!=="rgb(35, 35, 35)"){
				this.style.backgroundColor="#232323";
				message.innerHTML="<strong>TRY AGAIN!</strong>";
				this.children[0].classList.remove("behind");
				this.children[0].classList.add("front");
				hearts--;	
				idHeart[hearts].classList.add("invisible");
			} else if (hearts<=1 && this.style.backgroundColor!=="rgb(35, 35, 35)"){
				colors=[];
				for(var i =0; i<6; i++){
					colors.push("#232323");
				}		
				for(var i =0; i<colors.length; i++){
					squares[i].style.backgroundColor=colors[i];
				}
				this.children[0].classList.remove("behind");
				this.children[0].classList.add("front");
				life.classList.add("invisible");
				normal.textContent="GAME OVER";
				normal.classList.remove("normal");
				normal.classList.add("gg");
				message.textContent="";
				newColor.innerHTML="<strong>NEW GAME?</strong>";
				


			}
			
		}

	})
};

	//New color event:
		//Click
newColor.addEventListener("click", function(){
	resetEverthing();
	hearts=3;
	newColor.style.border="white";
	colors=assignColor(mode);
	if(mode==="hard"){
		pickedColor=colors[Math.floor(Math.random()*6)];
	}else{
		pickedColor=colors[Math.floor(Math.random()*3)];
	}
	
	colorDisplay.textContent=pickedColor.toUpperCase();
	for(var i =0; i<colors.length; i++){
		squares[i].style.backgroundColor=colors[i];
		squares[i].children[0].classList.remove("front");
		squares[i].children[0].classList.add("behind");
		squares[i].children[0].innerHTML="<i class='fas fa-times'></i>"
	}
	newColor.innerHTML="<strong>NEW COLORS</strong>";
	message.textContent="";

});



	//Easy/Hard mode event:
easyM.addEventListener("click",function(){
	resetEverthing();
	mode="easy";
	heart3.classList.add("invisible");
	hearts=2;
	
	easyM.classList.add("selected");
	hardM.classList.remove("selected");
	colors=[];
	for(var i =0; i<6; i++){
		colors.push("#232323");
	}
	for(var i =0; i<colors.length; i++){
		squares[i].style.backgroundColor=colors[i];
		squares[i].children[0].classList.remove("front");
		squares[i].children[0].classList.add("behind");
		squares[i].children[0].innerHTML="<i class='fas fa-times'></i>"
	}


	l3rows.classList.add("invisible");
	
	colors=assignColor(mode);
	pickedColor=colors[Math.floor(Math.random()*3)];
	colorDisplay.textContent=pickedColor.toUpperCase();
	
	for(var i =0; i<colors.length; i++){
		squares[i].style.backgroundColor=colors[i];
	}
	
	newColor.innerHTML="<strong>NEW COLORS</strong>";
	message.textContent="";
	
});




hardM.addEventListener("click",function(){
	resetEverthing();
	mode="hard";
	hearts=3;
	hardM.classList.add("selected");
	easyM.classList.remove("selected");
	colors=assignColor(mode);
	pickedColor=colors[Math.floor(Math.random()*6)];
	colorDisplay.textContent=pickedColor.toUpperCase();
	for(var i =0; i<colors.length; i++){
		squares[i].style.backgroundColor=colors[i];
		squares[i].children[0].classList.remove("front");
		squares[i].children[0].classList.add("behind");
		squares[i].children[0].innerHTML="<i class='fas fa-times'></i>"
	}
	l3rows.classList.remove("invisible");
	newColor.innerHTML="<strong>NEW COLORS</strong>";
	message.textContent="";
})





//functions:

	//When right color is chosen, change the colors of all the squares.
const paintAll=(color)=>{
	for(var j=0; j<squares.length; j++){
		squares[j].style.backgroundColor=color;
	}
}

	//Create random colors:
function randomColor(){
	let r=Math.floor(Math.random()*256);
	let	g=Math.floor(Math.random()*256);
	let	b=Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")";
}
	
	//Assigning random colors to each square:
function assignColor(mode){
	var arr=[];
	var preColor="";
	if(mode==="hard"){
		for(var x=0;x<6;x++){
			randomClr=randomColor();
			arr.push(randomClr);
		}
	}else{
		for(var x=0;x<3;x++){
			var randomClr=randomColor();
			arr.push(randomClr);
		}
	}
	return arr;
}

function resetColors(arr,mode){
	arr=[];
	arr=assignColor(mode);
	return arr;
}

//Paint x back
function timesColor(mode,arr){
	for(var i =3;i<6;i++){
		if(mode==="easy"){
			arr[i].style.color="#232323";
		}else{
			arr[i].style.color="#e54751";
		}
	}
}



//Resetting everything after the game is over.
function resetEverthing(){
	idHeart.forEach(function(heart){
		heart.classList.remove("invisible");
	})
	title.style.backgroundColor="#05b1b7";
	correct=0;
	container.classList.remove("invisible");
	life.classList.remove("invisible");
	normal.textContent="You have 3 lives in level Hard;You have 2 lives in level Easy.";
	normal.classList.add("normal");
	normal.classList.remove("gg");
}

