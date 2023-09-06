import React from "react";
import Main from "./Components/Main";
import { BrowserRouter, Routes ,Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Main />
      <Routes>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
