import { Box, Typography } from "@mui/material";

interface CourseInfoIdProps {
  id: string;
}

export default function CourseInfoId({ id }: CourseInfoIdProps) {
  return (
    <Box>
      <Typography
        variant="body2"
        sx={{ color: "#9ca3af", mb: 0.5 }}
      >
        ID
      </Typography>
      <Typography sx={{ fontWeight: 500, color: "#1a1a2e" }}>
        {id}
      </Typography>
    </Box>
  );
}

