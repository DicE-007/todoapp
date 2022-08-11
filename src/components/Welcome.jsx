import { signInWithPopup , GoogleAuthProvider  } from "@firebase/auth";
import { useEffect } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router";
import './welcome.css';

const Welcome = () => {
    const provider  = new GoogleAuthProvider();
    const navigate = useNavigate();
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                navigate('/homepage')
            }
        })
    })
    const handleSignIn = () => {
        signInWithPopup(auth,provider).then(()=>{
            navigate('/homepage')
        }).catch((err)=>alert(err.message));
    }
    
    return (
        <div className="welcome">
        <h1 >todo-list</h1>
        
        <button className="sign-in-with-google" onClick={handleSignIn}>SIGN IN </button>
        
        </div>
    )
}

export default Welcome;