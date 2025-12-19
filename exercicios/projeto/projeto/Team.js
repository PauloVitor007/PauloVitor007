/**
 */
export class Team {
  /**
   * Cria um novo time gol.
   * @param {number} x - Posição X da trave.
   * @param {number} w - Largura da trave.
   * @param {number} h - Altura da trave.
   * @param {string} color - Cor do time.
   * @param {number} canvasHeight - A altura total do canvas usada para centralizar a trave.
   */
  constructor(x, w, h, color, canvasHeight) {
    this.name = color;
    this.x = x;
    this.w = w;
    this.h = h;
    this.color = color;

    this.y = canvasHeight / 2 - this.h / 2;

    this.balls_count = 10;
    this.ball_speed = 7;
  }

  /**
   * @param {CanvasRenderingContext2D} ctx - O contexto 2D do canvas.
   */
  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  /**
   * @param {number} newHeight - A nova altura da trave.
   * @param {number} canvasHeight - A altura total do canvas.
   */
  setHeight(newHeight, canvasHeight) {
    this.h = newHeight;
    this.y = canvasHeight / 2 - this.h / 2;
  }
}