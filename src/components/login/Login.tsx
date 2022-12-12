import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Space } from 'antd';


export const Login: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    return (
        <div className='Login_page'>
            <h4 className='text-center"'>Login</h4>
            <form onSubmit={handleSubmit((data) => console.log(data))} >
                <div className="d-flex flex-column">
                    <div className="d-flex flex-column">
                        <div>UserName</div>
                        <input {...register('username')} />
                        {errors.username && <p>Please enter userName.</p>}
                    </div>
                    <div className="d-flex flex-column">
                        <div>Password</div>
                        <input {...register('Password', { required: true })} />
                        {errors.lastName && <p>Last name is required.</p>}
                    </div>
                </div>

                <Button type="primary">Login</Button>
            </form>
        </div>
    )
}
