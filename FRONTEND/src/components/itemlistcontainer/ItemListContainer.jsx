import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { ItemList } from '../itemlist/ItemList';
import { useParams } from 'react-router-dom';
import  { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config"
import "./ItemListContainer.css";

export const ItemListConainer = () => {

      const [productos,setProductos] = useState([]);
      const id=useParams().id;


      useEffect(()=>{
            const productosRef = collection(db, "Productos");
            const q = id ? query(productosRef, where("categoria","==", id)) : productosRef;

            getDocs(q)
            .then((resp)=>{
                  setProductos(
                        resp.docs.map((doc)=>{
                              return{...doc.data(), id: doc.id };
                        })
                  )
            })
      }, [id]);

      return (
      <div className='contenedor'> 
                  <Container className='mt-4'>
                  <div className='tituloContenedor'>
                        <h2>BIENVENIDO A NUESTRA TIENDA <i className="bi bi-bag-plus-fill"></i></h2>
                  </div>
                  <div className='Cards'>
                        <ItemList  productos={productos} />
                  </div>
            </Container>
      </div>
      )
};