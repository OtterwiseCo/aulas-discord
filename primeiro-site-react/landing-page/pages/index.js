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
      <Container>
        <ServiceDescription
          title="Transform your brand"
          description="We are a full service creative agency specializing in helping brands to go fast. Engage your clients through compelling visuals that do most of the marketing for you"
          link="localhost:8000"
          color="hsl(51deg 100% 49% / 28%)"
        />
        <ImageCard backgroundImage="assets/images/egg.jpg" />
      </Container>
      <Container>
        <ImageCard backgroundImage="assets/images/stand-out.jpg" />
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
        />
        <ImageCard
          title="Photography"
          description="Great designs makes you memorable. We deliver artwork tha underscores your brand message and captures potential client attention"
          backgroundImage="assets/images/photography.jpg"
          color="hsl(198, 62%, 26%)"
        />
      </Container>
      <TestimonialsSection />
      <ImagesSection />
      <Footer />
    </Fragment>
  );
}

const Container = styled.div(
  (props) => `
  display: flex;
  ${props.minHeight ? `min-height: ${props.minHeight}` : ""}
`,
);
