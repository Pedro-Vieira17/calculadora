document.addEventListener("DOMContentLoaded", () => {
    let display = document.getElementById("display");
    let valorAtual = "";

    let botoes = document.querySelectorAll("button");

    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            let valor = botao.innerText;
            tratarClique(valor);
        });
    });

    function tratarClique(valor) {

        if (valor === "=") {
            calcular();
        } else if (valor === "AC") {
            limpartudo();
        } else if (valor === "C") {
            apagarUltimo();
        } else {
            valorAtual += valor;
          display.textContent = valorAtual;
        }
    }

    function calcular() {
        try {
            valorAtual = eval(valorAtual);
            display.innerText = valorAtual;
        } catch {
            display.innerText = "Erro";
            valorAtual = "";
        }
    }

    function limpartudo() {
        valorAtual = "";
        display.innerText = "";
    }

    function apagarUltimo() {
        valorAtual = valorAtual.slice(0, -1);
        display.innerText = valorAtual;
    }
});