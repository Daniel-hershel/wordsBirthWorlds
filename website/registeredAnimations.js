$.Velocity.RegisterUI("blowUp", {
    defaultDuration: 3000,
    calls: [ 
            [ {  fontSize: '+=120%'}, 0.90, {easing: "easeInSine"} ],
            [ {  scale: 50}, 0.80, {easing: "easeInSine"} ],
    ]
});


$.Velocity.RegisterUI("squishTogether", {
    defaultDuration: 3000,
    calls: [ 
            [ {  marginTop: '-=20%'}, 0.90, {easing: "easeInSine"} ],
          
    ]
});

$.Velocity.RegisterUI("spreadApart", {
    defaultDuration: 3200,
    calls: [ 
            [ {  padding: [-45, 45]}, 1, {easing: "easeInSine"} ],
          
    ]
});


$.Velocity.RegisterUI("makeWay", {
    defaultDuration: 3000,
    calls: [ 
            // [ {backgroundColor:'#1E60A2' }, 0.80, { easing: "spring" }  ],
            [ {  top: 250}, 0.90, {easing: "easeInSine"} ],
[ {  scale: .7}, 0.80, {easing: "easeInSine"} ],
            [ {  opacity: .2}, 1.2, {easing: "easeInSine"} ],
      // [ { scaleY: .6 }, 0.25, { easing: "easeOutCirc" } ],
            // [ {  borderTopWidth: "1rem"}, 0.50, {easing: "spring"} ],

    ]
});

$.Velocity.RegisterUI("fertilizer", {
    defaultDuration: 3000,
    calls: [ 
            // [ {backgroundColor:'#1E60A2' }, 0.80, { easing: "spring" }  ],
            [ {  top:'+=200'}, 0.90, {easing: "easeInSine"} ],
[ {  scale: .7}, 0.50, {easing: "easeInSine"} ],
            [ {  opacity: .2}, 1.50, {easing: "easeInSine"} ],

      // [ { padding: [55,0] }, 0.50 ],
      // [ { scaleY: 1 }, 0.25, { easing: "spring" } ]
    ]
});

$.Velocity.RegisterUI("becomeStars", {
    defaultDuration: 3000,
    calls: [ 
                  [ { scale: .05,  translateY: -650, }, 1.2, {easing: 'easeInBack'}],

    ]
});

$.Velocity.RegisterUI("becomePlanets", {
    defaultDuration: 3000,
    calls: [ 
                  [ { scale: .06,  translateY: -650, }, 1.2, {easing: 'easeInBack'}],
                  [ { opacity: .01}, 1.2, {easing: 'easeInBack'}],


    ]
});
$.Velocity.RegisterUI("growing", {
    defaultDuration: 3000,
    calls: [ 
            // [ {backgroundColor:'#1E60A2' }, 0.80, { easing: "spring" }  ],
            [ {  top:'40%'}, 0.90, {easing: "easeInSine"} ],
// [ {  scale: .7}, 0.50, {easing: "easeInSine"} ],
             [ { scale: 0.6 }, 1 , {easing: "easeInOutBack"}],
            [ { height: 0.8 }, 1,  {easing: "easeOutSine"} ],
 
    ]
});

$.Velocity.RegisterUI("supportRole", {
    defaultDuration: 3000,
    calls: [ 
            // [ {backgroundColor:'#1E60A2' }, 0.80, { easing: "spring" }  ],
            [ {  top: -50}, 0.90, {easing: "easeOutCirc"} ],
            [ {  scale: .6}, 0.90, {easing: "easeOutCirc"} ],
            [ {  opacity: .7}, 0.90, {easing: "easeOutCirc"} ],

      // [ { scaleY: .6 }, 0.25, { easing: "easeOutCirc" } ],
            // [ {  borderTopWidth: "1rem"}, 0.50, {easing: "spring"} ],
    // [ { letterSpacing: -9 }, .314, { easing: "easeOutSine" } ],
    // [ { letterSpacing: 15 },  .8, { easing: "easeOutSine" }],

      // [ { padding: [55,0] }, 0.50 ],
      // [ { scaleY: 1 }, 0.25, { easing: "spring" } ]
    ]
});
$.Velocity.RegisterUI("posterize", {
    defaultDuration: 3000,
    calls: [ 
            // [ {backgroundColor:'#1E60A2' }, 0.80, { easing: "spring" }  ],
            // [ {  borderWidth: "1rem"}, 0.50, {easing: "spring"} ],
      // [ { scaleX: .5 }, 0.25, { easing: "spring" } ],
      // [ { scaleY: .6 }, 0.25, { easing: "spring" } ],
            [ {  borderTopWidth: "1rem"}, 0.50, {easing: "spring"} ],
    [ { letterSpacing: -9 }, .314, { easing: "easeOutSine" } ],
    [ { letterSpacing: 15 },  .8, { easing: "easeOutSine" }],

      // [ { padding: [55,0] }, 0.50 ],
      // [ { scaleY: 1 }, 0.25, { easing: "spring" } ]
    ]
});
$.Velocity.RegisterUI("exitHarsh", {
    defaultDuration: 3000,
    calls: [ 
                [ { scale: 0.1 }, 0.60, { easing: "easeOutSine" }  ],
            [ { top: -600}, 0.60, { easing: "easeOutSine" }],
                [ { paddingBottom: "+=50px"}, 0.60, { easing: "easeOutSine" }],

            // [ { scaleX: .5 }, 0.25, { easing: "spring" } ],
            // [ { scaleY: .6 }, 0.25, { easing: "spring" } ],
            // [ { lineHeight: 3.5 }, 0.50 ],
            // [ { scaleY: 1 }, 0.25, { easing: "spring" } ]
    ]
});


