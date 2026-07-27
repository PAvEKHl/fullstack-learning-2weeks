// Задание 1.1: Hello, Сервер!
// Напиши простую async-функцию, которая:
// 1. Отправляет GET-запрос на 'https://jsonplaceholder.typicode.com/users'
// 2. Выводит в консоль "Ответ получен!"
// 3. Используй try/catch для ошибок
async function function_numbr1() {
    try{
        let respons = await('https://jsonplaceholder.typicode.com/users');
        console.log("Ответ получен!");
    }
    catch(error) {  //не понял как это, у меня не хватает знаний чтобы понять что я пишу, только запомнить бездумно могу
        console.error(error);
    }
}

// Задание 0.1: Привет через 2 секунды
// Напиши код, который:
// 1. Выводит "Начинаем!"
// 2. Через 2 секунды выводит "Привет через 2 секунды!"
// 3. Выводит "Заканчиваем!" (сразу)
// Используй setTimeout
console.log("Начинаем"); 
setTimeout(() => console.log("Привет"), 2000); // указал время через запятую т.к посчитал что через {}, бессмысле в данном случае т.к. одна строка
console.log("Заканчиваем");

// Задание 0.2: Три задержки
// Напиши код, который:
// 1. Выводит "Через 1 секунду" через 1 секунду
// 2. Выводит "Через 3 секунды" через 3 секунды
// 3. Выводит "Сразу!" сразу
// Подсказка: три setTimeout с разным временем
 
setTimeout(() => console.log("Через 1 сек."), 1000);
setTimeout(() => console.log("Через 3 сек."), 3000);
console.log("Сразу"); 

function greetWithDelay(name, delay) {
    setTimeout(() => console.log(`Привет ${name}`),delay);
 }
greetWithDelay("Алекс", 2000);
// Через 2 секунды выведет: "Привет, Алекс!"

greetWithDelay("Мария", 1000);
// Через 1 секунду выведет: "Привет, Мария!"

//Задание:Создай Promise с именем myFirstPromise. Внутри функции-исполнителя напиши 
// такую логику: объяви переменную score со значением 85. Если score больше или равно 70 — вызови resolve() 
// с текстом "Ты прошёл тест!". Иначе вызови reject() с текстом "Тест провален". (Не используй .then() или обработку 
// ошибок — просто создай Promise).

let myFirstPromise =  new Promise((resolve,reject) => {
    let score = 85;
    if(score >= 70) {
        resolve("Ты прошёл тест");
    }
    else reject("Тест правален");
});
myFirstPromise.then((data_whith_promise) => console.log(data_whith_promise)).catch(
    function(error_workElse){
        return console.log(error_workElse);
    });


//Напиши запрос на fetch() к этому URL: 'https://jsonplaceholder.typicode.com/users/1'. 
// Используй .then() для преобразования ответа в JSON и выведи полученные данные в консоль. 
// Добавь .catch() для обработки ошибок
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((acceptRespons) => acceptRespons.json()) //я только не понямаю что .then он меняет fetch и Promis при использовании
    .then((data) => console.log(data))
    .catch((error) => console.log(`Ошибка в ${error}`)); // тоже меняет,или только выдавать ошибку умеет?



//Создай async функцию с именем getUserData. Внутри:
//Используй await для fetch() по URL: 'https://jsonplaceholder.typicode.com/users/2'
//Используй await для response.json()
//Выведи полученные данные в консоль
//Вызови эту функцию
async function getUserData() {
    let data_Ask = await fetch('https://jsonplaceholder.typicode.com/users/2');
    let data_ConvetrJson = await data_Ask.json();
    console.log(`Данные из  файла: ${data_ConvetrJson}`);
}

//Добавь в свою функцию getUserData() обработку ошибок через try/catch. 
// В блоке catch выводи сообщение: "Не удалось загрузить данные: [текст ошибки]".
//  Проверь работу, изменив URL на несуществующий.
async function getUserData(){
    try{
    let data_Ask = await fetch('https://jsonplaceholder.typicode.com/users/2');
    let data_ConvetrJson = await data_Ask.json();
    console.log(`Данные из  файла: ${data_ConvetrJson}`);
    } catch(error) {
        console.log(`Ваша ошибка: ${error}`)
    }
};

/*
Задание:
Создай функцию getMultipleUsers(), которая:
Создаёт массив из трёх fetch() запросов к:
'https://jsonplaceholder.typicode.com/users/1'
'https://jsonplaceholder.typicode.com/users/2'
'https://jsonplaceholder.typicode.com/users/3'
Использует Promise.all() для одновременного выполнения
Выводит в консоль массив с данными всех пользователей
Добавь обработку ошибок через try/catch */
async function getMultipleUsers() {
    try{
    let arrayPromis =  [
        fetch('https://jsonplaceholder.typicode.com/users/1'),
        fetch('https://jsonplaceholder.typicode.com/users/2'),
        fetch('https://jsonplaceholder.typicode.com/users/3'),
    ];
    let WriteAllPromis = await Promise.all(arrayPromis); //я  так и не разобрался поч просто не рабоатет: Promise.all(arrayPromis) или рабтает?
    console.log(WriteAllPromis);
    } catch(error) {
        console.log(`Ошибка - ${error}`);
    }
};

