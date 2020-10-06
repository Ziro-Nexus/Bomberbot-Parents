import React from 'react';

import './styles/NavSocial.css';

export default function NavSocial (){
    return (
        <div className="icon__bar">
            <a href="https://www.facebook.com/bomberbot" target="_blank" className="facebook"><i className="fa fa-facebook"></i></a>
            <a href="https://twitter.com/gobomberbot" target="_blank" className="twitter"><i className="fa fa-twitter"></i></a>
            <a href="https://www.youtube.com/channel/UCuwL0qLJsPXVmPoixGqpD_Q" target="_blank" className="youtube"><i className="fa fa-youtube"></i></a>
            <a href="https://www.linkedin.com/company/bomberbot/" target="_blank" className="linkedin"><i className="fa fa-linkedin"></i></a>
        </div> 
    )
}
