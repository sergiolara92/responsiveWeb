


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
    