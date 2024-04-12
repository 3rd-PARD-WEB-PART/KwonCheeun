import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Articles from "./Pages/Articles";
import Article from "./Pages/Article";
import Layout from "./Pages/Layout";
import MyPage from "./Pages/Mypage";

function App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/profiles/:username" element={<Profile />}/>
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>
        <Route 
          path="/mypage"
          element={
            <MyPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
      </Route>
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
    </Routes>
  )
}

export default App;