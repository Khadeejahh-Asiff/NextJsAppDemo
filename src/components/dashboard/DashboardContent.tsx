"use client";

import React from "react";
import { Box, Typography, Avatar, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import { ResponsiveContainer } from "recharts";
import { cardData, statData } from "./DashboardContants";
import PieChartComponent from "./PieChartComponent";
import Example from "./EffectOpacity";
import SimpleBarChart from "./SimpleBarChart";
import Bubblechart from "./BubbleChart";
import ComposedContainer from "./ComposedContainer";

export default function DashboardContent() {
  return (
    <Stack
      direction={"column"}
      gap={2}
      sx={{
        p: 2,
        background: "#f5f6fa",
        minHeight: "100vh",
        display: "flex",
        // flexDirection: "column",
      }}
    >
      <Typography variant="h6" sx={{ mb: 0, color: "#7b1fa2" }}>
        DASHBOARD
      </Typography>
      <Box sx={{ my: 1 }}>
        <Grid container spacing={{ xs: 2, sm: 2, md: 2 }}>
          {cardData.map((item, index) => (
            <Grid size={{ xs: 12, sm: 12, md: 3, lg: 3 }} key={index}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: 1,
                  minHeight: 80,
                  borderRadius: 2,
                  background: "white",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  border: "1px solid #e0e0e0",
                  transition: "box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <Avatar
                  sx={{ bgcolor: "#e3e6fd", color: "#3a5eff", mr: 1, ml: 1 }}
                >
                  {item.icon}
                </Avatar>
                <Box>
                  <Typography variant="body2" color="textSecondary">
                    {item.label}
                  </Typography>
                  <Typography variant="h6" fontWeight={700}>
                    {item.value}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ my: 1 }}>
        <Grid container spacing={{ xs: 2, sm: 2, md: 2 }}>
          {statData.map((item, index) => (
            <Grid size={{ xs: 12, sm: 12, md: 3, lg: 3 }} key={index}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: 1,
                  minHeight: 80,
                  borderRadius: 2,
                  background: "white",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  border: "1px solid #e0e0e0",
                  transition: "box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <Avatar
                  sx={{ bgcolor: "#e3e6fd", color: "#3a5eff", mr: 1, ml: 1 }}
                >
                  {item.icon}
                </Avatar>
                <Box>
                  <Typography variant="body2" color="textSecondary">
                    {item.label}
                  </Typography>
                  <Typography variant="h6" fontWeight={700}>
                    {item.value}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ my: 1 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            <Box
              sx={{
                maxWidth: "100%",
                p: 2,
                borderRadius: 2,
                boxShadow: 3,
                bgcolor: "#fff",
              }}
            >
              <Typography variant="subtitle1" fontWeight={600}>
                Top 10 Products
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 250,
                  width: "100%",
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChartComponent />
                </ResponsiveContainer>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            <Box
              sx={{
                maxWidth: "100%",
                p: 2,
                borderRadius: 2,
                boxShadow: 3,
                bgcolor: "#fff",
              }}
            >
              <Typography variant="subtitle1" fontWeight={600}>
                Monthly Expenses
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 250,
                  width: "100%",
                }}
              >
                <ResponsiveContainer width="100%" height="80%">
                  <Example />
                </ResponsiveContainer>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ my: 1 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <Box
              sx={{
                maxWidth: "100%",
                p: 2,
                borderRadius: 2,
                boxShadow: 3,
                bgcolor: "#fff",
              }}
            >
              <Typography variant="subtitle1" fontWeight={600}>
                Top 10 Sales Order
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 300,
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <SimpleBarChart />
                </ResponsiveContainer>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ my: 1 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            <Box
              sx={{
                maxWidth: "100%",
                p: 2,
                borderRadius: 2,
                boxShadow: 3,
                bgcolor: "#fff",
              }}
            >
              <Typography variant="subtitle1" fontWeight={600}>
                Total Sales (Per Day)
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 250,
                  width: "100%",
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <Bubblechart />
                </ResponsiveContainer>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ sm: 12, md: 6, lg: 6 }}>
            <Box
              sx={{
                maxWidth: "100%",
                p: 2,
                borderRadius: 2,
                boxShadow: 3,
                bgcolor: "#fff",
              }}
            >
              <Typography variant="subtitle1" fontWeight={600}>
                Total Sales (Per Month)
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 250,
                  width: "100%",
                }}
              >
                <ResponsiveContainer width="100%" height="80%">
                  <ComposedContainer />
                </ResponsiveContainer>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}
