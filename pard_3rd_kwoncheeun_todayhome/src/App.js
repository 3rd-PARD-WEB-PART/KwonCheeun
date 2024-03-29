import './App.css';
import logo from "./img/오늘의집_logo.png";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";

function App() {
  return(
    <div className="App">
      <div className="container">
        <img src={logo} className='logo' alt='logo_pic' />
        <RegisterPage />
      </div>
    </div>

  );
}

export default App;