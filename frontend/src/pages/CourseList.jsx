import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error(err));
  }, []);

  return (
  <div className="container">
    <div className="header">
      <h1 className="app-title">LMS Mini App</h1>
      <p className="subtitle">Select a course to view its lessons.</p>
    </div>

    <h2 className="section-title">Courses</h2>

    {courses.map((course) => (
      <div key={course.id} className="card course-card">
        <h3>{course.title}</h3>

        <Link to={`/courses/${course.id}`}>
          <button>View Course</button>
        </Link>
      </div>
    ))}
  </div>
);
}

export default CourseList;