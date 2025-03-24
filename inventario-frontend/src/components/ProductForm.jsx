import { useState } from "react";
import { TextField, Button, Container, Paper, Typography } from "@mui/material";

export default function ProductForm({ onProductAdded }) {
  const [product, setProduct] = useState({ name: "", description: "", price: "", quantity: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(product),
    });

    if (response.ok) {
      setProduct({ name: "", description: "", price: "", quantity: "" });
      onProductAdded();
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          Agregar Producto
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre"
            fullWidth
            margin="normal"
            variant="outlined"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
          <TextField
            label="Descripción"
            fullWidth
            margin="normal"
            variant="outlined"
            value={product.description}
            onChange={(e) => setProduct({ ...product, description: e.target.value })}
          />
          <TextField
            label="Precio"
            type="number"
            fullWidth
            margin="normal"
            variant="outlined"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
          <TextField
            label="Cantidad"
            type="number"
            fullWidth
            margin="normal"
            variant="outlined"
            value={product.quantity}
            onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Guardar
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
