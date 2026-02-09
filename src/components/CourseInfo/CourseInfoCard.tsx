import { Box, Card, CardContent, Typography, Divider } from "@mui/material";
import { Clock, Hash, Calendar, User, BookOpen } from "lucide-react";
import CourseInfoDescription from "./Description";
import CourseInfoDuration from "./Duration";
import CourseInfoId from "./Id";
import CourseInfoAuthorsList from "./AuthorsList";
import CourseInfoCreationDate from "./CreationDate";
import type { Course } from "@/types";

interface CourseInfoCardProps {
  course: Course;
  authors: { id: string; name: string }[];
}

export default function CourseInfoCard({ course, authors }: CourseInfoCardProps) {
  const courseAuthors = authors.filter(author => course.authors.includes(author.id));

  return (
    <Card
      sx={{
        borderRadius: "24px",
        border: "1px solid #e5e7eb",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        overflow: "hidden",
        background: "linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)",
      }}
    >
      <Box
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          py: 4,
          px: 4,
          color: "white",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
          <BookOpen size={28} />
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "white",
            }}
          >
            Course Details
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: "14px",
            opacity: 0.9,
          }}
        >
          Comprehensive information about this course
        </Typography>
      </Box>

      <CardContent sx={{ p: 0 }}>
        <Box sx={{ p: 4, pb: 2 }}>
          <CourseInfoDescription description={course.description} />
        </Box>

        <Divider sx={{ mx: 4 }} />

        <Box
          sx={{
            p: 4,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 2,
              p: 2.5,
              borderRadius: "16px",
              bgcolor: "#fef3c7",
              border: "1px solid #fde68a",
            }}
          >
            <Box
              sx={{
                bgcolor: "#f59e0b",
                borderRadius: "12px",
                p: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 44,
                height: 44,
              }}
            >
              <Clock size={22} color="white" />
            </Box>
            <Box>
              <Typography variant="body2" sx={{ color: "#92400e", fontWeight: 600, mb: 0.5 }}>
                Duration
              </Typography>
              <CourseInfoDuration duration={course.duration} />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 2,
              p: 2.5,
              borderRadius: "16px",
              bgcolor: "#dbeafe",
              border: "1px solid #93c5fd",
            }}
          >
            <Box
              sx={{
                bgcolor: "#3b82f6",
                borderRadius: "12px",
                p: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 44,
                height: 44,
              }}
            >
              <Hash size={22} color="white" />
            </Box>
            <Box>
              <Typography variant="body2" sx={{ color: "#1e40af", fontWeight: 600, mb: 0.5 }}>
                Course ID
              </Typography>
              <CourseInfoId id={course.id} />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 2,
              p: 2.5,
              borderRadius: "16px",
              bgcolor: "#dcfce7",
              border: "1px solid #86efac",
            }}
          >
            <Box
              sx={{
                bgcolor: "#22c55e",
                borderRadius: "12px",
                p: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 44,
                height: 44,
              }}
            >
              <User size={22} color="white" />
            </Box>
            <Box>
              <Typography variant="body2" sx={{ color: "#166534", fontWeight: 600, mb: 0.5 }}>
                Authors
              </Typography>
              <CourseInfoAuthorsList authors={courseAuthors} />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 2,
              p: 2.5,
              borderRadius: "16px",
              bgcolor: "#fae8ff",
              border: "1px solid #f0abfc",
            }}
          >
            <Box
              sx={{
                bgcolor: "#d946ef",
                borderRadius: "12px",
                p: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 44,
                height: 44,
              }}
            >
              <Calendar size={22} color="white" />
            </Box>
            <Box>
              <Typography variant="body2" sx={{ color: "#86198f", fontWeight: 600, mb: 0.5 }}>
                Creation Date
              </Typography>
              <CourseInfoCreationDate creationDate={course.creationDate} />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            p: 3,
            bgcolor: "#f8f9ff",
            borderTop: "1px solid #e5e7eb",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#9ca3af",
              fontSize: "13px",
            }}
          >
            Course ID: {course.id} • Last updated: {course.creationDate}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

