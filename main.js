// Create a reference for the canvas

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
	{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function aplhabetkey()
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90));
	{
		alphabetkey();
		document.getElementById("d1").innerHTML="You pressed Alphabet key";
		console.log("alphabet key");
	}                                                              //upload respective image with the message. 

}
function numberkey()
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=48 && keyPressed<=57));
	{
		numberkey();
		document.getElementById("d1").innerHTML="You pressed Number key";
		console.log("number key");
	}               		
}
function arrowkey()
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=37 && keyPressed<=40));
	{
		arrowkey();
		document.getElementById("d1").innerHTML="You pressed arrow key";
		console.log("arrow key");
	}               
}
function specialkey()
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=17));
	{
		specialkey();
		document.getElementById("d1").innerHTML="You pressed special key";
		console.log("special key");
	}               
}
function otherkey()
{
	
	canvas = document.getElementById('myCanvas');
	ctx = canvas.gotContext("2d");
	window.addEventListener("keydown", my_keydown);
}
	
