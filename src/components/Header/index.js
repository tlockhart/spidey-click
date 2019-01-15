import React from 'react';
import "./style.css";

function Header(props){
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top text-center">
                <ul className="navbar-nav mx-auto">
                    <li className="brand nav-item"><a href="/"><h3 className="icon">@</h3></a></li>
                    <li className="nav-item"><p className="instructions" id="msg">Click an image to begin!</p></li>
                    <li className="nav-item"><h3 className="score">Score: {props.score} | Top Score: {props.topScore}</h3> </li>
                </ul>
            </nav> 
            <header className="header"></header>
        </React.Fragment>
                   
    )
}

export default Header;
