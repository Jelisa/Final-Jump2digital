import { Modal } from "./Modal.jsx";
import { useState } from "react";

export function Card(prop) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  return (
    <>
      <article className="card">
          <div className="card__superior">
              <p>{prop.data.center_id}</p>
          </div>   
        <div className="card__inferior">
            <button onClick={toggleModal} className="card__button">{prop.data.center_type}</button>
        </div>
      </article>
          {modal ? (
          <Modal>  
            <h2>MODAL RENDERING</h2>
            <p>{prop.data.center_id}</p>
            <p className="card__name">{prop.data.center_id}</p>
            <p className="card__name">{prop.data.center_type}</p>
            <p className="card__name">{prop.data.city_code}</p>
            <p className="card__name">{prop.data.op_area}</p>
            <p className="card__name">{prop.data.region_code}</p>
            <button onClick={toggleModal}>Close</button>
          </Modal>
        ) : null}
    </>
  )
}

