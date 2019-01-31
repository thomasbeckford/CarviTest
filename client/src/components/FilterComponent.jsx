import React, { Component } from "react";
import "../styles.css";
import arrowdown from "../img/arrowdown.svg";
import arrowup from "../img/arrowup.svg";
import breadcrumb from "../img/breadcrumb.svg";

export default class FilterComponent extends Component {
  
  handleClick = name => e => {
    const { handleClick } = this.props;
    handleClick(name); // Busco al auto por su nombre, funcion courrier.
  };

  handleClick1() {
    this.setState({
      condition: !this.state.condition // Condicion del boton "Filtrar" y seteo de estado al hacer click.
    });
  }

  constructor(props) {
    super(props); // Importo todas las propiedades del constructor.
    this.state = {
      condition: false	// Antes de renderizar seteo el estado en falso, por lo que va a manejar "closeFilter"
    };
    this.handleClick1 = this.handleClick1.bind(this);
  }


  render() {
    const { brands } = this.props;

    return (

<div>

  
  <div onClick={this.handleClick1} className={this.state.condition ? "openFilter" : "closeFilter"} >
    <p> Filtrar <br /> 
    <img src={arrowdown} /> </p>
  </div>

<div className={this.state.condition ? "block" : "hide"}>
  <div className="FilterTexts">
  	<img onClick={this.handleClick1} alt="" src={arrowup}/>
    <h3>Filtros de búsqueda</h3>
    <span>4.324 resultados</span>
    <hr class="mobileHR"/>
    <p>Marca</p>
  </div>

  <div className="carBrandImages">
    {brands.map(t => (
      <button
        key={t.id}
        className="brandBut"
        onClick={this.handleClick(t.name)}>
        <img alt="" src={t.image_url} />
      </button>
    ))}
  </div>
  </div>
  </div>




    );
  }
}


