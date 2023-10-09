import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <FooterContainer>
      <Link to="/myServices">
        <button>My services</button>
      </Link>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/addServices">
        <button>Add Service</button>
      </Link>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  background-color: #0000cd;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  position: fixed;
  right: 0;
  bottom: 0;
`;
