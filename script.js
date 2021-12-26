const cor = document.querySelector('#rgb-color'); 
const corFundo = document.querySelectorAll('.ball'); 
const texto = document.getElementById('answer'); 
const reset = document.querySelector('#reset-game'); 
const pontuacao = document.querySelector('#score'); 
let score = 0;
const novoJogo = document.querySelector('#reset');
const numero = 6


function cores() {
  let corAleatoria = '';
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  corAleatoria = `RGB(${r}, ${g}, ${b})`;
  return corAleatoria;
}


function pintaFundo() {
  for (let i = 0; i < corFundo.length; i += 1) {
    corFundo[i].style.backgroundColor = cores();
  }
  const valorObjeto = Math.floor(Math.random() * numero);
  cor.innerText = corFundo[valorObjeto].style.backgroundColor;
}
pintaFundo();


function pontos() {
  score += 3;
  pontuacao.innerText = `Score: ${score}`;
}

function escolha() {
  texto.innerHTML = 'Choose a color!';
}
window.onload = escolha;

function novo () {
  window.location.reload();
}
novoJogo.addEventListener('click', novo);

function answer(event) {
  const evT = event.target;
  const corDeFundo = cor.innerText;
  if (evT.style.backgroundColor.includes(corDeFundo)) {
    texto.innerText = 'YEEAHH! You got it!!';
    pontos();
  } else {
    texto.innerText = 'Sorry :( Try again!';
  }
}

for (let index = 0; index < corFundo.length; index += 1) {
  corFundo[index].addEventListener('click', answer);
}

function resetar() {
  texto.innerHTML = 'Choose a color!';
  pintaFundo();
}
reset.addEventListener('click', resetar);


