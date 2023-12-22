import { useNavigate } from "react-router-dom";
import "../Login/Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
//import Forget_Password from "../Forget_Password/Forget_Password";
// import Hr from "../Hr_Home/Hr_Home";
export default function Login(){
    const [email, setEmail]=useState("");
    const navigate=useNavigate();
    function signUp(e){
        e.preventDefault();
       navigate("/signUp");
    }

    function login(e){
        e.preventDefault(e);
        navigate("/home");
    }

    return(
        <div className="Login_page">
            <button className="Signup_btn" onClick={signUp}>SignUp</button>
            <h1 className="form_header">Login</h1>
            <form className="form" >  
            <div className="email">
            <input className="user_value_email" type="text" placeholder="Enter email" value={email}></input><label className="domain">@littuss.com</label>
            </div><br/>
            <input className="user_value_password" type="password" placeholder="Enter Password"></input><br/>
            <p className="reset_password"><Link to="/Forget_Password"><b>Forget Password?</b></Link></p>
            <input className="user_value" type="submit" value="Login" onClick={login}></input>            
            </form>
        </div>
    )
}