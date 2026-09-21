"use client";

import { useEffect, useState } from "react";
import ProductService from "@/app/_services/ProductService";
import { useParams, useRouter } from "next/navigation";
import { FiTrash2, FiAlertTriangle, FiArrowLeft, FiPackage, FiRefreshCw } from "react-icons/fi";

export default function DeleteProductPage() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const fetchProduct = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await ProductService.getById(id);
      if (result && result.data) {
        setProduct(result.data);
      } else {
        setError("Không tìm thấy thông tin sản phẩm.");
      }
    } catch (err) {
      console.error("Lỗi khi tải thông tin sản phẩm:", err);
      setError("Không thể tải thông tin sản phẩm. Vui lòng thử lại sau.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await ProductService.delete(id);
      alert(`Đã xóa sản phẩm "${product?.proname || ""}" thành công!`);
      router.push("/admin/products");
      router.refresh();
    } catch (err) {
      console.error("Lỗi khi xóa sản phẩm:", err);
      alert("Xảy ra lỗi trong quá trình xóa sản phẩm!");
      setIsDeleting(false);
    }
  };

  const getImageUrl = (imageName) => {
    if (!imageName) return null;

    if (
      imageName.startsWith("http://") ||
      imageName.startsWith("https://")
    ) {
      return imageName;
    }

    const realName = imageName.replace(/^[^_]+_/, "");
    return `http://localhost/hoc_laravel/public/storage/products/${realName}`;
  };

  const formatPrice = (price) => {
    if (price === undefined || price === null || isNaN(price)) return "Liên hệ";
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <FiRefreshCw className="w-10 h-10 animate-spin text-blue-600" />
        <p className="text-slate-500 font-medium">Đang tải thông tin sản phẩm...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-md mx-auto mt-12 bg-white border border-slate-200 shadow-xl rounded-2xl p-6 text-center">
        <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-100">
          <FiAlertTriangle className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-bold text-slate-800 mb-2">Đã xảy ra lỗi</h3>
        <p className="text-slate-500 mb-6 text-sm">{error || "Sản phẩm không tồn tại hoặc đã bị xóa."}</p>
        <button
          onClick={() => router.push("/admin/products")}
          className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
        >
          <FiArrowLeft className="w-4 h-4" />
          Quay lại danh sách
        </button>
      </div>
    );
  }

  const imageUrl = getImageUrl(product.thumbnail || product.image);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      {/* Back Link */}
      <button
        onClick={() => router.push("/admin/products")}
        className="flex items-center gap-2 text-slate-500 hover:text-slate-850 mb-6 font-medium text-sm transition-colors cursor-pointer bg-transparent border-0"
      >
        <FiArrowLeft className="w-4 h-4" />
        Quay lại danh sách sản phẩm
      </button>

      {/* Main card */}
      <div className="bg-white border border-slate-150 shadow-xl rounded-3xl overflow-hidden animate-fadeIn">
        {/* Warning Banner */}
        <div className="bg-red-50/70 border-b border-red-100 p-6 flex items-start gap-4">
          <div className="p-3 bg-red-100 text-red-600 rounded-2xl border border-red-200 shadow-sm shrink-0">
            <FiAlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-red-800">Xác nhận xóa sản phẩm</h2>
            <p className="text-sm text-red-600 mt-1">
              Hành động này là vĩnh viễn và không thể hoàn tác. Vui lòng xác nhận bạn thực sự muốn xóa sản phẩm này.
            </p>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="p-6 border-b border-slate-100">
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            {/* Thumbnail */}
            <div className="shrink-0">
              {imageUrl ? (
                <div className="w-28 h-28 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                  <img
                    src={imageUrl}
                    alt={product.proname}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/100x100?text=No+Image";
                    }}
                  />
                </div>
              ) : (
                <div className="w-28 h-28 bg-slate-50 border border-dashed border-slate-200 rounded-2xl flex items-center justify-center text-slate-400">
                  <FiPackage className="w-10 h-10" />
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-grow text-center sm:text-left space-y-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-105 text-slate-700 border border-slate-200">
                ID: #{product.id}
              </span>
              <h3 className="text-xl font-bold text-slate-900 leading-tight">
                {product.proname}
              </h3>
              {product.slug && (
                <p className="text-slate-500 text-sm font-mono">{product.slug}</p>
              )}
              
              <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                  {product.categoryname || "Chưa phân loại"}
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-100">
                  {product.brandname || "Không rõ thương hiệu"}
                </span>
              </div>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="mt-6 bg-slate-50/50 rounded-2xl border border-slate-100 p-4 flex items-center justify-between">
            <span className="text-slate-500 font-medium text-sm">Giá sản phẩm:</span>
            <span className="text-lg font-extrabold text-slate-900">
              {formatPrice(product.price)}
            </span>
          </div>

          {/* Description Box */}
          {product.description && (
            <div className="mt-4">
              <h4 className="text-slate-750 font-semibold text-sm mb-1">Mô tả sản phẩm:</h4>
              <p className="text-slate-500 text-sm bg-slate-50/30 border border-slate-100 rounded-xl p-3 max-h-32 overflow-y-auto leading-relaxed">
                {product.description}
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="p-6 bg-slate-50/50 flex flex-col sm:flex-row gap-3 sm:justify-end">
          <button
            onClick={() => router.push("/admin/products")}
            disabled={isDeleting}
            className="px-5 py-3 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 rounded-xl font-semibold transition-all duration-155 active:scale-95 text-center cursor-pointer disabled:opacity-50"
          >
            Hủy bỏ
          </button>
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="px-6 py-3 bg-red-650 hover:bg-red-700 text-white font-semibold rounded-xl transition-all duration-155 active:scale-95 shadow-md shadow-red-500/10 hover:shadow-lg hover:shadow-red-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isDeleting ? (
              <>
                <FiRefreshCw className="w-5 h-5 animate-spin" />
                <span>Đang xóa...</span>
              </>
            ) : (
              <>
                <FiTrash2 className="w-5 h-5" />
                <span>Đồng ý xóa</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
