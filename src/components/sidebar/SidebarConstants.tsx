import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ReceiptIcon from "@mui/icons-material/Receipt";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SettingsIcon from "@mui/icons-material/Settings";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

export const menuItems = [
  { label: "Dashboard", icon: <DashboardIcon />, link: "/dashboard" },
  {
    label: "Financial Reports",
    icon: <BarChartIcon />,
    children: [
      {
        label: "Accounts Receivable",
        icon: <AccountBalanceWalletIcon />,
        link: "/dashboard/accounts-receivable",
      },
      {
        label: "Account Payable",
        icon: <ReceiptIcon />,
        link: "/dashboard/account-payable",
      },
    ],
  },
  {
    label: "Accounts Receivable",
    icon: <AccountBalanceWalletIcon />,
    children: [
      {
        label: "Profits",
        icon: <TrendingUpIcon />,
        link: "/dashboard/accounts-receivable",
      },
      {
        label: "Loss",
        icon: <TrendingDownIcon />,
        link: "/dashboard/account-payable",
      },
    ],
  },
  {
    label: "Accounts Payable",
    icon: <ReceiptIcon />,
    children: [
      {
        label: "Profits",
        icon: <TrendingUpIcon />,
        link: "/dashboard/accounts-receivable",
      },
      {
        label: "Loss",
        icon: <TrendingDownIcon />,
        link: "/dashboard/account-payable",
      },
    ],
  },
  {
    label: "Inventory Reports",
    icon: <InventoryIcon />,
    children: [
      {
        label: "Management",
        icon: <ManageAccountsIcon />,
        link: "",
      },
      {
        label: "Settings",
        icon: <SettingsIcon />,
        link: "",
      },
    ],
  },
  {
    label: "Sales Reports",
    icon: <BarChartIcon />,
    children: [
      {
        label: "List View",
        icon: <ListAltIcon />,
        link: "",
      },
      {
        label: "Card View",
        icon: <ViewModuleIcon />,
        link: "",
      },
    ],
  },
  {
    label: "Purchase Reports",
    icon: <ShoppingCartIcon />,
    children: [
      {
        label: "List View",
        icon: <ListAltIcon />,
        link: "",
      },
      {
        label: "Card View",
        icon: <ViewModuleIcon />,
        link: "",
      },
    ],
  },
];
