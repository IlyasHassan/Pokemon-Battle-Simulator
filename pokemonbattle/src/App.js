
/*import './App.css';*/
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import React, {Component} from 'react'
import Navbar from "./Components/layout/Navbar"
import Dashboard from "./Components/dashboard/Dashboard"
import Battle from "./Components/battle/Battle"
import PokédexOutput from "./Components/Pokédex/PokédexOutput"
import FAQ from "./Components/FAQ/FAQ"

class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/Battle" component={Battle}/>
        <Route path="/PokédexOutput" component={PokédexOutput}/>
        <Route path="/FAQ" component={FAQ}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
