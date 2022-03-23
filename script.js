//                                                 Variaveis
const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const num3 = document.querySelector('#num3')
const num4 = document.querySelector('#num4')
const num5 = document.querySelector('#num5')
const num6 = document.querySelector('#num6')
const num7 = document.querySelector('#num7')
const num8 = document.querySelector('#num8')
const num9 = document.querySelector('#num9')
const num0 = document.querySelector('#num0')
let numUsuario = []

const bloco1 = document.querySelector('#b1')
const bloco2 = document.querySelector('#b2')
const bloco3 = document.querySelector('#b3')
const bloco4 = document.querySelector('#b4')
const bloco5 = document.querySelector('#b5')
let blocos = ''
//------------------------------------------------------------------------------------------------------------

//                                     Arrow Function contendo os partidos
const numPartido = () => {
    if (numUsuario[1] === 1) {
        document.querySelector('.seuvotopara').style.visibility = "visible";
        document.querySelector('.campopartido').style.visibility = "visible";
        document.querySelector('.partido').innerText = 'PMDB'
    }
    else if (numUsuario[1] === 2) {
        document.querySelector('.seuvotopara').style.visibility = "visible";
        document.querySelector('.campopartido').style.visibility = "visible";
        document.querySelector('.partido').innerText = 'PSOL'
    }
    else if (numUsuario[1] === 3) {
        document.querySelector('.seuvotopara').style.visibility = "visible";
        document.querySelector('.campopartido').style.visibility = "visible";
        document.querySelector('.partido').innerText = 'PCDOB'
    }
    else if (numUsuario[1] === 4) {
        document.querySelector('.seuvotopara').style.visibility = "visible";
        document.querySelector('.campopartido').style.visibility = "visible";
        document.querySelector('.partido').innerText = 'PVDS'
    }
    else if (numUsuario[1] === 5) {
        document.querySelector('.seuvotopara').style.visibility = "visible";
        document.querySelector('.campopartido').style.visibility = "visible";
        document.querySelector('.partido').innerText = 'PDNS'
    }
    else{
        document.querySelector('.seuvotopara').style.visibility = "visible";
        document.querySelector('.mensagem-erro').style.visibility = "visible";
        document.querySelector('.mensagem-erro').innerText = 'Número Invalido'
    }
}
//------------------------------------------------------------------------------------------------------------

//                                  Arrow Function contendo os Deputados Estaduais
const numDepEst = () => {
    if (numUsuario[1] === 1 && numUsuario[4] === 1) {
        document.querySelector('.fotocandidato').style.visibility = "visible";
        document.querySelector('.camponome').style.visibility = "visible";
        document.querySelector('.dicas').style.visibility = 'visible'
        document.querySelector('.nomeCandidato').innerText = 'Goku'
        document.querySelector('.candidatoCargo').innerText = 'Deputado Estadual'
        document.querySelector('.candidato').setAttribute('src', './assets/goku.jpg')
    }
    else if (numUsuario[1] === 2 && numUsuario[4] === 2) {
        document.querySelector('.fotocandidato').style.visibility = "visible";
        document.querySelector('.camponome').style.visibility = "visible";
        document.querySelector('.dicas').style.visibility = 'visible'
        document.querySelector('.nomeCandidato').innerText = 'Freeza'
        document.querySelector('.candidatoCargo').innerText = 'Deputado Estadual'
        document.querySelector('.candidato').setAttribute('src', './assets/freeza.jpg')
    }
    else if (numUsuario[1] === 3 && numUsuario[4] === 3) {
        document.querySelector('.fotocandidato').style.visibility = "visible";
        document.querySelector('.camponome').style.visibility = "visible";
        document.querySelector('.dicas').style.visibility = 'visible'
        document.querySelector('.nomeCandidato').innerText = 'Chi-Chi'
        document.querySelector('.candidatoCargo').innerText = 'Deputada Estadual'
        document.querySelector('.candidato').setAttribute('src', './assets/chichi.jpg')
    }
    else if (numUsuario[1] === 4 && numUsuario[4] === 4) {
        document.querySelector('.fotocandidato').style.visibility = "visible";
        document.querySelector('.camponome').style.visibility = "visible";
        document.querySelector('.dicas').style.visibility = 'visible'
        document.querySelector('.nomeCandidato').innerText = 'Bulma'
        document.querySelector('.candidatoCargo').innerText = 'Deputada Estadual'
        document.querySelector('.candidato').setAttribute('src', './assets/bulma.jpg')
    }
    else if (numUsuario[1] === 5 && numUsuario[4] === 5) {
        document.querySelector('.fotocandidato').style.visibility = "visible";
        document.querySelector('.camponome').style.visibility = "visible";
        document.querySelector('.dicas').style.visibility = 'visible'
        document.querySelector('.nomeCandidato').innerText = 'Trunks'
        document.querySelector('.candidatoCargo').innerText = 'Deputado Estadual'
        document.querySelector('.candidato').setAttribute('src', './assets/trunks.jpg')
    }
    else {
        document.querySelector('.mensagem-erro').style.visibility = "visible";
        document.querySelector('.campopartido').style.visibility = "hidden";
        document.querySelector('.dicas').style.visibility = 'visible'
        document.querySelector('.mensagem-erro').innerText = 'Número Invalido, consulte número de candidatos.'
    }
}
//------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------

