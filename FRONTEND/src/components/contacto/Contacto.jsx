import { useForm, Controller } from "react-hook-form";
import "./Contacto.css";
import WineGlass from "../../assets/img/wineglass.png";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useState } from "react";
import Swal from 'sweetalert2';

export const Contacto = () => {
  const [consultaId, setConsultaId] = useState("");
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset, // Agrega reset a las opciones de useForm
  } = useForm();

  const enviar = (data) => {
    const consulta = {
      cliente: data,
    };
    console.log(consulta);
    const consultaRef = collection(db, "Consultas");
    addDoc(consultaRef, consulta)
      .then((doc) => {
        Swal.fire({
          title: data.nombre + ' tu número de consulta es: ' + doc.id,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
        setConsultaId(doc.id);
        reset();
      });
  };

  return (
    <div className="TituloFormulario">
      <h1>Formulario</h1>
      <div className="containerFormulario">
        <div className="ImagenFormulario">
          <img src={WineGlass} alt="Imagen del Formulario" />
        </div>
        <div className="InputsFormulario">
          <form onSubmit={handleSubmit(enviar)}>
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
            <Controller
              name="consulta"
              control={control}
              rules={{ required: true }} // Puedes ajustar las reglas según tus necesidades
              defaultValue=""
              render={({ field }) => (
                <textarea className="textarea-grande"
                  placeholder="Ingresa tu consulta"
                  {...field}
                />
              )}
            />
            {errors.consulta && <p className="error">Campo obligatorio</p>}

            <button className="Enviar" type="submit">
              <span>ENVIAR</span>
              <span><i className="bi bi-send"></i></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
