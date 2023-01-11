import React from 'react';
import {connect} from "react-redux";
import {login} from "./auth-reducer";
import {AppStateType} from "../../app/redux-store";
import {Redirect} from "react-router-dom";
import {LoginForm} from "../../common/components/FormsControls/LoginForm";

const Login = (props: commonType) => {
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginForm captchaUrl={props.captchaUrl} login={props.login} isSubmit={props.isSubmit}
                       errorMessage={props.errorMessage}/>
        </div>
    );
};

const mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        isSubmit: state.auth.isSubmit,
        errorMessage: state.auth.errorMessage,
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {login})(Login);

export type commonType = mapDispatchToProps & mapStateToProps

type mapDispatchToProps = {
    login: (email: string, password: string, rememberMe: boolean, captchaUrl: string | null) => void
}

type mapStateToProps = {
    isSubmit: boolean
    errorMessage: string
    isAuth?: boolean
    captchaUrl: string | null
}



