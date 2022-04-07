export default interface productDataProps {
  attributes: {
    id: number;
    product_category: {
      data: {
        attributes: {
          name: string;
        };
        id: number;
      };
    };
    product_image: {
      data: [
        {
          id: number;
          attributes: {
            image_url: string;
          };
        }
      ];
    };
    brand_name: string;
    name: string;
    price: number;
    image: string;
    stock: number;
    sell_count: number;
    is_liked: boolean;
  };
  id: number;
}
