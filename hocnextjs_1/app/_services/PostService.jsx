import configAPI from "../configAPI";

const PostService = {
  getAll: async () => {
    const result = await configAPI.get("post");
    return result;
  },
  getOne: async (id) => {
    const result = await configAPI.get(`post/${id}`);
    return result;
  },
  insert: async (data) => {
    const result = await configAPI.post(`post`, data);
    return result;
  },
  update: async (data, id) => {
    const result = await configAPI.put(`post/${id}`, data);
    return result;
  },
  delete: async (id) => {
    const result = await configAPI.delete(`post/${id}`);
    return result;
  }
};

export default PostService;
