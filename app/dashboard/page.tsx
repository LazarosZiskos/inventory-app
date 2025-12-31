import Sidebar from "../components/Sidebar";

export default async function DashboardPage() {
  return (
    <div>
      <Sidebar currentPath="/dashboard" />
    </div>
  );
}
