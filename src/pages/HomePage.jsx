import styled from "styled-components";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [freelas, setFreelas] = useState(null);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const promise = axios.get(`${import.meta.env.VITE_API_URL}/home`);

    promise.then((res) => {
      setFreelas(res.data);
    });
    promise.catch((err) => {
      console.log(err.reponse.data);
      alert(err.reponse.data.message);
    });
  }, []);

  return (
    <PageContainer>
      <div>
        <h1>Freelancers disponíveis</h1>
      </div>

      {freelas === null ? (
        <h4>Loading...</h4>
      ) : (
        freelas.message && <h2>There are no freelancers registered yet </h2>
      )}

      <ContainerCards>
        {freelas !== null &&
          !freelas.message &&
          freelas.map((freela) => (
            <Link key={freela.id} to={`/services/available/${freela.id}`}>
              <CardContainer>
                <img src={freela.photo} alt="user image" />

                <div>
                  <h2>{freela.name}</h2>

                  <ul>
                    <li>{freela.profession}</li>
                    <li>{freela.telephone}</li>
                    <li>{freela.city}</li>
                    <li>{freela.email}</li>
                  </ul>
                </div>
              </CardContainer>
            </Link>
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
  background-color: blue;
  width: 90%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;

  img {
    width: 20%;
    height: 60%;
  }

  li {
    color: white;
  }
`;
