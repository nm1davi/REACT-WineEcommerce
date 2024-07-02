import { Link } from "react-router-dom"
import "./ItemCounts.css"



export const ItemCounts = ({cantidad, handleDecreaseCount, handleIncreaseCount, onAdd, }) => {
      


      return(
            <div className="ItemCount">
                  <div className="Handle">
                  <button id="b1" onClick={handleDecreaseCount}>-</button>
                  <span>{cantidad}</span>
                  <button id="b2" onClick={handleIncreaseCount}>+</button>
                  </div>
                  <div className="botonesDeAbajo">
                  <button className = "AgregarAlCarrito" onClick={onAdd}>
                        <span>AGREGAR AL CARRITO</span>
                        <span><i className="bi bi-cart-check"></i></span>
                  </button>
                  <button className="irCarrito">
                  <span>IR AL CARRITO</span>
                  <span><Link as ={Link} to="/carrito"><i className="bi bi-list-check"></i></Link></span>
                  </button>
                  </div>
            </div>
      )
}

