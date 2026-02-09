import { Card, CardContent, Box } from "@mui/material";
import { Title } from "./Title";
import { Description } from "./Description";
import { Duration } from "./Duration";
import { AuthorsList } from "./AuthorsList";
import { EditCourseButton } from "./EditCourseButton";
import { DeleteCourseButton } from "./DeleteCourseButton";
import { ShowCourseButton } from "./ShowCourseButton";
import { CreationDate } from "./CreationDate";
import type { Course } from "@/types";

interface CourseCardProps {
  course: Course;
  authors: { id: string; name: string }[];
  onShowCourse: (course: Course) => void;
  onDeleteCourse: (courseId: string) => void;
  onEditCourse: (course: Course) => void;
}

export default function CourseCard({
  course,
  authors,
  onShowCourse,
  onDeleteCourse,
  onEditCourse,
}: CourseCardProps) {
  const courseAuthors = authors.filter((author) =>
    course.authors.includes(author.id)
  );

  return (
    <Card
      sx={{
        borderRadius: "16px",
        border: "1px solid #f3f4f6",
        transition: "transform 0.2s",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
        },
      }}
    >
      <CardContent
        sx={{ p: 3, flex: 1, display: "flex", flexDirection: "column" }}
      >
        <Title title={course.title} />

        <CreationDate date={course.creationDate} />

        <Description text={course.description} />

        <AuthorsList authors={courseAuthors} />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 3,
            pb: 3,
            borderBottom: "1px solid #f3f4f6",
          }}
        >
          <Duration duration={course.duration} />
        </Box>

        <Box sx={{ display: "flex", gap: 1, mt: "auto" }}>
          <EditCourseButton onClick={() => onEditCourse(course)} />
          <DeleteCourseButton onDelete={() => onDeleteCourse(course.id)} />
          <ShowCourseButton onClick={() => onShowCourse(course)} />
        </Box>
      </CardContent>
    </Card>
  );
}

