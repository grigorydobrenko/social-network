import React from 'react';
import {connect} from "react-redux";
import {setAuth} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Header} from "./Header";
import {usersAPI} from "../../api/Api";


class HeaderContainer extends React.Component<propsType> {

    componentDidMount() {
        usersAPI.getAuth().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                this.props.setAuth(id, email, login)
            }
        })
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
    setAuth: (id: number, email: string, login: string) => void
}

export type propsType = mapStateToProps & mapDispatchToProps

const mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {setAuth})(HeaderContainer);