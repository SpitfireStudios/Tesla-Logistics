import React from "react";
import './App.css';
import logo from '/Users/topraktosun/tesla-logistics-app/src/tesla_logo_PNG16.png';
import truck from '/Users/topraktosun/tesla-logistics-app/src/Truck4-Recovered.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Toolbar from '/Users/topraktosun/tesla-logistics-app/src/toolbar.js';
import Sidedrawer from './sidedrawer.js';
import Backdrop from './backdrop.js';
import Trackerbar from './trackerbar.js';

class App extends React.Component {
  state = {
  SidedrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {SidedrawerOpen: !prevState.SidedrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({SidedrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.SidedrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div className="main" style={{height:'100%'}}>
          <header className="header">
          <div className="navbar">
            <Toolbar Drawerclickhandler={this.drawerToggleClickHandler} />
            <Sidedrawer show={this.state.SidedrawerOpen}/>
            {backdrop}
          </div>
        </header>

<div className="Vehicle">Vehicle</div>
<div className="Currenttrip">Your Current Trip</div>

      <img className="truck-responsive" src={truck} alt="truck"/>
        <img className="img-responsive" src={logo} alt="logo"/>
<div className="Tracker">

  <div className="Trackerinfo"> To Los Angeles </div>
  <div className="Trackerinfo"> <Trackerbar/> </div>
  <div className="Trackerinfo"> 383.1 mi via I-5s </div>
  <div className="Trackerinfo"> Arrival Time 23:44 </div>

</div>

      </div>
    );
  }
}

export default App;
