const questions = [
    {  
        question: "Which is the largest animal on earth?",
        answers: [
            {text: "Shark", correct: "false"},
            {text: "Whale", correct: "true"},
            {text: "Elephant", correct: "false"},
            {text: "Monkey", correct: "false"}
        ]
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: [
            {text: "Mount Kilimanjaro", correct: "false"},
            {text: "Mount Everest", correct: "true"},
            {text: "K2", correct: "false"},
            {text: "Mount Fuji", correct: "false"}
        ]
    }, {  
        question: "Which is the largest animal on earth?",
        answers: [
            {text: "Shark", correct: "false"},
            {text: "Whale", correct: "true"},
            {text: "Elephant", correct: "false"},
            {text: "Monkey", correct: "false"}
        ]
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: [
            {text: "Mount Kilimanjaro", correct: "false"},
            {text: "Mount Everest", correct: "true"},
            {text: "K2", correct: "false"},
            {text: "Mount Fuji", correct: "false"}
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            {text: "Venus", correct: "false"},
            {text: "Mars", correct: "true"},
            {text: "Jupiter", correct: "false"},
            {text: "Saturn", correct: "false"}
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            {text: "Charles Dickens", correct: "false"},
            {text: "William Shakespeare", correct: "true"},
            {text: "Mark Twain", correct: "false"},
            {text: "Jane Austen", correct: "false"}
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            {text: "Berlin", correct: "false"},
            {text: "Madrid", correct: "false"},
            {text: "Rome", correct: "false"},
            {text: "Paris", correct: "true"}
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            {text: "H2O", correct: "true"},
            {text: "O2", correct: "false"},
            {text: "CO2", correct: "false"},
            {text: "HO2", correct: "false"}
        ]
    },
    {
        question: "Which country is the largest by land area?",
        answers: [
            {text: "Canada", correct: "false"},
            {text: "Russia", correct: "true"},
            {text: "China", correct: "false"},
            {text: "United States", correct: "false"}
        ]
    },
    {
        question: "Who wrote the play 'Hamlet'?",
        answers: [
            {text: "William Shakespeare", correct: "true"},
            {text: "Christopher Marlowe", correct: "false"},
            {text: "John Milton", correct: "false"},
            {text: "Thomas Kyd", correct: "false"}
        ]
    },
    {
        question: "Which gas do plants primarily use for photosynthesis?",
        answers: [
            {text: "Oxygen", correct: "false"},
            {text: "Carbon Dioxide", correct: "true"},
            {text: "Nitrogen", correct: "false"},
            {text: "Hydrogen", correct: "false"}
        ]
    },
    {
        question: "What is the longest bone in the human body?",
        answers: [
            {text: "Humerus", correct: "false"},
            {text: "Femur", correct: "true"},
            {text: "Tibia", correct: "false"},
            {text: "Fibula", correct: "false"}
        ]
    },
    {
        question: "Which planet is closest to the sun?",
        answers: [
            {text: "Venus", correct: "false"},
            {text: "Mercury", correct: "true"},
            {text: "Earth", correct: "false"},
            {text: "Mars", correct: "false"}
        ]
    },
    {
        question: "Who is known as the Father of Computers?",
        answers: [
            {text: "Alan Turing", correct: "false"},
            {text: "Charles Babbage", correct: "true"},
            {text: "John von Neumann", correct: "false"},
            {text: "Blaise Pascal", correct: "false"}
        ]
    },
    {
        question: "What is the capital of Italy?",
        answers: [
            {text: "Milan", correct: "false"},
            {text: "Rome", correct: "true"},
            {text: "Naples", correct: "false"},
            {text: "Venice", correct: "false"}
        ]
    },
    {
        question: "Which metal is liquid at room temperature?",
        answers: [
            {text: "Mercury", correct: "true"},
            {text: "Gold", correct: "false"},
            {text: "Silver", correct: "false"},
            {text: "Copper", correct: "false"}
        ]
    },
    {
        question: "Who invented the telephone?",
        answers: [
            {text: "Thomas Edison", correct: "false"},
            {text: "Alexander Graham Bell", correct: "true"},
            {text: "Nikola Tesla", correct: "false"},
            {text: "Guglielmo Marconi", correct: "false"}
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            {text: "African Elephant", correct: "false"},
            {text: "Blue Whale", correct: "true"},
            {text: "Giraffe", correct: "false"},
            {text: "Hippopotamus", correct: "false"}
        ]
    },
    {
        question: "Which vitamin is produced when a person is exposed to sunlight?",
        answers: [
            {text: "Vitamin A", correct: "false"},
            {text: "Vitamin B", correct: "false"},
            {text: "Vitamin C", correct: "false"},
            {text: "Vitamin D", correct: "true"}
        ]
    },
    {
        question: "What is the capital city of Spain?",
        answers: [
            {text: "Barcelona", correct: "false"},
            {text: "Madrid", correct: "true"},
            {text: "Seville", correct: "false"},
            {text: "Valencia", correct: "false"}
        ]
    },
    {
        question: "Which organ in the human body is primarily responsible for detoxification?",
        answers: [
            {text: "Lungs", correct: "false"},
            {text: "Kidneys", correct: "false"},
            {text: "Liver", correct: "true"},
            {text: "Pancreas", correct: "false"}
        ]
    },
    {
        question: "Who wrote the novel 'Moby Dick'?",
        answers: [
            {text: "Herman Melville", correct: "true"},
            {text: "Mark Twain", correct: "false"},
            {text: "Ernest Hemingway", correct: "false"},
            {text: "F. Scott Fitzgerald", correct: "false"}
        ]
    },
    {
        question: "What is the currency of Japan?",
        answers: [
            {text: "Yuan", correct: "false"},
            {text: "Won", correct: "false"},
            {text: "Yen", correct: "true"},
            {text: "Ringgit", correct: "false"}
        ]
    },
    // ... Add more questions here
];

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct === "true") {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }

    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Restart";
    nextButton.addEventListener("click", startQuiz);
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
