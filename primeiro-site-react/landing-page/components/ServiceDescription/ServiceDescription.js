import React from "react";
import { Background, Title, Description, Link } from "./styles";

function ServiceDescription(props) {
  const { title, description, link, color } = props;

  return (
    <Background>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Link color={color} href={link}>
        LEARN MORE
      </Link>
    </Background>
  );
}

export default ServiceDescription;
