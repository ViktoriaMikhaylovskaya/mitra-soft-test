export const getPosts = async () => { 
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
}

export const getComments = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    return await response.json();
}

// https://jsonplaceholder.typicode.com/posts?userId=3