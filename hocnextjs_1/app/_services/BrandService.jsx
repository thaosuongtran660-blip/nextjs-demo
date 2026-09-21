import configAPI from "../configAPI";

const BrandService = {
  getAll() {
    return configAPI.get("brand");
  },
};

export default BrandService;