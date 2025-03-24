import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Paper, Typography, Box } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      navigate("/products");
      window.location.reload();
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url('https://source.unsplash.com/random/1920x1080/?technology,abstract')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xs">
        <Paper elevation={6} sx={{ p: 4, borderRadius: 3, backdropFilter: "blur(10px)" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Bienvenido
          </Typography>
          <Typography align="center" color="textSecondary" gutterBottom>
            Inicia sesión para continuar
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField
              label="Correo"
              fullWidth
              margin="normal"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Contraseña"
              type="password"
              fullWidth
              margin="normal"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              startIcon={<LoginIcon />}
              sx={{ mt: 2 }}
            >
              Entrar
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}
