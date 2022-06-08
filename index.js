/*В index.html
1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход 
на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули*/

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
                `<h4>UserId: ${i.id}</h4>
                <h2>Name: ${i.name}</h2>`
            
            
            let link = document.createElement('a');
            link.setAttribute('class','link');
            link.setAttribute('href','user-details.html')
            link.innerText = ('Details');

            globalDiv.append(divForEveryUser,link)
        }
    })


    

