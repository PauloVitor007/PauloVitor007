import { Ball } from "./Ball.js";
import { Team } from "./Team.js";
import { random } from "./utils.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth * 0.7);
const height = (canvas.height = window.innerHeight * 0.7);

const scoreRedEl = document.getElementById("score-red");
const scoreBlueEl = document.getElementById("score-blue");
const goalMessageEl = document.getElementById("goal-message");

const balls = [];
let team_red = new Team(0, 30, 100, "red", height);
let team_blue = new Team(width - 30, 30, 100, "blue", height);

let score_red = 0;
let score_blue = 0;

/**
 * @function start
 * @description cria ou recria todas as bolas do jogo das configurações
 */
function start() {
  balls.length = 0; // limpa o array de bolas

  // Cria bolas vermelhas
  for (let i = 0; i < team_red.balls_count; i++) {
    const size = random(10, 20);
    const ball_red = new Ball(
      random(0 + size, width - size),
      random(0 + size, height - size),
      random(1, team_red.ball_speed), // Velocidade positiva para a direita
      random(-team_red.ball_speed, team_red.ball_speed),
      "red",
      size
    );
    balls.push(ball_red);
  }

  // cria as bolas azul
  for (let i = 0; i < team_blue.balls_count; i++) {
    const size = random(10, 20);
    const ball_blue = new Ball(
      random(0 + size, width - size),
      random(0 + size, height - size),
      random(-team_blue.ball_speed, -1), // Velocidade negativa para esquerda
      random(-team_blue.ball_speed, team_blue.ball_speed),
      "blue",
      size
    );
    balls.push(ball_blue);
  }
}

/**
 * @function applySettings
 * @description le os valores dos inputs, atualiza os objetos team e reinicia o placar e o jogo.
 */
function applySettings() {
  // Pega os valores do Time 1 Vermelho
  const redHeight = parseInt(document.getElementById("red-goal-height").value);
  const redCount = parseInt(document.getElementById("red-ball-count").value);
  const redSpeed = parseInt(document.getElementById("red-ball-speed").value);

  team_red.setHeight(redHeight, height);
  team_red.balls_count = redCount;
  team_red.ball_speed = redSpeed;
  // Pega os valores do Time 2 Azul
  const blueHeight = parseInt(document.getElementById("blue-goal-height").value);
  const blueCount = parseInt(document.getElementById("blue-ball-count").value);
  const blueSpeed = parseInt(document.getElementById("blue-ball-speed").value);

  team_blue.setHeight(blueHeight, height);
  team_blue.balls_count = blueCount;
  team_blue.ball_speed = blueSpeed;

  score_red = 0;
  score_blue = 0;
  updateScoreboard();

  // aqui recria as bolas
  start();
}

/**
 * @function resetGame
 * @description Reseta os inputs para os valores padrão e reinicia o jogo.
 */
function resetGame() {
  // Reseta os valores dos inputs para o padrão
  document.getElementById("red-goal-height").value = 100;
  document.getElementById("red-ball-count").value = 10;
  document.getElementById("red-ball-speed").value = 7;

  document.getElementById("blue-goal-height").value = 100;
  document.getElementById("blue-ball-count").value = 10;
  document.getElementById("blue-ball-speed").value = 7;

  // Aplica as configurações resetadas
  applySettings();
}

/**
 * @function updateScoreboard
 * @description Atualiza o texto do placar na tela.
 */
function updateScoreboard() {
  scoreRedEl.textContent = `RED: ${score_red}`;
  scoreBlueEl.textContent = `BLUE: ${score_blue}`;
}

/**
 * @function displayGoalMessage
 * @description Exercicio 6: Mostra a mensagem gol! na tela por um periodo curto.
 * @param {string} teamColor - A cor do time que marcou.
 */
function displayGoalMessage(teamColor) {
  goalMessageEl.style.color = teamColor;
  goalMessageEl.style.opacity = "1";

  setTimeout(() => {
    goalMessageEl.style.opacity = "0";
  }, 1000); // Mostra por 1 segundo
}

/**
 * @function resetBall
 * @description Reposiciona uma bola no centro da tela após um gol.
 * @param {Ball} ball - A bola que marcou o gol.
 */
function resetBall(ball) {
  ball.x = width / 2;
  ball.y = height / 2;
  
  const speed = ball.color === 'red' ? team_red.ball_speed : team_blue.ball_speed;
  ball.velX = random(-speed, speed) || (Math.random() > 0.5 ? 1 : -1); 
  ball.velY = random(-speed, speed) || (Math.random() > 0.5 ? 1 : -1);
}

/**
 * @function checkWinner
 * @description Exercicío 6: Verifica se algum time atingiu 10 gols e exibe um alerta.
 */
function checkWinner() {
  if (score_red >= 10) {
    alert("Time VERMELHO venceu!");
    resetGame();
  } else if (score_blue >= 10) {
    alert("Time AZUL venceu!");
    resetGame();
  }
}

/**
 * @function loop
 * @description O loop principal de animação do jogo.
 */
function loop() {
  // Fundo semi-transparente para criar rastro
  ctx.fillStyle = "rgba(101, 250, 100, 0.25)";
  ctx.fillRect(0, 0, width, height);

  // Desenha os gols
  team_red.draw(ctx);
  team_blue.draw(ctx);

  // Processa cada bola
  for (const ball of balls) {
    ball.draw(ctx);
    ball.update(width, height);

    const teamThatScored = ball.collisionDetect(team_red, team_blue);

    if (teamThatScored) {
      if (teamThatScored === "red") {
        score_red++;
      } else if (teamThatScored === "blue") {
        score_blue++;
      }
      
      updateScoreboard();
      displayGoalMessage(teamThatScored);
      resetBall(ball); // Reposiciona a bola que marcou
      checkWinner(); // Verifica se o jogo acabou
    }
  }

  requestAnimationFrame(loop);
}


document.getElementById("buttonStart").addEventListener("click", applySettings);
document.getElementById("buttonReset").addEventListener("click", resetGame);
document.getElementById("red-apply-settings").addEventListener("click", applySettings);
document.getElementById("blue-apply-settings").addEventListener("click", applySettings);

applySettings(); // Começa o jogo com as configurações padrão
loop(); // Começa o loop de animação