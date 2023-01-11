import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {Redirect, Route, withRouter} from "react-router-dom";
import {Music, News, Settings} from "./components/Draft/Pages";
import {UsersContainer} from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)


class App extends React.Component<commonPropsType> {

    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert("Some error occurred")
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
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
                    <Route path='/profile/:userId?' render={() => <SuspendedProfile/>}/>
                    <Route path='/dialogs' render={() => <SuspendedDialogs/>}/>
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

export const AppContainer = compose<React.ComponentType>(withRouter, connect(mapStateToProps, {initializeApp}))(App)

type commonPropsType = mapDispatchToPropsType & mapStateToPropsType
type mapDispatchToPropsType = {
    initializeApp: () => void
}
type mapStateToPropsType = {
    isInitialized: boolean
}

