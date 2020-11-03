import React from "react";
import { Button } from "react-bootstrap";

/* Import bootstrap */
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

import "./styles/ModalProgress.css";

function ModalProgress(props) {
  // SPLIT FOR GOALS
  const cadenaGoals = props.data.goals_projet;
  const cadenaDivGoals = cadenaGoals.split(".");
  const arrayGoals = [];
  for (let i = 0; i < 3; i++) {
    arrayGoals.push(cadenaDivGoals[i] + ".");
  }

  // SPLIT FOR SKILL
  const cadenaSkills = props.data.skill_project;
  const cadenaDivSkills = cadenaSkills.split(".");
  const arraySkills = [];
  for (let i = 0; i < 3; i++) {
    arraySkills.push(cadenaDivSkills[i] + ".");
  }

  return (
    <>
      <Modal
        show={props.isOpen}
        pronHide={props.hideModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header>
          <Modal.Title>
            <strong className="tit-modal">Important information:</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong className="des-modal">Project description:</strong>
          <p className="des-modal-content">{props.data.proj_description}</p>
          <br />

          <strong className="des-modal">Project goals:</strong>
          <p className="des-modal-content">
            {arrayGoals.map(arrGoal => (
              <li>{arrGoal}</li>
            ))}
          </p>
          <br />

          <strong className="des-modal">Project skill:</strong>
          <p className="des-modal-content">
            {arraySkills.map(arrSkills => (
              <li>{arrSkills}</li>
            ))}
          </p>
          <br />
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={props.hideModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalProgress;
