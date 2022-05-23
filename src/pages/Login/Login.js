import style from './Login.module.css';
import logoPng from "../../assets/logo.png";
import cn from 'classnames';
import {ReactComponent as IconPen} from '../../assets/icon-pen.svg';
import {useState} from "react";

const Login = () => {
    const [authForm, setAuthForm] = useState();
    const [registerForm, setRegisterForm] = useState();

    const handleRegisterForm = (event) => {
        setRegisterForm(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    const handleAuthForm = (event) => {
        setAuthForm(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    const handleFormAuthSubmit = (event) => {
        event.preventDefault();
        console.log({...authForm})
        event.target.reset();
    }

    const handleFormRegisterSubmit = (event) => {
        event.preventDefault();
        console.log({...registerForm})
        event.target.reset();
    }

    const [toggleActive, setToggleActive] = useState(false);
    const toggleFunction = () => {
        setToggleActive(prevState => !prevState)
    }
    return (
        <>
            <div className={style.headerLogo}>
                <img src={logoPng}/>
            </div>
            <div className={cn(
                style.container,
                {
                    [style.active]: toggleActive
                }
            )}>
                <div className={style.card}></div>
                <div className={style.card}>
                    <div className={style.title}>
                        <h1>Login</h1>
                    </div>
                    <form onSubmit={handleFormAuthSubmit} action="" onChange={handleAuthForm}>
                        <div className={style.inputContainer}>
                            <input type="email" id="#email" name="email" required="required"/>
                            <label htmlFor="#email">Email</label>
                            <div className={style.bar}></div>
                        </div>
                        <div className={style.inputContainer}>
                            <input type="password" id="#password" name="password" required="required"/>
                            <label htmlFor="#password">Password</label>
                            <div className={style.bar}></div>
                        </div>
                        <div className={style.buttonContainer}>
                            <button><span>Go</span></button>
                        </div>
                    </form>
                </div>
                <div className={cn(style.card, style.alt)}>
                    <div className={cn(style.toggle, {
                        [style.active]: toggleActive
                    }
                    )} onClick={toggleFunction}>
                        <IconPen/>
                    </div>
                    <h1 className={style.title}>Register
                        <div className={style.close} onClick={toggleFunction}></div>
                    </h1>
                    <form onSubmit={handleFormRegisterSubmit} onChange={handleRegisterForm}>
                        <div className={style.inputContainer}>
                            <input type="email" id="#signup-email" name="email" required="required"/>
                            <label htmlFor="#signup-email">Email</label>
                            <div className={style.bar}></div>
                        </div>
                        <div className={style.inputContainer}>
                            <input type="password" id="#signup-password" name="password" required="required"/>
                            <label htmlFor="#signup-password">Password</label>
                            <div className={style.bar}></div>
                        </div>
                        <div className={style.inputContainer}>
                            <input type="password" id="#signup-repeat-password" name="repeatPassword" required="required"/>
                            <label htmlFor="#signup-repeat-password">Repeat Password</label>
                            <div className={style.bar}></div>
                        </div>
                        <div className={style.buttonContainer}>
                            <button><span>Register</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;