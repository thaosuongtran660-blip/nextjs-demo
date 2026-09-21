"use client";
import ProductService from "@/app/_services/ProductService";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ListProduct() {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const fetchProducts = async (page = 1) => {
    setLoading(true);
    try {
      const res = await ProductService.getAll(keyword, page);
      console.log("DEBUG Product Service API Response:", res);
      
      let data = [];
      let current = page;
      let last = 1;
      let total = 0;

      if (Array.isArray(res)) {
        data = res;
        total = res.length;
      } else if (res?.data) {
        if (Array.isArray(res.data)) {
          data = res.data;
          current = res.current_page || page;
          last = res.last_page || 1;
          total = res.total || res.data.length;
        } else if (res.data.data && Array.isArray(res.data.data)) {
          data = res.data.data;
          current = res.data.current_page || page;
          last = res.data.last_page || 1;
          total = res.data.total || res.total || res.data.data.length;
        }
      }

      setProducts(data);
      setCurrentPage(current);
      setLastPage(last);
      setTotalProducts(total);
    } catch (error) {
      console.error("Lỗi khi tải sản phẩm:", error);
      setProducts([]);
      setTotalProducts(0);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchProducts(1);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
      try {
        await ProductService.delete(id);
        alert("Xóa sản phẩm thành công!");
        if (products.length === 1 && currentPage > 1) {
          setCurrentPage(currentPage - 1);
        } else {
          fetchProducts(currentPage);
        }
      } catch (error) {
        console.error("Lỗi khi xóa sản phẩm:", error);
        alert("Có lỗi xảy ra khi xóa sản phẩm. Vui lòng thử lại!");
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">
                Danh Sách Sản Phẩm
              </h1>
              <span className="px-2.5 py-1 text-xs font-semibold bg-indigo-50 text-indigo-600 rounded-full border border-indigo-100">
                {totalProducts} sản phẩm
              </span>
            </div>
            <p className="text-slate-500 text-sm mt-1">
              Quản lý danh sách sản phẩm, giá bán, danh mục và thương hiệu hệ thống.
            </p>
          </div>

          <Link
            href="/admin/products/add"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-violet-700 active:scale-95 shadow-md shadow-indigo-100 hover:shadow-lg transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Thêm sản phẩm mới
          </Link>
        </div>

        {/* Search Filter Box */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-wrap gap-4 items-center justify-between">
          <form onSubmit={handleSearch} className="flex gap-2 w-full md:max-w-md">
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Tìm sản phẩm theo tên..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-medium rounded-xl transition-all duration-200"
            >
              Tìm
            </button>
          </form>

          <button
            onClick={fetchProducts}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all duration-200 border border-slate-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
            Làm mới
          </button>
        </div>

        {/* Table/Data Area */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-50/75 border-b border-slate-100 text-slate-600 font-semibold text-sm">
                  <th className="py-4 px-6 text-center w-20">Mã</th>
                  <th className="py-4 px-6 w-32">Ảnh</th>
                  <th className="py-4 px-6">Tên Sản Phẩm</th>
                  <th className="py-4 px-6 w-44">Giá Bán</th>
                  <th className="py-4 px-6">Phân Loại</th>
                  <th className="py-4 px-6">Thương Hiệu</th>
                  <th className="py-4 px-6 text-center w-48">Hành Động</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  <tr>
                    <td colSpan="7" className="py-20 text-center">
                      <div className="inline-flex flex-col items-center gap-3">
                        <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-slate-500 text-sm font-medium">Đang tải dữ liệu sản phẩm...</span>
                      </div>
                    </td>
                  </tr>
                ) : products.length > 0 ? (
                  products.map((item) => (

                    <tr key={item.id} className="hover:bg-slate-50/60 transition-colors duration-150 group">
                      {/* ID */}
                      <td className="py-4 px-6 text-center font-medium text-slate-500 text-sm">
                        #{item.id}
                      </td>

                      {/* Image Thumbnail */}
                      <td className="py-4 px-6">
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-slate-50 border border-slate-100 group-hover:scale-105 transition-transform duration-200">
                          {item.thumbnail ? (
                            <img
                              src={`http://localhost/myproject/public/storage/products/${item.thumbnail}`}
                              alt={item.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.src = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=150&auto=format&fit=crop&q=60";
                              }}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-300">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </td>

                      {/* Product Name */}
                      <td className="py-4 px-6">
                        <div className="font-semibold text-slate-800 text-base group-hover:text-indigo-600 transition-colors duration-150">
                          {item.name || "Chưa đặt tên"}
                        </div>
                        {item.slug && (
                          <div className="text-xs text-slate-400 font-mono mt-0.5">
                            {item.slug}
                          </div>
                        )}
                      </td>

                      {/* Price */}
                      <td className="py-4 px-6 font-semibold text-slate-900 text-sm">
                        <span className="inline-block px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-lg border border-emerald-100">
                          {item.price ? `${Number(item.price).toLocaleString()} đ` : "Liên hệ"}
                        </span>
                      </td>

                      {/* Category */}
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center px-2.5 py-1 text-xs font-semibold bg-amber-50 text-amber-700 rounded-full border border-amber-100">
                          {item.category?.name || "Không rõ"}
                        </span>
                      </td>

                      {/* Brand */}
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center px-2.5 py-1 text-xs font-semibold bg-sky-50 text-sky-700 rounded-full border border-sky-100">
                          {item.brand?.name || "Chưa phân loại"}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <Link
                            href={`/admin/product/${item.id}/edit`}
                            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 bg-amber-500 hover:bg-amber-600 text-white font-medium text-xs rounded-lg active:scale-95 transition-all duration-150 shadow-sm"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                            Sửa
                          </Link>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 bg-rose-500 hover:bg-rose-600 text-white font-medium text-xs rounded-lg active:scale-95 transition-all duration-150 shadow-sm"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                            Xóa
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="py-20 text-center">
                      <div className="inline-flex flex-col items-center gap-2 text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                        </svg>
                        <span className="text-slate-500 font-medium text-sm">Không tìm thấy sản phẩm nào!</span>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination Controls */}
        {!loading && products.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-slate-100 shadow-sm mt-6">
            <div className="text-sm text-slate-500 font-medium">
              Hiển thị <span className="font-semibold text-slate-800">{products.length}</span> / <span className="font-semibold text-slate-800">{totalProducts}</span> sản phẩm (Trang {currentPage}/{lastPage})
            </div>

            <div className="flex gap-1.5 items-center">
              {/* Prev Button */}
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="p-2 bg-slate-50 hover:bg-slate-100 text-slate-600 disabled:opacity-40 disabled:hover:bg-slate-50 disabled:cursor-not-allowed border border-slate-200 rounded-xl transition-all duration-150 active:scale-90 cursor-pointer flex items-center justify-center"
                title="Trang trước"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
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
                      className={`min-w-[40px] h-10 px-3.5 text-sm font-semibold rounded-xl transition-all duration-155 active:scale-90 cursor-pointer ${
                        p === currentPage
                          ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/20"
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

