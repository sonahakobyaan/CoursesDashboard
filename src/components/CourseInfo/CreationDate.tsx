import { Box, Typography } from "@mui/material";

interface CourseInfoCreationDateProps {
  creationDate: string;
}

export default function CourseInfoCreationDate({ creationDate }: CourseInfoCreationDateProps) {
  return (
    <Box>
      <Typography
        variant="body2"
        sx={{ color: "#9ca3af", mb: 0.5 }}
      >
        Creation Date
      </Typography>
      <Typography sx={{ fontWeight: 500, color: "#1a1a2e" }}>
        {creationDate}
      </Typography>
    </Box>
  );
}

