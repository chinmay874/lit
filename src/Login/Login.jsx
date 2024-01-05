import { useNavigate } from "react-router-dom";
import "../Login/Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
//import Forget_Password from "../Forget_Password/Forget_Password";
// import Hr from "../Hr_Home/Hr_Home";
export default function Login({handleSignup}) {
    const emailRegex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const PasswordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    const [Email, setEmail] = useState("");
    const [Password,setPassword]= useState("");

    const navigate = useNavigate();

    function handleEmail(e) {
        setEmail(e.target.value);         
    }

    function handlePassword(e){
        setPassword(e.target.value);
    }

    // function signUp(e) {
    //     e.preventDefault();
    //     navigate("/signUp");
    // }

    function login(e) {
        e.preventDefault(e);

        if(!emailRegex.test(Email)){
            alert("enter valid Email id")
           } 
           else if (!PasswordRegex.test(Password)){
              alert("enter valid password");
            } 
            else{
              const userRegistrationdata = JSON.parse(localStorage.getItem("User_Registration_Data"));

              let user = userRegistrationdata.find(u => u.Email === Email);

              if(user && user.Password === Password){
                // if(userRegistrationdata.Password===Password){
                 alert("Login Successfully")    
                 navigate("/home");
             } 
             else {
               alert("Please Enter Correct Email or Password");   
           }
        //    else {
        //      alert("user not registered");
        //    }
       }
    //   navigate("/home");
    }

    return (
        <div className="Login_page">
            <button className="Signup_btn" onClick={handleSignup}>SignUp</button>
            <h1 className="form_header">Login</h1>
            <form className="form" >
            <div className="email">
                <input 
                    className="user_value_email" 
                    type="email" 
                    placeholder="Enter email" 
                    name="username"

                    value={Email} 
                    onChange={handleEmail}></input>
                    {/* <label className="domain">@littuss.com</label> */}
                </div><br />
                <input 
                    className="user_value_password" 
                    type="password" 
                    placeholder="Enter Password" 
                    name="password"
                    value={Password} 
                    onChange={handlePassword}></input><br />
                <p className="reset_password"><Link to="/Forget_Password"><b>Forget Password?</b></Link></p>
                <input 
                    className="user_value" 
                    type="submit" 
                    value="Login" 
                    onClick={login}></input>
            </form>
        </div>
    )
}
