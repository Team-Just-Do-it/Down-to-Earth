import productDataProps from "./ProductData.interface";

export default interface eventDataProps {
  attributes: {
    title: string;
    content: string;
    start_period: string;
    end_period: string;
    comments: {};
    event_category: {
      data: {
        attributes: {
          name: string;
        };
        id: number;
      };
    };
    products: {
      data: productDataProps;
    };
    images: {
      data: [
        {
          id: number;
          attributes: {
            image_url: string;
          };
        }
      ];
    };
  };

  id: number;
}
