import './App.css';
import {Card} from "./components/molecules/card/Card.jsx";

function App() {


  const fake = [
    {id: 1, ren: 1000}, {id: 2, ren: 1000}, {id: 3, ren: 1000},{id: 4, ren: 1000},{id: 5, ren: 1000},{id: 6, ren: 1000}
    ,{id: 7, ren: 1000},{id: 8, ren: 1000},{id: 9, ren: 1000},{id: 10, ren: 1000},{id: 11, ren: 1000},{id: 12, ren: 1000},
    {id: 13, ren: 1000},{id: 14, ren: 1000},{id: 15, ren: 1000},{id: 16, ren: 1000},{id: 17, ren: 1000},{id: 18, ren: 1000}
  ]

  return (
    <div className="App">
      <h1>Products</h1>
      <section className="section section-superior container-standard results">
      {fake.map(function(element){
        console.log(element)
        return (
          <Card key={element.id} data={element} />
        )
      })}
      </section>
      <h1>Stores</h1>
      <section className="section section-inferior container-standard results">
      {fake.map(function(element){
        console.log(element)
        return (
          <Card key={element.id} data={element} />
        )
      })}
      </section>
      
    </div>
    
  );
}

export default App;
