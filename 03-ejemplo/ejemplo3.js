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
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false 
            if (!error) {
                resolve(posts.push(post))
            } else {
                reject('Error! Something went wrong!')
            }
        }, 3000);
    })
}

createPost({ title: 'Post 3', body: 'This is the post 3'})
    .then(getPosts)
    .catch(err => console.log(err))

// try {
//     await createPost({ title: 'Post 3', body: 'This is the post 3'})
//     getPosts()
// } catch (err) {
//     console.log(err)
// }
