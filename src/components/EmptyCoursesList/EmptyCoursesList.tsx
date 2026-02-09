import { Box, Typography, Button } from "@mui/material";

interface EmptyCoursesListProps {
  onAddCourse: () => void;
}

export default function EmptyCoursesList({ onAddCourse }: EmptyCoursesListProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 8,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        sx={{
          fontWeight: 700,
          color: "#1a1a2e",
          mb: 2,
        }}
      >
        Your List is Empty
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          color: "#6b7280",
          mb: 4,
          lineHeight: 1.6,
        }}
      >
        Add a new course to get started
      </Typography>
      <Button
        fullWidth
        variant="contained"
        size="medium"
        onClick={onAddCourse}
        sx={{
          py: 2,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          textTransform: "none",
          maxWidth: "200px",
          minWidth: "fit-content",
          fontSize: "16px",
          fontWeight: 600,
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)",
          "&:hover": {
            boxShadow: "0 15px 40px rgba(102, 126, 234, 0.4)",
            transform: "translateY(-2px)",
          },
          transition: "all 0.3s ease",
        }}
      >
        Add new course
      </Button>
    </Box>
  );
}

