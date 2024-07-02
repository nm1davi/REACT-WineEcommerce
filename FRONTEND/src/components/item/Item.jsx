import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./Item.css";

export const Item = ({producto}) => {
      const {id, imagen, nombre, categoria, precio, stock} = producto;
      return (<Card key={id} style={{ width: '20rem' }}>
<Card.Img  className="ImgCards" variant="top" src={imagen} />
<Card.Body>
<Card.Title className='TituloCard'>{nombre}</Card.Title>
<Card.Text>
Categoría: {categoria} <br/>
Precio: ${precio} <br/>
Stock: {stock}
</Card.Text>
<Link to = {`/item/${producto.id}`}>
<Button className='BotonDescripcion' >Descripción del Vino</Button>
</Link>
</Card.Body>
</Card>)};