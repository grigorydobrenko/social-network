import React from 'react';
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {LoginForm} from "../Common/FormsControls/LoginForm";

const Login = (props: commonType) => {
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginForm login={props.login} isSubmit={props.isSubmit} errorMessage={props.errorMessage}/>
        </div>
    );
};

const mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        isSubmit: state.auth.isSubmit,
        errorMessage: state.auth.errorMessage,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login);

export type commonType = mapDispatchToProps & mapStateToProps

type mapDispatchToProps = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

type mapStateToProps = {
    isSubmit: boolean
    errorMessage: string
    isAuth?: boolean
}



