import { useState } from 'react';
import { useEffect } from 'react';
import './estilos/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Formulario from '../formulario/Form'; // Asegúrate de que la ruta al archivo Formulario.js sea correcta

function App() {
  const [productos, setProductos] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const [totalDescuentos, setTotalDescuentos] = useState(0);
  const [totalAPagar, setTotalAPagar] = useState(0);

  const agregarProductoAlIndex = (producto) => {
    const precio = Number(producto.precio);
    const cantidad = Number(producto.cantidad);
    const descuento = Number(producto.descuento);

    setProductos([...productos, producto]);
    setSubtotal(prevSubtotal => prevSubtotal + precio * cantidad);
    setTotalDescuentos(prevDescuentos => prevDescuentos + descuento);
    setTotalAPagar(prevTotal => prevTotal + precio * cantidad - descuento);
  }

  const handleClick = () => {
    setMostrarFormulario(true);
  }

  return (
    <Router>
      <div className="Hola">
        <nav className="navbar navbar-light bg-light" id='barra'>
          <Link to='/' className="navbar-brand" href="#">Carrito de compras</Link>
          <Link onClick={handleClick} className="btn btn-outline-success" to="/agregar">Agregar productos</Link>
        </nav>
        <div className="container">
        <h1 id='texto_Centro'>Carrito de compras</h1>
        <Routes>
          {mostrarFormulario && <Route path="/agregar" element={<Formulario agregarProductoAlIndex={agregarProductoAlIndex} />} />}
        </Routes>
        <table class='table'>
          <thead class="thead-dark">
            <tr>
              <th># ID</th>
              <th>Descripción</th>
              <th>Cantidad</th>
              <th>Precio (MXN) </th>
              <th>Descuento</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto, index) => (
              <tr key={index}>
                <th scope="row">{producto.id}</th>
                <td>{producto.descripcion}</td>
                <td>{producto.cantidad}</td>
                <td>{producto.precio}</td>
                <td>{producto.descuento ? producto.descuento : 'N/A'}</td>
              </tr>
            ))}
          </tbody>

        </table>
        <div className="container mt-4">
          <div className="row">
            <div className="col-sm">
              <div className="card card text-white bg-danger">
                <div className="card-body">
                  <h5 className="card-title">Subtotal</h5>
                  <p className="card-text">{subtotal}</p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card card text-white bg-warning">
                <div className="card-body">
                  <h5 className="card-title">Total descuentos</h5>
                  <p className="card-text">{totalDescuentos}</p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card text-white bg-success">
                <div className="card-body">
                  <h5 className="card-title">Total a pagar</h5>
                  <p className="card-text">{totalAPagar}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Router>
  );
}

export default App;