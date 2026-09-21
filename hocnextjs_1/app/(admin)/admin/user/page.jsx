"use client";

import UserService from "@/app/_services/UserService";
import { useState, useEffect } from "react";
import { FiUsers, FiSearch, FiEdit, FiTrash2, FiRefreshCw } from "react-icons/fi";

const TableRowSkeleton = () => (
  <tr className="animate-pulse border-b border-slate-100">
    <td className="py-4 px-6 text-center">
      <div className="h-4 bg-slate-200 rounded w-8 mx-auto"></div>
    </td>
    <td className="py-4 px-6 text-left">
      <div className="h-4 bg-slate-200 rounded w-36 mb-2"></div>
      <div className="h-3 bg-slate-100 rounded w-24"></div>
    </td>
    <td className="py-4 px-6 text-left">
      <div className="h-4 bg-slate-200 rounded w-24"></div>
    </td>
    <td className="py-4 px-6 text-left">
      <div className="h-4 bg-slate-100 rounded w-40"></div>
    </td>
    <td className="py-4 px-6 text-center">
      <div className="h-4 bg-slate-200 rounded w-28 mx-auto"></div>
    </td>
    <td className="py-4 px-6 text-center">
      <div className="h-4 bg-slate-200 rounded w-24 mx-auto"></div>
    </td>
    <td className="py-4 px-6 text-center">
      <div className="flex gap-2 justify-center">
        <div className="h-9 w-9 bg-slate-200 rounded-xl"></div>
        <div className="h-9 w-9 bg-slate-200 rounded-xl"></div>
      </div>
    </td>
  </tr>
);

export default function ListUser() {
  const [users, setUser] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const p = await UserService.getAll();
      // Unpack dữ liệu mảng an toàn từ API Laravel (nếu dùng UserResource hoặc Paginate)
      const usersData = Array.isArray(p) ? p : (p?.data || p?.data?.data || []);
      setUser(usersData);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách người dùng:", error);
      setUser([]);
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    fetchUsers();
  }, []);

  // Tìm kiếm cục bộ trên danh sách người dùng trả về từ API
  const filteredUsers = users.filter(user =>
    user.fullname?.toLowerCase().includes(keyword.toLowerCase()) ||
    user.name?.toLowerCase().includes(keyword.toLowerCase()) ||
    user.email?.toLowerCase().includes(keyword.toLowerCase()) ||
    user.phone?.includes(keyword)
  );

  const handleDeletePlaceholder = (name) => {
    alert(`Chức năng xóa người dùng "${name}" đang được phát triển.`);
  };

  const handleEditPlaceholder = (name) => {
    alert(`Chức năng sửa người dùng "${name}" đang được phát triển.`);
  };

  return (
    <div className="p-8 min-h-screen bg-slate-50/50">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <FiUsers className="text-blue-600" />
            Danh sách Người dùng
          </h1>
          <p className="text-slate-500 mt-1">
            Quản lý thông tin tài khoản thành viên và phân quyền trong hệ thống.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchUsers}
            disabled={isLoading}
            className="p-2.5 text-slate-600 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all duration-200 active:scale-90 disabled:opacity-50 shadow-sm flex items-center justify-center cursor-pointer"
            title="Làm mới dữ liệu"
          >
            <FiRefreshCw className={`w-5 h-5 ${isLoading ? "animate-spin text-blue-600" : ""}`} />
          </button>
        </div>
      </div>

      {/* Search Bar section */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="w-full md:max-w-xl flex gap-2">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Tìm kiếm người dùng theo tên, username, email..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-sm placeholder-slate-400"
            />
            <span className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400">
              <FiSearch className="w-4 h-4" />
            </span>
          </div>
          {keyword && (
            <button
              onClick={() => setKeyword("")}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-xl active:scale-95 transition-all duration-200 cursor-pointer"
            >
              Xóa lọc
            </button>
          )}
        </div>

        {keyword && (
          <div className="text-sm text-slate-500">
            Tìm thấy: <span className="font-semibold text-slate-800">{filteredUsers.length}</span> kết quả
          </div>
        )}
      </div>

      {/* User List Table */}
      <div className="bg-white rounded-2xl border border-slate-150 shadow-md shadow-slate-100/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/75 border-b border-slate-100">
                <th className="py-4 px-6 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider w-16">ID</th>
                <th className="py-4 px-6 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Họ và Tên</th>
                <th className="py-4 px-6 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Tên đăng nhập</th>
                <th className="py-4 px-6 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Email</th>
                <th className="py-4 px-6 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">Số điện thoại</th>
                <th className="py-4 px-6 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">Website</th>
                <th className="py-4 px-6 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider w-28">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {isLoading ? (
                Array.from({ length: 5 }).map((_, idx) => <TableRowSkeleton key={idx} />)
              ) : filteredUsers.length > 0 ? (
                filteredUsers.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/50 transition-colors duration-150 align-middle">
                    <td className="py-4 px-6 text-center text-sm font-semibold text-slate-400">
                      {item.id}
                    </td>
                    <td className="py-4 px-6 text-left">
                      <div className="font-semibold text-slate-800 text-sm hover:text-blue-600 transition-colors duration-150">
                        {item.fullname || item.name}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-left text-sm text-slate-600">
                      @{item.username || item.name}
                    </td>
                    <td className="py-4 px-6 text-left text-sm text-slate-500">
                      {item.email}
                    </td>
                    <td className="py-4 px-6 text-center text-sm text-slate-500">
                      {item.phone || "N/A"}
                    </td>
                    <td className="py-4 px-6 text-center text-sm text-blue-600 hover:underline font-medium">
                      {item.website ? (
                        <a href={`https://${item.website}`} target="_blank" rel="noopener noreferrer">
                          {item.website}
                        </a>
                      ) : (
                        "N/A"
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleEditPlaceholder(item.fullname || item.name)}
                          title="Sửa thông tin"
                          className="p-2 text-amber-600 bg-amber-50 hover:bg-amber-100 hover:text-amber-700 rounded-xl transition-all duration-150 active:scale-90 border border-amber-100/50 shadow-sm cursor-pointer"
                        >
                          <FiEdit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeletePlaceholder(item.fullname || item.name)}
                          title="Xóa người dùng"
                          className="p-2 text-red-600 bg-red-50 hover:bg-red-100 hover:text-red-700 rounded-xl transition-all duration-150 active:scale-90 border border-red-100/50 shadow-sm cursor-pointer"
                        >
                          <FiTrash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="py-12 px-6 text-center">
                    <div className="flex flex-col items-center justify-center text-slate-400 gap-3">
                      <FiUsers className="w-12 h-12 stroke-[1.5] text-slate-300" />
                      <div className="text-sm font-medium">Không tìm thấy người dùng nào</div>
                      <p className="text-xs text-slate-400 max-w-xs">
                        {keyword ? "Thử tìm kiếm với từ khóa khác." : "Không có người dùng nào trong hệ thống."}
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
