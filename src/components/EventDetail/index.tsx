import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import eventDataProps from "../../interfaces/EventData.interface";
import productDataProps from "../../interfaces/ProductData.interface";
import { fetcher } from "../../utils/fetcher";
import { formDate } from "../../utils/formDate";
import ReplyComment from "../Comment/ReplyComment";
import Product from "../Product";
import ItemsContainer from "../shared/ItemsContainer";

const EventDetail = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [event, setEvent] = useState<eventDataProps>();

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("공유 URL이 복사되었습니다!");
  };

  useEffect(() => {
    if (!router.isReady) return;
    fetcher(`/events/${router.query.id}?populate=*`).then((res) => {
      setEvent(res.data);
    });
    fetcher(
      `/events/${router.query.id}?populate=products.product_category&populate=products.product_image`
    ).then((res) => {
      setProducts(res.data.attributes.products.data);
    });
  }, [router]);

  useEffect(() => {
    console.log(event?.attributes.images.data[0]);
  }, [event]);

  return (
    <EventContainer>
      <Event>
        <li className="event-title">{event?.attributes.title}</li>
        <li className="event-period">
          {formDate(event?.attributes.start_period)}
          {` ~ `}
          {formDate(event?.attributes.end_period)}
          <Image
            src="/assets/share.png"
            alt="공유 이미지"
            width="40px"
            height="40px"
            onClick={handleShare}
          />
        </li>
        <img
          src={event?.attributes.images.data[0].attributes.image_url}
          alt="이벤트 상세 사진"
          width={958}
          height={400}
        />
        <li className="event-content">{event?.attributes.content}</li>
      </Event>
      <RelativeProducts>
        <ItemsContainer
          listTitle="관련 상품"
          itemLength={3}
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
      </RelativeProducts>
      <Comments>
        <h3>댓글</h3>
        <hr />
        <div>
          <ReplyComment />
        </div>
      </Comments>
    </EventContainer>
  );
};

const EventContainer = styled.section`
  padding: 80px;
  h3 {
    margin-bottom: 34px;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 34px;
  }
`;

const Event = styled.article`
  width: 958px;
  .event-title {
    margin-bottom: 22px;
    font-size: 3rem;
    font-weight: 700;
    line-height: 4.4rem;
  }
  .event-period {
    display: flex;
    gap: 23px;
    align-items: center;
    margin-bottom: 48px;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 34px;
    color: #666666;
  }
  .event-content {
    margin-top: 43px;
    margin-bottom: 51px;
    font-size: 2.4rem;
    font-weight: 300;
    line-height: 3.4rem;
    color: #666666;
  }
`;

const RelativeProducts = styled.article`
  margin-bottom: 140px;
`;

const Comments = styled.article`
  div {
    margin-top: 25px;
  }
`;

export default EventDetail;
