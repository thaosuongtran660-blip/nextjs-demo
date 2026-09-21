"use client";

import { useEffect, useState } from "react";

import ProductService from "@/app/_services/ProductService";
import CategoryService from "@/app/_services/CategoryService";
import BrandService from "@/app/_services/BrandService";

import { useParams, useRouter } from "next/navigation";

export default function EditProductPage() {
  // ================= STATE =================
  const { id } = useParams();
  const router = useRouter();
  const [inputs, setInputs] = useState({
    proname: "",
    slug: "",
    price: "",
    cateid: "",
    brandid: "",
    status: true,
    description: "",
  });

  const [thumbnail, setThumbnail] = useState(null);
  const [thumbPreview, setThumbPreview] = useState(null);

  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState([]);

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  // ================= LOAD DATA =================
  useEffect(() => {
    fetchCategories();
    fetchBrands();
    fetchProduct();
  }, []);

  const fetchCategories = async () => {
    try {
      const result = await CategoryService.getAll();
      setCategories(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBrands = async () => {
    try {
      const result = await BrandService.getAll();

      setBrands(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProduct = async () => {
    try {
      const result = await ProductService.getById(id);

      console.log("RESULT:", result);
      console.log("DATA:", result.data);

      const product = result.data;

      setInputs({
        proname: product.proname || "",
        slug: product.slug || "",
        price: product.price || "",
        cateid: product.cateid || "",
        brandid: product.brandid || "",
        status: product.status == 1,
        description: product.description || "",
      });

      if (product.thumbnail) {
        setThumbPreview(
          `http://localhost/hoc_laravel/public/storage/products/${product.thumbnail}`,
        );
      }
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  // ================= HANDLE CHANGE =================
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setInputs((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ================= THUMBNAIL =================
  const handleThumb = (e) => {
    const file = e.target.files[0];

    if (file) {
      setThumbnail(file);

      setThumbPreview(URL.createObjectURL(file));
    }
  };

  // ================= MULTI IMAGE =================
  const handleImages = (e) => {
    const files = Array.from(e.target.files);

    setImages(files);

    const urls = files.map((file) => URL.createObjectURL(file));

    setPreview(urls);
  };

  // ================= SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      // TEXT
      Object.keys(inputs).forEach((key) => {
        formData.append(key, inputs[key]);
      });

      // THUMBNAIL
      if (thumbnail) {
        formData.append("thumbnail", thumbnail);
      }

      // MULTIPLE IMAGE
      images.forEach((img) => {
        formData.append("images[]", img);
      });

      // DEBUG
      for (let [k, v] of formData.entries()) {
        console.log(k, v);
      }

      // UPDATE PRODUCT
      const result = await ProductService.update(id, formData);

      console.log(result);

      alert("Cập nhật sản phẩm thành công");

      // RESET FORM
      setInputs({
        proname: product.proname || "",
        slug: product.slug || "",
        price: product.price || "",
        cateid: product.cateid || "",
        brandid: product.brandid || "",
        status: true,
        description: product.description || "",
      });

      setThumbnail(null);
      setThumbPreview(null);

      setImages([]);
      setPreview([]);
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold text-center mb-5">
        Chỉnh sửa sản phẩm
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
        encType="multipart/form-data"
      >
        {/* PRODUCT NAME */}
        <input
          type="text"
          name="proname"
          value={inputs.proname}
          placeholder="Tên sản phẩm"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        {/* SLUG */}
        <input
          type="text"
          name="slug"
          value={inputs.slug}
          placeholder="Slug"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        {/* PRICE */}
        <input
          type="number"
          name="price"
          value={inputs.price}
          placeholder="Giá sản phẩm"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        {/* CATEGORY */}
        <select
          name="cateid"
          value={inputs.cateid}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">-- Chọn danh mục --</option>

          {categories.map((cat) => (
            <option key={cat.cateid} value={cat.cateid}>
              {cat.catename}
            </option>
          ))}
        </select>
        {/* BRAND */}
        <select
          name="brandid"
          value={inputs.brandid}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">-- Chọn thương hiệu --</option>

          {brands.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.brandname}
            </option>
          ))}
        </select>

        {/* STATUS */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="status"
            checked={inputs.status}
            onChange={handleChange}
          />

          <span>Hiển thị</span>
        </div>

        {/* THUMBNAIL */}
        <div>
          <input type="file" onChange={handleThumb} />

          {thumbPreview && (
            <img
              src={thumbPreview}
              alt="thumbnail"
              className="w-32 h-32 mt-2 rounded object-cover"
            />
          )}
        </div>

        {/* MULTI IMAGE */}
        <div>
          <input type="file" multiple onChange={handleImages} />

          <div className="flex flex-wrap gap-2 mt-2">
            {preview.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="preview"
                className="w-20 h-20 rounded object-cover"
              />
            ))}
          </div>
        </div>

        {/* DESCRIPTION */}
        <textarea
          name="description"
          value={inputs.description}
          placeholder="Mô tả sản phẩm"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="bg-yellow-500 text-white px-5 py-2 rounded"
        >
          Lưu sản phẩm
        </button>
      </form>
    </div>
  );
}
