import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    BrowserRouter,
    Routes,
    Route, Link
} from "react-router-dom";
import Login from './Login';
import Products from './Products';
import Admin from './Admin';
import Register from './Register';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route index element={<h1>Welcome to my Shop</h1> }/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="products" element={<Products/>}/>
                    <Route path="admin" element={<Admin/>}/>
                    <Route path="register" element={<Register/>}/>
                </Route>
            </Routes>
        </BrowserRouter>

    </React.StrictMode>
);

