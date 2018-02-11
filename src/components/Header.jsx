
import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import logo from './../logo.png';

export default class Header extends Component {

    render() {
        return (
            <div style={{
                backgroundColor: '#2A0934',
                height: '150px',
                padding: '20px',
                color: '#F7F7D4'
            }}>
                <img style={{ height: '80px' }} src={logo} className="App-logo" alt="logo" />
                <Typography className="App-title">Madness Collection</Typography>

            </div>)
    }
}
