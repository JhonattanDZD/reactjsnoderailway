import axios from "axios";
import { useState } from "react";

const Consulta = () => {

  const [personajes,setPersonajes] = useState([]);

    const consultar = () => {
      axios.get('http://localhost:3000/users').then((response) => {
        setPersonajes(response.data[0])
      })
    }
    return ( <>
     <div className="bg-secondary text-center fs-3">Consultar</div>
      <div className="container">
        <div className="col-md-4 mx-auto">
          <button onClick={consultar} className="btn btn-danger my-4 form-control">Consultar</button>
          {personajes.map((personaje) => {
            return(
              <div className="border rounded text-center my-4" key={personaje.id}>
                <p>{personaje.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </> );
}
 
export default Consulta;