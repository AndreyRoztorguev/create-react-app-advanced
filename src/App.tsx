import React from 'react';
import logo from './logo.svg';
import { ReactComponent as Logo } from './logo.svg';
import './App.css';
import { Button } from 'button/Button';

function App() {
    const a = {
        a: 1,
        b: 2,
        c: 3,
        d: 3,
    };
    return (
        <div className="App">
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <Logo className="App-logo" title="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
            <Button />
        </div>
    );
}

export default App;
