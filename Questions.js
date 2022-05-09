class Questions {
    question;
    correctAnswer;
    score;
    category;
    answers;
    constructor(question,correctAnswer,score,category,answers) {
        this.question = question;
        this.correctAnswer = correctAnswer;
        this.score = score;
        this.category = category;
        this.answers = answers;
    }
}

let questions = [
    //FOOTBALL
    new Questions("Najbolji fudbaler sveta je ?", "Ronaldo",5,"football",["Ronaldo","Messi","Ibrahimovic","Pepe"]),
    new Questions("Najvise golova u godini je napravio?", "Messi",5,"football",["Messi","Ronaldo","Benzema","Ramos"]),
    //SCHOOL
    new Questions("How much is 2 + 2 * 5?", "12",5,"school",["12","10","5","4"]),
    new Questions("The best physicist was", "Albert",5,"school",["Albert","Issac","James","Nory"]),
    //RUNNING
    new Questions("Fastest man on planet is ?", "Usain",5,"running",["Usain","Mikes","Rogers","Fanus"]),
    new Questions("Best long runner in the world is ?", "Eluid",5,"running",["Eluid","Mo","Brigid","Joshua"]),
    //LIFTING
    new Questions("Who has deadlift record?", "Thor",5,"lifting",["Thor","Eddie","Smaev","Pushkar"]),
    new Questions("Best arm wrestler ever ?", "Brzenk",5,"lifting",["Brzenk","Cypelenkov","Pushkar","Devon"]),
]
