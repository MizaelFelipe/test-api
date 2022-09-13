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