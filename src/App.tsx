import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Alert from './components/Alert/Alert';
import Navbar from './components/Navbar/Navbar';
import AlertState from './context/alert/alert.state';
import { GithubState } from './context/github/GithubState';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';


const App: React.FC = (): JSX.Element => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <Navbar />
          <div className="container pt-4">
            <Alert />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/profile/:name" component={Profile} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
