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
			message.textContent="Correct!";
			newColor.textContent="PLAY AGAIN?";

		} else{
			this.style.backgroundColor="black";
			message.textContent="Try again!";
		}

	})
};

	//New color event:
newColor.addEventListener("click", function(){
	title.style.backgroundColor="#6490d6";
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
	newColor.textContent="NEW COLORS";
	message.textContent="";

});
	//Easy/Hard mode event:
easyM.addEventListener("click",function(){
	colors=[];
	for(var i =0; i<6; i++){
		colors.push("black");
	}
	for(var i =0; i<colors.length; i++){
		squares[i].style.backgroundColor=colors[i];
	}

	l3rows.classList.add("invisible");
	mode="easy";
	colors=assignColor(mode);
	pickedColor=colors[Math.floor(Math.random()*3)];
	colorDisplay.textContent=pickedColor.toUpperCase();
	title.style.backgroundColor="#6490d6";
	for(var i =0; i<colors.length; i++){
		squares[i].style.backgroundColor=colors[i];
	}
	
	newColor.textContent="NEW COLORS";
	message.textContent="";
});

hardM.addEventListener("click",function(){
	mode="hard";
	colors=assignColor(mode);
	pickedColor=colors[Math.floor(Math.random()*6)];
	colorDisplay.textContent=pickedColor.toUpperCase();
	title.style.backgroundColor="#6490d6";
	for(var i =0; i<colors.length; i++){
		squares[i].style.backgroundColor=colors[i];
	}
	l3rows.classList.remove("invisible");
	newColor.textContent="NEW COLORS";
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
	let g=Math.floor(Math.random()*256);
	let b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}
	//Assigning random colors to each square:
function assignColor(mode){
	var arr=[];
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

