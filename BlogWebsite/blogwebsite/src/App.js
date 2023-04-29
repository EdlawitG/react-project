import "./App.css";
import Login from "./Login/Login";
import Home from "./Pages/Home/Home";
import Setting from "./Pages/Home/Setting/Setting";
import Register from "./Register/Register";
// import Sidebar from "./Sidebar/Sidebar";
import Single from "./Single/Single";
import Topbar from "./Topbar/topbar";
import Write from "./Write/Write";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const user = true
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={user?<Home/>:<Register/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={user?<Login/>:<Register/>}/>
        <Route path="setting" element={<Setting/>}/>
        <Route path="post/:postId" element={user?<Single/>:<Register/>}/>
        <Route path="write" element={user?<Write/>:<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
