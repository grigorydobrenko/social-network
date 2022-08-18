import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Music, News, Settings} from "./components/Draft/Pages";
import {ACTypes, dialogPageType, profilePageType, sidebarType} from "./redux/store";
import {CombinedState, Store} from "redux";


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
                    <Route path='/profile' render={() => <Profile profilePage={state.profilePage}
                                                                  dispatch={store.dispatch.bind(store)}
                    />}/>
                    <Route path='/dialogs' render={() => <Dialogs state={state.dialogPage}
                                                                  dispatch={store.dispatch.bind(store)}
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