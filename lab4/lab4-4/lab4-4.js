let countQuest = 0;
let plus = 0;
let test_start = true;

let questions = [
    ["Hello", "Привет", "Как дела", "Пока", "Дом"],
    ["Event", "Событие", "Вчера", "Завтрак", "Волосы"],
    ["Mouse", "Мышь", "Лев", "Чача", "Грузия"],
    ["Sugar", "Сахар", "Гора", "Иерихон", "Призыв"],
    ["Down", "Вниз", "Вверх", "Влево", "Вправо"],

    ["King", "Король", "Гардероб", "Паприка", "Весло"],
    ["Glasses", "Очки", "Держатель", "Окно", "Лиса"],
    ["Book", "Книга", "Общежитие", "Дирижабль", "Игра"],
    ["Headphones", "Наушники", "Вата", "Круг", "Весна"],
    ["Keyboard", "Клавиатура", "Удлинитель", "Цилиндр", "Фейхоа"],

    ["House", "Дом", "Деревня", "Страна", "Город"],
    ["Kitten", "Котенок", "Утенок", "Ягненок", "Карась"],
    ["Coal", "Уголь", "Железо", "Древесина", "Математика"],
    ["Star", "Звезда", "Двигатель", "Шертеренка", "Колодязь"],
    ["Sky", "Небо", "Облако", "Дождь", "Гроза"]
];

let answers = [
    1, 1, 1, 1, 1,
    1, 1, 1, 1, 1,
    1, 1, 1, 1, 1,
];

function check(num) {

    if (num == 4) {

        document.getElementById('area').style.display = 'block';
        document.getElementById('start').style.display = 'none';
        document.getElementById('end').style.display = 'inline';

        if (test_start) {
            setupQuestion()
        } else {
            test_start = false;
        }
    }
    else {
        if ((num + 1) == answers[countQuest]) plus++;
        setupQuestion();
        countQuest++;
    }
}

function setupQuestion() {
    if (questions.length - 1 > countQuest) {


        document.getElementById('question').innerHTML = questions[countQuest][0];

        document.getElementById('option1').innerHTML = questions[countQuest][1];
        document.getElementById('option2').innerHTML = questions[countQuest][2];
        document.getElementById('option3').innerHTML = questions[countQuest][3];
        document.getElementById('option4').innerHTML = questions[countQuest][4];

    }
    else {

        document.getElementById('area').style.display = 'none';
        alert('У Вас ' + plus + ' правильных ответа!');
    }
}
