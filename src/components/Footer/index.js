import React from 'react';
import "./style.css";
import logo from './images/logo.svg';

function Footer(props){
    return (
        <footer className="footer fixed-bottom text-center">
            <div className="footer-container mx-auto">
                {/* <span className="text-muted">Place sticky footer content here.</span> */}
                {/* <span className="text-muted mx-auto"> */}
                <ul>
                    <li><img alt="react" className="logo" src={logo}/><p className="score">Spidey Click</p></li>
                    <li><span>©<p className="instructions"> 2018 Tony Lockhart</p></span></li>
                </ul>
                {/* </span> */}
            </div>
        </footer>
    )
}

export default Footer;