


const simplify = document.querySelector(".simplifyCenter");


const getSimplifyText = async () => {
    const promise = await fetch ("https://baconipsum.com/api/?type=meat-and-filler");
    const array = await promise.json();
    const text = array.toString();
    return text;
};



window.addEventListener('load', async () => {

    const simplifyText = await getSimplifyText();

    simplify.innerHTML += `
    <p>${simplifyText}</p>
    `

});


addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu');
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items');
            btn_menu.classList.toggle('show');
            menu_items.classList.toggle('show');
        })
        
    }
});

const switchButton = document.getElementById('switch');
 
switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark'); //toggle the HTML body the class 'dark'
    switchButton.classList.toggle('active');//toggle the HTML button with the id='switch' with the class 'active'
});
    