import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div
      id="outer-container"
      className="flex flex-col px-6 bg-alice-blue min-h-screen scroll-smooth"
    >
      <Outlet />
    </div>
  );
};
