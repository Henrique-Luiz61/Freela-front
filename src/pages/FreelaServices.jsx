import styled from "styled-components";
import Footer from "../components/Footer";
import { useEffect } from "react";
import axios from "axios";

export default function FreelaServices() {
  useEffect(() => {
    const promise = axios.get(`${import.meta.env.VITE_API_URL}/`);

    promise.then((res) => {
      console.log(res.data);
    });
    promise.catch((err) => {
      console.log(err.reponse.data);
      alert(err.reponse.data.message);
    });
  });

  return (
    <PageContainer>
      <div>
        <h1>Services available</h1>
      </div>

      <CardContainer>
        <img src="./src/assets/perfil.png" alt="user image" />

        <div>
          <h2>Service.title</h2>

          <p>
            Service description Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Accusamus sapiente
          </p>
        </div>
      </CardContainer>

      <CardContainer>
        <img src="./src/assets/perfil.png" alt="user image" />

        <div>
          <h2>Service.title</h2>

          <p>
            Service description Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Accusamus sapiente
          </p>
        </div>
      </CardContainer>

      <CardContainer>
        <img src="./src/assets/perfil.png" alt="user image" />

        <div>
          <h2>Service.title</h2>

          <p>
            Service description Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Accusamus sapiente
          </p>
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