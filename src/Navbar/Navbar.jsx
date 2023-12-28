import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar(){
    const navigate=useNavigate();

    function handleAssets(){
        navigate("/assets");
    }
    return(
        <div className="navbar">
        <img src="image/LIT.jpg" alt="logo" className="img" onClick={()=>{navigate("/home")}}/>
        <ul className="nav">
            <li>
                <h4 className="nav_list">Home</h4>
            </li>
            <li>
                <h4 className="nav_list">Hr Management</h4>
            </li>
            {/* <li>
                <h4 className="nav_list">Employee Management</h4>
            </li> */}
            <li>
            <h4 className="nav_list" onClick={handleAssets}>Assets</h4>
            </li>
        </ul>

        <div className="userInfo">
            <h3>username</h3>
        </div>
        </div>
    )
}