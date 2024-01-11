const express = require('express')
const router = express.Router()

const triviaQuestions = [
    {   
        id: 1,
        question: "How many colors are there in the rainbow?",
        answer: "7"
    },
    {
        id: 2,
        question: "How many oceans are on Earth?",
        answer: "5"
    },
    {
        id: 3,
        question: "How many planets are there in the solar system?",
        answer: "9"
    },
    {
        id: 4,
        question: "What is the capital of France?",
        answer: "Paris",
    },
    {
        id: 5,
        question: "Which planet is known as the Red Planet?",
        answer: "Mars",
    },
    {
        id: 6,
        question: "What is the largest mammal in the world?",
        answer: "Blue whale",
    },
]

const answers = []

router.get('/', (req, res) => {
    res.send(triviaQuestions)
})

router.post('/', (req, res) => {
    const question = triviaQuestions.find(q => q.id === req.body.id);
    if (question && question.answer === req.body.answer) {
        const answer = {
            id: answers.length + 1,
            question: req.body.question,
            answer: req.body.answer,
            correct: true,
        };
        answers.push(answer);
        res.status(200).json({ message: 'The answer is correct' });
    } else {
        const answer = {
            id: answers.length + 1,
            question: req.body.question,
            answer: req.body.answer,
            correct: false,
        };
        answers.push(answer);
        res.status(200).json({ message: 'The answer is incorrect' });
    }
});

router.get('/score', (req, res) => {
    let counterCorrectAnswers = 0;
    let unCounterCorrectAnswers = 0;
    for (const i of answers) {
        if (i.correct) {
            counterCorrectAnswers += 1;
        } else {
            unCounterCorrectAnswers += 1;
        }
    }
    res.status(200).json({ correct: counterCorrectAnswers, incorrect: unCounterCorrectAnswers });
});
