import React from 'react';
import {connect} from "react-redux";
import {auth} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Header} from "./Header";


class HeaderContainer extends React.Component<propsType> {

    componentDidMount() {
        this.props.auth()
    }

    render() {
        return <Header props={this.props}/>
    }
}


export type mapStateToProps = {
    login: string | null,
    isAuth: boolean
}

type mapDispatchToProps = {
    auth: () => void
}

export type propsType = mapStateToProps & mapDispatchToProps

const mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {auth})(HeaderContainer);