//Final boss
//1. Загружает данные о пользователях с API: 'https://jsonplaceholder.typicode.com/users' (всех пользователей)
//2. Выводит имена всех пользователей в консоль
//3. Добавляет нового пользователя через fetch() с методом POST: Я ЭТО СПИСАЛ Т.К. Сам не могу ещё
//4. Обрабатывает ошибки через try/catch
//5. Использует async/await (без .then()
// Подсказка: Весь код должен быть в одной async функции. Используй Promise.all() если нужно загрузить что-то параллельно.
async function FinalBoss() { //5. Использует async/await (без .then()
    try{ //4. Обрабатывает ошибки через try/catch
    let AllDtaUser = await fetch('https://jsonplaceholder.typicode.com/users', {//1. Загружает данные о пользователях с API: 'https://jsonplaceholder.typicode.com/users' (всех пользователей)
         //3. Добавляет нового пользователя через fetch() с методом POST: Я ЭТО СПИСАЛ Т.К. Сам не могу ещё, не понял что за: ,{свойства каиекто} в скобках () в fatch
       method: 'POST',
        body: JSON.stringify({ //не знаю что за  JSON.stringify
            name: 'Твоё имя', // это свойства обьекта body?
            email: 'tvoi@email.com'
    }),
    headers: { // это вообще обязательно, или можно было только methid: 'Post' написать?
        'Content-Type': 'application/json'
    }
    });
    let WriteAllName =  await Promise.all(AllDtaUser.body.name);
    console.log(`Имена всех пользоватлей: ${WriteAllName}`); //2. Выводит имена всех пользователей в консоль
    } catch(error) { //4. Обрабатывает ошибки через try/catch
        console.log(`Ошибки: ${error}`);
    }
}




fetch('https://jsonplaceholder.typicode.com/users', { //3. Добавляет нового пользователя через fetch() с методом POST: Я ЭТО СПИСАЛ Т.К. Сам не могу ещё, не понял что за: ,{свойства каиекто} в скобках () в fatch
    method: 'POST',  //что за метод, который как свойство сторового типа?
    body: JSON.stringify({ //не знаю что за  JSON.stringify
        name: 'Твоё имя', // это свойства обьекта body?
        email: 'tvoi@email.com'
    }),
    headers: { // это вообще обязательно, или можно было только methid: 'Post' написать?
        'Content-Type': 'application/json'
    }
});

//Задание:
//Создай функцию getUsers(), которая:
//Делает GET-запрос к 'https://jsonplaceholder.typicode.com/users'
//Преобразует ответ в JSON
//Выводит в консоль всех пользователей
async function getuser(){
    let writeAll = fetch('https://jsonplaceholder.typicode.com/users', {
        motodNN: 'GET',
        body: JSON.stringify({
            name: 'Твой имя)'
      }),
        headers: {'tipe': 'application/json'}
    });
    let ReadAll = writeAll.map(e => e.name);
    let ReadName = ReadAll.json();
    console.log(ReadName);
}


/*Задание:
Создай функцию getPosts(), которая:
1.Делает GET-запрос 'https://jsonplaceholder.typicode.com/posts'
2.Превращает ответ в JSON
3.Выводит в консоль все посты
4.Выводит в консоль только заголовки постов (поле title) */
async function getPost() {
    let  AllData = await fetch('https://jsonplaceholder.typicode.com/posts'); // по умолчанию стоит GET
    let AllData_JSON = await AllData.json();
    console.log(AllData_JSON); // 3.Выводит в консоль все посты
    let name_FromData = AllData_JSON.map(e => e.title); 
    console.log(name_FromData);//4.Выводит в консоль только заголовки постов (поле title)
}


/*Задание:
Создай функцию addPost(), которая:
1.Создаёт объект newPost с полями: title, body, userId
2.Делает POST-запрос к 'https://jsonplaceholder.typicode.com/posts'
3.Использует настройки: method: 'POST', body с JSON.stringify(), headers
4.Выводит ответ сервера в консоль */
async function addPost() { //1.Создаёт объект newPost с полями: title, body, userId
    let newPost = {
        title: "Описание/Заголовок",
        body: "какие-то данные", //хз какой тип, указал строковый
        userId: 1,  
    }
    let response  = await fetch('https://jsonplaceholder.typicode.com/posts', { //2.Делает POST-запрос к 'https://jsonplaceholder.typicode.com/posts'
        method: 'POST', ///3.Использует настройки: method: 'POST', body с JSON.stringify(), headers
        body: JSON.stringify(newPost),
        headers: {
            'Content-Type': 'application/json'
        }  //подстматрел какие скобки и путь(Content-Type'), а то невыучил доконца
    });
    let ReadAllData = await response.json();  //так и не пон зачем это строка, но она нужна) т.к. работаем с JSON
    console.log(`Ответ сервера:`, ReadAllData); // исаользовал запятную т.к. обьект бы выводился object: object
}

/*ЗАДАНИЕ: DELETE-запрос (по аналогии с примером)
Создай функцию deletePost(), которая:
1. Делает DELETE-запрос к 'https://jsonplaceholder.typicode.com/posts/1' (удаляем пост с ID=1)
2. Использует method: 'DELETE'
3. Проверяет response.ok и выводит сообщение об успехе или ошибке */
async function deletePost() {
    let response_answer = await fetch('https://jsonplaceholder.typicode.com/posts/1', {  //1. Делает DELETE-запрос к 'https://jsonplaceholder.typicode.com/posts/1' (удаляем пост с ID=1)
        method: 'DELETE' // тут только метод нужен, а GET вообще по умолчаннию 
        //не пон как удать канкретные данные 
    });
    if(response_answer.ok){ //3. Проверяет response.ok и выводит сообщение об успехе или ошибке */
        //как я понимаю, то .ok это  булевый метод, заменяющий .then и .cath, работает только с методом GET
        console.log("Успех,что-то было удалено");
    }
    else console.log('Ошибка/неудача)');
}

