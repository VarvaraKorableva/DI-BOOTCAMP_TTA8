import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './Components/ErrorBoundary.js';
//import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { NavLink, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/HomeScreen.js'
import Profile from './Components/ProfileScreen.js'
import Shop from './Components/ShopScreen.js'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile">
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/shop">
              Shop
            </NavLink>
          </li>
        </ul>
      </nav>

      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;