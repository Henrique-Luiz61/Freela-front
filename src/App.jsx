import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import MyServicesPage from "./pages/MyServicesPage";
import AddServicePage from "./pages/AddServicePage";
import FreelaServicesPage from "./pages/FreelaServicesPage";
import AuthProvider from "./contexts/authContext";

export default function App() {
  return (
    <PagesContainerSC>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/myServices/:id" element={<MyServicesPage />} />
            <Route path="/addServices" element={<AddServicePage />} />
            <Route
              path="/services/available/:id"
              element={<FreelaServicesPage />}
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </PagesContainerSC>
  );
}

const PagesContainerSC = styled.main`
  background-color: #0e0e13;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
