import { Item } from "./Item";

class Pedido {
  itens: Item[];
  valorTotal: number;

  constructor(itens: Item[]) {
    this.itens = itens;
    this.valorTotal = this.calcularValorTotal();
  }

  calcularValorTotal(): number {
    return this.itens.reduce((total, item) => total + item.valor, 0);
  }

  adicionarItem(item: Item): void {
    this.itens.push(item);
    this.valorTotal = this.calcularValorTotal();
  }

  removerItem(nome: string): void {
    this.itens = this.itens.filter((item) => item.nome !== nome);
    this.valorTotal = this.calcularValorTotal();
  }
}

const item1 = new Item(10.0, "Produto A", "Descrição do produto A");
const item2 = new Item(20.0, "Produto B", "Descrição do produto B");

const pedido = new Pedido([item1, item2]);

console.log("Valor total do pedido:", pedido.valorTotal);

const item3 = new Item(15.0, "Produto C", "Descrição do produto C");
pedido.adicionarItem(item3);

console.log("Valor total do pedido após adicionar um item:", pedido.valorTotal);

pedido.removerItem("Produto A");

console.log("Valor total do pedido após remover um item:", pedido.valorTotal);
