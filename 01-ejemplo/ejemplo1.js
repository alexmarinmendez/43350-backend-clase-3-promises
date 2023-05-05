const posts = [
    { title: 'Post 1', body: 'This is the post 1' },
    { title: 'Post 2', body: 'This is the post 2' },
]

function getPosts() {
    setTimeout(() => {
        let output = '<ul>'
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        })
        output += '</ul>'
        document.body.innerHTML = output
    }, 2000);
}

function createPost(post) {
    setTimeout(() => {
        posts.push(post)
    }, 3000)
}

createPost({ title: 'Post 3', body: 'This is the post 3'})
getPosts()
