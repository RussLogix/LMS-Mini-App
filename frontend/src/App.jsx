import { Routes, Route } from "react-router-dom";
import CourseList from "./pages/CourseList";
import CourseDetail from "./pages/CourseDetail";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CourseList />} />
      <Route path="/courses/:id" element={<CourseDetail />} />
    </Routes>
  );
}

export default App;