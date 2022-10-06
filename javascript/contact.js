

const subm = document.getElementById('subm');


const handleClickSubmit= () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const message = document.getElementById('message').value;
    // Mustra una ventana para que confirmemeos que queremos enviar
    const canSend = confirm("confirm");
    // Si el usuario ha cancelado devolvera un false y detenemos la funcion con el return
    if (!canSend) return;
    // imprime por consola
    console.log(name, email, tel, message);
}

subm.addEventListener("click", handleClickSubmit);