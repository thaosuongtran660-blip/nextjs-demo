"use client";

import PostService from "@/app/_services/PostService";
import { useState, useEffect, useCallback } from "react";
import { FiPlus, FiSearch, FiEdit, FiTrash2, FiFileText, FiRefreshCw } from "react-icons/fi";

const TableRowSkeleton = () => (
  <tr className="animate-pulse border-b border-slate-100">
    <td className="py-4 px-6 text-center">
      <div className="h-4 bg-slate-200 rounded w-8 mx-auto"></div>
    </td>
    <td className="py-4 px-6 text-left">
      <div className="h-4 bg-slate-200 rounded w-48 mb-2"></div>
      <div className="h-3 bg-slate-100 rounded w-24"></div>
    </td>
    <td className="py-4 px-6 text-left">
      <div className="h-4 bg-slate-200 rounded w-32"></div>
    </td>
    <td className="py-4 px-6 text-left">
      <div className="h-4 bg-slate-100 rounded w-full"></div>
    </td>
    <td className="py-4 px-6 text-center">
      <div className="flex gap-2 justify-center">
        <div className="h-9 w-9 bg-slate-200 rounded-xl"></div>
        <div className="h-9 w-9 bg-slate-200 rounded-xl"></div>
      </div>
    </td>
  </tr>
);

export default function ListPost() {
  const [posts, setPosts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(null);

  const fetchProducts = useCallback(async (searchKeyword = "") => {
    setIsLoading(true);
    try {
      const res = await PostService.getAll(searchKeyword);
      setPosts(res.data || []);
    } catch (error) {
      console.error("Lỗi khi tải danh sách bài viết:", error);
      setPosts([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchProducts(keyword);
  };

  const handleClearSearch = () => {
    setKeyword("");
    fetchProducts("");
  };

  const handleDelete = async (id, title) => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa bài viết "${title}" không?`)) {
      setIsDeleting(id);
      try {
        await PostService.delete(id);
        alert(`Đã xóa bài viết "${title}" thành công!`);
        fetchProducts(keyword);
      } catch (error) {
        console.error("Lỗi khi xóa bài viết:", error);
        alert("Xảy ra lỗi trong quá trình xóa bài viết!");
      } finally {
        setIsDeleting(null);
      }
    }
  };

  return (
    <div className="p-8 min-h-screen bg-slate-50/50">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <FiFileText className="text-blue-600" />
            Danh sách Bài viết
          </h1>
          <p className="text-slate-500 mt-1">
            Quản lý, tạo mới và cập nhật các bài viết trong hệ thống.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Refresh Button */}
          <button
            onClick={() => fetchProducts(keyword)}
            disabled={isLoading}
            className="p-2.5 text-slate-600 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all duration-200 active:scale-90 disabled:opacity-50 shadow-sm flex items-center justify-center cursor-pointer"
            title="Làm mới dữ liệu"
          >
            <FiRefreshCw className={`w-5 h-5 ${isLoading ? "animate-spin text-blue-600" : ""}`} />
          </button>

          {/* Add Post Button */}
          <a
            href="/admin/post/add"
            className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 active:scale-95 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 flex items-center gap-2 cursor-pointer"
          >
            <FiPlus className="w-5 h-5" />
            <span>Thêm bài viết</span>
          </a>
        </div>
      </div>

      {/* Search Bar section */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <form onSubmit={handleSearch} className="w-full md:max-w-xl flex gap-2">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Tìm kiếm bài viết theo tiêu đề..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-sm placeholder-slate-400"
            />
            <span className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400">
              <FiSearch className="w-4 h-4" />
            </span>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-xl hover:bg-slate-800 active:scale-95 transition-all duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            {isLoading ? <FiRefreshCw className="w-4 h-4 animate-spin" /> : <FiSearch className="w-4 h-4" />}
            Tìm kiếm
          </button>
          {keyword && (
            <button
              type="button"
              onClick={handleClearSearch}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-xl active:scale-95 transition-all duration-200 cursor-pointer"
            >
              Hủy
            </button>
          )}
        </form>

        {keyword && (
          <div className="text-sm text-slate-500">
            Kết quả tìm kiếm cho: <span className="font-semibold text-slate-800">"{keyword}"</span>
          </div>
        )}
      </div>

      {/* Post List Table */}
      <div className="bg-white rounded-2xl border border-slate-150 shadow-md shadow-slate-100/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/75 border-b border-slate-100">
                <th className="py-4 px-6 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider w-16">ID</th>
                <th className="py-4 px-6 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Tiêu đề</th>
                <th className="py-4 px-6 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Slug</th>
                <th className="py-4 px-6 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Nội dung tóm tắt</th>
                <th className="py-4 px-6 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider w-28">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {isLoading ? (
                Array.from({ length: 5 }).map((_, idx) => <TableRowSkeleton key={idx} />)
              ) : posts.length > 0 ? (
                posts.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/50 transition-colors duration-150 align-middle">
                    <td className="py-4 px-6 text-center text-sm font-semibold text-slate-400">
                      {item.id}
                    </td>
                    <td className="py-4 px-6 text-left">
                      <div className="font-semibold text-slate-800 text-sm hover:text-blue-600 transition-colors duration-155">
                        {item.title}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-left text-sm text-slate-500 font-mono">
                      {item.slug || "chua-co-slug"}
                    </td>
                    <td className="py-4 px-6 text-left text-sm text-slate-500 max-w-xs truncate">
                      {item.content || "Không có nội dung"}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <a
                          href={`/admin/post/edit/${item.id}`}
                          title="Sửa bài viết"
                          className="p-2 text-amber-600 bg-amber-50 hover:bg-amber-100 hover:text-amber-700 rounded-xl transition-all duration-150 active:scale-90 border border-amber-100/50 shadow-sm cursor-pointer"
                        >
                          <FiEdit className="w-4 h-4" />
                        </a>
                        <button
                          onClick={() => handleDelete(item.id, item.title)}
                          disabled={isDeleting === item.id}
                          title="Xóa bài viết"
                          className="p-2 text-red-600 bg-red-50 hover:bg-red-100 hover:text-red-700 rounded-xl transition-all duration-150 active:scale-90 disabled:opacity-50 border border-red-100/50 shadow-sm cursor-pointer"
                        >
                          {isDeleting === item.id ? (
                            <FiRefreshCw className="w-4 h-4 animate-spin" />
                          ) : (
                            <FiTrash2 className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-12 px-6 text-center">
                    <div className="flex flex-col items-center justify-center text-slate-400 gap-3">
                      <FiFileText className="w-12 h-12 stroke-[1.5] text-slate-300" />
                      <div className="text-sm font-medium">Không tìm thấy bài viết nào</div>
                      <p className="text-xs text-slate-400 max-w-xs">
                        {keyword ? "Thử tìm kiếm với từ khóa khác." : "Bắt đầu bằng cách thêm bài viết mới vào hệ thống."}
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
