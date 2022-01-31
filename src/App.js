import './App.css';
import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Directory from './components/DirectoryComponent';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary'>
          <div className='container'>
              <NavbarBrand href='/'>Nucamp</NavbarBrand>
          </div>
      </Navbar>
      <Directory/>
    </div>
  );
}

export default App;
