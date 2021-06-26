import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { createContext, useState } from 'react';
import Login from './Components/Login/Login'
import Navbar from './Components/Navbar/Navbar';
import AddBlog from './Components/AddBlog/AddBlog';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import NoMatch from './Components/NoMatch/NoMatch';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard';
import ManageBlog from './Components/ManageBlog/ManageBlog';

export const UserContext = createContext();

function App() {
  const [loggedinUser, setLoggedinUser] = useState({});

  return (
    <UserContext.Provider value={[loggedinUser, setLoggedinUser]}>
      <Router>

        <div>
          <Navbar></Navbar>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>
            {/* <Route path="/dashboard">
              <Dashboard />
            </Route> */}
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute >
            <PrivateRoute path="/manageBlog">
              <ManageBlog />
            </PrivateRoute >
            <PrivateRoute path="/addBlog">
              <AddBlog />
            </PrivateRoute >
            <Route path="/">
              <Home />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>

      </Router>
    </UserContext.Provider>

  )
}

export default App;
