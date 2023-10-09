import styled from "styled-components";
import Footer from "../components/Footer";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import axios from "axios";

export default function MyServicesPage() {
  const [myServices, setMyServices] = useState(null);
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    const promise = axios.get(
      `${import.meta.env.VITE_API_URL}/services/${userId}`
    );

    promise.then((res) => {
      console.log(res.data);
      setMyServices(res.data);
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

      {myServices === null ? (
        <h4>Loading...</h4>
      ) : (
        myServices.message && <h2>There are no freelancers registered yet </h2>
      )}

      <ContainerCards>
        {myServices !== null &&
          !myServices.message &&
          myServices.map((serv) => (
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
