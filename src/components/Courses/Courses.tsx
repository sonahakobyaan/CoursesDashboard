import { Box } from "@mui/material";
import SearchBar from "@/components/Courses/SearchBar/SearchBar.tsx";
import AddNewCourseButton from "@/components/Courses/AddNewCourseButton.tsx";
import CoursesList from "@/components/Courses/CoursesList/CoursesList.tsx";
import EmptyCoursesList from "@/components/EmptyCoursesList/EmptyCoursesList.tsx";
import type { Course } from "@/types";

interface CoursesProps {
  courses: Course[];
  authors: { id: string; name: string }[];
  searchQuery: string;
  onSearchQueryChange: (value: string) => void;
  onSearch: () => void;
  onShowCourse: (course: Course) => void;
  onDeleteCourse: (courseId: string) => void;
  onAddCourse: () => void;
  onEditCourse: (course: Course) => void;
}

export default function Courses({
  courses,
  authors,
  searchQuery,
  onSearchQueryChange,
  onSearch,
  onShowCourse,
  onDeleteCourse,
  onAddCourse,
  onEditCourse,
}: CoursesProps) {
  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 2, sm: 4, md: 8 },
        py: 4,
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          mb: 6,
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <SearchBar
          searchQuery={searchQuery}
          onSearchQueryChange={onSearchQueryChange}
          onSearch={onSearch}
        />
        <AddNewCourseButton onClick={onAddCourse} />
      </Box>

      {courses.length === 0 ? (
        <EmptyCoursesList onAddCourse={onAddCourse} />
      ) : (
        <CoursesList
          courses={courses}
          authors={authors}
          onShowCourse={onShowCourse}
          onDeleteCourse={onDeleteCourse}
          onEditCourse={onEditCourse}
        />
      )}
    </Box>
  );
}

