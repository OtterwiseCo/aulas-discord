import styled from "styled-components";

const Testimonial = (props) => {
  const { profileImage, description, name, role } = props;
  return (
    <Container>
      <Image src={profileImage} />
      <Description>{description}</Description>
      <div>
        <PersonName>{name}</PersonName>
        <PersonRole>{role}</PersonRole>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 400px;
  padding: 1.4rem;
`;

const Image = styled.img`
  border-radius: 50%;
  max-width: 80px;
`;

const Description = styled.p`
  font-family: "Barlow", serif;
  text-align: center;
  color: #00000094;
  line-height: 2;
`;

const PersonName = styled.p`
  font-family: "Fraunces", serif;
  font-weight: 900;
  text-align: center;
  font-size: 1.2rem;
  margin: 0;
`;

const PersonRole = styled.p`
  font-family: "Barlow", serif;
  text-align: center;
  font-size: 0.8rem;
  color: #47525d6b;
  font-weight: 700;
`;

export default Testimonial;
