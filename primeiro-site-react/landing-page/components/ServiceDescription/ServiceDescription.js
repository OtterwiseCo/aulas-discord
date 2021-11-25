import React from "react";
import { Background, Title, Description, Link, Content } from "./styles";

function ServiceDescription(props) {
  const { title, description, link, color } = props;

  return (
    <Background>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Link color={color} href={link}>
          LEARN MORE
        </Link>
      </Content>
    </Background>
  );
}

export default ServiceDescription;
