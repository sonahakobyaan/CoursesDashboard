import { Box, Typography } from "@mui/material";
import { formatDuration } from "@/services/courses.service";

interface CourseInfoDurationProps {
  duration: number;
}

export default function CourseInfoDuration({ duration }: CourseInfoDurationProps) {
  const formattedDuration = formatDuration(duration);

  return (
    <Box>
      <Typography
        variant="body2"
        sx={{ color: "#9ca3af", mb: 0.5 }}
      >
        Duration
      </Typography>
      <Typography sx={{ fontWeight: 500, color: "#1a1a2e" }}>
        {formattedDuration}
      </Typography>
    </Box>
  );
}

