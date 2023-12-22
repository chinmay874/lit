import Forget_Password from "./Forget_Password/Forget_Password";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import Main from "./main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <Main/>
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<hr/>}/>
      <Route path="/Forget_Password" element={<Forget_Password/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
