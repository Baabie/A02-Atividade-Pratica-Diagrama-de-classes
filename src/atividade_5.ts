interface Desconto {
  aplicarDescontoEmPorcentagem(desconto: number): void;
  recuperarValorTotal(): number;
}

interface ValorPedido {
  aplicarDescontoEmReais(desconto: number): void;
}

class Pedido implements ValorPedido, Desconto {
  itens: ItemPedido[] = [];

  add(item: ItemPedido): void {
    this.itens.push(item);
  }

  removeItem(item: string): void {
    const index = this.itens.findIndex((i) => i.nome === item);
    if (index > -1) {
      this.itens.splice(index, 1);
    }
  }

  recuperarValorTotal(): number {
    return this.itens
      .map((i) => i.recuperarValorTotal())
      .reduce((sum, v) => sum + v, 0);
  }

  aplicarDescontoEmPorcentagem(desconto: number): void {
    const valorTotal = this.recuperarValorTotal();
    const porcentagem = desconto / 100;
    const descontoEmReais = valorTotal * porcentagem;
    this.itens.forEach((item) => {
      const proporcao = item.recuperarValorTotal() / valorTotal;
      item.aplicarDescontoEmReais(descontoEmReais * proporcao);
    });
  }

  aplicarDescontoEmReais(desconto: number): void {
    this.itens.forEach((item) =>
      item.aplicarDescontoEmReais(desconto / this.itens.length)
    );
  }
}

class ItemPedido implements ValorPedido, Desconto {
  valor: number;
  nome: string;
  quantidade: number;

  constructor(valor: number, nome: string, quantidade: number) {
    this.valor = valor;
    this.nome = nome;
    this.quantidade = quantidade;
  }

  recuperarValorTotal(): number {
    return this.valor * this.quantidade;
  }

  aplicarDescontoEmPorcentagem(desconto: number): void {
    const porcentagem = desconto / 100;
    const descontoEmReais = this.valor * porcentagem;
    this.valor -= descontoEmReais;
  }

  aplicarDescontoEmReais(desconto: number): void {
    this.valor -= desconto;
  }
}

const item1 = new ItemPedido(100, "Produto A", 2);
const item2 = new ItemPedido(200, "Produto B", 1);

const pedido = new Pedido();
pedido.add(item1);
pedido.add(item2);

console.log("Valor total antes do desconto:", pedido.recuperarValorTotal());

pedido.aplicarDescontoEmPorcentagem(10);
console.log("Valor total após 10% de desconto:", pedido.recuperarValorTotal());

pedido.removeItem("Produto A");
console.log(
  "Valor total após remover Produto A:",
  pedido.recuperarValorTotal()
);
