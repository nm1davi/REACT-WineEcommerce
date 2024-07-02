import Swal from 'sweetalert2'
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children})=>{
      const [carrito, setCarrito] = useState(carritoInicial);

      const agregarAlCarrito = (producto, cantidad) => {
    
        const ItemAgregado = { ...producto, cantidad };
        const nuevoCarrito = [...carrito]
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === ItemAgregado.id);
    
        if (estaEnElCarrito) {
          estaEnElCarrito.cantidad += cantidad;
        } else {
          nuevoCarrito.push(ItemAgregado);
        };
        setCarrito(nuevoCarrito);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Has agregado '+ ItemAgregado.cantidad +" "+ ItemAgregado.nombre+ " a tu carrito.",
          showConfirmButton: false,
          timer: 3000
        })
      }

      const eliminarProducto = (productoId) => {
        const nuevoCarrito = carrito.map((prod) => {
          if (prod.id === productoId) {
            if (prod.cantidad > 1) {
              prod.cantidad -= 1; // Restar una unidad si la cantidad es mayor que 1
            } else {
              // Si la cantidad es 1 o menos, eliminar el producto del carrito
              return null;
            }
          }
          return prod;
        });
    
        // Filtrar los productos que no sean null (es decir, mantener solo los productos con cantidad > 0)
        const carritoFiltrado = nuevoCarrito.filter((prod) => prod !== null);
    
        setCarrito(carritoFiltrado);
      };
      
      useEffect(()=>{
            localStorage.setItem("carrito", JSON.stringify(carrito));
      }, [carrito]);

      const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
      }
    
      const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
      }
    


      const vaciarCarrito = () => {
        setCarrito([]);
      }

      const carritoVacio = () => {
        return (
          <div className="ContainerCarritoVacio">
            <h2>TU CARRITO ESTA VACIO</h2>
          </div>
        ) 
      }
      return (
            <CartContext.Provider value={{ 
                  carrito, 
                  carritoVacio,
                  agregarAlCarrito, 
                  cantidadEnCarrito, 
                  precioTotal, 
                  vaciarCarrito,
                  eliminarProducto}}>
                  {children}
            </CartContext.Provider>
      )
}