import { Link } from 'react-router-dom';
import cart from '../../assets/img/cart.png'
import { useContext } from 'react';
import { CartContext } from '../contexto/CartContext';
import "./CartWidget.css"

export const CartWidget = () => {

            const { cantidadEnCarrito} = useContext(CartContext)

      return (
            <div className='BotonCarrito'>
                  <Link as={Link} to="/carrito" >
                        <img src={cart} alt="Carrito" /> <span>{cantidadEnCarrito()}</span>
                  </Link>
            </div>
      )
};
