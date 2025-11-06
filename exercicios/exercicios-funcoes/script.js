console.log("--- Exercícios: Funções ---");

// --- 1. Definição (multiplyAndAdd) ---
console.log("--- 1. Definição ---");

// 1. Definição de Função
function multiplyAndAdd_Def(a, b, c) {
    return (a * b) + c;
}
console.log("Definição:", multiplyAndAdd_Def(2, 3, 4)); // 10

// 2. Expressão de Função
const multiplyAndAdd_Exp = function(a, b, c) {
    return (a * b) + c;
};
console.log("Expressão:", multiplyAndAdd_Exp(2, 3, 4)); // 10

// 3. Arrow Function
const multiplyAndAdd_Arrow = (a, b, c) => (a * b) + c;
console.log("Arrow:", multiplyAndAdd_Arrow(2, 3, 4)); // 10

// --- 2. Callback ---
console.log("--- 2. Callback ---");

// 1. Saudar com Callback
function saudar(nome, callback) {
    const saudacao = "Olá, " + nome + "!";
    callback(saudacao);
}

saudar("Alice", function(resultado) {
    console.log(resultado); // "Olá, Alice!"
});

// 2. Filtro de Array com Callback
function filtrar(array, callbackCriterio) {
    const filtrados = [];
    for (const item of array) {
        if (callbackCriterio(item)) {
            filtrados.push(item);
        }
    }
    return filtrados;
}

let numeros = [1, 12, 5, 8, 130, 44];
let pares = filtrar(numeros, function(numero) {
    return numero % 2 === 0;
});
console.log("Filtro Pares:", pares); // [12, 8, 130, 44]

// 3. Callback com Funções Assíncronas (Timer)
function executarComDelay(callback, tempo) {
    setTimeout(callback, tempo);
}

executarComDelay(function() {
    console.log("Executado após 2 segundos");
}, 2000);

// 4. Transformação em Array de Objetos
function criarObjetos(nomes, callback) {
    const objetos = [];
    for (const nome of nomes) {
        objetos.push(callback(nome));
    }
    return objetos;
}

let nomes = ["Alice", "Bob", "Carlos"];
let objetos = criarObjetos(nomes, function(nome) {
    return { nome: nome };
});
console.log("Array de Objetos:", objetos);

// 5. Manipulação de Arrays de Objetos
function filtrarProdutos(produtos, callbackCriterio) {
    const filtrados = [];
    for (const produto of produtos) {
        if (callbackCriterio(produto)) {
            filtrados.push(produto);
        }
    }
    return filtrados;
}

let produtos = [
    { nome: "Camiseta", preco: 25 },
    { nome: "Calça", preco: 50 },
    { nome: "Meias", preco: 5 }
];
let produtosCaros = filtrarProdutos(produtos, function(produto) {
    return produto.preco > 20;
});
console.log("Produtos Filtrados:", produtosCaros);