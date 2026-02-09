import { Typography } from "@mui/material";

interface CourseInfoDescriptionProps {
  description: string;
}

export default function CourseInfoDescription({ description }: CourseInfoDescriptionProps) {
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          color: "#1a1a2e",
          mb: 2,
        }}
      >
        Description
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          color: "#6b7280",
          mb: 4,
          lineHeight: 1.6,
        }}
      >
        {description}
      </Typography>
    </>
  );
}

