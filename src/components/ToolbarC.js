import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Menu,
  Paper,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Badge,
  MenuItem,
} from "@material-ui/core";
import {
  AccountCircle,
  Search,
  Menu as MenuIcon,
  Language,
  Mail,
  Notifications,
  MoreVert,
} from "@material-ui/icons";
import logo from "../assets/logo.svg";
import "../styles/header.css";

const useStyles = makeStyles((theme) => ({
  logo: {
    marginLeft: 64,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 8,
    },
  },
  search_input_paper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 50,
    padding: " 0 0 0 24px",
    width: 350,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      color: "#000",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      marginRight: 64,
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function ToolbarC() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar className="toolbarc_toolbar">
          <IconButton className={classes.logo}>
            <img
              src={logo}
              alt="this_is"
              style={{ width: "1.3em", height: "1.3em" }}
            />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Jina Airbnb
          </Typography>
          {/* search input */}
          <div className="toolbarc_search_input_div">
            <Paper className={classes.search_input_paper}>
              <p>Start your search</p>
              <IconButton
                style={{ backgroundColor: "red", margin: 8, padding: 4 }}>
                <Search style={{ color: "#fff" }} />
              </IconButton>
            </Paper>
          </div>
          {/* profile */}
          {/* desktop */}
          <div className={classes.sectionDesktop}>
            <Button
              style={{
                borderRadius: 30,
                padding: "10px 20px",
                color: "#000",
              }}>
              Become a Host
            </Button>
            <IconButton>
              <Language style={{ color: "#000" }} />
            </IconButton>
            <Paper className="toolbarc_profile_paper">
              <MenuIcon />
              <IconButton>
                <Badge badgeContent={4} color="secondary">
                  <AccountCircle />
                </Badge>
              </IconButton>
            </Paper>
          </div>
          {/* mobile */}
          <div className={classes.sectionMobile}>
            <IconButton
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              style={{ marginRight: 8 }}
              color="inherit">
              <MoreVert style={{ color: "#000" }} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
