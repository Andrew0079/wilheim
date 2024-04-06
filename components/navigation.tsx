import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import Image from "next/image";

const pages = [
  "Home",
  "Events",
  "Our Service",
  "Gallery",
  "Inquire",
  "Contact",
];

function NavButton({
  label,
  onClick,
  isLanguageSelected,
}: {
  label: string;
  onClick: () => void;
  isLanguageSelected?: boolean;
}) {
  return (
    <Button
      onClick={onClick}
      sx={{
        my: 2,
        display: "block",
        fontWeight: "bold",
        color: isLanguageSelected ? "black" : "white",
        backgroundColor: isLanguageSelected ? "white" : undefined,
        ":hover": {
          color: "black",
          backgroundColor: "white",
        },
      }}
    >
      <Typography fontSize={16}>{label}</Typography>
    </Button>
  );
}

function Navigation({
  isAtTop,
  language,
  onNavigate,
  onSetLanguage,
}: {
  isAtTop: boolean;
  language: string;
  onNavigate?: (page: any) => void;
  onSetLanguage: (language: string) => void;
}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      elevation={13}
      sx={{
        bgcolor: isAtTop ? "rgba(5, 25, 35, 0.5)" : "#051923",
        transition: "background-color 0.3s ease",
      }}
    >
      <Box style={{ marginLeft: 15, marginRight: 15 }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, textAlign: "center" }}>
            <Box
              display="flex"
              flexDirection="row"
              gap={2}
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src="/images/wilheim/image0.png"
                alt="Loading"
                height={40}
                width={40}
                style={{ borderRadius: 10 }}
              />
              <Typography
                noWrap
                fontSize={26}
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "flex" },
                  justifyContent: { xs: "flex-start", md: "flex-start" },
                }}
              >
                WILHEIM
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "none", lg: "flex" },
                justifyContent: "center",
              }}
            >
              {pages.map((page) => (
                <Box style={{ marginRight: 5 }} key={page}>
                  <NavButton
                    label={page}
                    onClick={() => {
                      handleCloseNavMenu();
                      if (onNavigate) onNavigate(page);
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              textAlign: "center",
              display: { xs: "none", md: "none", lg: "flex" },
            }}
          >
            <Box
              gap={1}
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              <NavButton
                label="+43 660 680 3630"
                onClick={() => (window.location.href = "tel:+436606803630")}
              />
              <NavButton
                label="EN"
                onClick={() => {
                  onSetLanguage("ENG");
                }}
                isLanguageSelected={language === "ENG"}
              />
              <NavButton
                label="GE"
                onClick={() => {
                  onSetLanguage("GER");
                }}
                isLanguageSelected={language === "GER"}
              />
            </Box>
          </Box>

          {/* Mobile menu */}
          <Box
            sx={{ display: { xs: "flex", md: "flex", lg: "none" }, ml: "auto" }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "block" } }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page}
                onClick={() => {
                  handleCloseNavMenu();
                  if (onNavigate) onNavigate(page);
                }}
              >
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Box>
    </AppBar>
  );
}

export default Navigation;
