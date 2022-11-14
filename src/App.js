import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginPage from "./component/LoginPage";
import Home from './component/Home';
import AddItem from './component/AddItem'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route exact path="/" component={Home}/>
            <Route exact path="/add" component={AddItem}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;