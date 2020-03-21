import React from 'react';
import './App.css';
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Portfolio from "./NavBar/Portfolio/Portfolio";

function App() {
    return (
        <div className='app-wrapper'>
           <Header/>
            <NavBar/>
            <div className={'navBarTools'}>
            <Portfolio/>
            </div>
        </div>
    );
}

export default App;
