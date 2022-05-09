let filteredQuestions = [];
class filterCategory {
    constructor(questions) {
        this.questions = questions;
    }
    selectCategory(clickedBtn) {
        if(!clickedBtn.classList.contains('selected')) {
            clickedBtn.classList.add('selected')
        }

        let p = clickedBtn.querySelector('p').innerHTML;

        if (p === "All") {
            
            return filteredQuestions = this.questions;
        }
        filteredQuestions = questions.filter(question => {
                return  question.category === p;
            })
            return filteredQuestions;
      
       
       
    }
}
let filter = new filterCategory(questions);

