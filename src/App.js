import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './Components/Login/Login'
import Navbar from './Components/Navbar/Navbar';
import AddBlog from './Components/AddBlog/AddBlog';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import NoMatch from './Components/NoMatch/NoMatch';


function App() {

  return (
    <Router>

      <div>
        <Navbar></Navbar>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          {/* <Route path="/users">
          <Users />
        </Route> */}
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>

    </Router>

    //   <AddBlog></AddBlog>
    //  
    // </div>
  )
}

export default App;
