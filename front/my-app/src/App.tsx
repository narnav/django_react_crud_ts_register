import React from 'react';
import { Outlet } from 'react-router';
import './App.css';
import MyNav from './MyNav';

function App() {
  return (
    <div className="App">
          <MyNav/>
      <div style={{display:'flex'}}>
        <div style={{padding:"20%",backgroundColor:"gray"}}>Left</div>
        <div style={{padding:"20%",backgroundColor:"whitesmoke"}}><Outlet/></div>
      </div>
    </div>
  );
}

export default App;
