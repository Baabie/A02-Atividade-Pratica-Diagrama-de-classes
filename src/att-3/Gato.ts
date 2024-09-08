import { Animal } from "./Animal";

export class Gato extends Animal {
  constructor(nome: string, idade: number) {
    super(nome, idade);
  }

  // Comportamento específico do Gato
  arranhar(): void {
    console.log(`${this.nome} está arranhando.`);
  }
}
