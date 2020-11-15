
const question_container = document.getElementById('question_container')
const question_element = document.getElementById('question')
const answer_element = document.getElementById('answers')

let total_score, question_index, experience_value
let total = 0

const questions = [
    {
        question: 'how much you like beans kid',
        answers: [
            {score: 95},
            {score: 85},
            {score: 50},
            {score: 15},
            {score: 5}
        ]
    },
    {
        question: 'you got any games on your phone?',
        answers: [
            {score: 95},
            {score: 85},
            {score: 50},
            {score: 15},
            {score: 5}
        ]
    },
    {
        question: 'gee i sure hope this works correctly',
        answers: [ 
            {score: 95},
            {score: 85},
            {score: 50},
            {score: 15},
            {score: 5}
        ]
    },
    {
        question: 'on a scale from 1 to 5,',
        answers: [
            {score: 95},
            {score: 85},
            {score: 50},
            {score: 15},
            {score: 5}
        ]
    },
]

start_quiz()

function start_quiz() {
    console.log('starting')
    window.alert('starting')
    question_index = 0
    next_question()
}

function next_question() {
    reset_answers()
    show_question(questions[question_index])
}

function reset_answers() {
    while (answer_element.firstChild) {
        answer_element.removeChild(answer_element.firstChild)
    }
}

function show_question(question) {
    let count = 0
    question_element.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        switch(count) {
            case 0:
                button.classList.add('btn')
                button.classList.add('green')
                console.log(answer.score)
                button.dataset.score = answer.score
                console.log('green and score set')
                break;
            case 1:
                button.classList.add('btn')
                button.classList.add('lgreen')
                console.log(answer.score)
                button.dataset.score = answer.score
                console.log('lgreen and score set')
                break;
            case 2:
                button.classList.add('btn')
                button.classList.add('gray')
                console.log(answer.score)
                button.dataset.score = answer.score
                console.log('gray and score set')
                break;
            case 3:
                button.classList.add('btn')
                button.classList.add('lred')
                console.log(answer.score)
                button.dataset.score = answer.score
                console.log('lred and score set')
                break;
            case 4:
                button.classList.add('btn')
                button.classList.add('red')
                console.log(answer.score)
                button.dataset.score = answer.score
                console.log('red and score set')
                break;
        }
        count++
        button.addEventListener('click', select_answer)
        answer_element.appendChild(button)
    })

}



function select_answer(event) {
    console.log('called')
    const selected_button = event.target
    const score = selected_button.dataset.score
    
    //timeout function

    console.log(score)
    score_calculations(score)

    if(questions.length > question_index + 1) {
        question_index++
        next_question()
    } else {
        final_calculations()
    }

}

function score_calculations(score) {
    total = +total + +score
    console.log(total)
}

function final_calculations() {
    question_index++
    total_score = +total/+question_index
    console.log(question_index)
    console.log(total_score)
    question_container.classList.add('hide')

    assign_study()

}

function assign_study() {
    if(total_score >= 5 && total_score <= 25) {
        experience_value = 1
    }
    if(total_score > 25 && total_score < 75) {
        experience_value = 2
    }
    if(total_score >= 75 && total_score <= 95) {
        experience_value = 3
    }
}