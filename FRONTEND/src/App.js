import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ItemListConainer } from "./components/itemlistcontainer/ItemListContainer";
import { ItemDetailConainer } from "./components/itemdetailcontainer/ItemDetailContainer";
import { NavBar } from "./components/navbar/NavBar";
import { Contacto } from "./components/contacto/Contacto";
import { CartProvider } from "./components/contexto/CartContext";
import Carrito from "./components/carrito/Carrito";
import Footer from "./components/footer/Footer"
import { Envio } from "./components/envio/Envio";





function App() {


  return (
    <div>
      <CartProvider>

        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListConainer greeting="Hola" />} />
            <Route path="/categoria/:id" element={<ItemListConainer greeting="Hola" />} />
            <Route path="/item/:id" element={<ItemDetailConainer />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/envio" element={<Envio />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>

    </div>
  );
}

export default App;
