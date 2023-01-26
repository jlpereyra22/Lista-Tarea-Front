import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/style.css"
import EditarTarea from "./components/EditarTarea";
import Home from "./components/Home";


function App() {
 
  return (
  <BrowserRouter>
  <Routes>
    <Route  exact path="/" element={<Home/>}/>
    <Route  exact path="/editar/:id" element={<EditarTarea/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
