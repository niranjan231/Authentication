import { useState } from "react";

 

const Auth=()=>{
const [userId,setUserId] = useState("");
const [Password,setPassword] = useState("");
const [message,setMessage] = useState("");

 const onSignIn=(e)=>{
    e.preventDefault();
    console.log(userId,Password);

    if(userId.length<5){
        setMessage("This is not allow less the 5 cherectres")
    }else{
        setMessage("Sucessfull Login")
    }
    if(Password.length<5){
        setMessage("This is not allow less the 5 cherectres")
    }else{
        setMessage("Sucessfull Login")
    }
 }

 const handleUserId=(e)=>{
    setUserId(e.target.value);
 }
 const handlePassword=(e)=>{
    setPassword(e.target.value);
 }



    return(
        <div className="vh-100 d-flex justify-content-center align-items-center bg-info   ">
          <div style={{width:"25rem"}} className="card p-3 rounded-4 shadow-lg text-center " >
            <h4 className="text-info" >SignIn</h4>
          <form onSubmit={onSignIn} >
            <div>
                <input className="form-control m-1" type="text" value={userId}  onChange={handleUserId} id="userId" placeholder="UserId" ></input>
            </div>
            <div>
                <input className="form-control m-1" type="Password" value={Password} placeholder="password" onChange={handlePassword} id="Password" ></input>
            </div>
            <div>
                <input className="form-control bg-info text-white m-2 " type="Submit" value="signin" ></input>
            </div>
          </form>
          <div style={{color:"green"}}>
            {message}
          </div>
          </div>
        </div>
    )
}
export default Auth;