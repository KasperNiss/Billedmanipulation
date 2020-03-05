let img;
let img2;
let img3;
let img4;
let img5;
let v = 0;
let slider;
let button;

function preload() {
  img2 = loadImage("PF.jpg");
  img3 = loadImage("DB.jpg");
  img4 = loadImage("SAS.jpg");
  img5 = loadImage("RYS.jpg");
}

function CHANGE (){
  v += 1;
    if (v > 3) {
      v = 0;
    }
}

function setup() {
  createCanvas(188,242);
  input = createFileInput(handleFile);
  input.position(200,5);
  button = createButton('Save Image');
  button.position(200,30);
  button.mousePressed(SAVE);
  buttonc = createButton('Change Image');
  buttonc.position(200,80);
  buttonc.mousePressed(CHANGE);
  slider = createSlider(0, 1, 0.5, 0);
  slider.position(200, 55);
  slider.style('width', '100px');
}

function CALL(n) {
  if(n==0) {
    image(img2, 0, 0, 188, 242);
  }
  if(n==1) {
    image(img3,0,0,188,242);
  }
  if(n==2) {
    image(img4,0,0,188,242);
  }
  if(n==3){
    image(img5,0,0,188,242);
  }
}

function draw(){
  CALL(v);
  if(img){
    image(img, 0, 0, 188, 242);
    tint(255, 255 * slider.value());
  }


}

 function handleFile(file) {
   if (file.type ==='image') {
     img = loadImage(file.data,'');
     img.hide();
   } else {
     img = null;
   }
 }

  function SAVE () {
    saveCanvas ('sjovtbilledexD','jpg');
  }
