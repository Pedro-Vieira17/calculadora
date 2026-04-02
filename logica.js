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
        }
        else if (valor === "AC") {
            limpartudo();
        }
        else if (valor === "C") {
            apagarUltimo();
        }
        else {

            let ultimo = valorAtual.slice(-1);
            let operadores = ["+", "-", "*", "/"];

            if (operadores.includes(valor) && operadores.includes(ultimo)) {
                return;
            }

            valorAtual += valor;
            display.textContent = valorAtual;
        }
    }

    function calcular() {
        try {
            if (valorAtual === "") return;

            let resultado = eval(valorAtual);
            display.textContent = resultado;
            valorAtual = resultado.toString();
        } catch {
            display.textContent = "Erro";
            valorAtual = "";
        }
    }

    function limpartudo() {
        valorAtual = "";
        display.textContent = "";
    }

    function apagarUltimo() {
        valorAtual = valorAtual.slice(0, -1);
        display.textContent = valorAtual;
    }
});