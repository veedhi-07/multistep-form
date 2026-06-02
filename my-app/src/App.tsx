import { Routes, Route } from "react-router-dom";
import Step1 from "./components/step1";
import Step2 from "./components/step2";
import Step3 from "./components/step3";
import Final from "./components/final";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Step1/>} />
      <Route path="/step2" element={<Step2 />} />
      <Route path="/step3" element={<Step3 />} />
      <Route path="/final" element={<Final />} />
    </Routes>
    // <h1>Hello</h1>
  );
}
export default App;
