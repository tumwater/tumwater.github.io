let app = {};

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
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
      [1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1]
    ],
  
    player:{
        x:0,
        y:0
    },
    goal:{
        x:0,
        y:0
    },    
    theme:'levelOneTheme',
    clue1:{
      x:1,
      y:1,
   },
    clue2:{
      x:2,
      y:1,
  },
    clue3:{
      x:3,
      y:1,
   }
   };

  // second level
  levels[1] = {
    map:[
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
      [1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1]
    ],
  
    player:{
        x:0,
        y:0
    },
    goal:{
        x:0,
        y:0
    },    
    theme:'levelTwoTheme',
    clue1:{
      x:1,
      y:1,
   },
    clue2:{
      x:2,
      y:1,
  },
    clue3:{
      x:3,
      y:1,
   }
   
   };
  // third level
  levels[2] = {
    map:[
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
      [1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1]
    ],
  
    player:{
        x:0,
        y:0
    },
    goal:{
        x:0,
        y:0
    },    
    theme:'levelThreeTheme',
    clue1:{
      x:1,
      y:1,
   },
    clue2:{
      x:2,
      y:1,
  },
    clue3:{
      x:3,
      y:1,
   }
   };

   // fourth level
  levels[3] = {
    map:[
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
      [1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1]
    ],

    player:{
        x:0,
        y:0
    },
    goal:{
        x:0,
        y:0
    },    
    theme:'levelFourTheme',
    clue1:{
      x:1,
      y:1,
   },
    clue2:{
      x:2,
      y:1,
  },
    clue3:{
      x:3,
      y:1,
   }
   };

   // fifth level
   levels[4] = {
    map:[
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
      [1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1]
    ],

    player:{
        x:0,
        y:0
    },
    goal:{
        x:0,
        y:0
    },    
    theme:'levelFiveTheme',
    clue1:{
      x:1,
      y:1,
   },
    clue2:{
      x:2,
      y:1,
  },
    clue3:{
      x:3,
      y:1,
   }
   };   

   // sixth level
   levels[5] = {
    map:[
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
      [1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1]
    ],

    player:{
        x:0,
        y:0
    },
    goal:{
        x:0,
        y:0
    },    
    theme:'levelSixTheme',
    clue1:{
      x:1,
      y:1,
   },
    clue2:{
      x:2,
      y:1,
  },
    clue3:{
      x:3,
      y:1,
   }
   };   

   // seventh level
   levels[6] = {
    map:[
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
      [1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1]
    ],

    player:{
        x:0,
        y:0
    },
    goal:{
        x:0,
        y:0
    },    
    theme:'levelSevenTheme',
    clue1:{
      x:1,
      y:1,
   },
    clue2:{
      x:2,
      y:1,
  },
    clue3:{
      x:3,
      y:1,
   }
   };   

   // eighth level
   levels[7] = {
    map:[
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
      [1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1]
    ],

    player:{
        x:0,
        y:0
    },
    goal:{
        x:0,
        y:0
    },    
    theme:'levelEightTheme',
    clue1:{
      x:1,
      y:1,
   },
    clue2:{
      x:2,
      y:1,
  },
    clue3:{
      x:3,
      y:1,
   }
   };

   // ninth level
   levels[8] = {
    map:[
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
      [1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1]
    ],

    player:{
        x:0,
        y:0
    },
    goal:{
        x:0,
        y:0
    },    
    theme:'levelNineTheme',
    clue1:{
      x:1,
      y:1,
   },
    clue2:{
      x:2,
      y:1,
  },
    clue3:{
      x:3,
      y:1,
   }
   };

   // tenth level
   levels[9] = {
    map:[
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
      [1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1]
    ],

    player:{
        x:0,
        y:0
    },
    goal:{
        x:0,
        y:0
    },    
    theme:'levelTenTheme',
    clue1:{
      x:1,
      y:1,
   },
    clue2:{
      x:2,
      y:1,
  },
    clue3:{
      x:3,
      y:1,
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

    // if higher than max index, set back to zero.
       if (this.level_idx > levels.length -1) {
         this.level_idx = 0;
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
