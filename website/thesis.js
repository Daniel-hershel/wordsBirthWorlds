//thinner fonts and not capitalized for readability

var the_poem;
var flag = false;
var elem;
var temp;
var sequence;
var divSelector;
//load the poem
function preload(){
the_poem = loadJSON('poem.json', takeControl)
song = loadSound('hoplesness.mp3')

}
function setup(){
// flag = false;
noCanvas()
//for front page start button
var buttonSelector = select('#go')
buttonSelector.mousePressed(runIt)


}


function runIt(){
//set flag to false to stop sequence from running until
flag = true;
// song.play()

//call the function to process and structure poem data
takeControl(the_poem)
//check to make sue flag is changing state
// console.log(flag)

//to dissapear the div holding the front page when start button is pressed
var $pageSelector = $('#pageHolder')
$pageSelector.velocity({ opacity: 0 }, { display: "none" });
}//end run it


function takeControl(data){

var everythingSelector= select('#holdEverything')

//check data
// console.log(data)
// console.log(data.length)

//create a div to hold each stanza from json file
for (var i = 0; i < data.length; i++){
var lineHolder = createElement('div', ' ')
lineHolder.parent(everythingSelector)
lineHolder.id("holder"+i)
lineHolder.addClass('lineHolder')

//create p elements for each line of each stanza and then append it to the appropriate div
for (var j = 0; j<data[i].stanza.length ; j++){
var elem = createP(data[i].stanza[j])
elem.addClass('poem')
elem.id("word"+i)
elem.parent(lineHolder)
}
}


/* BLASTING GROUNDS */

//blast all the divs holding a stanza by class given to them in for loop above
$(".lineHolder").blast({
delemiter: "word",
generateValueClass: true,
customClass: "sceneOne",
generateIndexID: true
})
// .css("border-left", "10px solid darkred")


/*RE-CREATING STANZA WITH USER INPUT FROM HOME PAGE  */

var divSelector = select('#holder4')
divSelector.addClass('.lineHolder')

//empty the div so I can fill it with recreated text
divSelector.html('')


var beg =  ["AN EXECUTABLE LOVE LETTER ", "TO HUMANS: ", "i see you ", "you exist ", "and you are so fucking special ", "seriously ", "we are such amazing beings ", "us humans ", "and you "]

var end = ["you are loved ", "and you are forgiven  ", "and i’m ", "watching my best friend/brother be sentenced for murder"]

//iterarate through the first array and create p elements for each line and then append them to the appropriate div
for (var i =0; i< beg.length;i++){

word = createP(beg[i])
word.addClass('blast')
word.parent(divSelector)

}

//create a p element from the user input value and append it to appropriate div
// var valGrabber = select('#user')
// var valueHolder = valGrabber.value()
// console.log(valueHolder)
// var val = createP(valGrabber.value())
var val = createP(' Nikita' + ' ')

val.addClass('blast')
val.parent(divSelector)

//iterarate through the second array and create p elements for each line and then append them to the appropriate div

for (var i =0; i< end.length;i++){

word = createP(end[i])
word.addClass('blast')

word.parent(divSelector)

}

//blast new blast holder 4 with new html including user input
$("#holder4").blast({
delemiter: "character",
generateValueClass: true,
customClass: "theLetter",
generateIndexID: true
})
// .css("border-left", "10px solid darkred")


//creates a variable to hold an array of all the blasted characters in #holder4- which is line/act/letter 5 {{this would be part of the diagram} of what I'm doing}
$letterFive = $('.theLetter')
// console.log($letterFive)


/*END RE-CREATING STANZA WITH USER INPUT  */


/* SETTING UP LANGAUGE FOR UNLEARNING REALITY SECTION */


$("#holder17").blast({
delimiter: "character",
generateValueClass: true,
customClass: "demo",
generateIndexID: true
});


//what's this?
$alhpaHolder = $('.demo').toArray()

//alphabet blast for language to unlearn reality
var $a = $(".blast-character-a");
// var a = $(".blast-character-a");

var $b = $(".blast-character-b");
var $c = $(".blast-character-c");
var $d = $(".blast-character-d");
var $e = $(".blast-character-e");
var $f = $(".blast-character-f");
var $g = $(".blast-character-g");
var $h = $(".blast-character-h");
var $i = $(".blast-character-i");
var $j = $(".blast-character-j");
var $k = $(".blast-character-k");
var $l = $(".blast-character-l");
var $m = $(".blast-character-m");
var $n = $(".blast-character-n");
var $o = $(".blast-character-o");
var $p = $(".blast-character-p");
var $q = $(".blast-character-q");
var $r = $(".blast-character-r");
var $s = $(".blast-character-s");
var $t = $(".blast-character-t");
var $u = $(".blast-character-u");
var $v = $(".blast-character-v");
var $w = $(".blast-character-w");
var $x = $(".blast-character-x");
var $y = $(".blast-character-y");
var $z = $(".blast-character-z");

// we need a language for unlearning reality
var alphabet = [$a,$d,$e,$g,$i,$l,$n,$o,$r,$t,$u,$w,$y]
var animeTime = 1280;
var animationSequence = []
for (var i = 0; i < alphabet.length; i++){
// var randomize = Math.floor((Math.random() * alphabet.length) + 1);
animateAlphabet =  { e: alphabet[i], p: { opacity: 1} , options: {duration: animeTime}},

// and then append to animationSequence
animationSequence.push(animateAlphabet)
}


/* END SETTING UP LANGAUGE FOR UNLEARNING REALITY SECTION */


var thePoem = $('.sceneOne').toArray()
var $actOne = $('#holder0');

var $actOne = $('#holder0');
var $lineOne = $("#holder0 *")

// $('#sceneOne-2').blast({
// delemiter: "character",
// // tag: "div",
// // generateValueClass: true,
// // customClass: "sceneOne",
// generateIndexID: true
// })
var $actTwo = $('#holder1');
var $lineTwo = $('#holder1 *');
var $actThree = $('#holder2');
var $lineThree = $('#holder2 *');

var $actFour = $('#holder3');
var $lineFour = $('#holder3 *');

var $actFive = $('#holder4');
var $lineFive = $('#holder4 *');
var $actSix = $('#holder5');
var $lineSix = $('#holder5 *');
var $actSeven = $('#holder6');
var $lineSeven = $('#holder6 *');
var $actEight = $('#holder7');
var $lineEight = $('#holder7 *');
var $actNine = $('#holder8');
var $lineNine = $('#holder8 *');
var $actTen = $('#holder9');
var $lineTen = $('#holder9 *');
var $actEleven = $('#holder10');
var $lineEleven = $('#holder10 *');
var $actTwelve = $('#holder11');
var $lineTwelve = $('#holder11 *');
var $actThirteen = $('#holder12');
var $lineThirteen = $('#holder12 *');
var $actFourteen = $('#holder13');
var $lineFourteen = $('#holder13 *');
var $actFifteen = $('#holder14');
var $lineFifteen = $('#holder14 *');
var $actSixteen = $('#holder15');
var $lineSixteen = $('#holder15 *');
// 16
var $actSeventeen = $('#holder16');
var $lineSeventeen = $('#holder16 *');

// 17
var $actEighteen = $('#holder17');
var $lineEighteen = $('#holder17 *');

// 18
var $actNineteen = $('#holder18');
var $lineNineteen = $('#holder18 *');

// 19
var $actTwenty = $('#holder19');
var $lineTwenty = $('#holder19 *');

// 20
var $actTwentyone = $('#holder20');
var $lineTwentyone = $('#holder20 *');
// 21
var $actTwentytwo = $('#holder21');
var $lineTwentytwo = $('#holder21 *');

// 22
var $actTwentythree = $('#holder22');
var $lineTwentythree = $('#holder22 *');

// 23
var $actTwentyfour = $('#holder23');
var $lineTwentyfour = $('#holder23 *');


// 24
var $actTwentyfive = $('#holder24');
var $lineTwentyfive = $('#holder24 *');

// 25
var $actTwentysix = $('#holder25');
var $lineTwentysix = $('#holder25 *');

// 26
var $actTwentyseven = $('#holder26');
var $lineTwentyseven = $('#holder26 *');

// 27
var $actTwentyeight = $('#holder27');
var $lineTwentyeight = $('#holder27 *');

// 28
var $actTwentynine = $('#holder28');
var $lineTwentynine = $('#holder28 *');


$holder = $('.lineHolder')

var durTime = 3200;
var setUpTime = 50;
var sequence = [

/*TITLE*/
{ e: $lineOne, p: {opacity:1}, o: { duration: 7, delay: 0 }},
{ e: $actOne, p: 'titleSequence', o: { duration: 3000, delay: 100, sequenceQueue:false, complete: function(elements, i ){

}} },
{ e: $lineOne, p:{padding: 55} , o: { duration: 1000, delay: 0 , sequenceQueue: false, }},
{ e: $lineOne, p:{wordSpacing: -100} , o: { duration: 1000, delay: 100 ,  }},

{ e: $actOne, p: 'exitHarsh', o: { duration: 1700, delay: 900 }},



/*I HAVE NEVER FELT MORE POWERLESS*/

{ e: $lineTwo, p: { color: '#0B1322', }, o: { duration: 439, delay: 150, sequenceQueue: false }},
{ e: $lineTwo, p: { opacity: 1,}, o: { duration: 49, delay: 10, stagger: 30  }},
{ e: $lineTwo, p: {color: '#A9C1D9' }, o: { delay:1800, duration: 3239,  }},

{ e: $actTwo, p:'makeWay', o: { duration: 300, delay: 4250}},


 /* WE HAVE BECOME OURSELVES IN THE AFTERMATH*/

{ e: $lineThree, p: 'entrancePoster', o: { duration: 1900, delay: 100, stagger:600} },
// { e: $lineThree, p: 'supportRole', o: { duration: 1900, delay: 100, } },

/* two and three to fertilizer*/
{ e: $actTwo, p:'fertilizer', o: { duration: 1000, delay: 250}},
{ e: $actThree, p:'fertilizer', o: { duration: 1000, delay: 0, sequenceQueue: false}},
/*finish  fertilizer a line level*/
{ e: $lineTwo, p: {lineHeight: '-=36px'}, o: { duration: 200, delay: 0, sequenceQueue:false} },
{ e: $lineThree, p: {lineHeight: '-=36px'}, o: { duration: 200, delay: 0, sequenceQueue:false} },


/* TRAUMA AND IMAGINATION */
{ e: $actFour, p: {top: '20%'}, o: { duration: 350, delay: 2900}},
{ e: $lineFour, p: 'upStage', o: { duration: 1400, stagger : 400 , sequenceQueue: false}},

// // // /* BUILDING THE BIG STARY NIGHT EXIT */

{ e: $lineTwo, p: "transition.defaultOut", o: { duration: 909, delay: 1000, stagger: 30  }},
{ e: $lineThree, p: "transition.defaultOut", o: { duration: 1000,  sequenceQueue:false} },
{ e: $lineFour, p: "transition.defaultOut", o: { duration: 1500, stagger : 100, sequenceQueue:false }},
{ e: $lineTwo, p: {letterSpacing:-20}, o: { duration: 1900, delay: 0, sequenceQueue:false} },
{ e: $lineTwo, p: {padding:20}, o: { duration: 1900, delay: 0, sequenceQueue:false, complete: function(){
// optional to turn into circle. If i can control circle type better worth it
// $targeter = $lineTwo
// $($targeter).circleType({radius: 384})
}} },

/* I SEE YOU-USER INPUT GOES HERE */

{ e: $actFive, p: {top:-70, scale: .9}, o: { duration: 100, delay: 0, complete: function(){

//select dom element input
// var inputSelector = select('#user')
// var val = inputSelector.value()
// console.log(val)

/*ISSUES*/

//I need to figure out a way to make the persons name stand out. So I need to rtarget the name with velocity and underline/change color.
// $name = $('#name')
// $($name).velocity({color:'#444'}, {duration:200})

} }},


{ e: $letterFive, p: 'starsIn', o: { duration: 10, sequenceQueue:false}},
{ e: $lineFive, p: 'starsShine', o: { duration: 900, delay: 10, stagger: 200}},
{ e: $lineFive, p: 'becomeStars', o: { duration: 1900, delay: 10, stagger: 200}},

/*good to here. wow. And now I think I want to try the teeth falling
at the back of the stage trick with $letterFive as $actSix is coming into view */

// // /* WATCHING MY FRIEND BE CHARGED WITH MURDER*/

{ e: $actSix, p: {top: -150}, o: { duration: 10, delay:20}},
{ e: $lineSix, p: 'entranceNarrator', o: { duration: 2900, delay: 50, stagger:100 , complete: function(){
// $($actSix).velocity("exitHarsh");

$targeter = $lineSix.slice(-1)[0]
console.log($targeter)
// $($targeter).velocity({backgroundColor:'#444'}, {duration:200})

$($targeter).circleType({radius: 384});
// $('#holder26 *').circleType({radius: 384});

}}},


{ e: $lineSix, p: {height: .7}, o: { duration: 300, delay: 100, }},
{ e: $actSix, p: 'hoverStage', o: { duration: durTime, delay: 0, }},

// // // HELPLESS
{ e: $lineSeven, p:{scale: 1.9,}, o: { duration: 100, complete: function(){
$lineSeven.css({
"margin-top": "100px",
"margin-bottom":"auto",
})
}}},

{ e: $actFive, p:{scale:0}, o: { duration: 10, delay: 0}},
{ e: $actFour, p:{scale:0}, o: { duration: 10, sequenceQueue: false}},
{ e: $actThree, p:{scale:0}, o: { duration: 10, sequenceQueue: false}},
{ e: $actTwo, p:{scale:0}, o: { duration: 10, sequenceQueue: false}},
// { e: $actFive, p:{scale:0}, o: { duration: 10, delay: 0}},

//watching my friend be charged with murder  exit
{ e: $lineSix, p: 'transition.defaultOut', o: { duration: 800, delay: 10, }},


//bring helpless in and changing body color
{ e: $lineSeven, p: 'transition.fadeIn', o: { duration: 800, delay: 50,  complete: function(){
$('body').velocity({backgroundColor:'#A9C1D9'}, {duration:2000})

// $('body').css({
//  // "margin-top": "300px",
//  // "margin-bottom":"auto",
// })

} }},


{ e: $lineSeven, p:{opacity:.5,}, o: { duration: 100 }},

/*IF I COULD JUST FIND THE RIGHT WORDS */

{ e: $actEight, p:{scale: .6, top: -240}, o: { duration: 10, delay: 50, sequenceQueue: false}},

{ e: $lineEight, p: 'transition.slideRightIn', o: { duration: 500, delay: 900, }},
{ e: $actEight, p:{color: '#0D1321'}, o: { duration: 1900, delay: 1500}},

// // /*GET MY FRIEND ETC*/
{ e: $actNine, p: {color: '#0D1321', top: -50, scale:.8}, o: { duration: 100, sequenceQueue:false}},
{ e: $lineNine, p: 'entranceNarrator', o: { duration: durTime, stagger : 200, sequenceQueue:false}},
{ e: $lineNine, p: {height: .6}, o: { duration: durTime, stagger : 200, sequenceQueue:false}},

// /* BIG EXIT */
{ e: $actSeven, p: 'becomeStars', o: { duration: durTime, delay: 13000}},
{ e: $lineEight, p: 'becomeStars', o: { duration: durTime, delay: 800, }},
{ e: $lineNine, p: 'becomeStars', o: { duration: durTime, delay: 800, complete: function(){
$('body').velocity({backgroundColor:'#0D1321'}, {duration:2000})


}}},

// is this the issue delay?
{ e: $lineSeven, p: {opacity: 0}, o: { duration: durTime, delay: 10}},
{ e: $lineEight, p: {opacity: 0}, o: { duration: durTime, delay: 80, }},
{ e: $lineNine, p: {opacity: 0}, o: { duration: durTime, delay: 10, }},

/*END  Act A*/

/* Act B*/

/*TRYING TO SET POSITIONS OF 3 ELEMENTS AT SAME TIME. AND THEN I WILL LIGHT THEM UP*/

/*1. POSITION THEM */
//issue!!!!!!

//decay

{ e: $actTwelve, p: { left: '+=25%', top: '-=35%', scale: .5,  color: '#0B1322', width: '-=15%' }, o: { duration: setUpTime, delay: 200}},
{ e: $lineTwelve, p: { marginTop: '-=15%', }, o: { duration: setUpTime, sequenceQueue: false }},
{ e: $lineTwelve, p: {opacity: 1}, o: { duration: setUpTime, delay: 100 }},


//notebooks
{ e: $actTen, p: { left: '-=25%', top: '-=40%', scale: .5 }, o: { duration: 9, delay: 0 }},
{ e: $lineTen, p: { color: '#0B1322', }, o: { duration: 9, delay: 0 }},
{ e: $lineTen, p: { opacity: 1,}, o: { duration: 9, delay: 0, stagger: 30  }},

//one friend
{ e: $actEleven, p: { left: '+=5%', top: '-=9%', scale: .65,  color: '#0B1322'}, o: { duration: 9, delay: 0 }},
{ e: $actEleven, p: { width: '-=200px',}, o: { duration: 9, delay: 0, stagger: 30  }},
{ e: $actEleven, p: {  letterSpacing: '-=85px'}, o: { duration: 9, delay: 0, stagger: 30  }},
{ e: $lineEleven, p: { opacity: 1,}, o: { duration: 9, delay: 0, stagger: 30  }},
// { e: $actEleven, p: { width: '-=200px',}, o: { duration: 9, delay: 0, stagger: 30  }},


// // /*2. PUT THEM INTO ACTION */

//one friend

{ e: $lineEleven, p: { opacity: 1,}, o: { duration: 9, delay: 0, stagger: 30  }},
{ e: $lineEleven, p: {color: '#A9C1D9' }, o: { delay: 1000, duration: 1239,  }},
{ e: $actEleven, p: {opacity: .3}, o: { duration: 1900, delay: 900}},
{ e: $actEleven, p: {letterSpacing:'+=85px'}, o: { duration: 1900, delay: 900}},
{ e: $actEleven, p: {opacity: 1}, o: { duration: 1900, delay: 900, sequenceQueue: false}},
// { e: $actEleven, p: {opacity: .3}, o: { duration: 1900, delay: 900}},

//decay
{ e: $lineTwelve, p: {color: '#A9C1D9' }, o: { delay: 1000, duration: 3239,  }},
// { e: $actTwelve, p: {opacity: .3}, o: { duration: 1900, delay: 900}},


//notebooks
{ e: $lineTen, p: {color: '#A9C1D9' }, o: { delay: 1000, duration: 3239,  }},
// { e: $actTen, p: {opacity: .3}, o: { duration: 1900, delay: 900}},


/*3. BLOW EM UP!*/
{ e: $actTwelve, p:{fontSize:'+=95%', scale: 50 } , o: { duration: 400, delay:1900,  stagger:300 ,}},
{ e: $actTen, p: {fontSize:'+=105%', scale: 50}, o: { duration: 400,  stagger:300 ,sequenceQueue: false}},
{ e: $actEleven, p:{fontSize:'+=125%', scale: 50}, o: { duration: 400,  stagger:300, sequenceQueue: false}},


/* I WANT  (THE PEOPLE I LOVE) TO BE KNOWN*/
{ e: $actThirteen, p: { top: '-=45%', left: '-=9%', fontSize: '+=59%', color:'#0B1322'}, o: { duration: 50, delay: 35,  complete: function(){


var list = ['I WANT SO BADLY FOR THE PEOPLE I LOVE TO BE KNOWN', 'I WANT SO BADLY TO BE KNOWN'];  // list of blurbs

var txt = $('#holder12');  // The container in which to render the list
console.log(txt)
var options = {
  duration: 1300,          // Time (ms) each blurb will remain on screen
  rearrangeDuration: 1000, // Time (ms) a character takes to reach its position
  effect: 'random',        // Animation effect the characters use to appear
  centered: true           // Centers the text relative to its container
}

txt.textualizer(list, options); // textualize it!
txt.textualizer('start'); // startz

}}},


// /* DON'T YOU WANT TO BE KNOWN*/

{ e: $actFourteen, p: {top:'+=9%', }, o: { duration: 100, delay: 15000,}},
{ e: $lineFourteen, p: { marginTop: '-=5%', }, o: { duration: setUpTime, sequenceQueue: false }},
{ e: $lineFourteen, p: 'entrancePoster', o: { duration: durTime, delay: 0,  stagger: 700, drag: 300}},


//ok and now i think I want to turn everything into a star!


//notbooks
{ e: $actTen, p: 'becomePlanets', o: { duration: 1000, stagger: 300, delay: 1000}},
//friend
{ e: $actEleven, p: 'becomePlanets', o: { duration: 2000, stagger: 300, sequenceQueue:false }},
{ e: $actEleven, p: {top: '-=35%', height: '-=50%'}, o: { duration: 2000, stagger: 300, sequenceQueue:false}},

//decay
{ e: $actTwelve, p: 'becomePlanets', o: { duration: 2000, stagger: 300, sequenceQueue:false}},
{ e: $actTwelve, p: {top: '+=700px'}, o: { duration: 2000, stagger: 300, sequenceQueue:false}},
//I want so badly to be known
{ e: $actThirteen, p: 'becomePlanets', o: { duration: 2000, stagger: 300, sequenceQueue:false}},
//don't you want to be known?
{ e: $actFourteen, p: 'becomePlanets', o: { duration: 2000, stagger: 300, sequenceQueue:false}},
{ e: $actFourteen, p: {top: '-=65%'}, o: { duration: 2000, stagger: 300, sequenceQueue:false}},




// // // // /* TRUTH > REALITY*/
{ e: $lineFifteen, p:{opacity:0, left: '-=10%'}, o: { duration: durTime, delay: 0, stagger:300 , complete: function(){

var halfHolder = createP( 'REALITY')
halfHolder.addClass('paper')
var truthHolder = createP('< TRUTH')
truthHolder.addClass('static')
var selector = select('#holder14')
selector.addClass('dominant')
selector.removeClass('lineHolder')
truthHolder.parent(selector)
halfHolder.parent(selector)
var $selector= $('#holder14')
var $paperHolder = $('.paper')

$paperHolder.velocity({letterSpacing: '+=5px',})
// $paperHolder.velocity({letterSpacing: '+=5px', left: '-=15%'})
$selector.velocity({ left: '-=15%', top: '+=3%'})
var folded = new OriDomi('.paper', {
  vPanels:         10,     // number of panels when folding left or right (vertically oriented)
  hPanels:         10,     // number of panels when folding top or bottom
  speed:           1200,  // folding duration in ms
  ripple:          7,     // backwards ripple effect when animating
  shadingIntesity: .5,    // lessen the shading effect
  perspective:     800,   // smaller values exaggerate 3D distortion
  maxAngle:        40,    // keep the user's folds within a range of -40 to 40 degrees
  shading:         'soft' // change the shading type
});

folded.fracture(9);

}}},


/* We All Want To Be Known In A Way That Nobody Would Let Us Be Kept In A Cage*/

{ e: $actSixteen, p:{top: '+=15%', scale:.6, fontSize: '-=9%', width: '-=18%'},  o: { duration: setUpTime, delay: 9000, }},
{ e: $lineSixteen, p:'squishTogether',  o: { duration: setUpTime, delay: 300, }},
{ e: $lineSixteen, p: 'transition.slideUpIn', o: { duration: durTime, delay: 3, complete: function(){

  // $lineSixteen.velocity({backgroundColor:'#0F3B72'}, {duration:2000})

  
} }},
// { e: $actSixteen, p:{top:-100}, o:{duration:0}},
{ e: $lineSixteen, p:{ rotateX: function(i, total) {
          // i is equal to the current element's index in the total set of divs.
          // Successively increase the rotateX value of each element.
          return (i * 20);
        }, translateY: function(i,total){return(i* (-10))}, rotateZ: function(i,total){return(i* (-10))}}, o: { duration: durTime, delay: 0, stagger:300 , sequenceQueue: false ,complete: function(){

        }  }},

{ e: $lineSixteen, p:{rotateX: function(i, total) {
          // i is equal to the current element's index in the total set of divs.
          // Successively increase the translateX value of each element.
          return (0);
        }, translateY: function(i,total){return(0)}, rotateZ: function(i,total){return(0)}}, o: { duration: durTime, delay: 1000,  stagger:300}},
/* END We All Want To Be Known In A Way That Nobody Would Let Us Be Kept In A Cage*/

//reality < truth
{ e: $actFifteen, p: 'becomePlanets', o: { duration: 200, stagger: 300, delay: 5000}},
//we all want to be known
{ e: $actSixteen, p: 'becomePlanets', o: { duration: 200, stagger: 300, sequenceQueue:false}},

/* END ACT B */

/* End Act B*/

/* Begin Act C*/

{ e: $actEighteen, p: {top: '-=9%',fontSize: '+=2vh'},  o: { duration: 10, delay: 0, complete: function(){
//run previously created animation with blast and animating in letters of a string in alphabetical order
$.Velocity.RunSequence(animationSequence)
}}},

// //dummy animation to allow the injected sequence above to finish running uninterrupted
{ e: $actSeventeen, p:{left: 0}, o: { duration: durTime, delay:12050}},


//move imagine a langauge to the side and rotate (could make this a registered effect)
{ e: $lineEighteen, p: {rotateZ: 90, fontSize: '-=49%', top: '+=33%',}, o: { duration: 900,delay: 2500, stagger: 300, drag: 300}},
{ e: $actEighteen, p: {top: '+=18%', left:'-=45%', opacity: .2, scale: .04}, o: { duration: 2900, stagger: 300, delay: 50}},

 /*OUR JOB FOR TO CLEAR THE PATH FOR THE TRUTH*/

{ e: $lineNineteen, p: 'transition.soultrainIn', o: { duration: durTime-300, stagger:200, complete: function(){
}}},

{ e: $lineNineteen, p:'spreadApart', o: { duration: durTime-300, stagger:200, }},
{ e: $lineNineteen, p:{rotateZ:0,  scale: 1}, o: { duration: durTime-400, stagger:200, }},
{ e: $lineNineteen, p: {rotateZ: -90, fontSize: '+=35%', top: '+=25%', margin: '+=9px'}, o: { duration: 900,delay: 2500,}},
{ e: $actNineteen, p: {left: '+=33%', opacity:.2, scale: .006}, o: { duration: 900, sequenceQueue: false}},
{ e: $lineNineteen, p: {fontSize: '-=33%'}, o: { duration: 900, sequenceQueue: false}},





// // /*WE SPEAK OF WALLS  */
{ e: $actTwentyone, p: {left: '-=5%', top: '-=20%', fontSize: '+=20%'}, o: {duration:10}},
{ e: $lineTwentyone, p: {fontSize: '+=15%', }, o: { duration: 10, delay: 1 , complete: function(){

  var list = ["WE SPEAK OF WALLS AS WHAT SEPARATE HUMANS FROM THEIR BEING",
      "UNTIL THERE ARE NO WALLS BETWEEN US",
      "EACH WALL ",
      "WE WILL",
      "TEAR DOWN",
      "UNTIL THERE IS NO LANGUAGE LEFT TO DEMAND A WALL BE BUILT",
      " "];  // list of blurbs

var txt = $('#holder20');  // The container in which to render the list
console.log(txt)
var options = {
  duration: 850,          // Time (ms) each blurb will remain on screen
  rearrangeDuration: 220, // Time (ms) a character takes to reach its position
  effect: 'slideTop',        // Animation effect the characters use to appear
  centered: true           // Centers the text relative to its container
}

txt.textualizer(list, options); // textualize it!
txt.textualizer('start'); // startz
// txt.textualizer('pause')
// $($actTwenty).velocity("exitHarsh")

}}},

{ e: $actTwentyone, p: {top: '-=20%', opacity: .5, fontSize: '-=20%'}, o: { duration: 300, delay: 45500,}},


//  /*WE NEED MORE WAYS TO SAY RESTORATIVE   */
//  /*I NEED... */


{ e: $actTwentytwo, p: {fontSize: '-=25%', top: '+=10%'}, o: { duration: durTime, delay: 0}},
{ e: $lineTwentytwo, p: 'transition.defaultIn', o: { duration: 5000, delay: 0, stagger: 300}},
{ e: $lineTwentytwo, p: 'becomeStars', o: { duration: 500, delay: 3350, stagger:300}},

// { e: $actTwentyone, p: {top: '-=10%', fontSize: '+-=29%', opacity: .3}, o: {duration:10}},

{ e: $actTwentythree, p: {top:'+=20px', fontSize: '+=45%' }, o:{duration: 40, delay: 500,   complete: function(){

  var list = [
  "I NEED MORE WAYS TO SAY I LOVE YOU",
  "I NEED MORE WAYS TO SAY YOU HURT ME",
  "I NEED MORE WAYS TO SAY I'M SORRY",
  "I NEED MORE WAYS TO SAY I FORGIVE YOU"
  ]



var txt = $('#holder22');  // The container in which to render the list
console.log(txt)
var options = {
  duration: 500,          // Time (ms) each blurb will remain on screen
  rearrangeDuration: 500, // Time (ms) a character takes to reach its position
  effect: 'slideTop',        // Animation effect the characters use to appear
  centered: true           // Centers the text relative to its container
}

txt.textualizer(list, options); // textualize it!
txt.textualizer('start'); // startz

// $($actTwentytwo).velocity("exitHarsh");
}}},

{ e: $actTwentythree, p: {fontSize: '-=29%', opacity: .5}, o: {duration:10}},
// { e: $lineTwentythree, p: {opacity: .5}, o: {duration:10}},


{ e: $actTwentyfour, p:{fontSize: '-=20%', top: '+=6%'}, o: { duration: 15, delay:0 }},
{ e: $lineTwentyfour, p:{marginTop: "-=9%"}, o: { duration: 15, delay:0 }},
{ e: $lineTwentyfour, p: 'transition.defaultIn', o: { duration: durTime, delay: 25350, stagger:300 , complete: function(){
}}},



/* End Act C*/
]


/* Conditional Statement To Not Run The Sequence Until Button Has Been Pressed And Flag Has Changed State To True*/

if (flag == true){

$.Velocity.RunSequence(sequence);

}
// $.Velocity.RunSequence(sequenceTwo);
}// end velocity seqeunce function

