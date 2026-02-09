import { Button } from "@mui/material";

interface ShowCourseButtonProps {
  onClick: () => void;
}

export const ShowCourseButton = ({ onClick }: ShowCourseButtonProps) => (
  <Button
    fullWidth
    variant="outlined"
    onClick={onClick}
    sx={{ ml: "auto", borderRadius: "10px", borderColor: "#667eea", color: "#667eea" }}
  >
    Show Course
  </Button>
);
