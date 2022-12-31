import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {required} from "../../utils/validators/validators";
import errorsStyles from "../Common/FormsControls/FormControls.module.css";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

const LoginForm = (props: commonType) => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<FormData>()

    const onSubmit: SubmitHandler<FormData> = (data) => {
        const {login, password, rememberMe} = data
        props.login(login, password, rememberMe)
        reset()
    }

    const validateObj = {
        validate: {
            required
        }
    }

    const loginClassName = errors?.login ? errorsStyles.errorBorder : ''
    const passwordClassName = errors?.password ? errorsStyles.errorBorder : ''

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div><input type="text" {...register('login', validateObj)}
                        className={`${errorsStyles.outlineNone} ${loginClassName}`}/>
                {errors?.login && <div className={errorsStyles.errorMessageColor}>{errors.login.message}</div>}
            </div>
            <div><input type="password" {...register('password', validateObj)}
                        className={`${errorsStyles.outlineNone} ${passwordClassName}`}/>
                {errors?.password && <div className={errorsStyles.errorMessageColor}>{errors.password.message}</div>}
            </div>
            <div><input type="checkbox" {...register('rememberMe')}/>remember me</div>
            <div>
                <button>Login</button>
            </div>
            {props.isSubmit && <div className={errorsStyles.errorMessageColor}>{props.errorMessage}</div>}
        </form>
    );
}

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

type commonType = mapDispatchToProps & mapStateToProps

type mapDispatchToProps = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

type mapStateToProps = {
    isSubmit: boolean
    errorMessage: string
    isAuth?: boolean
}

type FormData = {
    login: string;
    password: string;
    rememberMe: boolean
}

