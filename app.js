var correctAnswers = 0;
var currentAnimal = 1;
var previousAnimal = 0;
    
var quiz = [
document.getElementById("animal1"),
document.getElementById("animal2"),
document.getElementById("animal3"),
document.getElementById("animal4"),         
document.getElementById("animal5")
];

// SHOW NEXT ANIMAL function
var nextAnimal = function() {
    if(currentAnimal == 5) {
    finishQuiz();  
    }
    else {
    $(quiz[previousAnimal]).hide();
    $(quiz[currentAnimal]).show();
    $(".choices").show();
    $(".correctAnswer").hide();
    $(".wrongAnswer").hide()
    $(".next").hide();
    currentAnimal++;
    previousAnimal++;
    }
};

// CHECK ANSWER function
var checkAnswer = function() {
    if($(this).hasClass("correct")) {
    $(".choices").hide();
    $(".correctAnswer").show();
    $(".next").show();
    correctAnswers++;
    }
    else {
    $(".choices").hide();
    $(".wrongAnswer").show();
    $(".correctInfo").hide();
    $(".next").show();
    }    
};

var showAnswer = function() {
   $(".correctInfo").toggle(); 
};

var finishQuiz = function() {
    $("#animal5").hide();
    $(".correctAnswer").hide();
    $(".wrongAnswer").hide()
    $(".finish").hide();
    $("#finished").show();
    $("#finished p span").html(correctAnswers);
};

var newQuiz = function() {
    $(".next").hide();
    $("#finished").hide();
    $("#intro").show();
    correctAnswers = 0;
    currentAnimal = 1;
    previousAnimal = 0;
};


// START QUIZ    
$(document).on("click", ".begin", function() {
    $("#intro").hide();
    $("#animal1").show();
    $(".choices").show();
    $(".correctAnswer").hide();
    $(".wrongAnswer").hide();
    $(".next").hide();
});

// SELECT ANSWER
$(document).on("click", "li", checkAnswer);

// SHOW ANSWER
$(document).on("click", ".showanswer", showAnswer);

// CONTINUE
$(document).on("click", ".next", nextAnimal);

// FINISH
$(document).on("click", ".finish", finishQuiz)

// RESTART
$(document).on("click", "#restart", newQuiz);



