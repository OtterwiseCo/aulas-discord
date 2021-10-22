import { Wrapper, Content, Title } from "./styles";

function Header() {
  return (
    <Wrapper>
      <Content>
        <Title>WE ARE CREATIVES</Title>
        <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
          <g
            stroke="#FFF"
            strokeWidth="6"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 3v100M3 95.484l15 15 15-15" />
          </g>
        </svg>
      </Content>
    </Wrapper>
  );
}

export default Header;