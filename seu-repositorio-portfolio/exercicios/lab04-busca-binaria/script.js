document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Estado da Aplicação ---
    // Começamos com um array de exemplo
    let dados = [29, 10, 15, 2, 22, 30, 21, 1];
    // Flag de controle essencial para a pesquisa binária
    let isSorted = false;

    // --- 2. Selecionando Elementos do DOM ---
    const valorPushInput = document.getElementById('valorPush');
    const btnPush = document.getElementById('btnPush');
    
    const valorPesquisaInput = document.getElementById('valorPesquisa');
    const btnPesquisar = document.getElementById('btnPesquisar');
    const btnPesquisarBinaria = document.getElementById('btnPesquisarBinaria');
    
    const btnSort = document.getElementById('btnSort');
    
    const arrayDisplay = document.getElementById('arrayDisplay');
    const resultadoDisplay = document.getElementById('resultadoDisplay');

    // --- 3. Funções Auxiliares ---

    /**
     * Renderiza o array 'dados' na tela.
     */
    function renderizarArray() {
        arrayDisplay.innerHTML = ''; // Limpa a tela
        dados.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'array-item';
            itemElement.textContent = item;
            arrayDisplay.appendChild(itemElement);
        });
    }

    /**
     * Limpa a mensagem de resultado.
     */
    function limparResultado() {
        resultadoDisplay.textContent = '-';
        resultadoDisplay.style.color = '#e74c3c'; // Reseta para cor padrão (vermelho)
    }

    /**
     * Pega um valor numérico de um campo de input.
     * Retorna o número ou 'null' se for inválido.
     */
    function getValor(inputId) {
        const input = document.getElementById(inputId);
        const valor = parseInt(input.value, 10);
        
        if (isNaN(valor)) {
            alert('Por favor, digite um número válido.');
            return null;
        }
        input.value = ''; // Limpa o input
        return valor;
    }

    // --- 4. Event Listeners (Ouvintes de Evento) ---

    // PUSH: Adiciona um item ao array
    btnPush.addEventListener('click', () => {
        const valor = getValor('valorPush');
        if (valor !== null) {
            dados.push(valor);
            isSorted = false; // Adicionar um item quebra a ordenação!
            renderizarArray();
            limparResultado();
        }
    });

    // SORT: Ordena o array
    btnSort.addEventListener('click', () => {
        dados.sort((a, b) => a - b); // Ordenação numérica
        isSorted = true; // Marca o array como ordenado
        renderizarArray();
        resultadoDisplay.textContent = 'Array ordenado com sucesso!';
        resultadoDisplay.style.color = '#2ecc71'; // Verde
    });

    // PESQUISA SEQUENCIAL (Linear Search)
    btnPesquisar.addEventListener('click', () => {
        const valor = getValor('valorPesquisa');
        if (valor === null) return;

        let comparacoes = 0;
        let encontrado = false;

        for (let i = 0; i < dados.length; i++) {
            comparacoes++; // Conta cada verificação
            if (dados[i] === valor) {
                encontrado = true;
                break; // Para quando encontra
            }
        }

        if (encontrado) {
            resultadoDisplay.textContent = `${comparacoes} comparações. Encontrou!`;
            resultadoDisplay.style.color = '#2ecc71'; // Verde
        } else {
            resultadoDisplay.textContent = `${comparacoes} comparações. Não encontrou!`;
            resultadoDisplay.style.color = '#e74c3c'; // Vermelho
        }
    });

    // PESQUISA BINÁRIA (Binary Search)
    btnPesquisarBinaria.addEventListener('click', () => {
        // ---- VALIDAÇÃO CRUCIAL ----
        if (isSorted === false) {
            alert("ERRO: O array precisa ser ordenado (clique em 'Sort') antes de usar a Pesquisa Binária.");
            return;
        }

        const valor = getValor('valorPesquisa');
        if (valor === null) return;

        let comparacoes = 0;
        let encontrado = false;
        let low = 0;
        let high = dados.length - 1;

        while (low <= high) {
            comparacoes++; // Conta cada verificação (cada 'mid')
            let mid = Math.floor((low + high) / 2);
            let chute = dados[mid];

            if (chute === valor) {
                encontrado = true;
                break;
            } else if (chute < valor) {
                low = mid + 1; // Procura na metade direita
            } else {
                high = mid - 1; // Procura na metade esquerda
            }
        }
        
        if (encontrado) {
            resultadoDisplay.textContent = `${comparacoes} comparações. Encontrou!`;
            resultadoDisplay.style.color = '#2ecc71'; // Verde
        } else {
            resultadoDisplay.textContent = `${comparacoes} comparações. Não encontrou!`;
            resultadoDisplay.style.color = '#e74c3c'; // Vermelho
        }
    });

    // --- 5. Inicialização ---
    renderizarArray(); // Renderiza o array inicial

});