import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div
      id="outer-container"
      className="flex flex-col min-h-screen scroll-smooth"
    >
      <Outlet />
    </div>
  );
};
