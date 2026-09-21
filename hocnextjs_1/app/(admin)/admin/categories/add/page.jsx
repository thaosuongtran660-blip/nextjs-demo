"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CategoryService from "@/app/_services/CategoryService";
import { FiArrowLeft, FiPlus, FiFolder, FiUpload, FiImage, FiGrid, FiList } from "react-icons/fi";

export default function AddCategoryPage() {
  const router = useRouter();
  
  // State for form fields aligned with DB schema
  const [inputs, setInputs] = useState({
    name: "",
    slug: "",
    description: "",
    sort_order: "0",
    parent_id: "0",
    status: "1", // 1: Hiển thị, 2: Ẩn
  });
  
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [parentCategories, setParentCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch parent categories on component mount
  useEffect(() => {
    fetchParentCategories();
  }, []);

  const fetchParentCategories = async () => {
    try {
      const res = await CategoryService.getAll();
      // Safely extract array from different API response formats
      const data = Array.isArray(res) ? res : (res?.data || res?.data?.data || []);
      setParentCategories(data);
    } catch (error) {
      console.error("Lỗi khi tải danh mục cha:", error);
    }
  };

  // Helper to generate slug from Vietnamese text
  const generateSlug = (val) => {
    return val
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Remove accents
      .replace(/đ/g, "d")
      .replace(/Đ/g, "d")
      .replace(/[^a-z0-9\s-]/g, "") // Remove special chars
      .trim()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/-+/g, "-"); // Collapse multiple dashes
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setInputs((prev) => {
      const newInputs = {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
      
      // Automatically generate slug when name changes
      if (name === "name") {
        newInputs.slug = generateSlug(value);
      }
      
      return newInputs;
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputs.name.trim()) {
      alert("Vui lòng nhập tên danh mục!");
      return;
    }

    setIsLoading(true);
    try {
      let result;
      if (imageFile) {
        const formData = new FormData();
        formData.append("name", inputs.name.trim());
        formData.append("catename", inputs.name.trim()); // support both column names
        formData.append("slug", inputs.slug.trim());
        formData.append("description", inputs.description.trim());
        formData.append("sort_order", inputs.sort_order);
        
        // Omit or send null for parent_id = "0" to avoid DB foreign key violation
        if (inputs.parent_id && inputs.parent_id !== "0") {
          formData.append("parent_id", inputs.parent_id);
        }

        formData.append("status", inputs.status);
        formData.append("thumbnail", imageFile);

        result = await CategoryService.insert(formData);
      } else {
        const jsonData = {
          name: inputs.name.trim(),
          catename: inputs.name.trim(),
          slug: inputs.slug.trim(),
          description: inputs.description.trim(),
          sort_order: Number(inputs.sort_order) || 0,
          parent_id: inputs.parent_id && inputs.parent_id !== "0" ? Number(inputs.parent_id) : null,
          status: Number(inputs.status) || 1,
        };

        result = await CategoryService.insert(jsonData);
      }

      console.log("Insert result:", result);
      alert("Thêm danh mục thành công!");
      router.push("/admin/categories");
    } catch (error) {
      console.error("Lỗi khi thêm danh mục:", error);
      
      // Parse detailed error message from response.data
      let detailedError = "Thêm danh mục thất bại. Vui lòng thử lại!";
      if (error.response?.data) {
        const errorData = error.response.data;
        if (typeof errorData === "string") {
          detailedError = errorData;
        } else if (errorData.message) {
          detailedError = errorData.message;
        } else if (errorData.error) {
          detailedError = errorData.error;
        } else if (errorData.errors) {
          // Laravel validation errors
          detailedError = Object.values(errorData.errors).flat().join("\n");
        }
      }
      
      alert(`Lỗi (Mã: ${error.response?.status || 500}):\n${detailedError}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => router.push("/admin/categories")}
          className="group mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors duration-200 cursor-pointer border-0 bg-transparent"
        >
          <FiArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
          Quay lại danh sách
        </button>

        {/* Form Container */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-md shadow-slate-100/50 overflow-hidden">
          {/* Header */}
          <div className="border-b border-slate-100 bg-slate-50/50 p-6">
            <h1 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
              <FiFolder className="text-blue-600 w-5 h-5" />
              Thêm Danh mục Mới
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Điền các thông tin dưới đây để tạo danh mục mới dựa trên cơ sở dữ liệu hệ thống.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Left Column (Inputs) - 2/3 width on large screens */}
              <div className="lg:col-span-2 space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Tên danh mục <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={inputs.name}
                    onChange={handleChange}
                    placeholder="Nhập tên danh mục (ví dụ: Điện thoại, Laptop...)"
                    required
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-sm placeholder-slate-400 text-slate-800"
                  />
                </div>

                {/* Slug */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Slug (Đường dẫn thân thiện)
                  </label>
                  <input
                    type="text"
                    name="slug"
                    value={inputs.slug}
                    onChange={handleChange}
                    placeholder="slug-danh-muc"
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-sm placeholder-slate-400 font-mono text-slate-800"
                  />
                </div>

                {/* Parent Category & Sort Order Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Parent ID */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Danh mục cha
                    </label>
                    <select
                      name="parent_id"
                      value={inputs.parent_id}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-sm text-slate-800 bg-white"
                    >
                      <option value="0">Không có (Danh mục gốc)</option>
                      {parentCategories.map((cat) => {
                        const catId = cat.id || cat.cateid;
                        const catName = cat.name || cat.catename;
                        return (
                          <option key={catId} value={catId}>
                            {catName}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  {/* Sort Order */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Thứ tự sắp xếp
                    </label>
                    <input
                      type="number"
                      name="sort_order"
                      value={inputs.sort_order}
                      onChange={handleChange}
                      placeholder="0"
                      min="0"
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-sm text-slate-800"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Mô tả danh mục
                  </label>
                  <textarea
                    name="description"
                    value={inputs.description}
                    onChange={handleChange}
                    placeholder="Mô tả ngắn gọn về danh mục này..."
                    rows={4}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-sm placeholder-slate-400 resize-none text-slate-800"
                  />
                </div>
              </div>

              {/* Right Column (Image Upload & Status) - 1/3 width on large screens */}
              <div className="space-y-6">
                {/* Image Upload Area */}
                <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50/50">
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Hình ảnh danh mục
                  </label>
                  
                  <div className="relative group border-2 border-dashed border-slate-200 rounded-xl p-4 bg-white flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-colors duration-200 min-h-[180px]">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    
                    {imagePreview ? (
                      <div className="w-full h-full flex flex-col items-center justify-center">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="max-h-[140px] rounded-lg object-contain shadow-sm border border-slate-100"
                        />
                        <span className="text-xs text-slate-400 mt-2 hover:text-blue-500">Thay đổi ảnh</span>
                      </div>
                    ) : (
                      <div className="text-center">
                        <div className="p-3 bg-blue-50 rounded-xl text-blue-600 inline-block mb-3">
                          <FiUpload className="w-6 h-6" />
                        </div>
                        <p className="text-sm font-medium text-slate-700">Tải ảnh lên</p>
                        <p className="text-xs text-slate-400 mt-1">Hỗ trợ JPG, PNG, WEBP</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Trạng thái hiển thị
                  </label>
                  <select
                    name="status"
                    value={inputs.status}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-sm text-slate-800 bg-white"
                  >
                    <option value="1">Hiển thị (Active)</option>
                    <option value="2">Ẩn (Inactive)</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Submit section */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => router.push("/admin/categories")}
                className="px-5 py-2.5 border border-slate-200 text-slate-700 text-sm font-medium rounded-xl hover:bg-slate-50 transition-all duration-200 active:scale-95 cursor-pointer bg-white"
              >
                Hủy
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 active:scale-95 shadow-md shadow-blue-500/10 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 cursor-pointer border-0"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <FiPlus className="w-4.5 h-4.5" />
                )}
                <span>{isLoading ? "Đang xử lý..." : "Tạo danh mục"}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}