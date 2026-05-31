document.addEventListener('DOMContentLoaded', () => {

    // 1. БАЗА ДАНИХ (Масив об'єктів)
    const questions = [
        {
            question: "Скільки всього планет",
            answers: ["5", "4", "7", "2"],
            correct: 2
        },
    
        //   Додай свої запитання
        {
            question: "Найбільша планета",
            answers: ["Меркурій", "Марс", "Юпітер", "Сатурн"],
            correct: 2
        },
         {
            question: "Як називається наша галактика",
            answers: ["Молочко", "Кефірний ", "Молочний шлях", "Чумацький шлях"],
            correct: 3
        },
         {
            question: "Наше сонце",
            answers: ["Сонце", "Зірка", "Чорна дірка", "Галактика"],
            correct: 1
        },
         {
            question: "Найбільша чорна дірка",
            answers: ["Phoenix A", "S5 0014+81", "TON-618", "Holm 15A"],
            correct: 0
        },
         {
            question: "Що найбільше в нашій галактиці",
            answers: ["Сонячна система", "Сонце", "Зірочка", "Phoenix A"],
            correct: 3 
        },
         {
            question: "Який супутник Землі",
            answers: ["Меркурій", "Марс", "Місяць", "Сатурн"],
            correct: 2
        },
         {
            question: "що таке пульсар",
            answers: ["Нейтрона зоря", "зірка", "квазар", "Чорна діра"],
            correct: 0
        },
         {
            question: "Що таке Квазар",
            answers: ["Галактика", "Сонячна система", "Зірка", "Активне ядро галактики"],
            correct: 3
        },
         {
            question: "Як називається де знаходяться всі наші галактики",
            answers: ["Андромаеда", "Всесвіт", "Ланіакея", "галактики"],
            correct: 2
        },
        

    ];
     const questionText = document.querySelector('#question-text');
    const answersContainer = document.querySelector('#answers-container');
    let questionIndex = 0;
    let score = 0;
    const quizScreen = document.querySelector("#quiz-screen")
    const resultScreen = document.querySelector("#result-screen")
    const startScreen = document.querySelector("#start-screen")
    const startBtn = document.querySelector("#start-btn")
    const restartBtn = document.querySelector("#restart-btn")
    const scoreDisplay = document.querySelector("#score-display")
    const resultText = document.querySelector("#result-text")
    let interval
    let timer = 15
    function startGame(){
        startScreen.classList.remove("show");
        startScreen.classList.add("hide");

        resultScreen.classList.remove("show");
        resultScreen.classList.add("hide");

        quizScreen.classList.remove("hide");
        quizScreen.classList.add("show");
        score = 0
        scoreDisplay.textContent = `Бали: 0`;
        questionIndex = 0
        showQuestion(questions[0])
    }
    startBtn.onclick = startGame
    
    function goToStartScreen() {
    resultScreen.classList.remove("show");
    resultScreen.classList.add("hide");

    quizScreen.classList.remove("show");
    quizScreen.classList.add("hide");

    startScreen.classList.remove("hide");
    startScreen.classList.add("show");
}
    restartBtn.onclick = goToStartScreen
    
    function showQuestion(question) {
        answersContainer.innerHTML = '';
        questionText.innerText = question.question;
        for (let i = 0; i < question.answers.length; i++) {
            const button = document.createElement('button');
            button.innerText = question.answers[i];
            button.classList.add('answer-btn');
            // Завдання 5 - Перевірка відповіді
            button.addEventListener('click', () => checkAnswer(button,i));
            answersContainer.appendChild(button);

        }
    }
    showQuestion(questions[questionIndex]);

    // Завдання 5 - Перевірка відповіді
    function checkAnswer(button,answerIndex) {
        if (answerIndex == questions[questionIndex].correct) {
            score++;
            button.classList.add("correct");
            scoreDisplay.textContent = `Бали:  ${score} `
            

        } else {
            button.classList.add("wrong");

        }
        questionIndex++;
        if (questionIndex < questions.length) {
        showQuestion(questions[questionIndex]);
    } else {
        showResult();
    }
    }
    function nextQuestion(){
        questionIndex++
        if (questionIndex < questions.length){
            showQuestion(questions[questionIndex])
        }
        else {
            showResult()
        }
    }
    function showResult(){
        quizScreen.classList.remove("show");
        quizScreen.classList.add("hide")
        resultScreen.classList.add("show")
        resultText.textContent = `Твій результат: ${score} з ${questions.length}`
        
    }
    
});
