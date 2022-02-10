import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import People from './pages/People';
import Page404 from './pages/Page404';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/people' component={People}/>
        <Route path='*' component={Page404}/>
      </Switch>
    </div>
  );
}

export default App;
