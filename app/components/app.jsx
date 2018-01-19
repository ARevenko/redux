import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './app.less';

import LeftMenu from './left-menu/left-menu.jsx';
import TopMenu from './top-menu/top-menu.jsx';
import Home from './work-space/home/home.jsx';

import GenreController from '../controllers/genreController.js';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="main">
          <TopMenu />
          <Router>
            <div>
              <div className="main__left-menu">
                <LeftMenu />
              </div>
              <div className="main__work-place">
                <Route exact path="/administrationapi" component={Home} />
                <Route path="/administrationapi/genre" component={GenreController} />
              </div>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    )
  }
};

export default App;