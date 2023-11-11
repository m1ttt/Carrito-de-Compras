import React, { Component } from 'react';
import './estilos/estilo.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class Formulario extends Component {

  //Estado para el formulario
  state = {
    mostrarFormulario: true,
  };


  // Mandar datos entre componentes
  handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    this.props.agregarProductoAlIndex({
      id: data.get('id'),
      descripcion: data.get('descripcion'),
      cantidad: data.get('cantidad'),
      precio: data.get('precio'),
      descuento: data.get('descuento'),
    });
    this.setState({
      mostrarFormulario: false,
    });
  };

  render() {
    return this.state.mostrarFormulario ? (
     

<div class="container mt-4">
      <form id='formulario' onSubmit={this.handleSubmit}>
        <div class="form-group">
          <label>
            ID:
            <input class="form-control" type="text" name="id" />
          </label>
          <br />
          <label>
            Descripción:
            <input class="form-control" type="text" name="descripcion" />
          </label>
          <br />
          <label>
            Cantidad:
            <input class="form-control" type="number" name="cantidad" />
          </label>
          <br />
          <label>
            Precio:
            <input class="form-control" type="number" step="0.01" name="precio" />
          </label>
          <br />
          <label>
            Descuento:
            <input class="form-control" type="number" name="descuento" />
          </label>
          <br />
          <input id='boton' class="btn btn-primary" type="submit" value="Guardar producto" />
        </div>
      </form>
      </div>
    ) : null;
  }
}

export default Formulario;