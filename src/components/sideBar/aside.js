import React from 'react';
import './style.css'

const sideBar = ({ value }) => {
    return (
        <aside className={value}>
            <div className='nestedContainer'>
                <span>About</span>
            </div>
            <div>
                <h2>Zakat Calculator</h2>
                <p>A simple web-app calculate zakat.</p>
                <h2>Developer Info</h2>
                <p>Name: Muhammad Zubair Moosani</p>
                <i className="far fa-envelope"></i>
                <a href="mailto:muhammadzubairmoosani@gmail.com">muhammadzubairmoosani@gmail.com</a>
                <h3>Visit Link:</h3>
                <i className="fab fa-github"></i>
                <a href="https://www.github.com/muhammadzubairmoosani" target="_blank">GitHub</a>
                <p></p>
            </div>
            <footer>
                <span>W3C Validate</span>
            </footer>
        </aside>
    );
}
export default sideBar;