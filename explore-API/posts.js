function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayPosts(data))
}

function displayPosts(data) {
    const postContainer = document.getElementById('posts-container');
    for (const post of data) {
        console.log(post);
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
    <h4> User - ${post.id} </h4>
    <h3> Title - ${post.name}</h3>
    `;
        postContainer.appendChild(postDiv);
    }
}

loadPosts();


// function deletePost() {
//     fetch('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'DELETE',
//     });
// }


// function patchAPost() {
//     fetch('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'PATCH',
//         body: JSON.stringify({
//             title: 'foo',
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((response) => response.json())
//         .then((json) => console.log(json));
// }


// function createAPost(){
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// }