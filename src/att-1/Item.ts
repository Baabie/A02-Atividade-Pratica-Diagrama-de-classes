/* 1. Implemente e teste o modelo de classes com base na seguinte
imagem: */

export class Item {
  valor: number;
  nome: string;
  descricao: string;

  constructor(valor: number, nome: string, descricao: string) {
    this.valor = valor;
    this.nome = nome;
    this.descricao = descricao;
  }
}
