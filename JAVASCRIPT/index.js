//Create a Match question
//Math question will have a random generated
//Question Type Multiplicatin question with random number range 1-10
//Answer will be the product of the random number range and the random number
//User will have to answer question
//On submit answer . answer will be compared with random generated answer
//If answer will be correct than score will be incremented
//If answer will be wrong than score will be decremented

//Generate 4 types of question
//For Subtract first number should be greater than second number
//Store the score in local storage and display the score on the
//Give Feedback to user using toast

const questionEl = document.getElementById("question");
const questionFormEl = document.getElementById("questionForm")
const scoreEl = document.getElementById("score")

let storedAnswer;
let score = 0 ;

const randomNumber = (min,max) => {//1
    return Math.floor(Math.random() * (max - min  + 1) + min);
};
// console.log('randomNumber', randomNumber(20,25));
const generateQuestion = () => {
    const randomNumber1 = randomNumber(1,10);
    const randomNumber2 = randomNumber(1,10);
    const questionType = randomNumber(1,4);
    let question;
    let answer;
    // const question = `Q. What is ${randomNumber1} multiply by ${randomNumber2} ?`;
    // const answer = randomNumber1 * randomNumber2;

    switch(questionType) {
        case 1: 
        question = `Q. What is ${randomNumber1} multiply by ${randomNumber2} ?`;
        answer = randomNumber1*randomNumber2;
        break;
        case 2: 
        question = `Q. What is ${randomNumber1} divided by ${randomNumber2} ?`;
        answer = randomNumber1/randomNumber2;
        break;
        case 3: 
        question = `Q. What is ${randomNumber1} addition to ${randomNumber2} ?`;
        answer = randomNumber1+randomNumber2;
        break;
        case 4: 
        question = `Q. What is ${randomNumber1} subtraction from ${randomNumber2} ?`;
        answer = randomNumber1-randomNumber2;
        break;
        default: 
        question = `Q. What is ${randomNumber1} subtraction from ${randomNumber2} ?`;
        answer = randomNumber1-randomNumber2;
        break;
    }



    return {question, answer};
};

// console.log(generateQuestion());

const showQuestion = () => {
    const {question , answer } = generateQuestion();
    questionEl.innerText = question;
    storedAnswer = answer;
};
showQuestion();

const checkAnswer = (event) => {
    event.preventDefault();
    const formData = new FormData(questionFormEl);
  

    // const userAnswer = parseInt(formData.get("answer"));
    const userAnswer = +formData.get("answer");

    if(userAnswer === storedAnswer){
        score +=1 ;
    }else {
        score -= 1 ;
    }
    scoreEl.innerText = score;
    event.target.reset();
    showQuestion();

    // console.log("answer", userAnswer);
};