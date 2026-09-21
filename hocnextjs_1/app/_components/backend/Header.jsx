"use client";
import { usePathname } from "next/navigation";
import { FiBell, FiUser, FiSearch, FiGlobe } from "react-icons/fi";

function HeaderAd() {
  const pathname = usePathname();

  const getHeaderTitle = () => {
    if (pathname.includes("/admin/dashboard")) return "Bảng điều khiển";
    if (pathname.includes("/admin/products")) return "Quản lý Sản phẩm";
    if (pathname.includes("/admin/categories")) return "Quản lý Danh mục";
    if (pathname.includes("/admin/orders")) return "Quản lý Đơn hàng";
    if (pathname.includes("/admin/post")) return "Quản lý Bài viết";
    if (pathname.includes("/admin/user")) return "Quản lý Tài khoản";
    if (pathname.includes("/admin/album")) return "Thư viện Ảnh";
    if (pathname.includes("/admin/contact")) return "Hộp thư Liên hệ";
    return "Hệ thống Quản trị";
  };

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-100 shadow-sm px-6 py-4 flex items-center justify-between">
      {/* Page Title */}
      <div>
        <h1 className="text-xl font-bold text-slate-800 tracking-tight">
          {getHeaderTitle()}
        </h1>
      </div>

      {/* Utilities */}
      <div className="flex items-center gap-4">
        {/* Search button (Cosmetic) */}
        <div className="relative hidden md:block w-48">
          <input
            type="text"
            placeholder="Tìm kiếm nhanh..."
            className="w-full pl-8 pr-3 py-1.5 bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-150"
          />
          <FiSearch className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5" />
        </div>

        {/* View Site */}
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          title="Xem trang chủ"
          className="p-2 text-slate-500 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all duration-150 active:scale-90 flex items-center justify-center cursor-pointer"
        >
          <FiGlobe className="w-5 h-5" />
        </a>

        {/* Notifications */}
        <button
          title="Thông báo"
          className="relative p-2 text-slate-500 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all duration-150 active:scale-90 flex items-center justify-center cursor-pointer"
        >
          <FiBell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
        </button>

        {/* Profile Card */}
        <div className="flex items-center gap-3 pl-4 border-l border-slate-100">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-semibold text-slate-800">Admin</p>
            <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">
              Quản trị viên
            </p>
          </div>
          <button className="w-9 h-9 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl flex items-center justify-center shadow-inner hover:shadow transition-all duration-150 active:scale-90 cursor-pointer">
            <FiUser className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default HeaderAd;
