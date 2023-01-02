import {SubmitHandler, useForm} from "react-hook-form";
import {required} from "../../../utils/validators/validators";
import errorsStyles from "./FormControls.module.css";
import React from "react";
import {commonType} from "../../Login/Login";

export const LoginForm = (props: commonType) => {
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

export type FormData = {
    login: string;
    password: string;
    rememberMe: boolean
}