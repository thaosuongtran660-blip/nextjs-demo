import configAPI from "../configAPI";

const ProductSaleService = {

    insert: async(data) => {

        return await configAPI.post(
            "product-sale",
            data
        );

    }

}

export default ProductSaleService;