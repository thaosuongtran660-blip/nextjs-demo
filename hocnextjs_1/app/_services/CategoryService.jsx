import configAPI from "../configAPI";

const CategoryService = {
  getAll: async (keyword = "", page = 1) => {
    const result = await configAPI.get(
      `category?keyword=${keyword}&page=${page}`,
    );
    return result;
  },

  getOne: async (id) => {
    const result = await configAPI.get(`category/${id}`);
    return result;
  },

  insert: async (data) => {
    try {
      const result = await configAPI.post("category", data);
      return result;
    } catch (error) {
      console.error("Axios Error:", error.response?.data || error.message);
      throw error;
    }
  },

  update: async (id, data) => {
    data.append("_method", "PUT");

    return await configAPI.post(`category/${id}`, data);
  },

  getById(id) {
    return configAPI.get(`category/${id}`);
  },

  delete: async (id) => {
    const result = await configAPI.delete(`category/${id}`);
    return result;
  },

};

export default CategoryService;
