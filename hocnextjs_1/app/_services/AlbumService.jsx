import configAPI from "../configAPI";

const AlbumService = {
  getAll: async () => {
    const result = await configAPI.get("albums");
    return result;
  },
  getOne: async (id) => {
    const result = await configAPI.get(`albums/${id}`);
    return result;
  },
  insert: async (data) => {
    const result = await configAPI.post(`albums`, data);
    return result;
  },
  update: async (data, id) => {
    const result = await configAPI.put(`albums/${id}`, data);
    return result;
  },
  delete: async (id) => {
    const result = await configAPI.delete(`albums/${id}`);
    return result;
  }
};

export default AlbumService;
