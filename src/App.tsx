import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Music, News, Settings} from "./components/Draft/Pages";
import {storeType} from "./redux/state";


type AppPropsType = {
    store: storeType
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
                                                                  addPost={store.addPost.bind(store)}
                                                                  updateNewPostText={store.updateNewPostText.bind(store)}
                    />}/>
                    <Route path='/dialogs' render={() => <Dialogs state={state.dialogPage}
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