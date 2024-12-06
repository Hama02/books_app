import { Menu } from "./Menu";

export function Sidebar() {
  return (
    <aside
      className={
        "bg-[#FCFCFC] fixed left-0 top-0 z-20 h-screen -translate-x-full transition-[width] duration-300 ease-in-out lg:translate-x-0 w-72 border-r-2"
      }
    >
      <div className="relative flex h-full flex-col overflow-y-auto px-3 py-4 mt-11">
        <h2 className="w-full text-center text-xl">
          Wellness<b>One</b>
        </h2>

        <Menu isOpen={true} />
      </div>
    </aside>
  );
}