//             Arrow Function para checar se os blocos estão vazios, se não estiver prencher o bloco o seguinte
const checkBlocos = () => {
    if (bloco1.innerText === '') {
        blocos = bloco1
        blocos.innerText = numUsuario.slice(-1)
        numGovernador()
        console.log(numUsuario);
    }
    else if (bloco2.innerText === ''){
        blocos = bloco2
        blocos.innerText = numUsuario.slice(-1)
        numPartido()
        console.log(numUsuario);
    }
    else if (bloco3.innerText === ''){
        blocos = bloco3
        blocos.innerText = numUsuario.slice(-1)
        numSenador()
        console.log(numUsuario);
    }
    else if (bloco4.innerText === ''){
        blocos = bloco4
        blocos.innerText = numUsuario.slice(-1)
        numDepFed()
        console.log(numUsuario);
    }
    else if (bloco5.innerText === ''){
        blocos = bloco5
        blocos.innerText = numUsuario.slice(-1)
        numDepEst()
        console.log(numUsuario);
    }
    else{
        alert('Todos os campos foram preenchidos')
    }
}
//------------------------------------------------------------------------------------------------------------

//             Arrow Function para adicionar numeração nos blocos conforme número do botão
const checkBtn = (teclaFinal) => {
    if (teclaFinal.currentTarget === num1) {
         numUsuario.push(1)
         checkBlocos();
        
    }
    else if (teclaFinal.currentTarget === num2) {
        numUsuario.push(2) 
        checkBlocos();
        
    }
    else if (teclaFinal.currentTarget === num3) {
        numUsuario.push(3)
        checkBlocos();
       
    }
    else if (teclaFinal.currentTarget === num4) {
        numUsuario.push(4)
        checkBlocos();
        
    }
    else if (teclaFinal.currentTarget === num5) {
        numUsuario.push(5)
        checkBlocos();
        
    }
    else if (teclaFinal.currentTarget === num6) {
        numUsuario.push(6)
        checkBlocos();
        
    }
    else if (teclaFinal.currentTarget === num7) {
        numUsuario.push(7)
        checkBlocos();
        
    }
    else if (teclaFinal.currentTarget === num8) {
        numUsuario.push(8)
        checkBlocos();
        
    }
    else if (teclaFinal.currentTarget === num9) {
        numUsuario.push(9)
        checkBlocos();
        
    }
    else if (teclaFinal.currentTarget === num0) {
        numUsuario.push(0)
        checkBlocos();
       
    }
    else {
        console.log(teclas)
    }
};
//------------------------------------------------------------------------------------------------------------

//             .ForEach() para denominar o 'click' para cada uma das teclas ao invés de todas
const teclas = document.querySelectorAll('button')
teclas.forEach((tecla) => tecla.addEventListener('click', checkBtn));
//------------------------------------------------------------------------------------------------------------



