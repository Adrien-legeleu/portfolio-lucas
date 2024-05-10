import { Route, Routes } from "react-router-dom";
import { AboutMe, Contact } from "./Pages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};
export default App;
