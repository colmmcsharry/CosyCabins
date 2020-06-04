import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';



export default class NewdropSml extends React.Component {
  constructor(props) {
    super(props);


    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
      
;
    return (
      <Dropdown direction="down" size="sm" isOpen={this.state.dropdownOpen} toggle={this.toggle}> {/*this direction works*/}
        <DropdownToggle style={this.props.style}>
           <FontAwesomeIcon icon={faSearch} size="lg" />
        </DropdownToggle>
        <DropdownMenu right className = "mydrop">
        <DropdownItem header style={{fontFamily:'quicksand', color: '#2e4c63'}}>Book a Cabin near...</DropdownItem>
          <DropdownItem tag={Link} to="/dublin" className="dropitems">Dublin</DropdownItem>
          <DropdownItem tag={Link} to="/dublin" className="dropitems">Galway</DropdownItem>
          <DropdownItem tag={Link} to="/dublin" className="dropitems">Cork</DropdownItem>
          <DropdownItem tag={Link} to="/dublin" className="dropitems">Belfast</DropdownItem>
          <DropdownItem tag={Link} to="/dublin" className="dropitems">Kerry</DropdownItem>
          
          </DropdownMenu>
      </Dropdown>
    );
  }
}