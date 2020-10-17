import React from 'react';
import { Button } from 'react-bootstrap';


/*Import bootstrap */
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

import './styles/ModalProgress.css'

function ModalProgress(props){
    return(
        <>
            <Modal 
            show={props.isOpen} 
            pronHide={props.hideModal} 
            size="lg" 
            aria-labelledby="contained-modal-title-vcenter"
             centered>
                <Modal.Header>
                <Modal.Title>Hi</Modal.Title>
                </Modal.Header>
                <Modal.Body>BODY {props.data.days_exp_task}</Modal.Body>
                <Modal.Footer>
                <Button onClick={props.hideModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )   
}

export default ModalProgress