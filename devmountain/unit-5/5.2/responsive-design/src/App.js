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
                          <img class='headerImg' alt='Start Bootstrap Logo' src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg" />
                          <nav>
                            <ul class="headerLinks">
                                <li><b>SERVICES</b></li>
                                <li><b>PORTFOLIO</b></li>
                                <li><b>ABOUT</b></li>
                                <li><b>TEAM</b></li>
                                <li><b>CONTACT</b></li>
                            </ul>
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




                      <div class="mainBoxBox">
                      <div class="mainBox">
                          <div class="mainText">
                              <h2><i>Welcome To Our Studio!</i></h2>
                          </div>
                          <div class="mainText2">
                              <h1>IT'S NICE TO MEET YOU</h1>
                          </div>
                          <div >
                              <button class="mainButton"><b>TELL ME MORE</b></button>
                          </div>
                      </div>
                      
                      
                      
                      
                  </div>
                  </div>
              </div>
              <div class = "page pageTwo">


              <div class = "pageTwoBg">

                <div class="page2Box">
                <div class="mainTextPgTwo">
                      <h2>SERVICES</h2>
                </div>
                <div class="subTextPgTwo">
                      <h2><i>Lorem ipsum dolor sit amet consectetur.</i></h2>
                </div>
                </div>

              </div>
              </div>



    </div>
  );
}
}

export default App;
