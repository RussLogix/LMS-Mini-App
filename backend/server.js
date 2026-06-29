const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const courses = [
  {
    id: "1",
    title: "Workplace Safety",
    lessons: [
      { id: "l1", title: "Introduction" },
      { id: "l2", title: "Hazards" }
    ]
  },
  {
    id: "2",
    title: "Cybersecurity Basics",
    lessons: [
      { id: "l1", title: "Passwords" },
      { id: "l2", title: "Phishing" },
      { id: "l3", title: "Safe Browsing" }
    ]
  }
];

app.get("/api/courses", (req, res) => {
  const courseList = courses.map(course => ({
    id: course.id,
    title: course.title
  }));

  res.json(courseList);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === req.params.id);

  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  res.json(course);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});