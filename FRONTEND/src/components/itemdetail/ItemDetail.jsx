import "./ItemDetail.css"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { ItemCounts } from "../itemcounts/ItemCounts";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../contexto/CartContext";

export const ItemDetail = ({producto}) => {
    const {imagen, nombre, stock, descripcion} = producto;


    const{carrito, agregarAlCarrito} = useContext (CartContext);
    console.log(carrito);

    const [cantidad, setcantidad] = useState(1);
      
    const handleDecreaseCount = () => {
          cantidad > 1 && setcantidad (cantidad - 1)
    };
    const handleIncreaseCount = () => {
          cantidad < producto.stock && setcantidad (cantidad + 1)
    };
          



    return(     
      <div className="ContenedorDetalle">
    <div className="cardPosicion">
    <Card   style={{ width: '35rem' }}>
    <Card.Img className = "ImgCards" variant="top" src={imagen} />
    <Card.Body className="cardDescripcion">
      <Card.Title>{nombre}</Card.Title> <hr />
      <Card.Text className="cardText">
        {descripcion}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item className="Stock">Stock: {stock}</ListGroup.Item>
    </ListGroup>
  </Card>
    </div>
      <div>
        <ItemCounts cantidad ={cantidad} handleDecreaseCount ={handleDecreaseCount} handleIncreaseCount={handleIncreaseCount} onAdd={() =>{ agregarAlCarrito (producto,cantidad)}}/>
      </div>
      </div>
)};

