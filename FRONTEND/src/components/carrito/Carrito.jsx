import { useContext } from "react";
import { CartContext } from "../contexto/CartContext";
import "./Carrito.css";
import { Link } from "react-router-dom";


const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito, carritoVacio, eliminarProducto } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  }

  return (
    <div className="TituloCarrito">
      <h1 className="main-title">Carrito <i className="bi bi-cart-fill"></i></h1>
      <div className="ContainerCarrito">
        {carrito.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>PRODUCTO</th>
                <th>CANTIDAD</th>
                <th>PRECIO UNITARIO</th>
                <th>PRECIO TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((prod) => (
                <tr key={prod.id}>
                  <td>{prod.nombre}</td>
                  <td>{prod.cantidad}</td>
                  <td>${prod.precio}</td>
                  <td>${prod.precio * prod.cantidad}</td>
                  <td>
                    <button 
                      onClick={() => eliminarProducto(prod.id)} 
                    > <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="4" className="total-label">Total:</td>
                <td>${precioTotal()}</td>
              </tr>
            </tbody>
          </table>
        )}
        {carrito.length > 0 ? (
          <>
            <div className="botonesCarrito">
              <button className="VaciarCarrito" onClick={handleVaciar}>
                <span>VACIAR EL CARRITO</span>
                <span><i className="bi bi-cart-x-fill"></i></span>
              </button>
              <div className="FinalizarCompra">
                <span>FINALIZAR SU COMPRA</span>
                <span><Link as={Link} to="/envio"><i className="bi bi-check2-circle"></i></Link></span>
              </div>
            </div>
          </>
        ) : (
          <div>{carritoVacio()}</div>
        )}
      </div>
    </div>
  );
}

export default Carrito;
