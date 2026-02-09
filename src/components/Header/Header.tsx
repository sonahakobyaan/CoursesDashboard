import { AppBar, Toolbar, Box } from "@mui/material";
import Logo from "@/components/Header/Logo.tsx";
import UserName from "@/components/Header/UserName.tsx";
import LogoutButton from "@/components/Header/LoginButton.tsx";

interface HeaderProps {
  onLogout?: () => void;
}

export default function Header({ onLogout }: HeaderProps) {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, sm: 4, md: 8 },
          py: 1.5,
          minHeight: "50px",
          maxHeight: "50px"
        }}
      >
        <Logo />
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <UserName />
          <LogoutButton onClick={onLogout} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