$.Velocity.RegisterUI("upStage", {
       defaultDuration: 3000,
    calls: [ 
            [ { opacity: 1 }, 1,  {easing: "easeOutSine"} ],
            [ { top: -200 }, 1,  {easing: "easeInOutBack"} ],
            [ { paddingBottom: '+=35px' }, .1,  {easing: "easeOutSine"} ],
            [ { scale: 0.6 } ,1 , {easing: "easeInOutBack"}],
            [ { height: 0.8, padding: -25 }, 1,  {easing: "easeOutSine"} ],
            [ { paddingBottom: '-=28px' }, .1,  {easing: "easeOutSine"} ],
            ]

});


$.Velocity.RegisterUI("starsIn", {
       defaultDuration: 3000,
    calls: [ 
            // [ { top: 200 }, 1,  {easing: "easeInOutBack"} ],
            [ { letterSpacing: '=185px' }, .1,  {easing: "easeOutSine"} ],
            [ { scale: 0.1 } ,1 , {easing: "easeInOutBack"}],

            // [ { height: 0.8 }, 1,  {easing: "easeOutSine"} ],
            // [ { paddingBottom: '-=28px' }, .1,  {easing: "easeOutSine"} ],
            ]

});


$.Velocity.RegisterUI("starsShine", {
       defaultDuration: 4000,
    calls: [ 
            // [ { top: 200 }, 1,  {easing: "easeInOutBack"} ],
            [ { opacity:1 } ,1 , {easing: "easeInOutBack"}],
            // [ {  scale: 1.2, padding: "+=20" } ,4 , {easing: "easeInOutBack"}],
            [ {  scale: 1, padding: "+=10" } ,4 , {easing: "easeInOutBack"}],

            // [ {  scale: 1 } ,4 , {easing: "easeInOutBack"}],

            ]

});

$.Velocity.RegisterUI("entrancePoster", {
    defaultDuration: 3000,
    calls: [ 
                [ { opacity: 1 }, 1 ],
            [ { paddingBottom: '+=15px' }, .1,  {easing: "easeOutSine"} ],

            [ { scale: 0.6 }, 1 , {easing: "easeInOutBack"}],
            [ { height: 0.8 }, 1,  {easing: "easeOutSine"} ],
            [ { paddingBottom: '-=28px' }, .1,  {easing: "easeOutSine"} ],

            // [ { letterSpacing: 1  }, .5,  {easing: "easeOutSine"} ],
                // [ { opacity: 7 }, 2 ],
   //                [ { opacity: 1 }, 1 ],


            // // [ { scaleY: .6 }, 0.25, { easing: "spring" } ],
            // // [ { lineHeight: 3.5 }, 0.50 ],
            // [ { scaleY: .8 }, 0.25, { easing: "spring" } ]
    ]
});



$.Velocity.RegisterUI("hoverStage", {
    defaultDuration: 3000,
    calls: [ 
            
            
            [ { translateY: '-=300px' }, .7 ],
            [ { scale: 0.7 }, .2 ],
            // [ { height: 0.8 }, 1 ],
            // [ { padding: "+=50" }, 1 ],
            
            // [{translateY: 100}, 1]
            // [{translateY: 100}, 1]

      // [ { scaleY: .6 }, 0.25, { easing: "spring" } ],
      // [ { lineHeight: 3.5 }, 0.50 ],
      // [ { scaleY: 1 }, 0.25, { easing: "spring" } ]
    ]
});


