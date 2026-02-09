import { useState, useEffect, useCallback } from "react";
import { Box, CircularProgress, Alert } from "@mui/material";
import { Routes, Route, Navigate, useNavigate, useParams } from "react-router-dom";
import Header from "@/components/Header/Header.tsx";
import Courses from "@/components/Courses/Courses.tsx";
import CourseInfo from "@/components/CourseInfo/CourseInfo.tsx";
import LogIn from "@/components/LogIn/LogIn.tsx";
import CourseForm from "@/components/CourseForm/CourseForm.tsx";
import ProtectedRoute from "@/components/ProtectedRoute.tsx";
import {
  getCourses,
  deleteCourse,
  getCourseById,
} from "@/services/courses.service";
import { getAuthors } from "@/services/authors.service";
import type { Course } from "@/types";
import type { Author } from "@/types";

function AppContent() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);

  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [coursesData, authorsData] = await Promise.all([
        getCourses(),
        getAuthors(),
      ]);
      setCourses(coursesData);
      setAuthors(authorsData);
      setFilteredCourses(coursesData);
    } catch (err) {
      setError("Failed to load data. Please try again.");
      console.error("Failed to fetch data:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredCourses(courses);
    } else {
      const query = searchQuery.toLowerCase();
      const results = courses.filter(
        (course) =>
          course.title.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query)
      );
      setFilteredCourses(results);
    }
  }, [searchQuery, courses]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("username");
    navigate("/login", { replace: true });
  };

  const handleShowCourse = (course: Course) => {
    navigate(`/courses/${course.id}`);
  };

  const handleDeleteCourse = async (courseId: string) => {
    try {
      await deleteCourse(courseId);
      const updatedCourses = courses.filter((course) => course.id !== courseId);
      setCourses(updatedCourses);

      if (searchQuery.trim() === "") {
        setFilteredCourses(updatedCourses);
      } else {
        const query = searchQuery.toLowerCase();
        const filteredResults = updatedCourses.filter(
          (course) =>
            course.title.toLowerCase().includes(query) ||
            course.description.toLowerCase().includes(query)
        );
        setFilteredCourses(filteredResults);
      }
    } catch (err) {
      console.error("Failed to delete course:", err);
      alert("Failed to delete course. Please try again.");
    }
  };

  const handleCourseCreated = (newCourse: Course) => {
    setCourses([...courses, newCourse]);
    setFilteredCourses([...filteredCourses, newCourse]);
    navigate("/courses");
  };

  const handleCourseUpdated = (updatedCourse: Course) => {
    const updatedCourses = courses.map((course) =>
      course.id === updatedCourse.id ? updatedCourse : course
    );
    setCourses(updatedCourses);

    if (searchQuery.trim() === "") {
      setFilteredCourses(updatedCourses);
    } else {
      const query = searchQuery.toLowerCase();
      const filteredResults = updatedCourses.filter(
        (course) =>
          course.title.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query)
      );
      setFilteredCourses(filteredResults);
    }
    navigate(`/courses/${updatedCourse.id}`);
  };

  const handleOpenCourseForm = () => {
    navigate("/courses/add");
  };

  const handleEditCourse = (course: Course) => {
    navigate(`/courses/${course.id}/edit`);
  };

  const handleCourseFormClose = () => {
    navigate("/courses");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Header onLogout={handleLogout} />

      {loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 8,
          }}
        >
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Box sx={{ width: "100%", px: 4, mt: 2 }}>
          <Alert severity="error">{error}</Alert>
        </Box>
      )}

      {!loading && !error && (
        <>
          <Courses
            courses={filteredCourses}
            authors={authors}
            searchQuery={searchQuery}
            onSearchQueryChange={setSearchQuery}
            onSearch={() => {
              if (searchQuery.trim() === "") {
                setFilteredCourses(courses);
              } else {
                const query = searchQuery.toLowerCase();
                const results = courses.filter(
                  (course) =>
                    course.title.toLowerCase().includes(query) ||
                    course.description.toLowerCase().includes(query)
                );
                setFilteredCourses(results);
              }
            }}
            onShowCourse={handleShowCourse}
            onDeleteCourse={handleDeleteCourse}
            onAddCourse={handleOpenCourseForm}
            onEditCourse={handleEditCourse}
          />

          <CourseForm
            open={false}
            onClose={handleCourseFormClose}
            onCourseCreated={handleCourseCreated}
            onCourseUpdated={handleCourseUpdated}
            course={null}
            mode="create"
          />
        </>
      )}
    </Box>
  );
}

function CoursesPage() {
  return <AppContent />;
}

function AddCoursePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("username");
    navigate("/login", { replace: true });
  };

  const handleCourseCreated = () => {
    navigate("/courses");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Header onLogout={handleLogout} />
      <CourseForm
        open={true}
        onClose={() => navigate("/courses")}
        onCourseCreated={handleCourseCreated}
        onCourseUpdated={() => navigate("/courses")}
        course={null}
        mode="create"
      />
    </Box>
  );
}

function EditCoursePage() {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();

  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      if (!courseId) {
        setError("Course ID not found");
        setLoading(false);
        return;
      }

      try {
        const courseData = await getCourseById(courseId);
        setCourse(courseData);
      } catch (err) {
        console.error("Failed to fetch course:", err);
        setError("Failed to load course. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("username");
    navigate("/login", { replace: true });
  };

  const handleCourseUpdated = () => {
    navigate("/courses");
  };

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%)",
        }}
      >
        <Header onLogout={handleLogout} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 8,
          }}
        >
          <CircularProgress />
        </Box>
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%)",
        }}
      >
        <Header onLogout={handleLogout} />
        <Box sx={{ width: "100%", px: 4, mt: 2 }}>
          <Alert severity="error">{error}</Alert>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%)",
      }}
    >
      <CourseForm
        open={true}
        onClose={() => navigate("/courses")}
        onCourseCreated={() => navigate("/courses")}
        onCourseUpdated={handleCourseUpdated}
        course={course}
        mode="edit"
      />
    </Box>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:courseId" element={<CourseInfo />} />
        <Route path="/courses/add" element={<AddCoursePage />} />
        <Route path="/courses/:courseId/edit" element={<EditCoursePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;

