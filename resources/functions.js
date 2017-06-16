/*Rotating Question Mark*/

function structure(data){
console.log(data[0])
 var testText = createElement('div', data[0])
testText.id('stanza1')
// testText.hide()

var questionMark = createElement('div', "?")
var questionMark = createP("?")
questionMark.id('questionMark')
// questionMark.class('blast')
questionMark.hide()

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

//how to make the ? float across?
//append a question mark to each element one at a time? This would be a constructor function to do the ? trick

//function thisDat (all elements in array){

//elementOne.innerHTML = whatever is there + ?
//for some duration
//then elementOne.innerHTML = back to normal (reverse with velocity?)
//and elementTwo.innerHTML = whatever is there +?

// }


//or I could do a question mark as a character, select it, and then have it move down the x-axis

//I can select individual elements
 // $a = sceneOne[0]

$questionMark = $('#questionMark')
console.log($questionMark.innerText)

 // $langauge = sceneOne[0]
 $a = sceneOne[0]
 // $a = sceneOne[0]
var sequence = [
// { e: $sceneOne, p: 'transition.slideLeftBigIn', o: { duration: 800, delay: 200} },
{ e: $sceneOne, p: {opacity: 1}, o: { dureation:500}},
{ e: $questionMark, p: {opacity: 1}, o: { dureation:500, complete: function(){

	$a.append($questionMark)
}}},


// { e: $a, p: {opacity: 1}, o: { dureation:500}},
// {e:$a, p:{scale: 1.1, translateY: '5px',}, o:{ duration: 1200,  complete: function(){

// //trying to append the ? on complete function for each of the elements. Not working now
// for(var i = 0; i< 5; i++){

//  sceneHolder = sceneOne[i]
//   cache = sceneOne[i].innerHTML
//  console.log(cache)
// 	sceneOne[i].append('?')

// $go = $('.sceneOne')

// $sceneOne
// .velocity({translateY: '25px'}, {stagger: 5000, drag:true})
// //wait for 2 seconds and then move to the next
// //trying to set timeout function for the question mark. I think I need to pass it arguments
// 	   // setTimeout(function(sceneHolder, cache){
// 	   // 	// sceneHolder.remove('?')
// 	   // 	// $scene = sceneHolder

// 	   // 	// console.log(cache)
//     //     // $("#card-1").flip(true);
//     //     // $(sceneOne[i]).innerHTML = cache
//     //     // $scene.html = cache
//     // }, 2000);



// }


// // $a.append('?')
// // sceneOne[0].append('?')


// }}},
// {e:$a, p:{left: "+=25px"}, o:{ duration: 1200 }},
// { e: $a, p: {right: '+=100px'}, o: { duration: 500 } },
// { e: $sceneOne, p: {right: '+=100px'}, o: { duration: 500 } },

   ]

$.Velocity.RunSequence(sequence);
}
