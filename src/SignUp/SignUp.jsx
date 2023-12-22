import "./SignUp.css";

export default function SignUp(){
    return(
        <div className="Hr_page">
            <h1 className="register">Sign Up</h1>
            
        <form className="sign_up_form">
            <input
            className="inpt"
             type="text"
             name="First name"
             placeholder=" First name"
            //   value={email}
            // onChange={handleEmailchange}
            />
            <input
            className="inpt"
            type="text"
            name="Last name"
            placeholder="Last name"
            // value={Password}
            // onChange={handlePasswordchange}
            />
            <input
            className="inpt"
            type="email"
            name="Email"
            placeholder="Email Id"
            // value={Password}
            // onChange={handlePasswordchange}
            />
            <input
            className="inpt"
            type="password"
            name="password"
            placeholder="Password"
            // value={Password}
            // onChange={handlePasswordchange}
            />
            <input
            className="inpt"
            type="number"
            name="Mobile no"
            placeholder="Mobile no."
            // value={Password}
            // onChange={handlePasswordchange}
            />
            <input
            className="inpt"
            type="text"
            name="Role"
            placeholder="Role."
            // value={Password}
            // onChange={handlePasswordchange}
            />
            <input
            className="inpt"
            type="text"
            name="Gender"
            placeholder="Gender"
            // value={Password}
            // onChange={handlePasswordchange}
            />
            <div className="signup_form_button">
            <button className="btn">SignUp</button>
            <button className="btn">Login</button>
            </div>
            
            </form>
         
           
           
        </div>
    )
}