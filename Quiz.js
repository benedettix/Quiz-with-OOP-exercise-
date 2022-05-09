class Quiz {
    questionIndex = 0;
    score = 0;
    questions;
    constructor(questions) {
        this.questions = questions;
        
    }

    getCategories() {
        let categories = [];
        questions.forEach(arg => {
            if(categories.indexOf(arg.category) === -1) {
                categories.push(arg.category)
            }else{
                return;
            }
        })
        categories.forEach(category => {
            answersPoll.innerHTML += `<option value="${category}">${category}</option>`
        })
        return categories;

    }

    randomAnswers() {
        let coppyFilteredQuestions = [...filteredQuestions];
        let answers = [];
        let quest = coppyFilteredQuestions[this.questionIndex];
        console.log(quest.answers.length);
            
        for (let i = 0; i < 4; i++) {
            let r = Math.floor(Math.random() *quest.answers.length)
            answers.push(quest.answers[r])
            quest.answers.splice(r,1)

                    optionP[i].innerHTML =  answers[i];
            
        }
        console.log(answers);
     
  
       
    }

    writeAnswers() {
        option.forEach(option => {
          
            option.classList.remove('disabled')
            option.onclick = isCorrect;
        })
        if(this.questionIndex === filteredQuestions.length) {
            let text = "";
            headerH1.innerHTML = "<h3>Game finished</h3><br>"
            text += `
            <p>You answered ${(this.score / 5)} / ${filteredQuestions.length}</p><br>
            <p>Your score is : ${this.score}</p>
            <button id="save">Save Result</button>
            <button id="again">Play Again</button>
            `
            quizHolder.style.display = "block"
            quizHolder.innerHTML = text;
            let save = quizHolder.querySelector('#save')
            let again = quizHolder.querySelector('#again')
            save.onclick = function() {
                save.innerHTML = "Saved";
                save.style.color = "lightgreen"
                localStorage.setItem('score',quiz.score);
                localStorage.setItem('correct',(quiz.score / 5));
                localStorage.setItem('questionLength',filteredQuestions.length);
            }
            again.onclick = function() {
                location.reload();
            }
   

        }else{
       
            quizHolder.style.display = 'flex';
        headerH1.innerHTML = filteredQuestions[this.questionIndex].question;
  

        quiz.randomAnswers();
        
        option.forEach((answers) => {
                answers.style.backgroundColor = 'transparent'
                answers.style.color = 'black'
            answers.onclick = isCorrect;
        })
    }
    }

  
    correct(self) {
        self.style.backgroundColor = 'green'
        self.style.color = 'white'
        this.score += filteredQuestions[quiz.questionIndex].score
        
  
    }

    incorrect(self) {
        self.style.backgroundColor = 'red'
        self.style.color = 'white'
      
    }
    
}

let quiz = new Quiz(questions);


// TAKENOTES
//SAM DA PRAVIM PITANJE GORE
//refactoring
