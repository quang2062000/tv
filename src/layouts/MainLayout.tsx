import { Link, Outlet } from "react-router-dom";
import {
  AppBar,
  Box,
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemText,
  TextField,
  Grid,
  Button,
} from "@mui/material";
import { ROUTES } from "../routes/routePaths";
import styles from './MainLayout.module.css'
const drawerWidth = 240;


export default function MainLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Header */}
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          color: "black",
          backgroundColor: "white",
          boxShadow: "none"
        }}
      >
        <Grid className={styles.wrapHeader}>
          <Grid className={styles.header}>
            <TextField
              multiline
              fullWidth
              minRows={4}
              maxRows={4}
              placeholder="Hãy nhập thông tin bất động sản mà bạn cần biết thông tin ..."
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                },
                "& textarea": {
                  textAlign: "center",
                  color: "#0c41e9",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                },
                "& textarea::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            />
            <Button className={styles.buttonSOI} variant="contained"
              sx={{
                backgroundColor: "#1976d2",
                "&:hover": {
                  backgroundColor: "#1565c0",
                },
              }}>SOI</Button>
          </Grid>
        </Grid>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: " #1B2E66"
          },
        }}
      >
        <AppBar
          position="fixed"
          sx={{
            width: drawerWidth,
            left: 0,
            backgroundColor: "#1B2E66",
            boxShadow: "none"
          }}
        >
          <Grid className={styles.textIcon}>
            SOIBDS.COM
          </Grid>
        </AppBar>
        <Toolbar />

        <List>
          <ListItemButton component={Link} to={ROUTES.HOME}>
            <ListItemText className={styles.option} primary="Soi tin" />
          </ListItemButton>

          <ListItemButton component={Link} to={ROUTES.STUDENTS}>
            <ListItemText className={styles.option} primary="Hỗ trợ" />
          </ListItemButton>
        </List>
      </Drawer>

      {/* Content */}
      <Grid className={styles.wrapContent}>
        <Outlet />
      </Grid>
    </Box>
  );
}