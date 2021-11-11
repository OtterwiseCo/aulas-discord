import styled from "styled-components";

import Testimonial from "./Testimonial";

const data = [
  {
    profileImage: "assets/images/emily.jpg",
    description:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R.",
    role: "Marketing Director",
  },
  {
    profileImage: "assets/images/thomas.jpg",
    description:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Thomas S.",
    role: "Chief Operation Officer",
  },
  {
    profileImage: "assets/images/jennie.jpg",
    description:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Jennie F.",
    role: "Business Owner",
  },
];

const TestimonialsSection = () => {
  return (
    <Section>
      <Title>CLIENT TESTIMONIALS</Title>
      <Row>
        {data.map((person, index) => (
          <Testimonial {...person} key={index} />
        ))}
      </Row>
    </Section>
  );
};

const Section = styled.section`
  padding: 100px 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 50px 160px 0 160px;
`;

const Title = styled.h2`
  font-family: "Fraunces", serif;
  letter-spacing: 5.7px;
  color: #47525d6b;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 900;
`;

export default TestimonialsSection;
