import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function CourseDetail() {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data))
      .catch((err) => console.error(err));
  }, [id]);

  const markCompleted = (lessonId) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  if (!course) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container">
      <Link to="/" className="back-link">
        ← Back to Courses
      </Link>

      <div className="header">
        <h1>{course.title}</h1>
        <p>Complete the lessons below.</p>
      </div>

      <h2>Lessons</h2>

      {course.lessons.map((lesson) => {
        const isCompleted = completedLessons.includes(lesson.id);

        return (
          <div key={lesson.id} className="card lesson-card">
            <span>
              {lesson.title} {isCompleted && "✅"}
            </span>

            <button
              className={isCompleted ? "completed-btn" : ""}
              onClick={() => markCompleted(lesson.id)}
            >
              {isCompleted ? "Completed" : "Mark as Completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default CourseDetail;