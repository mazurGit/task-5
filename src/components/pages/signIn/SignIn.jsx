import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { fetchSignIn } from "../../../store/actions/user";

const SignIn = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const signStatus = useSelector(state => state.user.userSignStatus)

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

    const onSubmit = (e) => {
        e.preventDefault()
        const data = {
            email,
            password
        }
        dispatch(fetchSignIn(data))
        .then((res) => {
            if(!res.error){
                navigate('/')
            }        
        })
    }
    const message = {
        success:'You had successfully signed in!',
        loading:'Working on it...',
        fail:'Wrong email or password!'
    }

    const MsgBlock = ({message, style}) => {
        return(
            <div style={style}>
                {message}
            </div>
        )
    }
    return (   
        <main className="sign-in-page">
        <h1 className="visually-hidden">Travel App</h1>
        <form 
            className="sign-in-form" autoComplete="off"
            onSubmit={onSubmit}
            >
            <h2 className="sign-in-form__title">Sign In</h2>
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
            <button className="button" type="submit">Sign In</button>
            <div style={{'textAlign':'center'}}>
                    {signStatus === 'loading' ? <MsgBlock message={message.loading}/> : null}
                    {signStatus === 'rejected' ? <MsgBlock message={message.fail} style={{'color':'red'}}/> : null}
                    {signStatus === 'loaded'? <MsgBlock message={message.success}/> : null } 
            </div>
        </form>
        <span>
            Already have an account?
            <Link to="/sing-up" className="sign-in-form__link">Sign Up</Link>
        </span>
        </main>
    )
}

export default SignIn