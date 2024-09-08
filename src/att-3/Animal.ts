export class Animal {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  emitirSom(): void {
    console.log(`${this.nome} está emitindo um som.`);
  }

  mover(): void {
    console.log(`${this.nome} está se movendo.`);
  }
}
