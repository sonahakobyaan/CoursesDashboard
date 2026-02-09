import { Box } from "@mui/material";
import CourseCard from "./CourseCard/CourseCard";
import type { Course } from "@/types";

interface CoursesListProps {
  courses: Course[];
  authors: { id: string; name: string }[];
  onShowCourse: (course: Course) => void;
  onDeleteCourse: (courseId: string) => void;
  onEditCourse: (course: Course) => void;
}

export default function CoursesList({
  courses,
  authors,
  onShowCourse,
  onDeleteCourse,
  onEditCourse,
}: CoursesListProps) {
  return (
    <Box
      sx={{
        display: "grid",
        p: 3,
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        },
        gap: 3,
      }}
    >
      {courses.map((course: Course) => (
        <CourseCard
          key={course.id}
          course={course}
          authors={authors}
          onShowCourse={onShowCourse}
          onDeleteCourse={onDeleteCourse}
          onEditCourse={onEditCourse}
        />
      ))}
    </Box>
  );
}

