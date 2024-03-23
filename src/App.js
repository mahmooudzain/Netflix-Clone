import "./App.css";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import FavList from "./component/FavList /FavList ";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ModalMovie from "./component/ModalMovie/ModalMovie";
function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Navbar />
      {showModal ? <ModalMovie toto={showModal} momo={setShowModal} /> : null}
      <Routes>
        <Route
          path="/"
          element={<Home toto={showModal} momo={setShowModal} />}
        />
        <Route path="/FavList" element={<FavList />} />
      </Routes>
    </div>
  );
}

export default App;
