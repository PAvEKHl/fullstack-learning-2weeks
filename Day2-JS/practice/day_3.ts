/*1.Получить массив постов(отдельная функция)
2.Написать функцию которая отфильтрует посты по заданным в нее массиву Id
3.получить комменты к постам
4.Написать функцию которая соединяет посты полученные из 2 функции с комментами из 3 */


//1.Получить массив постов(отдельная функция)

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
    comments?: Comment[];
} 

type Comment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

//getPosts
async function getPosts(): Promise<Post[] | []>  {
    try {
        return (await fetch('https://jsonplaceholder.typicode.com/posts'))?.json();//Получить массив постов(отдельная функция) 
    } catch (error) {
        console.log(error)
        return [];
    }

};

//2. Написать функцию которая отфильтрует посты по заданным в нее массиву Id
async function getAllowedPosts(allowedIds: number[], posts: Post[]): Promise<Post[]> {
    return posts.filter((post) => allowedIds.includes(post.id));
}

//3. получить комменты к постам

async function getComments(postId: number) { //camelCase 
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        const comments = res.json();
        return comments;
    }
    catch (error) {
        console.log(error)
    }
}

async function mergePostsWithComments(posts: Post[]): Promise<Post[]> {
    const postsWithComments: Post[] = [];

    for (const post of posts) {
        const comments = await getComments(post.id);
        postsWithComments.push({ ...post, comments });
    }

    return postsWithComments;
}

async function main() {
    const posts = await getPosts();
    const allowedIds = [1, 3, 5, 7];
    const allowedPosts = await getAllowedPosts(allowedIds, posts);
    const postsWithComments = await mergePostsWithComments(allowedPosts);
    console.log(postsWithComments);
}

main()