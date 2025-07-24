/* Pegando elementos do HTML */
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const cubo = document.getElementById('cube');
const mensagem = document.getElementById('mensagem');
const bTn = document.getElementById('start');

/* Lista de castigos */
const castigos = [
  "Faça 10 polichinelos",
  "Conte uma piada engraçada",
  "Dance por 20 segundos",
  "Fale um trava-língua 3 vezes",
  "Imite um animal por 15 segundos",
  "Cante uma música por 30 segundos",
  "Pule em um pé só por 10 segundos",
  "Faça caretas até alguém rir",
  "Fale o alfabeto de trás para frente",
  "Finja estar dormindo por 20 segundos",
  "Faça uma imitação de um personagem famoso",
  "Fique em silêncio por 30 segundos",
  "Desenhe algo com os olhos fechados",
  "Conte até 20 rápido",
  "Faça uma pose engraçada e segure por 10 segundos"
];

/* Função que retorna castigo aleatório */
function castigoAleatorio() {
  const indice = Math.floor(Math.random() * castigos.length);
  return castigos[indice];
}

/* Função para girar o dado conforme número sorteado */
function giro(sorteio) {
  const rotacoes = {
 
  1: "rotateY(0deg) rotateX(0deg)",    // face1
  2: "rotateY(-90deg) rotateX(0deg)",  // face4
  3: "rotateY(180deg) rotateX(0deg)",  // face3
  4: "rotateY(90deg) rotateX(0deg)",   // face2
  5: "rotateX(-90deg) rotateY(0deg)",  // face6
  6: "rotateX(90deg) rotateY(0deg)"    // face5
};



  cubo.style.transition = "transform 1s ease";
  cubo.style.transform = rotacoes[sorteio];
}

/* Evento do botão jogar */
bTn.addEventListener('click', () => {
  // Remove destaque anterior
  player1.classList.remove('highlight');
  player2.classList.remove('highlight');
  mensagem.textContent = "";

  const valor1 = parseInt(player1.value);
  const valor2 = parseInt(player2.value);

  if (
    isNaN(valor1) || isNaN(valor2) ||
    valor1 < 1 || valor1 > 6 ||
    valor2 < 1 || valor2 > 6
  ) {
    mensagem.textContent = "Digite um número de 1 a 6 para iniciar o jogo.";
    return;
  }

  // Para rotação automática para aplicar a rotação do resultado
  cubo.classList.remove('auto-rotate');

  
  
  
  
  window.onload = () => {
  const musicaFundo = document.getElementById("musicaFundo");
  musicaFundo.play();
};
 
setTimeout(() => {
  // Pausa a música
  document.getElementById("musicaFundo").pause();

  // Continua com a lógica do jogo (ex: mostrar resultado, castigo etc.)
  verificarVencedor();
}, 3000); // tempo da rotação em milissegundos

  
  
  
  /*logica do jogo */
  const sorteio = Math.floor(Math.random() * 6) + 1;
  giro(sorteio);

  setTimeout(() => {
    if (sorteio === valor1 && sorteio === valor2) {
      mensagem.textContent = `🎉 Ambos acertaram! O número sorteado foi ${sorteio}. Ninguém leva castigo.`;
    } else if (sorteio === valor1) {
      player1.classList.add('highlight');
      mensagem.textContent = `🟢 Jogador 1 acertou! O número sorteado foi ${sorteio}.\nJogador 2, seu castigo é:
       ${castigoAleatorio()}`;
    } else if (sorteio === valor2) {
      player2.classList.add('highlight');
      mensagem.textContent = `🟢 Jogador 2 acertou! O número sorteado foi ${sorteio}.\nJogador 1, seu castigo é: 
     </br> ${castigoAleatorio()}`;
    } else {
      mensagem.textContent = `❌ Ninguém acertou. O número sorteado foi ${sorteio}.`;
    }
  }, 1100);
});
window.onload = () => {
  const musicaFundo = document.getElementById("musicaFundo");
  musicaFundo.play();
};
// Suponha que esta parte seja depois do sorteio e da rotação
setTimeout(() => {
  // Pausa a música
  document.getElementById("musicaFundo").pause();

  // Continua com a lógica do jogo (ex: mostrar resultado, castigo etc.)
  verificarVencedor();
}, 3000); // tempo da rotação em milissegundos
