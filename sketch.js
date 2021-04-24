//Create variables here
var dog,happyDog,database,foodS=20,foodStock
function preload()
{
	happyDog=loadImage("images/dogImg1.png");
}

function setup() {
 database=firebase.database(); 
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  database.ref('/').update({ Food : 20});
	createCanvas(500, 500);
  dog=createSprite(200,200,20,20);
  dog.addImage(loadImage("images/dogImg.png"));
  dog.scale=0.18;
  
}


function draw() {  

  background(120);
  
  if(keyWentDown("UP_ARROW"))
  {
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  
  drawSprites();
  fill("red");
  textSize(20);
  text("Food Left :"+ foodS,200,100);
  text("Note : Press UP_ARROW to Feed Drago Milk",80,20);
}

function readStock(data)
{
  foodS=data.val();
}

function writeStock(x)
{
  if(x<=0)
  {
    x=0;
  }
  else
    x=x-1;
  database.ref('/').update({ Food : x});
}


