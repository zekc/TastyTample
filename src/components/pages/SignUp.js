import React from 'react';

import * as Components from './Componentslogin';
import "./styleslogin.css";

function SignUp() {
    const [signIn, toggle] = React.useState(true);
     return(
     
         <Components.Container> <div className='login'>

             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form>
                     <Components.Title>Create Account</Components.Title>
                     <Components.Input type='text' placeholder='Name' />
                     <Components.Input type='email' placeholder='Email' />
                     <Components.Input type='password' placeholder='Password' />
                     <Components.Button>Sign Up</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Sign in</Components.Title>
                      <Components.Input type='email' placeholder='Email' />
                      <Components.Input type='password' placeholder='Password' />
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <Components.Button>Sigin In</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Welcome Back!</Components.Title>
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