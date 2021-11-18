import { Background, Title, Description } from "./styles";

function ImageCard(props) {
  const { backgroundImage, title, description, color, minHeight, width } =
    props;
  return (
    <Background
      backgroundImage={backgroundImage}
      minHeight={minHeight}
      width={width}
    >
      {title && <Title color={color}>{title}</Title>}
      {description && <Description color={color}>{description}</Description>}
    </Background>
  );
}

export default ImageCard;
