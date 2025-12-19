export class Ball {
  /**
   * Cria uma nova bola.
   * @param {number} x - a osição inicial no caso  X.
   * @param {number} y - Posição inicial Y.
   * @param {number} velX - Velocidade inicial no eixo X.
   * @param {number} velY - Velocidade inicial no eixo Y.
   * @param {string} color - Cor da bola eu escolhi no caso red e bluee.
   * @param {number} size - Raio da bola em pixels.
   */
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  /**
   * @param {CanvasRenderingContext2D} ctx - O contexto 2D do canvas.
   */
  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  /**
   * @param {number} width - A largura do canvas.
   * @param {number} height - A altura do canvas.
   */
  update(width, height) {
    if (this.x + this.size >= width) {
      this.velX = -Math.abs(this.velX);
    }
    if (this.x - this.size <= 0) {
      this.velX = Math.abs(this.velX);
    }
    if (this.y + this.size >= height) {
      this.velY = -Math.abs(this.velY);
    }
    if (this.y - this.size <= 0) {
      this.velY = Math.abs(this.velY);
    }
    this.x += this.velX;
    this.y += this.velY;
  }

  /**
   * @param {object} goal1 - O objeto do time 1 vermelho.
   * @param {object} goal2 - O objeto do time 2 azul.
   * @returns {string|null} Retorna red se o time vermelho marcou, blue se o azul marcou, ou null se não houve gol.
   */
  collisionDetect(goal1, goal2) {
    if (
      this.x - this.size < goal1.x + goal1.w && 
      this.y - this.size > goal1.y &&
      this.y + this.size < goal1.y + goal1.h && 
      this.color !== goal1.color
    ) {
      return "blue"; // Time Azul marcou no gol Vermelho
    }

    // Detecta gol no Time 2 marcado pelo time vermelho
    if (
      this.x + this.size > goal2.x &&
      this.y - this.size > goal2.y &&
      this.y + this.size < goal2.y + goal2.h && 
      this.color !== goal2.color
    ) {
      return "red"; // Time Vermelho marcou no gol Azul
    }

    return null; // Nenhum gol
  }
}