

const formulario = document.getElementById('form');



const handleClickSubmit= (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const message = document.getElementById('message').value;

    const validate = validateform();

    if(validate == 0) {
        // Mustra una ventana para que confirmemeos que queremos enviar
        alert("Message sent! We will answer you as soon as possible.");
        // imprime por consola
        console.log(name, email, tel, message);
    }
}

formulario.addEventListener("submit", handleClickSubmit);


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

const regexEmail = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

function validateform(){
      

    let error = 0;

    let name = document.myForm.name.value;  
    let trimmedName = name.trim();

    let phone = document.myForm.phone.value;

    let emailUnchecked = document.myForm.email.value;
    let email = emailUnchecked.trim().toLowerCase();

    let messageRaw = document.myForm.message.value;
    let message = messageRaw.trim().toLowerCase();




    if (trimmedName == null || trimmedName ==""){  
        alert("Name can't be blank");
        error++;  
    }else if (trimmedName.length < 3) {
        alert("Name sohuld have at least 3 characters");
        error++;  
    } 

    if (isNaN(phone)){
        alert('Only numbers allowed for Phone field.')
        error++;  
    }else if (phone.length < 9){
        alert('Your phone should have at least 9 numbers.')
        error++;  
    }

    if (email.length < 5){
        alert('Email must be more than 5 characters long');
        error++;  
    } else if (!email.match(regexEmail)) {
        alert("Please enter an email like: example@hello.io")
        error++;  
    }

    if (message.length < 40){
        alert("Message must be at least 40 characters long")
        error++; 
    }



    return error;
       
}  