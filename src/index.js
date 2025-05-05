// Importando a biblioteca readline-sync
const readline = require('readline-sync');

// Capturando o número de pessoas na mesa
const numeroPessoas = readline.questionInt('Digite o número de pessoas na mesa: ');

// Capturando o valor total da conta
const valorTotal = readline.questionFloat('Digite o valor total da conta: R$');

// Capturando o método de pagamento
let mtdPag;

//Validação para conferir se o que foi digitado pelo usuário é realmente uma das 3 formas de pagamento
do{
    let metodoPagamento = readline.question('Qual é o método de pagamento (PIX, dinheiro ou cartão)? ');
    let mtdPagSemEspaco = metodoPagamento.trim();
    mtdPag = mtdPagSemEspaco.toLowerCase();
        if(mtdPag !== "pix" && mtdPag !== "cartao" && mtdPag !== "dinheiro"){
            console.log("valor inválido. Por favor prencha com uma das opções de pagamento."); 
        };
} while(mtdPag !== "pix" && mtdPag !== "cartao" && mtdPag !== "dinheiro"); //Não consegui realizar a validação com a palavra cartão porque o código estava dando um erro de enconding (não estava reconhecendo o ~) 

//Faça sua lógica para aplicar o desconto apenas para PIX OU DINHEIRO
let valorPagPorPessoa;
if(mtdPag === "pix" || mtdPag === "dinheiro"){
    let desconto = (valorTotal/numeroPessoas) * 10/100;
    valorPagPorPessoa = (valorTotal/numeroPessoas) - desconto;
}
else{
    valorPagPorPessoa = valorTotal/numeroPessoas;
}

// Exibindo os resultados
console.log(`O valor que cada pessoa pagará é de: R$${valorPagPorPessoa.toFixed(2)}`);

