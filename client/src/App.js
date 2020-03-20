import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import Info from './views/Info';
import New from './views/New';
import Edit from './views/Edit';

function App() {
  const style = {
    h1:{
      fontSize: '50px'
    },
    span:{
      fontWeight:'bold'
    }
  }
  return (
    <div className="App">
      <h1 style={style.h1}>Pet Shelter</h1>
      <Router>
        <Main path="/" />
        <Info path="/pet/:id" style={style}/>
        <New path="/pet/new" />
        <Edit path="/pet/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
