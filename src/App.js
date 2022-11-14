import './App.css';
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';
import LoginPage from "./component/LoginPage";
import Home from './component/Home';
import AddItem from './component/AddItem'
import NotFound from './component/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route exact path="/" component={Home}/>
            <Route exact path="/add" component={AddItem}/>
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;