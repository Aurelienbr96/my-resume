import { Link, Outlet } from "react-router-dom";

export const Layout = () => (
  <div className="flex flex-col bg-light-grey h-screen px-6">
    <div className="flex justify-around my-6">
      <Link className="text-3xl text-light-purple" to="/">Aurelien Brachet</Link>
      <div className="flex justify-around text-light-purple">
        <Link className="mx-8" to="/about">ABOUT ME</Link>
        <Link className="mx-8" to="/experiences">EXPERIENCES</Link>
        <Link className="mx-8" to="/contacts">CONTACTS</Link>
      </div>
    </div>

    <Outlet />
  </div>
);
