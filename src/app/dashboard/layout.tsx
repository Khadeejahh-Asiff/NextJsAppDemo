"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./layout.module.css";
import { IconButton, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Close mobile sidebar when switching to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsMobileSidebarOpen(false);
    }
  }, [isMobile]);

  const handleMobileSidebarToggle = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const handleSidebarClose = () => {
    setIsMobileSidebarOpen(false);
  };

  return (
    <div className={styles.layout}>
      {/* Burger menu for mobile */}
      {isMobile && (
        <IconButton
          className={styles.burgerMenu}
          onClick={handleMobileSidebarToggle}
          size="large"
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Sidebar */}
      <Sidebar 
        onToggle={(collapsed) => setIsSidebarCollapsed(collapsed)}
        isMobile={isMobile}
        isMobileOpen={isMobileSidebarOpen}
        onMobileClose={handleSidebarClose}
      />
      
      <main
        className={`${styles.main} ${isSidebarCollapsed && !isMobile ? styles.collapsed : ""} ${isMobile ? styles.mobileMain : ""}`}
      >
        {children}
      </main>
    </div>
  );
}
