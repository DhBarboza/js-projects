/* Sumário de Métodos:
-> Date() = Obter a data e hora atuais
-> .toString() = Coverte o valor para caracetre do tipo texto
-> .padStart(length, fill) =  preencher uma string com caracteres de preenchimento no início, até que a string atinja um comprimento desejado.
-> document.querySelector(seletorCSS) = É usada para selecionar o primeiro elemento que corresponde a um seletor CSS especificado dentro do documento HTML.
-> .textContent = É usado para obter ou definir o texto contido em um elemento HTML.
-> setInterval() =  Usada para executar repetidamente um determinado bloco de código ou chamar uma função em intervalos de tempo regulares. 
*/

// Declarar váriaveis:
// Selecionar os elementos do HTML
const clockElement = document.querySelector(".clock");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");

function updateClock() {
    // Obter Data atual:
    const now = new Date();

    // Obter Horas, minutos e Segundos:
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;

    console.log(now);
}

setInterval(updateClock, 1000);
