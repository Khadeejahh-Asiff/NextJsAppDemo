"use client";

import React from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FactoryIcon from "@mui/icons-material/Factory";

export const cardData = [
  {
    label: "Cash In Hand",
    value: "34,788,969",
    icon: <AccountBalanceWalletIcon fontSize="large" color="primary" />,
  },
  {
    label: "Bank Balance",
    value: "31,097,883",
    icon: <AccountBalanceIcon fontSize="large" color="success" />,
  },
  {
    label: "Net Cash Sale",
    value: "969,780",
    icon: <PointOfSaleIcon fontSize="large" color="error" />,
  },
  {
    label: "Adv Dr Sale",
    value: "630,486",
    icon: <AttachMoneyIcon fontSize="large" color="success" />,
  },
];

export const statData = [
  {
    label: "Receivable",
    value: "386,584,103",
    icon: <TrendingUpIcon fontSize="large" color="primary" />,
  },
  {
    label: "Payable",
    value: "(58,016,766)",
    icon: <TrendingDownIcon fontSize="large" color="error" />,
  },
  {
    label: "Dispatch",
    value: "36,753.5",
    icon: <LocalShippingIcon fontSize="large" color="success" />,
  },
  {
    label: "Production",
    value: "32,866",
    icon: <FactoryIcon fontSize="large" color="warning" />,
  },
];

export const salesOrderData = [
  { name: "Order A", sales: 4000 },
  { name: "Order B", sales: 3000 },
  { name: "Order C", sales: 2000 },
  { name: "Order D", sales: 2780 },
  { name: "Order E", sales: 1890 },
];
