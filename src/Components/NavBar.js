import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      top: 0,

      dropdownOpen: false
    };

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    let scrollTop = window.scrollY;
    this.setState({ top: scrollTop });
  }

  render() {
    const { top } = this.state;
    const navStyle = {
      backgroundColor: top > 0  ? "white" : "transparent",
      boxShadow: top > 0 ? "2px 3px #eee" : "none",
      opacity: top > 0 ? "0.7" : "1"
    };

    const dropStyle = {
      backgroundColor: "transparent",
      border: "none",
      color: "black",
      opacity: '1'

    };

 
        

    return (
      <Navbar style={navStyle} light className="fixed-top" expand="md">
        <NavbarToggler onClick={this.toggleNavbar} />

          <Link className="nav-link" to="/">
            CRI
          </Link>{" "}
        <Collapse isOpen={!this.state.collapsed} navbar >
          <Nav className="mr-auto" navbar></Nav>
            <Link className="nav-link" to="/map">
              Weather Map
            </Link>
            <Link className="nav-link" to="search">
              Search The Weather
            </Link>
          <div>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle style={dropStyle}>Chart</DropdownToggle>
              <DropdownMenu className='drop-menu'>
                <DropdownItem>
                  <Link className="nav-link" to="/tempchart">
                    Temperature Chart
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className="nav-link" to="/humiditychart">
                    Humidity Chart
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className="nav-link" to="/densitychart">
                    Density Chart
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
