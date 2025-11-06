document.addEventListener('DOMContentLoaded', () => {

    // Q15: Raiz Quadrada
    document.getElementById('q15-run').addEventListener('click', () => {
        const num = parseFloat(document.getElementById('q15-numero').value);
        const res = document.getElementById('q15-resultado');
        if (isNaN(num)) {
            res.textContent = 'Número inválido.';
        } else if (num < 0) {
            res.textContent = 'Não é possível calcular a raiz de um número negativo.';
        } else {
            res.textContent = `A raiz de ${num} é ${Math.sqrt(num).toFixed(4)}`;
        }
    });

    // Q16: Tabuada
    document.getElementById('q16-run').addEventListener('click', () => {
        const num = parseInt(document.getElementById('q16-numero').value, 10);
        const res = document.getElementById('q16-resultado');
        if (isNaN(num)) {
            res.textContent = 'Número inválido.';
            return;
        }

        let tabuada = `Tabuada do ${num}:\n`; // \n é quebra de linha
        for (let i = 1; i <= 10; i++) {
            tabuada += `${num} x ${i} = ${num * i}\n`;
        }
        res.textContent = tabuada;
    });

    // Q17: Maior de Três
    document.getElementById('q17-run').addEventListener('click', () => {
        const num1 = parseFloat(document.getElementById('q17-num1').value);
        const num2 = parseFloat(document.getElementById('q17-num2').value);
        const num3 = parseFloat(document.getElementById('q17-num3').value);
        const res = document.getElementById('q17-resultado');

        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            res.textContent = 'Valores inválidos.';
            return;
        }
        const maior = Math.max(num1, num2, num3);
        res.textContent = `O maior número é: ${maior}`;
    });

    // Q18: Contar Palavras
    document.getElementById('q18-run').addEventListener('click', () => {
        const frase = document.getElementById('q18-frase').value;
        const res = document.getElementById('q18-resultado');

        // .trim() remove espaços extras no início e fim
        // .split(' ') divide a string por espaços
        // .filter(Boolean) remove itens vazios (ex: espaços duplos)
        const palavras = frase.trim().split(/\s+/).filter(Boolean);

        res.textContent = `A frase contém ${palavras.length} palavras.`;
    });

    // Q19: Número Primo
    document.getElementById('q19-run').addEventListener('click', () => {
        const num = parseInt(document.getElementById('q19-numero').value, 10);
        const res = document.getElementById('q19-resultado');
        
        if (isNaN(num)) {
            res.textContent = 'Número inválido.';
            return;
        }
        
        if (isPrimo(num)) {
            res.textContent = `O número ${num} É primo.`;
        } else {
            res.textContent = `O número ${num} NÃO é primo.`;
        }
    });

    // Q20: Ano Bissexto
    document.getElementById('q20-run').addEventListener('click', () => {
        const ano = parseInt(document.getElementById('q20-ano').value, 10);
        const res = document.getElementById('q20-resultado');

        if (isNaN(ano) || ano <= 0) {
            res.textContent = 'Ano inválido.';
            return;
        }

        // Regra do ano bissexto:
        // Divisível por 4, mas não por 100, A MENOS que seja divisível por 400.
        if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
            res.textContent = `O ano ${ano} É bissexto.`;
        } else {
            res.textContent = `O ano ${ano} NÃO é bissexto.`;
        }
    });

});

// --- Função Auxiliar para Q19 ---
/**
 * Verifica se um número é primo.
 */
function isPrimo(num) {
    if (isNaN(num) || num <= 1) {
        return false; // Primos são maiores que 1
    }
    
    // Otimização: Só precisamos verificar até a raiz quadrada do número
    const limite = Math.sqrt(num);

    for (let i = 2; i <= limite; i++) {
        if (num % i === 0) {
            return false; // Encontrou um divisor, não é primo
        }
    }
    
    return true; // Não encontrou divisores
}