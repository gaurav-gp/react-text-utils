import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About"
import { useState } from "react";

function App() {

  const [mode,setMode] = useState('light')

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode("dark")
      document.body.style.background = 'black';
      document.body.style.color = 'white';
    }
    else{
      setMode("light")
      document.body.style.background = 'white';
      document.body.style.color = 'black';
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Text from app" /> */}
      {/* <Navbar /> */}
      <div>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
         <TextForm heading="Enter Text To Analyze" mode={mode}/>
         {/* <About heading="About Us"/> */}
      </div>
    </>
  );
}

export default App;
