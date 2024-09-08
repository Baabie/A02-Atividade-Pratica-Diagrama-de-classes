import { FormatoDeElemento } from "./FormatoElemento";

export class Circulo implements FormatoDeElemento {
  raio: number;

  constructor(raio: number) {
    this.raio = raio;
  }

  desenhar(): void {
    console.log(`Desenhando um círculo com raio: ${this.raio}`);
  }

  redimensionar(): void {
    this.raio *= 2;
    console.log(`Redimensionando o círculo. Novo raio: ${this.raio}`);
  }
}
