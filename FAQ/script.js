let cards = document.getElementById("cards"); //pega elemento do html

for(let i = 0; i < perguntas.length; i++){
    cards.innerHTML +=                      //iinerHTML --> escreve no html!!
        `<details>
            <summary> ${perguntas[i].pergunta} </summary>
            <hr>
            <p> ${perguntas[i].resposta} </p>
        </details>`;                        //details cria a lista dropdown :p
}