$.Velocity.RegisterUI("entranceNarrator", {
    defaultDuration: 3000,
    calls: [ 
            
            [ { scale:.02 }, .1 ],
            [ { opacity: 1, scale: 1.2 }, 1, { easing: "easeInOutBounce" }  ],
            [ { scale: 0.6, height: "+=25px" }, 1, { easing: "easeInOutBounce" }  ],
            // [ { height: 0.7 }, 1 ],
            // [ { padding: "+=50" }, 1 ],
            

            // [{translateY: 100}, 1]
            // [{translateY: 100}, 1]

      // [ { scaleY: .6 }, 0.25, { easing: "spring" } ],
      // [ { lineHeight: 3.5 }, 0.50 ],
      // [ { scaleY: 1 }, 0.25, { easing: "spring" } ]
    ]
});

$.Velocity.RegisterUI("chaosIn", {
    defaultDuration: 3000,
    calls: [ 
                
                [ { opacity: 1 }, 1 ],
                [ { scale: 0.4 }, 1 ],
                [ { height: 0.7 }, 1 ],
                // [ { padding: "+=50" }, 1 ],
                
                // [{translateY: 100}, 1]
                // [{translateY: 100}, 1]

            // [ { scaleY: .6 }, 0.25, { easing: "spring" } ],
            // [ { lineHeight: 3.5 }, 0.50 ],
            // [ { scaleY: 1 }, 0.25, { easing: "spring" } ]
    ]
});



$.Velocity.RegisterUI("titleSequence", {
    defaultDuration: 3000,
    calls: [ 
            // [ { opacity: 1 }, 0.50 ],
            [ { scale: 1.6 }, 1, { easing: "easeInCubic" } ],

            // [ { scale: .6 }, 0.50 ],
            // [ { scale: 1 }, 0.50 ],
      [ { translateX: -80 }, 1, { easing: "easeInCubic" } ],
      // [ { lineHeight: 3.5 }, 0.50 ],
      // [ { scaleY: 1 }, 0.25, { easing: "spring" } ]
    ]
});


$.Velocity.RegisterUI("transition.spreadIn", {
    defaultDuration: 2000,
    calls: [ 
                [ { letterSpacing: -55 } ],
                [ { scale: .2 } ],
                [ { opacity: 1 } ],
            

    ],
                     // reset: { letterSpacing: 90 }
});


$.Velocity.RegisterUI("transition.spreadEven", {
    defaultDuration: 2000,
    calls: [ 
                [ { letterSpacing: 2.5  } ],
                [ { scale: 1  } ],
                [ { padding: -15  } ],
    ],
                     // reset: { letterSpacing: 90 }
});

$.Velocity.RegisterUI("transition.quickInOut", {
    defaultDuration: 2000,
    calls: [ 
                [ { opacity:1 } ],
                [ { letterSpacing: 2.5  } ],
                [ { scale: function(i, element){return i*.01}  } ],
                [ { padding: -15  } ],
    ],
                     // reset: { letterSpacing: 90 }
});




$.Velocity.RegisterUI("transition.ladderIn", {
    defaultDuration: 2000,
    calls: [ 
                [ { opacity:1 } ],
                // [ { translateX: function(i, total) { return i * 100; } } ],        
                [ { translateX: -90} ],
                [ { rotateZ: -90} ],
                // [ { scale: .4 } ],

    ],
                     // reset: { letterSpacing: 90 }
});


$.Velocity.RegisterUI("transition.defaultIn", {
    defaultDuration: 2000,
    calls: [ 
            // [ { translateX: function(i, total) { return i * 100; } } ],        
            [ { scale:.005 }],
            [ { opacity:1 } ],
            [ { scale:1} ],

            // [ { rotateZ: -90} ],
            // [ { scale: .4 } ],

    ],
                 // reset: { letterSpacing: 90 }
});

$.Velocity.RegisterUI("transition.defaultOut", {
    defaultDuration: 4000,
    calls: [ 
            [ { letterSpacing: -20}, .7 ],        
            [ { padding: 20 }, .7],
            [ { scale: .05,  translateY: -850, top: -200 }, 1.2, {easing: 'easeInBack'}],
            // [ { translateY: -850}, 1],
           

        

    ],
});


$.Velocity.RegisterUI("transition.soultrainIn", {
    defaultDuration: 2000,
    calls: [ 
            // [ { translateX: function(i, total) { return i * 100; } } ],        
            [ { fontSize: '-=15%',opacity:1 }],
            [ { rotateZ:45 }],
            [ { padding:25 }],
        // [ { boxShadowBlur: 50 }, 0.2 ],



    ],
                 // reset: { letterSpacing: 90 }
});


// dancing letters dope effect
// { e: $lineTwo, p: { opacity: 1,}, o: { duration: 49, delay: 10, stagger: 30  }},

// { e: $lineTwo, p: {padding:200}, o: { duration: 1900, delay: 0, sequenceQueue:false} }, 
// { e: $actTwo, p: {height:.5}, o: { duration: 1900, delay: 0, sequenceQueue:false} }, 

