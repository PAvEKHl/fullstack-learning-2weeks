const users=[{id:1,name:'Alex'},{id:2,name:'Kate'}]; 

//Задание №1 полученеи массива имён:
let arrayName: string[] = users.map(x => x.name); // это прямо как в исходнике.
let arrayName_2 = users.filter(x => x.id >= 0 || x.id < 0);
console.log(`$адеватный способ${arrayName} \n \n и так тоже можно(но не стоит): ${arrayName_2}`);

//Задание 2. Отфильтровать пользователей по id>1.
let arrayUsers = users.filter(x => x.id > 1);
console.log(arrayUsers);

// 3.	Добавить поле fullName.
let n_3: {MyName:string} = { //Исходный обьект
    MyName: "Pasha"
}
n_3.fullName = "Pavel Khliabko"; //работает только для обьектов(не работает для let и const)
console.log(n_3);