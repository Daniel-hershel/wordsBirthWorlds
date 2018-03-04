
// {e: $one, p:{opacity: 1}, o:{delay:30, duration:5000}}

// {e: $a, p:{opacity: 1,}, o: {duration: 500, complete: function() {
//     	//call function associated with each line


//    } }},
// }

//     // .velocity("fadeOut", { delay: 3100, duration: 5000 }) // fades out


// ]
// $one
//     .velocity({opacity: 1, translateY:"+100px" }, {complete: function(){
//     	console.log('done')
//     	// $two.css("color", "yellow")
//     	 // .velocity({left: '+=100px'})

//     }})
//     //can I do an on complete function here to run the function for each in terms of what it does?
//     .velocity("fadeOut", { delay: 3100, duration: 5000 }) // fades out
// $.Velocity.RunSequence(sequenceActOne);

// }
// ]



// var actHolder = createElement('div', ' ')
// actHolder.addClass('holder')
// actHolder.addClass('actOne')
// actHolder.id('holder'+ 0)

// var elem = createDiv(transform_poem[0])
// elem.id('sceneOne')
// elem.parent(activeSelector)


// $("#sceneOne").blast({
// delemiter: "word",
// tag: "div",
// generateValueClass: true,
// customClass: "actOne",
// // customClass: "sceneOne",
// generateIndexID: true
// });

// var sceneOne = $('.actOne').toArray()
// for (var i = 0; i < sceneOne.length; i++){

// //call function to make an element for each and what else?
// var makeElem = createP(sceneOne[i].innerHTML)
// makeElem.addClass('madeElem')
// makeElem.addClass('poem')
// makeElem.id(i)
// lineHolder.push(makeElem)
// makeElem.parent(activeSelector)

// }

// console.log(lineHolder.length)
// // $one = $(lineHolder[0])
// // console.log($one)
// // //velocity js sequence
// var durTime = 500;
//  // $one= $('#0');
//  $one= $('.poem');

// var sequence = [
// // // phase 1
// // //reveal
// // {e: $one, p:{ opacity: 1}, o: {stagger: 1375, drag: true }}

// //  complete: function() {
// // //switch parent of $one to
// // var activeSelector = select('#stage')
// // $one.parent(activeSelector)
// //  }}}
// // { e: $one, p: {opacity: 1}, o: { duration: durTime } },

// // {e: $as, p:{opacity: 1,}, o: { duration: durTime, sequenceQueue: false }},
// // {e:$one, p:{opacity:1}, o:{ duration: 1500 }},

// ]

// $.Velocity.RunSequence(sequence);
// actOneSceneOne =
// $showElem = 	$('.madeElem')
// 	.velocity({opacity: 1, left: function(i, total) {
// 					 Generate random value for x chaos position
// 					return 100*Math.random();

// 					}},



// 	  {stagger: 5000, drag:true})

// }

// var sceneOne = $('.sceneOne').toArray()
// console.log(sceneOne)

//  $sceneOneDiv = $('.actOne')
// console.log($sceneOneDiv)
//   $sceneOneDiv
//   	.velocity({opacity: 1 }, {duration:5000})
//   	.velocity({left: '+=100' }, {stagger: 5000, drag:true});

  // $myElem = $("#actOne-2")
  // $myElem = $("#holder0")
// console.log($myElem)

// $sceneOneDiv
    // .velocity({opacity: 1, }, {duration: 5000, stagger: 5500})
  // $('.sceneOne').velocity({opacity: 1},
					 // {stagger: 1375, drag: true })
 // .velocity({opacity:1 }, {duration: 5000})

//how do I get the resulting

// $letter = $('.poem')
// not working:
// $indeX = $('.index')
// $stanza = stanza

//what was hundreds, is now 2 lines of code. This is the entire code for animation
// $letter
//     .velocity({opacity: 1, }, {stagger: 5000})
//     .velocity("fadeOut", { delay: 3100, duration: 5000 }) // fades out






// console.log(holder0)

 // .velocity({left: '+=100' }, {duration: 5000})
// c.mousePressed(toggleVid)
// var divSelector = select('#vidCanvas')
// c.parent(divSelector)
// the_poem = loadJSON('poem.json', startUp)
// noCanvas();
// var hollisSelector = select('#hollisPoem')
// for (var i = 0; i < hollis_poem.length; i++){

// 	// var elem = createP(hollis_poem[i])
// 	// elem.parent(hollisSelector)
// }



// var demoSelector = select('#demo')
// //create javascript object with a line of poetry and a function for how the words act
// var obj = {
// 	line: "This is a poem line",
// 	array: ["this", "is", "a", "poem"],
//     method: function (array) {

// for (var i = 0; i < array.length; i++){
//     	var mine = createP(obj.array[i])
//     	// mine.id = ('blew')
//     	mine.parent(demoSelector)
//     }


// this.method()

//     }//end method
// }; //end object


// for (var i = 0; i < array.length; i++){
//     	var mine = createP(obj.array[i])
//     	// mine.id = ('blew')
//     	mine.parent(demoSelector)

//     }


// $elem = $('#blew')
// $elem
//  .velocity({left: '+=100' }, {duration: 5000})
// // console.log(obj.array[0])
// $element = $(obj.array[0])

//get a element called demo and make it's inner html the line from the object
// document.getElementById("demo").innerHTML =
// obj.array + " " ;



// $element = $(obj.array[0])
// console.log($element)
// $element.velocity({ top: 50 }, 1000);
// $element
// .velocity({left: '+=100'}, {duration: 200})

//call function which is a velocity transition
// $letter

//     .velocity("fadeOut", { delay: 3100, duration: 5000 }) // fades out




// console.log(lineHolder[0])

// $one = $(lineHolder[0])
// console.log($one)
// //velocity js sequence
// var durTime = 500;
// var sequence = [
// // // phase 1
// // //reveal
// {e: $one, p:{ left: '-=50'}, o: { duration: durTime,  complete: function() {
// //switch parent of $one to
// var activeSelector = select('#stage')
// $one.parent(activeSelector)
//  }}},
// { e: $one, p: {opacity: 1}, o: { duration: durTime } },

// // {e: $as, p:{opacity: 1,}, o: { duration: durTime, sequenceQueue: false }},
// // {e:$one, p:{opacity:1}, o:{ duration: 1500 }},

// ]

// $.Velocity.RunSequence(sequence);

// vid_poem.hide();



// function toggleVid() {
// if (playing) {
// vid_poem.pause();
// // button.html('play');
// } else {
// vid_poem.loop();
// // button.html('pause');
// }
// playing = !playing;
// }

// $("#hollisPoem").velocity("scroll", {
//   container: $("#container"),
//   duration: 800,
//   delay: 500
// });
