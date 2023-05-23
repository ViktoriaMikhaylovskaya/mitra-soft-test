const URL = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = async () => { 
    const response = await fetch(URL);
    return await response.json();
}

export const getComments = async (id) => {
    const response = await fetch(`${URL}/${id}/comments`);
    return await response.json();
}

export const getUserPosts = async (id) => {
    const response = await fetch(`${URL}?userId=${id}`);
    return await response.json();
}