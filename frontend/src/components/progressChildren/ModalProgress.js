import React from 'react';

import './styles/ModalProgress.css'

function ModalProgress(){
    return(
        <div>
                <div id="modal1" className="col-12 modalmask">
                        <div className="modalbox movedown">
                            <a href="#close" title="Close" className="close">X</a>
                            <h2>INFORMATION PROJECT 1</h2>
                            <p>In this lesson, students discover how computer games are made and students are introduced to fundamental programming concepts, thinking, and programming terminology.</p>
                        </div>
                </div>
        </div>
    )   
}

export default ModalProgress