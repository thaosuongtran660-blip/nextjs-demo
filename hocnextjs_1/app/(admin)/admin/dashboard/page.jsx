"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import configAPI from "@/app/configAPI";
import {
  FiDollarSign,
  FiShoppingBag,
  FiUsers,
  FiPackage,
  FiPlus,
  FiArrowRight,
  FiFileText,
  FiMail,
  FiTrendingUp,
  FiActivity
} from "react-icons/fi";

export default function Dashboard() {
  const [recentOrders, setRecentOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setIsLoading(true);
        // Thay đổi endpoint ở đây (ví dụ: "orders", "order" hoặc tên bảng trong DB của bạn)
        const response = await configAPI.get("orders");
        // Hỗ trợ trường hợp API trả về mảng trực tiếp hoặc bọc trong data / data.data
        const ordersData = response?.data?.data || response?.data || response || [];
        setRecentOrders(ordersData);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu đơn hàng:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const stats = [
    {
      label: "Tổng doanh thu",
      value: "312.500.000 ₫",
      icon: FiDollarSign,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
      trend: "+12.4%",
      trendUp: true,
      desc: "so với tháng trước",
    },
    {
      label: "Đơn hàng mới",
      value: "320 đơn",
      icon: FiShoppingBag,
      color: "bg-blue-50 text-blue-600 border-blue-100",
      trend: "+8.2%",
      trendUp: true,
      desc: "so với hôm qua",
    },
    {
      label: "Khách hàng mới",
      value: "1.280 người",
      icon: FiUsers,
      color: "bg-purple-50 text-purple-600 border-purple-100",
      trend: "+5.1%",
      trendUp: true,
      desc: "so với tuần trước",
    },
    {
      label: "Tổng sản phẩm",
      value: "45 dòng",
      icon: FiPackage,
      color: "bg-amber-50 text-amber-600 border-amber-100",
      trend: "+2 sản phẩm mới",
      trendUp: true,
      desc: "trong tuần này",
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "Done":
      case "Completed":
      case "Hoàn thành":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
            Hoàn thành
          </span>
        );
      case "Processing":
      case "Đang xử lý":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
            Đang xử lý
          </span>
        );
      case "Pending":
      case "Chờ xử lý":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-100">
            Chờ xử lý
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-100">
            {status || "Đã hủy"}
          </span>
        );
    }
  };

  const quickActions = [
    { label: "Thêm sản phẩm", href: "/admin/products/add", icon: FiPlus, color: "from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-blue-500/20" },
    { label: "Quản lý sản phẩm", href: "/admin/products", icon: FiPackage, color: "bg-white hover:bg-slate-50 text-slate-700 border border-slate-200" },
    { label: "Viết bài viết mới", href: "/admin/post/add", icon: FiFileText, color: "bg-white hover:bg-slate-50 text-slate-700 border border-slate-200" },
    { label: "Xem thư liên hệ", href: "/admin/contact", icon: FiMail, color: "bg-white hover:bg-slate-50 text-slate-700 border border-slate-200" },
  ];

  return (
    <div className="p-8 space-y-8 min-h-screen bg-slate-50/50">
      {/* Greetings section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            Chào mừng trở lại, Admin! 👋
          </h1>
          <p className="text-slate-500 mt-1">
            Hệ thống đang hoạt động ổn định. Dưới đây là thống kê hoạt động tổng quan hôm nay.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500 bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm">
          <FiActivity className="text-emerald-500 animate-pulse" />
          <span>Hệ thống: <strong className="text-slate-800 font-semibold">Online</strong></span>
        </div>
      </div>

      {/* Grid Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                  <h3 className="text-2xl font-bold text-slate-950 mt-2 tracking-tight">{stat.value}</h3>
                </div>
                <div className={`p-3 rounded-xl border ${stat.color}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
              </div>

              <div className="flex items-center gap-1.5 mt-4 text-xs">
                {stat.trendUp && <FiTrendingUp className="text-emerald-500 w-4.5 h-4.5" />}
                <span className="font-semibold text-emerald-600">{stat.trend}</span>
                <span className="text-slate-400">{stat.desc}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dynamic contents section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left side: Recent orders table */}
        <div className="bg-white p-6 rounded-2xl border border-slate-150 shadow-md shadow-slate-100/50 lg:col-span-2 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-slate-900">Đơn hàng gần đây</h2>
              <Link
                href="/admin/orders"
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 hover:gap-1.5 transition-all duration-150"
              >
                <span>Xem tất cả</span>
                <FiArrowRight />
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider bg-slate-50/50">
                    <th className="py-3 px-4">Mã đơn</th>
                    <th className="py-3 px-4">Khách hàng</th>
                    <th className="py-3 px-4">Thời gian</th>
                    <th className="py-3 px-4">Trạng thái</th>
                    <th className="py-3 px-4 text-right">Giá trị</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {isLoading ? (
                    Array.from({ length: 5 }).map((_, idx) => (
                      <tr key={idx} className="animate-pulse">
                        <td className="py-3.5 px-4">
                          <div className="h-4 bg-slate-200 rounded w-16"></div>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="h-4 bg-slate-200 rounded w-24"></div>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="h-3 bg-slate-100 rounded w-20"></div>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="h-5 bg-slate-200 rounded-full w-20"></div>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="h-4 bg-slate-200 rounded w-16 ml-auto"></div>
                        </td>
                      </tr>
                    ))
                  ) : recentOrders && recentOrders.length > 0 ? (
                    recentOrders.map((order) => (
                      <tr key={order.id || order.index} className="hover:bg-slate-50/50 transition-colors duration-150">
                        <td className="py-3.5 px-4 font-semibold text-slate-900 text-sm">{order.id || order.order_id || `#ORD-${order.id}`}</td>
                        <td className="py-3.5 px-4 text-slate-700 text-sm font-medium">{order.customer || order.fullname || order.username}</td>
                        <td className="py-3.5 px-4 text-slate-400 text-xs">{order.date || order.created_at || order.order_date}</td>
                        <td className="py-3.5 px-4">{getStatusBadge(order.status || order.order_status)}</td>
                        <td className="py-3.5 px-4 text-right font-bold text-slate-900 text-sm">{order.amount || order.total || order.price || order.total_amount}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="py-8 text-center text-slate-400 text-sm">
                        Không có đơn hàng nào gần đây.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right side: Quick actions & status */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-150 shadow-md shadow-slate-100/50">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Thao tác nhanh</h2>
            <div className="grid grid-cols-1 gap-3">
              {quickActions.map((action, index) => {
                const IconComponent = action.icon;
                const isPrimary = index === 0;
                return (
                  <Link
                    key={action.label}
                    href={action.href}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-150 active:scale-97 cursor-pointer ${isPrimary
                        ? `bg-gradient-to-r ${action.color} shadow-md`
                        : `${action.color} shadow-sm`
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className="w-5 h-5" />
                      <span className="text-sm font-semibold">{action.label}</span>
                    </div>
                    <FiArrowRight className={`w-4 h-4 ${isPrimary ? "text-white/80" : "text-slate-400"}`} />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-md flex flex-col justify-between relative overflow-hidden">
            {/* Background design */}
            <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-wider rounded border border-blue-500/30">
                Lưu ý hệ thống
              </span>
              <h3 className="text-base font-bold mt-3 text-white">Bảo trì cơ sở dữ liệu</h3>
              <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                Lịch sao lưu định kỳ diễn ra vào Chủ Nhật hàng tuần lúc 02:00 sáng. Vui lòng hạn chế tác vụ ghi dữ liệu lớn trong thời gian này.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
