/*На странице user-details.html:
4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был 
совершен клик ранее.
5 Добавить кнопку "post of current user", при клике на которую, 
появляются title всех постов текущего юзера
(для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит 
переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.*/

fetch (`https://jsonplaceholder.typicode.com/users`) 
    .then (users => users.json())
    .then (users => {
        let globalDiv = document.createElement('div');
        globalDiv.setAttribute('class','gDiv');
        document.body.appendChild(globalDiv);

        for (let i of users) {
            let divForEveryUser = document.createElement('div');
            divForEveryUser.setAttribute('class', 'everyUserDiv');
            divForEveryUser.innerHTML = 
                `<h1>UserId: ${i.id}</h1>
                <h4>Name: ${i.name}</h4>
                <h4>UserName: ${i.username}</h4>
                <h4>Email: ${i.email}</h4>
                <h4>Address: ${JSON.stringify(i.address)}</h4>
                <h4>Phone: ${i.phone}</h4>
                <h4>Website: ${i.website}</h4>
                <h4>Company: ${JSON.stringify(i.company)}</h4>
                `
            let titleOfPost = document.createElement('button');
            titleOfPost.innerText = ('Post of current user');
            titleOfPost.onclick = (ec) => {
                fetch (`https://jsonplaceholder.typicode.com/users/${i.id}/posts`) 
                    .then (title => title.json())
                    .then (title => {
                        for (let t of title) {
                            let titleOfEveryPost = document.createElement('div');
                            titleOfEveryPost.setAttribute('class', 'title');
                            titleOfEveryPost.innerHTML = `<h4>Title: ${t.title}</h4>`

                            let post = document.createElement('a');
                            post.setAttribute('class','post');
                            post.setAttribute('href','post-details.html');
                            post.innerText = ('Go to the post');

                            divForEveryUser.append(titleOfEveryPost,post)
                        }
                    })
            }

            globalDiv.append(divForEveryUser,titleOfPost)
        }
    })

