import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './Components/ErrorBoundary.js';
//import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { NavLink, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/HomeScreen.js'
import Profile from './Components/ProfileScreen.js'
import Shop from './Components/ShopScreen.js'
import PostList from './Components/PostList.js'
import Example1 from './Components/Example1'
import Example2 from './Components/Example2'
import Example3 from './Components/Example3'

function App() {

  const postData = async () => {
    try {
      const url = 'https://webhook.site/750d5f5e-0170-4a9e-8e88-861a817bd5f8';
      const data = {
        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27
      };
  
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const responseData = await response.json();
      console.log('Response from POST request:', responseData);
    } catch (error) {
      console.error('Error in POST request:', error);
    }
  };
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

      <PostList></PostList>

      <Example1></Example1>
      <Example2></Example2>
      <Example3></Example3>


      <button onClick={postData}>Exercise 4 : Post JSON Data With React JS</button>
    </div>
  );
}

export default App;