import { Component } from "react";
import "./styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    return (
      <div className="App">



        <header>
          <h1>THIS IS A WEBSITE</h1>
          <nav>
            <ul className="headerLinks">
              <li>HOME</li>
              <li>ABOUT</li>
              <li>CONTACT</li>
            </ul>
            <ul className={`dropLinks ${this.state.showMenu ? "show" : ""}`}>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>CONTACT</li>
            </ul>
            <button onClick={this.toggleMenu}>BURGER</button>
          </nav>
        </header>


        
      </div>
    );
  }
}
