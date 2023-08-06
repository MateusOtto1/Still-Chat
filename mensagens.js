let input = document.querySelector(".input-chat");

input.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter'){
        e.preventDefault();
        let msg = input.value;
        let container = document.querySelector(".container-mensagens");
        const paragrafo = document.createElement("p");
        paragrafo.classList.add("mensagem");
        paragrafo.textContent = "Você: " + msg;
        container.appendChild(paragrafo);
        input.value = "";
    }
});