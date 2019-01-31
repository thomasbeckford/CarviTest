import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent'
import FilterComponent from './components/FilterComponent'
import ListComponent from './components/ListComponent'
import FooterComponent from './components/FooterComponent'
import axios from 'axios'
import Loadable from 'react-loadable'

// const Loader = x => Loadable({
//   loading: () => 'Cargando...',
//   loader: x 
// })

// const List = Loader(() => import('./components/ListComponent') )


class App extends Component {




  selectBrand = name => { 
    axios.get('/api/cars?name='+name)
      .then(({data}) => this.setState({
        selectedBrand: data
      }))  
  }


 constructor() {
    super()
    this.state = {
      cars: [],
      brands: [],
      selectedBrand:[],
      condition: false,
      isLoading: false,
  };

    }

    componentWillMount() {
    
    this.setState({isLoading:true});
    
    axios.get('/api/cars?name=')
      .then(({data}) => this.setState({
        cars: data
      }))
    .then(

    axios.get('/api/brands')
        .then(({data}) => this.setState({
          brands: data
        }))
     )
        .then(res => {
            this.setState({
                isLoading: false,
            })
        })
    }

 
render() {

  const { isLoading } = this.state;

        if (isLoading) {
            return "Cargando..."
        }
      
    const { cars, brands, selectedBrand } = this.state;

      return (  
      <React.Fragment>
        <HeaderComponent />  
          <FilterComponent handleClick={this.selectBrand} brands={brands} />
        { selectedBrand.length > 0
          ? <ListComponent cars={selectedBrand}/>
          : <ListComponent cars={cars} />
        }
         <FooterComponent/>
      </React.Fragment>
    );
 }


}

export default App;