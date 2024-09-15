const generate_password=document.getElementById("button");



generate_password.addEventListener("click",()=>{
    let pass_length=document.getElementById("pass-length");
    let length=parseInt(pass_length.value); 
    
    if(length<8 || length>50){
        alert("length out of mentioned range");
    }

    let upperIncludes=document.getElementById("upper").checked;
    let lowerIncludes=document.getElementById("lower").checked;
    let numberIncludes=document.getElementById("number").checked;
    let symbolIncludes=document.getElementById("symbol").checked;
    
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let allCharacter='';

    if(upperIncludes){
        allCharacter+=uppercase;
    }
    if(lowerIncludes){
        allCharacter+=lowercase;
    }
    if(numberIncludes){
        allCharacter+=numbers;
    }
    if(symbolIncludes){
        allCharacter+=symbols;
    }

    if(allCharacter===""){
        alert("All Check are Empty");
        return;
    }
    

    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacter.length);
        password += allCharacter[randomIndex];
    }

    const displayedInput=document.getElementById("display");
    displayedInput.value=password;


})

let copybutton=document.getElementsByClassName("copy");
let passwordTextArea=document.getElementsByClassName(".passwordTextArea")



// function copyPassword() {
//     passwordTextArea.select();
//     document.execCommand('copy');
// }
// copybutton.addEventListener("click",copyPassword);


