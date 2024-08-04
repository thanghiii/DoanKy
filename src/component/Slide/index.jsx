import { CCarousel, CCarouselItem, CImage } from "@coreui/react";

function Slide() {
  return (
    <>
      <CCarousel controls indicators>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src="https://xedap24h.vn/wp-content/uploads/2019/02/banner-1600x486.jpg"
            alt="slide 1"
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src="https://xedap24h.vn/wp-content/uploads/2019/02/xedap24h.jpg"
            alt="slide 2"
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src="https://xedap24h.vn/wp-content/uploads/2019/02/xedap24h2.jpg"
            alt="slide 3"
          />
        </CCarouselItem>
      </CCarousel>
    </>
  );
}

export default Slide;
