import React from 'react';
import './style.css'
import Sidebar from '../sideBar/aside'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            netIncome: 0,
            cashOnHand: 0,
            cashInBank: 0,
            goldAndSilver: 0,
            value: false
        }
    }
    
    onChange = (e) => {
        (typeof e == 'object')
            ? this.setState({ [e.target.id]: Number(e.target.value) })
            : this.setState({
                total: 0,
                netIncome: 0,
                cashOnHand: 0,
                cashInBank: 0,
                goldAndSilver: 0,
            })
    }

    calculate = () => {
        const { netIncome, cashInBank, cashOnHand, goldAndSilver } = this.state;
        this.setState({ total: netIncome + cashInBank + cashOnHand + goldAndSilver })
    }

    sideBarHandle = (e) => {
        this.setState({ value: this.state.value ? !this.state.value : e })
    }

    render() {
        return (
            <>
                <Sidebar value={this.state.value} />
                <header>
                    <span>Zakat Calculator</span>
                    <i className="fas fa-bars" onMouseOver={() => this.sideBarHandle('show')}></i>
                </header>
                <div id="main-container" onMouseOver={() => this.sideBarHandle()}>
                    <div id="container">
                        <div className="resultDiv">
                            <p>Zakat due</p>
                            <p>{this.state.total / 40}</p>
                        </div>
                        <div>
                            <div>
                                Total subject to Zakat: <label>{this.state.total}</label>
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
                                        <td><input type="text" id="netIncome" value={this.state.netIncome} onChange={(e) => this.onChange(e)} /></td>
                                    </tr>
                                    <tr>
                                        <td>Cash on hand</td>
                                        <td><input type="text" id="cashOnHand" value={this.state.cashOnHand} onChange={(e) => this.onChange(e)} /></td>
                                    </tr>
                                    <tr>
                                        <td>Cash in banks</td>
                                        <td><input type="text" id="cashInBank" value={this.state.cashInBank} onChange={(e) => this.onChange(e)} /></td>
                                    </tr>
                                    <tr>
                                        <td>Gold and silver</td>
                                        <td><input type="text" id="goldAndSilver" value={this.state.goldAndSilver} onChange={(e) => this.onChange(e)} /></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <button onClick={() => this.calculate()}>Calculate</button>
                                            <button onClick={() => this.onChange('clear fields')}>Reset</button>
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