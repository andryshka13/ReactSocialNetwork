import React from 'react';
import { reduxForm, submit } from 'redux-form';
import { Input, createMyField } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';
import style from './../common/FormsControls/FormsControls.module.css';
import s from './Login.module.css';
import userPhoto from './../../assets/images/users.png'



const LoginForm = ({ error, handleSubmit, captchaUrl }) => {
    return (
        <div>
            <form className={s.formLogin} onSubmit={handleSubmit}>
                <div className={s.email}>
                    {createMyField('Email', 'email', [required], Input)}
                </div>
                <div className={s.password}>
                    {createMyField('Password', 'password', [required], Input, { type: 'password' })}
                </div>
                {createMyField(null, 'remember me', [], Input, { type: 'checkbox' }, 'Remember me')}

                {captchaUrl && <img src={captchaUrl} alt="Captcha" />}
                {captchaUrl && createMyField('Symbols from image', 'captcha', [required], Input, {})}

                {error && <div className={style.formSummaryError}>
                    {error}
                </div>}
                <div>
                    <button className={s.loginButton} type={submit}>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={'/Profile'} />
    }

    return <div >
        <h1>You are not authorized</h1>
        <div className={s.avatarPhoto}>
            <img src={userPhoto} className={s.avatar} alt="Avatar" />
        </div>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);