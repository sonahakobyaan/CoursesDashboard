import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Header/Logo.tsx";
import { login } from "@/services/auth.service";

interface LogInProps {
  onLoginSuccess?: () => void;
}

export default function LogIn({ onLoginSuccess }: LogInProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validate = (): boolean => {
    const newErrors: { username?: string; password?: string } = {};
    
    if (!username.trim()) {
      newErrors.username = "Username is required";
    } else if (username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    } else if (username.length > 20) {
      newErrors.username = "Username must be at most 20 characters";
    }
    
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (password.length > 20) {
      newErrors.password = "Password must be at most 20 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!validate()) {
      return;
    }
    
    setLoading(true);

    try {
      await login(username, password);
      navigate("/courses", { replace: true });
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } catch {
      setError("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        bgcolor: "#f8f9ff",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          flex: 1,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            bgcolor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            position: "absolute",
            top: "10%",
            left: "10%",
          }}
        />
        <Box
          sx={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            bgcolor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            position: "absolute",
            bottom: "20%",
            right: "15%",
          }}
        />
        <Logo />
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          bgcolor: "#ffffff",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xs">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: "calc(100vh - 80px)",
              py: 4,
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  mb: 1,
                  fontWeight: 700,
                  color: "#1a1a2e",
                  letterSpacing: "-0.5px",
                }}
              >
                Welcome back
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 5,
                  color: "#6b7280",
                }}
              >
                Enter your credentials to continue
              </Typography>

              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  placeholder="Username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  error={!!errors.username}
                  helperText={errors.username}
                  required
                  variant="outlined"
                  sx={{
                    mb: 3,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "16px",
                      bgcolor: "#f8f9ff",
                      "& fieldset": {
                        borderColor: errors.username ? "#ef4444" : "transparent",
                      },
                      "&:hover fieldset": {
                        borderColor: errors.username ? "#ef4444" : "#667eea",
                      },
                      "&.Mui-focused": {
                        bgcolor: "#ffffff",
                        "& fieldset": {
                          borderColor: errors.username ? "#ef4444" : "#667eea",
                          borderWidth: "2px",
                        },
                      },
                    },
                    "& input": {
                      py: 2,
                      px: 2.5,
                      fontSize: "15px",
                    },
                  }}
                />

                <TextField
                  fullWidth
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={!!errors.password}
                  helperText={errors.password}
                  required
                  variant="outlined"
                  sx={{
                    mb: 4,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "16px",
                      bgcolor: "#f8f9ff",
                      "& fieldset": {
                        borderColor: errors.password ? "#ef4444" : "transparent",
                      },
                      "&:hover fieldset": {
                        borderColor: errors.password ? "#ef4444" : "#667eea",
                      },
                      "&.Mui-focused": {
                        bgcolor: "#ffffff",
                        "& fieldset": {
                          borderColor: errors.password ? "#ef4444" : "#667eea",
                          borderWidth: "2px",
                        },
                      },
                    },
                    "& input": {
                      py: 2,
                      px: 2.5,
                      fontSize: "15px",
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                          sx={{
                            color: "#9ca3af",
                            "&:hover": {
                              color: "#667eea",
                            },
                          }}
                        >
                          {showPassword ? (
                            <EyeOff size={20} />
                          ) : (
                            <Eye size={20} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                {error && (
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 3,
                      color: "#ef4444",
                      textAlign: "center",
                    }}
                  >
                    {error}
                  </Typography>
                )}

                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={loading}
                  sx={{
                    py: 2,
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    textTransform: "none",
                    fontSize: "16px",
                    fontWeight: 600,
                    borderRadius: "16px",
                    boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)",
                    "&:hover": {
                      boxShadow: "0 15px 40px rgba(102, 126, 234, 0.4)",
                      transform: "translateY(-2px)",
                    },
                    "&:disabled": {
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      opacity: 0.7,
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  {loading ? "Signing in..." : "Sign in"}
                </Button>
              </form>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

