import './App.css';
import {Route, Routes} from "react-router-dom";
import logo from "./img/오늘의집_logo.png";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import Profile from "./Pages/ProfilePage/Profile";
import EditProfile from "./Pages/EditPage/EditProfile";

function App() {
  return(
    <div className="App">
      {/* <div className="container"> */}
        {/* <img src={logo} className='logo' alt='logo_pic' /> */}
        {/* <RegisterPage /> */}
        
      {/* </div> */}
      {/* <Profile /> */}
      {/* <EditProfile /> */}
      <Routes>
        <Route path="/" element={<RegisterPage />}/>
        <Route path="/Profile" element={<Profile />}/>
        <Route path="/Edit" element={<EditProfile />}/>
      </Routes>
    </div>

  );
}

export default App;