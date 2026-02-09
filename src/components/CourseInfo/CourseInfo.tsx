import { useState, useEffect } from "react";
import { Box, CircularProgress, Alert } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import BackButton from "./BackButton";
import CourseInfoTitle from "./CourseInfoTitle";
import CourseInfoCard from "./CourseInfoCard";
import type { Course } from "@/types";
import type { Author } from "@/types";
import { getCourseById } from "@/services/courses.service";
import { getAuthors } from "@/services/authors.service";

export default function CourseInfo() {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  
  const [course, setCourse] = useState<Course | null>(null);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const [authorsData] = await Promise.all([
          getAuthors(),
        ]);
        setAuthors(authorsData);

        if (courseId) {
          const courseData = await getCourseById(courseId);
          setCourse(courseData);
        }
      } catch (err) {
        console.error("Failed to fetch course:", err);
        setError("Failed to load course details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [courseId]);

  const handleBack = () => {
    navigate("/courses");
  };

  if (loading) {
    return (
      <Box
        sx={{
          width: "100%",
          px: { xs: 2, sm: 4, md: 8 },
          py: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          width: "100%",
          px: { xs: 2, sm: 4, md: 8 },
          py: 4,
        }}
      >
        <BackButton onClick={handleBack} />
        <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>
      </Box>
    );
  }

  if (!course) {
    return (
      <Box
        sx={{
          width: "100%",
          px: { xs: 2, sm: 4, md: 8 },
          py: 4,
        }}
      >
        <BackButton onClick={handleBack} />
        <Alert severity="warning" sx={{ mt: 2 }}>Course not found</Alert>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 2, sm: 4, md: 8 },
        py: 4,
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box"
      }}
    >
      <BackButton onClick={handleBack} />
      <CourseInfoTitle title={course.title} />
      <CourseInfoCard course={course} authors={authors} />
    </Box>
  );
}

