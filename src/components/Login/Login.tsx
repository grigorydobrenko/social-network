import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {required} from "../../utils/validators/validators";
import errorsStyles from "../Common/FormsControls/FormControls.module.css";


type FormData = {
    login: string;
    password: string;
    rememberMe: boolean
}

const LoginForm = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<FormData>()

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data)
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
            <div><input type="text" {...register('login', validateObj)} className={`${errorsStyles.outlineNone} ${loginClassName}`}/>
                {errors?.login && <div className={errorsStyles.errorMessageColor}>{errors.login.message}</div>}
            </div>
            <div><input type="text" {...register('password', validateObj)} className={`${errorsStyles.outlineNone} ${passwordClassName}`}/>
                {errors?.password && <div className={errorsStyles.errorMessageColor}>{errors.password.message}</div>}</div>
            <div><input type="checkbox" {...register('rememberMe')}/>remember me</div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}


const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
        </div>

    );
};

export default Login;