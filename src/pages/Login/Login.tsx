import loginStyle from './login.module.css'

export const Login=()=>{

    return(
        <div className={loginStyle.container}>
    <form action="" className={loginStyle.form}>
        <label className={loginStyle.form__label} htmlFor="username">Имя пользователя</label>
        <input className={loginStyle.form__input} placeholder='Имя пользователя' type="text" name="username" id="username" />
        <label className={loginStyle.form__label} htmlFor="password">Пароль</label>
        <input className={loginStyle.form__input} placeholder='Пароль' type="password" name="password" id="password" />
        <button className={loginStyle.form__button} type="submit">Войти</button>
    </form>
        </div>
    )
}