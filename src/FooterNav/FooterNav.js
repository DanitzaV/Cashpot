import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../FooterNav/FooterNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

class FooterNav extends Component {
  render() {
    return (
      <div>
        <Button className='btnFooter rounded-circle shadow p-3 mb-5 bg-white rounded border border-white"'> <FontAwesomeIcon className='iconFooter' icon={faLocationArrow} /></Button>
        <div className="footer">

        </div>
      </div>
    );
  }
}
export default FooterNav;