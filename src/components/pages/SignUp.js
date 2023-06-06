import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Components from './Componentslogin';
import { useAuth } from '../../context/AuthContext'
import "./styleslogin.css";
import { createUserWithEmailAndPassword,
    getAuth,
signInWithEmailAndPassword
}

from 'firebase/auth';
import { Timestamp, addDoc, collection, doc, getFirestore, setDoc } from 'firebase/firestore';



function SignUp() {
    const firstNameRefReg = useRef();
    const lastNameRefReg = useRef();

    const emailRef = useRef()
    const passwordRef = useRef()

    const emailRefReg = useRef()
    const passwordRefReg = useRef()

const auth = getAuth();
const navigate = useNavigate()
const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
const { login, currentUser } = useAuth()
const { signup, currentUserReg } = useAuth()

const[registerEmail,setRegisterEmail] = React.useState("");
const[registerPassword,setRegisterPassword] = React.useState("");


useEffect(() => {
    if(currentUser) {
        navigate('/')
    }
}, [])

async function handleSubmit(e) {
    e.preventDefault();

    try {
        setError("")
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)
        navigate("/")
    } catch(e) {
        console.log(e)
        setError("Failed to sign in")
    }

    setLoading(false)
}
async function handleSubmitRegister(e) {
    e.preventDefault();

   

    try {
        setError("")
        setLoading(true)
        const credentials = await signup(emailRefReg.current.value, passwordRefReg.current.value);
        const db = getFirestore();
        await setDoc(doc(db, 'Profile', credentials.user.uid), {
            nick: '',
            firstName: firstNameRefReg.current.value,
            lastName: lastNameRefReg.current.value,
            gender: 'Male',
            caption: '',
            createdAt: Timestamp.now()
        });
        
        navigate("/")
    } catch(e) {
        console.log(e)
        setError("Failed to create an account")
    }

    setLoading(false)
}


    const register = async () => {


        try {
            const  user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword

            );
                console.log(user);
        }catch(error){

            console.log(error.message);
        }
     

    };

   
   
            
        
    const logout = async () => {};



    const [signIn, toggle] = React.useState(true);
     return(

        <div className='signup'>
     
         <Components.Container> <div className='login'>

             <Components.SignUpContainer class ="signup" signinIn={signIn}>
                 <Components.Form>
                     <Components.Title>Create Account</Components.Title>
                     <Components.Input type='text' placeholder='First Name' ref={firstNameRefReg} />
                     <Components.Input type='text' placeholder='Last Name' ref={lastNameRefReg} />
                     <Components.Input  type='email' placeholder='Email' name="email" ref={emailRefReg}/>
                     <Components.Input type='password' placeholder='Password' name="password" ref={passwordRefReg}/>
                     <Components.Button onClick={handleSubmitRegister} name='submit' >Sign Up</Components.Button>  
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Sign in</Components.Title>
                      <Components.Input  type='email' placeholder='Email'  ref={emailRef}/>
                      <Components.Input  type='password' placeholder='Password' ref={passwordRef} />
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <Components.Button  onClick={handleSubmit} >Sigin In</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Welcome Back! </Components.Title>
                     <Components.Paragraph>
                         To keep connected with us please login with your personal info
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Tasty Temple</Components.Title>
                       <Components.Paragraph>
                           Sign up now and share your best recipes with other people  
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Sign Up
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>
             </div>
         </Components.Container>
         </div>
     )
}



export default SignUp;