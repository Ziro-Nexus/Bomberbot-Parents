import React from 'react';

// import styles
import './style/SocialMediaFooter.css';

export default class SocialMediaFooter extends React.Component {
    render () {
        return (

            <div className="col-12 ">
                <div className="icon__bar2 d-flex align-items-center justify-content-center">
                    <a href="https://www.facebook.com/bomberbot" target="_blank" className="facebook2"><i
                            className="fa fa-facebook"></i></a>
                    <a href="https://twitter.com/gobomberbot" target="_blank" className="twitter2"><i
                            className="fa fa-twitter"></i></a>
                    <a href="https://www.youtube.com/channel/UCuwL0qLJsPXVmPoixGqpD_Q" target="_blank"
                        className="youtube2"><i className="fa fa-youtube"></i></a>
                    <a href="https://www.linkedin.com/company/bomberbot/" target="_blank" className="linkedin2"><i
                            className="fa fa-linkedin"></i></a>
                </div>
            </div>
        )
    }

}