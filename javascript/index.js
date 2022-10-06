const columna1 = document.querySelector(".columna1");
const columna2 = document.querySelector(".columna2");
const columna3 = document.querySelector(".columna3");

const getTitle1 = async () => {
    const promise = await fetch ("https://jsonplaceholder.typicode.com/posts/2");
    const post = await promise.json();
    const title = post.title;
    const upperTitle = title[0].toUpperCase() + title.substring(1);
    return upperTitle;
};

const getDescription1 = async () => {
    const promise = await fetch ("https://jsonplaceholder.typicode.com/posts/2");
    const post = await promise.json();
    const description = post.body;
    const upperDescription = description[0].toUpperCase() + description.substring(1);
    return upperDescription;
};

const getTitle2 = async () => {
    const promise = await fetch ("https://jsonplaceholder.typicode.com/posts/4");
    const post = await promise.json();
    const title = post.title;
    const upperTitle = title[0].toUpperCase() + title.substring(1);
    return upperTitle;
};

const getDescription2 = async () => {
    const promise = await fetch ("https://jsonplaceholder.typicode.com/posts/4");
    const post = await promise.json();
    const description = post.body;
    const upperDescription = description[0].toUpperCase() + description.substring(1);
    return upperDescription;
};

const getTitle3 = async () => {
    const promise = await fetch ("https://jsonplaceholder.typicode.com/posts/5");
    const post = await promise.json();
    const title = post.title;
    const upperTitle = title[0].toUpperCase() + title.substring(1);
    return upperTitle;
};

const getDescription3 = async () => {
    const promise = await fetch ("https://jsonplaceholder.typicode.com/posts/5");
    const post = await promise.json();
    const description = post.body;
    const upperDescription = description[0].toUpperCase() + description.substring(1);
    return upperDescription;
};




window.addEventListener('load', async () => {
    const title1 = await getTitle1();
    const description1 = await getDescription1();

    columna1.innerHTML += `
    <img src="./project-assets/projects-section/1.jpg" alt="">
    <h4>${title1}</h4>
    <p>${description1}</p>
    <a href="">Learn more</a>
    `

    const title2 = await getTitle2();
    const description2 = await getDescription2();

    columna2.innerHTML += `
    <img src="./project-assets/projects-section/2.jpg" alt="">
    <h4>${title2}</h4>
    <p>${description2}</p>
    <a href="">Learn more</a>
    `

    const title3 = await getTitle3();
    const description3 = await getDescription3();

    columna3.innerHTML += `
    <img src="./project-assets/projects-section/3.jpg" alt="">
    <h4>${title3}</h4>
    <p>${description3}</p>
    <a href="">Learn more</a>
    `

});


addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu');
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items');
            menu_items.classList.toggle('show');
        })
        
    }
})