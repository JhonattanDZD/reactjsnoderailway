import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState({
    name:''
  });
  const { name } = data;
  const navigate = useNavigate();

  const agregar = () => {
    axios.post('http://localhost:3000/createUser', data).then((response) => {
      // setData(response.data);
      console.log(response);
    }).catch((err) => console.log(err))
    Swal.fire({
      title: "Agregado!",
      text: "Se ha añadido el usuario a la base de datos.",
    });
  };

  const addValue = (e) => {
    setData({
      name:e.target.value
    });
  };

  const verConsulta = () => {
    navigate("/consultas");
  };

  return (
    <>
      <div className="bg-secondary text-center fs-3">React + NodeJS</div>
      <div className="container">
        <div className="col-md-4 mx-auto">
          <form className="mx-auto my-4 " action=""></form>
          <input
            name="name"
            onChange={addValue}
            value={name}
            type="text"
            className="form-control w-2"
          />
          <button
            onClick={agregar}
            className="btn btn-success my-4 form-control"
          >
            Agregar
          </button>
          <button
            onClick={verConsulta}
            className="btn btn-warning my-4 form-control"
          >
            Ver consultas
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
