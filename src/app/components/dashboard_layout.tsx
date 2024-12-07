import { Sidebar } from "../components/Sidebar/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Sidebar />
      <main className={"bg-white lg:ml-72"}>{children}</main>
    </div>
  );
}
