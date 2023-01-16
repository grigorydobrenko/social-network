import React from 'react';
import {connect} from "react-redux";
import {login} from "./auth-reducer";
import {AppStateType} from "../../app/redux-store";
import {Redirect} from "react-router-dom";
import {LoginForm} from "../../common/components/FormControls/LoginForm";
import styles from './Login.module.scss'

const Login = (props: commonType) => {
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div className={styles.loginContainer}>
            <div className={styles.descriptionBox}>
                <h2>Welcome Back</h2>
                <p className={styles.description}><span>To log in get registered <a
                    href="https://social-network.samuraijs.com/signUp">here</a></span>
                    <span>or use common test account credentials:</span>
                    <span>Email: <b>free@samuraijs.com</b></span>
                    <span> Password: <b>free</b></span>
                </p>
            </div>
            <div className={styles.loginForm}>
                <h3 className={styles.loginFormTitle}>Sign in</h3>
                <LoginForm captchaUrl={props.captchaUrl} login={props.login} isSubmit={props.isSubmit}
                           errorMessage={props.errorMessage}/>
            </div>
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



