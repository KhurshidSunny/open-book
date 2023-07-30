import { useEffect, useState } from "react";

import Main from "./Components/Main";
import "./Components/style.css";
import Modal from "./Components/Modal";
import { SongsProvider, useBooks } from "./contexts/SongsContext";
import BookItem from "./Components/BookItem";

function App() {
  return (
    <>
      <SongsProvider>
        <Main />
      </SongsProvider>
    </>
  );
}

export default App;
