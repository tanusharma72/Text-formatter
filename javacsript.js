//inputfield
const inputField=document.getElementById('input-field');


//output

const outputField=document.getElementById('output-field');

//button

const buttons=document.querySelectorAll('button');

inputField.addEventListener('keyup',()=>outputField.innerHTML=inputField.value);

buttons.forEach(btn=>{
    btn.addEventListener('click',()=>{
        //touppercase
        if(btn.classList.contains('uppercase')){
            outputField.innerHTML=outputField.innerHTML.toUpperCase()
        }
        //capitalize
        else if(btn.classList.contains('capitalize')){
            outputField.innerHTML=outputField.innerHTML.charAt(0).toUpperCase()+outputField.innerHTML.slice(1).toLowerCase();
        }
        //tolowercase
        else if(btn.classList.contains('lowercase')){
            outputField.innerHTML=outputField.innerHTML.toLowerCase()
        }
        //bold
        else if(btn.classList.contains('bold')){
            outputField.style.fontWeight='800';
        }
        //italic
        else if(btn.classList.contains('italic')){
            outputField.style.fontStyle='italic';
        }
        //underline
        else if(btn.classList.contains('underline')){
            outputField.style.textDecoration='underline';
        }
    })
})
