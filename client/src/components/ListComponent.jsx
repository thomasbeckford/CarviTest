import React, { Component } from 'react';
import '../styles.css'
import logo from '../img/carvi.svg'
import mercadolibre from '../img/mercadolibre.svg'
import seguros from '../img/seguros.svg'
import galicia from '../img/galicia.svg'

export default class ListComponent extends Component {


  constructor(props) {
    super(props);
    this.state = { imageStatus: "loading" };
  }

  handleImageLoaded() {
    this.setState({ imageStatus: "loaded" });
  }

	

 render() {
 const { cars,brand } = this.props

return (<div>
 <div className="ListComponent">
	{ cars.map(x =>
	    <div key={x.id} className="carBox"> 
			<img src={x.image_url} alt={x.id} />
		    <div >
		      <p className="carBrandName">{x.brand_name}</p>
		      <p className="carName">{x.name}</p>
		    <hr/>
		    </div>
		    <div className="carBoxFooter">
		      <span className="">Colores disponibles</span> <br/><br/>   
            	{ 
                  x.colors.map((d, index) => (
                  	<button key={index} style={{background:d.hexa}} className="carColors"></button>
                  ))
                }<br/><br/>
			</div>		
	  	</div>
    )}  

</div>







 </div>
)

	}
}