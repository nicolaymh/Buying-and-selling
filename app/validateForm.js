//Variables
const form = document.querySelector(`#form`);
const btnSend = document.querySelector(`#btnSend`);
const btnClear = document.querySelector(`#btnClear`);
const inputs = document.querySelectorAll(`#form input`);
const textArea = document.querySelector(`#message`);

//Objects
const validations = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,100}$/,
    city: /^[a-zA-ZÀ-ÿ\s]{3,30}$/,
	phone: /^\d{7,14}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    message: /^.{30,2000}$/s
}
const buttonStatus = {
    name: false,
    city: false,
    phone: false,
    email: false,
    message: false,    
}

//Functions
/* Enable and disable send button */
const enableBtn = () => {
    if(buttonStatus.name && buttonStatus.city && buttonStatus.phone && buttonStatus.email && buttonStatus.message){
        btnSend.disabled = false;
        btnSend.classList.remove(`btnState`);        
    }else{
        btnSend.disabled = true;
        btnSend.classList.add(`btnState`);        
    }
}
/* Validate form fields */
const validateFields = (reExp, input, paragraph) => {
    if(reExp.test((input.value).trim())){
        input.classList.remove(`border-danger`)
        input.classList.add(`border-3`);
        input.classList.add(`border-success`);                
        paragraph.classList.add("d-none");
        buttonStatus[input.id] = true;
    }else{
        input.classList.remove(`border-success`);
        input.classList.add(`border-3`)
        input.classList.add(`border-danger`);                
        paragraph.classList.remove("d-none");
        buttonStatus[input.id] = false        
    }
}
/* Initial status of send button */
const initialStatusSendButton = () => {
    btnSend.disabled = true;
    btnSend.classList.add(`btnState`);
    inputs.forEach( styles => {
        styles.classList.remove(`border-danger`, `border-success`, `border-3`);
    })
    document.querySelectorAll(`#form p`).forEach( paragraph => {
        paragraph.classList.add(`d-none`);
    })
    textArea.classList.remove(`border-danger`, `border-success`, `border-3`); 
}


//Main Function
const validateForm = e => {
    switch (e.target.id){
        case `name`:
            validateFields(validations.name, e.target, document.querySelector(`#pName`));
            enableBtn();
            break;
        case `city`:
            validateFields(validations.city, e.target, document.querySelector(`#pCity`));
            enableBtn();
            break;
        case `phone`:
            validateFields(validations.phone, e.target, document.querySelector(`#pPhone`));
            enableBtn();
            break;
        case `email`:
            validateFields(validations.email, e.target, document.querySelector(`#pEmail`));
            enableBtn();
            break;
        case `message`:
            validateFields(validations.message, e.target, document.querySelector(`#pMessage`));
            enableBtn();
            break;
    }
}


//Eventlisteners
const eventListeners = () => {
    document.addEventListener(`DOMContentLoaded`, initialStatusSendButton);

    inputs.forEach( input => {
        input.addEventListener(`keyup`, validateForm);
        input.addEventListener(`blur`, validateForm);                
    })    

    textArea.addEventListener(`keyup`, validateForm);
    textArea.addEventListener(`blur`, validateForm);

   btnClear.addEventListener(`click`, () => {
       form.reset();
       initialStatusSendButton()       
   })        
}
eventListeners();