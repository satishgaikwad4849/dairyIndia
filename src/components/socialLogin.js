import React, { useCallback, useState } from 'react';
// import './app.css';
import UserInfo from './user';
import {
  LoginSocialGoogle,
  LoginSocialFacebook,
} from 'reactjs-social-login';

import {
  FacebookLoginButton,
  GoogleLoginButton
} from 'react-social-login-buttons';

// import { ReactComponent as PinterestLogo } from './assets/pinterest.svg';

const REDIRECT_URI =
  'https://plenty-planets-beam-42-118-51-2.loca.lt/account/login';
// const REDIRECT_URI = 'http://localhost:3000/account/login'

const SocialLogin = () => {
  const [provider, setProvider] = useState('');
  const [profile, setProfile] = useState();

  const onLoginStart = useCallback(() => {
    alert('login start');
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider('');
    alert('logout success');
  }, []);

  const onLogout = useCallback(() => {}, []);

  const getProfileFb=(provider,data)=>{
    let fbData={
      firstName:data.first_name,
      lastName:data.last_name,
      email:data.email,
      provider_name:provider
    }
    let fbAuthData=JSON.stringify(fbData);
    fetch('http://localhost:8082/fbLogin',
     {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body:fbAuthData,
      mode: 'cors'
    }
     );
  }

  const getProfileGoogle=(provider,data)=>{
    console.log(data,"555")
    let googleData={
      firstName:data?.given_name,
      lastName:data?.family_name,
      email:data?.email,
      provider_name:provider
    }
    let googleAuthData=JSON.stringify(googleData);

    console.log(googleAuthData,"googleAuthData")
    fetch('http://localhost:8082/googleLogin',
     {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body:googleAuthData,
      mode: 'cors'
    }
     );
  }

  return (
    <>
      {provider && profile && (
        <UserInfo provider={provider} profile={profile} onLogout={onLogout} />
      )}
      {/* <div className={`App ${provider && profile ? 'hide' : ''}`}> */}
      <div className="social_signin">
          <div>
        <LoginSocialFacebook
          appId={process.env.REACT_APP_FB_APP_ID || 694990158609403}
          fieldsProfile={
            'id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender'
          }
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          redirect_uri={REDIRECT_URI}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
            getProfileFb(provider,data);
            
          }}
          onReject={err => {
            console.log(err);
          }}
        >
          <FacebookLoginButton  className="fb_btn" iconSize="18px"/>
        </LoginSocialFacebook>
        </div>
        <div >
        <LoginSocialGoogle
          client_id={process.env.REACT_APP_GG_APP_ID || '825779831152-4adutol37dvvt0trbjp910hn80j2m2mo.apps.googleusercontent.com'}
          onLoginStart={onLoginStart}
          // redirect_uri={REDIRECT_URI}
          scope="openid profile email"
          discoveryDocs="claims_supported"
          access_type="offline"
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
            getProfileGoogle(provider,data);
          }}
          onReject={err => {
            console.log(err);
          }}
        >
          <GoogleLoginButton className="fb_btn" iconSize="18px"/>
        </LoginSocialGoogle>
        </div>
      </div>
    </>
  );
};

export default SocialLogin;