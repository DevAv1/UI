import React, { useEffect, useState } from 'react';
import './App.css';
import './styles/utilities.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Home } from './components/Home';
import { Workflow } from './components/Workflow';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { useDispatch } from 'react-redux'
import { getUsersAction } from './store/actions/users.actions';

export const App = () => {
  const [ openNav, setOpenNav ] = useState(false); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAction())
  }, [])
  
  return (
    <div className="App">
      <Router>
        <Sidebar openNav={openNav} setOpenNav={setOpenNav} />
        <div id="rightSideWrapper">
          <Header openNav={openNav} setOpenNav={setOpenNav} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/workflow" component={Workflow} />
            </Switch>
        </div>
      </Router>  

    </div>
  );
}