import {
  BarChart3,
  ChartNoAxesColumn,
  Package,
  Plus,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";

export default function Sidebar({
  currentPath = "/dashboard",
}: {
  currentPath: string;
}) {
  const navigationItems = [
    { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
    { name: "Inventory", href: "/inventory", icon: Package },
    { name: "Add Product", href: "/add-product", icon: Plus },
    { name: "Settings", href: "/settings", icon: Settings },
  ];
  return (
    <div className="top-0 left-0 min-h-screen w-60 bg-[#0F1828] text-white p-6">
      <div className="flex gap-3 items-center">
        <ChartNoAxesColumn size={28} />
        <span className="text-2xl font-semibold">Inventorist</span>
      </div>
      <nav className="pt-10 space-y-4">
        <div className="uppercase text-gray-400 font-semibold text-sm">
          Inventory
        </div>
        {navigationItems.map((item, key) => {
          const IconComponent = item.icon;
          const isActive = currentPath === item.href;
          return (
            <Link
              key={key}
              href={item.href}
              className={`flex space-x-3 items-center rounded-lg py-2 px-3 ${
                isActive
                  ? "bg-purple-100 text-gray-800"
                  : "hover:bg-gray-800 text-gray-300"
              }`}
            >
              <IconComponent className="w-5 h-5" />
              <span className="text-sm">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
