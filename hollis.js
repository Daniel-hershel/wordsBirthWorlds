// set playing variable for video and set to false
var playing = false;
var vid_poem;
var hollis_poem;
var c;
var x;
var y;
var myVid;


var sceneHolder;
var cache;
function preload(){
	 myFont = loadFont('fonts/BEBAS___.ttf');
	// vid_poem = createVideo('media/hollis_poem.mp4');
	hollis_poem = loadStrings('data/hollis.txt')
	// transform_poem = loadStrings('transformLangauge.txt', structure)
	transform_poem = loadStrings('transformLangauge.txt')
// 	button = createButton('');
// button.id('playButton')
// // button.position(0,0)
// button.mousePressed(toggleVid); // attach button listener
}

function centerCanvas() {
var x = (windowWidth - width) / 2;
var y = (windowHeight - height) / 2;
c.position(x, y);
}
function setup(){
window_height = windowHeight;
window_width = windowWidth;
//create canvas
c=  createCanvas(window_width-200, window_height-200);
//center the canvas
centerCanvas()
// noCanvas()

c.id('canvasstage')

console.log(transform_poem)
//read poem into one big element to blast
var lineHolder = [];
// var poemSelector= select('#stage')
var poemSelector= select('#backstage')
var activeSelector = select('#stage')
var canvasSelector = select('#canvasstage')
//create elements on canvas then hide and show?

//get elements by blasting-add class- send to array via class added
// console.log(data[0])
//create an element holding the line of the text
 // var testText = createElement('div', data[20])

 //working with dom
//  var testText = createElement('div',transform_poem[18])
// testText.id('stanza1')
// c.append(testText)
// testText.parent(canvasSelector)

// var makeText =
// testText.hide()


$("#stanza1").blast({
delemiter: "word",
tag: "div",
generateValueClass: true,
customClass: "sceneOne",
// customClass: "poem",
// customClass: "sceneOne",
generateIndexID: true
});
// }

// A Language that questions itself
var sceneOne = $('.sceneOne').toArray()

// console.log(sceneOne[0])
$sceneOne = $('.sceneOne')

  $a = $('.blast-word-a')
  $language = $('.blast-word-language')
  $that = $('.blast-word-that')
  $questions = $('.blast-word-questions')
  $itself = $('.blast-word-itself')
  // $a = $('.blast-word-a')

var poemSelector= select('#stage')
for (var i = 0; i < transform_poem.length; i++){

	var elem = createP(transform_poem[i])
	elem.parent(poemSelector)
	elem.addClass('poem')
}


   }//end setup


function draw() {
	textFont(myFont);
	textSize(27);
fill(0, 102, 153, 51);
 // var testText = text(transform_poem[18],10,90)
// myVid = image(vid_poem,0,0, x,y); // draw video to canvas



}
