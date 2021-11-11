import styled from "styled-components";
import ImageCard from "components/ImageCard/ImageCard";

function ImagesSection() {
  return (
    <Section>
      <ImageCard backgroundImage="assets/images/image-gallery-milkbottles.jpg" />
      <ImageCard backgroundImage="assets/images/image-gallery-orange.jpg" />
      <ImageCard backgroundImage="assets/images/image-gallery-cone.jpg" />
      <ImageCard backgroundImage="assets/images/image-gallery-sugarcubes.jpg" />
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  min-height: 450px;
`;

export default ImagesSection;
