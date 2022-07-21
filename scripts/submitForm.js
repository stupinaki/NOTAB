const button = document.querySelector('.form-get-in-touch__button');   
const form = document.querySelector('.get-in-touch__form');  
const formInputs = document.querySelectorAll('._input');
const inputsArray = Array.from(formInputs);

function onButtonClick(e) {
    const isNotFild = inputsArray.some(input => input.value === '');
    if(isNotFild){
        console.log('не все поля заполнены')
        e.preventDefault();
    }

    for(let i = 0; i < inputsArray.length; i++){
        const input = inputsArray[i];

        if(input.value === ''){
            input.classList.add('_empty-input');
        }
    }
}

function onBlur(e) {
    for(let i = 0; i < inputsArray.length; i++){
        const input = inputsArray[i];

        if(input.value !== ''){
            input.classList.remove('_empty-input');
        }
    }
}

button.addEventListener('click', onButtonClick);    
form.addEventListener('blur', onBlur, true);

