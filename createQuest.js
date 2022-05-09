let answersPoll = document.querySelector('#answers');
let questionAnswer = document.querySelector('#question')
let correctAnswer = document.querySelector('#correctAnswer')
let scorePoints = document.querySelector('#scorePoints');
let createBtn = document.querySelector('#createBtn');
let create = document.querySelector('#create');
let allViews = document.querySelectorAll('.view');
let q1 = document.querySelector('#q1')
let q2 = document.querySelector('#q2')
let q3 = document.querySelector('#q3')
let q4 = document.querySelector('#q4')
let goback = document.querySelector('#goback')
let createQuestionDiv = document.querySelector('#create__question')

window.addEventListener("hashchange", changeView);
createBtn.onclick = createQuestion;

function createQuestion(e) {
    e.preventDefault();

    questions.push(new Questions(`${questionAnswer.value}`, `${correctAnswer.value}`,parseInt(scorePoints.value),`${answersPoll.value}`,[`${q1.value}`,`${q2.value}`,`${q3.value}`,`${q4.value}`]))
    createQuestionDiv.style.display = "none"
    quizDiv.style.display = "block";
}

function changeView() {
    console.log('rad');
goback.onclick = function() {
    location.reload();
}
    let currentHash = location.hash.substring(1);
    console.log(currentHash);
    allViews.forEach(view => {
        if (currentHash === view.id) {
            view.style.display = "block";
        }else{
            view.style.display = "none";
        }
    })
}