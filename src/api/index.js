const URL = 'https://jsonplaceholder.typicode.com/posts';

export const getCountPosts = async (searchValue) => {
    try {
        const response = await fetch(`${URL}${searchValue}`);
        return await response.json();
    } catch (error) {
        alert("Кажется что-то пошло не так( Попробуйте позже.");
        throw new Error(error)
    }
}

export const getPosts = async (queries) => {
    try {
        const response = await fetch(`${URL}${queries.page}${queries.searchValue}${queries.sort}`);
        return await response.json();
    } catch (error) {
        alert("Кажется что-то пошло не так( Попробуйте позже.");
        throw new Error(error)
    }
}

export const getComments = async (id) => {
    try {
        const response = await fetch(`${URL}/${id}/comments`);
        return await response.json(); 
    } catch (error) {
        alert("Кажется что-то пошло не так( Попробуйте позже.");
        throw new Error(error)
    }
}

export const getUserPosts = async (queries) => {
    try {
        const response = await fetch(`${URL}?userId=${queries.id}${queries.page}${queries.searchValue}${queries.sort}`);
        return await response.json();
    } catch (error) {
        alert("Кажется что-то пошло не так( Попробуйте позже.");
        throw new Error(error)
    }
}

export const getCountUserPosts = async (id) => {
    try {
        const response = await fetch(`${URL}?userId=${id}`);
        return await response.json();   
    } catch (error) {
       alert("Кажется что-то пошло не так( Попробуйте позже.");
        throw new Error(error) 
    }
}