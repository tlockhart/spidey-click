import React from 'react';
import "./style.css";
//import logo from './logo.svg';

function Footer(props){
    return (
        <footer className="footer fixed-bottom text-center">
            <div className="footer-container mx-auto">
                {/* <span className="text-muted">Place sticky footer content here.</span> */}
                {/* <span className="text-muted mx-auto"> */}
                <ul>
                    <li><img alt="react" src="/assets/images/logo.png"/>Clicky Game </li>
                    <li>© 2018 Tony Lockhart</li>
                </ul>
                {/* </span> */}
            </div>
        </footer>
    )
}

export default Footer;