"use client";

import CategoryService from "@/app/_services/CategoryService";
import { useState, useEffect } from "react";
import {
  FiPlus,
  FiSearch,
  FiEdit,
  FiTrash2,
  FiChevronLeft,
  FiChevronRight,
  FiFolder,
  FiRefreshCw,
  FiImage
} from "react-icons/fi";

const TableRowSkeleton = () => (
  <tr className="animate-pulse border-b border-slate-100">
    <td className="py-4 px-6 text-center">
      <div className="h-4 bg-slate-200 rounded w-8 mx-auto"></div>
    </td>
    <td className="py-4 px-6 text-center">
      <div className="w-12 h-12 bg-slate-200 rounded-lg mx-auto"></div>
    </td>
    <td className="py-4 px-6 text-left">
      <div className="h-4 bg-slate-200 rounded w-36 mb-2"></div>
      <div className="h-3 bg-slate-100 rounded w-24"></div>
    </td>
    <td className="py-4 px-6 text-left">
      <div className="h-4 bg-slate-100 rounded w-48"></div>
    </td>
    <td className="py-4 px-6 text-center">
      <div className="h-4 bg-slate-200 rounded w-10 mx-auto"></div>
    </td>
    <td className="py-4 px-6 text-center">
      <div className="h-6 bg-slate-200 rounded-full w-24 mx-auto"></div>
    </td>
    <td className="py-4 px-6 text-center">
      <div className="h-6 bg-slate-200 rounded-full w-16 mx-auto"></div>
    </td>
    <td className="py-4 px-6 text-center">
      <div className="flex gap-2 justify-center">
        <div className="h-9 w-9 bg-slate-200 rounded-xl"></div>
        <div className="h-9 w-9 bg-slate-200 rounded-xl"></div>
      </div>
    </td>
  </tr>
);

