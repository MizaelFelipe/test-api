function fetchApiData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((Response) => Response.json())
    .then(data =>{
        const list = document.querySelector('#fill_list');

        data.map((item) => {
            const li = document.createElement('li');

            li.setAttribute('id' , item.id);
            li.innerHTML = item.title;
            list.appendChild(li)
        })
    } ); 

}

function fetchApiDataa() {
    fetch(' https://jsonplaceholder.typicode.com/users')
    .then((Response) => Response.json())
    .then(data =>{
        const list = document.querySelector('#fill_list');

        data.map((item) => {
            const li = document.createElement('li');

            li.setAttribute('id' , item.name);
            li.innerHTML = item.name;
            list.appendChild(li)
        })
    } ); 

}

function fetchApiDataaa() {
    fetch(' https://jsonplaceholder.typicode.com/posts ')
    .then((Response) => Response.json())
    .then(data =>{
        const list = document.querySelector('#fill_list');

        data.map((item) => {
            const li = document.createElement('li');

            li.setAttribute('id' , item.body);
            li.innerHTML = item.body;
            list.appendChild(li)
        })
    } ); 

}