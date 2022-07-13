import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { fetchSignUp } from "../../../store/actions/user";
import { useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";

const SignUp = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const dispatch = useDispatch()
    const signStatus = useSelector(state => state.user.userSignStatus)
    const navigate = useNavigate()



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
            case 'full-name':
                setName(value)
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

    const onSubmit = (e) => {
        e.preventDefault()
        const data ={
            fullName: name,
            email,
            password
        }
        dispatch(fetchSignUp(data))
        .then((res) => {
            if(!res.error){
                navigate('/')
            }        
        })

    }

    const message = {
        success:'You had successfully signed in!',
        loading:'Working on it...',
        fail:'User with this email already exist'
    }

    return (
        <main className="sign-up-page">
            <h1 className="visually-hidden">Travel App</h1>
            <form 
                className="sign-up-form" 
                autoComplete="off"
                onSubmit={onSubmit}
            >
                
            <h2 className="sign-up-form__title">Sign Up</h2>
            <label className="trip-popup__input input">
                <span className="input__heading">Full name</span>
                <input 
                    name="full-name" 
                    type="text" 
                    required 
                    value={name}
                    onChange={onInputChange}
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
                <div style={{'textAlign':'center'}}>
                    {signStatus === 'loading' ? message.loading : null}
                    {signStatus === 'rejected' ? message.fail : null}
                    {signStatus === 'loaded'? message.success : null } 
            </div>
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