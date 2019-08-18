import React from 'react';
import './style.css'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            netIncome: '',
            coh: '',
            cib: '',
            gas: ''
        }
    }
    calculate(e) {
        this.setState({ [e.target.id]: Number(e.target.value) })
    }
    fn() {
        const { netIncome, cib, gas, coh, value } = this.state;
        this.setState({ value: netIncome + cib + gas + coh })
    }

    reset() {
        
        // this.setState({total: null})
        // document.getElementById('result').innerText = '';
        // document.getElementById('total').innerText = '';
        // document.getElementById('netIncome').value = '';
        // document.getElementById('coh').value = '';
        // document.getElementById('cib').value = '';
        // document.getElementById('gas').value = '';
        // console.log(this.state.total)
    }

    render() {
        const { showSideBar, closeSideBar } = this.props;
        return (
            <>
                <header>
                    <span>Zakat Calculator</span>
                    <i className="fas fa-bars" onMouseOver={showSideBar}></i>
                </header>
                <div id="main-container" onMouseOver={closeSideBar}>
                    <div id="container">
                        <div className="resultDiv">
                            <p>Zakat due</p>
                            <p>{this.state.value / 40}</p>
                        </div>
                        <div>
                            <div>
                                Total subject to Zakat: <label>{this.state.value}</label>
                            </div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Nisab<br />(Price of 85G (3oz) of pure gold)</td>
                                        <td>
                                            <p>12335</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Net Income<br />(e.g Annual salary)</td>
                                        <td><input type="text" id="netIncome" onChange={(e) => this.calculate(e)} /></td>
                                    </tr>
                                    <tr>
                                        <td>Cash on hand</td>
                                        <td><input type="text" id="coh" onChange={(e) => this.calculate(e)} /></td>
                                    </tr>
                                    <tr>
                                        <td>Cash in banks</td>
                                        <td><input type="text" id="cib" onChange={(e) => this.calculate(e)} /></td>
                                    </tr>
                                    <tr>
                                        <td>Gold and silver</td>
                                        <td><input type="text" id="gas" onChange={(e) => this.calculate(e)} /></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <button onClick={() => this.fn()}>Calculate</button>
                                            <button onClick={() => this.reset}>Reset</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}