"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiGrid,
  FiPackage,
  FiFolder,
  FiShoppingBag,
  FiMail,
  FiFileText,
  FiUsers,
  FiImage
} from "react-icons/fi";

function Menu() {
  const pathname = usePathname();

  const menuItems = [
    { href: "/admin/dashboard", label: "Dashboard", icon: FiGrid },
    { href: "/admin/products", label: "Sản phẩm", icon: FiPackage },
    { href: "/admin/categories", label: "Danh mục", icon: FiFolder },
    { href: "/admin/orders", label: "Đơn hàng", icon: FiShoppingBag },
    { href: "/admin/post", label: "Bài viết", icon: FiFileText },
    { href: "/admin/user", label: "Tài khoản", icon: FiUsers },
    { href: "/admin/album", label: "Thư viện ảnh", icon: FiImage },
    { href: "/admin/contact", label: "Liên hệ", icon: FiMail },
  ];

  const isActive = (href) => {
    if (href === "#") return false;
    if (href === "/admin/dashboard") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <div className="flex items-center gap-3 mb-8 px-2">
          <div className="w-9 h-9 bg-white text-blue-600 rounded-xl flex items-center justify-center font-black text-xl shadow-md shadow-black/10">
            A
          </div>
          <h2 className="text-2xl font-black tracking-tight text-white">
            Admin Panel
          </h2>
        </div>

        <nav className="flex flex-col gap-1.5">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-150 active:scale-95 cursor-pointer ${
                  active
                    ? "bg-white/15 text-white font-semibold shadow-sm border-l-4 border-white"
                    : "text-white/75 hover:text-white hover:bg-white/8"
                }`}
              >
                <IconComponent className={`w-5 h-5 transition-transform duration-200 ${active ? "scale-105" : "text-white/60"}`} />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-8 border-t border-white/10 pt-4 px-2">
        <div className="flex items-center gap-2.5 text-xs text-white/50">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Phiên bản 1.0.0</span>
        </div>
      </div>
    </div>
  );
}

export default Menu;

