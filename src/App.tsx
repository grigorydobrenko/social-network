import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Music, News, Settings} from "./components/Draft/Pages";
import {RootStateType} from "./redux/state";



// type RootStateType = DialogsPropsType & ProfilePropsType

type AppPropsType = {
    state: RootStateType
}


const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile state={props.state.profilePage}/>}/>
                    {/*In general, render works best with functional components,
                     as they do not have lifecycle methods by default,
                     and component works best with class components.*/}
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogPage}
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