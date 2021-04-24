import {useState} from "react";
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
      const [pets, setPets] = useState([
        {
        id: 1,
        name: "Ruby",
        age: 2,
        img: "https://images.dog.ceo/breeds/terrier-american/n02093428_4552.jpg"
      },
      {
        id: 2,
        name: "Cat",
        age: 5,
        img: "https://www.humanesociety.org/sites/default/files/styles/1441x612/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=MnaVHwPi"
      }
    ])
  return (
    <>
    <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={() => <Home pets={pets}/>}/>
          <Route path="/about" component={About}/>
        </Switch>
    </Router>
    </>
  );

}

export default App;
