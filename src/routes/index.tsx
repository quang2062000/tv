import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import StudentPage from "../pages/StudentPage";
import SoiBaiDang from "../features/soiBaiDang/component/SoibaiDang";
import SoiPhanKhuc from "../features/soiPhanKhuc/component/SoiPhanKhuc";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/ttduan", element: <StudentPage /> },
      { path: "/soitindang", element: <SoiBaiDang /> },
      { path: "/soiphankhuc", element: <SoiPhanKhuc /> },

    ],
  },
]);