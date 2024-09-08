import { Animal } from "./Animal";

export class Cavalo extends Animal {
  constructor(nome: string, idade: number) {
    super(nome, idade);
  }

  // Comportamento específico do Cavalo
  galopar(): void {
    console.log(`${this.nome} está galopando.`);
  }
}
