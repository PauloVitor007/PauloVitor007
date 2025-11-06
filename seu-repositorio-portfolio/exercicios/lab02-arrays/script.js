// Espera o HTML carregar completamente
document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Estado da Aplicação ---
    // Usamos 'let' pois 'pop' e 'shift' baseados em slice 
    // vão reatribuir este array.
    let dados = ['Maçã', 'Banana', 'Laranja'];

    // --- 2. Selecionando Elementos do DOM ---
    const valorInput = document.getElementById('valorInput');
    const arrayDisplay = document.getElementById('arrayDisplay');
    const btnPush = document.getElementById('btnPush');
    const btnUntshift = document.getElementById('btnUntshift');
    const btnPop = document.getElementById('btnPop');
    const btnShift = document.getElementById('btnShift');

    // --- 3. Funções de Manipulação Manuais ---

    /**
     * Adiciona um elemento ao final do array.
     * (Modifica o array original)
     */
    function meuPush(array, elemento) {
        array[array.length] = elemento;
    }

    /**
     * Adiciona um elemento ao início do array.
     * (Modifica o array original usando um loop 'for' para deslocar)
     */
    function meuUnshift(array, elemento) {
        // Desloca todos os elementos para a direita
        for (let i = array.length; i > 0; i--) {
            array[i] = array[i - 1];
        }
        // Adiciona o novo elemento na primeira posição
        array[0] = elemento;
    }

    /**
     * Remove o último elemento do array.
     * (Retorna um NOVO array sem o último elemento, usando slice)
     */
    function meuPop(array) {
        if (array.length === 0) {
            return array; // Retorna o array vazio
        }
        // Slice cria um novo array do índice 0 até o (penúltimo)
        return array.slice(0, array.length - 1); 
    }

    /**
     * Remove o primeiro elemento do array.
     * (Retorna um NOVO array sem o primeiro elemento, usando slice)
     */
    function meuShift(array) {
        if (array.length === 0) {
            return array; // Retorna o array vazio
        }
        // Slice cria um novo array a partir do índice 1
        return array.slice(1);
    }


    // --- 4. Funções Auxiliares (DOM) ---

    function renderizarArray() {
        arrayDisplay.innerHTML = '';
        dados.forEach(function(item) {
            const itemElement = document.createElement('div');
            itemElement.className = 'array-item';
            itemElement.textContent = item;
            arrayDisplay.appendChild(itemElement);
        });
    }

    function getValorInput() {
        const valor = valorInput.value;
        if (valor.trim() === '') {
            alert('Por favor, digite um valor.');
            return null;
        }
        valorInput.value = '';
        valorInput.focus();
        return valor;
    }

    // --- 5. Event Listeners (Ouvintes de Evento) ---

    btnPush.addEventListener('click', function() {
        const valor = getValorInput();
        if (valor !== null) {
            meuPush(dados, valor); // Modifica 'dados'
            renderizarArray();
        }
    });

    btnUntshift.addEventListener('click', function() {
        const valor = getValorInput();
        if (valor !== null) {
            meuUnshift(dados, valor); // Modifica 'dados'
            renderizarArray();
        }
    });

    btnPop.addEventListener('click', function() {
        if (dados.length === 0) {
            alert('O array está vazio!');
            return;
        }
        // Reatribui 'dados' ao novo array retornado pela função
        dados = meuPop(dados); 
        renderizarArray();
    });

    btnShift.addEventListener('click', function() {
        if (dados.length === 0) {
            alert('O array está vazio!');
            return;
        }
        // Reatribui 'dados' ao novo array retornado pela função
        dados = meuShift(dados); 
        renderizarArray();
    });

    // --- 6. Inicialização ---
    renderizarArray();

});