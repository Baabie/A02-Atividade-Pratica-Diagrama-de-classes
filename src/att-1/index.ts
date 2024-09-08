import { describe } from "node:test";
import Item, { DataItem } from "./src/att-1/Item";
import Pedido, { DataPedido } from "./src/att-1/Pedido"

const item1: DataItem = {
    valor: 25.0,
    nome: "Pizza",
    descricao: "Calabresa",
};

const item2: DataItem = {
    valor: 26.0,
    nome: "Pizza",
    descricao: "Frango Cheddar",
}

const novoItem = new Item(item1);

console.log(novoItem)

const pedido1: DataPedido = {
    items: [item1, item2],
};

const novoPedido = new Pedido();