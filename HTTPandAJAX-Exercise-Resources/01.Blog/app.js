function attachEvents() {
    
    const baseURL = 'http://localhost:3030/jsonstore/blog/'
    const loadPostsButton = document.getElementById('btnLoadPosts');
    const viewButton = document.getElementById('btnViewPost');
    const postsSelect = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-coments');

    let allPosts = {};


    loadPostsButton.addEventListener('click', async () => {

        postsSelect.innerHTML = '';

        const response = await fetch(baseURL + 'posts')
        allPosts = await response.json();

        for (const [postId, postObj] of Object.entries(allPosts)) {
            const option = document.createElement('option');

            option.value = postId;
            option.textContent = postObj.title;
            postsSelect.appendChild(option);
        }
        

    }) 




}

attachEvents();