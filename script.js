const posts = [
    // template for a post object
    // {
    //     title: "the title goes here",
    //     date: "the date goes here",
    //     content: "the content goes here",
    //     image: "the image url goes here, this field is optional"
    // }

    {
        title: "the title goes here",
        date: "the date goes here",
        content: "the content goes here",
    }
];

const postsContainer = document.getElementById('posts');

posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    postElement.innerHTML = `
        <h3>${post.title}</h3>
        <small>${post.date}</small>
        ${post.image ? `<img src="${post.image}" alt="${post.title} image" class="post-image">` : ''}
        <p>${post.content}</p>
    `;

    postsContainer.appendChild(postElement);
});