import React, { Component } from 'react';
import '../styles.css'
import logo from '../img/carvi.svg'
import mercadolibre from '../img/mercadolibre.svg'
import seguros from '../img/seguros.svg'
import galicia from '../img/galicia.svg'
import fb from '../img/fb.svg'
import linkedin from '../img/linkedin.svg'

export default class FooterComponent extends Component {
	render() {
		return (
			<div>


<div className="CarBottomFooter">
	<img src={logo} alt="" /><br />
	<hr/>
	<img className="social" src={fb} alt="" />
	<img className="social" src={linkedin} alt="" />

	<p>
		mapa de sitio
	</p>
	<span>
		Catálogo<br/>
		Comparador<br/>
		SuperOfertas<br/>
		Usados<br/>
		Financiación<br/>
		Preguntas frecuentes<br />
	</span><br />
		<p>
		atencion clientes
	</p>
<span>
	contacto@carvi.com
0810-220-0811
</span>

<p>ATENCIÓN CONCESIONARIAS</p>
<span>concesionarias@carvi.com</span>

<p>localidades</p>
<span>C.A.B.A & GBA<br/>
Rosario<br/>
Córdoba<br/>
Mendoza<br/>
La Plata</span><br/>

<p>partners</p>

<img className="Partners" alt="" src={mercadolibre} />
<img className="Partners" alt="" src={galicia} />
<img className="Partners" alt="" src={seguros} />



<div className="BottomFooter">
<p>Copyright © 2018 Carvi</p>

<span>Política de privacidad<br />
Términos y condiciones</span>
</div>


</div>




			</div>
		);
	}
}
