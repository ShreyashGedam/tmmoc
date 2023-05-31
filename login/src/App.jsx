import { Route, Routes } from "react-router";
import { Navbar } from "./components/Navbar";
import { Register } from "./components/Register";
import { Login } from "./components/Login";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
