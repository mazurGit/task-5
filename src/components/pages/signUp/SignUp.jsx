import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const  onInputChange = (e)=> {
        const value = e.target.value
        const name =e.target.name
        switch(name){
            case 'password':
                setPassword(value);
                break;
            case 'email':
                setEmail(value)
                break;
            default:
                break;
        }
        
    }

    const onBlur = (e) => {
        const target = e.target
        if (target.value.length < 3 ) {
            target.style.boxShadow = '0 0 2px 1px red'
        } else{
            target.style.boxShadow = ''
        }
    }

    return (
        <main className="sign-up-page">
            <h1 className="visually-hidden">Travel App</h1>
            <form className="sign-up-form" autoComplete="off">
            <h2 className="sign-up-form__title">Sign Up</h2>
            <label className="trip-popup__input input">
                <span className="input__heading">Full name</span>
                <input 
                    name="full-name" 
                    type="text" 
                    required 
                />
            </label>
            <label className="trip-popup__input input">
                <span className="input__heading">Email</span>
                <input 
                    name="email" 
                    type="email" 
                    value={email}
                    onChange={onInputChange} 
                    title="myemail@email.com" 
                    required 
                />
            </label>
            <label className="trip-popup__input input">
                <span className="input__heading">Password</span>
                <input 
                    name="password" 
                    type="password" 
                    autoComplete="new-password" 
                    minLength={3}
                    value={password}
                    onChange={onInputChange} 
                    onBlur={onBlur} 
                    title = "Minimum 3 characters"
                    required 
                />
            </label>
            <button className="button" type="submit">Sign Up</button>
            </form>
            <span>
            Already have an account?
            <Link to="/sing-in" className="sign-up-form__link">Sign In</Link>
            </span>
      </main>
    )
}

export default SignUp;