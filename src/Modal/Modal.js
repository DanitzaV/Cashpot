import React, { Component } from 'react';
import '../Modal/Modal.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'

class ModaApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel} Instrucciones</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Cajero Fuera de Servicio</ModalHeader>
          <ModalBody>
            <div>
              <FontAwesomeIcon className="iconsModal" icon={faMapMarkerAlt} />
            </div>
            <div>
            <FontAwesomeIcon className="iconsModal" icon={faClock} />
            </div>
            <div>
            <FontAwesomeIcon className="iconsModal" icon={faMobileAlt} />
            </div>
            <div>
            <FontAwesomeIcon className="iconsModal" icon={faUniversalAccess} />
            </div>
            <div>
            <FontAwesomeIcon className="iconsModal" icon={faPen} />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Omitir</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModaApp;