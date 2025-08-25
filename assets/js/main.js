/** Função de tipo fábrica */

function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', (evento) => {
                if (evento.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

         realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (isNaN(conta)) {
                  alert('Conta inválida');
                  return;
                }

                this.display.value = String(conta);
            } catch (e) {
                alert('Conta inválida');
                return;
            }

        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
            this.display.focus();
        },

        cliqueBotoes() {
            //this --> calculadora
            document.addEventListener('click', (evento) => {
                const elemento = evento.target;

                if(elemento.classList.contains('btn-num')) {
                    this.btnParaDisplay(elemento.innerText);
                }

                if(elemento.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(elemento.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(elemento.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
            this.display.focus();
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();