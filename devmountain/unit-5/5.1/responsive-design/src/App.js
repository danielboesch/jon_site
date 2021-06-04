import { render } from '@testing-library/react';
import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      showMenu: false
    }
  }

  toggleMenu = () => {
    this.setState({showMenu: !this.state.showMenu})
  }

  render(){
    return (
      <div className="App">
              <div class = "page pageOne">
                  <div class = "pageOneBgColor">



                      <header>

                          <nav>

                            <div class={'headerBlank'} onClick={this.toggleMenu}>
                              <span className='menu'>MENU ☰</span>
                            </div>
                            <ul className={`dropLinks ${this.state.showMenu ? "show" : ""}`}>
                                <li><b>SERVICES</b></li>
                                <li><b>PORTFOLIO</b></li>
                                <li><b>ABOUT</b></li>
                                <li><b>TEAM</b></li>
                                <li><b>CONTACT</b></li>
                            </ul>
                          </nav>
                      </header>
                  </div>
              </div>


    </div>
  );
}
}

export default App;
