import { Item } from "../item/Item";

export const ItemList = ({productos}) =>   productos.map(producto =>  ( 
    <Item key={producto.id} producto = {producto} />
));



