"use client";
import axios from "axios";
import { useEffect, useState } from "react";

// 1: install slugify
// npm install slugify
// 2: import slugify
import slugify from "slugify";

import ProductService from "@/app/_services/ProductService";
import CategoryService from "@/app/_services/CategoryService";
import BrandService from "@/app/_services/BrandService";
import AttributeService from "@/app/_services/AttributeService";

export default function AddProductPage() {

  const [inputs, setInputs] = useState({
    name: "",
    slug: "",
    category_id: "",
    brand_id: "",
    price: "",
    sale_price: "",
    date_begin: "",
    date_end: "",
    description: "",
    content: "",
    status: true,
  });

  // b1: tạo state lưu lỗi
  const [errors, setErrors] = useState({
    name: "",
    slug: "",
    price: "",
    category_id: "",
    brand_id: "",
    thumbnail: "",
    description: "",
  });

  const [thumbnail, setThumbnail] = useState(null);
  const [thumbPreview, setThumbPreview] = useState(null);

  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [attributes, setAttributes] = useState([]);

  const [attributeValues, setAttributeValues] = useState([]);
  const [enableSale, setEnableSale] = useState(false);
  const [activeTab, setActiveTab] = useState("general");
  const [openAttribute, setOpenAttribute] = useState(false);
  const [openValue, setOpenValue] = useState(false);

  const [attributeName, setAttributeName] = useState("");
  const [valueName, setValueName] = useState("");
  const [attributeDescription, setAttributeDescription] = useState("");

  const [currentAttribute, setCurrentAttribute] = useState(null);

  // Load dữ liệu
  useEffect(() => {
    fetchCategories();
    fetchBrands();
    fetchAttributes();
  }, []);

  // Check trùng tên/slug
  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputs.name || inputs.slug) {
        checkDuplicate(inputs.name, inputs.slug);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [inputs.name, inputs.slug]);

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

  const fetchAttributes = async () => {
    try {
      const result = await AttributeService.getAll();

      setAttributes(result.data);

    } catch (error) {
      console.log(error);
    }
  };

  // 3. xử lý slug
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setInputs((prev) => {
      const newInputs = {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };

      if (name === "name") {
        newInputs.slug = slugify(value, {
          lower: true,
          strict: true,
          locale: "vi",
        });
      }

      return newInputs;
    });
  };

  const handleSaleChange = (e) => {
    const { name, value } = e.target;

    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleThumbnail = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setThumbnail(file);

    setThumbPreview(
      URL.createObjectURL(file)
    );
  };

  const handleImages = (e) => {

    const files = Array.from(e.target.files);

    setImages((prev) => [
      ...prev,
      ...files,
    ]);

    const previews = files.map(file =>
      URL.createObjectURL(file)
    );

    setPreviewImages((prev) => [
      ...prev,
      ...previews,
    ]);

  };

  const checkDuplicate = async (name, slug) => {

    try {

      const res = await axios.get(
        "http://localhost/myproject/public/api/product/check",
        {
          params: {
            name,
            slug
          }
        }
      );

      setErrors({
        name: res.data.name_exists
          ? "Tên sản phẩm đã tồn tại"
          : "",

        slug: res.data.slug_exists
          ? "Slug đã tồn tại"
          : ""
      });

    } catch (error) {
      console.log(error);
    }

  }

  const handleAttribute = (valueId) => {

    setAttributeValues((prev) => {

      if (prev.includes(valueId)) {

        return prev.filter(
          (id) => id !== valueId
        );
      }

      return [...prev, valueId];
    });
  };
  const handleCreateAttribute = async () => {


    try {
      const response = await axios.post(
        "http://localhost/myproject/public/api/attribute",
        {
          name: attributeName,
          description: attributeDescription,
        }
      );

      const newAttribute = {
        ...response.data.data,
        values: [],
      };

      setAttributes([
        ...attributes,
        newAttribute,
      ]);

      setAttributeName("");
      setAttributeDescription("");
      setOpenAttribute(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCreateValue = async () => {
    if (!valueName.trim()) {
      alert("Vui lòng nhập giá trị");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost/myproject/public/api/attribute-value",
        {
          attribute_id: currentAttribute,
          value: valueName,
        }
      );

      setAttributes(
        attributes.map((item) =>
          item.id === currentAttribute
            ? {
              ...item,
              values: [
                ...item.values,
                response.data.data,
              ],
            }
            : item
        )
      );

      setValueName("");
      setOpenValue(false);
      setCurrentAttribute(null);
    } catch (error) {
      console.log(error);
      alert("Thêm giá trị thất bại");
    }
  };

  // b2: Viết hàm validate một field
  const validateField = (name, value) => {

    let error = "";

    switch (name) {

      case "name":
        if (!value.trim()) {
          error = "Tên sản phẩm không được để trống";
        }
        break;

      case "slug":
        if (!value.trim()) {
          error = "Slug không được để trống";
        }
        break;

      case "price":
        if (!value) {
          error = "Vui lòng nhập giá";
        } else if (Number(value) <= 0) {
          error = "Giá phải lớn hơn 0";
        }
        break;

      case "category_id":
        if (!value) {
          error = "Vui lòng chọn danh mục";
        }
        break;

      case "brand_id":
        if (!value) {
          error = "Vui lòng chọn thương hiệu";
        }
        break;

      case "description":
        if (!value.trim()) {
          error = "Vui lòng nhập mô tả";
        }
        break;

      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const removeImage = (index) => {

    setImages((prev) =>
      prev.filter((_, i) => i !== index)
    );

    setPreviewImages((prev) =>
      prev.filter((_, i) => i !== index)
    );

  };

  const handleSubmit = async (e) => {

    // b4: Gọi hàm validate cho từng field
    validateField("name", inputs.name);
    validateField("slug", inputs.slug);
    validateField("price", inputs.price);
    validateField("category_id", inputs.category_id);
    validateField("brand_id", inputs.brand_id);
    validateField("description", inputs.description);

    const newErrors = {};

    if (!inputs.name.trim())
      newErrors.name = "Tên sản phẩm không được để trống";

    if (!inputs.slug.trim())
      newErrors.slug = "Slug không được để trống";

    if (!inputs.price)
      newErrors.price = "Vui lòng nhập giá";

    if (!inputs.category_id)
      newErrors.category_id = "Vui lòng chọn danh mục";

    if (!inputs.brand_id)
      newErrors.brand_id = "Vui lòng chọn thương hiệu";

    if (!inputs.description.trim())
      newErrors.description = "Vui lòng nhập mô tả";

    if (!thumbnail)
      newErrors.thumbnail = "Vui lòng chọn ảnh đại diện";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }
    // ======================================

    e.preventDefault();

    try {

      const formData = new FormData();

      Object.keys(inputs).forEach((key) => {
        formData.append(
          key,
          inputs[key]
        );
      });

      if (thumbnail) {
        formData.append(
          "thumbnail",
          thumbnail
        );
      }

      images.forEach((image) => {
        formData.append(
          "images[]",
          image
        );
      });

      attributeValues.forEach((id) => {
        formData.append(
          "attribute_values[]",
          id
        );
      });

      const result =
        await ProductService.insert(
          formData
        );

      console.log(result);

      alert(
        "Thêm sản phẩm thành công"
      );

      setInputs({
        name: "",
        slug: "",
        category_id: "",
        brand_id: "",
        price: "",
        sale_price: "",
        description: "",
        content: "",
        status: true,
      });

      setThumbnail(null);
      setThumbPreview(null);

      setImages([]);
      setPreviewImages([]);

      setAttributeValues([]);

    } catch (error) {

      console.log(error);

      console.log(error.response);

      console.log(error.response?.data);

    }

  };

  console.log(categories);

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

        <div className="px-8 py-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900">
            Thêm Sản Phẩm
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Tạo sản phẩm mới cho cửa hàng.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">

              <button
                type="button"
                onClick={() => setActiveTab("general")}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition ${activeTab === "general"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
              >
                Thông tin chung
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("images")}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition ${activeTab === "images"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
              >
                Hình ảnh
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("attributes")}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition ${activeTab === "attributes"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
              >
                Thuộc tính
              </button>

            </div>
          </div>

          <div className="p-8">

            {/* THÔNG TIN CHUNG */}
            {activeTab === "general" && (
              <div className="space-y-6">

                {/* Tên sản phẩm */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Tên sản phẩm
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={inputs.name}
                    onChange={handleChange}
                    // b3: khi người dùng rời khỏi ô input thì validate
                    onBlur={(e) =>
                      validateField(
                        e.target.name,
                        e.target.value
                      )
                    }
                    // -------------------
                    className={`
                      w-full
                      rounded-lg
                      px-4
                      py-3
                      border
                      ${errors.name
                        ? "border-red-500"
                        : "border-gray-300"}
                      `}
                  />

                  {/* b4: hien thi thong bao loi */}
                  {
                    errors.name &&
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name}
                    </p>
                  }

                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Slug
                  </label>
                  <input
                    type="text"
                    name="slug"
                    value={inputs.slug}
                    onChange={handleChange}
                    // b3: khi người dùng rời khỏi ô input thì validate
                    onBlur={(e) =>
                      validateField(
                        e.target.name,
                        e.target.value
                      )
                    }
                    // -------------------
                    className={`
                      w-full
                      rounded-lg
                      px-4
                      py-3
                      border
                      ${errors.slug
                        ? "border-red-500"
                        : "border-gray-300"}
                      `}
                  />
                  {
                    errors.slug &&
                    <p className="text-red-500 text-sm mt-1">
                      {errors.slug}
                    </p>
                  }
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Giá sản phẩm
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={inputs.price}
                    onChange={handleChange}
                    // b3: khi người dùng rời khỏi ô input thì validate
                    onBlur={(e) =>
                      validateField(
                        e.target.name,
                        e.target.value
                      )
                    }
                    // -------------------
                    className={`
                      w-full
                      rounded-lg
                      px-4
                      py-3
                      border
                      ${errors.price
                        ? "border-red-500"
                        : "border-gray-300"}
                      `}
                  />
                  {errors.price && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.price}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2 pt-2">

                  <input
                    type="checkbox"
                    checked={enableSale}
                    onChange={(e) => setEnableSale(e.target.checked)}
                    className="w-4 h-4"
                  />

                  <label className="text-sm font-medium text-gray-700">
                    Thiết lập giá khuyến mãi
                  </label>

                </div>

                {
                  enableSale && (

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Giá khuyến mãi
                        </label>

                        <input
                          type="number"
                          name="sale_price"
                          value={inputs.sale_price}
                          onChange={handleSaleChange}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Ngày bắt đầu
                        </label>

                        <input
                          type="date"
                          name="date_begin"
                          value={inputs.date_begin}
                          onChange={handleSaleChange}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Ngày kết thúc
                        </label>

                        <input
                          type="date"
                          name="date_end"
                          value={inputs.date_end}
                          onChange={handleSaleChange}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        />
                      </div>

                    </div>

                  )
                }

                <div className="grid md:grid-cols-2 gap-6">
                  {/* danh mục */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Danh mục
                    </label>

                    <select
                      name="category_id"
                      value={inputs.category_id}
                      onChange={handleChange}
                      // b3: khi người dùng rời khỏi ô input thì validate
                      onBlur={(e) =>
                        validateField(
                          e.target.name,
                          e.target.value
                        )
                      }
                      // -------------------
                      className={`
                        w-full
                        rounded-lg
                        px-4
                        py-3
                        border
                        ${errors.category_id
                          ? "border-red-500"
                          : "border-gray-300"}
                      `}
                    >
                      <option value="">Chọn danh mục</option>

                      {categories.map((item) => {
                        console.log(item);

                        return (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                    {errors.category_id && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.category_id}
                      </p>
                    )}
                  </div>

                  {/* thương hiệu */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Thương hiệu
                    </label>

                    <select
                      name="brand_id"
                      value={inputs.brand_id}
                      onChange={handleChange}
                      // b3: khi người dùng rời khỏi ô input thì validate
                      onBlur={(e) =>
                        validateField(
                          e.target.name,
                          e.target.value
                        )
                      }
                      // -------------------
                      className={`
                        w-full
                        rounded-lg
                        px-4
                        py-3
                        border
                        ${errors.brand_id
                          ? "border-red-500"
                          : "border-gray-300"}
                      `}
                    >
                      <option value="">Chọn thương hiệu</option>

                      {brands.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    {errors.brand_id && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.brand_id}
                      </p>
                    )}
                  </div>

                </div>

                {/* mô tả */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Mô tả
                  </label>

                  <textarea
                    name="description"
                    value={inputs.description}
                    onChange={handleChange}
                    // b3: khi người dùng rời khỏi ô input thì validate
                    onBlur={(e) =>
                      validateField(
                        e.target.name,
                        e.target.value
                      )
                    }
                    // -------------------
                    rows={5}
                    className={`
                      w-full
                      rounded-lg
                      px-4
                      py-3
                      border
                      ${errors.description
                        ? "border-red-500"
                        : "border-gray-300"}
`}
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.description}
                    </p>
                  )}
                </div>

              </div>
            )}

            {/* HÌNH ẢNH */}
            {activeTab === "images" && (
              <div className="space-y-8">

                <div className="border rounded-xl p-6">
                  <h3 className="font-semibold mb-4">
                    Ảnh đại diện
                  </h3>

                  <input
                    type="file"
                    onChange={handleThumbnail}
                  />

                  {thumbPreview && (
                    <img
                      src={thumbPreview}
                      className="w-40 h-40 mt-5 rounded-xl object-cover border"
                      alt=""
                    />
                  )}
                </div>

                <div className="border rounded-xl p-6">
                  <h3 className="font-semibold mb-4">
                    Album ảnh
                  </h3>

                  <input
                    type="file"
                    multiple
                    onChange={handleImages}
                  />
                  <div className="flex flex-wrap gap-4 mt-5">

                    {previewImages.map((image, index) => (

                      <div
                        key={index}
                        className="relative"
                      >

                        <img
                          src={image}
                          className="w-32 h-32 rounded-xl object-cover border"
                          alt=""
                        />

                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="
          absolute
          -top-2
          -right-2
          w-6
          h-6
          rounded-full
          bg-red-500
          text-white
          text-sm
        "
                        >
                          ✕
                        </button>

                      </div>

                    ))}

                  </div>
                </div>

              </div>
            )}

            {activeTab === "attributes" && (
              <>
                <div className="bg-white border border-gray-200 rounded-2xl p-6">

                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-bold text-gray-800">
                      Thuộc tính sản phẩm
                    </h2>

                    <button
                      type="button"
                      onClick={() => setOpenAttribute(true)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      + Thêm thuộc tính
                    </button>
                  </div>

                  {/* Danh sách thuộc tính */}
                  <div className="space-y-5">
                    {attributes.map((attribute) => (
                      <div
                        key={attribute.id}
                        className="border border-gray-200 rounded-xl p-5"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold text-gray-800">
                            {attribute.name}
                          </h3>

                          <button
                            type="button"
                            onClick={() => {
                              setCurrentAttribute(attribute.id);
                              setOpenValue(true);
                            }}
                            className="text-blue-600 font-medium hover:underline"
                          >
                            +Thêm Giá trị
                          </button>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          {attribute.values?.map((value) => (
                            <label
                              key={value.id}
                              className="
                    flex items-center gap-2
                    border border-gray-200
                    rounded-lg
                    px-3 py-2
                    cursor-pointer
                    hover:bg-gray-50
                  "
                            >
                              <input
                                type="checkbox"
                                checked={attributeValues.includes(
                                  value.id
                                )}
                                onChange={() =>
                                  handleAttribute(value.id)
                                }
                              />

                              <span>{value.value}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal thêm thuộc tính */}
                {openAttribute && (
                  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-6 w-[500px] shadow-xl">

                      <h2 className="text-xl font-bold mb-5">
                        Thêm thuộc tính
                      </h2>

                      <div className="space-y-4">

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Tên thuộc tính
                          </label>

                          <input
                            type="text"
                            value={attributeName}
                            onChange={(e) =>
                              setAttributeName(e.target.value)
                            }
                            placeholder="Ví dụ: Chất liệu"
                            className="w-full border border-gray-300 rounded-lg p-3"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Mô tả
                          </label>

                          <textarea
                            rows={4}
                            value={attributeDescription}
                            onChange={(e) =>
                              setAttributeDescription(e.target.value)
                            }
                            placeholder="Nhập mô tả..."
                            className="w-full border border-gray-300 rounded-lg p-3"
                          />
                        </div>

                      </div>

                      <div className="flex justify-end gap-3 mt-6">
                        <button
                          type="button"
                          onClick={() => {
                            setOpenAttribute(false);
                            setAttributeName("");
                            setAttributeDescription("");
                          }}
                          className="border px-4 py-2 rounded-lg"
                        >
                          Hủy
                        </button>

                        <button
                          type="button"
                          onClick={handleCreateAttribute}
                          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                        >
                          Lưu
                        </button>
                      </div>

                    </div>
                  </div>
                )}

                {/* Modal thêm giá trị */}
                {openValue && (
                  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-6 w-[450px] shadow-xl">

                      <h2 className="text-xl font-bold mb-5">
                        Thêm giá trị thuộc tính
                      </h2>

                      <input
                        type="text"
                        value={valueName}
                        onChange={(e) =>
                          setValueName(e.target.value)
                        }
                        placeholder="Ví dụ: Đỏ"
                        className="w-full border border-gray-300 rounded-lg p-3"
                      />

                      <div className="flex justify-end gap-3 mt-6">
                        <button
                          type="button"
                          onClick={() => {
                            setOpenValue(false);
                            setValueName("");
                          }}
                          className="border px-4 py-2 rounded-lg"
                        >
                          Hủy
                        </button>

                        <button
                          type="button"
                          onClick={handleCreateValue}
                          className="
                bg-blue-600
                text-white
                px-5
                py-2
                rounded-lg
                hover:bg-blue-700
              "
                        >
                          Lưu
                        </button>
                      </div>

                    </div>
                  </div>
                )}
              </>
            )}

          </div>

          <div className="px-8 py-5 border-t bg-gray-50 flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Thêm sản phẩm
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}