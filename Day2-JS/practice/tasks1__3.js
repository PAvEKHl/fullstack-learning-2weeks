// Практика: получить пользователей, загрузить посты, объединить данные по userId.
const res=await fetch('https://jsonplaceholder.typicode.com/users'); 
const data=await res.json();


// 1.получить пользователей
async function getUser() {
    const res=await fetch('https://jsonplaceholder.typicode.com/users',{});  // в настройках по умолчанию стоит метод GET, 
    // как раз мне получить ответ с сервера и надо.
    const data=await res.json(); //Любой метод возвращает строку, поэтому вручную преобразуем в формат json
    console.log("все пользователи:", data) //выывод в консоль через запятую, т.к. формат данных разный
};


// 2. Загрузить посты
async function downloadPost(){
    try{ 
        let posts = [
            {nmbr_page: 1, name: "Post#1", all_paged: 123 },
            {nmbr_page: 2, name: "Post#2", all_paged: 321 },
        ]
        const res = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            bady: JSON.stringify(posts),
            headers: {'Content-Tipe': 'application/json'}, //тут подсматрел путь(из файла Additionally.js), помню тольк что ( /json)
        }); 
        const data = await res.json();
        if(data.ok) {
            console.log("Посты загужены");
            console.log("Все посты:", data);
        }
        else { 
            console.log("Какаято ошибка)");
        }
    }
    catch(error){
        console.log(`Ошибка: ${error}`);
    }
}

// 3. объединить данные по userId. 
// Буду по свойству .userID обьединять через map
async function CombineData () {
    const res = await fetch('https://jsonplaceholder.typicode.com/users'); 
    const data = await res.json();
    let combine_UserId = data.map(e => e.userId);
    console.log("Обьединённые данные:", combine_UserId);
}

