import { Animal } from "./Animal";

export class Cachorro extends Animal {
  constructor(nome: string, idade: number) {
    super(nome, idade);
  }

  // Comportamento específico do Cachorro
  abanarRabo(): void {
    console.log(`${this.nome} está abanando o rabo.`);
  }
}
