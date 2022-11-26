document.getElementById("o").style.display = "none";  
var canvas = new fabric.Canvas('myCanvas')
 block_y=1;
 block_x=1;

block_image_width = 200;
block_image_height = 290;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img){
		block_image_object = Img;
			
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top :block_y,
			left :block_x
		});
	canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
keyPressed = e.keyCode;
console.log(keyPressed);
	if(keyPressed == '81')
	{
		new_image('Screenshot 2022-11-20 132915.png');
		console.log("q");
		document.body.style.backgroundImage = "url('backg.jpg')";
		document.getElementById("XD").innerHTML = "Master Rangers";
	}
	if(keyPressed == '87')
	{		
		new_image('Screenshot 2022-11-20 133042.png');
		console.log("w");
		document.body.style.backgroundImage = "url('backg.jpg')";
		document.getElementById("XD").innerHTML = "Master Rangers";
	}
	if(keyPressed == '69')
	{
		new_image('Screenshot 2022-11-20 133104.png');
		console.log("e");
		document.body.style.backgroundImage = "url('backg.jpg')";
		document.getElementById("XD").innerHTML = "Master Rangers";
	}
	if(keyPressed == '82')
	{
		new_image('Screenshot 2022-11-20 133124.png');
		console.log("r");
		document.body.style.backgroundImage = "url('backg.jpg')";
		document.getElementById("XD").innerHTML = "Master Rangers";
	}
	if(keyPressed == '84')
	{
		new_image('Screenshot 2022-11-20 133145.png');
		console.log("t");
		document.body.style.backgroundImage = "url('5850088.png')";
		document.getElementById("XD").innerHTML = "Sorry I meant rick roll XD";
		document.getElementById("o").style.display = "inline-block";
	}
}
