const valorHoraInput = document.querySelector('#valor-hora');
const horasProjetoInput = document.querySelector('#horas-projeto');
const resposta = document.querySelector('#resposta');

const calcular = () => {
    const valorHora = valorHoraInput.valueAsNumber;
    const horasProjeto = horasProjetoInput.valueAsNumber;
    const total = (valorHora * horasProjeto);
    resposta.innerHTML = 'R$' + total.toFixed(2);
}
