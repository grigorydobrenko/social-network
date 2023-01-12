import React from 'react';
import './App.module.scss';
import {Redirect, Route, withRouter} from "react-router-dom";
import {Music, News} from "../features/Draft/Pages";
import {UsersContainer} from "../features/Users/UsersContainer";
import HeaderContainer from "../features/Header/HeaderContainer";
import Login from "../features/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "./redux-store";
import {initializeApp} from "./app-reducer";
import Preloader from "../common/components/Preloader/Preloader";
import {withSuspense} from "../common/hoc/withSuspense";
import styles from './App.module.scss'

const DialogsContainer = React.lazy(() => import('../features/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('../features/Profile/ProfileContainer'))

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
            <div>
                <HeaderContainer/>
                <div className={styles.appContainer}>
                    <Route exact path='/' render={() => <Redirect to={'/login'}/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/profile/:userId?' render={() => <SuspendedProfile/>}/>
                    <Route path='/dialogs' render={() => <SuspendedDialogs/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
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

