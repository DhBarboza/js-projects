// Criar um array de opções para que possam ser consultadas:
const Quote = [
    {
        quote: "A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original.",
        author: "Albert Einstein",
    },
    {
        quote: "A verdadeira medida de um homem não se vê na forma como se comporta em momentos de conforto e conveniência, mas em como se mantém em tempos de controvérsia e desafio.",
        author: "Martin Luther King Jr.",
    },
    {
        quote: "A leitura é para a mente o que o exercício é para o corpo.",
        author: "Joseph Addison",
    },
    {
        quote: "O fracasso é uma grande oportunidade para começar outra vez com mais inteligência.",
        author: "Henry Ford",
    },
    {
        quote: "A educação é a arma mais poderosa que você pode usar para mudar o mundo.",
        author: "Nelson Mandela",
    },
    {
        quote: "A verdadeira viagem de descobrimento não consiste em buscar novas paisagens, mas em ter novos olhos.",
        author: "Marcel Proust",
    },
    {
        quote: "A coragem é a resistência ao medo, o domínio do medo - não a ausência do medo.",
        author: "Mark Twain",
    },
    {
        quote: "A liberdade é a possibilidade do isolamento. Se te é impossível viver só, nasceste escravo.",
        author: "Fernando Pessoa",
    },
    {
        quote: "A esperança é a única coisa mais poderosa que o medo. Um pouco de esperança é eficaz, muita esperança é perigoso. Um brilho de esperança é o que o povo precisa. Ter muita esperança fará com que os homens se tornem irresponsáveis.",
        author: "Tennessee Williams",
    },
    {
        quote: "A melhor maneira de prever o futuro é criá-lo.",
        author: "Peter Drucker",
    },
];

// Obter os elementos HTML:
const quoteBtn = document.querySelector("#quoteBtn");
const quoteText = document.querySelector(".text");
const quoteAuthor = document.querySelector(".author");

function getQuote() {
    const index = Math.random() * quote.length;
    console.log(index);
}
