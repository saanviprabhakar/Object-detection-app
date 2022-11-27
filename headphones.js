img= "";
status1 = "";
object= [];
function setup() 
{
canvas = createCanvas(380, 380);
canvas.position(500,200);
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML= "Status: Detecting Objects";
}

 function preload()
{
img = loadImage("Car.jpeg");
}

function modelLoaded()
{
console.log("Model is Loaded!");
status1 = true;
}

function gotResults(error, results)
{
if(error)
{
console.log(error);
}
console.log(results);
object = results;
}

function draw()
{
image(img,0,0,380,380);

if (status1 !="")
{
objectDetector.detect(img, gotResults);
for(i=0; i< object.length; i++)
{
document.getElementById("status").innerHTML ="Status: Object Detected";
fill("#41457a");
percent= floor(object[i].confidence * 100);
text(object[i].label + "" + percent + "%", object[i].x, object[i].y);
noFill();
stroke("#41457a");
rect(object[i].x, object[i].y, object[i].width, object[i].height);
}
}
}