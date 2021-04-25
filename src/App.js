import {useState} from "react";
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Nav from "./Nav";
import AddPet from "./pages/AddPet"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
      const [pets, setPets] = useState([
        {
        id: 1,
        name: "Ruby",
        age: 2,
        img: "https://images.dog.ceo/breeds/terrier-american/n02093428_4552.jpg",
        isFavorite: false,
      },
      {
        id: 2,
        name: "Cat",
        age: 5,
        img: "https://www.humanesociety.org/sites/default/files/styles/1441x612/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=MnaVHwPi",
        isFavorite: false,
      }
    ])

    const removePet = (id) => {
      console.log("remobe pet", id);
      setPets(pets.filter((pet) => pet.id !== id))
    };

    const isFavorite = (id) => {
      console.log("isFavourite", id)
      setPets(pets.map((pet) => pet.id === id ? {...pet, isFavorite: !pet.isFavorite} : pet))
    }

  return (
    <>
    <Router>
        <Nav />
        <Switch>
          <Route exact path="/" 
          component={() => ([<AddPet />, <Home pets={pets} onRemove={removePet} onFavorite={isFavorite} />])}/>
          <Route path="/about" component={About}/>
        </Switch>
    </Router>
    </>
  );

}

export default App;
