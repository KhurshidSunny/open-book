import { useEffect, useState } from "react";

import Main from "./Components/Main";
import "./Components/style.css";
import Modal from "./Components/Modal";
import { SongsProvider, useBooks } from "./contexts/SongsContext";
import BookItem from "./Components/BookItem";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <SongsProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Main />} />
            <Route path="modal/:id" element={<Modal />} />
          </Routes>
        </BrowserRouter>
      </SongsProvider>
    </>
  );
}

export default App;
