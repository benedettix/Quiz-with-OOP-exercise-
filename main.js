
let startBtn = document.querySelector('#start');
let headerCategories = document.querySelector('.header__categories');
let quizHolder = document.querySelector('.quiz__holder');
let option = document.querySelectorAll('.option');
let optionP = document.querySelectorAll('.option p');
let headerH1 = document.querySelector('.header h1')
let quizDiv = document.querySelector('#quiz');




displayCategoryBtns();
function displayCategoryBtns() {


        if(localStorage.getItem('score')) {
            let scoreBoard = document.createElement('div')
            scoreBoard.classList.add('scoreBoard');
            let score = localStorage.getItem('score');
            let correctAns = localStorage.getItem('correct')
            let qLength = localStorage.getItem('questionLength')
           
            scoreBoard.innerHTML = `Your saved score is : ${score}<br>
            Your correct answers is ${correctAns} / ${qLength}`;
            quizDiv.appendChild(scoreBoard);
        }
        startBtn.style.display = 'block';
    let btns = quiz.getCategories();
    btns.unshift("All");
    headerCategories.innerHTML = '';
    for (let i = 0; i < btns.length; i++) {
        let div = document.createElement("div");
     
        div.classList.add('category');
        div.innerHTML  += `<p>${btns[i]}</p>`
        div.innerHTML  += `</div>`
      
        headerCategories.appendChild(div);
        headerCategories.style.display = 'flex';
        div.style.display = 'block'
        div.onclick = function() {
            startBtn.onclick = showQuestions;
            let categoryBtn = document.querySelectorAll('.category');
            startBtn.removeAttribute("disabled");
            categoryBtn.forEach(btn => {
                btn.classList.remove('selected');
            });
            filter.selectCategory(this);
        }
    }

}


    function showQuestions() {
        
        let scoreBoard = quizDiv.querySelector('.scoreBoard')
        console.log(scoreBoard);
        scoreBoard.style.display = 'none';
        this.style.display = "none"
        quizHolder.style.display = "flex"
        headerCategories.style.display = "none"
        quiz.writeAnswers();
        
    }

        function isCorrect() {
            let optionP = this.querySelector('p')
           
            filteredQuestions[quiz.questionIndex].correctAnswer === optionP.innerHTML ? quiz.correct(this) : quiz.incorrect(this);
            quiz.questionIndex++
            option.forEach(option => {
                option.classList.add('disabled')
                option.onclick = null;
            })
            setTimeout(function() {
               
                quiz.writeAnswers();
            },2000)
      
          
        }

  






