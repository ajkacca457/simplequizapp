const quiz= [
  {question:"What's the biggest animal in the world?",
    a:"elephant",
    b:"girraffe",
    c:"bluewhale",
    d:"monkey",
    correct: "c"
  },

  {question:"How many valves does the heart have?",
    a:"two",
    b:"three",
    c:"one",
    d:"four",
    correct: "d"
  },

  {question:"What is the capital of Iceland?",
    a:"Helsinki",
    b:"Reykjavík",
    c:"Berlin",
    d:"Bogota",
    correct: "b"
  },

  {question:"Typically, what's the strongest muscle in the human body?",
    a:"The masseter - the main jaw muscle",
    b:"Ribs",
    c:"Spine",
    d:"Tooth",
    correct: "a"
  },

  {question:"How many minutes in a game of rugby league?",
    a:"80 min",
    b:"90 min",
    c:"60 min",
    d:"100 min",
    correct: "a"
  },


    {question:"Who painted the Mona Lisa?",
      a:"Leonarodo da caprio",
      b:"Vasco da gama",
      c:"Vincent van gogh",
      d:"Leonardo da Vinci",
      correct: "d"
    },

    {question:"What's a baby rabbit called?",
      a:"A kit",
      b:"A Norm",
      c:"A Janis",
      d:"A Nikcel",
      correct: "a"
    },

    {question:"Which planet is closest to the sun?",
      a:"Earth",
      b:"Mercury",
      c:"Venus",
      d:"Jupitar",
      correct: "b"
    },
    {question:"Which city had the first ever fashion week?",
      a:"London , in 1937",
      b:"Paris , in 1940",
      c:"New York, in 1943",
      d:"Madrid, in 1344",
      correct: "c"
    },

    {question:"Who came second in the FIFA Women's World Cup in 2019?",
      a:"Germany",
      b:"Netherlands",
      c:"Italy",
      d:"Japan",
      correct: "b"
    }

]

const answerElement=document.querySelectorAll(".answers");
const displayresult=document.querySelector(".container");

let currentquestion=0;
let score=0;


loadquiz()

function loadquiz(){
  deselect();
question=document.querySelector(".question");
option1=document.querySelector("#ans1");
option2=document.querySelector("#ans2");
option3=document.querySelector("#ans3");
option4=document.querySelector("#ans4");

quizitem=quiz[currentquestion]
question.innerText=quizitem.question;
option1.innerText=quizitem.a;
option2.innerText=quizitem.b;
option3.innerText=quizitem.c;
option4.innerText=quizitem.d;
}

function select(){
let answer;
answerElement.forEach((answerel) => {
  if (answerel.checked){
answer=answerel.value
}
})
return answer;
}

function deselect(){
  answerElement.forEach((answerel) => {
    answerel.checked=false;
  }
  )}



const submit=document.querySelector(".submit");


submit.addEventListener("click", function(){
  const answer=select();
if (answer) {
  if (answer===quiz[currentquestion].correct){
    score++;
  }

    currentquestion++;
    if (currentquestion<quiz.length) {
      loadquiz();
    }
    else {
      displayresult.innerHTML=`<h2>you have scroed ${score} out of 10</h2>`
      displayresult.style.padding="10px";
      displayresult.style.textAlign="center";
  }
}
})
