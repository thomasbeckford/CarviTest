import React, { Component } from 'react';
import logo from '../img/carvi.svg'
import search from '../img/search.svg'

import breadcrumb from '../img/breadcrumb.svg'
import '../styles.css'

export default class HeaderComponent extends Component {
		
	render() {

		return (
<div>
	<nav className="navbar navbar-expand-lg nav" >
	  <span className="navbar-brand"><img className="imgCarvi" alt="Carvi" src={logo}/></span>
	  
	
	 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <img alt="" src={search} />
	  </button>
	 
	 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <span className="navbar-toggler-icon"></span>
	 </button>
	  
	  <div className="collapse navbar-collapse" id="navbarSupportedContent">
	    <ul className="navbar-nav mr-auto">
	      <li className="nav-item">
	        <span className="nav-link" >Catálogo</span>
	      </li>
	      <li className="nav-item">
	        <span className="nav-link" >Comprador</span>
	      </li>
	      <li className="nav-item">
	        <span className="nav-link" >SuperOfertas</span>
	      </li>
	      <li className="nav-item">
	        <span className="nav-link">Usados</span>
	      </li>
	      <li className="nav-item">
	        <span className="nav-link">Financiación</span>
	      </li>
	    </ul>
	   </div>
	</nav>
	

      <div className="breadcrumb bread">
	<img alt="" src={breadcrumb} />
	</div>


</div>



		);
	}
}
