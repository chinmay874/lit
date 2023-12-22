import Login from "../Login/Login.jsx";
import "./Main.css";


export default function Main(){
return(
    <div className="Container">
        <div className="LeftContainer">
            <h1 className="LeftContainer_header">L-it Management</h1>
            <img className="logo" src="image/LIT.jpg" alt="Company_logo"/>
            <h2 className="Company_name">L-IT TRUELY SERVICES PVT LTD</h2>
        </div>
        <div className="RightContainer">
            <Login/>
        </div>
    </div>
)
}
