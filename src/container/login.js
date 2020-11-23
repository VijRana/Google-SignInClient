
import React,{Component} from 'react';
import {GoogleLogin, useGoogleLogin  } from 'react-google-login';
import refreshTokenSetup from '../util/refreshToken';

const clientId="483075148792-9bno8nnnfnqqhbvs9ck0bag9s5bftb6l.apps.googleusercontent.com";
  class login extends Component{
     onSuccess= (res)=>{
        console.log('[Login Success] currentUser', res.profileObj);
        //refresh Token
         refreshTokenSetup(res);
    };

     onFailure =(res)=>{
        console.log('[Login Failed] res', res);
    }
   render(){

    return(
        <div>
             <GoogleLogin 
             clientId={clientId}
             render={renderProps => (
               <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in</button>
             )}
             buttonText="Login"
             onSuccess={this.onSuccess}
             onFailure ={this.onFailure}
             cookiePolicy={'single_host_origin'}
             style={{marginTop:'100px'}}
             isSignedIn={true}
             />
            {/* <button  onClick ={signIn} className="button">
                <span className="buttonText" >Sign in</span>
            </button> */}
            
        </div>
   )
   }
  }
     
export default login;