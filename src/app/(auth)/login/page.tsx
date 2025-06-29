"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Container,
  Link,
} from "@mui/material";
import styles from "./login.module.css";

interface LoginFormData {
  username: string;
  password: string;
}

function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    router.push("/dashboard");
  };

  return (
    <Box className={styles.root}>
      <Box className={styles.header}>
        <Typography className={styles.headerTitle} variant="h6">
          LOGIN
        </Typography>
      </Box>
      <Container maxWidth="sm">
        <Card>
          <CardContent className={styles.cardContent}>
            <Box>
              <img
                src="/omega-logo.png"
                alt="Logo"
                className={styles.omegaLogo}
              />
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                fullWidth
                placeholder="user"
                margin="normal"
                {...register("username", {
                  required: "Username is required",
                  validate: (value) => value.trim() !== "" || "Username cannot be empty"
                })}
                error={!!errors.username}
                helperText={errors.username?.message}
                inputProps={{
                  className: styles.loginInput,
                  style: { textAlign: "center" },
                }}
              />
              <TextField
                fullWidth
                placeholder="password"
                type="password"
                margin="normal"
                {...register("password", {
                  required: "Password is required",
                  validate: (value) => value.trim() !== "" || "Password cannot be empty"
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
                inputProps={{
                  className: styles.loginInput,
                  style: { textAlign: "center" },
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 1 }}
              >
                LOGIN
              </Button>
            </form>
            <Link
              href="#"
              underline="none"
              sx={{ color: "#3a5eff", fontSize: 15, mt: 1, mb: 2 }}
            >
              Forgot Password?
            </Link>
            <Box>
              <img
                src="/mb-tech.jpg"
                alt="Footer Logo"
                className={styles.footerLogo}
              />
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default LoginPage;
