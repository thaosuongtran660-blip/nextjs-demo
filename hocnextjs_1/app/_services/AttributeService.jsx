import configAPI from "../configAPI";

const AttributeService = {

  getAll: async () => {
    const result = await configAPI.get("attribute");
    return result;
  },

}

export default AttributeService;
