import { Box, Typography } from "@mui/material";

interface Author {
  id: string;
  name: string;
}

interface CourseInfoAuthorsListProps {
  authors: Author[];
}

export default function CourseInfoAuthorsList({ authors }: CourseInfoAuthorsListProps) {
  const authorsText = authors.map(a => a.name).join(", ");

  return (
    <Box>
      <Typography
        variant="body2"
        sx={{ color: "#9ca3af", mb: 0.5 }}
      >
        Authors
      </Typography>
      <Typography sx={{ fontWeight: 500, color: "#1a1a2e" }}>
        {authorsText}
      </Typography>
    </Box>
  );
}

