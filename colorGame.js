// Defining variables:
var mode="hard";
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

//Events

	// Assigning initial values:
colorDisplay.textContent=pickedColor.toUpperCase();
for(var i =0; i<colors.length; i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].style.transition="all 0.4s ease-in-out";
	squares[i].addEventListener("click", function(){
		if(pickedColor===this.style.backgroundColor){
			paintAll(pickedColor);
			title.style.backgroundColor=pickedColor;
			message.innerHTML="<strong>Correct!</strong>";
			newColor.innerHTML="<strong>PLAY AGAIN?</strong>";

		} else{
			this.style.backgroundColor="#232323";
			message.innerHTML="<strong>TRY AGAIN!</strong>";
			hearts--;
		}

	})
};

	//New color event:
		//Click
newColor.addEventListener("click", function(){
	title.style.backgroundColor="#e577a5";
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
	}
	newColor.innerHTML="<strong>NEW COLORS</strong>";
	message.textContent="";

});



	//Easy/Hard mode event:
easyM.addEventListener("click",function(){
	console.log("right.");
	title.style.backgroundColor="#e577a5";
	console.log("right1");
	easyM.classList.add("selected");
	console.log("right2");
	hardM.classList.remove("selected");
	colors=[];
	for(var i =0; i<6; i++){
		colors.push("#232323");
	}
	for(var i =0; i<colors.length; i++){
		squares[i].style.backgroundColor=colors[i];
	}


	l3rows.classList.add("invisible");
	mode="easy";
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
	title.style.backgroundColor="#e577a5";
	hardM.classList.add("selected");
	easyM.classList.remove("selected");
	mode="hard";
	colors=assignColor(mode);
	pickedColor=colors[Math.floor(Math.random()*6)];
	colorDisplay.textContent=pickedColor.toUpperCase();
	title.style.backgroundColor="#e577a5";
	for(var i =0; i<colors.length; i++){
		squares[i].style.backgroundColor=colors[i];
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
	// if(mode==="easy"){
	let r=Math.floor(Math.random()*256);
	let	g=Math.floor(Math.random()*256);
	let	b=Math.floor(Math.random()*256);
	// } else{
	// 	r=Math.floor(Math.random()*256);
	// 	g=Math.floor(Math.random()*256);
	// 	b=Math.floor(Math.random()*256);
	// }
	return "rgb("+r+", "+g+", "+b+")";
}
	
	//Hard mode assigning colors:
// function hardMode(str){
// 	r=str[4];
// 	g=str[7];
// 	b=str[10];

// }



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

