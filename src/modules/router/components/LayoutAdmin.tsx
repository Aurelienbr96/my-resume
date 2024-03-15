import { Outlet } from "react-router-dom";

export const LayoutAdmin = () => {
  return (
    <div className="font-montserrat relative scroll-smooth bg-white">
      <div
        id="outer-container"
        className="flex flex-col min-h-screen scroll-smooth"
      >
        <Outlet />
      </div>
    </div>
  );
};
