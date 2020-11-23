import logo from './logo.svg';
import './App.css';
import Login from './container/login';
import Home from './components/home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import store from './store/index';

function App() {
  const state= store.getState();
  return (
    <div className="App">
       <Router> 
       <Switch>    
          <Route exact path='/' component={Login} ></Route>    
          <Route path='/home' component={Home} ></Route>     
        </Switch> 
       </Router>
    </div>
  );
}

export default App;
