let img2;
let img;

function preload() {
  img2 = loadImage("PF.jpg");
}

let slider;

function setup() {
  createCanvas(188,242);
  input = createFileInput(handleFile);
  input.position(200,0);
  button = createButton('Save Image');
  button.position(200,19);
  button.mousePressed(SAVE);
  slider = createSlider(0, 1, 0.5, 0);
slider.position(200, 40);
slider.style('width', '100px');


}

function draw(){
  image(img2, 0, 0, 188, 242);
  if(img){
    image(img, 0, 0, 188, 242);
    tint(255, 255 * slider.value());
  }

}

 function handleFile(file) {
   if (file.type ==='image') {
     img = loadImage(file.data,'');
     print(img);
    // img.hide();
   } else {
     img = null;
   }
 }

  function SAVE () {
    saveCanvas ('sjovtbilledexD','jpg');
  }
