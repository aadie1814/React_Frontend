import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact"; 
import Product from "./component/Product";
import Login from './component/Login'; 
import Signup from "./component/Signup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route> 
            <Route path='/product' element={ <Product/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path="/Signup"element={<Signup/>}></Route>
          </Routes>
       </BrowserRouter>
        
      </header>
    </div>
  );
}
export default App;
