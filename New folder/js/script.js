let app = {};

function overlay() {
  document.getElementById("overlay").style.display = "block";
}

let x = document.getElementById("btn");
x.style.display = "none";
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

(function(context) {

  let levels = [];
  levels[0] = {
    map:[
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1],
      [1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1],
      [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
      [1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1],
      [1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],
      [1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1],
      [1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1],
      [1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1],
      [1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1],
      [1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1],
      [1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1],
      [1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1],
      [1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1],
      [1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
      [1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1],
      [1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1],
      [1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1],
      [1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
  
    player:{
        x:0,
        y:1
    },    
    goal:{
        x:20,
        y:19
    },           
    theme:'levelOneTheme',
    clue1:{
      x:3,
      y:5,
   },
    clue2:{
      x:12,
      y:15,
  },
    clue3:{
      x:1,
      y:13,
   }
   };

  // second level
  levels[1] = {
    map:[
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1],
      [1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1],
      [1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1],
      [1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1],
      [1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1],
      [1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1],
      [1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],
      [1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1],
      [1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1],
      [1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1],
      [1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1],
      [1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1],
      [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1],
      [1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1],
      [1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1],
      [1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1],
      [1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
  
    player:{
        x:0,
        y:1
    },    
     goal:{
        x:20,
        y:17
    },           
    theme:'levelTwoTheme',
    clue1:{
      x:5,
      y:1,
   },
    clue2:{
      x:11,
      y:3,
  },
    clue3:{
      x:19,
      y:7,
   }
   
   };
  // third level
  levels[2] = {
    map:[
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1],
      [1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1],
      [1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1],
      [1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1],
      [1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1],
      [1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1],
      [1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1],
      [1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1],
      [1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1],
      [1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1],
      [1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1],
      [1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1],
      [1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1],
      [1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1],
      [1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1],
      [1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1],
      [1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1],
      [1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
  
    player:{
        x:0,
        y:1
    },    
     goal:{
        x:19,
        y:1
    },           
    theme:'levelThreeTheme',
    clue1:{
      x:5,
      y:5,
   },
    clue2:{
      x:12,
      y:9,
  },
    clue3:{
      x:15,
      y:15,
   }
   };

   // fourth level
  levels[3] = {
    map:[
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1],
      [1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1],
      [1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1],
      [1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1],
      [1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1],
      [1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1],
      [1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1],
      [1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1],
      [1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1],
      [1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],
      [1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1],
      [1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1],
      [1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1],
      [1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
      [1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1],
      [1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1],
      [1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1],
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],

    player:{
        x:0,
        y:1
    },    
    goal:{
        x:20,
        y:19
    },           
    theme:'levelFourTheme',
    clue1:{
      x:1,
      y:7,
   },
    clue2:{
      x:5,
      y:12,
  },
    clue3:{
      x:7,
      y:15,
   }
   };

   // fifth level
   levels[4] = {
    map:[
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1],
      [1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1],
      [1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1],
      [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1],
      [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1],
      [1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1],
      [1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1],
      [1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1],
      [1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1],
      [1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1],
      [1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1],
      [1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
      [1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1],
      [1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1],
      [1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1],
      [1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1],
      [1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1],
      [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],

    player:{
        x:0,
        y:1
    },    
    goal:{
        x:20,
        y:19
    },           
    theme:'levelFiveTheme',
    clue1:{
      x:5,
      y:1,
   },
    clue2:{
      x:15,
      y:4,
  },
    clue3:{
      x:10,
      y:13,
   }
   };   

   // sixth level
   levels[5] = {
    map:[
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1],
      [1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1],
      [1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1],
      [1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1],
      [1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
      [1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1],
      [1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1],
      [1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1],
      [1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
      [1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1],
      [1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],
      [1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1],
      [1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1],
      [1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1],
      [1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1],
      [1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1],
      [1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1],
      [1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1],
      [1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],

    player:{
        x:0,
        y:1
    },    
    goal:{
        x:20,
        y:19
    },           
    theme:'levelSixTheme',
    clue1:{
      x:3,
      y:2,
   },
    clue2:{
      x:3,
      y:8,
  },
    clue3:{
      x:10,
      y:11,
   }
   };   

   // seventh level
   levels[6] = {
    map:[
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
      [1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1],
      [1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1],
      [1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1],
      [1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1],
      [1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1],
      [1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1],
      [1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1],
      [1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1],
      [1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1],
      [1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1],
      [1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1],
      [1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1],
      [1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1],
      [1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1],
      [1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1],
      [1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1],
      [1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ],

    player:{
        x:0,
        y:1
    },    
    goal:{
        x:20,
        y:19
    },           
    theme:'levelSevenTheme',
    clue1:{
      x:1,
      y:7,
   },
    clue2:{
      x:2,
      y:11,
  },
    clue3:{
      x:5,
      y:13,
   }
   };   

   // eighth level
   levels[7] = {
    map:[
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1],
      [1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1],
      [1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1],
      [1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1],
      [1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1],
      [1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1],
      [1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1],
      [1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1],
      [1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
      [1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1],
      [1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1],
      [1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1],
      [1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],

    player:{
        x:0,
        y:1
    },    
    goal:{
        x:20,
        y:19
    },           
    theme:'levelEightTheme',
    clue1:{
      x:3,
      y:3,
   },
    clue2:{
      x:7,
      y:3,
  },
    clue3:{
      x:9,
      y:5,
   }
   };

   // ninth level
   levels[8] = {
    map:[
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1],
      [1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1],
      [1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1],
      [1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1],
      [1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1],
      [1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1],
      [1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1],
      [1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1],
      [1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1],
      [1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1],
      [1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1],
      [1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1],
      [1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1],
      [1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1],
      [1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1],
      [1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1],
      [1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1],
      [1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],

    player:{
        x:0,
        y:1
    },    
    goal:{
        x:20,
        y:19
    },           
    theme:'levelNineTheme',
    clue1:{
      x:1,
      y:3,
   },
    clue2:{
      x:7,
      y:3,
  },
    clue3:{
      x:7,
      y:10,
   }
   };

   // tenth level
   levels[9] = {
    map:[
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1],
      [1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1],
      [1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1],
      [1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],
      [1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1],
      [1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1],
      [1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1],
      [1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1],
      [1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
      [1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1],
      [1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1],
      [1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1],
      [1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1],
      [1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1],
      [1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
      [1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1],
      [1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],

    player:{
        x:0,
        y:1
    },    
    goal:{
        x:20,
        y:19
    },           
    theme:'levelTenTheme',
    clue1:{
      x:2,
      y:1,
   },
    clue2:{
      x:11,
      y:1,
  },
    clue3:{
      x:15,
      y:8,
   }
   };
/*
 *  The game object constructor.
 *  @param {String} id - the id of the game container DOM element.
 *  @param {Object} level - the starting level of the game.
 */
function Game(id,level) {
  
  this.el = document.getElementById(id);
  
  // level addition
  this.level_idx = 0;

  // establish the basic properties common to all this objects.
  this.tileTypes = ['floor','wall'];
  this.tileDim = 32;
  // inherit the level's properties: map, player start, goal start.
  this.map = level.map;
  
  // level switch
  this.theme = level.theme;
  
  // make a copy of the level's player.
  this.player = {...level.player};
  
  // create a property for the DOM element, to be set later.
  this.player.el = null;
  
  // make a copy of the goal.
  this.goal = {...level.goal};

  this.clue1 = {...level.clue1};

  this.clue2 = {...level.clue2};

  this.clue3 = {...level.clue3};
}

/*
 * Create a tile or sprite <div> element.
 * @param {Number} x - the horizontal coordinate the 2D array.
 * @param {Number} y - the vertical coordinate in the 2D array.
 */
Game.prototype.createEl = function(x,y,type) {
   // create one tile.
  let el = document.createElement('div');
       
  // two class names: one for tile, one or the tile type.
  el.className = type;
  
  // set width and height of tile based on the passed-in dimensions.
  el.style.width = el.style.height = this.tileDim + 'px';
  
  // set left positions based on x coordinate.
  el.style.left = x*this.tileDim + 'px';
  
  // set top position based on y coordinate.
  el.style.top = y*this.tileDim + 'px';
      
  return el;
}

/*
 * Applies the level theme as a class to the game element. 
 * Populates the map by adding tiles and sprites to their respective layers.
 */
Game.prototype.populateMap = function() {
  
  // add theme call
  this.el.className = 'game-container ' + this.theme;

  // make a reference to the tiles layer in the DOM.
  let tiles = this.el.querySelector('#tiles');
  
  // set up our loop to populate the grid.
  for (var y = 0; y < this.map.length; ++y) {
    for (var x = 0; x < this.map[y].length; ++x) {
      
       let tileCode = this.map[y][x];

        // determine tile type using code
        // index into the tileTypes array using the code.
       let tileType = this.tileTypes[tileCode];
      
       // call the helper function
       let tile = this.createEl(x,y,tileType);
       
       // add to layer
       tiles.appendChild(tile);
    }
  }
}

/*
 * Place the player or goal sprite.
 * @param {String} type - either 'player' or 'goal', used by createEl and becomes DOM ID
 */
Game.prototype.placeSprite = function(type) {
  
  // syntactic sugar
  let x = this[type].x
  
  let y = this[type].y;
  
  // reuse the createTile function
  let sprite  = this.createEl(x,y,type);
  
  sprite.id = type;
  
  // set the border radius of the sprite.
  sprite.style.borderRadius = this.tileDim + 'px';
  
  // get half the difference between tile and sprite.
  
  // grab the layer
  let layer = this.el.querySelector('#sprites');
  
  layer.appendChild(sprite);
  
  return sprite;
}

/*
 * Triggers a collide animation on the player sprite.
 */
Game.prototype.collide = function() {
  this.player.el.className += ' collide';
  
  let obj = this;
  
  window.setTimeout(function() {
  obj.player.el.className = 'player';
  },200);
  
  return 0;
  
};
/*
 * Moves the player sprite left.
 */
Game.prototype.moveLeft = function() {
    // if at the boundary, return
    if (this.player.x == 0) {
        this.collide();
        return;
    }
    // identify next tile
    let nextTile = this.map[this.player.y][this.player.x-1];
  
    // if next tile is a wall, add collide effect and return
    if (nextTile ==1) {
        this.collide();
        return;
    }
    // change coordinates of player object
    this.player.x -=1;
    // update location of DOM element
    this.updateHoriz();
};
/*
 * Moves the player sprite up.
 */
Game.prototype.moveUp = function() {
  if (this.player.y == 0) {
        // at end: these could be combined
        this.collide();
        return;
  }
      
  let nextTile = this.map[this.player.y-1][this.player.x];
  if (nextTile ==1) {
        this.collide();
        return;
  }
  this.player.y -=1;
  this.updateVert();
  
};
/*
 * Moves the player sprite right.
 */
Game.prototype.moveRight = function()  {
   if (this.player.x == this.map[this.player.y].length-1) {
        this.collide();
        return;
   }
   nextTile = this.map[this.player.y][this.player.x+1];
        
   if (nextTile ==1) {
        this.collide()
        return;
   }
   this.player.x += 1;
   
   this.updateHoriz();
};
/*
 * Moves player sprite down.
 */
Game.prototype.moveDown = function()  {
  if (this.player.y == this.map.length-1) {
        this.collide();
        return;
   }
   // find the next tile in the 2D array.
        
   let nextTile = this.map[this.player.y+1][this.player.x];
    if (nextTile ==1) {
        this.collide()
        return;
   }
   this.player.y += 1;
   this.updateVert();
  
};
/* 
 *  Updates vertical position of player sprite based on object's y coordinates.
 */
Game.prototype.updateVert = function() { 
     this.player.el.style.top = this.player.y * this.tileDim+ 'px';
};
/* 
 *  Updates horizontal position of player sprite based on object's x coordinates.
 */  
Game.prototype.updateHoriz = function() {
     this.player.el.style.left = this.player.x * this.tileDim + 'px'; 
};
/*
 * Moves player based on keyboard cursor presses.
 */
Game.prototype.movePlayer = function(event) {
    event.preventDefault();
    
    if (event.keyCode < 37 || event.keyCode > 40) {
      return;
    }

    switch (event.keyCode) { 
      case 37:
      this.moveLeft();
      break;
      
      case 38:       
      this.moveUp();
      break;

      case 39:
      this.moveRight();
      break;
        
      case 40:
      this.moveDown();
      break;
    }
 }
/*
 * Check on whether goal has been reached.
 */
Game.prototype.checkGoal = function() {
     let body = document.querySelector('body');
  
     if (this.player.y == this.goal.y &&
       this.player.x == this.goal.x) {
       
       body.className = 'success';

     }
     else {
       body.className = '';
     }
}

function showClueOne() {
   const tooltip = document.querySelector(".ClueOne");
   tooltip.style.display = "block";
}
function hideClueOne() {
   const tooltip = document.querySelector(".ClueOne");
   tooltip.style.display = "none";
}  
function showClueTwo() {
  const tooltip = document.querySelector(".ClueTwo");
  tooltip.style.display = "block";
}
function hideClueTwo() {
  const tooltip = document.querySelector(".ClueTwo");
  tooltip.style.display = "none";
}  

function showClueThree() {
  const tooltip = document.querySelector(".ClueThree");
  tooltip.style.display = "block";
}
function hideClueThree() {
  const tooltip = document.querySelector(".ClueThree");
  tooltip.style.display = "none";
}  

Game.prototype.checkClue1 = function() {
  let body = document.querySelector('body');

  if (this.player.y == this.clue1.y &&
    this.player.x == this.clue1.x) {
    
      console.log("success1")
      showClueOne();

  }
  else {
    hideClueOne();
  }
}

Game.prototype.checkClue2 = function() {
  let body = document.querySelector('body');

  if (this.player.y == this.clue2.y &&
    this.player.x == this.clue2.x) {
    
      console.log("success2")
      showClueTwo();
  }
  else {
    hideClueTwo();
  }
}

Game.prototype.checkClue3 = function() {
  let body = document.querySelector('body');

  if (this.player.y == this.clue3.y &&
    this.player.x == this.clue3.x) {
    
      console.log("success3")
      showClueThree();
  }
  else {
    hideClueThree();
  }
}
/*
 * Changes the level of the game object.
 */
Game.prototype.changeLevel = function() {
    
    // update the level index.
    this.level_idx ++;
    let x = document.getElementById("btn");
    x.style.display = "none";

    // if higher than max index, set back to zero.
       if (this.level_idx > levels.length -1) {
        this.level_idx = 9;

          let x = document.getElementById("btn");
          x.style.display = "block";
          overlay()
    }
    
    // get the level at this index.
    let level = levels[this.level_idx];
    
    // sync the map with the level map.
    this.map = level.map;
    // sync the theme with the level theme.
    this.theme = level.theme;

    // make a copy of the level's player object, since x and y change during the game.
    this.player = {...level.player};

    // make a copy of the level's goal object, since x and y change between levels.
    this.goal = {...level.goal};

    this.clue1 = {...level.clue1};
    this.clue2 = {...level.clue2};
    this.clue3 = {...level.clue3};

    switch (this.level_idx) {
      case 0:
        document.getElementById("ClueOne").innerHTML = ("Freedom of Speech & Press: The First Amendment has multiple parts. The first part of the first Amendment is the freedom of speech and press. These rights are together known as free expression. Both of these rights bring responsibility. For freedom of the press you cannot spread false accusations or publish information that may help enemies in war. For freedom of speech, the first amendment allows free speech in public places like streets and parks. However, that power is not unlimited. Speech that endangers the public is strictly prohibited.");
        document.getElementById("ClueTwo").innerHTML = ("Freedom to use Public Property: Citizens can use public property for meetings and demonstrations. The first amendment does not give people the right to close streets or buildings or protest violently.");
        document.getElementById("ClueThree").innerHTML = ("Freedom to Petition the Government & Religion : The declaration of independence noted King George III repeatedly ignored petitions. This time congress didn't want that to happen again, so they made sure people had the right to petition the government, and made sure they responded to them. The First Amendment also states that Congress cannot make a law respecting or establishing a religion as “official”.");
        break;
      case 1:
        document.getElementById("ClueOne").innerHTML = ("Right to have weapons: America preferred to have local volunteer state militias to protect the nation rather than have a  standing army, granting people the right to bear arms");
        document.getElementById("ClueTwo").innerHTML = ("Right to own a gun for personal use & defense: An individual has the right to own a gun for personal use and to defend themselves in their home.");
        document.getElementById("ClueThree").innerHTML = ("Fun Fact: The 2nd amendment was actually a compromise with the goal of protecting the freedom of states to retain their own militias as well as the right of citizens to keep and bear arms for personal defense and national defense. ");
        break;
      case 2:
        document.getElementById("ClueOne").innerHTML = ("No Quartering: This amendment outlines how soldiers aren’t allowed to be quartered in someone's property without their consent");
        document.getElementById("ClueTwo").innerHTML = ("Fun Fact: Before the American Revolution, King George issued soldiers to be quartered in people’s homes. The Americans despised this and this is why this amendment was made");
        document.getElementById("ClueThree").innerHTML = ("Fun Fact #2: Patrick Henry said that quartering was “one of the principle reasons for dissolving the connection with Great Britain”");
        break;       
       case 3:
        document.getElementById("ClueOne").innerHTML = ("Unreasonable Searches: The 4th amendment protects people from unreasonable searches and seizures. The police must need evidence to search you or your property! ");
        document.getElementById("ClueTwo").innerHTML = ("Good Reason for Arrest: Before arrests, police need to show a judge a good reason for allowing an action.  The judge will issue a warrant specifically saying who will be arrested or what will be searched");
        document.getElementById("ClueThree").innerHTML = ("Example of 4th Amendment: The police require a warrant before they can search your house");
        break;  
      case 4:
        document.getElementById("ClueOne").innerHTML = ("Right to Grand Jury: People accused of major crimes have the right to a grand jury hearing.");
        document.getElementById("ClueTwo").innerHTML = ("No Repeat Trials: A person who is accused of a crime and is found not guilty, cannot be tried again for that same crime.");
        document.getElementById("ClueThree").innerHTML = ("Remain Silent: The police cannot force a person to self-incriminate themselves. This means that they cannot force people to say things that could be used against them in court");
        break;  
       case 5:
        document.getElementById("ClueOne").innerHTML = ("The 6th amendment provides accused people fair trials. One part of the 6th amendment, is the right to a speedy trial, meaning that the accused criminal cannot be kept in jail for long periods of time waiting for trial. This also gives witnesses a fresher memory of what happened ");
        document.getElementById("ClueTwo").innerHTML = ("The 6th amendment also gives the right to the accused to be judged by a jury of his or people living in his area. The jury must be impartial, meaning they must have no bias towards the defendant. During the trial, the 6th amendment also makes sure that the judge must tell the defendant the charge and the time and place of the crime.");
        document.getElementById("ClueThree").innerHTML = ("A defendant has the right to hear and question all witnesses who testify at the trial. They also have the right to an attorney to assist them in the case. ");
        break;  
        case 6:
          document.getElementById("ClueOne").innerHTML = ("Not all trials involve criminal actions. Some civil trials settle disputes between businesses or people. ");
          document.getElementById("ClueTwo").innerHTML = ("Civil cases typically involve money, property, or family matters.");
          document.getElementById("ClueThree").innerHTML = ("The seventh amendment states that “no fact tried by a jury shall be otherwise reexamined” this means that no judge can override a jury’s decision.");
          break;
        case 7:
          document.getElementById("ClueOne").innerHTML = ("The 8th amendment protects the accused person’s right before and after a trial.");
          document.getElementById("ClueTwo").innerHTML = ("Before a trial, a judge is forbidden from demanding excessive bail.");
          document.getElementById("ClueThree").innerHTML = ("After a trial, a judge is forbidden from excessive fines and cruel and unusual punishment.");
          break;
        case 8:
          document.getElementById("ClueOne").innerHTML = ("The ninth amendment states that even though some rights are included in the constitution, other rights that are not listed are retained by the people");
          document.getElementById("ClueTwo").innerHTML = ("An example of this is the right to privacy. Although it is not included in the constitution, it is a right that is retained by the people");
          document.getElementById("ClueThree").innerHTML = ("Another example is the 1973 case of Roe versus Wade. They stated that women had privacy rights over their body, which then made abortion legal in America.");
          break;       
         case 9:
          document.getElementById("ClueOne").innerHTML = ("The tenth amendment gives power to the states and the people so that the government doesn’t have too much power.");
          document.getElementById("ClueTwo").innerHTML = ("Reserved power allows the states to make different laws in their own states such as speed limits, and their own elections.");
          document.getElementById("ClueThree").innerHTML = ("The tenth amendment gives your state the power to issue business licenses and make sure that your doctor has practiced medicine in your state.");
          break;
    }
 }


 /*
  * If goal has been reached, 
  */
 Game.prototype.addMazeListener = function() {

   // grab the map

   let map = this.el.querySelector('.game-map');

   // grab reference to game object since we are going into a function 
   // and "this" will no longer refer to the game object

   let obj = this;

   // if game board is clicked or tapped, see if we should change levels
   map.addEventListener('mousedown',function() {

       // if not at the goal, then get outta here
       if (obj.player.y != obj.goal.y ||
       obj.player.x != obj.goal.x) {
         return;
       }

       const audio = new Audio('huzzah.wav');
       audio.play();

       // change level of game object by changing it's properties
       obj.changeLevel();
       
       // get the two layers
       let layers = obj.el.querySelectorAll('.layer');
      
       // clear tiles and sprites from layers
       for (layer of layers) {
           layer.innerHTML = '';
       }
       
       // place the new level.
       obj.placeLevel();
     
       // check the goal to reset the message.
       obj.checkGoal();

       obj.checkClue1();
       obj.checkClue2();
       obj.checkClue3();
      
   });
 };

/*
 *  Responds to a keydown event by moving the player and checking the goal.
 */
Game.prototype.keyboardListener = function() {
  document.addEventListener('keydown', event => {
      this.movePlayer(event);
      this.checkGoal();
      this.checkClue1();
      this.checkClue2();
      this.checkClue3();
  });
  
 }  
/*
 * Sets the message of the text element.
 * @param {String} msg - The message to be printed.
 */
 Game.prototype.setMessage = function(msg) { 
   let text_el = this.el.querySelector('.text');
   text_el.textContent = msg;
 };

 /*
  * Sizes up the map based on array dimensions.
  */
 Game.prototype.sizeUp = function() {
  
  // inner container so that text can be below it
  let map  = this.el.querySelector('.game-map');
  
  // inner container, height. Need this.map
  map.style.height = this.map.length * this.tileDim + 'px';
   
  map.style.width = this.map[0].length * this.tileDim + 'px';
   
};
  

/*
 * Populates the map.
 * Sizes up the map based on array dimensions.
 * Gives the goal and player some references.
 */ 
 Game.prototype.placeLevel = function() {
    this.populateMap();
    
    this.sizeUp();
   
    this.placeSprite('goal');

    this.placeSprite('clue1');

    this.placeSprite('clue2');

    this.placeSprite('clue3');
    
    // we want the DOM element that gets returned...
    let playerSprite = this.placeSprite('player');
   
    // ..so we can store it in the playerSprite element.
    this.player.el = playerSprite;
   
 }
 /*
  *  Add keyboard, button, and maze tap listeners
  */
 Game.prototype.addListeners = function() {
    
    this.keyboardListener();

    // changing levels
    this.addMazeListener();
  }
  
  /*
   *  Initialization function called once
   */
  context.init = function () {
    
    let myGame = new Game('game-container-1',levels[0]);
    
    // encapsulate for multi-level
    myGame.placeLevel();
    
    // add listeners
    myGame.addListeners();
    
  }
})(app);

/*
 * Tell app to activate the init() function.
 */

app.init();

//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}