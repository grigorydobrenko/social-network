import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import {Route} from "react-router-dom";
import {Music, News, Settings} from "./components/Draft/Pages";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";


type AppPropsType = {}

const App: React.FC<AppPropsType> = (props) => {

    return (
        <div className="App-wrapper">
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;


