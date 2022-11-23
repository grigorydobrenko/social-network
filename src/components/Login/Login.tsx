import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {required} from "../../utils/validators/validators";
import errorsStyles from "../Common/FormsControls/FormControls.module.css";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";


type FormData = {
    login: string;
    password: string;
    rememberMe: boolean
}

const LoginForm = (props: any) => {
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
            <div><input type="text" {...register('password', validateObj)}
                        className={`${errorsStyles.outlineNone} ${passwordClassName}`}/>
                {errors?.password && <div className={errorsStyles.errorMessageColor}>{errors.password.message}</div>}
            </div>
            <div><input type="checkbox" {...register('rememberMe')}/>remember me</div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}


const Login = (props: commonType) => {

    return (
        <div>
            <h1>Login</h1>
            <LoginForm login={props.login}/>
        </div>

    );
};

const mapStateToProps = () => {
    return {}
}

type commonType = mapDispatch & ReturnType<typeof mapStateToProps>

type mapDispatch = {
    login: (email: string, password: string, rememberMe: boolean) => void
}


export default connect(mapStateToProps, {login})(Login);