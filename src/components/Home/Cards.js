import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import phone from "../../resources/icons/Phone.svg";
import coffee from "../../resources/icons/Coffee.svg";
import note from "../../resources/icons/Note.svg";
import blueCircle from "../../resources/icons/BlueCircle.svg";
import rightArrow from "../../resources/icons/RightArrow.svg";

const SliderWrapper = styled.div`
  width: 100%;
  margin: 97px auto 0;
`;

const Slide = styled(Slider)`
  .slick-slide {
    padding: 20px 20px 50px;
  }

  .slick-dots li {
    width: 10px;
    height: 10px;
    margin: 0 20px;
    bottom: 0;
  }

  .slick-dots li button {
    width: 10px;
    height: 10px;
  }

  .slick-dots li button:before {
    width: 10px;
    height: 10px;
    color: transparent;
    opacity: 0.2;
    border: 2px solid #312477;
    border-radius: 50%;
  }

  .slick-dots li.slick-active button:before {
    border: 2px solid #312477;
    opacity: 1;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 81px 84px 94px 94px;
  color: #312477;
  border: 2px solid #e9e7fc;
  margin: auto;
  transition: 0.9s;
  :hover {
    transform: scale(1.02);
    cursor: pointer;
    border: 2px solid #312477;
  }
`;

const IconContainer = styled.div`
  position: relative;
`;

const Svg = styled.img``;

const SvgCircle = styled.img`
  position: absolute;
  bottom: -13px;
  left: 14px;
`;

const Heading = styled.div`
  font-family: "Space Grotesk", sans-serif;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  padding: 54px 0 26px;
`;

const Text = styled.div`
  font-size: 18px;
  line-height: 28px;
  padding-bottom: 46px;
`;

const LinkSection = styled.div`
  display: flex;
`;

const Link = styled.a`
  font-size: 17px;
  line-height: 22px;
  padding-right: 28px;
  text-decoration: underline;
`;

const Cards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <SliderWrapper>
      <Slide {...settings}>
        <Card>
          <IconContainer>
            <Svg src={note} />
            <SvgCircle src={blueCircle} />
          </IconContainer>
          <Heading>
            Lorem Ipsum is simply dummy of the printing and typesetting
          </Heading>
          <Text>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </Text>
          <LinkSection>
            <Link>Read more</Link>
            <Svg src={rightArrow} />
          </LinkSection>
        </Card>
        <Card>
          <IconContainer>
            <Svg src={coffee} />
            <SvgCircle src={blueCircle} />
          </IconContainer>
          <Heading>
            Contrary to popular belief, lorem Ipsum is not simply
          </Heading>
          <Text>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </Text>
          <LinkSection>
            <Link>Read more</Link>
            <Svg src={rightArrow} />
          </LinkSection>
        </Card>
        <Card>
          <IconContainer>
            <Svg src={phone} />
            <SvgCircle src={blueCircle} />
          </IconContainer>
          <Heading>
            There are many variations of passages of Lorem Ipsum avai
          </Heading>
          <Text>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </Text>
          <LinkSection>
            <Link>Read more</Link>
            <Svg src={rightArrow} />
          </LinkSection>
        </Card>
        <Card>
          <IconContainer>
            <Svg src={note} />
            <SvgCircle src={blueCircle} />
          </IconContainer>
          <Heading>
            Lorem Ipsum is simply dummy of the printing and typesetting
          </Heading>
          <Text>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </Text>
          <LinkSection>
            <Link>Read more</Link>
            <Svg src={rightArrow} />
          </LinkSection>
        </Card>
      </Slide>
    </SliderWrapper>
  );
};

export default Cards;
