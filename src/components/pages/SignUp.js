import React from 'react';

import * as Components from './Componentslogin';

import "./styleslogin.css";
import { createUserWithEmailAndPassword,
    getAuth,
signInWithEmailAndPassword
}

from 'firebase/auth';



function SignUp() {


const auth = getAuth();

const[registerEmail,setRegisterEmail] = React.useState("");
const[registerPassword,setRegisterPassword] = React.useState("");
const[loginEmail,setLoginEmail] = React.useState("");
const[loginPassword,setLoginPassword] = React.useState("");


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

   
   
            const login = async () => {

              
                
                try {
                    const  user = await signInWithEmailAndPassword (
                    auth,
                    loginEmail,
                    loginPassword
        
                    ).then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        // ...
                      })
                      .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                      });
                        console.log(user);
                }catch(error){
        
                    console.log(error.message);
                }
                
        
            };
            
        
    const logout = async () => {};



    const [signIn, toggle] = React.useState(true);
     return(


     
         <Components.Container> <div className='login'>

             <Components.SignUpContainer class ="signup" signinIn={signIn}>
                 <Components.Form>
                     <Components.Title>Create Account</Components.Title>
                     <Components.Input type='text' placeholder='Name' />
                     <Components.Input  type='email' placeholder='Email' name="email" onChange={(event) => {setRegisterEmail(event.target.value)}}/>
                     <Components.Input type='password' placeholder='Password' name="password" onChange={(event) => {setRegisterPassword(event.target.value)}}/>
                     <Components.Button onClick={register} name='submit' >Sign Up</Components.Button>  
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Sign in</Components.Title>
                      <Components.Input  type='email' placeholder='Email' onChange={(event) => {setLoginEmail(event.target.value)}}/>
                      <Components.Input  type='password' placeholder='Password' onChange={(event) => {setLoginPassword(event.target.value)}} />
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <Components.Button  onClick={login} >Sigin In</Components.Button>
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
     )
}



export default SignUp;