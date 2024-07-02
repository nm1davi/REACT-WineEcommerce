import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { ItemDetail } from '../itemdetail/ItemDetail';
import { useParams } from 'react-router-dom';
import  { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config"
import "./ItemDetailContainer.css"

export const ItemDetailConainer = (props) => {

      const [producto,setProducto] = useState(null);
      const id = useParams().id;
      useEffect(()=>{

            const docRef =  doc(db, "Productos", id);
            getDoc(docRef)
            .then((resp)=>{
                  setProducto(
                        {...resp.data(), id: resp.id}
                  );
            })
      }, [id]);

      if(!producto) return  <div className='cargando'><h1>CARGANDO...<i className="bi bi-arrow-repeat"></i></h1></div>
      return (
      <Container className='mt-4'>
            <div className='detalleVino'>
            <h1>DETALLE</h1>
            </div>
            <ItemDetail producto={producto} />
      </Container>
      )
};