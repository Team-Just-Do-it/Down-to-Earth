import type { NextPage } from "next";
import styled from "@emotion/styled";
import Image from "next/image";
import Event from "../../components/Event";
import Product from "../../components/Product";
import ItemsContainer from "../../components/shared/ItemsContainer";
import { useEffect, useState } from "react";
import { fetcher } from "../../utils/fetcher";
import productDataProps from "../../interfaces/ProductData.interface";
import eventDataProps from "../../interfaces/EventData.interface";

const MainPage: NextPage = () => {
  const [products, setProducts] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetcher("/products?populate=*").then((res) => {
      setProducts(res.data);
    });
    fetcher("/events?populate=*").then((res) => {
      setEvents(res.data);
    });
  }, []);

  return (
    <>
      <Image
        src="/assets/Banner_sample.png"
        alt="메인 이미지"
        width="100"
        height="24"
        layout="responsive"
      />
      <Container>
        <ItemsContainer
          listTitle="추천 상품"
          itemLength={4}
          itemWidth={"270px"}
          itemGap={"60px"}
        >
          {products?.map((product: productDataProps, index) => {
            while (index < 4)
              return (
                <Product
                  key={`product_${index}`}
                  productId={product.id}
                  productName={product.attributes.name}
                  productPrice={product.attributes.price}
                  productBrand={product.attributes.brand_name}
                  productCategory={
                    product.attributes.product_category.data.attributes.name
                  }
                  productLike={product.attributes.is_liked}
                  productImage={
                    product.attributes.product_image.data[0].attributes
                      .image_url
                  }
                ></Product>
              );
          })}
        </ItemsContainer>

        <ItemsContainer
          listTitle="이벤트"
          itemLength={3}
          itemWidth={"380px"}
          itemGap={"60px"}
        >
          {events.map((event: eventDataProps, index) => {
            while (index < 3)
              return (
                <Event
                  key={`event_${index}`}
                  eventId={event.id}
                  eventTitle={event.attributes.title}
                  eventContent={event.attributes.content.substring(0, 150)}
                  eventStart={event.attributes.start_period}
                  eventEnd={event.attributes.end_period}
                  eventImage={
                    event.attributes.images.data[0].attributes.image_url
                  }
                ></Event>
              );
          })}
        </ItemsContainer>
      </Container>
    </>
  );
};

const Container = styled.section`
  padding-left: 96px;

  & > div {
    margin-top: 40px;
  }
`;

export default MainPage;