export default function ListCategory() {
  const [categories, setCategories] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    fetchCategories(currentPage);
  }, [currentPage]);

  const fetchCategories = async (page = 1) => {
    setIsLoading(true);

    try {
      const res = await CategoryService.getAll(keyword, page);

      console.log("res =", res);

      let data = [];
      let current = page;
      let last = 1;

      if (Array.isArray(res)) {
        data = res;
      } else if (res?.data) {
        if (Array.isArray(res.data)) {
          data = res.data;
          current = res.current_page || page;
          last = res.last_page || 1;
        } else if (res.data.data && Array.isArray(res.data.data)) {
          data = res.data.data;
          current = res.data.current_page || page;
          last = res.data.last_page || 1;
        }
      }

      setCategories(data);
      setCurrentPage(current);
      setLastPage(last);

    } catch (error) {
      console.error(error);
      setCategories([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchCategories(1);
  };

  const handleClearSearch = () => {
    setKeyword("");
    setCurrentPage(1);
    setIsLoading(true);
    CategoryService.getAll("", 1)
      .then((res) => {
        let data = [];
        let current = 1;
        let last = 1;
        if (Array.isArray(res)) {
          data = res;
        } else if (res?.data) {
          if (Array.isArray(res.data)) {
            data = res.data;
            current = res.current_page || 1;
            last = res.last_page || 1;
          } else if (res.data.data && Array.isArray(res.data.data)) {
            data = res.data.data;
            current = res.data.current_page || 1;
            last = res.data.last_page || 1;
          }
        }
        setCategories(data);
        setCurrentPage(current);
        setLastPage(last);
      })
      .catch((err) => {
        console.error(err);
        setCategories([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleDelete = async (id, name) => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa danh mục "${name}" không?`)) {
      setIsDeleting(id);
      try {
        await CategoryService.delete(id);
        alert(`Đã xóa danh mục "${name}" thành công!`);
        if (categories.length === 1 && currentPage > 1) {
          setCurrentPage(currentPage - 1);
        } else {
          fetchCategories(currentPage);
        }
      } catch (error) {
        console.error("Lỗi khi xóa danh mục:", error);
        alert("Xảy ra lỗi trong quá trình xóa danh mục!");
      } finally {
        setIsDeleting(null);
      }
    }
  };

  // Helper to resolve URL path for category image
  const getImageUrl = (imageName) => {
    if (!imageName) return null;

    if (
      imageName.startsWith("http://") ||
      imageName.startsWith("https://")
    ) {
      return imageName;
    }

    const normalizedPath = imageName.replace(/\\/g, "/");
    // Check various common prefixes
    if (normalizedPath.startsWith("storage/categories/")) {
      return `http://localhost/myproject/public/${normalizedPath}`;
    }
    if (normalizedPath.startsWith("categories/")) {
      return `http://localhost/myproject/public/storage/${normalizedPath}`;
    }
    if (normalizedPath.startsWith("storage/")) {
      return `http://localhost/myproject/public/${normalizedPath}`;
    }
    return `http://localhost/myproject/public/storage/categories/${normalizedPath}`;
  };

  return (
    <div className="p-8 min-h-screen bg-slate-50/50">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <FiFolder className="text-blue-600" />
            Danh sách Danh mục
          </h1>
          <p className="text-slate-500 mt-1">
            Quản lý, phân cấp và thiết lập trạng thái các danh mục sản phẩm trong hệ thống.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Refresh Button */}
          <button
            onClick={() => fetchCategories(currentPage)}
            disabled={isLoading}
            className="p-2.5 text-slate-600 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all duration-200 active:scale-90 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm flex items-center justify-center cursor-pointer"
            title="Làm mới dữ liệu"
          >
            <FiRefreshCw className={`w-5 h-5 ${isLoading ? "animate-spin text-blue-600" : ""}`} />
          </button>

          {/* Add Category Button */}
          <a
            href="/admin/categories/add"
            className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 active:scale-95 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 flex items-center gap-2 cursor-pointer text-sm"
          >
            <FiPlus className="w-5 h-5" />
            <span>Thêm danh mục</span>
          </a>
        </div>
      </div>

      {/* Search Bar section */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <form onSubmit={handleSearch} className="w-full md:max-w-xl flex gap-2">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Tìm kiếm danh mục theo tên..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-sm placeholder-slate-400 text-slate-800"
            />
            <span className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400">
              <FiSearch className="w-4 h-4" />
            </span>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-xl hover:bg-slate-800 active:scale-95 transition-all duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer border-0"
          >
            {isLoading ? <FiRefreshCw className="w-4 h-4 animate-spin" /> : <FiSearch className="w-4 h-4" />}
            Tìm kiếm
          </button>
          {keyword && (
            <button
              type="button"
              onClick={handleClearSearch}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-xl active:scale-95 transition-all duration-200 cursor-pointer border-0 bg-transparent"
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

      {/* Category List Table */}
      <div className="bg-white rounded-2xl border border-slate-150 shadow-md shadow-slate-100/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/75 border-b border-slate-100">
                <th className="py-4 px-6 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider w-16">ID</th>
                <th className="py-4 px-6 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider w-24">Hình ảnh</th>
                <th className="py-4 px-6 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Tên danh mục</th>
                <th className="py-4 px-6 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Mô tả</th>
                <th className="py-4 px-6 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider w-24">Thứ tự</th>
                <th className="py-4 px-6 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">Danh mục cha</th>
                <th className="py-4 px-6 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider w-24">Trạng thái</th>
                <th className="py-4 px-6 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider w-28">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {isLoading ? (
                Array.from({ length: 5 }).map((_, idx) => <TableRowSkeleton key={idx} />)
              ) : categories.length > 0 ? (
                categories.map((item) => {
                  console.log("Dữ liệu danh mục:", item);
                  const itemId = item.id || item.cateid;
                  const itemName = item.name || item.catename;
                  const itemSlug = item.slug;
                  const itemDescription = item.description || "Không có mô tả";
                  const imageUrl = getImageUrl(item.image);
                  const sortOrder = item.sort_order ?? 0;
                  const parentName = item.parent?.name || item.parent?.catename || (item.parent_id == 0 || !item.parent_id ? "Danh mục gốc" : `ID: ${item.parent_id}`);
                  const isStatusActive = String(item.status) === "1";

                  return (
                    <tr
                      key={itemId}
                      className="hover:bg-slate-50/50 transition-colors duration-150 align-middle"
                    >
                      {/* ID */}
                      <td className="py-4 px-6 text-center text-sm font-semibold text-slate-400">
                        {itemId}
                      </td>

                      {/* Image */}
                      <td className="py-4 px-6 text-center">
                        <div className="flex justify-center">
                          {imageUrl ? (
                            <div className="relative w-18 h-18 rounded-lg overflow-hidden border border-slate-200 shadow-sm group bg-white">
                              <img
                                src={imageUrl}
                                alt={itemName}
                                className="w-20 h-20 object-cover p-2 rounded cursor-pointer hover:scale-110 transition"
                                onClick={() => setPreviewImage(imageUrl)}
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = "https://placehold.co/100x100?text=No+Image";
                                }}
                              />
                            </div>
                          ) : (
                            <div className="w-12 h-12 bg-slate-50 border border-dashed border-slate-200 rounded-lg flex items-center justify-center text-slate-400" title="Không có ảnh">
                              <FiImage className="w-5 h-5" />
                            </div>
                          )}
                        </div>
                      </td>

                      {/* Name & Slug */}
                      <td className="py-4 px-6 text-left">
                        <div className="font-semibold text-slate-800 text-sm hover:text-blue-600 transition-colors duration-155">
                          {itemName}
                        </div>
                        {itemSlug && (
                          <div className="text-xs text-slate-400 mt-0.5 font-mono">
                            {itemSlug}
                          </div>
                        )}
                      </td>

                      {/* Description */}
                      <td className="py-4 px-6 text-left text-sm text-slate-500 max-w-xs truncate">
                        {itemDescription}
                      </td>

                      {/* Sort Order */}
                      <td className="py-4 px-6 text-center text-sm font-medium text-slate-600">
                        {sortOrder}
                      </td>

                      {/* Parent Category */}
                      <td className="py-4 px-6 text-center">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border shadow-sm ${parentName === "Danh mục gốc"
                          ? "bg-slate-50 text-slate-600 border-slate-200"
                          : "bg-blue-50 text-blue-700 border-blue-100"
                          }`}>
                          {parentName}
                        </span>
                      </td>

                      {/* Status */}
                      <td className="py-4 px-6 text-center">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border shadow-sm ${isStatusActive
                          ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                          : "bg-slate-100 text-slate-600 border-slate-200"
                          }`}>
                          {isStatusActive ? "Hiển thị" : "Ẩn"}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <a
                            href={`/admin/categories/${itemId}/edit`}
                            title="Sửa danh mục"
                            className="p-2 text-amber-600 bg-amber-50 hover:bg-amber-100 hover:text-amber-700 rounded-xl transition-all duration-150 active:scale-90 border border-amber-100/50 shadow-sm cursor-pointer"
                          >
                            <FiEdit className="w-4 h-4" />
                          </a>
                          <button
                            onClick={() => handleDelete(itemId, itemName)}
                            disabled={isDeleting === itemId}
                            title="Xóa danh mục"
                            className="p-2 text-red-600 bg-red-50 hover:bg-red-100 hover:text-red-700 rounded-xl transition-all duration-150 active:scale-90 disabled:opacity-50 disabled:cursor-not-allowed border border-red-100/50 shadow-sm cursor-pointer"
                          >
                            {isDeleting === itemId ? (
                              <FiRefreshCw className="w-4 h-4 animate-spin" />
                            ) : (
                              <FiTrash2 className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="8" className="py-12 px-6 text-center">
                    <div className="flex flex-col items-center justify-center text-slate-400 gap-3">
                      <FiFolder className="w-12 h-12 stroke-[1.5] text-slate-300" />
                      <div className="text-sm font-medium">Không tìm thấy danh mục nào</div>
                      <p className="text-xs text-slate-400 max-w-xs">
                        {keyword ? "Thử tìm kiếm với từ khóa khác hoặc xóa bộ lọc." : "Bắt đầu bằng cách thêm danh mục mới vào hệ thống."}
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Controls */}
      {!isLoading && categories.length > 0 && (
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mt-6 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
          <div className="text-sm text-slate-500">
            Trang <span className="font-semibold text-slate-800">{currentPage}</span> / <span className="font-semibold text-slate-800">{lastPage}</span>
          </div>

          <div className="flex gap-1.5 items-center">
            {/* Prev Button */}
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="p-2 bg-slate-50 hover:bg-slate-100 text-slate-600 disabled:opacity-40 disabled:hover:bg-slate-50 disabled:cursor-not-allowed border border-slate-200 rounded-xl transition-all duration-150 active:scale-90 cursor-pointer flex items-center justify-center"
              title="Trang trước"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>

            {/* Pages Numbered */}
            {(() => {
              const getPageNumbers = () => {
                const pages = [];
                if (lastPage <= 5) {
                  for (let i = 1; i <= lastPage; i++) pages.push(i);
                  return pages;
                }

                pages.push(1);
                let start = Math.max(2, currentPage - 1);
                let end = Math.min(lastPage - 1, currentPage + 1);

                if (start > 2) pages.push("...");

                for (let i = start; i <= end; i++) pages.push(i);

                if (end < lastPage - 1) pages.push("...");

                pages.push(lastPage);
                return pages;
              };

              const pages = getPageNumbers();

              return pages.map((p, idx) =>
                typeof p === "number" ? (
                  <button
                    key={p}
                    onClick={() => setCurrentPage(p)}
                    className={`min-w-[40px] h-10 px-3 text-sm font-semibold rounded-xl transition-all duration-150 active:scale-90 cursor-pointer ${p === currentPage
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20"
                      : "bg-white hover:bg-slate-50 text-slate-600 border border-slate-200"
                      }`}
                  >
                    {p}
                  </button>
                ) : (
                  <span key={`dot-${idx}`} className="px-2 text-slate-400 font-medium">
                    {p}
                  </span>
                )
              );
            })()}

            {/* Next Button */}
            <button
              disabled={currentPage === lastPage}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="p-2 bg-slate-50 hover:bg-slate-100 text-slate-600 disabled:opacity-40 disabled:hover:bg-slate-50 disabled:cursor-not-allowed border border-slate-200 rounded-xl transition-all duration-150 active:scale-90 cursor-pointer flex items-center justify-center"
              title="Trang sau"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {previewImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setPreviewImage(null)}
        >
          <img
            src={previewImage}
            alt="Preview"
            className="max-w-[80%] max-h-[80%] rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={() => setPreviewImage(null)}
            className="absolute top-5 right-6 text-white text-4xl cursor-pointer"
          >
            ×
          </button>
        </div>
      )}
    </div>


  );


}

