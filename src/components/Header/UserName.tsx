import { Box, Typography, Avatar } from "@mui/material";
import { useState } from "react";

export default function UserName() {
  const [username] = useState<string>(() => {
    return localStorage.getItem("username") || "";
  });

  const capitalizeName = (name: string): string => {
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Avatar
        sx={{
          width: 36,
          height: 36,
          bgcolor: "#f3f4f6",
          color: "#374151",
          fontWeight: 500,
          fontSize: "13px",
          border: "1px solid #e5e7eb",
        }}
      >
        {username ? getInitials(username) : "US"}
      </Avatar>
      <Typography
        sx={{
          fontWeight: 500,
          color: "#374151",
          fontSize: "14px",
        }}
      >
        {username ? capitalizeName(username) : "User"}
      </Typography>
    </Box>
  );
}
