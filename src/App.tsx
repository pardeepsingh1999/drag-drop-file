import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import DragDropFiles from "./Components/DragDropFiles";
import Example1 from "./Examples/Example1";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<DragDropFiles />} /> */}
          <Route path="/example1" element={<Example1 />} />

          <Route path="*" element={<Navigate replace to="/example1" />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
