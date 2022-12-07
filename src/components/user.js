import { useEffect } from "react";

const UserInfo=({provider,profile,onLogout})=>{
  let profilemail=JSON.stringify({profilemail:profile.email});

  console.log(profile.email)
  // const getProfileFb=()=>{
  //   fetch('http://localhost:8082/fb',
  //    {
  //     method: 'post',
  //     headers: { 'Content-Type': 'application/json' },
  //     body:profilemail,
  //     mode: 'cors'
  //   }
  //    );
  // }

  // const getProfileGoogle=()=>{
  //   fetch('http://localhost:8082/google',
  //    {
  //     method: 'post',
  //     headers: { 'Content-Type': 'application/json' },
  //     body:profilemail,
  //     mode: 'cors'
  //   }
  //    );
  // }
  // useEffect(()=>{
  //   if(provider == "facebook"){
  //     getProfileFb();
  //   }else if(provider == "google"){
  //     getProfileGoogle();
  //   }
   
 
  // },[])
    return(
        <>
          <div>
            {console.log(profile,provider,"fb info")}
            {/* <button onClick={()=>{getProfile();}}>My data</button> */}
          </div>
        </>
    )
}
export default UserInfo;