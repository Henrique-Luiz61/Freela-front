import styled from "styled-components";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <PageContainer>
      <div>
        <h1>Freelancers disponíveis</h1>
      </div>

      <CardContainer>
        <img src="./src/assets/perfil.png" alt="user image" />

        <div>
          <h2>Henrique Luiz</h2>

          <ul>
            <li>Front-end</li>
            <li>Back-end</li>
            <li>Node</li>
            <li>Postgres</li>
          </ul>
        </div>
      </CardContainer>

      <CardContainer>
        <img src="./src/assets/perfil.png" alt="user image" />

        <div>
          <h2>Henrique Luiz</h2>

          <ul>
            <li>Front-end</li>
            <li>Back-end</li>
            <li>Node</li>
            <li>Postgres</li>
          </ul>
        </div>
      </CardContainer>

      <CardContainer>
        <img src="./src/assets/perfil.png" alt="user image" />

        <div>
          <h2>Henrique Luiz</h2>

          <ul>
            <li>Front-end</li>
            <li>Back-end</li>
            <li>Node</li>
            <li>Postgres</li>
          </ul>
        </div>
      </CardContainer>

      <Footer />
    </PageContainer>
  );
}

const PageContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  width: 90%;
  height: 15%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
  }

  li {
    color: white;
  }
`;
