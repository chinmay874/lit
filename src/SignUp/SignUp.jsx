import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useState } from "react";
import LitDataService from "../services/lit-service";


export default function SignUp({ handleLogin }) {
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const regexPhone = /^[6-9]\d{9}$/;
  const regexName = /^[a-zA-Z]+$/;

  // const [selectRole, setSelectRole] = useState(null);
  // const [selectGender, setSelectGender] = useState(null);

  const navigate = useNavigate();

  const [input, setInput] = useState({
    First_name: "",
    Last_name: "",
    Email: "",
    Password: "",
    Mobile_Number: "",
    // Role:"",
    // Gender:"",
  })

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInput((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  function SignUp(e) {
    e.preventDefault(e);

    const existingData = JSON.parse(localStorage.getItem('User_Registration_Data')) || [];  //get existing data
    const dataArray = Array.isArray(existingData) ? existingData : [];
    const newData = [...dataArray, input];     //add new data
    const jsonData = JSON.stringify(newData);     // convert in json

    console.log(jsonData);

    if ((!input.First_name && !input.Last_name && !input.Email && !input.Mobile_number && !input.password)) {
      return alert("Please Enter all fields");
    }
    else if (!regexName.test(input.First_name)) {
      return alert("Please enter valid First_Name");
    }
    else if (!regexName.test(input.Last_name)) {
      return alert("Please enter valid Last_Name");
    }
    else if (!regexEmail.test(input.Email)) {
      return alert("Please enter valid email");
    }
    else if (!regexPassword.test(input.Password)) {
      return alert("Please enter valid Password(password must include atleast 1 capital 1 small 1 special symbol and 1 numerical character)");
    }
    else if (!regexPhone.test(input.Mobile_Number)) {
      return alert("Please enter valid Mobile no.");
    }
    
    localStorage.setItem('User_Registration_Data', jsonData); //Store in local
    alert('User Registration Successful');


    // localStorage.setItem(input, JSON.stringify(input));
    navigate("/");
  }
  // function Login(e){
  //   e.preventDefault(e);
  //     navigate("/");
  // }

  // function handleGender(value){
  //     setSelectGender(value)
  // }

  // function handleRole(value){
  //   setSelectRole(value)
  // }

  return (
    <div className="Login_page">
      {/* <h1 className="register">Sign Up</h1> */}

      <form className="sign_up_form">
        <h1 className="register">Sign Up</h1>
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
        {/* <input
            type="checkbox"
            id="Male"
            value="Female"
            checked={selectGender === 'Female'}
            onChange={() => handleGender('Female')}
            /> */}


        {/* 
            <div className="inpt">
            <label><b>Role</b></label>:
            <input 
                type="checkbox" 
                value="Super Admin"
                checked={selectRole === 'Super Admin'}
                onChange={() => handleRole('Super Admin')}/>SuperAdmin
            <input 
                type="checkbox"
                value="HR"
                checked={selectRole === 'HR'}
                onChange={() => handleRole('HR')}/>HR
            <input 
                type="checkbox"  
                value="Employee"
                checked={selectRole === 'Employee'}
                onChange={() => handleRole('Employee')}/>Employee
            </div>


            <div className="inpt">
            <label><b>Gender</b></label>:
            <input
                type="checkbox"
                id="Male"
                value="Male"
                checked={selectGender === 'Male'}
                onChange={() => handleGender('Male')}
            />
            <label>Male</label>
            <input
                type="checkbox"
                id="Male"
                value="Female"
                checked={selectGender === 'Female'}
                onChange={() => handleGender('Female')}
            />
            <label>Female</label>
            </div> */}



        <div className="signup_form_button">
          <button className="btn" onClick={SignUp}>SignUp</button>
          <button className="btn" onClick={handleLogin}>Login</button>
        </div>

      </form>



    </div>
  )
}