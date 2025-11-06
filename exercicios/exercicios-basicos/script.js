//  DOM carrega
document.addEventListener('DOMContentLoaded', () => {

    // Q6: Celsius para Fahrenheit
    document.getElementById('q6-run').addEventListener('click', () => {
        const celsius = parseFloat(document.getElementById('q6-celsius').value);
        const resultadoEl = document.getElementById('q6-resultado');
        
        if (isNaN(celsius)) {
            resultadoEl.textContent = 'Por favor, insira um número.';
            return;
        }
        
        const fahrenheit = (celsius * 9/5) + 32;
        resultadoEl.textContent = `${celsius}°C é igual a ${fahrenheit.toFixed(2)}°F`;
    });

    // Q7: Salário Anual
    document.getElementById('q7-run').addEventListener('click', () => {
        const salario = parseFloat(document.getElementById('q7-salario').value);
        const meses = parseInt(document.getElementById('q7-meses').value, 10);
        const resultadoEl = document.getElementById('q7-resultado');

        if (isNaN(salario) || isNaN(meses)) {
            resultadoEl.textContent = 'Valores inválidos.';
            return;
        }
        
        const anual = salario * meses;
        resultadoEl.textContent = `Salário Anual: ${anual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
    });

    // Q8: Par ou Ímpar
    document.getElementById('q8-run').addEventListener('click', () => {
        const numero = parseInt(document.getElementById('q8-numero').value, 10);
        const resultadoEl = document.getElementById('q8-resultado');

        if (isNaN(numero)) {
            resultadoEl.textContent = 'Por favor, insira um número.';
            return;
        }

        if (numero % 2 === 0) {
            resultadoEl.textContent = `O número ${numero} é PAR.`;
        } else {
            resultadoEl.textContent = `O número ${numero} é ÍMPAR.`;
        }
    });

    // Q9: Operadores Lógicos
    document.getElementById('q9-run').addEventListener('click', () => {
        // Converte o valor string do select para booleano
        const boolA = document.getElementById('q9-bool1').value === 'true';
        const boolB = document.getElementById('q9-bool2').value === 'true';
        const resultadoEl = document.getElementById('q9-resultado');

        const and = boolA && boolB;
        const or = boolA || boolB;
        const notA = !boolA;

        // Usamos .innerHTML para renderizar as quebras de linha
        resultadoEl.innerHTML = `A && B = ${and}<br>A || B = ${or}<br>!A = ${notA}`;
    });

    // Q10: Comparar Strings
    document.getElementById('q10-run').addEventListener('click', () => {
        const str1 = document.getElementById('q10-str1').value;
        const str2 = document.getElementById('q10-str2').value;
        const resultadoEl = document.getElementById('q10-resultado');

        if (str1 === str2) {
            resultadoEl.textContent = 'As strings são IGUAIS.';
        } else {
            resultadoEl.textContent = 'As strings são DIFERENTES.';
        }
    });

    // Q11: Maior que
    document.getElementById('q11-run').addEventListener('click', () => {
        const num1 = parseFloat(document.getElementById('q11-num1').value);
        const num2 = parseFloat(document.getElementById('q11-num2').value);
        const resultadoEl = document.getElementById('q11-resultado');

        if (isNaN(num1) || isNaN(num2)) {
            resultadoEl.textContent = 'Valores inválidos.';
            return;
        }

        if (num1 > num2) {
            resultadoEl.textContent = `Verdadeiro (${num1} é > ${num2})`;
        } else {
            resultadoEl.textContent = `Falso (${num1} não é > ${num2})`;
        }
    });

    // Q12: Maior de Idade
    document.getElementById('q12-run').addEventListener('click', () => {
        const idade = parseInt(document.getElementById('q12-idade').value, 10);
        const resultadoEl = document.getElementById('q12-resultado');
        
        if (isNaN(idade) || idade < 0) {
            resultadoEl.textContent = 'Idade inválida.';
            return;
        }

        if (idade >= 18) {
            resultadoEl.textContent = 'É MAIOR de idade.';
        } else {
            resultadoEl.textContent = 'É MENOR de idade.';
        }
    });

});