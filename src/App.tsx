import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {Music, News, Settings} from "./components/Draft/Pages";
import {ACTypes, dialogPageType, profilePageType, sidebarType} from "./redux/store";
import {CombinedState, Store} from "redux";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


type AppPropsType = {
    store: Store<CombinedState<{ profilePage: profilePageType; dialogPage: dialogPageType; sidebar: sidebarType; }>, ACTypes>
}

const App: React.FC<AppPropsType> = (props) => {
    const {store} = props

    const state = store.getState()

    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <NavBar state={state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile store={store}/>}
                    />
                    <Route path='/dialogs' render={() => <DialogsContainer store={store}

                    />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;