import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import LandingPage from "../pages/LandingPage";
import LoginAndRegisterPage from "../pages/LoginAndRegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/loginOrRegister",
    element: <LoginAndRegisterPage />,
  },
]);

export default router;
