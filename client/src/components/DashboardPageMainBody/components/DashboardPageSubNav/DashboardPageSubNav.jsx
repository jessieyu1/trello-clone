import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import TextField from "@mui/material/TextField";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useDrawerStore } from "../../../../useStores/useDrawerStore";
import { DRAWER_WIDTH } from "../../../../configs/config";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  height: "56px",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: `${DRAWER_WIDTH}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backgroundColor: "rgba(0,0,0,0.3)",
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
function DashboardPageSubNav() {
  const { drawerOpen, setDrawerOpen } = useDrawerStore();
  const theme = useTheme();
  const [choose, setChoose] = React.useState(false);
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  const handleIconClick = () => {
    setChoose(!choose);
  };
  return (
    <Box>
      <CssBaseline />
      <AppBar position="static" open={drawerOpen}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(drawerOpen && { display: "none" }) }}
          >
            <ChevronRightIcon />
          </IconButton>
          <Box
            sx={{
              "& > :not(style)": {
                m: 1,
                width: "25ch",
                "& .MuiInputBase-input": {
                  height: "32px", // Set input height
                  fontWeight: "bold", // Make text bold
                  color: "white",
                  fontSize: "18px",
                  "&:focus": {
                    color: "black",
                  },
                },
                "& .Mui-focused": {
                  height: "32px",
                  backgroundColor: "white", // Set background to white on focus
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none", // Remove border from the notched outline
                },
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              defaultValue="Your default value"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    border: "2px solid blue",
                  },
                },
              }}
            />
          </Box>
          {!choose && (
            <StarBorderIcon
              sx={{ color: "rgb(226, 178, 3)", cursor: "pointer" }}
              onClick={handleIconClick}
            />
          )}
          {choose && (
            <StarIcon
              sx={{ color: "rgb(226, 178, 3)", cursor: "pointer" }}
              onClick={handleIconClick}
            />
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            height: "calc(100% - 48px)",
            marginTop: "48px",
            bgcolor: "rgba(0,0,0,0.5)",
            color: "white",
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={drawerOpen}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon sx={{ color: "white" }} />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "white" }}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default DashboardPageSubNav;
