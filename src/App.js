import SignIn from './SignIn';
import SignUp from './SignUp';
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
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/signup" component={SignUp}/>          
          <Redirect from="*" to="/dashboard" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
