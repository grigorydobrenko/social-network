import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {Redirect, Route, withRouter} from "react-router-dom";
import {Music, News, Settings} from "./components/Draft/Pages";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";


class App extends React.Component<commonPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader/>
        }
        return (
            <div className="App-wrapper">
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route exact path='/' render={() => <Redirect to={'/login'}/>}/>
                    <Route path='/login' render={() => <Login/>}/>
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
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({isInitialized: state.app.isInitialized})

export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, {initializeApp}))(App)

type commonPropsType = mapDispatchToPropsType & mapStateToPropsType
type mapDispatchToPropsType = {
    initializeApp: () => void
}
type mapStateToPropsType = {
    isInitialized: boolean
}

