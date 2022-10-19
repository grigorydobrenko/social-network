import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";


type FormData = {
    login: string;
    password: string;
    rememberMe: boolean
}

const LoginForm = () => {
    const {register, handleSubmit} = useForm<FormData>()

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div><input type="text" {...register('login')}/></div>
            <div><input type="text" {...register('password')}/></div>
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