import { Provider } from 'react-redux'
import {
  BrowserRouter as Router, Switch,
  Route
} from 'react-router-dom'
import Home from './components/pages/Home'
import Recommend from './components/pages/Recommend'
import AppFrame from './components/controls/general-purpose/Appframe'

function App() {


  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/recommend'>
          <Recommend />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
