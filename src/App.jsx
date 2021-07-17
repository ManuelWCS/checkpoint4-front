import './App.css'; 
import Lobby from './components/Lobby/Lobby';
import { Route, Switch } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Skills from './components/Skills/Skills';
import Home from './components/Home/Home';
import Login from './components/Profile/Login/Login';
import Card from './components/Home2/Home2';


function App() {
  return (
    <div className="App">
      
      <Switch>
      <Route exact path="/" component={Lobby}/>
      <Route path="/home" component={Home} />
      <Route path ="/profile" component={Profile}/>
      <Route path ="/skills" component={Skills}/>
      <Route path ="/Login" component={Login}/> 
      <Route path="/card" component={Card}/> 

      </Switch>
      
    
    </div>
  );
}

export default App;
