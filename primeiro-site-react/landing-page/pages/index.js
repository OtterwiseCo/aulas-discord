import { Fragment } from "react";
import styled from "styled-components";
import Header from "components/Header/Header";
import ServiceDescription from "components/ServiceDescription/ServiceDescription";
import ImageCard from "components/ImageCard/ImageCard";
import TestimonialsSection from "components/TestimonialsSection/TestimonialsSection";
import ImagesSection from "components/ImagesSection/ImagesSection";
import Footer from "components/Footer/Footer";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Container flexDirectionMobile="column-reverse">
        <ServiceDescription
          title="Transform your brand"
          description="We are a full service creative agency specializing in helping brands to go fast. Engage your clients through compelling visuals that do most of the marketing for you"
          link="localhost:8000"
          color="hsl(51deg 100% 49% / 28%)"
        />
        <ImageCard
          backgroundImage="assets/images/egg.jpg"
          minHeight={["335px", "unset"]}
        />
      </Container>
      <Container flexDirectionMobile="column">
        <ImageCard
          backgroundImage="assets/images/stand-out.jpg"
          minHeight={["335px", "unset"]}
        />
        <ServiceDescription
          title="Stand out to the right audience"
          description="We are a full service creative agency specializing in helping brands to go fast. Engage your clients through compelling visuals that do most of the marketing for you"
          link="localhost:8000"
          color="hsl(7deg 99% 70% / 46%)"
        />
      </Container>
      <Container minHeight="469px">
        <ImageCard
          title="Graphic Design"
          description="Great designs makes you memorable. We deliver artwork tha underscores your brand message and captures potential client attention"
          backgroundImage="assets/images/graphic-design.jpg"
          color="hsl(167, 40%, 24%)"
          width={["100%", "unset"]}
        />
        <ImageCard
          title="Photography"
          description="Great designs makes you memorable. We deliver artwork tha underscores your brand message and captures potential client attention"
          backgroundImage="assets/images/photography.jpg"
          color="hsl(198, 62%, 26%)"
          width={["100%", "unset"]}
        />
      </Container>
      <TestimonialsSection />
      <ImagesSection />
      <Footer />
    </Fragment>
  );
}

const Container = styled.div(
  ({ minHeight, flexDirectionMobile }) => `
  display: flex;
  flex-wrap: wrap;
  ${minHeight ? `min-height: ${minHeight}` : ""}
  @media (max-width: 1024px) {
    ${flexDirectionMobile ? `flex-direction: ${flexDirectionMobile}` : ""}
  }
`,
);
