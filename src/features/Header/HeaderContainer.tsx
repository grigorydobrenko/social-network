import React from 'react';
import {connect} from "react-redux";
import {logout} from "../Login/auth-reducer";
import {AppStateType} from "../../app/redux-store";
import {Header} from "./Header";
import {compose} from "redux";
import {AppStatus} from "../../app/app-reducer";


class HeaderContainer extends React.Component<propsType> {
    render() {
        return <Header props={this.props}/>
    }
}


export type mapStateToProps = {
    login: string | null,
    isAuth: boolean
    appStatus: AppStatus
}

type mapDispatchToProps = {
    logout: () => void
}

export type propsType = mapStateToProps & mapDispatchToProps

const mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        appStatus: state.app.appStatus
    }
}

export default compose(connect(mapStateToProps, {logout}))(HeaderContainer)