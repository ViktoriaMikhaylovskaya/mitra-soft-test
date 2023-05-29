const URL = 'https://jsonplaceholder.typicode.com/posts';

export const getCountPosts = async (searchValue) => {
    const response = await fetch(`${URL}${searchValue}`);
    return await response.json();
}

export const getPosts = async (queries) => {
    const response = await fetch(`${URL}${queries.page}${queries.searchValue}${queries.sort}`);
    return await response.json();
}

export const getComments = async (id) => {
    const response = await fetch(`${URL}/${id}/comments`);
    return await response.json();
}

export const getUserPosts = async (queries) => {
    const response = await fetch(`${URL}?userId=${queries.id}${queries.page}${queries.searchValue}${queries.sort}`);
    return await response.json();
}

export const getCountUserPosts = async (id) => {
    const response = await fetch(`${URL}?userId=${id}`);
    return await response.json();
}