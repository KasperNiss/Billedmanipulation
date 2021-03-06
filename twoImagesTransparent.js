let img, img2, img3, img4, img5, v=0, slider, button, canvas, filnavn;

//Loader de 4 billeder man kan vælge skifte imellem
function preload() {
  img2 = loadImage("PF.jpg");
  img3 = loadImage("DB.jpg");
  img4 = loadImage("SAS.jpg");
  img5 = loadImage("RYS.jpg");
}

//ændrer værdien v når man klikker
function CHANGE (){
  v += 1;
    if (v > 3) {
      v = 0;
    }
}

//gør startsiden klar med knapper, slider osv.
function setup() {
  canvas = createCanvas(188,242);
  input = createFileInput(handleFile);
  input.position(200,5);

  button = createButton('Save Image');
  button.position(200,145);
  button.mousePressed(SAVE);
  buttonc = createButton('Change Filter');
  buttonc.position(200,118);
  buttonc.mousePressed(CHANGE);

  slider = createSlider(0, 1, 0.5, 0);
  slider.position(200, 95);
  slider.style('width', '100px');

  filnavn = createInput();
  filnavn.position(200, 50);
}

//Ændrer det billede man lægger ovenpå sit eget billede
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

//Her tegnet den billedet
function draw(){
  CALL(v);
  if(img){
    image(img, 0, 0, 188, 242);
    tint(255, 255 * slider.value());
  }
}

//Her oploader man billedet
 function handleFile(file) {
   if (file.type ==='image') {
     img = loadImage(file.data,'');
     img.hide();
   } else {
     img = null;
   }
 }

//Her gemmer man billedet
  function SAVE () {
    let navn = filnavn.value();
    if (navn ===  null || navn === undefined || navn.length == 0) {
      navn = 'sjovtbilledexD';
    }
    saveCanvas (canvas, navn, 'jpg');
  }
