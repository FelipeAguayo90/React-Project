import { AddRoutine, Journal, Home, Error } from "./Pages";
import { Routes, Route } from "react-router-dom";
import "./style.css";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="journal" element={<Journal />} />
        <Route path="add-routine" element={<AddRoutine />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};
export default App;
