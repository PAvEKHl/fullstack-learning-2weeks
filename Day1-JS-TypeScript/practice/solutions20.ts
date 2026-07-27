// Задание №1 let и const в TypeScript(TS)
const city: string = "Dwerf";// 1. Создаёшь const-переменную city с типом string
let populatiomn: number = 0; // 2. Создаёшь let-переменную population с типом number
populatiomn += 100;// 3. Увеличиваешь population на 100
// city = "sdf";  // 4. Пытаешься переназначить city (должна быть ошибка)
// ошибка т.к. в TS в отличае от JS нельзя переприсваивать типы данных, но тут дело в cons => константу переобьявлять нельзя


// Задание №2 Объекты в TypeScript(TS) 
// Создай объект book с типом:- title (string),author (string),pages (number, опционально)
// - метод getInfo(), который возвращает строку "title by author"
let book:{
  title: string,
  autor: string,
  pages: number,
  getInfo: () => string,
} = {
  title: "str", autor: "str", pages: 123, getInfo() { 
    return `${this.title} by ${this.autor}` //использовал {} т.к. в => не работает this
  }
}


// Урок 3: Массивы в TS
let array: number[] = [1,2,3,4,5] // 1. Создай массив чисел от 1 до 5
array.push(6); // 2. Добавь число 6 в конец
array.pop(); // 3. Удали последний элемент
console.log(array.length); // 4. Выведи длину массива

// Задание №4 map — создаёт новый массив, применяя функцию к КАЖДОМУ элементу исходного массива. Длина нового массива = длине старого.
// Дан массив товаров:
const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 300 }
];
let NameProduct: string[] = products.map(x => x.name);// 1. Создай массив названий товаров (только имена)
let rebateProducts: number[] = products.map(x => x.price * 0,8);// 2. Создай массив цен с 20% скидкой
let arrayElctrnccosts: string[] = products.map(x => x.name);// 3. Создай массив строк вида "Laptop costs 1000$"
console.log(arrayElctrnccosts)


// Задание №5 filter — создаёт новый массив только с теми элементами, для которых функция вернула true.
const scores = [85, 92, 78, 95, 88, 70, 60]; // Дан массив чисел (по условию)
let quetion_5_1: number[] = scores.filter(x => x>= 80);  // 1. Оставь только оценки >= 80
let quetion_5_2 = scores.filter(x => x > 70 && x <90);// 2. Оставь только оценки между 70 и 90 (включительно)
let quetion_5_3: number[] = scores.filter(x => x % 5 === 0); // 3. Оставь только оценки, которые делятся на 5


// Задание №6 find — возвращает ПЕРВЫЙ элемент, для которого функция вернула true. Если ничего не найдено — возвращает undefined.
// Дан массив заказов:
const orders = [ 
  { id: 101, product: 'Laptop', status: 'pending' },
  { id: 102, product: 'Phone', status: 'shipped' },
  { id: 103, product: 'Tablet', status: 'pending' },
  { id: 104, product: 'Monitor', status: 'delivered' }
];
let quetion_6_1: {id: number; product: string; status: string} | undefined = orders.find(x => x.id === 103);// 1. Найди заказ с id 103
console.log(quetion_6_1);
let quetion_6_2: {id: number; product: string; status: string} | undefined = orders.find(x => x.status === 'shipped');// 2. Найди первый заказ со статусом 'shipped'
console.log(quetion_6_2);
let quetion_6_3: {id:number; product: string; status: string} | undefined = orders.find(x => x.id == 101 && x.status == 'cancelled');// 3. Найди первый заказ со статусом 'cancelled' (будет undefined)


//Задание №7 reduce - превращает массив в одно единственное значение, применяя функцию-аккумулятор к каждому элементу.
// Дан массив транзакций:
const transactions = [
  { type: 'income', amount: 1000 },
  { type: 'expense', amount: 200 },
  { type: 'income', amount: 500 },
  { type: 'expense', amount: 300 },
  { type: 'expense', amount: 100 }
];
let quetion_7_1:number = transactions.reduce((acc, x) =>  x.type == 'income' ? acc + x.amount : acc, 0 );// 1. Посчитай общий доход (сумму всех income)
let queiton_7_2: number = transactions.reduce((acc, x ) => x.type === "expense" ? acc + x.amount : acc,0);// 2. Посчитай общий расход (сумму всех expense)
let queiton_7_3: number = transactions.reduce((acc,x) => x.type == "income" ? acc + x.amount: acc - x.amount ,0);// 3. Посчитай баланс (доход - расход)


