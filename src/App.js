import SignIn from './SignIn';
import Dashboard from './Dashboard';
import {
  BrowserRouter as Router,
  Route, Switch, Redirect,
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Redirect from="*" to="/dashboard" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
