import { Outlet, Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";
import { ROUTES } from "../routes/routePaths";

export default function MainLayout() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to={ROUTES.HOME}>
            Home
          </Button>
          <Button color="inherit" component={Link} to={ROUTES.STUDENTS}>
            Students
          </Button>
        </Toolbar>
      </AppBar>

      <div style={{ padding: 20 }}>
        <Outlet />
      </div>
    </>
  );
}