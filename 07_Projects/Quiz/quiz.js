const quiz = [
    {
        question: "What is the most used programming language in 2021?",
        ans1text: "Java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "JavaScript",
    },
    {
        question: "Who is the President of US?",
        ans1text: "Joe Biden",
        ans2text: "Donald Trump",
        ans3text: "Barack Obama",
        ans4text: "George Bush",
        answer: "Joe Biden",
    },{
        question: "What does HTML stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Jason Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Hypertext Markup Language",
    },
    {
        question: "What year was JavaScript launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1995",

    }
]

const question = document.getElementById('question')
const optionA = document.getElementById('optionA')
const optionB = document.getElementById('optionB')
const optionC = document.getElementById('optionC')
const optionD = document.getElementById('optionD')
const submit = document.getElementById('submitBtn')
const answerElement = document.querySelectorAll('.answer')
let questionNo = 0;
let score = 0;

question.textContent = quiz[questionNo].question; 
optionA.textContent = quiz[questionNo].ans1text;
optionB.textContent = quiz[questionNo].ans2text;
optionC.textContent = quiz[questionNo].ans3text;
optionD.textContent = quiz[questionNo].ans4text;


submit.addEventListener('click', () => {
    const ans = document.querySelector('input[type="radio"]:checked')
    if (ans === null) {
        alert('please select a option!');
    } else{
        if(ans.nextElementSibling.textContent == quiz[questionNo].answer){
            score++;
        }
        questionNo++;         
        if(questionNo < quiz.length){
            question.textContent = quiz[questionNo].question; 
            optionA.textContent = quiz[questionNo].ans1text;
            optionB.textContent = quiz[questionNo].ans2text;
            optionC.textContent = quiz[questionNo].ans3text;
            optionD.textContent = quiz[questionNo].ans4text;            
            ans.checked = false;
        } else{
            alert(`you scored: ${score}, out of ${quiz.length}`)
            location.reload()
        }
    }
})