import {Routes, BrowserRouter, Route } from "react-router-dom"
import Home from "./Pages/Home/Home";
import { useState } from "react";
import Loader from "./Components/Loader";


function App() {
  const  [ShowLoading, setShowLoading ] = useState(false)
  return (
   
      <BrowserRouter>
      {ShowLoading ? <Loader/> : null}
         < Routes>
           <Route path="/" element={<Home/>}/>
         </Routes>
      </BrowserRouter>
  );
}

export default App;
