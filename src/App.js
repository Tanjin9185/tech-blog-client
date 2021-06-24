import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './Components/Login/Login'
import AddBlog from './Components/AddBlog/AddBlog';
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';


function App() {

  return (
    <Router>

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        {/* <Route path="/users">
          <Users />
        </Route> */}
        <Route path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>

    </Router>

    //   <AddBlog></AddBlog>
    //  
    // </div>
  )
}

export default App;
