import styled from "styled-components";
import ImageCard from "components/ImageCard/ImageCard";

function ImagesSection() {
  return (
    <Section id="projects">
      <Row>
        <ImageCard backgroundImage="assets/images/image-gallery-milkbottles.jpg" />
        <ImageCard backgroundImage="assets/images/image-gallery-orange.jpg" />
      </Row>
      <Row>
        <ImageCard backgroundImage="assets/images/image-gallery-cone.jpg" />
        <ImageCard backgroundImage="assets/images/image-gallery-sugarcubes.jpg" />
      </Row>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const Row = styled.div`
  display: flex;
  flex: 1;
  min-height: 175px;
  @media (min-width: 1024px) {
    min-height: 450px;
  }
`;

export default ImagesSection;
