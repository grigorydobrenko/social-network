import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App-wrapper">
            <header className='header'>
                <div className='header__img'>
                    <img src="https://cdn-icons-png.flaticon.com/512/841/841364.png" alt="logo"/>
                </div>
            </header>
            <nav className='nav'>

                    <div>Profile</div>
                    <div>Messages</div>
                    <div>News</div>
                    <div>Music</div>
                    <div>Settings</div>

            </nav>
            <body className='content'>
                main content
            </body>
        </div>
    );
}

export default App;
