import React from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './components/Header';
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import Catalogue from "./components/Catalogue";
import Details from "./components/Details";
import Footer from "./components/Footer";
import AddProperty from "./components/AddProperty";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Profile from "./components/Profile";
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>       
          <Route path="/" exact component>{Home}</Route>
          <Route path="/aboutus" component><Aboutus /></Route>
          <Route path="/contact" component><Contact /></Route>
          <Route path="/catalogue" component><Catalogue /></Route>
          <Route path="/details" component><Details /></Route>
          <Route path="/addproperty" component><AddProperty /></Route>
          <Route path="/profile" component><Profile /></Route>
          <Route path="/login" component><Login /></Route>
          <Route path="/registration" component><Registration /></Route>
        </Switch>
      </Router>
      <Footer />
    </div>
   
 
  );
}

export default App;
