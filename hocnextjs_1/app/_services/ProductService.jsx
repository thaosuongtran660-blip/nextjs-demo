import configAPI from "../configAPI";

const ProductService = {
  getAll: async (keyword = "", page = 1) => {
    const result = await configAPI.get(
      `product?keyword=${keyword}&page=${page}`,
    );
    return result;
  },

  getOne: async (id) => {
    const result = await configAPI.get(`product/${id}`);
    return result;
  },

  insert: async (data) => {
    const result = await configAPI.post(`product`, data);
    return result;
  },

  update: async (id, data) => {
    data.append("_method", "PUT");

    return await configAPI.post(`product/${id}`, data);
  },

  getById(id) {
    return configAPI.get(`product/${id}`);
  },

  delete: async (id) => {
    const result = await configAPI.delete(`product/${id}`);
    return result;
  },
};

export default ProductService;
