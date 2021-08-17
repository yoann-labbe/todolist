import './App.css';
import Main from './Components/Navigation/Main';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import New from './Components/Add/New';
import TableList from './Components/Liste/TableList';


export default function App() {
  return (
    <div >
    <Router>
    <Main />
      <Switch>
        <Route exact path="/home" component={New} />
        <Route exact path="/table" component={TableList} />
      </Switch>

    </Router>
    </div>
  );
}

