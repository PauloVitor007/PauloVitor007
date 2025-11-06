// Espera o HTML carregar completamente antes de executar o script
document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Estado da Aplicação ---
    // Nosso array de dados inicial
    let dados = ['Maçã', 'Banana', 'Laranja'];

    // --- 2. Selecionando Elementos do DOM ---
    const valorInput = document.getElementById('valorInput');
    const arrayDisplay = document.getElementById('arrayDisplay');
    
    // Botões de Adição
    const btnPush = document.getElementById('btnPush');
    const btnUntshift = document.getElementById('btnUntshift');
    
    // Botões de Remoção
    const btnPop = document.getElementById('btnPop');
    const btnShift = document.getElementById('btnShift');

    // --- 3. Funções ---

    /**
     * Função para renderizar (desenhar) o array na tela.
     * Ela limpa a tela e recria os itens do array.
     */
    function renderizarArray() {
        // Limpa o conteúdo atual da div
        arrayDisplay.innerHTML = '';

        // Cria e adiciona cada item do array na div
        dados.forEach(function(item) {
            // 1. Cria um novo elemento (ex: <div class="array-item"></div>)
            const itemElement = document.createElement('div');
            itemElement.className = 'array-item';
            
            // 2. Define o texto do elemento
            itemElement.textContent = item;
            
            // 3. Adiciona o novo elemento dentro da div 'arrayDisplay'
            arrayDisplay.appendChild(itemElement);
        });
    }

    /**
     * Função auxiliar para pegar o valor do input e limpá-lo.
     * Retorna null se o input estiver vazio.
     */
    function getValorInput() {
        const valor = valorInput.value; // Pega o texto do input
        if (valor.trim() === '') {
            alert('Por favor, digite um valor.');
            return null; // Retorna nulo se estiver vazio
        }
        valorInput.value = ''; // Limpa o campo de texto
        valorInput.focus(); // Coloca o cursor de volta no campo
        return valor;
    }


    // --- 4. Event Listeners (Ouvintes de Evento) ---

    // PUSH: Adiciona no final
    btnPush.addEventListener('click', function() {
        const valor = getValorInput();
        if (valor !== null) {
            dados.push(valor); // Modifica o array
            renderizarArray(); // Redesenha a tela
        }
    });

    // UNSHIFT: Adiciona no início
    btnUntshift.addEventListener('click', function() {
        const valor = getValorInput();
        if (valor !== null) {
            dados.unshift(valor); // Modifica o array
            renderizarArray(); // Redesenha a tela
        }
    });

    // POP: Remove do final
    btnPop.addEventListener('click', function() {
        if (dados.length === 0) {
            alert('O array está vazio!');
            return;
        }
        dados.pop(); // Modifica o array
        renderizarArray(); // Redesenha a tela
    });

    // SHIFT: Remove do início
    btnShift.addEventListener('click', function() {
        if (dados.length === 0) {
            alert('O array está vazio!');
            return;
        }
        dados.shift(); // Modifica o array
        renderizarArray(); // Redesenha a tela
    });

    // --- 5. Inicialização ---
    // Renderiza o array pela primeira vez quando a página carrega
    renderizarArray();

});