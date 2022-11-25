import { Modal } from "./Modal.jsx";
import { useEffect, useState } from "react";
import axios from 'axios';
import { GraficoGalleta } from "./graficoGalleta.js"


export function Card(prop) {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);

  function toggleModal () {
    setModal(!modal);
  }

  useEffect(function(){
    fetchData()
    async function fetchData () {
        let result = await axios(`http://localhost:4000/api/v1/centros/${prop.data.id}`);
        setData(result.data.body)
        console.log(data)
  }
  // eslint-disable-next-line
  },[modal]); 
  
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
            <div className="modalDetalles">
            <h2>Center ID {prop.data.id}</h2>
              <ul>
                 <li>Biryani {data.Biryani}</li>
                 <li>Beverages {data.Beverages}</li>
                 <li> Desert {data.Desert}</li>
                 <li>Extras {data.Extras}</li>
                 <li>Fish {data.Fish}</li>
                 <li>Pasta {data.Pasta}</li>
                 <li>Pizza {data.Pizza}</li>
                 <li>Salad {data.Salad}</li>
                 <li>Seafood {data.Seafood}</li>
                 <li>Soup {data.Soup}</li>
                 <li>Starters {data.Starters}</li>
              </ul>
            <button className="card__button" onClick={toggleModal}>Close</button>
            </div>
          </Modal>
        ) : null}
    </>
  )
}

