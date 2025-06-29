/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
  IconButton,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import styles from "./Sidebar.module.css";
import { menuItems } from "./SidebarConstants";

export default function Sidebar({
  active,
  onToggle,
  isMobile = false,
  isMobileOpen = false,
  onMobileClose,
}: {
  active?: string;
  // eslint-disable-next-line no-unused-vars
  onToggle?: (collapsed: boolean) => void;
  isMobile?: boolean;
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
}) {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    const newCollapsed = !isCollapsed;
    setIsCollapsed(newCollapsed);
    onToggle?.(newCollapsed);
  };

  const handleToggle = (label: string) => {
    setOpen((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleMobileItemClick = () => {
    if (isMobile && onMobileClose) {
      onMobileClose();
    }
  };

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      open={isMobile ? isMobileOpen : true}
      onClose={onMobileClose}
      classes={{ paper: styles.drawerPaper }}
      PaperProps={{
        className: `${styles.drawerPaper} ${
          isCollapsed && !isMobile ? styles.collapsed : ""
        } ${isMobile ? styles.mobileDrawer : ""}`,
      }}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <Box className={styles.logoArea}>
        <div className={styles.logoColumn}>
          <img
            src="/omega-logo.png"
            alt="Logo"
            className={`${styles.logo} ${
              isCollapsed && !isMobile ? styles.small : styles.large
            }`}
          />
        </div>
        {!isMobile && (
          <IconButton
            onClick={toggleSidebar}
            className={styles.toggleButton}
            size="small"
          >
            {isCollapsed ? (
              <ExpandMore className={styles.arrowSideways} />
            ) : (
              <ExpandLess className={styles.arrowSidewaysOpen} />
            )}
          </IconButton>
        )}
      </Box>

      <List className={styles.menuList}>
        {menuItems.map((item) =>
          item.children ? (
            <React.Fragment key={item.label}>
              <ListItemButton
                className={`${styles.menuItem} ${
                  active === item.label ? styles.activeItem : ""
                }`}
                onClick={() => {
                  handleToggle(item.label);
                  handleMobileItemClick();
                }}
                sx={{
                  justifyContent:
                    isCollapsed && !isMobile ? "center" : "flex-start",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: "center",
                    mr: isCollapsed && !isMobile ? 0 : 2,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                {(!isCollapsed || isMobile) && (
                  <ListItemText primary={item.label} />
                )}
                {(!isCollapsed || isMobile) &&
                  (open[item.label] ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>

              <Collapse
                in={open[item.label] && (!isCollapsed || isMobile)}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {item.children.map((child) => (
                    <ListItemButton
                      key={child.label}
                      className={`${styles.subMenuItem} ${
                        active === child.label
                          ? styles.activeItem
                          : styles.nested
                      }`}
                      component={Link}
                      href={child.link}
                      onClick={handleMobileItemClick}
                      sx={{
                        justifyContent:
                          isCollapsed && !isMobile ? "center" : "flex-start",
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          justifyContent: "center",
                          mr: isCollapsed && !isMobile ? 0 : 2,
                        }}
                      >
                        {child.icon}
                      </ListItemIcon>
                      {(!isCollapsed || isMobile) && (
                        <ListItemText primary={child.label} />
                      )}
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ) : (
            <ListItemButton
              key={item.label}
              className={`${styles.menuItem} ${
                active === item.label ? styles.activeItem : ""
              }`}
              component={Link}
              href={item.link}
              onClick={handleMobileItemClick}
              sx={{
                justifyContent:
                  isCollapsed && !isMobile ? "center" : "flex-start",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  justifyContent: "center",
                  mr: isCollapsed && !isMobile ? 0 : 2,
                }}
              >
                {item.icon}
              </ListItemIcon>
              {(!isCollapsed || isMobile) && (
                <ListItemText primary={item.label} />
              )}
            </ListItemButton>
          ),
        )}
      </List>
    </Drawer>
  );
}
