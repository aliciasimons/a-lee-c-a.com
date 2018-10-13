$(document).ready(function() {




  // sample buttom












// Marquee

  document.addEventListener('DOMContentLoaded',function(){
     var aMarquee = document.querySelectorAll('[class^="effet-marquee"]'), iNb = aMarquee.length;
    for(var i = 0; i < iNb; i++){
      aMarquee[i].addEventListener('click', marqueePlayAndStop);
    }//for
  });

  function marqueePlayAndStop(oEvent){
    var sClass = "effet-marquee-stop",
        oDiv = oEvent.currentTarget,
        bHasStop = oDiv.className.indexOf(sClass)!=-1;
    if(bHasStop==false){
       oDiv.classList.add(sClass);
    }else{
      oDiv.classList.remove(sClass);
    }
  }//fct


// Add jQuery here


$(document).ready(function() {
  $('#vert').val('e\nd\ni\nt');
});


// Creating questionss and answers
//*****************************************************************************
var question1 = {
                  question: "'Knowing what to do is useless without the emotional strength to do what you know.?'",
                  answers: ["Keith Raniere", "Oprah", ],
                  correct: 0
                };

var question2 = {
                  question: "'How old am I? I'm as old as my mother told me. How's that?' ",
                  answers: ["Will Ferrell", "Charles Manson", ],
                  correct: 1
                };

var question3 = {
                  question: "'Never regret yesterday. Life is in you today, and you make your tomorrow.'",
                  answers: ["C.S Lewis", "L Ron Hubbard"],
                  correct: 1
                }

var question4 = {
                  question: "'To me death is not a fearful thing. It's living that's cursed.'",
                  answers: ["Johnny Depp", "Jim Jones"],
                  correct: 1
                };

var question5 = {
                  question: "'What separates the winners from the losers is how a person reacts to each new twist of fate.''",
                  answers: ["Charles Manson", "Donald Trump"],
                  correct: 1
                };

var question6 = {
                  question: "'No matter what people tell you, words and ideas can change the world.' ",
                  answers: ["L Ron Hubbard", "Robin Williams"],
                  correct: 1
                };

var question7 = {
                  question: "'If opportunity doesn't knock, build a door.'",
                  answers: ["Anton Szandor LaVey", " Milton Berle"],
                  correct: 1
                };




var question8 = {
question: "'Who said 'If the Bible is true, then I'm Christ'",
answers: ["David Koresh", "Seth MacFarlane", ],
correct: 0
  };

var question9 = {
question: "'No sense makes sense.'",
answers: ["Dr. Seus", "Charles Manson", ],
correct: 1
};

var question10 = {
question: "'Nothing in life is promised except death.''",
answers: ["Charlies Manson", "Kanye West"],
correct: 1
};

var question11 = {
question: "'Love is one of the most intense feelings felt by man'",
answers: ["Johnny Depp", "Anton Szandor LaVey"],
correct: 1
};

  var question12 = {
question: "'Pain's not bad, it's good. It teaches you things. I understand that.''",
answers: ["Babe Ruth", "Charles Manson"],
correct: 1
};

var question13 = {
question: "'Monsters are real, and ghosts are real too. They live inside us, and sometimes, they win.''",
answers: ["Jim Jones ", "Stephen King"],
correct: 1
};

var question14 = {
question: "'To the well-organized mind, death is but the next great adventure.''",
answers: ["Shoko Asahara,", "JK Rowling"],
correct: 1
};

var question15 = {
question: "'Turn your wounds into wisdom.' ",
answers: ["David Koresh", "Oprah", ],
correct: 1
};

var question16 = {
question: "'One of the ways you learn about life is to associate with people'",
answers: ["Ellen DeGeneres", "L. Ron Hubbard"],
correct: 1
};

var question17 = {
question: "'There is a beast in man that should be exercised, not exorcised'",
answers: ["Zig Ziglar", "Anton Szandor LaVey"],
correct: 1
};

  var question18 = {
question: "'I know I got angels watching me from the other side.''",
answers: ["David Koresh", "Kanye West"],
correct: 1
};

var question19 = {
question: "'Boldness in itself is genius.''",
answers: ["Elle  Degeneres", "L Ron Hubbard"],
correct: 1
};

var question20 = {
question: "'A lot of people are tired around here, but I'm not sure they're ready to lie down, stretch out and fall asleep.''",
answers: ["Adam Sandler", "Jim Jones"],
correct: 1
};

// create an array of objects

var questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15, question16, question17, question18, question19, question20,];

// Initialize variables
//------------------------------------------------------------------

var tags;
var tagsClass = '';
var liTagsid = [];
var correctAns = 0;
var quizPage = 1;


var currentIndex = 0;
var currentQuestion = questions[currentIndex];

var prevousQuestion;
var previousIndex = 0;

var ulTag = document.getElementsByTagName('ul')[0];
var button = document.getElementById('submit');
var questionTitle = document.getElementById('question');

//save class name so it can be reused easily
//if I want to change it, I have to change it one place
var classHighlight = 'selected';


// Display Answers and hightlight selected item
//------------------------------------------------------------------
function showQuestions (){

  if (currentIndex != 0) {
    // create again submit button only for next pages
    ulTag.innerHTML ='';
    button.innerHTML = 'Submit';
    button.className = 'submit';
    button.id = 'submit';

    //update the number of questions displayed
    document.getElementById('quizNumber').innerHTML = quizPage;
  }

  //Display Results in the final page
  if (currentIndex ==  (questions.length)) {
    ulTag.innerHTML = '';
    document.getElementById('question').innerHTML = '';

    showResults();

    return
  }

  questionTitle.innerHTML = currentQuestion.question;
  console.log(currentQuestion.question);

  // create a for loop to generate the answers and display them in the page
  for (var i = 0; i < currentQuestion.answers.length; i++) {
    // creating answers
    var newAns = document.createElement('li');
    newAns.id = 'ans'+ (i+1);
    newAns.className = "notSelected";
    var textAns = document.createTextNode(currentQuestion.answers[i]);
    newAns.appendChild(textAns);
    var addNewAnsHere = document.getElementById('answer');
    addNewAnsHere.appendChild(newAns);

    console.log(currentQuestion.answers[i]);
  }


  //.click() will return the result of $('.notSelected')
    var $liTags = $('.notSelected').click(function(list) {
        list.preventDefault();
        //run removeClass on every element
        //if the elements are not static, you might want to rerun $('.notSelected')
        //instead of the saved $litTags
        $liTags.removeClass(classHighlight);
        //add the class to the currently clicked element (this)
        $(this).addClass(classHighlight);

        //get id name of clicked answer
        for (var i = 0; i < currentQuestion.answers.length ; i++) {
          // console.log(liTagsid[i]);
          if($liTags[i].className == "notSelected selected"){
            //store information to check answer
            tags = $liTags[i].id;
            // tagsClass = $LiTags.className;
            console.log(tags);
            tagsClassName = $liTags[i];
          }
        }
    });

    //check answer once it has been submitted
    button.onclick = function (){ checkAnswer()};
}

//self calling function
showQuestions();


// Show Correct Answer
//------------------------------------------------------------------
function checkAnswer (){
  // get selected list
  var selectedItem = document.getElementById(tags);

  // check that an answer has been selected
  if (selectedItem == undefined) {
    alert("Please selected an answer!")
    return
  } else {
    // get user answer if form of text
    var userAns = selectedItem.innerHTML;
  }

  // change the background of the answer according to the Results
  if (userAns == currentQuestion.answers[currentQuestion.correct]) {
    console.log("Correct! The answer is: "+ userAns);
    // change color of selected item by changing className
    selectedItem.className = 'correct';
    // count the number of correct answers
    correctAns++;
    console.log(correctAns);
  } else {
    console.log("Wrong! The corrent answer is: "+  currentQuestion.answers[currentQuestion.correct]);
    //change the background of the wrong answer
    selectedItem.className = 'wrong';
    //hightlight the right answer if the user got it wrong
    //change the class name of the correct answer
    ulTag.getElementsByTagName('li')[currentQuestion.correct].className = 'correct';

    console.log(currentQuestion.answers[currentQuestion.correct]);
  }

  // Create a next Question button once the answer has been submitted
  button.innerHTML = 'Next Question';
  button.className = 'next';
  button.id = 'next';

  prevousQuestion = currentQuestion;
  quizPage++;
  currentIndex++;
  currentQuestion = questions[currentIndex];

  // Start with the next question once the "Next" button has been clicked
  button.onclick = function (){showQuestions()};
  return
}

// Final score
//------------------------------------------------------------------
function showResults () {
  //deleting page number
  document.getElementById('pages').innerHTML='';

  // Change Title
  questionTitle.innerHTML = '<h1>Your Score</h1>';

  // Get the area that will be used to display the user's score
  var newInfo = document.getElementById('quiz-results');
  //Change the id and className of the area for the circle
  newInfo.innerHTML = '';
  newInfo.id = 'circle';
  newInfo.className = 'circle';


  //Create a Div for the fill element
  var newDiv = document.createElement('div');
  newDiv.className = 'fill';
  var addHere = document.getElementById('circle');
  addHere.appendChild(newDiv);

  // add the score to the circle
  var newScore = document.createElement('h3');
  newScore.className = 'score';
  var textScore = document.createTextNode(Math.floor((correctAns/questions.length)*100) + '%');
  newScore.appendChild(textScore);
  addHere.appendChild(newScore);

  //use jquary to grab the text of the score
  var score = $(".score").text();

  //fill the circle in base of the score
  $(".fill").css("height",score);

  if (correctAns >= 5) {
    var newCongrats = document.createElement('p');
    var textCongrats = document.createTextNode('Congratulations! You did a Good Job!')
    newCongrats.appendChild(textCongrats);
    document.getElementById('display-area').appendChild(newCongrats);

    confettiEffect();
  }

}

// Confetti Effect by Gtibo "Confetti Party"
//------------------------------------------------------------------
function confettiEffect (){
  //grabing area to create the effect
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;

  // creating the tabel
  particle = [];
  particleCount = 0,
  gravity = 0.3,
  colors = [
    '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
    '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
    '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
    '#FF5722', '#795548'
  ];

  for( var i = 0; i < 300; i++){

    particle.push({
    	x : width/2,
    	y : height/2,
    	boxW : randomRange(5,20),
    	boxH : randomRange(5,20),
    	size : randomRange(2,8),

    	spikeran:randomRange(3,5),

    	velX :randomRange(-8,8),
    	velY :randomRange(-50,-10),

    	angle :convertToRadians(randomRange(0,360)),
    	color:colors[Math.floor(Math.random() * colors.length)],
    	anglespin:randomRange(-0.2,0.2),

    	draw : function(){
    		context.save();
        context.translate(this.x,this.y);
        context.rotate(this.angle);
    		context.fillStyle=this.color;
    		context.beginPath();

    	  context.fillRect(this.boxW/2*-1,this.boxH/2*-1,this.boxW,this.boxH);
    		context.fill();
				context.closePath();
    		context.restore();
    	  this.angle += this.anglespin;
        this.velY*= 0.999;
    	  this.velY += 0.3;

        this.x += this.velX;
        this.y += this.velY;

    		if(this.y < 0){
      	   this.velY *= -0.2;
      		 this.velX *= 0.9;
      	};

      	if(this.y > height){
        	this.anglespin = 0;
        	this.y = height;
        	this.velY *= -0.2;
      		this.velX *= 0.9;
    	  };

    		if(this.x > width ||this.x< 0){
        	this.velX *= -0.5;
        };
    	},
  	});
  }

  function drawScreen(){
  			context.globalAlpha = 1;
    		for( var i = 0; i < particle.length; i++){
    			particle[i].draw();
    		}
  }

	function loadImage(url){
		var img = document.createElement("img");
		img.src=url;
		return img;
	}

  function update(){
  context.clearRect(0,0,width,height);
  drawScreen();
  requestAnimationFrame(update);
  }

  update();

  function randomRange(min, max){
  	return min + Math.random() * (max - min );
  }

  function randomInt(min, max){
  	return Math.floor(min + Math.random()* (max - min + 1));
  }

   function convertToRadians(degree) {
        return degree*(Math.PI/180);
    }

		function drawStar(cx, cy, spikes, outerRadius, innerRadius,color) {
    var rot = Math.PI / 2 * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;

    context.strokeSyle = "#000";
    context.beginPath();
    context.moveTo(cx, cy - outerRadius)
    for (i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        context.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        context.lineTo(x, y)
        rot += step
    }

    context.lineTo(cx, cy - outerRadius)
    context.closePath();
    context.fillStyle = color;
    context.fill();

  }
}






















  });
