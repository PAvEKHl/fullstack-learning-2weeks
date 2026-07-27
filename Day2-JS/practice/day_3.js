/*1.Получить массив постов(отдельная функция)
2.Написать функцию которая отфильтрует посты по заданным в нее массиву Id
3.получить комменты к постам
4.Написать функцию которая создекнит посты полученные из 2 функции с комментами из 3 */


//1.Получить массив постов(отдельная функция)
async function GegPosts () {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts');//Получить массив постов(отдельная функция) 
    let allPosts = await res.json();
    console.log(allPosts); 
};
GegPosts(); // неработало т.к. мы не вызвали функцию


//2. Написать функцию которая отфильтрует посты по заданным в нее массиву Id
async function FilterById (AllowedIDs) {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts'); 
    let allPosts = await res.json();
    let SortById =  await allPosts
    .map(e => AllowedIDs.includes(e.id) ? e : false)
    .filter(e => e != false);
    console.log(SortById)
}
let AllowedID = [1,3,5,7] //массив с ID
FilterById(AllowedID)


//3. получить комменты к постам
let  commentsToPost
async function GegComments() {
    try{
    let res = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
        
    let allPosts = await res.json();
    commentsToPost =await  allPosts;
    // console.log(allPosts); 
    }
    catch(error) {console.log(error)}
}
GegComments(); 
GegComments().then(() => console.log(commentsToPost));
// console.log(commentsToPost) несработает т.к.работает синхронно, воспользовался .then


// 4. Написать функцию которая создекнит(соединит) посты полученные из 2-ой функции с комментами из 3-ей */
// 2-ая функция: function FilterById()
// 3-яя функция: function GegComments()
async function combiningData (parameter) {
    let post = await FilterById(parameter) //фильтрует посты по заданным в нее массиву Id
    let comments = await GegComments() // получает комменты к постам
    // let joinFunc = await func_1.map(e => func_2.id(e.id) ? {...e, func_2}: undefined);
    let aa = post.
    map( post => {
        let matchedId = comments.filter(comment => post.id == comment.id); //коменты в котор id одинаковый с постами
        return {...post, comments: matchedId}
    });
}
let AllowedID = [1,3,5,7] //массив с ID
combiningData(AllowedID)
combiningData(AllowedID).then(() => console.log(combining));


//КОД ДАБАВЛЕНИЯ НОВОГО ОБЬЕКТА на сервер в массив обьектов(свойста: title,bode,userId)
async function GegComments() {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {'Content-type': 'application/json; charset-UTF-8'
        }
    });
    let allPosts = await res.json();
    console.log(allPosts); 
}
GegComments()