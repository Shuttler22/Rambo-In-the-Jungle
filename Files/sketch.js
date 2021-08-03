
//    Varun are you there??
var runimg
//there
//ma'am
// ok
//can you see a white line we can talk there without slashes
// can you put all files out of files foldr
// i think its creating problem
// done ma'am
// did you put the sketch in files????
function preload()
{
	runimg = loadImage("Images/Guns/Rambogun1.png")
//	gunAnimation = loadAnimation("Images/Guns/Rambogun1.png","Images/Guns/Rambogun2.jpg","Images/Guns/Rambogun3.jpg","Images/Guns/Rambogun4.jpg")

//	runningAnimation = loadAnimation("Images/moving/run1.jpg",'Image/moving/run2.jpg','Images/moving/run3.jpg','Images/moving/run4.jpg','Images/moving/run5.jpg',"Images/moving/run6.jpg")

//	jumpingAnimation = loadAnimation("Images/Jump/Rambojump1.png","Images/Jump/Rambojump2.jpg",'Images/Jump/Rambojump3.jpg','Images/Jump/Rambojump4.jpg','Images/Jump/Rambojump5.jpg','Images/Jump/Rambojump6.jpg')

	
}

function setup() {
	createCanvas(800, 700);




	//Create the Bodies Here.
	rambo = createSprite(100, 100, 20, 20)
	rambo.addImage(runimg)

	
}


function draw() {
  
  background(0);
  
  drawSprites();
 
}



