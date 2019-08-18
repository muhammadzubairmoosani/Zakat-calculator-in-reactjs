import React from 'react';
import Home from '../index/home'
import './style.css'

export default class sideBar extends React.Component {
    state = {
        value: 'hide'
    }

    showSideBar = () => {
        this.setState({ value: 'show' })
    }
    closeSideBar = () => {
        this.setState({ value: 'hide' })
    }

    render() {
        return (
            <>
                <aside className={this.state.value}>
                    <div>
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
                <Home
                    showSideBar={this.showSideBar}
                    closeSideBar={this.closeSideBar}
                />
            </>
        );
    }
}