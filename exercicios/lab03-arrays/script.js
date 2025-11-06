document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Estado da Aplicação ---
    // Array original que usaremos para resetar
    const arrayOriginal = [15, 1, 10, 29, 5, 2, 22];
    
    // Cópia do array original para manipulação
    let dados = [...arrayOriginal];

    // --- 2. Selecionando Elementos do DOM ---
    const arrayDisplay = document.getElementById('arrayDisplay');
    const resultadoDisplay = document.getElementById('resultadoDisplay');
    
    const btnSort = document.getElementById('btnSort');
    const btnFilter = document.getElementById('btnFilter');
    const btnMap = document.getElementById('btnMap');
    const btnFind = document.getElementById('btnFind');
    const btnReduce = document.getElementById('btnReduce');
    const btnReset = document.getElementById('btnReset');

    // --- 3. Funções ---

    /**
     * Renderiza o array 'dados' na tela.
     */
    function renderizarArray() {
        arrayDisplay.innerHTML = ''; // Limpa a tela
        
        // Adiciona cada item do array 'dados'
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
    }

    // --- 4. Event Listeners (Ouvintes de Evento) ---

    // SORT: Ordena o array 'dados'
    btnSort.addEventListener('click', () => {
        // Para ordenar números, é preciso passar uma função de comparação
        dados.sort((a, b) => a - b);
        renderizarArray();
        limparResultado();
    });

    // FILTER: Filtra o array 'dados'
    btnFilter.addEventListener('click', () => {
        // Substitui 'dados' por um novo array SÓ com números > 2
        dados = dados.filter(numero => numero > 2);
        renderizarArray();
        limparResultado();
    });

    // MAP: Transforma o array 'dados'
    btnMap.addEventListener('click', () => {
        // Substitui 'dados' por um novo array com cada valor dobrado
        dados = dados.map(numero => numero * 2);
        renderizarArray();
        limparResultado();
    });

    // FIND: Encontra um item (não modifica o array)
    btnFind.addEventListener('click', () => {
        const encontrado = dados.find(numero => numero === 10);
        
        if (encontrado !== undefined) {
            resultadoDisplay.textContent = `Item "10" encontrado!`;
        } else {
            resultadoDisplay.textContent = `Item "10" não foi encontrado no array atual.`;
        }
    });

    // REDUCE: Reduz o array a um único valor (soma)
    btnReduce.addEventListener('click', () => {
        const soma = dados.reduce((acumulador, valorAtual) => {
            return acumulador + valorAtual;
        }, 0); // O '0' é o valor inicial do acumulador
        
        resultadoDisplay.textContent = `A soma de todos os itens é: ${soma}`;
    });

    // RESET: Restaura o array 'dados' para o original
    btnReset.addEventListener('click', () => {
        dados = [...arrayOriginal]; // Cria uma nova cópia
        renderizarArray();
        limparResultado();
    });

    // --- 5. Inicialização ---
    // Renderiza o array pela primeira vez
    renderizarArray();

});