import React , {useState} from 'react'
import './Login.css'
import { auth } from './firebase'
import {login} from "./features/userSlice"
import {useDispatch} from 'react-redux'
import './styleMobile.css'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilPic, setProfilPic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault() //pas de rechargement on submit
        auth.signInWithEmailAndPassword(email, password)
        .then((userAuth => {
            dispatch(
                login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL
            })
            )
        })).catch((error) => alert(error))
    };
    const register = () => {
        if (!name){ // si pas de nom rentré retourne une alerte
            return alert('please enter a full name');
        }
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => { //si l'authentification est réussi
            userAuth.user.updateProfile({
                displayName: name,
                photoUrl: profilPic
            })
            .then(() =>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilPic
                }))
            })
        }).catch(error => alert(error))
    };

    return (
        <div className="login">
            <img src="/img/banner.png" />

            <form>
                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Full Name (required if registering)" />

                <input value={profilPic} onChange={e => setProfilPic(e.target.value)} type="text" placeholder="Profile Pic URL (optional" />

                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />

                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />

                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member ?
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
