import styled from "styled-components";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function FreelaServicesPage() {
  const [services, setServices] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const promise = axios.get(
      `${import.meta.env.VITE_API_URL}/services/available/${id}`
    );

    promise.then((res) => {
      console.log(res.data);
      setServices(res.data);
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

      {services === null ? (
        <h4>Loading...</h4>
      ) : (
        services.message && <h2>There are no freelancers registered yet </h2>
      )}

      <ContainerCards>
        {services !== null &&
          !services.message &&
          services.map((serv) => (
            <CardContainer key={serv.id}>
              <img src={serv.photo} alt="user image" />

              <div>
                <h2>{serv.title}</h2>

                <p>{serv.description}</p>
              </div>
            </CardContainer>
          ))}
      </ContainerCards>

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

const ContainerCards = styled.div`
  width: 90%;
  height: 80%;

  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
