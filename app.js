
    
var correctAnswers = 0;
var currentAnimal = 0;
var previousAnimal = currentAnimal - 1;
    
var quiz = {
animal1: document.getElementById("animal1"),
animal2: document.getElementById("animal2"),
animal3: document.getElementById("animal3"),
animal4: document.getElementById("animal4"),         
animal5: document.getElementById("animal5")
};

var nextAnimal = function() {
    currentAnimal++;
    $(quiz[previousAnimal]).hide();
    $(quiz[currentAnimal]).show();
};

var checkAnswer = function() {
    if($(this).hasClass("correct")) {
    $(".choices").hide();
    $(".correctAnswer").show();
    $(".next").show();
    }
    else {
    $(".choices").hide();
    $(".wrongAnswer").show();
    $(".correctInfo").hide();
    $(".next").show();
    }    
};

var newQuiz = function() {
    $("#animal5").hide();
    $("#intro").show();
    correctAnswers = 0;
    currentAnimal = 0;
};

// START QUIZ    
$(document).on("click", ".begin", function() {
    $("#intro").hide();
    $("#animal1").show();
    $(".correctAnswer").hide();
    $(".wrongAnswer").hide();
    $(".next").hide();
});

// SELECT ANSWER
$(document).on("click", "li", checkAnswer);

// CONTINUE
$(document).on("click", ".next", nextAnimal);

// RESTART
$(document).on("click", "#restart", newQuiz);



