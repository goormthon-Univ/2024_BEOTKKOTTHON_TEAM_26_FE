import exampleImage from "../images/img.png"; // 'src/images' 폴더 내에 위치
import exampleImage2 from "../images/img_1.png"; // 'src/images' 폴더 내에 위치
import exampleImage3 from "../images/img_2.png";
import { Carousel, Image } from "react-bootstrap";
import styled from "styled-components"; // 'src/images' 폴더 내에 위치
const StyledCarouselItem = styled(Carousel.Item)`
  max-width: 75% // ;
`;

function CarouselsInDetail() {
  return (
    <Carousel>
      <StyledCarouselItem>
        {/*<Image style={{margin: '30px'}} src={exampleImage} fluid/>*/}
        <Image
          style={{ marginLeft: "15%" }}
          src={exampleImage}
          alt="First slide"
          fluid
        />
        {/*fluid가 반응형*/}
      </StyledCarouselItem>

      <StyledCarouselItem>
        {/*<Image style={{margin: '30px'}} src={exampleImage} fluid/>*/}
        <Image
          style={{ marginLeft: "15%" }}
          src={exampleImage2}
          alt="First slide"
          fluid
        />
        {/*fluid가 반응형*/}
      </StyledCarouselItem>

      <StyledCarouselItem>
        {/*<Image style={{margin: '30px'}} src={exampleImage} fluid/>*/}
        <Image
          style={{ marginLeft: "15%" }}
          src={exampleImage3}
          alt="First slide"
          fluid
        />
        {/*fluid가 반응형*/}
      </StyledCarouselItem>
    </Carousel>
  );
}

export default CarouselsInDetail;
