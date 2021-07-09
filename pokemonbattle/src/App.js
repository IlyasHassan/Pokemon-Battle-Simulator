
/*import './App.css';*/
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import React, {Component} from 'react'
import Navbar from "./Components/layout/Navbar"
import Dashboard from "./Components/dashboard/Dashboard"
import Battle from "./Components/battle/Battle"
import Pokedex from "./Components/dashboard/Pokédex/Pokédex"
class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />

      <Switch>
        <Route path="/" component={Dashboard}/>
        <Route path="/Battle" component={Battle}/>
        <Route path="/Pokedex" component={Pokedex}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
