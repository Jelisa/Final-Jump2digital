import { Modal } from "./Modal.jsx";
import { useState } from "react";
import axios from 'axios';


export function Card(prop) {
  const [data, setData] = useState([]);

  const [modal, setModal] = useState(false);
  async function toggleModal (id) {
    setModal(!modal);
    let result = await axios(`http://localhost:4000/api/v1/centros/${id}`);
    // setData(result)
  } 
  return (
    <>
      <article className="card">
          <div className="card__superior">
            <ul className="card__details">
               <li>Identificador: {prop.data.id}</li>
              <li>Rendimiento: {prop.data.Ren}</li>
              <li>Vent of{prop.data.Vent_of}</li>
              <li>Venta producto: {prop.data.pre_venta}</li>
              <li>Producto precio venta: {prop.data.venta}</li>
            </ul>
          </div>   
        <div className="card__inferior">
            <button onClick={() => toggleModal(prop.data.id)} className="card__button">Ir a centro</button>
        </div>
      </article>
          {modal ? (
          <Modal>  
            <h2>Center ID {prop.data.id}</h2>
            <p>{prop.data.Ren}</p>
            <p>{prop.data.Vent_of}</p>
            <p>{prop.data.b_ven_of}</p>
            <p>{prop.data.id}</p>
            <p>{prop.data.pre_venta}</p>
            <p>{prop.data.venta}</p>
            <button onClick={toggleModal}>Close</button>
          </Modal>
        ) : null}
    </>
  )
}

