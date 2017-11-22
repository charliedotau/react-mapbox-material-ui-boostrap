import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Map from "./containers/map.js"
import TabsExampleSimple from "./components/tabs.js"

import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          
          <AppBar
            title="Menu"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            iconElementLeft={
              <IconMenu
                iconButtonElement={
                  <IconButton><MoreVertIcon /></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              >
                <MenuItem primaryText="Refresh" />
                <MenuItem primaryText="Help" />
                <MenuItem primaryText="Sign out" />
              </IconMenu>
            }
          />
          <div className="jumbotron">
            <h1>Some Title</h1>
            <p className="lead">lorem ipsem</p>
            
          </div>



          <div className="masthead">
            <div className="row">
              <div className="col-md-8">
                {/* <h3 className="text-muted">Map</h3> */}
                <Map />
             
              </div>
              <div className="col-md-4">
  
                <TabsExampleSimple />
  
              </div>
              
            </div>
          </div>  
        

          <footer className="footer">
          &nbsp;
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Panel title</h3>
            </div>
            <div className="panel-body">
              Panel content
            </div>
          </div>
            <p>&copy; 2017</p>
          </footer>

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
