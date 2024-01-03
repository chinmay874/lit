import "../Hr_Home/Hr_Home.css"
import Navbar from "../Navbar/Navbar"
import SideBar from "../SideBar/SideBar"

export default function Hr(){
    return(
        <div className="home">
            <Navbar/>
            <div className="Home_partition">
                <div className="sidebar">
                    <SideBar/>
                </div>
                <div className="home">
                    <p>Home</p>
                </div>
            
            <p></p>
            </div>
        </div>
    )
}