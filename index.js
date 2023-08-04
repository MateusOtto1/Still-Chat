let check = document.querySelector(".check");
let senha = document.querySelector(".nome-senha");
let inputSenha = document.querySelector(".input-senha");

check.addEventListener('click' , ()=>{
    if(check.checked){
       senha.style.display="block";
       inputSenha.style.display="inline-block";
    } else{
        senha.style.display="none";
        inputSenha.style.display="none";
    }
});