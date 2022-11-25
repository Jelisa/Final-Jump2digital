import './App.css';
import {Card} from "./components/molecules/card/Card.jsx";
import { useEffect, useState} from "react"; 
import axios from 'axios';
import { Select } from "./components/molecules/select/Select.jsx"

function App() {
  const [data, setData] = useState([]);
  const [select, setSelect] = useState("");
  useEffect(function (){
    requestData();
    async function requestData (){
      let result = await axios("http://localhost:4000/api/v1/centros?pages=2");
      setData(result.data.body) 
    }
  }, [])

  return (
    <div className="App">

      <h1 className="section heading">Products</h1>
      <section className="section section-superior container-standard ">
       <Select
          textAttribute={"Filter A"}
          isDisabled={false}
          value={select}
          handleSelect={setSelect}
          arrayForOptions={["1", "2","3"]}
        />
        <Select
          textAttribute={"Filter B"}
          isDisabled={false}
          value={select}
          handleSelect={setSelect}
          arrayForOptions={["1", "2","3"]}
        />    
      </section>
      <section className="section section-superior container-standard results">
      {data && data.map(function(element, idx){
        return (
          <Card key={idx} data={element} />
        )
      })}
      </section>
    </div>
  );
}

export default App;
