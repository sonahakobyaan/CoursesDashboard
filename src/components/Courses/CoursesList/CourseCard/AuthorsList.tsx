import { Box, Avatar, Typography } from "@mui/material";

interface Author {
  id: string;
  name: string;
}

interface AuthorsListProps {
  authors: Author[];
}

export const AuthorsList = ({ authors }: AuthorsListProps) => {
  const authorsText = authors.map(a => a.name).join(", ");
  
  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
      <Avatar
        sx={{
          width: 32,
          height: 32,
          bgcolor: "#667eea",
          fontSize: "14px",
          fontWeight: 600,
          flexShrink: 0,
        }}
      >
        {authors[0]?.name.split(" ").map((n) => n[0]).join("") || ""}
      </Avatar>
      <Typography
        sx={{
          ml: 1.5,
          fontSize: "14px",
          color: "#1a1a2e",
          fontWeight: 500,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {authorsText}
      </Typography>
    </Box>
  );
};
