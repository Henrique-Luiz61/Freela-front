import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

export default function AddServicePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");

  const navigate = useNavigate();

  function addService(e) {
    e.preventDefault();

    const newService = {
      title,
      description,
      photo,
    };

    const promise = axios.post(
      `${import.meta.env.VITE_API_URL}/addService`,
      newService
    );

    promise.then((res) => {
      console.log(res.data);
      navigate("/home");
    });
    promise.catch((err) => {
      console.log(err.response.data);
      alert(err.response.data.message);
    });
  }

  return (
    <PageContainerSC>
      <form onSubmit={addService}>
        <input
          placeholder="Service title"
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Description"
          type="text"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          placeholder="Photo"
          type="text"
          required
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <button type="submit">Add a service</button>
      </form>

      <Footer />
    </PageContainerSC>
  );
}

const PageContainerSC = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
