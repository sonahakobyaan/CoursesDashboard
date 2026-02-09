import { Typography } from "@mui/material";

interface CourseInfoTitleProps {
  title: string;
}

export default function CourseInfoTitle({ title }: CourseInfoTitleProps) {
  return (
    <Typography
      variant="h4"
      component="h1"
      sx={{
        fontWeight: 700,
        color: "#1a1a2e",
        mb: 4,
      }}
    >
      {title}
    </Typography>
  );
}