//Задание №8 Деструктуризация 
// Дан объект:
const employee = {
  id: 101,
  personal: {
    firstName: 'John',
    lastName: 'Doe',
    contact: {
      email: 'john@example.com',
      phone: '123-456'
    }
  },
  department: 'Engineering',
  skills: ['JavaScript', 'TypeScript', 'React']
};
let {personal:{firstName:employeeFrstName,lastName: employeeLstName},department: employeeDptmnt} = employee;// 1. Извлеки firstName, lastName и department
console.log(employeeFrstName,employeeLstName,employeeDptmnt);
let {personal:{contact:{email:userEmail}}} = employee;// 2. Извлеки email в переменную userEmail
// дан массив
const colors2 = ['red', 'green', 'blue', 'yellow'];
let [,colorGreen] = colors2// 3. извечь в переменную colorGreen второй элемент массива
console.log(colorGreen);


//Задание № 9: Spread оператор (...)
// Дан массив:
const numbers3 = [1, 2, 3, 4, 5];
// Дан объект:
const defaultSettings = {
  theme: 'dark',
  language: 'en',
  notifications: true
};
let addSixSeven: number[] = [...numbers3,6,7];// 1. Создай копию numbers3 и добавь в конец числа 6, 7
let queiton_9_2 = [-1,0,...numbers3];//2. Создай копию numbers3 и добавь в начало числа -1, 0
let queiton_9_3: number[] = [Math.max(...numbers3)];// 3. Найди максимальное число в numbers3 используя Math.max и spread
let queiton_9_4 = {...defaultSettings,theme: 'light'};// 4. Создай newSettings с теми же свойствами, но theme: 'light'
let queiton_9_5 = {...defaultSettings,};// 5. Создай объект, объединяющий defaultSettings и { language: 'ru', timezone: 'UTC' }


//FINAL BOSS
const inventory = [
  { id: 1, name: 'Laptop', price: 1200, category: 'electronics', inStock: true },
  { id: 2, name: 'Phone', price: 800, category: 'electronics', inStock: false },
  { id: 3, name: 'Book', price: 25, category: 'books', inStock: true },
  { id: 4, name: 'Tablet', price: 400, category: 'electronics', inStock: true },
  { id: 5, name: 'Notebook', price: 5, category: 'office', inStock: false },
  { id: 6, name: 'Pen', price: 2, category: 'office', inStock: true }
];
let queiton_10_1 = inventory.filter(x => x.inStock == true);// 1. Используя filter, получи массив только доступных товаров (inStock: true) тут я мог оглядываясь назад не писать сравнение с баулевым типом для x.inStock
let queiton_10_2: string[] =  inventory.map(x => x.name);// 2. Используя map, создай массив названий всех товаров
//Непонимаю почему ошибка в строке ниже:
let queiton_10_3: (number[] | undefined) = inventory.find(x => x.price < 10);// 3. Используя find, найди первый товар с ценой меньше 10. 
let queiton_10_4 = inventory.reduce((cdd,x) => cdd + x.price,0);// 4. Используя reduce, посчитай общую стоимость всех товаров (цена * количество, но т.к. количество не указано, просто сумму цен)
let queiton_10_5: string[] = inventory.filter(x => x.inStock == true).map(y =>  y.name);// 5. Используя filter + map, создай массив названий доступных товаров,
// результат первой попытки был: nventory.map(x => (inventory.filter(y => y.inStock == true)) ? x.name: continue);  
let queiton_10_6: {electronocs:string[], books:string[],office:string} = inventory.reduce((cdd,x) => 
    x.category == 'electronics' ? cdd.electronocs:
    x.category == 'books' ?  cdd.books:
    x.category == 'office' ?  cdd.office: "незнаю что вставить  сюда, да и cdd. не"  ,"")// 6. Используя reduce, сгруппируй товары по категориям
//    (результат должен быть { electronics: [...], books: [...], office: [...] })

// 7. Используя деструктуризацию, извлеки первый товар  в переменные id, name, price, category
let [{id: id_1, name: name_1, price: price_1, category: category_1}] = inventory;// Не пон, почему ошибка(имена свойств {id, name, price, category} гарят красным)