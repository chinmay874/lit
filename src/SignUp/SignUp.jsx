import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useState } from "react";


export default function SignUp(){
  const regexEmail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const regexPassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const regexPhone= /^[6-9]\d{9}$/;
  const regexName=/^[a-zA-Z]+$/;

    const navigate=useNavigate();

    const [input,setInput]=useState({
        First_name:"",
        Last_name:"",
        Email:"",
        Password:"",
        Mobile_Number:"",
        // Role:"",
        // Gender:"",
    })
   
    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setInput((prevData) => {
          return {...prevData, [name]: value};
        });
      };

    function SignUp(e){
        e.preventDefault(e);
        console.log(input);
        if((!input.First_name && !input.Last_name && !input.Email && !input.Mobile_number && !input.password)){
            return alert("Please Enter all fields");
          }
          else if(!regexName.test(input.First_name)){
            return alert("Please enter valid First_Name");
          }
          else if(!regexName.test(input.Last_name)){
            return alert("Please enter valid Last_Name");
          }
          else if(!regexEmail.test(input.Email)){
            return alert("Please enter valid email");
          }
          else if(!regexPassword.test(input.Password)){
            return alert("Please enter valid Password(eg. abcdfhd2)");
          }
          else if(!regexPhone.test(input.Mobile_Number)){
            console.log(input.Mobile_number);
            return alert("Please enter valid Mobile no.");
          }
           const existingData = JSON.parse(localStorage.getItem('User_Registration_Data')) || [];  //get existing data
           console.log(existingData); 
           const dataArray = Array.isArray(existingData) ? existingData : [];
           const newData = [...dataArray , input];     //add new data
           console.log(newData);
            const jsonData = JSON.stringify(newData);     // convert in json
            localStorage.setItem('User_Registration_Data', jsonData); //Store in local
            alert('User Registration data saved!');
        // localStorage.setItem(input, JSON.stringify(input));
        // alert("Sign-Up Successfully");
        navigate("/");
    }
    function Login(){
        navigate("/");
    }
    return(
        <div className="Hr_page">
            <h1 className="register">Sign Up</h1>
            
        <form className="sign_up_form">

            <input
            className="inpt"
             type="text"
             name="First_name"
             placeholder=" First name"
            onChange={handleInputChange}
            />
            <input
            className="inpt"
            type="text"
            name="Last_name"
            placeholder="Last name"
            onChange={handleInputChange}
            />
            <input
            className="inpt"
            type="email"
            name="Email"
            placeholder="Email"
            onChange={handleInputChange}
            />
            <input
            className="inpt"
            type="password"
            name="Password"
            placeholder="Password"
            onChange={handleInputChange}
            />
            <input
            className="inpt"
            type="number"
            name="Mobile_Number"
            placeholder="Mobile_Number"
            onChange={handleInputChange}
            />
            <div className="inpt">
            <label><b>Role</b></label>:
            <input type="checkbox" name="Super Admin" value="Super Admin"/>SuperAdmin
            <input type="checkbox" name="HR" value="HR"/>HR
            <input type="checkbox" name="EmployeeC" value="Employee"/>Employee
            </div>
            <div className="inpt">
            <label><b>Gender</b></label>:
            <input
            type="checkbox"
            id="Male"
            name="Male"
            value="Male"
            />
            <label>Male</label>
            <input
            type="checkbox"
            id="Male"
            name="Female"
            value="Female"
            />
            <label>Female</label>
            </div>

            <div className="signup_form_button">
            <button className="btn" onClick={SignUp}>SignUp</button>
            <button className="btn"onClick={Login}>Login</button>
            </div>
            
            </form>
         
           
           
        </div>
    )
}