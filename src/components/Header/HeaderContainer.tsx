import React from 'react';
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Header} from "./Header";
import {compose} from "redux";


class HeaderContainer extends React.Component<propsType> {
    render() {
        return <Header props={this.props}/>
    }
}


export type mapStateToProps = {
    login: string | null,
    isAuth: boolean
}

type mapDispatchToProps = {
    logout: () => void
}

export type propsType = mapStateToProps & mapDispatchToProps

const mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default compose(connect(mapStateToProps, {logout}))(HeaderContainer)