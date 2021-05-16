//Desafio de Programação - Academia Capgemini

// O Problema

//A agência Divulga Tudo precisa de um programa para gerenciar os seus anúncios online. 
//O objetivo dos anúncios faz parte de uma campanha nas redes sociais. O sistema de gerenciamento permitirá a gestão do anúncio e o rastreio dos resultados da campanha.

//1ª Parte – Uma calculadora de alcance de anúncio online.

//Considere os seguintes critérios fictícios para desenvolver a calculadora de alcance de anúncio:
//Baseados em dados de análise de anúncios anteriores, a agência tem os seguintes dados:
// * a cada 100 pessoas que visualizam o anúncio 12 clicam nele.
// * a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
// * cada compartilhamento nas redes sociais gera 40 novas visualizações.
// * 30 pessoas visualizam o anúncio original (não compartilhado) a cada R$ 1,00 investido.
// * o mesmo anúncio é compartilhado no máximo 4 vezes em sequência

//(1ª pessoa -> compartilha -> 2ª pessoa -> compartilha - > 3ª pessoa -> compartilha -> 4ª pessoa)

const prompt = require('prompt-sync')();
function projecao(valor) {
    let initialViews = valor * 30;
    let totalViews = 0;
    if (!valor) {
        return;
    }
    if (initialViews < 100) {
        return totalViews = initialViews;
    }
    if (initialViews > 100) {
        let first = shareCycle(initialViews)
        let second = shareCycle(first)
        let third = shareCycle(second)
        let fourth = shareCycle(third)

        totalViews = initialViews + first + second + third + fourth
    }
    return Math.floor(totalViews);
}
function shareCycle(views) {
    if (!views) {
        return;
    }
    let clickers = (views / 100) * 12;
    let shares = (clickers / 20) * 3;
    let shareViews = shares * 40;

    return shareViews;
}
function projecaoScreen(number) {
    return `Investindo R$${number}, a projeção aproximada da quantidade máxima de pessoas que visualizarão o mesmo anúncio é de ${projecao(number)}.`
}
const value = prompt('Informe o valor que deseja investir: ');
console.log(projecaoScreen(value))
module.exports = {
    projecao,
    shareCycle,
}
