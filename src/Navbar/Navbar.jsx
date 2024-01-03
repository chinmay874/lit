import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa";


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
                <h5 className="nav_list">Home</h5>
            </li>
            <li>
                <h5 className="nav_list">Hr Management</h5>
            </li>
            <li>
                <h5 className="nav_list">Employee Management</h5>
            </li>
            <li>
            <h5 className="nav_list assets" onClick={handleAssets}>Assets</h5>
            </li>
        </ul>

        <div className="userInfo">
            <FaUserCircle className="user_icon"/>
        </div>
        </div>
    )
}