import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { useState } from "react";

function App() {

  const [mode,setMode] = useState('light')

  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })

      setTimeout(() => {
          setAlert(null)
      },1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode("dark")
      document.body.style.background = 'black';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode("light")
      document.body.style.background = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled","success");
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Text from app" /> */}
      {/* <Navbar /> */}
      <Router>
        <div>
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
            <Alert alert={alert}/>
            
              <Routes>
                <Route exact path='/about' element={<About/>}/>
                <Route exact path='/' element={<TextForm showAlert={showAlert}/>}/>
              </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;