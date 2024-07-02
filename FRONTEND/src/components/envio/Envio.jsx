import { useForm, Controller } from "react-hook-form";
import WineGlass from "../../assets/img/Checked.png";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexto/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Envio.css"


export const Envio = () => {

const [pedidoId,setPedidoId] = useState("");    
const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)
const navigate = useNavigate();
const { handleSubmit, control, formState: { errors } } = useForm();
useEffect(() => {
  if (pedidoId) {
    Swal.fire({
      title: `GRACIAS POR SU COMPRA\nSU NUMERO DE COMPRA ES: ${pedidoId}`,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    }).then(() => {
      navigate("/");
    });
  }
}, [pedidoId, navigate]);

  const comprar = (data)=>{
    const pedido = {
        cliente: data,
        productos: carrito,
        total: precioTotal(),
    }
    console.log(pedido)
    const pedidosRef = collection(db, "Pedidos");
    addDoc(pedidosRef, pedido)
    .then((doc)=>{
        setPedidoId(doc.id);
        vaciarCarrito();
    })
  }

  return (
    <div className="TituloFormulario">
      <h1>FINALIZAR COMPRA</h1>
      <div className="containerFormulario">
        <div className="ImagenFormulario">
          <img src={WineGlass} alt="Imagen del Formulario" />
        </div>
        <div className="InputsFormulario">
          <form onSubmit={handleSubmit(comprar)}>
            <Controller
              name="nombre"
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="text"
                  placeholder="Ingresa tu nombre"
                  {...field}
                />
              )}
            />
            {errors.nombre && <p className="error">Campo obligatorio</p>}
            
            <Controller
              name="email"
              control={control}
              rules={{ required: true, pattern: /^\S+@\S+$/i }}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="email"
                  placeholder="Ingresa tu e-mail"
                  {...field}
                />
              )}
            />
            {errors.email && <p className="error">Correo electrónico válido es obligatorio</p>}
            
            <Controller
              name="telefono"
              control={control}
              rules={{ required: true, pattern: /^[0-9]+$/ }}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="text"
                  placeholder="Ingresa tu teléfono"
                  {...field}
                />
              )}
            />
            {errors.telefono && <p className="error">Número de teléfono válido es obligatorio</p>}

            <button className="Enviar" type="submit">
              <span>COMPRAR</span>
              <span><i className="bi bi-wallet"></i></span>
            </button>
          </form>
            <div className="botonVolver">
            <Link as={Link} to="/carrito"><i className="bi bi-caret-left-fill"></i> VOLVER</Link>
            </div>
        </div>
      </div>
    </div>
  );
};
