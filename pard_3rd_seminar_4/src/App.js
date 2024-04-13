import React from "react";
import MyInfo from "./Pages/MyInfo";
import UpdateInfo from "./Pages/UpdateInfo";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MyInfo />} />
      <Route path="/update" element={<UpdateInfo />} />
    </Routes>
  );
}

export default App;