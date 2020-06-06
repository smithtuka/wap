

$(function(){ 
    'use strict';
    
    
    const divs = $("#puzzlearea div");
      
    // initialize each piece
    for (let i=0; i< divs.length; i++) {
        const div = divs[i];
        
        // calculate x and y for this piece
        const x = ((i % 4) * 100) ;
        const y = (Math.floor(i / 4) * 100) ;

        // set basic style and background
        let dv = $(div);
        dv.addClass("puzzlepiece");
        dv.css({

            "left" : function(idx,old){ return x + 'px';},
            "top" : function(idx,old){ return y + 'px';},
            "backgroundImage" : 'url("background.jpg")',
            "backgroundPosition" : function(){return ( -x + 'px ' + (-y) + 'px');}
        });
        
        // store x and y for later
        div.x = x;
        div.y = y; 
    }        

 

});





