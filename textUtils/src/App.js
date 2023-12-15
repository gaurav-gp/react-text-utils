import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Text from app" /> */}
      {/* <Navbar /> */}
      <div>
          <Navbar title="TextUtils"/>
         <TextForm heading="Enter Text To Analyze"/>
      </div>
    </>
  );
}

export default App;
