import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/style.css"
import Home from "./components/Home";


function App() {
 
  return (
  <BrowserRouter>
  <Routes>
    <Route  exact path="/" element={<Home/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
