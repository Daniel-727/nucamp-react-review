import './App.css';
import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Directory from './components/DirectoryComponent';
import {CAMPSITES} from './shared/campsites'; //CAMPSITES is wrapped in curly braces because there is no default export from campsites. CAMPSITES IS A NAMED EXPORT

class App extends Component {
    constructor(props){
        super(props); //must have super(props) as first line of constructor -required by React
        this.state = {
            campsites: CAMPSITES
        }
    }


    render() {
        return (
            <div className="App">
              <Navbar dark color='primary'>
                  <div className='container'>
                      <NavbarBrand href='/'>Nucamp</NavbarBrand>
                  </div>
              </Navbar>
              <Directory campsites={this.state.campsites}/>
            </div>
          );
        }
    }

export default App;
