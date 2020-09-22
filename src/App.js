import React from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Detail from './Detail/Detail';
import PageNotFound from './PageNotFound/PageNotFound';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './Profile/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Header />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route exact path = "/login" component = {Login}/>
          <Route exact path = '/detail/:id' component = {Detail}/>
          <Route exact path = '*' component = {PageNotFound} />
          <Router exact path = '/profile' component = {Profile} />

          {/* <Route exact path='/login' render={(props) => {
            return (
              <div>
              <Header {...props}/>
              <Login {...props}/>
              </div>
            )
          }}/> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
