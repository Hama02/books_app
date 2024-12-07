import SideBar from "../_components/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
  params: {
    id: number;
  };
}

export default function DashboardLayout({
  children,
  params,
}: DashboardLayoutProps) {
  return (
    <div className="flex">
      <SideBar authorId={params.id} />
      <main className={"bg-white flex mx-auto mt-32"}>{children}</main>
    </div>
  );
}
