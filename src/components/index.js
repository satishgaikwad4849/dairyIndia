import React, { useState,useEffect } from 'react';
// import FacebookLogin from 'react-facebook-login';
import SocialLogin from './socialLogin';

const SignIn=()=>{
    // const [login, setLogin] = useState(false);
    // const [data, setData] = useState({});
    // const [picture, setPicture] = useState('');
  
    const nameChangeHandle = (e) => {
      console.log(e.target.value);
    };

    // const responseFacebook = (response) => {
    //   console.log(response);
    //   setData(response);
    //   setPicture(response.picture.data.url);
    //   if (response.accessToken) {
    //     setLogin(true);
    //   } else {
    //     setLogin(false);
    //   }
    // }
    // useEffect(()=>{
    //     fetch("http://localhost:8082/api/books").then((res)=>console.log(res,"res"))
    // },[])
  

  const loginFormSubmit=(e)=>{
    e.preventDefault();
    fetch("https://localhost:8082/facebook").then((res)=>console.log(res,"res"))
  }
    return(
        <> 
        <div>
          <div>
            <h2>DairyIndia.com</h2>
          </div>
         
          <a href="http://localhost:8082/facebook">Log in with Facebook</a>
          {/* {!login &&
                <FacebookLogin
                  appId="1075772846430637"
                  autoLoad={true}
                  fields="name,email,picture"
                  scope="public_profile,user_friends"
                  callback={responseFacebook}
                  icon="fa-facebook" 
                  size="small"/>
              }
            {login &&
              <img src={picture} roundedCircle />
            }
            {login &&
                  <h4>{data.name}
                {data.email}</h4>
        
          } */}
          <SocialLogin/>
          <form className='form_container' onSubmit={loginFormSubmit}>
            <div className="form_field">
              <div className="form_item" >
                <label className="form_label">Username or email</label>
              </div>
              <div className="form_item" >
                <input type="text" name="email" onChange={nameChangeHandle} />
              </div>
            </div>
            <div className="form_field">
              <div className="form_item">
                <label className="form_label">Password</label>
              </div>
              <div className="form_item">
                <input type="text" name="password" onChange={nameChangeHandle} />
              </div>
            </div>
            <div>
              <button type="submit" className="submit_btn">Sign in</button>
            </div>
        </form> 
      </div>
      </>
    )
}
export default SignIn;