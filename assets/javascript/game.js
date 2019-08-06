
// grabbing elements
var winsText = document.getElementById("Wins");
var loseText = document.getElementById("Losses");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var Diamond = document.getElementById("Diamond");
var Emerald = document.getElementById("Emerald");
var Ruby = document.getElementById("Ruby");
var Sapphire = document.getElementById("Sapphire")
var userGuess ="";
var ComputerGuess = "";

// game counters
var winscount= 0;
var losecount=0;
var numberOfGuesses = 9;
var totalScore=0;
var usertotal=0;


function reset (){
// chooses random number 19-120
    var Random=Math.floor(Math.random()*101+19);
    $("#randomNumber").text(Random);

    // sets buttons to random numbers 1-12
    Diamond=Math.floor(Math.random()*11+1);
    Emerald=Math.floor(Math.random()*11+1);
    Ruby=Math.floor(Math.random()*11+1);
    Sapphire=Math.floor(Math.random()*11+1);


    // click function for buttons
    $("#Diamond").on(function(){
        usertotal=usertotal + Diamond;
        console.log("new usertotal= " + usertotal);
        $("#yourtotalscore").text(usertotal);

        if (usertotal == random){
            win();
        }
        else if( usertotal > random){
            loser();
        }
    })

    $("#Emerald").on(function(){
    usertotal = usertotal + Emerald;
    console.log("new usertotal= " + usertotal);
    $("#yourtotalscore").text(usertotal);

    if(usertotal == random){
        win();
    }
    else (usertotal > random){
        lose();
    }
});

    $("#Ruby").on(function(){
    usertotal = usertotal + Ruby;
    console.log("new usertotal= " + usertotal);
    $("#yourtotalscore").text(usertotal);

    if (usertotal == random){
    win();
    }
    else( usertotal > random);
    lose();

    });

    $("#Sapphire").on(function(){
        usertotal = usertotal + Sapphire;
        console.log("new usertotal= " + usertotal);
        $("#yourtotalscore").text(usertotal);

        if (usertotal  == random){
            win();
        }
        else( usertotal > random){
            lose();
        }
    })


    }
