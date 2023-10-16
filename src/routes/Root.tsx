import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <main className="p-12 w-[1280px]">
      <Outlet />
    </main>
  );
}
